import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Wrench, CheckCircle2, Truck as TruckIcon, Package, Shield, ArrowRight, Check, X, Clock, FileText, CreditCard } from "lucide-react";
import carTransport from "@/assets/car-transport.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const deliverySteps = [
  { num: 1, icon: Wrench, title: "Technische Prüfung", desc: "Umfassende technische Inspektion aller Fahrzeugkomponenten" },
  { num: 2, icon: CheckCircle2, title: "Optische Kontrolle", desc: "Detaillierte Begutachtung von Lack, Innenraum und Zustand" },
  { num: 3, icon: Package, title: "Professionelle Aufbereitung", desc: "Gründliche Reinigung innen und außen für perfekte Übergabe" },
  { num: 4, icon: TruckIcon, title: "Einzeltransport", desc: "Sichere Anlieferung per geschlossenem Einzeltransporter" },
];

const cities = ["Hamburg", "Berlin", "München", "Köln", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Hannover", "Nürnberg", "Dresden", "Bremen"];

const faqItems = [
  { q: "Zu welchen Zeiten erfolgt die Lieferung?", a: "Die Lieferung erfolgt in der Regel werktags zwischen 8:00 und 18:00 Uhr. Den genauen Zeitpunkt stimmen wir individuell mit Ihnen ab." },
  { q: "Was muss ich zur Übergabe mitbringen?", a: "Bitte halten Sie einen gültigen Personalausweis oder Reisepass sowie den Zahlungsnachweis bereit." },
  { q: "Wie funktioniert die 30-Tage Geld-zurück-Garantie?", a: "Innerhalb von 30 Tagen nach Übergabe können Sie das Fahrzeug ohne Angabe von Gründen zurückgeben. Wir holen es kostenlos ab und erstatten den Kaufpreis abzüglich der Kilometerpauschale." },
  { q: "Was ist der Unterschied zwischen Nordic Garantie und Premium Garantie?", a: "Die Nordic Garantie (1 Jahr/10.000 km) deckt Motor sowie Schalt- und Automatikgetriebe ab. Die Premium Garantie (3 Jahre/60.000 km) bietet erweiterten Schutz für viele weitere Komponenten wie Kraftübertragung, Lenkung, Bremsen, Klimaanlage, Elektronik und mehr – ohne Selbstbeteiligung." },
  { q: "Welche Mängel berechtigen zur kostenlosen Rückgabe?", a: "Jede Abweichung vom vertraglich vereinbarten Zustand berechtigt zur kostenlosen Rückgabe – ohne Kilometerabzug." },
  { q: "Wann beginnt die Garantie und wann endet sie?", a: "Die Garantie beginnt mit der Fahrzeugübergabe und läuft je nach Paket 1 oder 3 Jahre." },
  { q: "Welche Garantiepakete und Leistungen gibt es?", a: "Wir bieten die Nordic Garantie (inklusive) und die Premium Garantie (optional) an. Details finden Sie in der Vergleichstabelle oben." },
  { q: "Was ist von der Garantie ausgeschlossen?", a: "Normale Abnutzung, Unfallschäden, unsachgemäße Nutzung, nachträglich umgerüstete oder getunte Fahrzeuge sowie Schäden durch nicht durchgeführte Wartungen nach Herstellervorgaben." },
  { q: "Wohin soll ich gehen, wenn mein Auto repariert werden muss?", a: "Kontaktieren Sie uns zuerst telefonisch oder per E-Mail. Wir verweisen Sie an eine Werkstatt in Ihrer Nähe. Nach Erhalt des Kostenvoranschlags prüft unser Team und sendet die Reparaturvereinbarung. Die Kosten werden direkt bezahlt oder innerhalb von 5 Werktagen erstattet." },
  { q: "Gilt die Garantie auch außerhalb Deutschlands?", a: "Die Garantie gilt grundsätzlich in Deutschland. Bei vorübergehendem Aufenthalt im geographischen Europa (max. 6 Wochen) bleibt die Garantie bestehen." },
  { q: "Welche Kosten deckt die Garantie ab?", a: "Die Garantie deckt Material- und Arbeitskosten für die abgedeckten Komponenten." },
];

const guaranteeComponents = [
  { name: "Motor", basis: true, premium: true },
  { name: "Schalt- und Automatikgetriebe", basis: true, premium: true },
  { name: "Kraftübertragung", basis: false, premium: true },
  { name: "Lenkung", basis: false, premium: true },
  { name: "Bremsen", basis: false, premium: true },
  { name: "Abgasanlage", basis: false, premium: true },
  { name: "Sicherheitssystem", basis: false, premium: true },
  { name: "Kraftstoffanlage", basis: false, premium: true },
  { name: "Elektrische Anlage", basis: false, premium: true },
  { name: "Komfortelektronik", basis: false, premium: true },
  { name: "Kühlsystem", basis: false, premium: true },
  { name: "Klimaanlage", basis: false, premium: true },
  { name: "Hybridelektrofahrzeug", basis: false, premium: true },
  { name: "Batterieelektrofahrzeug", basis: false, premium: true },
];

const LieferungGarantie = () => {
  return (
    <Layout>
      <PageHero
        title="Lieferung & Garantie"
        description="Jedes Fahrzeug wird optisch und technisch geprüft, professionell aufbereitet und per Einzeltransport sicher zu Ihnen geliefert. Mit umfassenden Garantieleistungen."
      >
        <Link to="/fahrzeuge" className="mt-6 inline-flex items-center justify-center bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border border-primary-foreground/30 h-11 rounded-md px-8 text-sm font-medium transition-colors">
          Finde dein Auto
        </Link>
      </PageHero>

      {/* Lieferablauf */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Unser Lieferablauf</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverySteps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <step.icon className="h-7 w-7 text-accent" />
                </div>
                <span className="text-2xl font-bold text-accent">{step.num}</span>
                <h3 className="text-lg font-bold mt-2 mb-2 font-sans">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Versandstandorte */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Versandstandorte in ganz Deutschland</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Wir liefern deutschlandweit direkt zu Ihnen nach Hause. Unsere Logistikpartner sind in allen Regionen für Sie im Einsatz.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <span key={city} className="px-4 py-2 bg-card rounded-full border border-border text-sm font-medium">
                {city}
              </span>
            ))}
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">+ viele weitere</span>
          </div>
        </div>
      </section>

      {/* 30-Tage Garantie */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              30 Tage Rückgaberecht
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">30-Tage Geld-zurück-Garantie</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Testen Sie Ihr neues Fahrzeug in Ruhe. Innerhalb von 30 Tagen können Sie es zurückgeben – mit fairer Kilometer-Abrechnung.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-bold mb-6 font-sans">So funktioniert's</h3>
              <ul className="space-y-4">
                {[
                  "30 Tage Bedenkzeit nach Fahrzeugübergabe",
                  "Rückgabe ohne Angabe von Gründen möglich",
                  "Kostenlose Abholung bei Ihnen zu Hause",
                  "Rückerstattung innerhalb von 5 Werktagen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-4 font-sans">Kilometer-Abrechnung</h3>
              <p className="text-3xl font-bold text-accent mb-2">€0,30 pro km</p>
              <p className="text-muted-foreground text-sm">
                Für jeden gefahrenen Kilometer über den Stand bei Übergabe wird eine Pauschale von €0,30 berechnet. Fair und transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rücktritt bei Mängeln */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Rücktrittsrecht bei Mängeln
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rücktritt bei nicht vertragsgemäßem Zustand</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entspricht das Fahrzeug nicht dem vereinbarten Zustand? Dann erfolgt die Rückabwicklung kostenlos – ohne Kilometer-Abzug.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: "Fehlende Ausstattung", desc: "Versprochene Features nicht vorhanden" },
              { title: "Optische Mängel", desc: "Kratzer, Dellen, Lackschäden" },
              { title: "Technische Defekte", desc: "Motor, Getriebe, Elektronik" },
              { title: "Vertragsabweichung", desc: "Jede Abweichung vom Vertrag" },
            ].map((item) => (
              <div key={item.title} className="bg-card p-6 rounded-xl border border-border">
                <h4 className="font-bold mb-2 font-sans">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { num: 1, title: "Mangel melden", desc: "Kontaktieren Sie uns mit einer Beschreibung des Problems. Wir vereinbaren sofort einen Termin." },
              { num: 2, title: "Kostenlose Abholung", desc: "Wir holen das Fahrzeug bei Ihnen ab – komplett kostenfrei, ohne Kilometer-Abzug." },
              { num: 3, title: "Volle Rückerstattung", desc: "Ihr Geld zurück innerhalb von 5 Werktagen nach Abholung – garantiert." },
            ].map((item) => (
              <div key={item.num} className="text-center bg-card p-6 rounded-xl border border-border">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold mb-3">{item.num}</span>
                <h4 className="font-bold mb-2 font-sans">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantiepakete */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Unsere Garantiepakete</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Zusätzlich zum Rückgaberecht bieten wir umfassende Garantieleistungen für Ihr Fahrzeug – für langfristige Sicherheit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Nordic Garantie */}
            <div className="bg-card p-8 rounded-xl border border-border">
              <span className="inline-block px-3 py-1 bg-secondary text-foreground rounded-full text-xs font-semibold mb-4">Inklusive</span>
              <h3 className="text-xl font-bold font-sans mb-1">Nordic Garantie</h3>
              <p className="text-muted-foreground mb-6">1 Jahr oder 10.000 km</p>
              <ul className="space-y-3">
                {["Bei jedem Fahrzeug inklusive", "Abdeckung wichtiger Komponenten", "Schnelle Schadensabwicklung", "Deutschlandweiter Service"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">Standardmäßig bei jedem Kauf dabei – ohne Aufpreis.</p>
            </div>

            {/* Premium */}
            <div className="bg-card p-8 rounded-xl border-2 border-accent">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4">Premium</span>
              <h3 className="text-xl font-bold font-sans mb-1">Premium Garantie</h3>
              <p className="text-muted-foreground mb-6">3 Jahre oder 60.000 km</p>
              <ul className="space-y-3">
                {["Erweiterter Komponentenschutz", "Ohne Selbstbeteiligung", "100% Kostenerstattung", "Erstattung innerhalb von 5 Werktagen"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">Optional beim Kauf hinzubuchbar – für maximale Sicherheit.</p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-6 font-sans">Rundum-Schutz, sorgenfrei fahren</h3>
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary">
                    <th className="text-left p-4 font-semibold">Komponente</th>
                    <th className="text-center p-4 font-semibold">Basis</th>
                    <th className="text-center p-4 font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {guaranteeComponents.map((comp) => (
                    <tr key={comp.name} className="border-b border-border last:border-0">
                      <td className="p-4">{comp.name}</td>
                      <td className="p-4 text-center">
                        {comp.basis ? <Check className="h-5 w-5 text-accent mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />}
                      </td>
                      <td className="p-4 text-center">
                        {comp.premium ? <Check className="h-5 w-5 text-accent mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Lieferdetails */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Lieferdetails</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Nach Ihrer Bestellung bereiten wir das Fahrzeug sorgfältig vor. Die technische und optische Prüfung sowie die Aufbereitung dauern in der Regel 3-7 Werktage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Die Anlieferung erfolgt per geschlossenem Einzeltransporter – so kommt Ihr Fahrzeug sicher und geschützt bei Ihnen an.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Bei der Übergabe prüfen wir gemeinsam das Fahrzeug, gehen alle Dokumente durch und beantworten Ihre Fragen.
              </p>
            </div>
            <img src={carTransport} alt="Sichere Fahrzeuglieferung per Einzeltransport" className="rounded-xl shadow-soft w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Clock, title: "Vorbereitungszeit", desc: "3-7 Werktage für Prüfung und Aufbereitung" },
              { icon: TruckIcon, title: "Einzeltransport", desc: "Geschützter Transport auf geschlossenem Anhänger" },
              { icon: FileText, title: "Vollständige Dokumentation", desc: "Alle Papiere vorbereitet und übergabebereit" },
            ].map((item) => (
              <div key={item.title} className="bg-card p-6 rounded-xl border border-border">
                <item.icon className="h-6 w-6 text-accent mb-3" />
                <h4 className="font-bold mb-2 font-sans">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
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

      {/* Bottom CTA */}
      <section className="section-padding bg-nordic-gradient">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Sicher kaufen – rundum geschützt
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            30 Tage Geld-zurück-Garantie, Nordic Garantie inklusive und optional Premium Garantie. Deutschlandweite Lieferung direkt zu Ihnen.
          </p>
          <Link to="/fahrzeuge" className="btn-hero inline-flex items-center gap-2">
            Fahrzeuge ansehen <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default LieferungGarantie;
