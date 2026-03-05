import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Nachricht gesendet", description: "Wir melden uns in Kürze bei Ihnen." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <PageHero
        title="Kontaktieren Sie uns"
        description="Haben Sie Fragen zu unseren Fahrzeugen oder benötigen Sie eine persönliche Beratung? Wir sind für Sie da – egal ob Privatkunde oder Geschäftskunde."
      />

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Schreiben Sie uns</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-1 block">Name *</label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Ihr vollständiger Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-1 block">E-Mail *</label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="ihre.email@beispiel.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium mb-1 block">Telefon (optional)</label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+49 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-1 block">Ihre Nachricht *</label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Wie können wir Ihnen helfen?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-sm font-medium transition-colors"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Kontaktdaten</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Adresse",
                    content: <p className="text-muted-foreground">Nordic-Automobile cnr GmbH<br />Ellernreihe 59<br />D-22179 Hamburg</p>,
                  },
                  {
                    icon: Phone,
                    title: "Telefon",
                    content: <a href="tel:+494085539775" className="text-accent hover:underline">+49 40 85539775</a>,
                  },
                  {
                    icon: Mail,
                    title: "E-Mail",
                    content: <a href="mailto:info@nordic-cars.net" className="text-accent hover:underline">info@nordic-cars.net</a>,
                  },
                  {
                    icon: Clock,
                    title: "Öffnungszeiten",
                    content: <p className="text-muted-foreground">Montag – Freitag: 10:00 – 16:00 Uhr<br />Samstag: Geschlossen<br />Sonntag: Geschlossen</p>,
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
                  Wir bieten spezielle Konditionen für Firmenkunden, Autohäuser und gewerbliche Käufer. Kontaktieren Sie uns für ein individuelles Angebot.
                </p>
              </div>
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
