import type { Metadata } from "next";
import { SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { filArianeSchema } from "@/components/pole";
import MetaAdsContent, { FAQ_META_ADS, FIL_ARIANE_META_ADS, URL_META_ADS } from "./MetaAdsContent";

const URL = URL_META_ADS;

/** Title ≤ 60 caractères (le gabarit du layout ajoute « | ConvertiLab »). */
const TITLE = "Agence Meta Ads Paris : compte à votre nom, audit offert";
/** Description ≤ 155 caractères. */
const DESCRIPTION =
  "Agence Meta Ads à Paris et Rueil-Malmaison : publicités Facebook et Instagram pilotées au coût par demande, compte et pixel à votre nom. Audit gratuit.";

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

export default function MetaAdsPage() {
  const jsonLd = [
    filArianeSchema(FIL_ARIANE_META_ADS, URL),
    faqPageSchema(FAQ_META_ADS),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE.url}${URL}#service`,
      name: "Meta Ads : publicité Facebook et Instagram",
      serviceType: "Gestion de campagnes publicitaires Facebook et Instagram",
      description: DESCRIPTION,
      url: `${SITE.url}${URL}`,
      provider: PROVIDER_ORGANISATION,
      dateModified: "2026-09-16",
      areaServed: STRUCTURED_DATA.localBusiness.areaServed,
    },
  ];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <MetaAdsContent />
      <Footer />
    </div>
  );
}
