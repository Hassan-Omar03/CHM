import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Microscope, ShieldCheck, Layers, Beaker, FlaskConical, ChevronLeft, ChevronRight } from "lucide-react";
import { productCategories } from "@/components/site/data";
import { SectionHeading } from "@/components/site/SectionHeading";
import heroImg from "@/assessts/hero.png";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function HomePage() {
  // --- Carousel State for Product Range ---
  const itemsPerPage = 3;
  const totalPages = Math.max(1, Math.ceil((productCategories?.length || 0) / itemsPerPage));
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <>
      {/* HERO — bright overlay, professional feel */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <img
            src={heroImg}
            alt="Engineering and Construction"
            aria-hidden
            loading="eager"
            fetchPriority="high"
            className="sr-only"
          />
        </div>
        {/* Bright, airy overlay — not dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

        {/* Subtle purple diagonal accent at bottom */}
        <div aria-hidden className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5B0E6E] via-[#7B2C91] to-transparent" />

        <div className="relative container-px w-full pt-32 pb-20">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
             
            >
              
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-white drop-shadow-lg"
            >
              Advanced Construction<br/>Chemical Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-6 sm:mt-8 max-w-2xl text-lg text-white/85 leading-relaxed"
            >
              Delivering high-performance construction chemicals, waterproofing systems, industrial flooring, concrete repair technologies and road safety solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5B0E6E] to-[#7B2C91] px-7 py-3.5 text-sm font-semibold text-white purple-glow hover:purple-glow-strong transition-all hover:scale-[1.03]"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/25 transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/60"
          >
            <span>Scroll</span>
              <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT INTRO — white background */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="container-px">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SectionHeading
              eyebrow="About CHEMfix"
              title={<>Building stronger structures<br/>through innovation.</>}
            />
            <div className="space-y-5 text-base md:text-lg text-[#6B6B72] leading-relaxed">
              <p>CHEMfix Construction Chemicals was established in 2005 by experienced construction chemical manufacturers and suppliers.</p>
              <p>The company was founded with the objective of delivering reliable, innovative and high-quality construction chemical solutions based on modern engineering technologies.</p>
              <p>CHEMfix provides products designed to save time, reduce cost, improve durability and increase structural protection for all types of construction projects.</p>
            </div>
          </div>

          {/* Stats grid — light grey cards */}
          <div className="mt-10 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: 20, s: "+", l: "Years Experience" },
              { v: 500, s: "+", l: "Projects Delivered" },
              { v: 100, s: "+", l: "Product Solutions" },
              { v: 3, s: "", l: "International Offices" },
            ].map((c) => (
              <div
                key={c.l}
                className="bg-[#F5F5F7] border border-[#D9D9D9] rounded-2xl p-6 sm:p-8 md:p-10 hover:border-[#7B2C91]/40 hover:bg-[#F0EBF4] transition group card-shadow"
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
                  <Counter to={c.v} suffix={c.s} />
                </div>
                <div className="mt-2 text-xs tracking-[0.2em] uppercase text-[#6B6B72] group-hover:text-[#7B2C91] transition">{c.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW TECHNOLOGIES — light grey diagonal section */}
      <section className="relative py-20 md:py-32 bg-[#F5F5F7]">
        {/* Diagonal top edge */}
        <div aria-hidden className="absolute top-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }} />

        <div className="container-px">
          <SectionHeading
            eyebrow="Innovation"
            title="New Technologies"
            description="CHEMfix develops road marking products and road safety materials designed to deliver durability, visibility and long-lasting performance under demanding environmental conditions."
          />

          <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {[
              { Icon: Beaker, t: "Advanced Formulations", d: "Modern polymer chemistry tuned for tropical, marine and heavy-industrial environments." },
              { Icon: ShieldCheck, t: "Long-Life Performance", d: "Coatings and sealants engineered for extended service life under chemical and UV exposure." },
              { Icon: Layers, t: "Multi-System Solutions", d: "Integrated product systems for waterproofing, flooring, repair and protection." },
            ].map(({ Icon, t, d }, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3, y: -8 }}
                style={{ perspective: 1000 }}
                className="relative rounded-2xl bg-white border border-[#D9D9D9] p-8 hover:border-[#7B2C91]/40 transition group card-shadow hover:card-shadow-hover"
              >
                {/* Purple top accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-transparent via-[#7B2C91]/30 to-transparent" />
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#5B0E6E] to-[#7B2C91] grid place-items-center mb-5 purple-glow group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-[#2F2F33] group-hover:text-[#5B0E6E] transition">{t}</h3>
                <p className="text-sm text-[#6B6B72] leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH EXPERTS — white */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Research"
                title="Research Experts"
              />
              <div className="mt-6 space-y-5 text-base md:text-lg text-[#6B6B72] leading-relaxed">
                <p>CHEMfix has developed expert systems and modern production methods that combine technical knowledge, engineering expertise and advanced formulation technologies.</p>
                <p>The company continuously improves product quality through innovation, testing and practical field experience.</p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6">
              {[
                { Icon: Microscope, t: "R&D Laboratories", d: "In-house formulation and testing." },
                { Icon: FlaskConical, t: "Quality Control", d: "Batch-level performance verification." },
                { Icon: Layers, t: "Field Engineering", d: "Practical, jobsite-tested solutions." },
                { Icon: ShieldCheck, t: "Compliance", d: "International standards & specifications." },
              ].map(({ Icon, t, d }, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.04, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-xl bg-[#F5F5F7] border border-[#D9D9D9] p-6 hover:border-[#7B2C91]/40 hover:bg-[#F0EBF4] transition card-shadow"
                >
                  <Icon className="h-6 w-6 text-[#7B2C91] mb-3" />
                  <h4 className="font-display text-lg font-semibold mb-2 text-[#2F2F33]">{t}</h4>
                  <p className="text-sm text-[#6B6B72] leading-relaxed">{d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW — light grey */}
      <section className="relative py-16 md:py-24 bg-[#F5F5F7]">
        <div className="container-px">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
            <SectionHeading
              eyebrow="Product Range"
              title="High-performance construction products"
              description="Comprehensive systems engineered for residential, commercial, industrial and infrastructure projects."
            />
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#5B0E6E] hover:gap-3 transition-all"
            >
              View all categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative pt-4 pb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
              >
                {productCategories.slice(page * itemsPerPage, (page + 1) * itemsPerPage).map((p, i) => (
                  <motion.article
                    key={p.slug}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative overflow-hidden rounded-2xl border border-[#D9D9D9] bg-white hover:border-[#7B2C91]/50 transition-all card-shadow hover:card-shadow-hover"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading={i < 3 ? "eager" : "lazy"}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#5B0E6E]/0 to-[#5B0E6E]/0 group-hover:from-[#5B0E6E]/15 group-hover:to-transparent transition-all duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold mb-3 text-[#2F2F33] group-hover:text-[#5B0E6E] transition">{p.title}</h3>
                      <p className="text-sm text-[#6B6B72] leading-relaxed line-clamp-2 mb-5">{p.description}</p>
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-[#7B2C91] hover:gap-2.5 transition-all"
                      >
                        Learn more <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls & Progress */}
            {totalPages > 1 && (
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="w-full sm:max-w-md h-1.5 bg-[#D9D9D9] rounded-full overflow-hidden relative">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#5B0E6E] to-[#7B2C91]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((page + 1) / totalPages) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setPage(p => (p - 1 + totalPages) % totalPages)}
                    className="p-3 rounded-full border border-[#D9D9D9] text-[#2F2F33] hover:border-[#7B2C91] hover:text-[#7B2C91] hover:bg-[#F0EBF4] transition"
                    aria-label="Previous products"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setPage(p => (p + 1) % totalPages)}
                    className="p-3 rounded-full border border-[#D9D9D9] text-[#2F2F33] hover:border-[#7B2C91] hover:text-[#7B2C91] hover:bg-[#F0EBF4] transition"
                    aria-label="Next products"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA — purple gradient section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="container-px">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#5B0E6E] to-[#7B2C91] p-8 sm:p-10 md:p-16 text-center">
            {/* Geometric shapes */}
            <motion.div aria-hidden animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <motion.div aria-hidden animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div aria-hidden className="absolute -top-16 -right-16 h-64 w-64 rounded-full border border-white/10" />
            <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-white/20" />

            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
                Engineering durability into every project.
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-base md:text-lg text-white/80 leading-relaxed">
                Talk to our technical team about specifications, site visits and product systems.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#5B0E6E] shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition hover:scale-[1.03]"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
