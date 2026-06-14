import type { Metadata } from "next";
import PromoSiteWebClient from "./PromoSiteWebClient";

export const metadata: Metadata = {
  title: "Site web pro à 300€ — Livré en 7 jours | ConvertiLab",
  description: "Offre exclusive : votre site web professionnel pour seulement 300€, livré en 7 jours. Sans abonnement. Réservez votre créneau.",
  robots: { index: false, follow: false },
  other: {
    "theme-color": "#0a0a1a",
  },
};

export default function Page() {
  return <PromoSiteWebClient />;
}
