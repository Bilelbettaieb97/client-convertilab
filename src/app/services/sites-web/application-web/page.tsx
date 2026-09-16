import type { Metadata } from "next";
import { SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { filArianeSchema } from "@/components/pole";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ApplicationWebContent from "./ApplicationWebContent";
import { APPLICATION_WEB_FAQ, APPLICATION_WEB_FIL, APPLICATION_WEB_URL } from "./donnees";

const URL_PAGE = `${SITE.url}${APPLICATION_WEB_URL}`;

// 43 caractères : le gabarit de titre du layout ajoute « | ConvertiLab » (57 au total, sous 60).
const TITLE = "Application web sur mesure à Paris et Rueil";
const DESCRIPTION =
  "Application web sur mesure à Paris et Rueil-Malmaison : portail client, rendez-vous, devis en ligne, outil métier. Prix fixe sur devis, code à votre nom.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL_PAGE },
  openGraph: {
    title: `${TITLE} | ${SITE.name}`,
    description: DESCRIPTION,
    url: URL_PAGE,
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

/** Service sans Offer chiffrée : l'application est sur devis, rien n'est affiché qui ne soit dans le HTML. */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL_PAGE}#service`,
  name: "Application web sur mesure",
  serviceType: "Développement d'application web sur mesure",
  description: DESCRIPTION,
  url: URL_PAGE,
  provider: PROVIDER_ORGANISATION,
  areaServed: STRUCTURED_DATA.localBusiness.areaServed,
  isPartOf: { "@type": "Service", url: `${SITE.url}/services/sites-web` },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Types d'applications web",
    itemListElement: [
      "Portail client",
      "Prise de rendez-vous et réservation en ligne",
      "Devis et configurateur en ligne",
      "Espace membre et formation",
      "Tableau de bord métier",
      "Outil interne relié à vos logiciels",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

export default function ApplicationWebPage() {
  const jsonLd = [filArianeSchema(APPLICATION_WEB_FIL, APPLICATION_WEB_URL), serviceSchema, faqPageSchema(APPLICATION_WEB_FAQ)];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <ApplicationWebContent />
      <Footer />
    </div>
  );
}
