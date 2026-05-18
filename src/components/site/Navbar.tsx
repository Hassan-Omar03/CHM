import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assessts/image.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-px">
        <div
          className={`mx-auto flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border border-[#D9D9D9] px-4 md:px-6 py-2 sm:py-3 max-w-6xl shadow-[0_8px_30px_-4px_rgba(191,192,194,0.3)]"
              : "px-2 md:px-4 py-2 sm:py-3 max-w-7xl"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logo} alt="CHEMfix Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    scrolled
                      ? active
                        ? "text-[#5B0E6E] bg-[#5B0E6E]/10"
                        : "text-[#2F2F33] hover:text-[#5B0E6E] hover:bg-[#5B0E6E]/5"
                      : active
                      ? "text-white bg-white/15"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5B0E6E] to-[#7B2C91] px-5 py-2.5 text-sm font-semibold text-white purple-glow hover:purple-glow-strong transition-all hover:scale-[1.03]"
            >
              Get a Quote
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden rounded-lg p-2 transition ${
              scrolled ? "text-[#2F2F33] hover:bg-[#D9D9D9]/50" : "text-white hover:bg-white/10"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden container-px mt-2"
          >
            <div className={`backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-1 ${
              scrolled ? "bg-white/95 border border-[#D9D9D9] shadow-lg" : "bg-white/10 border border-white/20"
            }`}>
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      scrolled ? "text-[#2F2F33] hover:text-[#5B0E6E] hover:bg-[#5B0E6E]/5" : "text-white hover:bg-white/10"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5B0E6E] to-[#7B2C91] px-5 py-3 text-sm font-semibold text-white purple-glow"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
