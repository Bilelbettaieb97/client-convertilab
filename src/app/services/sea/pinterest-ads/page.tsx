import type { Metadata } from "next";
import { SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { getPole } from "@/data/poles";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { filArianeSchema } from "@/components/pole";
import PinterestAdsContent, { FAQ_PINTEREST, FIL_ARIANE_PINTEREST, URL_PINTEREST_ADS } from "./PinterestAdsContent";

const pole = getPole("publicite");
const URL = URL_PINTEREST_ADS;

const TITLE = "Agence Pinterest Ads : épingles sponsorisées";
const DESCRIPTION =
  "Agence Pinterest Ads : épingles sponsorisées, catalogue relié, tag installé, coût par commande suivi. Décoration, mariage, mode, e-commerce. Audit offert.";

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

export default function PinterestAdsPage() {
  const jsonLd = [
    filArianeSchema(FIL_ARIANE_PINTEREST, URL),
    faqPageSchema(FAQ_PINTEREST),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE.url}${URL}#service`,
      name: "Pinterest Ads : épingles sponsorisées et catalogue produit",
      serviceType: "Gestion de campagnes publicitaires Pinterest",
      description: DESCRIPTION,
      url: `${SITE.url}${URL}`,
      provider: PROVIDER_ORGANISATION,
      dateModified: "2026-09-16",
      areaServed: STRUCTURED_DATA.localBusiness.areaServed,
      isPartOf: { "@type": "Service", "@id": `${SITE.url}${pole.href}#service`, name: pole.nomCourt, url: `${SITE.url}${pole.href}` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Prestations Pinterest Ads",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Épingles sponsorisées (image, vidéo, carrousel, collection)" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Catalogue et épingles produit" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ciblage par mots-clés, centres d'intérêt et audiences" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tag Pinterest et suivi des conversions" } },
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
      <PinterestAdsContent />
      <Footer />
    </div>
  );
}
