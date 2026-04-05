import type { Metadata } from "next";
import { SITE, PRICING } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SiteEcommerceContent from "./SiteEcommerceContent";

export const metadata: Metadata = {
  title: `Site E-commerce ${PRICING.ecommerce.label} | Agence Paris`,
  description: "Boutique en ligne professionnelle en 21-30 jours. Paiement securise, gestion des stocks, SEO integre. Devis gratuit sous 24h.",
  alternates: { canonical: `${SITE.url}/services/sites-web/site-ecommerce` },
  openGraph: {
    title: `Site E-commerce ${PRICING.ecommerce.label} | Agence Paris | ConvertiLab`,
    description: "Boutique en ligne professionnelle en 21-30 jours. Paiement securise, gestion des stocks, SEO integre. Devis gratuit sous 24h.",
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
  { "@context": "https://schema.org", "@type": "Service", "name": "Creation Site E-commerce", "description": "Boutique en ligne professionnelle avec paiement securise, gestion des stocks et SEO integre.", "url": `${SITE.url}/services/sites-web/site-ecommerce`, "provider": { "@type": "Organization", "name": SITE.name }, "offers": { "@type": "Offer", "price": PRICING.ecommerce.from, "priceCurrency": "EUR" } },
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
