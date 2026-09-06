import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import EstimationPrixClient from "./EstimationPrixClient";

export const metadata: Metadata = {
  title: "Calculateur de Prix Site Internet : Simulateur Gratuit en 2 min",
  description:
    "Simulateur de prix de site internet gratuit : estimez le coût de votre site web en 2 minutes selon vos besoins. Site vitrine dès 490€, e-commerce dès 1490€. Estimation immédiate, devis sous 24h.",
  keywords:
    "calculateur de prix site internet, simulateur prix site internet, estimation site internet, estimation site web, calculateur prix site web, estimer son site internet, devis site internet en ligne",
  alternates: { canonical: `${SITE.url}/estimation-prix-site-web` },
  openGraph: {
    title: "Calculateur de Prix Site Internet : Simulateur Gratuit en 2 min",
    description:
      "Calculez le prix de votre site web en 2 minutes. Site vitrine dès 490€, e-commerce dès 1490€. Résultat immédiat, devis détaillé sous 24h.",
    url: `${SITE.url}/estimation-prix-site-web`,
    type: "website",
  },
};

export default function EstimationPrixPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Estimation prix site web", item: `${SITE.url}/estimation-prix-site-web` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <EstimationPrixClient />
    </>
  );
}
