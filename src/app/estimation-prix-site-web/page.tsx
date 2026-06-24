import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import EstimationPrixClient from "./EstimationPrixClient";

export const metadata: Metadata = {
  title: "Combien Coûte un Site Web ? Estimation Gratuite en 2 min",
  description:
    "Estimez gratuitement le prix de votre site web en 2 minutes. Site vitrine dès 500€, e-commerce dès 800€, landing page dès 500€. Devis personnalisé sous 24h.",
  keywords:
    "estimation prix site web, devis site internet, combien coûte un site web, prix site vitrine, prix site e-commerce, tarif création site web France",
  alternates: { canonical: `${SITE.url}/estimation-prix-site-web` },
  openGraph: {
    title: "Estimation Gratuite : Combien Coûte Votre Site Web ?",
    description:
      "Calculez le prix de votre site web en 2 minutes. Site vitrine dès 500€, e-commerce dès 800€. Résultat immédiat, devis détaillé sous 24h.",
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment estimer le prix de son site web",
    description: "Calculez en 2 minutes le budget de votre site web selon vos besoins.",
    totalTime: "PT2M",
    step: [
      { "@type": "HowToStep", position: 1, name: "Choisissez le type de site", text: "Site vitrine, landing page, e-commerce ou refonte — sélectionnez ce qui correspond à votre projet." },
      { "@type": "HowToStep", position: 2, name: "Précisez vos besoins", text: "Nombre de pages, fonctionnalités (réservation, boutique, blog), design souhaité." },
      { "@type": "HowToStep", position: 3, name: "Obtenez votre estimation", text: "Le calculateur affiche immédiatement une fourchette de prix. Recevez un devis détaillé sous 24h." },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <EstimationPrixClient />
    </>
  );
}
