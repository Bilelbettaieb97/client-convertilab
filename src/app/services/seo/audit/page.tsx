import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AuditSeoContent from "./AuditSeoContent";

export const metadata: Metadata = {
  title: "Audit SEO Complet",
  description: "Audit SEO complet : technique, contenu, concurrence. Rapport detaille + plan d'action priorise. Premier audit gratuit.",
  alternates: { canonical: `${SITE.url}/services/seo/audit` },
  openGraph: { title: "Audit SEO Complet | ConvertiLab", description: "Audit SEO complet : technique, contenu, concurrence. Rapport detaille + plan d'action priorise. Premier audit gratuit.", url: `${SITE.url}/services/seo/audit` },
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  { "@type": "ListItem", "position": 3, "name": "SEO", "item": `${SITE.url}/services/seo` },
  { "@type": "ListItem", "position": 4, "name": "Audit SEO", "item": `${SITE.url}/services/seo/audit` },
]};

export default function AuditSeoPage() {
  return (<div className="min-h-screen"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><Navigation /><AuditSeoContent /><Footer /></div>);
}
