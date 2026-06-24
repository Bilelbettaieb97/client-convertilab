import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import DemandeMaquetteClient from "./DemandeMaquetteClient";

export const metadata: Metadata = {
  title: "Maquette Gratuite Sous 48h — Visualisez Votre Site | ConvertiLab",
  description:
    "Demandez votre maquette de site web gratuite. Remplissez le formulaire en 2 minutes et recevez un design personnalisé sous 48h. Sans engagement.",
  keywords:
    "maquette site web gratuite, design site internet Paris, maquette gratuite agence web, aperçu site web personnalisé",
  alternates: { canonical: `${SITE.url}/demande-maquette` },
  openGraph: {
    title: "Maquette Gratuite Sous 48h — Visualisez Votre Futur Site",
    description:
      "Recevez une maquette personnalisée de votre site web sous 48h, gratuitement et sans engagement. Design adapté à votre secteur et vos couleurs.",
    url: `${SITE.url}/demande-maquette`,
    type: "website",
  },
};

export default function DemandeMaquettePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Demande de maquette", item: `${SITE.url}/demande-maquette` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Maquette de site web gratuite",
    description: "Recevez une maquette personnalisée de votre futur site web sous 48h, gratuitement et sans engagement.",
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Maquette gratuite et sans engagement",
    },
    areaServed: { "@type": "Country", name: "France" },
    url: `${SITE.url}/demande-maquette`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DemandeMaquetteClient />
    </>
  );
}
