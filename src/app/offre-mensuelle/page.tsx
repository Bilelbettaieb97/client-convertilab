import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import OffreMensuelleClient from "./OffreMensuelleClient";

export const metadata: Metadata = {
  title: "Site Internet à 39€/mois — Propriétaire, Visible sur Google",
  description:
    "Votre site internet professionnel dès 39€/mois. Vous êtes propriétaire, visible sur Google dès le lancement. Design sur-mesure, SEO optimisé, livré en 7 jours.",
  keywords:
    "site internet pas cher, site web 39 euros, creation site internet mensuel, site professionnel abordable, proprietaire site web",
  alternates: { canonical: `${SITE.url}/offre-mensuelle` },
};

export default function OffreMensuellePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <OffreMensuelleClient />
      <Footer />
    </div>
  );
}
