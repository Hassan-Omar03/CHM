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

      {/* Capabilities / Services — Refined Premium Grid */}
      <section className="relative py-20 md:py-32 bg-[#F5F5F7] overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[50%] rounded-full bg-[#A45BB8]/10 blur-[120px]" />
          <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#7B2C91]/10 blur-[120px]" />
        </div>

        <div className="container-px relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <SectionHeading
              eyebrow="Capabilities"
              title="Comprehensive technical support"
              description="A full-service partner across the construction chemical lifecycle."
              align="center"
            />
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_-4px_rgba(191,192,194,0.3)] border border-[#D9D9D9] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-20">
              {services.map((s, i) => {
                const Icon = icons[i] ?? Headphones;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                    className={`group flex items-start gap-6 py-8 border-b border-[#D9D9D9]/70 transition-colors duration-300 hover:border-[#7B2C91]/50 ${
                      i === services.length - 1 ? 'border-b-0' : ''
                    } ${
                      i === services.length - 2 ? 'lg:border-b-0' : ''
                    }`}
                  >
                    {/* Icon Wrapper */}
                    <div className="shrink-0 relative h-14 w-14 rounded-2xl bg-[#F5F5F7] border border-[#D9D9D9] group-hover:border-[#7B2C91]/30 group-hover:bg-[#F0EBF4] flex items-center justify-center transition-all duration-500 shadow-sm">
                      <Icon className="h-6 w-6 text-[#7B2C91] group-hover:scale-110 group-hover:text-[#5B0E6E] transition-all duration-500" />
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-bold mb-2 text-[#2F2F33] group-hover:text-[#5B0E6E] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-[#6B6B72] text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow / Process — Alternating Vertical Timeline */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow="Process"
            title="A six-step delivery workflow"
            description="Every CHEMfix engagement follows a structured path — designed for transparency, accountability and engineering rigor."
            align="center"
          />

          <div className="relative max-w-4xl mx-auto mt-16 md:mt-24 pl-6 md:pl-0">
            {/* Central Vertical Line */}
            <div className="absolute left-[44px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7B2C91]/0 via-[#7B2C91]/40 to-[#7B2C91]/0 md:-translate-x-1/2" />

            {workflow.map((w, i) => (
              <motion.div
                key={w.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative flex items-center mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Spacer to push content to correct side on desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Timeline Center Marker */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 -translate-x-1/2 flex items-center justify-center rounded-full border-4 border-white bg-white shadow-[0_0_15px_rgba(123,44,145,0.2)] z-10">
                   <div className="w-full h-full rounded-full bg-gradient-to-br from-[#5B0E6E] to-[#7B2C91] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{w.step}</span>
                   </div>
                </div>

                {/* Timeline Card */}
                <div className={`w-full ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="bg-white p-6 md:p-8 rounded-2xl border border-[#D9D9D9] shadow-[0_4px_20px_-4px_rgba(191,192,194,0.2)] hover:shadow-[0_8px_30px_-4px_rgba(191,192,194,0.4)] hover:border-[#7B2C91]/40 transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Corner Accent Glow */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#F0EBF4] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <h4 className="font-display text-xl font-bold text-[#2F2F33] mb-3 relative z-10">{w.title}</h4>
                    <p className="text-[#6B6B72] text-sm leading-relaxed relative z-10">{w.desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
