import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Microscope, ShieldCheck, Layers, Beaker, FlaskConical } from "lucide-react";
import { productCategories } from "@/components/site/data";
import { SectionHeading } from "@/components/site/SectionHeading";
import heroImg from "@/assessts/home-page.png";

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
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Engineering and Construction"
          aria-hidden
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div aria-hidden className="absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full bg-[var(--gradient-purple-soft)] opacity-40 blur-[120px] animate-glow-pulse" />
        <div aria-hidden className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[var(--gradient-purple-soft)] opacity-40 blur-[120px] animate-glow-pulse [animation-delay:-2s]" />

        <div className="relative container-px w-full pt-32 pb-20">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-primary-glow mb-7"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Engineered since 2005 · UK · Pakistan · Nigeria
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-gradient"
            >
              Advanced Construction<br/>Chemical Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-6 sm:mt-8 max-w-2xl text-lg text-foreground/90 leading-relaxed"
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
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-7 py-3.5 text-sm font-semibold text-white purple-glow hover:purple-glow-strong transition-all hover:scale-[1.03]"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10 hover:border-primary-glow/40 transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
          >
            <span>Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-primary-glow/80 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="relative py-16 md:py-24 container-px">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <SectionHeading
            eyebrow="About CHEMfix"
            title={<>Building stronger structures<br/>through innovation.</>}
          />
          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>CHEMfix Construction Chemicals was established in 2005 by experienced construction chemical manufacturers and suppliers.</p>
            <p>The company was founded with the objective of delivering reliable, innovative and high-quality construction chemical solutions based on modern engineering technologies.</p>
            <p>CHEMfix provides products designed to save time, reduce cost, improve durability and increase structural protection for all types of construction projects.</p>
          </div>
        </div>

        <div className="mt-10 md:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-border/60 border border-border">
          {[
            { v: 20, s: "+", l: "Years Experience" },
            { v: 500, s: "+", l: "Projects Delivered" },
            { v: 100, s: "+", l: "Product Solutions" },
            { v: 3, s: "", l: "International Offices" },
          ].map((c) => (
            <div key={c.l} className="bg-[oklch(0.15_0.005_285)] p-6 sm:p-8 md:p-10 hover:bg-[oklch(0.18_0.008_285)] transition group">
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
                <Counter to={c.v} suffix={c.s} />
              </div>
              <div className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-primary-glow transition">{c.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW TECHNOLOGIES */}
      <section className="relative py-16 md:py-24">
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
                className="relative rounded-2xl glass border-glow p-8 hover:bg-white/[0.06] transition group"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center mb-5 purple-glow group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH EXPERTS */}
      <section className="relative py-16 md:py-24">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Research"
                title="Research Experts"
              />
              <div className="mt-6 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
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
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-xl glass p-6 hover:border-primary-glow/40 transition"
                >
                  <Icon className="h-6 w-6 text-primary-glow mb-3" />
                  <h4 className="font-display text-lg font-semibold mb-2">{t}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="relative py-16 md:py-24">
        <div className="container-px">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
            <SectionHeading
              eyebrow="Product Range"
              title="High-performance construction products"
              description="Comprehensive systems engineered for residential, commercial, industrial and infrastructure projects."
            />
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-glow hover:gap-3 transition-all"
            >
              View all categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {productCategories.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface hover:border-primary-glow/50 transition-all hover:purple-glow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading={i < 3 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:to-transparent transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary-glow transition">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-5">{p.description}</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-primary-glow hover:gap-2.5 transition-all"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24">
        <div className="container-px">
          <div className="relative overflow-hidden rounded-3xl glass-strong border-glow p-8 sm:p-10 md:p-16 text-center">
            <div aria-hidden className="absolute inset-0 bg-[var(--gradient-purple-soft)] opacity-40" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient max-w-4xl mx-auto leading-tight">
                Engineering durability into every project.
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-base md:text-lg text-foreground/90 leading-relaxed">
                Talk to our technical team about specifications, site visits and product systems.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-7 py-3.5 text-sm font-semibold text-white purple-glow hover:purple-glow-strong transition hover:scale-[1.03]"
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
