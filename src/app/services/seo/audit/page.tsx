import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AuditSeoContent from "./AuditSeoContent";

export const metadata: Metadata = {
  title: "Audit SEO Paris | Rapport Complet + Plan d'Action",
  description: "Audit SEO complet : technique, contenu, concurrence. Rapport détaillé + plan d'action priorisé. Premier audit gratuit.",
  alternates: { canonical: `${SITE.url}/services/seo/audit` },
  openGraph: { title: "Audit SEO Paris | Rapport Complet + Plan d'Action | ConvertiLab", description: "Audit SEO complet : technique, contenu, concurrence. Rapport détaillé + plan d'action priorisé. Premier audit gratuit.", url: `${SITE.url}/services/seo/audit` },
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  { "@type": "ListItem", "position": 3, "name": "SEO", "item": `${SITE.url}/services/seo` },
  { "@type": "ListItem", "position": 4, "name": "Audit SEO", "item": `${SITE.url}/services/seo/audit` },
]};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit SEO",
  description: "Audit SEO complet de votre site web : technique, on-page, contenu, mobile et local.",
  url: `${SITE.url}/services/seo/audit`,
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
    price: "300",
    availability: "https://schema.org/InStock",
  },
};

export default function AuditSeoPage() {
  return (<div className="min-h-screen"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><Navigation /><AuditSeoContent /><Footer /></div>);
}
