import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { filArianeSchema } from "@/components/pole";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SeoLocalContent, { FAQ, FIL, URL_PAGE, pole } from "./SeoLocalContent";

// Le gabarit du layout ajoute « | ConvertiLab » : 42 + 14 = 56 caractères.
const TITRE = "Référencement local : fiche Google et avis";
const DESCRIPTION =
  "Agence SEO local à Rueil-Malmaison et Paris : fiche Google, avis clients collectés avec MerciAvis, citations locales, pages villes. Inclus au forfait SEO.";

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
    name: "Référencement local : fiche Google et avis clients",
    serviceType: "Référencement local (fiche d'établissement Google, avis clients, citations locales, pages villes)",
    description: DESCRIPTION,
    url: `${SITE.url}${URL_PAGE}`,
    provider: PROVIDER_ORGANISATION,
    areaServed: STRUCTURED_DATA.localBusiness.areaServed,
    isPartOf: { "@id": `${SITE.url}${pole.href}#service` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Référencement local",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Forfait SEO avec référencement local inclus" },
          priceCurrency: "EUR",
          price: "500",
          description: "À partir de 500 € par mois, 6 mois minimum. Fiche Google, avis, citations et pages villes compris.",
          url: `${SITE.url}${pole.sousPages[0].href}`,
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Mission ponctuelle fiche Google et avis clients" },
          description: "Sur devis, prix fixe écrit après un échange de 30 minutes.",
          url: `${SITE.url}${URL_PAGE}#prix`,
        },
      ],
    },
  },
];

export default function SeoLocalPage() {
  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <SeoLocalContent />
      <Footer />
    </div>
  );
}
