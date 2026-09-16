import type { Metadata } from "next";
import { PRICING, SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { filArianeSchema } from "@/components/pole";
import LandingPageContent, { FAQ_LANDING, FIL_ARIANE_LANDING, URL_LANDING_PAGE } from "./LandingPageContent";

const URL = URL_LANDING_PAGE;

/** ≤ 60 caractères : le gabarit du layout ajoute « | ConvertiLab ». */
const TITLE = "Landing page 490 €, livrée en 5 à 7 jours";
/** ≤ 155 caractères. */
const DESCRIPTION =
  "Création de landing page à Rueil-Malmaison et Paris : une page, un objectif, des demandes comptées. 490 €, livrée en 5 à 7 jours, devis écrit sous 24 h.";

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

export default function LandingPagePage() {
  const jsonLd = [
    filArianeSchema(FIL_ARIANE_LANDING, URL),
    faqPageSchema(FAQ_LANDING),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE.url}${URL}#service`,
      name: "Création de landing page",
      serviceType: "Création de landing page orientée conversion",
      description: DESCRIPTION,
      url: `${SITE.url}${URL}`,
      provider: PROVIDER_ORGANISATION,
      areaServed: STRUCTURED_DATA.localBusiness.areaServed,
      // Prix affiché tel quel sur la page (section « Combien coûte une landing page ? »).
      offers: {
        "@type": "Offer",
        price: PRICING.landing.from,
        priceCurrency: "EUR",
        url: `${SITE.url}${URL}#prix`,
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <LandingPageContent />
      <Footer />
    </div>
  );
}
