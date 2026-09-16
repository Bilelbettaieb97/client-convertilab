import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { filArianeSchema } from "@/components/pole";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SeoPageContent, { FAQ, FIL, URL_PAGE, pole } from "./SeoPageContent";

// Le gabarit du layout ajoute « | ConvertiLab » : 45 + 14 = 59 caractères.
const TITRE = "Agence SEO Rueil-Malmaison, Paris : local, IA";
const DESCRIPTION =
  "Référencement naturel, SEO local (fiche Google, avis) et visibilité dans ChatGPT, Perplexity et AI Overviews. Forfait dès 500 €/mois, effets en 3 à 6 mois.";

export const metadata: Metadata = {
  title: TITRE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}${URL_PAGE}` },
  openGraph: {
    title: `${TITRE} | ${SITE.name}`,
    description: DESCRIPTION,
    url: `${SITE.url}${URL_PAGE}`,
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
};

const jsonLd = [
  filArianeSchema(FIL, URL_PAGE),
  faqPageSchema(FAQ),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${URL_PAGE}#service`,
    name: pole.nomCourt,
    serviceType: "Référencement naturel, SEO local et visibilité dans les IA",
    description: DESCRIPTION,
    url: `${SITE.url}${URL_PAGE}`,
    provider: PROVIDER_ORGANISATION,
    areaServed: STRUCTURED_DATA.localBusiness.areaServed,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "500",
      description: "Forfait de référencement naturel, à partir de 500 € par mois, 6 mois minimum. Visibilité IA incluse.",
      url: `${SITE.url}${pole.sousPages[0].href}`,
    },
  },
];

export default function SeoPage() {
  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <SeoPageContent />
      <Footer />
    </div>
  );
}
