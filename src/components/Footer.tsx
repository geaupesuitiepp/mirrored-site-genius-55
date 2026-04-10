import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import nordicLogo from "@/assets/nordic-logo.png";

const Footer = () => {
  return (
    <footer className="bg-nordic-gradient text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={nordicLogo} alt="Nordic Automobile" className="h-12" />
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Ihr zuverlässiger Partner für geprüfte Gebrauchtwagen in Hamburg und deutschlandweit.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 font-sans text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Auto kaufen", href: "/fahrzeuge" },
                { label: "So funktioniert's", href: "/so-funktionierts" },
                { label: "Lieferung & Garantie", href: "/lieferung-garantie" },
                { label: "Qualitätsstandards", href: "/qualitaet" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 font-sans text-sm uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Nordic-Automobile cnr GmbH<br />Ellernreihe 59<br />22179 Hamburg</span>
              </li>
              <li>
                <a href="mailto:info@nordic-cars.net" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground">
                  <Mail className="h-4 w-4 shrink-0" />
                  info@nordic-cars.net
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 font-sans text-sm uppercase tracking-wider">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Nordic-Automobile cnr GmbH. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
