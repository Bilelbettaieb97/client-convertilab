import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import DesignPageContent from "./DesignPageContent";

export const metadata: Metadata = {
  title: "Design UI/UX & Identite Visuelle Paris",
  description: "Design UI/UX et identite visuelle : logo, charte graphique, prototypes Figma. Interfaces qui convertissent. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/design` },
  openGraph: {
    title: "Design UI/UX & Identite Visuelle Paris | ConvertiLab",
    description: "Design UI/UX et identite visuelle : logo, charte graphique, prototypes Figma. Interfaces qui convertissent. Devis gratuit.",
    url: `${SITE.url}/services/design`,
  },
};

const schemas = [
  { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Design", "item": `${SITE.url}/services/design` },
  ]},
  { "@context": "https://schema.org", "@type": "Service", "name": "Design UI/UX & Identite Visuelle", "description": "Design UI/UX, identite visuelle, logo et charte graphique. Interfaces qui convertissent vos visiteurs en clients.", "url": `${SITE.url}/services/design`, "provider": { "@type": "Organization", "name": SITE.name } },
];

export default function DesignPage() {
  return (
    <div className="min-h-screen">
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Navigation />
      <DesignPageContent />
      <Footer />
    </div>
  );
}
