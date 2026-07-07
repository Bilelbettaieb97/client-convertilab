import type { Metadata } from "next";
import { SITE, STRUCTURED_DATA } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services Marketing Digital Paris — Sites Web, SEO, Google Ads",
  description: "Agence marketing digital à Paris : création de sites web dès 500€, SEO, Google Ads, Meta Ads. +150 clients accompagnés, +280% de CA moyen. Devis gratuit sous 24h.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: "Services Marketing Digital Paris | ConvertiLab",
    description: "Sites web dès 500€, SEO, Google Ads, Meta Ads. +150 clients, +280% de CA moyen. Devis gratuit sous 24h.",
    url: `${SITE.url}/services`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
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
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Création de sites web", "url": `${SITE.url}/services/sites-web` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Référencement SEO", "url": `${SITE.url}/services/seo` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads", "url": `${SITE.url}/services/sea/google-ads` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads Facebook Instagram", "url": `${SITE.url}/services/sea/meta-ads` } },
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
