import { Link } from "react-router-dom";
import { Mail, Globe, MapPin, Instagram } from "lucide-react";
import logo from "@/assessts/logo2.png";

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 448 512" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

export function Footer() {
  return (
    <>
      <footer className="relative mt-16 md:mt-24 border-t border-[#D9D9D9] bg-white">
        {/* Purple accent top line */}
        <div
          aria-hidden
          className="absolute inset-x-0 -top-px h-0.5 bg-gradient-to-r from-transparent via-[#7B2C91]/50 to-transparent"
        />

        {/* Subtle geometric background */}
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#F0EBF4] opacity-50 blur-3xl" />
          <div className="absolute bottom-0 -left-20 h-60 w-60 rounded-full bg-[#F0EBF4] opacity-40 blur-3xl" />
        </div>

        <div className="relative container-px py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <img src={logo} alt="CHEMfix Logo" className="h-20 w-auto object-contain" />
              </div>
              <p className="text-sm text-[#6B6B72] leading-relaxed">
                High-performance construction chemicals, waterproofing, industrial flooring and road safety solutions — engineered since 2005.
              </p>
              {/* Purple accent bar */}
              <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#5B0E6E] to-[#7B2C91]" />
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase text-[#2F2F33]">Navigate</h4>
              <ul className="space-y-3 text-sm text-[#6B6B72]">
                {[
                  ["Home", "/"], ["About", "/about"], ["Products", "/products"],
                  ["Services", "/services"], ["Contact", "/contact"],
                ].map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="hover:text-[#5B0E6E] hover:translate-x-1 inline-block transition-all duration-300">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase text-[#2F2F33]">Office</h4>
              <ul className="space-y-4 text-sm text-[#6B6B72]">
                <li className="flex gap-2.5 group">
                  <MapPin className="h-4 w-4 text-[#7B2C91] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span><strong className="text-[#2F2F33] font-semibold">Pakistan</strong><br/>Shah-e-Faisal Colony, Karachi.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase text-[#2F2F33]">Contact & Social</h4>
              <ul className="space-y-3 text-sm text-[#6B6B72]">
                <li className="flex items-center gap-2.5 group">
                  <Mail className="h-4 w-4 text-[#7B2C91] group-hover:scale-110 transition-transform duration-300" />
                  <a href="mailto:info@chemfix.org" className="hover:text-[#5B0E6E] transition">info@chemfix.org</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <Mail className="h-4 w-4 text-[#7B2C91] group-hover:scale-110 transition-transform duration-300" />
                  <a href="mailto:chemfix@outlook.com" className="hover:text-[#5B0E6E] transition">chemfix@outlook.com</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <Globe className="h-4 w-4 text-[#7B2C91] group-hover:scale-110 transition-transform duration-300" />
                  <a href="https://www.chemfix.org" className="hover:text-[#5B0E6E] transition">www.chemfix.org</a>
                </li>
                <li className="flex items-center gap-2.5 group pt-3 mt-3 border-t border-[#D9D9D9]">
                  <Instagram className="h-4 w-4 text-[#7B2C91] group-hover:scale-110 transition-transform duration-300" />
                  <a href="https://www.instagram.com/chemfixconstruction?igsh=MXg0YXozaDhnY3M4eQ==" target="_blank" rel="noopener noreferrer" className="hover:text-[#5B0E6E] transition">Instagram</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#25D366] group-hover:scale-110 transition-transform duration-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.482-1.459-1.655-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <a href="https://whatsapp.com/channel/0029VbArZ1l9Gv7Pz6PiOr1V" target="_blank" rel="noopener noreferrer" className="hover:text-[#5B0E6E] transition">WhatsApp Channel</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#D9D9D9] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6B6B72]">
            <p>© {new Date().getFullYear()} CHEMfix Construction Chemicals. All rights reserved.</p>
            <p className="tracking-wide">Pakistan, Karachi Shah-re-Faisal</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/923332210554"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[99999] flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:brightness-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.65)]"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8 sm:h-9 sm:w-9" />
      </a>
    </>
  );
}
