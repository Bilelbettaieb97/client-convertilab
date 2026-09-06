import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import OffreSpecialeClient from "./OffreSpecialeClient";

export const metadata: Metadata = {
  title: "Site Web Pro à 300€ : Offre Limitée",
  description:
    "Offre limitée : site vitrine 5 pages ou landing page haute conversion pour 300€. Design sur-mesure, SEO optimisé, livré en 2 semaines. Vous êtes propriétaire. Places limitées !",
  keywords:
    "site web 300 euros, site vitrine pas cher, landing page pas cher, création site web promotion, site internet pas cher Paris",
  alternates: { canonical: `${SITE.url}/offre-speciale` },
  openGraph: {
    title: "Site Web Pro à 300€ : Offre Limitée | ConvertiLab",
    description: "Site vitrine 5 pages ou landing page pour 300€. SEO optimisé, livré en 2 semaines, vous êtes propriétaire.",
    url: `${SITE.url}/offre-speciale`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function OffreSpecialePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Offre spéciale", item: `${SITE.url}/offre-speciale` },
    ],
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Site web professionnel à 300€ — Offre limitée",
    description: "Site vitrine 5 pages ou landing page haute conversion pour 300€. Design sur-mesure, SEO optimisé, livré en 2 semaines. Places limitées.",
    price: "300",
    priceCurrency: "EUR",
    seller: { "@type": "Organization", name: SITE.name, url: SITE.url },
    url: `${SITE.url}/offre-speciale`,
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-12-31",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Pourquoi seulement 300€ ?", acceptedAnswer: { "@type": "Answer", text: "C'est une offre de lancement limitée pour constituer notre portfolio et nos avis clients. Une fois les 10 places prises, le prix reviendra à 890€." } },
      { "@type": "Question", name: "Site vitrine ou landing page, comment choisir ?", acceptedAnswer: { "@type": "Answer", text: "Si vous avez besoin de présenter votre activité avec plusieurs pages (accueil, services, contact...), choisissez le site vitrine. Si vous voulez une seule page orientée conversion, choisissez la landing page." } },
      { "@type": "Question", name: "Est-ce que je suis vraiment propriétaire du site ?", acceptedAnswer: { "@type": "Answer", text: "Oui, à 100%. Vous recevez le code source complet, les accès hébergement, et le nom de domaine. Aucune dépendance à ConvertiLab après la livraison." } },
      { "@type": "Question", name: "Mon site sera-t-il visible sur Google ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Chaque site inclut une optimisation SEO complète : balises meta, sitemap, vitesse de chargement optimisée, responsive mobile. Votre site est prêt pour Google dès le jour 1." } },
      { "@type": "Question", name: "Combien de temps pour avoir mon site ?", acceptedAnswer: { "@type": "Answer", text: "2 semaines après validation de la maquette. La maquette est présentée sous 48h après notre premier échange." } },
      { "@type": "Question", name: "Y a-t-il des frais cachés ou un abonnement ?", acceptedAnswer: { "@type": "Answer", text: "Aucun. Les 300€ incluent tout : design, développement, SEO, SSL, hébergement 1 an. Après la première année, l'hébergement coûte environ 5€/mois." } },
      { "@type": "Question", name: "Quand dois-je payer ?", acceptedAnswer: { "@type": "Answer", text: "Aucun paiement à la réservation. Vous ne payez qu'après avoir vu et validé le résultat final. Zéro risque." } },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <OffreSpecialeClient />
    </>
  );
}
