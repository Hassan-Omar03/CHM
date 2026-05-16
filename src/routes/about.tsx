import { motion } from "framer-motion";
import { Target, Eye, Globe2, Award } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import heroImg from "@/assessts/about-page.png";

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="About Us"
        title={<>Building Stronger Structures<br/>Through Innovation</>}
        subtitle="A UK-owned construction chemical company combining engineering excellence with on-the-ground expertise across three continents."
      />

      <section className="py-16 md:py-24 container-px">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Who We Are"
              title="UK-owned, internationally engineered."
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>CHEMfix Construction Chemicals is a UK-owned company operating in Pakistan and Nigeria with expertise in construction chemicals and industrial protection systems.</p>
            <p>The company provides comprehensive solutions for residential, commercial, industrial and infrastructure projects.</p>
            <p>CHEMfix products are designed to improve structural durability, waterproofing performance, industrial flooring quality and long-term protection.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 container-px">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10">
          {[
            { Icon: Target, t: "Our Mission", d: "Our mission is to deliver reliable and innovative construction chemical technologies that improve safety, durability and construction performance." },
            { Icon: Eye, t: "Our Vision", d: "To become a trusted international leader in advanced construction chemical solutions and infrastructure protection technologies." },
          ].map(({ Icon, t, d }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative overflow-hidden rounded-3xl glass-strong border-glow p-10 md:p-12 group hover:purple-glow transition-all"
            >
              <div aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--gradient-purple-soft)] opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center purple-glow mb-6">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-gradient">{t}</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 container-px">
        <SectionHeading
          eyebrow="Our Reach"
          title="Three continents. One standard of excellence."
          description="From London to Karachi to Lagos, CHEMfix delivers consistent product quality and engineering support."
          align="center"
        />

        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-8">
          {[
            { city: "London", country: "United Kingdom", note: "Headquarters & Strategy" },
            { city: "Karachi", country: "Pakistan", note: "Manufacturing & Operations" },
            { city: "Lagos", country: "Nigeria", note: "Africa Distribution" },
          ].map((o, i) => (
            <motion.div
              key={o.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl glass border-glow p-8 hover:bg-white/[0.06] transition group"
            >
              <Globe2 className="h-6 w-6 text-primary-glow mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-semibold tracking-[0.25em] uppercase text-primary-glow mb-2">{o.note}</div>
              <div className="font-display text-xl font-semibold mb-1">{o.city}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{o.country}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 container-px">
        <div className="rounded-3xl bg-gradient-to-br from-surface to-[oklch(0.11_0.005_285)] border border-border p-8 sm:p-10 md:p-16 grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          <div>
            <Award className="h-10 w-10 text-primary-glow mb-5" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient leading-tight">
              Two decades of engineered protection.
            </h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Since 2005, CHEMfix has supported residential, commercial, industrial and infrastructure projects with chemicals built to perform — combining laboratory rigor with practical field knowledge.
          </p>
        </div>
      </section>
    </>
  );
}
