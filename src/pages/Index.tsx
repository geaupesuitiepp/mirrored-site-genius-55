import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, RotateCcw, Truck, Headphones, CheckCircle, Star, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/fahrzeuge?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-nordic-gradient" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-foreground rounded-full blur-2xl" />
        </div>
        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight font-sans">
              Auto kaufen: Endlich einfach
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Nordic-Automobile – Ihr zuverlässiger Partner für Gebrauchtwagen. Für Privat- und Geschäftskunden in Hamburg und deutschlandweit.
            </p>

            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Suche nach Marke, Modell oder Stichwort..."
                  className="w-full px-6 py-4 pr-14 rounded-lg text-foreground bg-card shadow-xl focus:outline-none focus:ring-2 focus:ring-accent text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-accent-foreground p-3 rounded-lg transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/fahrzeuge" className="btn-hero inline-flex items-center justify-center gap-2">
                Finde dein Auto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/kontakt" className="btn-hero-outline inline-flex items-center justify-center">
                Beratung anfordern
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nordic */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Warum Nordic-Automobile?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wir machen den Autokauf einfach, transparent und sicher – für jeden Kunden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Geprüfte Qualität", desc: "Jedes Fahrzeug durchläuft eine umfassende Qualitätsprüfung mit über 200 Checkpunkten.", href: "/qualitaet" },
              { icon: RotateCcw, title: "21-Tage Geld-zurück", desc: "Nicht zufrieden? Geben Sie das Fahrzeug innerhalb von 21 Tagen zurück – ohne Wenn und Aber.", href: "/lieferung-garantie" },
              { icon: Truck, title: "Lieferung deutschlandweit", desc: "Wir liefern Ihr Traumauto direkt vor Ihre Haustür – bequem und sicher.", href: "/lieferung-garantie" },
              { icon: Headphones, title: "Persönliche Beratung", desc: "Unsere Experten stehen Ihnen bei allen Fragen zur Seite – vor und nach dem Kauf.", href: "/kontakt" },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-sans">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="font-semibold text-foreground">B2B &amp; Privat</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-primary fill-primary" />
                <span className="font-semibold text-foreground">Zufriedene Kunden</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-semibold text-foreground">Sichere Abwicklung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-nordic-gradient" />
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Finden Sie Ihr Traumauto
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Stöbern Sie durch unseren aktuellen Fahrzeugbestand und entdecken Sie geprüfte Gebrauchtwagen zu fairen Preisen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/fahrzeuge" className="btn-hero inline-flex items-center justify-center gap-2">
                  Fahrzeuge ansehen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/kontakt" className="btn-hero-outline inline-flex items-center justify-center">
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
