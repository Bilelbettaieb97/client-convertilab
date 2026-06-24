import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SeaPageContent from "./SeaPageContent";

export const metadata: Metadata = {
  title: "Google Ads & Meta Ads | Agence SEA Paris",
  description: "Campagnes publicitaires Google Ads et Meta Ads optimisees. x4.8 ROAS moyen. Audit gratuit et devis sous 24h.",
  alternates: { canonical: `${SITE.url}/services/sea` },
  openGraph: { title: "Google Ads & Meta Ads | Agence SEA Paris | ConvertiLab", description: "Campagnes publicitaires Google Ads et Meta Ads optimisees. x4.8 ROAS moyen. Audit gratuit et devis sous 24h.", url: `${SITE.url}/services/sea`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }] },
};

const schemas = [
  { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "SEA", "item": `${SITE.url}/services/sea` },
  ]},
  { "@context": "https://schema.org", "@type": "Service", "name": "Google Ads & Meta Ads", "description": "Campagnes publicitaires Google Ads et Meta Ads optimisees pour maximiser votre ROI. x4.8 ROAS moyen.", "url": `${SITE.url}/services/sea`, "provider": { "@type": "Organization", "name": SITE.name } },
];

export default function SeaPage() {
  return (<div className="min-h-screen">{schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}<Navigation /><SeaPageContent /><Footer /></div>);
}
