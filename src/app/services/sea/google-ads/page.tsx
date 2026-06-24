import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import GoogleAdsContent from "./GoogleAdsContent";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";

export const metadata: Metadata = {
  title: "Agence Google Ads Paris | ROAS x4.8 Garanti",
  description: "Campagnes Google Ads optimisées : Search, Shopping, Display, Remarketing. x4.8 ROAS moyen. Audit gratuit et devis sous 24h.",
  alternates: { canonical: `${SITE.url}/services/sea/google-ads` },
  openGraph: { title: "Agence Google Ads Paris | ROAS x4.8 Garanti | ConvertiLab", description: "Campagnes Google Ads optimisées : Search, Shopping, Display, Remarketing. x4.8 ROAS moyen. Audit gratuit.", url: `${SITE.url}/services/sea/google-ads`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }] },
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  { "@type": "ListItem", "position": 3, "name": "Publicite", "item": `${SITE.url}/services/sea` },
  { "@type": "ListItem", "position": 4, "name": "Google Ads", "item": `${SITE.url}/services/sea/google-ads` },
]};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Campagnes Google Ads",
  description: "Création et gestion de campagnes Google Ads Search, Shopping et Display pour maximiser votre ROI.",
  url: `${SITE.url}/services/sea/google-ads`,
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
    price: "400",
    availability: "https://schema.org/InStock",
  },
};

export default function GoogleAdsPage() {
  return (<div className="min-h-screen"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><Navigation /><GoogleAdsContent /><RelatedServicesSection exclude={["/services/sea/google-ads"]} />
      <Footer /></div>);
}
