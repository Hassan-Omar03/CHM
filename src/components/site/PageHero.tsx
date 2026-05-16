import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  image, eyebrow, title, subtitle, children,
}: {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-32 pb-20">
      <img
        src={image}
        alt=""
        aria-hidden
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div
        aria-hidden
        className="absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-[var(--gradient-purple-soft)] opacity-40 blur-[120px] animate-glow-pulse"
      />
      <div
        aria-hidden
        className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--gradient-purple-soft)] opacity-40 blur-[120px] animate-glow-pulse [animation-delay:-2s]"
      />

      <div className="relative container-px w-full">
        <div className="max-w-4xl">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-primary-glow mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow purple-glow" />
              {eyebrow}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-gradient"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 sm:mt-6 max-w-2xl text-lg text-foreground/90 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
