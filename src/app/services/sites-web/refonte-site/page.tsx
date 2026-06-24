import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import RefonteSiteContent from "./RefonteSiteContent";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";

export const metadata: Metadata = {
  title: "Refonte Site Web Paris | SEO Préservé, Design Moderne | ConvertiLab",
  description: "Modernisez votre site web : design actuel, SEO préservé, conversion optimisée. Audit gratuit et devis sous 24h.",
  alternates: { canonical: `${SITE.url}/services/sites-web/refonte-site` },
  openGraph: {
    title: "Refonte Site Web Paris | SEO Préservé, Design Moderne | ConvertiLab",
    description: "Modernisez votre site web : design actuel, SEO préservé, conversion optimisée. Audit gratuit et devis sous 24h.",
    url: `${SITE.url}/services/sites-web/refonte-site`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  { "@type": "ListItem", "position": 3, "name": "Sites Web", "item": `${SITE.url}/services/sites-web` },
  { "@type": "ListItem", "position": 4, "name": "Refonte de Site", "item": `${SITE.url}/services/sites-web/refonte-site` },
]};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Refonte de Site Web",
  description: "Modernisation complète de votre site web existant avec préservation du référencement SEO.",
  url: `${SITE.url}/services/sites-web/refonte-site`,
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
  },
  areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.reviews.rating,
    reviewCount: SITE.reviews.count,
    bestRating: "5",
    worstRating: "1",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "800",
    availability: "https://schema.org/InStock",
  },
};

export default function RefonteSitePage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navigation />
      <RefonteSiteContent />
      <RelatedServicesSection exclude={["/services/sites-web/refonte-site"]} />
      <Footer />
    </div>
  );
}
