import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MetaAdsContent from "./MetaAdsContent";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";

export const metadata: Metadata = {
  title: "Agence Meta Ads Paris | Facebook & Instagram Ads",
  description: "Publicités Facebook et Instagram : ciblage précis, créatifs optimisés, ROI maximisé. +150 clients, 4.9★. Audit de compte gratuit.",
  alternates: { canonical: `${SITE.url}/services/sea/meta-ads` },
  openGraph: { title: "Agence Meta Ads Paris | Facebook & Instagram Ads | ConvertiLab", description: "Publicités Facebook et Instagram : ciblage précis, créatifs optimisés, ROI maximisé. Audit de compte gratuit.", url: `${SITE.url}/services/sea/meta-ads`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }] },
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  { "@type": "ListItem", "position": 3, "name": "Publicite", "item": `${SITE.url}/services/sea` },
  { "@type": "ListItem", "position": 4, "name": "Meta Ads", "item": `${SITE.url}/services/sea/meta-ads` },
]};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Publicités Meta Ads",
  description: "Campagnes Facebook et Instagram Ads ciblées pour générer des leads et des ventes.",
  url: `${SITE.url}/services/sea/meta-ads`,
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
  },
  areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "400",
    availability: "https://schema.org/InStock",
  },
};

export default function MetaAdsPage() {
  return (<div className="min-h-screen"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><Navigation /><MetaAdsContent /><RelatedServicesSection exclude={["/services/sea/meta-ads"]} />
      <Footer /></div>);
}
