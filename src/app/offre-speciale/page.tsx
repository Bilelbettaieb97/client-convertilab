import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import OffreSpecialeClient from "./OffreSpecialeClient";

export const metadata: Metadata = {
  title: "Site Web Pro à 300€ — Offre Limitée",
  description:
    "Offre limitée : site vitrine 5 pages ou landing page haute conversion pour 300€. Design sur-mesure, SEO optimisé, livré en 7 jours. Vous êtes propriétaire. Places limitées !",
  keywords:
    "site web 300 euros, site vitrine pas cher, landing page pas cher, creation site web promotion, site internet pas cher Paris",
  alternates: { canonical: `${SITE.url}/offre-speciale` },
  openGraph: {
    title: "Site Web Pro à 300€ — Offre Limitée | ConvertiLab",
    description: "Site vitrine 5 pages ou landing page pour 300€. SEO optimisé, livré en 7 jours, vous êtes propriétaire.",
    url: `${SITE.url}/offre-speciale`,
  },
};

export default function OffreSpecialePage() {
  return <OffreSpecialeClient />;
}
