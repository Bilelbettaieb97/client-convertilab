import type { Metadata } from "next";
import { SITE, STRUCTURED_DATA } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services Marketing Digital Paris",
  description: "Sites web des 500 euros, SEO, Google Ads, Meta Ads. +50 clients, +280% de CA moyen. Devis gratuit sous 24h, sans engagement.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: "Services Marketing Digital Paris | ConvertiLab",
    description: "Sites web des 500 euros, SEO, Google Ads, Meta Ads. +50 clients, +280% de CA moyen. Devis gratuit sous 24h, sans engagement.",
    url: `${SITE.url}/services`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  ],
};

const servicesSchema = {
  "@context": "https://schema.org",
  ...STRUCTURED_DATA.localBusiness,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Marketing Digital",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Creation de sites web" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Referencement SEO" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads" } },
    ]
  }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <Navigation />
      <ServicesPageContent />
      <Footer />
    </div>
  );
}
