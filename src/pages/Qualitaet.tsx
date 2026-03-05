import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { CheckCircle2, Wrench, Eye, Gauge, Sparkles, ArrowRight } from "lucide-react";
import workshopInspection from "@/assets/workshop-inspection.jpg";
import tireInspection from "@/assets/tire-inspection.jpg";
import carPreparation from "@/assets/car-preparation.jpg";
import conditionDoc from "@/assets/condition-documentation.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const promises = [
  "Alle angebotenen Autos sind aus unserem eigenen Bestand",
  "Jedes Fahrzeug wird von unseren KFZ-Experten geprüft & rundum aufbereitet",
  "Garantie inklusive",
  "21 Tage Geld-Zurück-Garantie bei Nichtgefallen",
  "Mindestens 100 Tage service-frei bei der Auslieferung",
  "Mindestprofiltiefe von 4mm für alle Reifen garantiert",
];

const processSteps = [
  { num: 1, title: "Technische Prüfung", desc: "Umfassende Inspektion nach Herstellervorgaben. Alle Komponenten werden systematisch geprüft – von Motor über Bremsen bis zur Elektronik." },
  { num: 2, title: "Optische Kontrolle", desc: "Detaillierte Begutachtung von Lack, Karosserie und Innenraum. Alle sichtbaren Gebrauchsspuren werden dokumentiert und transparent dargestellt." },
  { num: 3, title: "Reifenprüfung", desc: "Messung der Profiltiefe an allen Reifen. Wir garantieren mindestens 4mm Restprofil – unter diesem Wert werden Reifen ersetzt." },
  { num: 4, title: "Professionelle Aufbereitung", desc: "Gründliche Innen- und Außenreinigung, Lackpflege, Innenraumreinigung und Desinfektion für ein Fahrzeug wie neu." },
];

const techChecks = [
  "Motor und Getriebe", "Bremsen und Bremsbeläge", "Fahrwerk und Lenkung",
  "Auspuffanlage", "Klimaanlage", "Elektrik und Beleuchtung",
  "Ölstand und Flüssigkeiten", "Batterie und Ladezustand",
];

const faqItems = [
  { q: "Wem gehören die Autos von Nordic?", a: "Alle angebotenen Fahrzeuge sind Eigentum der Nordic-Automobile cnr GmbH. Wir kaufen, prüfen und verkaufen ausschließlich aus eigenem Bestand." },
  { q: "Gibt es Garantie auf einen Gebrauchtwagen?", a: "Ja, jedes Fahrzeug wird mit der Nordic Garantie (1 Jahr / 10.000 km) ausgeliefert. Optional bieten wir eine Premium Garantie an." },
  { q: "Was bedeutet die 4mm Mindestprofiltiefe?", a: "Wir garantieren, dass alle Reifen bei Übergabe mindestens 4mm Restprofil haben. Liegt die Profiltiefe darunter, werden die Reifen kostenlos ersetzt." },
  { q: "Wie bin ich abgesichert, wenn ich bei Nordic ein Auto kaufe?", a: "Sie erhalten die Nordic Garantie, 21 Tage Geld-zurück-Garantie und alle Fahrzeuge sind technisch geprüft und aufbereitet." },
];

