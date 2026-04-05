import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import OffreSpecialeClient from "./OffreSpecialeClient";

export const metadata: Metadata = {
  title: "Offre Speciale - Site Web Pro a 300eur",
  description:
    "Offre limitee : obtenez un site web professionnel pour seulement 300eur. Design personnalise, livraison en 7 jours, hebergement 1 an inclus. Places limitees !",
  keywords:
    "offre speciale site web, site web pas cher, site internet 300 euros, creation site web promotion, site vitrine pas cher",
  alternates: { canonical: `${SITE.url}/offre-speciale` },
};

export default function OffreSpecialePage() {
  return <OffreSpecialeClient />;
}
