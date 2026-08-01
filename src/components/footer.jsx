import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const socials = [
  { label: "IG", name: "Instagram", href: "#" },
  { label: "in", name: "LinkedIn", href: "#" },
  { label: "YT", name: "YouTube — Blueprint Zero", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brandBlack text-white pt-16 pb-8">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-heading font-bold text-lg mb-4">
              <span className="w-9 h-9 rounded-lg bg-white text-brandBlack flex items-center justify-center text-sm">
                ZP
              </span>
              ZeroPoint<span className="text-brandRed">Labs</span>
            </div>
            <p className="text-footerText text-sm leading-relaxed">
              Building digital systems that help businesses grow.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  title={s.name}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-xs font-semibold hover:bg-brandRed hover:border-brandRed transition"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-heading font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2.5 text-footerText text-sm">
              {["Home", "About", "Services", "Pricing", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-brandRed transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold mb-4">Services</p>
            <ul className="space-y-2.5 text-footerText text-sm">
              {[
                "Website Development",
                "Custom Software",
                "SEO",
                "Social Media Management",
                "Business Automation",
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="hover:text-brandRed transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold mb-4">Contact</p>
            <ul className="space-y-3 text-footerText text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brandRed" /> hello@zeropointlabs.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brandRed" /> +91 90253 14278
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brandRed" /> Chennai, India
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-footerText text-xs pt-8">
          © {new Date().getFullYear()} ZeroPoint Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