const Qualitaet = () => {
  return (
    <Layout>
      <PageHero
        title="Nordic-Qualitätsstandard"
        description="Bei Nordic verkaufen wir nur Autos, die wir vorher einer gründlichen Prüfung nach Herstellervorgaben unterzogen haben. Jedes Fahrzeug wird technisch und optisch geprüft, professionell aufbereitet und mit Mindestprofiltiefe garantiert."
      />

      {/* Qualitätsversprechen */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nordic-Qualitätsversprechen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promises.map((promise) => (
              <div key={promise} className="bg-card p-6 rounded-xl border border-border flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                <span className="font-medium">{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prüf- und Aufbereitungsprozess */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Unser Prüf- und Aufbereitungsprozess</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Jedes Fahrzeug durchläuft unseren strengen 4-Stufen-Qualitätsprozess
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="text-center bg-card p-6 rounded-xl border border-border">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">{step.num}</span>
                <h3 className="text-lg font-bold mb-3 font-sans">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technische Prüfung */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Technische Prüfung nach Herstellervorgaben</h2>
              <p className="text-muted-foreground mb-8">
                Unsere KFZ-Meister prüfen jedes Fahrzeug nach den Vorgaben des Herstellers. Das bedeutet: Alle Komponenten werden systematisch kontrolliert und bei Bedarf instandgesetzt oder ausgetauscht.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {techChecks.map((check) => (
                  <div key={check} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    {check}
                  </div>
                ))}
              </div>
            </div>
            <img src={workshopInspection} alt="Professionelle Fahrzeugprüfung in der Werkstatt" className="rounded-xl shadow-soft" />
          </div>
        </div>
      </section>

      {/* Mindestprofiltiefe */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img src={tireInspection} alt="Reifenprüfung mit Profiltiefenmessung" className="rounded-xl shadow-soft" />
            <div>
              <h2 className="text-3xl font-bold mb-4">Mindestprofiltiefe garantiert</h2>
              <p className="text-muted-foreground mb-8">
                Sicherheit hat Priorität. Deshalb messen wir bei jedem Fahrzeug die Profiltiefe aller vier Reifen. Unsere Garantie:
              </p>
              <div className="bg-card p-6 rounded-xl border border-border mb-6">
                <span className="text-4xl font-bold text-accent">4mm</span>
                <h4 className="font-bold mt-2 font-sans">Mindestprofiltiefe</h4>
                <p className="text-sm text-muted-foreground mt-1">Alle Reifen haben mindestens 4mm Restprofil bei Übergabe</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h4 className="font-bold font-sans">Kostenloser Austausch</h4>
                <p className="text-sm text-muted-foreground mt-1">Reifen unter 4mm werden vor der Übergabe ohne Aufpreis ersetzt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professionelle Aufbereitung */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Professionelle Aufbereitung</h2>
              <p className="text-muted-foreground mb-8">
                Bevor ein Fahrzeug zu Ihnen kommt, wird es von unseren Spezialisten professionell aufbereitet – innen und außen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Außenaufbereitung", desc: "Gründliche Wäsche, Lackpflege, Felgenreinigung und Versiegelung" },
                  { title: "Innenraumreinigung", desc: "Tiefenreinigung aller Oberflächen, Polster und Teppiche" },
                  { title: "Desinfektion", desc: "Hygienische Reinigung und Geruchsneutralisierung" },
                  { title: "Motorwäsche", desc: "Reinigung des Motorraums für bessere Übersicht" },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold mb-1 font-sans">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <img src={carPreparation} alt="Professionelle Fahrzeugaufbereitung" className="rounded-xl shadow-soft" />
          </div>
        </div>
      </section>

      {/* Zustandsdokumentation */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img src={conditionDoc} alt="Digitale Zustandsdokumentation mit Tablet" className="rounded-xl shadow-soft" />
            <div>
              <h2 className="text-3xl font-bold mb-4">Transparente Zustandsdokumentation</h2>
              <p className="text-muted-foreground mb-4">
                Unsere Experten untersuchen den Zustand jedes Autos. Da wir gebrauchte Autos verkaufen, können einige altersentsptrechende Gebrauchsspuren und Abnutzungserscheinungen vorkommen.
              </p>
              <p className="text-muted-foreground mb-8">
                Jedoch zeigen wir alle Gebrauchsspuren, die über eine normale Abnutzung hinausgehen und aus 2 Metern Entfernung sichtbar sind, transparent auf.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Äußeres", desc: "Kratzer, Dellen und Steinschläge werden dokumentiert" },
                  { title: "Innenraum", desc: "Kratzer, Flecken, Beschädigungen und abgenutzte Stellen" },
                  { title: "Windschutzscheibe", desc: "Kratzer und Steinschläge" },
                  { title: "Reifen und Felgen", desc: "Kratzer, Schrammen und Profiltiefe" },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold mb-1 font-sans">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold font-sans">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom badges + CTA */}
      <section className="section-padding bg-secondary">
        <div className="container text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {["Nach Herstellervorgaben geprüft", "4mm Mindestprofil garantiert", "Professionell aufbereitet", "Garantie inklusive"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-semibold">{badge}</span>
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold mb-6">Kaufen Sie mit Vertrauen!</h2>
          <Link to="/fahrzeuge" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-sm font-medium transition-colors">
            Fahrzeuge ansehen <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Qualitaet;
