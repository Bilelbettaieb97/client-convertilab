import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import OffreMensuelleClient from "./OffreMensuelleClient";

export const metadata: Metadata = {
  title: "Site Internet à 39€/mois : Propriétaire, Visible sur Google",
  description:
    "Votre site internet professionnel dès 39€/mois. Vous êtes propriétaire, visible sur Google dès le lancement. Design sur-mesure, SEO optimisé, livré en 2 semaines.",
  keywords:
    "site internet pas cher, site web 39 euros, création site internet mensuel, site professionnel abordable, propriétaire site web",
  alternates: { canonical: `${SITE.url}/offre-mensuelle` },
  openGraph: {
    title: "Site Internet Professionnel à 39€/mois : Propriétaire & Visible sur Google",
    description:
      "Démarrez votre site web professionnel dès 39€/mois sans apport. Design sur-mesure, SEO optimisé, livré en 2 semaines. Vous êtes propriétaire du code.",
    url: `${SITE.url}/offre-mensuelle`,
    type: "website",
  },
};

export default function OffreMensuellePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Offre mensuelle", item: `${SITE.url}/offre-mensuelle` },
    ],
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Site internet professionnel à 39€/mois",
    description: "Création de site internet professionnel avec design sur-mesure, SEO optimisé et livraison en 2 semaines. Paiement mensuel, propriétaire du code.",
    price: "39",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "39",
      priceCurrency: "EUR",
      unitText: "month",
    },
    seller: { "@type": "Organization", name: SITE.name, url: SITE.url },
    url: `${SITE.url}/offre-mensuelle`,
    availability: "https://schema.org/InStock",
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <Navigation />
      <OffreMensuelleClient />
      <Footer />
    </div>
  );
}
