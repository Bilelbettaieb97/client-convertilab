import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import RefonteSiteContent from "./RefonteSiteContent";

export const metadata: Metadata = {
  title: "Refonte Site Web | Modernisation SEO",
  description: "Modernisez votre site web : design actuel, SEO preserve, conversion optimisee. Audit gratuit et devis sous 24h.",
  alternates: { canonical: `${SITE.url}/services/sites-web/refonte-site` },
  openGraph: {
    title: "Refonte Site Web | Modernisation SEO | ConvertiLab",
    description: "Modernisez votre site web : design actuel, SEO preserve, conversion optimisee. Audit gratuit et devis sous 24h.",
    url: `${SITE.url}/services/sites-web/refonte-site`,
  },
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  { "@type": "ListItem", "position": 3, "name": "Sites Web", "item": `${SITE.url}/services/sites-web` },
  { "@type": "ListItem", "position": 4, "name": "Refonte de Site", "item": `${SITE.url}/services/sites-web/refonte-site` },
]};

export default function RefonteSitePage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />
      <RefonteSiteContent />
      <Footer />
    </div>
  );
}
