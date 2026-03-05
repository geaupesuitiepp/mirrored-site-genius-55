import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import nordicLogo from "@/assets/nordic-logo.png";

const navLinks = [
  { label: "Auto kaufen", href: "/fahrzeuge" },
  { label: "So funktioniert's", href: "/so-funktionierts" },
  { label: "Lieferung & Garantie", href: "/lieferung-garantie" },
  { label: "Unsere Qualitätsstandards", href: "/qualitaet" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-nordic-gradient sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src={nordicLogo} alt="Nordic Automobile" className="h-10" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.href
                  ? "bg-primary-foreground/15 text-primary-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+494085539775"
            className="hidden md:flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium"
          >
            <Phone className="h-4 w-4" />
            +49 40 85539775
          </a>
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-nordic-gradient border-t border-primary-foreground/10 pb-4">
          <nav className="container flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.href
                    ? "bg-primary-foreground/15 text-primary-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+494085539775"
              className="flex items-center gap-2 px-4 py-3 text-primary-foreground/90 text-sm font-medium"
            >
              <Phone className="h-4 w-4" />
              +49 40 85539775
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
