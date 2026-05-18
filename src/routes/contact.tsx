import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { toast } from "sonner";

import heroImg from "@/assessts/contact-page.png";

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
      "peer w-full bg-[#F5F5F7] px-4 pt-6 pb-2 text-[#2F2F33] outline-none rounded-xl border border-[#D9D9D9] focus:border-[#7B2C91]/60 focus:bg-white focus:shadow-[0_0_0_3px_rgba(123,44,145,0.08)] transition-all",
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
          float ? "top-1.5 text-[10px] tracking-[0.2em] uppercase text-[#7B2C91]" : "top-4 text-sm text-[#6B6B72]"
        }`}
      >
        {label}{required && " *"}
      </label>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", website: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please complete all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_chemfix_prod",
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_contact_form",
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "chemfix_public_key_987",
          template_params: {
            to_email: "info@chemfix.org,chemfix@outlook.com",
            from_name: form.name,
            from_email: form.email,
            reply_to: form.email,
            website: form.website || "No website provided",
            message: form.message,
          },
        }),
      });

      if (!response.ok) throw new Error("Network Error");

      setSent(true);
      toast.success("Message sent successfully! We will get back to you shortly.");
      setForm({ name: "", email: "", website: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      toast.error("Failed to send message. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Get in Touch"
        title={<>Contact CHEMfix<br/>Construction Chemicals</>}
        subtitle="Speak with our technical team about products, specifications and on-site support across the UK, Pakistan and Nigeria."
      />

      <section className="py-16 md:py-24 bg-[#F5F5F7]">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* DETAILS */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-white border border-[#D9D9D9] p-7 card-shadow">
                <h3 className="font-display text-xl font-semibold mb-5 flex items-center gap-2 text-[#2F2F33]">
                  <Mail className="h-4 w-4 text-[#7B2C91]" /> Email & Web
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="mailto:info@chemfix.org" className="text-[#6B6B72] hover:text-[#5B0E6E] transition">info@chemfix.org</a></li>
                  <li><a href="mailto:chemfix@outlook.com" className="text-[#6B6B72] hover:text-[#5B0E6E] transition">chemfix@outlook.com</a></li>
                  <li className="flex items-center gap-2 pt-2 border-t border-[#D9D9D9]">
                    <Globe className="h-4 w-4 text-[#7B2C91]" />
                    <a href="https://www.chemfix.org" className="text-[#6B6B72] hover:text-[#5B0E6E] transition">www.chemfix.org</a>
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
                    className="rounded-2xl bg-white border border-[#D9D9D9] p-6 hover:border-[#7B2C91]/40 transition group card-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#5B0E6E] to-[#7B2C91] grid place-items-center purple-glow shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs tracking-[0.25em] uppercase text-[#7B2C91] font-semibold mb-2">{o.label}</div>
                        <div className="text-sm text-[#6B6B72] leading-relaxed">
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
                className="relative rounded-3xl bg-white border border-[#D9D9D9] p-6 sm:p-8 md:p-12 overflow-hidden card-shadow"
              >
                {/* Subtle purple corner accent */}
                <div aria-hidden className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#F0EBF4] opacity-70" />
                <div aria-hidden className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-[#5B0E6E] to-[#7B2C91]" />

                <div className="relative">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-3">Send us a message</h2>
                  <p className="text-base text-[#6B6B72] leading-relaxed mb-8">We'll respond within one business day.</p>

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
                    <p className="text-xs text-[#6B6B72]">By submitting you agree to be contacted by CHEMfix.</p>
                    <button
                      type="submit"
                      disabled={sent || isSubmitting}
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5B0E6E] to-[#7B2C91] px-7 py-3.5 text-sm font-semibold text-white purple-glow hover:purple-glow-strong transition-all hover:scale-[1.03] disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                      ) : sent ? (
                        <><CheckCircle2 className="h-4 w-4" /> Message Sent</>
                      ) : (
                        <>Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>
                      )}
                    </button>
                  </div>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
