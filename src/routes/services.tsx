import { motion } from "framer-motion";
import {
  Headphones, Droplets, Hammer, Layers3, ShieldCheck, Construction, MapPin, LifeBuoy,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services, workflow } from "@/components/site/data";
import heroImg from "@/assessts/service-page.png";

const icons = [Headphones, Droplets, Hammer, Layers3, ShieldCheck, Construction, MapPin, LifeBuoy];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="What We Do"
        title={<>Professional<br/>Technical Services</>}
        subtitle="From specification to site supervision — CHEMfix engineers stand alongside contractors and consultants on every project."
      />

      {/* Services Grid — white */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-px">
          <SectionHeading
            eyebrow="Capabilities"
            title="Comprehensive technical support"
            description="A full-service partner across the construction chemical lifecycle."
          />

          <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-8">
            {services.map((s, i) => {
              const Icon = icons[i] ?? Headphones;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                  className="group relative rounded-2xl bg-[#F5F5F7] border border-[#D9D9D9] p-7 hover:bg-white hover:border-[#7B2C91]/40 transition-all card-shadow hover:card-shadow-hover"
                >
                  {/* Purple top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-[#5B0E6E]/0 via-[#7B2C91]/0 to-[#5B0E6E]/0 group-hover:from-[#5B0E6E]/40 group-hover:via-[#7B2C91]/60 group-hover:to-[#5B0E6E]/40 transition-all duration-500" />
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#5B0E6E] to-[#7B2C91] grid place-items-center mb-5 purple-glow group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-display text-base font-semibold mb-2 leading-tight text-[#2F2F33] group-hover:text-[#5B0E6E] transition">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#6B6B72] leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow — light grey */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]">
        <div className="container-px">
          <SectionHeading
            eyebrow="Process"
            title="A six-step delivery workflow"
            description="Every CHEMfix engagement follows a structured path — designed for transparency, accountability and engineering rigor."
            align="center"
          />

          <div className="mt-10 md:mt-16 relative">
            {/* Connector line */}
            <div aria-hidden className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2C91]/30 to-transparent" />
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
                  <div className="relative h-12 w-12 mx-auto rounded-full bg-gradient-to-br from-[#5B0E6E] to-[#7B2C91] grid place-items-center purple-glow mb-5 z-10">
                    <span className="font-display text-sm font-bold text-white">{w.step}</span>
                  </div>
                  <div className="rounded-xl bg-white border border-[#D9D9D9] p-5 text-center hover:border-[#7B2C91]/40 transition card-shadow">
                    <h4 className="font-display font-semibold mb-2 text-[#2F2F33]">{w.title}</h4>
                    <p className="text-xs text-[#6B6B72] leading-relaxed">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
