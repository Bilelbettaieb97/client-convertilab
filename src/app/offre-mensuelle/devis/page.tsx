import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import DevisClient from "./DevisClient";

export const metadata: Metadata = {
  title: "Demander votre site vitrine | ConvertiLab",
  description:
    "Obtenez votre site vitrine professionnel a partir de 39eur/mois. Formulaire rapide, reponse sous 24h.",
  keywords:
    "devis site vitrine, site internet 39 euros, creation site web devis",
  alternates: { canonical: `${SITE.url}/offre-mensuelle/devis` },
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
