import type { Metadata } from "next";
import { SITE, PRICING } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LandingPageContent from "./LandingPageContent";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";

export const metadata: Metadata = {
  title: "Création Landing Page Paris | Haute Conversion en 5 jours",
  description: "Landing page haute conversion livrée en 5-7 jours. Optimisée pour Google Ads & Meta Ads. +150 clients, prix fixe garanti. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/sites-web/landing-page` },
  openGraph: {
    title: "Création Landing Page Paris | Haute Conversion en 5 jours | ConvertiLab",
    description: "Landing page haute conversion livrée en 5-7 jours. Optimisée pour Google Ads & Meta Ads. +150 clients, prix fixe garanti. Devis gratuit.",
    url: `${SITE.url}/services/sites-web/landing-page`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Sites Web", "item": `${SITE.url}/services/sites-web` },
    { "@type": "ListItem", "position": 4, "name": "Landing Page", "item": `${SITE.url}/services/sites-web/landing-page` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Qu'est-ce qu'une landing page exactement ?", "acceptedAnswer": { "@type": "Answer", "text": "C'est une page web autonome, concue specifiquement pour convertir les visiteurs en leads ou clients. Contrairement a un site classique, elle n'a qu'un seul objectif : inciter a l'action (formulaire, achat, inscription)." } },
    { "@type": "Question", "name": "Combien de temps pour créer ma landing page ?", "acceptedAnswer": { "@type": "Answer", "text": "5 a 7 jours ouvres entre le brief valide et la mise en ligne. Nous respectons ce delai avec un engagement de 10% de remise en cas de depassement." } },
    { "@type": "Question", "name": "Ma landing page sera-t-elle compatible mobile ?", "acceptedAnswer": { "@type": "Answer", "text": "Absolument. Le design est pense mobile-first : 70% du trafic publicitaire vient du mobile. Votre page sera parfaitement optimisée sur tous les ecrans." } },
    { "@type": "Question", "name": "Puis-je utiliser ma landing page pour Google Ads et Meta Ads ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, c'est exactement pour ca qu'elle est concue. Nous integrons le tracking Google Analytics, Google Ads et Meta Pixel pour mesurer vos conversions." } },
    { "@type": "Question", "name": "Que se passe-t-il apres la livraison ?", "acceptedAnswer": { "@type": "Answer", "text": "Vous beneficiez d'1 mois de support technique inclus. Nous restons disponibles pour les ajustements mineurs et le suivi des performances." } },
    { "@type": "Question", "name": "Proposez-vous le paiement en plusieurs fois ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, paiement en 2 ou 3 fois sans frais : un acompte au demarrage, le solde a la livraison." } },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Création Landing Page",
  "description": "Landing page haute conversion optimisée pour Google Ads et Meta Ads. Livraison en 5-7 jours.",
  "url": `${SITE.url}/services/sites-web/landing-page`,
  "provider": { "@type": "Organization", "name": SITE.name },
  "offers": { "@type": "Offer", "price": PRICING.landing.from, "priceCurrency": "EUR" ,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.reviews.rating,
      reviewCount: SITE.reviews.count,
      bestRating: "5",
      worstRating: "1",
    }
  },
};

export default function LandingPagePage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navigation />
      <LandingPageContent />
      <RelatedServicesSection exclude={["/services/sites-web/landing-page"]} />
      <Footer />
    </div>
  );
}
