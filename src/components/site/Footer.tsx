import { Link } from "react-router-dom";
import { FlaskConical, Mail, Globe, MapPin } from "lucide-react";
import logo from "@/assessts/image.png";

export function Footer() {
  return (
    <footer className="relative mt-16 md:mt-24 border-t border-border/60 bg-[oklch(0.11_0.005_285)]">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary-glow/60 to-transparent"
      />
      <div className="container-px py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src={logo} alt="CHEMfix Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              High-performance construction chemicals, waterproofing, industrial flooring and road safety solutions — engineered since 2005.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase text-foreground/80">Navigate</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                ["Home", "/"], ["About", "/about"], ["Products", "/products"],
                ["Services", "/services"], ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-primary-glow hover:translate-x-1 inline-block transition-all duration-300">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase text-foreground/80">Offices</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-2.5 group">
                <MapPin className="h-4 w-4 text-primary-glow shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span><strong className="text-foreground/90 font-semibold">Pakistan</strong><br/>Office #10, Muhammadi Centre, Saleem Housing Project, Shah Faisal Colony No. 3, Karachi.</span>
              </li>
              <li className="flex gap-2.5 group">
                <MapPin className="h-4 w-4 text-primary-glow shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span><strong className="text-foreground/90 font-semibold">United Kingdom</strong><br/>82 Great Eastern Street, London EC2A 3JF, UK</span>
              </li>
              <li className="flex gap-2.5 group">
                <MapPin className="h-4 w-4 text-primary-glow shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span><strong className="text-foreground/90 font-semibold">Nigeria</strong><br/>3 Adegbola Street, Ikeja Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase text-foreground/80">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5 group">
                <Mail className="h-4 w-4 text-primary-glow group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:info@chemfix.org" className="hover:text-primary-glow transition">info@chemfix.org</a>
              </li>
              <li className="flex items-center gap-2.5 group">
                <Mail className="h-4 w-4 text-primary-glow group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:chemfix@outlook.com" className="hover:text-primary-glow transition">chemfix@outlook.com</a>
              </li>
              <li className="flex items-center gap-2.5 group">
                <Globe className="h-4 w-4 text-primary-glow group-hover:scale-110 transition-transform duration-300" />
                <a href="https://www.chemfix.org" className="hover:text-primary-glow transition">www.chemfix.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CHEMfix Construction Chemicals. All rights reserved.</p>
          <p className="tracking-wide">UK · Pakistan · Nigeria — established 2005</p>
        </div>
      </div>
    </footer>
  );
}
