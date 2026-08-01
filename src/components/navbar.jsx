import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-borderGray">
      <div className="max-w-container mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-lg">
          <span className="w-9 h-9 rounded-lg bg-brandBlack text-white flex items-center justify-center text-sm">
            ZP
          </span>
          ZeroPoint<span className="text-brandRed">Labs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-brandBlack">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`link-underline ${pathname === link.href ? "text-brandRed" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex bg-brandRed hover:bg-brandRedDark text-white text-sm font-semibold px-5 py-2.5 rounded-btn transition"
        >
          Start Your Project
        </Link>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-borderGray bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => setOpen(false)} className="font-semibold text-sm">
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary text-center">
            Start Your Project
          </Link>
        </div>
      )}
    </header>
  );
}
