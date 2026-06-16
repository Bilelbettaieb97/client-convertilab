import type { Metadata } from "next";
import { SITE, PRICING } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SiteEcommerceContent from "./SiteEcommerceContent";

export const metadata: Metadata = {
  title: "Création Boutique en Ligne Paris | E-commerce dès 800€",
  description: "Création de boutique en ligne à Paris. Paiement Stripe, gestion des stocks, SEO intégré. Livraison en 21 jours. +150 clients, 4.9★. Devis gratuit en 24h.",
  alternates: { canonical: `${SITE.url}/services/sites-web/site-ecommerce` },
  openGraph: {
    title: "Création Boutique en Ligne Paris | E-commerce dès 800€ | ConvertiLab",
    description: "Création de boutique en ligne à Paris. Paiement Stripe, gestion des stocks, SEO intégré. Livraison en 21 jours. +150 clients, 4.9★. Devis gratuit en 24h.",
    url: `${SITE.url}/services/sites-web/site-ecommerce`,
  },
};

const schemas = [
  { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Sites Web", "item": `${SITE.url}/services/sites-web` },
    { "@type": "ListItem", "position": 4, "name": "E-commerce", "item": `${SITE.url}/services/sites-web/site-ecommerce` },
  ]},
  { "@context": "https://schema.org", "@type": "Service", "name": "Creation Site E-commerce", "description": "Boutique en ligne professionnelle avec paiement securise, gestion des stocks et SEO integre.", "url": `${SITE.url}/services/sites-web/site-ecommerce`, "provider": { "@type": "Organization", "name": SITE.name }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "47", "bestRating": "5", "worstRating": "1" }, "offers": { "@type": "Offer", "price": PRICING.ecommerce.from, "priceCurrency": "EUR", "availability": "https://schema.org/InStock" } },
];

export default function SiteEcommercePage() {
  return (
    <div className="min-h-screen">
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Navigation />
      <SiteEcommerceContent />
      <Footer />
    </div>
  );
}
