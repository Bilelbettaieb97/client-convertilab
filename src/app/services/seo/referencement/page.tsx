import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ReferencementContent from "./ReferencementContent";

export const metadata: Metadata = {
  title: "Referencement SEO | Page 1 Google",
  description: "Strategie SEO complete : optimisation on-page, netlinking, contenu. Atteignez la page 1 de Google. Audit SEO gratuit.",
  alternates: { canonical: `${SITE.url}/services/seo/referencement` },
  openGraph: { title: "Referencement SEO | Page 1 Google | ConvertiLab", description: "Strategie SEO complete : optimisation on-page, netlinking, contenu. Atteignez la page 1 de Google. Audit SEO gratuit.", url: `${SITE.url}/services/seo/referencement` },
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  { "@type": "ListItem", "position": 3, "name": "SEO", "item": `${SITE.url}/services/seo` },
  { "@type": "ListItem", "position": 4, "name": "Referencement SEO", "item": `${SITE.url}/services/seo/referencement` },
]};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Référencement SEO",
  description: "Service de référencement naturel SEO pour apparaître en première page Google durablement.",
  url: `${SITE.url}/services/seo/referencement`,
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
  },
  areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "500",
    availability: "https://schema.org/InStock",
  },
};

export default function ReferencementPage() {
  return (<div className="min-h-screen"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><Navigation /><ReferencementContent /><Footer /></div>);
}
