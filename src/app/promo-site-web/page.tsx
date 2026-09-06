import type { Metadata } from "next";
import PromoSiteWebClient from "./PromoSiteWebClient";

export const metadata: Metadata = {
  title: "Site web pro à 890€ : Livré en 2 semaines",
  description: "Offre exclusive : votre site vitrine professionnel à 890€ ou 39€/mois, livré en 2 semaines. Sans abonnement. Réservez votre créneau.",
  robots: { index: false, follow: false },
  other: {
    "theme-color": "#0a0a1a",
  },
};

export default function Page() {
  return <PromoSiteWebClient />;
}
