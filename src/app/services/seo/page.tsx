import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SeoPageContent from "./SeoPageContent";

export const metadata: Metadata = {
  title: "SEO & Referencement Naturel Paris",
  description: "Referencement naturel et audit SEO. Atteignez la page 1 de Google avec une strategie sur-mesure. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/seo` },
  openGraph: { title: "SEO & Referencement Naturel Paris | ConvertiLab", description: "Referencement naturel et audit SEO. Atteignez la page 1 de Google avec une strategie sur-mesure. Devis gratuit.", url: `${SITE.url}/services/seo` },
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
      <Footer />
    </div>
  );
}
