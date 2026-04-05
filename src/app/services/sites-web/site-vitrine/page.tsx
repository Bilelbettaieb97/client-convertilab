import type { Metadata } from "next";
import { SITE, PRICING } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SiteVitrineContent from "./SiteVitrineContent";

export const metadata: Metadata = {
  title: `Site Vitrine ${PRICING.vitrine.label} | Agence Web Paris`,
  description: "Site vitrine professionnel en 10-15 jours. Design sur-mesure, SEO optimise, prix fixe garanti. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/sites-web/site-vitrine` },
  openGraph: {
    title: `Site Vitrine ${PRICING.vitrine.label} | Agence Web Paris | ConvertiLab`,
    description: "Site vitrine professionnel en 10-15 jours. Design sur-mesure, SEO optimise, prix fixe garanti. Devis gratuit.",
    url: `${SITE.url}/services/sites-web/site-vitrine`,
  },
};

const schemas = [
  { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Sites Web", "item": `${SITE.url}/services/sites-web` },
    { "@type": "ListItem", "position": 4, "name": "Site Vitrine", "item": `${SITE.url}/services/sites-web/site-vitrine` },
  ]},
  { "@context": "https://schema.org", "@type": "Service", "name": "Creation Site Vitrine", "description": "Site vitrine professionnel sur-mesure, responsive et optimise SEO. Livraison en 10-15 jours.", "url": `${SITE.url}/services/sites-web/site-vitrine`, "provider": { "@type": "Organization", "name": SITE.name }, "offers": { "@type": "Offer", "price": PRICING.vitrine.from, "priceCurrency": "EUR" } },
];

export default function SiteVitrinePage() {
  return (
    <div className="min-h-screen">
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Navigation />
      <SiteVitrineContent />
      <Footer />
    </div>
  );
}
