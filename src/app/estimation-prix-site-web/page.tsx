import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import EstimationPrixClient from "./EstimationPrixClient";
import EstimationPrixContenu from "./EstimationPrixContenu";

export const metadata: Metadata = {
  title: "Simulateur de prix site internet : estimation gratuite en 2 min",
  description:
    "Calculateur de prix de site internet gratuit : landing page 490 €, site vitrine 890 €, e-commerce dès 1 490 €. Grille publique, estimation personnalisée sous 24 h, sans engagement.",
  keywords:
    "calculateur de prix site internet, simulateur prix site internet, estimation site internet, estimation site web, calculateur prix site web, estimer son site internet, devis site internet en ligne",
  alternates: { canonical: `${SITE.url}/estimation-prix-site-web` },
  openGraph: {
    title: "Simulateur de prix site internet : estimation gratuite en 2 min",
    description:
      "Calculez le prix de votre site internet en 2 minutes. Landing page 490 €, site vitrine 890 €, e-commerce dès 1 490 €. Estimation détaillée sous 24 h.",
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
      <EstimationPrixClient>
        <EstimationPrixContenu />
      </EstimationPrixClient>
    </>
  );
}
