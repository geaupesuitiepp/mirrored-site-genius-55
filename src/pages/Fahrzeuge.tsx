import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Search, ExternalLink } from "lucide-react";
import { useState } from "react";

const sampleVehicle = {
  brand: "BMW",
  model: "BMW",
  price: 1234,
  year: 1234,
  mileage: 1234,
  fuel: "1234",
  power: "12334",
  image: "https://pngimg.com/d/bmw_PNG99543.png",
  link: "http://mobile.de/",
  status: "Verfügbar",
};

const Fahrzeuge = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      <PageHero
        title="Unser Fahrzeugbestand"
        description="Entdecken Sie unsere aktuellen Gebrauchtwagen. Alle Fahrzeuge sind geprüft und aufbereitet. Klicken Sie auf ein Fahrzeug für weitere Details auf mobile.de."
      />

      <section className="section-padding">
        <div className="container">
          {/* Search & Filters */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Fahrzeug suchen..."
                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <span className="text-sm text-muted-foreground">1 Fahrzeug gefunden</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {["Alle Marken", "Alle Preise", "Alle Baujahre"].map((f) => (
              <button key={f} className="px-4 py-2 text-sm border border-input rounded-md bg-background hover:bg-secondary flex items-center gap-2">
                {f}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
            ))}
            <button className="px-4 py-2 text-sm border border-input rounded-md bg-background hover:bg-secondary flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
              Neueste zuerst
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href={sampleVehicle.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl border border-border overflow-hidden shadow-soft hover:shadow-lg transition-all group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={sampleVehicle.image}
                  alt={sampleVehicle.brand}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  {sampleVehicle.status}
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{sampleVehicle.brand}</p>
                <h3 className="text-lg font-bold text-foreground font-sans">{sampleVehicle.model}</h3>
                <p className="text-xl font-bold text-accent mt-1">
                  {sampleVehicle.price.toLocaleString("de-DE")} €
                </p>
                <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-muted-foreground">
                  <span>Baujahr: {sampleVehicle.year}</span>
                  <span>{sampleVehicle.mileage.toLocaleString("de-DE")} km</span>
                  <span>{sampleVehicle.fuel}</span>
                  <span>{sampleVehicle.power}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium">
                  <ExternalLink className="h-4 w-4" />
                  Details auf mobile.de
                </div>
              </div>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Nicht das Richtige dabei?</h2>
            <p className="text-muted-foreground mb-6">
              Kontaktieren Sie uns mit Ihren Wünschen. Wir helfen Ihnen gerne, das passende Fahrzeug zu finden.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-sm font-medium transition-colors"
            >
              Anfrage stellen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fahrzeuge;
