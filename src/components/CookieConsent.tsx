import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="container max-w-4xl mx-auto bg-card border border-border rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-muted-foreground flex-1">
          Diese Website verwendet technisch notwendige Cookies, um die bestmögliche Funktionalität zu gewährleisten. Weitere Informationen finden Sie in unserer{" "}
          <Link to="/datenschutz" className="text-accent underline hover:no-underline">
            Datenschutzerklärung
          </Link>.
        </p>
        <Button onClick={accept} size="sm" className="shrink-0">
          Verstanden
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
