import type { Metadata } from "next";
import { SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { filArianeSchema } from "@/components/pole";
import LinkedinAdsContent, { FAQ_LINKEDIN_ADS, FIL_ARIANE_LINKEDIN_ADS, URL_LINKEDIN_ADS } from "./LinkedinAdsContent";

const URL = URL_LINKEDIN_ADS;

/** 43 caractères : le gabarit du layout ajoute « | ConvertiLab » (total ≤ 60). */
const TITLE = "Agence LinkedIn Ads à Paris : publicité B2B";
/** ≤ 155 caractères. */
const DESCRIPTION =
  "Agence LinkedIn Ads à Paris et Rueil-Malmaison : ciblage par poste, secteur et taille d'entreprise, Lead Gen Forms, compte à votre nom. Devis sous 24 h.";

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

export default function LinkedinAdsPage() {
  const jsonLd = [
    filArianeSchema(FIL_ARIANE_LINKEDIN_ADS, URL),
    faqPageSchema(FAQ_LINKEDIN_ADS),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE.url}${URL}#service`,
      name: "LinkedIn Ads : publicité B2B ciblée par poste, secteur et taille d'entreprise",
      serviceType: "Gestion de campagnes LinkedIn Ads",
      description: DESCRIPTION,
      url: `${SITE.url}${URL}`,
      provider: PROVIDER_ORGANISATION,
      areaServed: STRUCTURED_DATA.localBusiness.areaServed,
      isPartOf: { "@id": `${SITE.url}/services/sea#service` },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Entreprises B2B, cabinets, consultants, organismes de formation, recrutement",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <LinkedinAdsContent />
      <Footer />
    </div>
  );
}
