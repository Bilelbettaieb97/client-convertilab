import type { Metadata } from "next";
import { SITE, PRICING } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SiteVitrineContent from "./SiteVitrineContent";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";

export const metadata: Metadata = {
  title: "Création Site Vitrine Paris | Livraison 7 jours dès 500€",
  description: "Création de site vitrine professionnel à Paris en 7 jours. Design sur-mesure, SEO optimisé, prix fixe garanti. +150 clients, 4.9★. Devis gratuit sous 24h.",
  alternates: { canonical: `${SITE.url}/services/sites-web/site-vitrine` },
  openGraph: {
    title: "Création Site Vitrine Paris | Livraison 7 jours dès 500€ | ConvertiLab",
    description: "Création de site vitrine professionnel à Paris en 7 jours. Design sur-mesure, SEO optimisé, prix fixe garanti. +150 clients, 4.9★. Devis gratuit sous 24h.",
    url: `${SITE.url}/services/sites-web/site-vitrine`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

const schemas = [
  { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Sites Web", "item": `${SITE.url}/services/sites-web` },
    { "@type": "ListItem", "position": 4, "name": "Site Vitrine", "item": `${SITE.url}/services/sites-web/site-vitrine` },
  ]},
  { "@context": "https://schema.org", "@type": "Service", "name": "Creation Site Vitrine", "description": "Site vitrine professionnel sur-mesure, responsive et optimise SEO. Livraison en 10-15 jours.", "url": `${SITE.url}/services/sites-web/site-vitrine`, "provider": { "@type": "Organization", "name": SITE.name }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": SITE.reviews.rating, "reviewCount": SITE.reviews.count, "bestRating": "5", "worstRating": "1" }, "offers": { "@type": "Offer", "price": PRICING.vitrine.from, "priceCurrency": "EUR", "availability": "https://schema.org/InStock" } },
];

export default function SiteVitrinePage() {
  return (
    <div className="min-h-screen">
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Navigation />
      <SiteVitrineContent />
      <RelatedServicesSection exclude={["/services/sites-web/site-vitrine"]} />
      <Footer />
    </div>
  );
}
