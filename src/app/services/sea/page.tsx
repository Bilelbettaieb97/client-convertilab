import type { Metadata } from "next";
import { SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { getPole } from "@/data/poles";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { filArianeSchema } from "@/components/pole";
import SeaPageContent, { FAQ_PUBLICITE, FIL_ARIANE_PUBLICITE } from "./SeaPageContent";

const pole = getPole("publicite");
const URL = pole.href;

const TITLE = "Agence Google Ads, Meta et Social Ads à Paris";
const DESCRIPTION =
  "Agence Google Ads et Meta Ads à Paris : campagnes Facebook, Instagram, TikTok, Pinterest et LinkedIn pilotées au coût par demande. Devis écrit sous 24 h.";

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

export default function SeaPage() {
  const jsonLd = [
    filArianeSchema(FIL_ARIANE_PUBLICITE, URL),
    faqPageSchema(FAQ_PUBLICITE),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE.url}${URL}#service`,
      name: "Publicité en ligne : Google Ads, Meta Ads et Social Ads",
      serviceType: "Gestion de campagnes publicitaires en ligne",
      description: DESCRIPTION,
      url: `${SITE.url}${URL}`,
      provider: PROVIDER_ORGANISATION,
      dateModified: "2026-09-16",
      areaServed: STRUCTURED_DATA.localBusiness.areaServed,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Plateformes publicitaires",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads", url: `${SITE.url}/services/sea/google-ads` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads (Facebook et Instagram)", url: `${SITE.url}/services/sea/meta-ads` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "TikTok Ads", url: `${SITE.url}/services/sea/tiktok-ads` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pinterest Ads", url: `${SITE.url}/services/sea/pinterest-ads` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "LinkedIn Ads", url: `${SITE.url}/services/sea/linkedin-ads` } },
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
      <SeaPageContent />
      <Footer />
    </div>
  );
}
