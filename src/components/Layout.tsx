import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertTriangle } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-destructive text-destructive-foreground px-4 py-3 text-center text-sm font-medium">
        <div className="container flex items-center justify-center gap-2 flex-wrap">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          <span>
            Hinweis: Die Nordic-Automobile cnr GmbH befindet sich derzeit im Insolvenzverfahren. Die Betreuung erfolgt durch die{" "}
            <a href="https://feldbaum.net" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80">
              Kanzlei Feldbaum
            </a>.
          </span>
        </div>
      </div>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
