import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { AlertTriangle, Mail } from "lucide-react";

const Fahrzeuge = () => {
  return (
    <Layout>
      <PageHero
        title="Fahrzeuge"
        description="Informationen zum Fahrzeugerwerb während des Insolvenzverfahrens."
      />

      <section className="section-padding">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-10">
              <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Insolvenzverfahren
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Die Nordic-Automobile cnr GmbH befindet sich derzeit im Insolvenzverfahren. Der Fahrzeugverkauf über diese Webseite ist daher nicht mehr möglich.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Wenn Sie ein Fahrzeug erwerben oder sich über verfügbare Fahrzeuge informieren möchten, wenden Sie sich bitte direkt an die betreuende{" "}
                <a href="https://feldbaum.net" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline hover:opacity-80">
                  Kanzlei Feldbaum
                </a>.
              </p>
              <a
                href="mailto:kanzlei@feldbaum.net"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-sm font-medium transition-colors"
              >
                <Mail className="h-4 w-4" />
                kanzlei@feldbaum.net
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fahrzeuge;
