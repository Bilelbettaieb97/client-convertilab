import type { Metadata } from "next";
import { SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { getPole } from "@/data/poles";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { filArianeSchema } from "@/components/pole";
import GoogleAdsContent, { FAQ_GOOGLE_ADS, FIL_ARIANE_GOOGLE_ADS, URL_GOOGLE_ADS } from "./GoogleAdsContent";

const pole = getPole("publicite");
const URL = URL_GOOGLE_ADS;

/** ≤ 60 caractères avec le suffixe « | ConvertiLab » du gabarit. Mot-clé principal conservé : « agence Google Ads Paris ». */
const TITLE = "Agence Google Ads Paris : Search et Shopping";
const DESCRIPTION =
  "Agence Google Ads à Paris et Rueil-Malmaison : Search, Shopping, remarketing, compte à votre nom, suivi des conversions. Audit offert, devis sous 24 h.";

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

export default function GoogleAdsPage() {
  const jsonLd = [
    filArianeSchema(FIL_ARIANE_GOOGLE_ADS, URL),
    faqPageSchema(FAQ_GOOGLE_ADS),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE.url}${URL}#service`,
      name: "Campagnes Google Ads : Search, Shopping, remarketing et annonces locales",
      serviceType: "Gestion de campagnes Google Ads",
      description: DESCRIPTION,
      url: `${SITE.url}${URL}`,
      provider: PROVIDER_ORGANISATION,
      areaServed: STRUCTURED_DATA.localBusiness.areaServed,
      isRelatedTo: { "@type": "Service", "@id": `${SITE.url}${pole.href}#service`, name: pole.nomCourt, url: `${SITE.url}${pole.href}` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Types de campagnes Google Ads",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Campagnes Search" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Shopping" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remarketing et Display" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annonces locales et fiche Google" } },
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
      <GoogleAdsContent />
      <Footer />
    </div>
  );
}
