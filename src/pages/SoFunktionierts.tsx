import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Search, FileText, Truck, ThumbsUp, CheckCircle } from "lucide-react";
import stepOrder from "@/assets/step-order.jpg";
import stepContract from "@/assets/step-contract.jpg";
import stepDelivery from "@/assets/step-delivery.jpg";
import stepSatisfaction from "@/assets/step-satisfaction.jpg";

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Bestellung",
    subtitle: "Wo Sie das perfekte Auto finden",
    description: "Wir bieten eine breite Palette an Marken und Modellen an. Unser Online-Angebot ermöglicht es Ihnen, jedes Auto mit detaillierten Fotos zu betrachten. Sie sind herzlich eingeladen, uns persönlich zu besuchen und Ihren Kauf vor Ort abzuschließen.",
    badges: ["100+ Autos auf Lager", "Geprüft & aufbereitet"],
    image: stepOrder,
  },
  {
    step: 2,
    icon: FileText,
    title: "Vertragsunterschrift & Bezahlung",
    subtitle: "Transparent, sicher und flexibel",
    description: "Nach der Fahrzeugauswahl erstellen wir einen detaillierten Kaufvertrag mit allen vereinbarten Konditionen – inklusive Fahrzeugzustand, Garantieleistungen und Rückgaberecht. Keine versteckten Gebühren – der Vertragspreis ist der Endpreis.",
    badges: ["Vertragsunterschrift", "21-Tage Geld-zurück-Garantie im Vertrag"],
    image: stepContract,
  },
  {
    step: 3,
    icon: Truck,
    title: "Lieferung",
    subtitle: "Wie Sie Ihr Auto entgegennehmen möchten",
    description: "Bei Nordic bieten wir für alle Autos bequeme Liefer- und Abholmöglichkeiten an. Sie können Ihr Fahrzeug bei uns abholen oder wir liefern es direkt zu Ihnen nach Hause. Vor der Auslieferung bereiten wir alle Papiere vor und reinigen Ihr Auto gründlich.",
    badges: ["Lieferung nach Hause", "Abholung vor Ort möglich"],
    image: stepDelivery,
  },
  {
    step: 4,
    icon: ThumbsUp,
    title: "Zufriedenheit",
    subtitle: "Nur wenn Sie glücklich sind, haben wir einen Deal",
    description: "Wir wollen sicherstellen, dass Sie mit Ihrem neuen Auto ein ideales Erlebnis haben. Wir sind immer bereit, Sie zu unterstützen. Mit unserer Geld-zurück-Garantie können Sie Ihr Auto 21 Tage lang testen und richtig kennenlernen.",
    badges: ["Garantie inklusive", "21 Tage Geld-zurück-Garantie"],
    image: stepSatisfaction,
  },
];

const SoFunktionierts = () => {
  return (
    <Layout>
      <PageHero
        title="Alles klar beim Autokauf – so funktioniert's!"
        description="Unser Team steht Ihnen jederzeit zur Verfügung, um Ihnen beim Autokauf zu helfen. Wählen Sie Ihr Wunschfahrzeug bequem online aus und wir kümmern uns um den Rest – von der Beratung bis zur Lieferung direkt zu Ihnen nach Hause."
      />

      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">So kaufen Sie Ihr Auto</h2>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-accent">Schritt {step.step}</span>
                      <h3 className="text-2xl font-bold font-sans">{step.title}</h3>
                    </div>
                  </div>
                  <h4 className="text-lg text-muted-foreground font-medium mb-4">{step.subtitle}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {step.badges.map((badge) => (
                      <span key={badge} className="inline-flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-xl shadow-soft w-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom badges */}
          <div className="mt-20 bg-nordic-gradient rounded-2xl p-12 flex flex-wrap justify-center gap-8">
            {["21-Tage-Geld-zurück-Garantie", "1 Jahr Garantie kostenlos", "Geprüft und aufbereitet"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-semibold text-primary-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SoFunktionierts;
