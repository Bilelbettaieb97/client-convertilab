import type { Metadata } from "next";
import { SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { filArianeSchema } from "@/components/pole";
import TikTokAdsContent, { FAQ_TIKTOK, FIL_ARIANE_TIKTOK, URL_TIKTOK_ADS } from "./TikTokAdsContent";

const URL = URL_TIKTOK_ADS;

/** ≤ 60 caractères : le gabarit du layout ajoute « | ConvertiLab ». */
const TITLE = "Agence TikTok Ads Paris : vidéos verticales";
/** ≤ 155 caractères. */
const DESCRIPTION =
  "Agence TikTok Ads à Paris et Rueil-Malmaison : vidéos verticales testées, Spark Ads, pixel et événements, budget média dès 500 €/mois. Diagnostic gratuit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}${URL}` },
  openGraph: {
    title: `${TITLE} | ${SITE.name}`,
    description: DESCRIPTION,
    url: `${SITE.url}${URL}`,
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function TikTokAdsPage() {
  const jsonLd = [
    filArianeSchema(FIL_ARIANE_TIKTOK, URL),
    faqPageSchema(FAQ_TIKTOK),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE.url}${URL}#service`,
      name: "TikTok Ads : création et gestion de campagnes publicitaires TikTok",
      serviceType: "Gestion de campagnes publicitaires TikTok Ads",
      description: DESCRIPTION,
      url: `${SITE.url}${URL}`,
      provider: PROVIDER_ORGANISATION,
      areaServed: STRUCTURED_DATA.localBusiness.areaServed,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Prestations TikTok Ads",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vidéos verticales et créas testées" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spark Ads" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pixel TikTok et événements de conversion" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ciblage, budget et enchères" } },
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <TikTokAdsContent />
      <Footer />
    </div>
  );
}
