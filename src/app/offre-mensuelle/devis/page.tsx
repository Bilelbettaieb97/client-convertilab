import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import DevisClient from "./DevisClient";

export const metadata: Metadata = {
  title: "Demandez votre site vitrine : Réponse sous 24h",
  description:
    "Obtenez votre site vitrine professionnel à partir de 39€/mois. Formulaire rapide, réponse sous 24h, sans engagement.",
  keywords:
    "devis site vitrine, site internet 39 euros, creation site web devis",
  alternates: { canonical: `${SITE.url}/offre-mensuelle/devis` },
  robots: { index: false, follow: true },
};

export default function DevisPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <DevisClient />
      <Footer />
    </div>
  );
}
