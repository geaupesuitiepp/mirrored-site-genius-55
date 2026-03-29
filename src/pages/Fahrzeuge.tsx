import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";

const Fahrzeuge = () => {
  return (
    <Layout>
      <PageHero
        title="Unser Fahrzeugbestand"
        description="Entdecken Sie unsere aktuellen Gebrauchtwagen. Alle Fahrzeuge sind geprüft und aufbereitet."
      />

      <section className="section-padding">
        <div className="container">
          <div className="w-full rounded-xl overflow-hidden border border-border shadow-soft">
            <iframe
              src="https://home.mobile.de/home/index.html?partnerHead=false&customerId=39269195"
              title="Nordic-Automobile Fahrzeuge auf mobile.de"
              className="w-full border-0"
              style={{ minHeight: "800px", height: "calc(100vh - 200px)" }}
              allowFullScreen
            />
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
