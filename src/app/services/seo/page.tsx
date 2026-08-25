import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SeoCheckCta from "@/components/internal-links/SeoCheckCta";
import SeoPageContent from "./SeoPageContent";

export const metadata: Metadata = {
  title: "SEO & Référencement Naturel Paris : Page 1 Google",
  description: "Référencement naturel et audit SEO. Atteignez la page 1 de Google avec une stratégie sur-mesure. +150 clients, résultats dès 3 mois. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/seo` },
  openGraph: { title: "SEO & Référencement Naturel Paris | ConvertiLab", description: "Référencement naturel et audit SEO. Atteignez la page 1 de Google avec une stratégie sur-mesure. Devis gratuit.", url: `${SITE.url}/services/seo`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }] },
};

const schemas = [
  { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "SEO", "item": `${SITE.url}/services/seo` },
  ]},
  { "@context": "https://schema.org", "@type": "Service", "name": "SEO & Referencement Naturel", "description": "Strategie SEO sur-mesure pour atteindre la page 1 de Google. Audit technique, optimisation on-page et netlinking.", "url": `${SITE.url}/services/seo`, "provider": { "@type": "Organization", "name": SITE.name } },
];

export default function SeoPage() {
  return (
    <div className="min-h-screen">
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Navigation />
      <SeoPageContent />
      <SeoCheckCta title="Découvrez votre potentiel SEO avant de vous lancer" />
      <Footer />
    </div>
  );
}
