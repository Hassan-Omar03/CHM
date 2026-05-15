import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

import heroImg from "@/assessts/hero-contact.jpg";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CHEMfix Construction Chemicals" },
      { name: "description", content: "Reach CHEMfix in the United Kingdom, Pakistan and Nigeria. Email info@chemfix.org or use the contact form for project inquiries." },
      { property: "og:title", content: "Contact CHEMfix Construction Chemicals" },
      { property: "og:description", content: "Get in touch for product specifications, site support and project inquiries." },      { property: "og:url", content: "https://www.chemfix.org/contact" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chemfix.org/contact" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "CHEMfix Construction Chemicals",
            "email": "info@chemfix.org",
            "url": "https://www.chemfix.org",
            "contactPoint": offices.map(o => ({
              "@type": "ContactPoint",
              "contactType": o.label,
              "areaServed": o.label.replace(" Office", ""),
              "availableLanguage": "English"
            }))
          }
        })
      }
    ]
  }),
  component: ContactPage,
});

const offices = [
  {
    label: "Pakistan Office",
    lines: ["Office #10, Muhammadi Centre,", "Saleem Housing Project,", "Shah Faisal Colony No. 3, Karachi."],
  },
  {
    label: "UK Office",
    lines: ["82 Great Eastern Street,", "London EC2A 3JF, UK"],
  },
  {
    label: "Nigeria Office",
    lines: ["3 Adegbola Street,", "Ikeja Lagos, Nigeria"],
  },
];

function Field({
  id, label, type = "text", as = "input", required, value, onChange,
}: {
  id: string; label: string; type?: string; as?: "input" | "textarea";
  required?: boolean; value: string; onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0;
  const float = focused || filled;
  const Tag = as as "input";
  const sharedProps = {
    id, value, required,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className:
      "peer w-full bg-transparent px-4 pt-6 pb-2 text-foreground outline-none rounded-xl border border-border focus:border-primary-glow/60 focus:purple-glow transition-all",
  };
  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea {...sharedProps} rows={5} />
      ) : (
        <Tag {...sharedProps} type={type} />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          float ? "top-1.5 text-[10px] tracking-[0.2em] uppercase text-primary-glow" : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}{required && " *"}
      </label>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", website: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", website: "", message: "" });
  };

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Get in Touch"
        title={<>Contact CHEMfix<br/>Construction Chemicals</>}
        subtitle="Speak with our technical team about products, specifications and on-site support across the UK, Pakistan and Nigeria."
      />

      <section className="py-24 container-px">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass border-glow p-7">
              <h3 className="font-display text-lg font-semibold mb-5 flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-glow" /> Email & Web
              </h3>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:info@chemfix.org" className="text-muted-foreground hover:text-primary-glow transition">info@chemfix.org</a></li>
                <li><a href="mailto:chemfix@outlook.com" className="text-muted-foreground hover:text-primary-glow transition">chemfix@outlook.com</a></li>
                <li className="flex items-center gap-2 pt-2 border-t border-border">
                  <Globe className="h-4 w-4 text-primary-glow" />
                  <a href="https://www.chemfix.org" className="text-muted-foreground hover:text-primary-glow transition">www.chemfix.org</a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 xl:gap-6">
              {offices.map((o, i) => (
                <motion.div
                  key={o.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl glass p-6 hover:border-primary-glow/40 transition group"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow grid place-items-center purple-glow shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs tracking-[0.2em] uppercase text-primary-glow font-semibold mb-1">{o.label}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        {o.lines.map((l) => <div key={l}>{l}</div>)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={onSubmit}
              className="relative rounded-3xl glass-strong border-glow p-6 sm:p-8 md:p-12 overflow-hidden"
            >
              <div aria-hidden className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[var(--gradient-purple-soft)] opacity-60" />

              <div className="relative">
                <h2 className="font-display text-2xl sm:text-3xl xl:text-4xl font-bold text-gradient mb-2">Send us a message</h2>
                <p className="text-sm text-muted-foreground mb-8">We'll respond within one business day.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6">
                  <Field id="name" label="Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field id="email" label="Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                </div>
                <div className="mt-4">
                  <Field id="website" label="Website" type="url" value={form.website} onChange={(v) => setForm({ ...form, website: v })} />
                </div>
                <div className="mt-4">
                  <Field id="message" as="textarea" label="Message" required value={form.message} onChange={(v) => setForm({ ...form, message: v })} />
                </div>

                <div className="mt-7 flex items-center justify-between flex-wrap gap-4">
                  <p className="text-xs text-muted-foreground">By submitting you agree to be contacted by CHEMfix.</p>
                  <button
                    type="submit"
                    disabled={sent}
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-7 py-3.5 text-sm font-semibold text-white purple-glow hover:purple-glow-strong transition-all hover:scale-[1.03] disabled:opacity-70"
                  >
                    {sent ? (<><CheckCircle2 className="h-4 w-4" /> Message Sent</>) : (<>Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>)}
                  </button>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
