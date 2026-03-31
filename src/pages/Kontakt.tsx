import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Kontakt = () => {
  return (
    <Layout>
      <PageHero
        title="Kontaktieren Sie uns"
        description="Haben Sie Fragen zu unseren Fahrzeugen oder benötigen Sie eine persönliche Beratung? Rufen Sie uns an oder schreiben Sie uns eine E-Mail."
      />

      <section className="section-padding">
        <div className="container max-w-3xl">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Kontaktdaten</h2>
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Adresse",
                  content: (
                    <p className="text-muted-foreground">
                      Nordic-Automobile cnr GmbH
                      <br />
                      Ellernreihe 59
                      <br />
                      content:{" "}
                      <p className="text-muted-foreground">
                        Nordic-Automobile cnr GmbH
                        <br />
                        Ellernreihe 59
                        <br />
                        22179 Hamburg
                      </p>
                      ,
                    </p>
                  ),
                },
                {
                  icon: Phone,
                  title: "Telefon",
                  content: (
                    <a href="tel:+494085539775" className="text-accent hover:underline">
                      +49 40 85539775
                    </a>
                  ),
                },
                {
                  icon: Mail,
                  title: "E-Mail",
                  content: (
                    <a href="mailto:info@nordic-cars.net" className="text-accent hover:underline">
                      info@nordic-cars.net
                    </a>
                  ),
                },
                {
                  icon: Clock,
                  title: "Öffnungszeiten",
                  content: (
                    <p className="text-muted-foreground">
                      Montag – Freitag: 10:00 – 18:00 Uhr
                      <br />
                      Samstag: Geschlossen
                      <br />
                      Sonntag: Geschlossen
                    </p>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-card rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2 font-sans">Für Geschäftskunden</h3>
              <p className="text-sm text-muted-foreground">
                Wir bieten spezielle Konditionen für Firmenkunden, Autohäuser und gewerbliche Käufer. Kontaktieren Sie
                uns für ein individuelles Angebot.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold mb-6">So finden Sie uns</h2>
            <div className="rounded-lg overflow-hidden border shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.0!2d10.1!3d53.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEllernreihe%2059%2C%2022179%20Hamburg!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nordic-Automobile Standort"
                className="w-full"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
