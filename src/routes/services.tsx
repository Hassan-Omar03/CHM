import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Headphones, Droplets, Hammer, Layers3, ShieldCheck, Construction, MapPin, LifeBuoy,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services, workflow } from "@/components/site/data";
import heroImg from "@/assessts/hero-services.jpg";

const icons = [Headphones, Droplets, Hammer, Layers3, ShieldCheck, Construction, MapPin, LifeBuoy];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — CHEMfix Construction Chemicals" },
      { name: "description", content: "Construction chemical consultation, waterproofing, concrete repair, industrial flooring, coatings, road marking and on-site technical assistance." },
      { property: "og:title", content: "Professional Technical Services — CHEMfix" },
      { property: "og:description", content: "End-to-end technical support from specification to final delivery." },
      { property: "og:url", content: "https://www.chemfix.org/services" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chemfix.org/services" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "CHEMfix Technical Services",
          "provider": {
            "@type": "Organization",
            "name": "CHEMfix Construction Chemicals",
            "url": "https://www.chemfix.org"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Construction Chemical Services",
            "itemListElement": services.map((s, i) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": s.title,
                "description": s.desc
              }
            }))
          }
        })
      }
    ]
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="What We Do"
        title={<>Professional<br/>Technical Services</>}
        subtitle="From specification to site supervision — CHEMfix engineers stand alongside contractors and consultants on every project."
      />

      <section className="py-28 container-px">
        <SectionHeading
          eyebrow="Capabilities"
          title="Comprehensive technical support"
          description="A full-service partner across the construction chemical lifecycle."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-8">
          {services.map((s, i) => {
            const Icon = icons[i] ?? Headphones;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group relative rounded-2xl glass border-glow p-7 hover:bg-white/[0.06] hover:purple-glow transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center mb-5 purple-glow group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-base font-semibold mb-2 leading-tight group-hover:text-primary-glow transition">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-28 container-px">
        <SectionHeading
          eyebrow="Process"
          title="A six-step delivery workflow"
          description="Every CHEMfix engagement follows a structured path — designed for transparency, accountability and engineering rigor."
          align="center"
        />

        <div className="mt-20 relative">
          <div aria-hidden className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-glow/40 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 xl:gap-8">
            {workflow.map((w, i) => (
              <motion.div
                key={w.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative h-12 w-12 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center purple-glow mb-5 z-10">
                  <span className="font-display text-sm font-bold text-white">{w.step}</span>
                </div>
                <div className="rounded-xl glass p-5 text-center hover:border-primary-glow/40 transition">
                  <h4 className="font-display font-semibold mb-2">{w.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
