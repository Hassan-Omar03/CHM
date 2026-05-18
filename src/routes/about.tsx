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

      {/* Who We Are — white */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Who We Are"
                title="UK-owned, internationally engineered."
              />
            </div>
            <div className="lg:col-span-7 space-y-5 text-base md:text-lg text-[#6B6B72] leading-relaxed">
              <p>CHEMfix Construction Chemicals is a UK-owned company operating in Pakistan and Nigeria with expertise in construction chemicals and industrial protection systems.</p>
              <p>The company provides comprehensive solutions for residential, commercial, industrial and infrastructure projects.</p>
              <p>CHEMfix products are designed to improve structural durability, waterproofing performance, industrial flooring quality and long-term protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision — light grey */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]">
        <div className="container-px">
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
                className="relative overflow-hidden rounded-3xl bg-white border border-[#D9D9D9] p-10 md:p-12 group hover:border-[#7B2C91]/40 transition-all card-shadow hover:card-shadow-hover"
              >
                {/* Subtle purple corner accent */}
                <div aria-hidden className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#F0EBF4] opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#5B0E6E] to-[#7B2C91] grid place-items-center purple-glow mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-gradient">{t}</h3>
                  <p className="text-base md:text-lg text-[#6B6B72] leading-relaxed">{d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Reach — white */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-px">
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
                className="rounded-2xl bg-[#F5F5F7] border border-[#D9D9D9] p-8 hover:border-[#7B2C91]/40 hover:bg-[#F0EBF4] transition group card-shadow"
              >
                <Globe2 className="h-6 w-6 text-[#7B2C91] mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B2C91] mb-2">{o.note}</div>
                <div className="font-display text-xl font-semibold mb-1 text-[#2F2F33]">{o.city}</div>
                <div className="text-sm text-[#6B6B72] leading-relaxed">{o.country}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Decades — purple CTA banner */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]">
        <div className="container-px">
          <div className="rounded-3xl bg-gradient-to-br from-[#5B0E6E] to-[#7B2C91] p-8 sm:p-10 md:p-16 grid lg:grid-cols-2 gap-10 xl:gap-16 items-center relative overflow-hidden">
            <div aria-hidden className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/5" />
            <div aria-hidden className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/5" />
            <div className="relative">
              <Award className="h-10 w-10 text-white/70 mb-5" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Two decades of engineered protection.
              </h2>
            </div>
            <p className="relative text-base md:text-lg text-white/80 leading-relaxed">
              Since 2005, CHEMfix has supported residential, commercial, industrial and infrastructure projects with chemicals built to perform — combining laboratory rigor with practical field knowledge.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
