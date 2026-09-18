import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { filArianeSchema } from "@/components/pole";
import { POLES } from "@/data/poles";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ServicesPageContent, { FAQ_SERVICES, FIL_ARIANE_SERVICES } from "./ServicesPageContent";

const URL = "/services";
const PAGE_URL = `${SITE.url}${URL}`;

// 155 caractères maximum (règle du brief).
const DESCRIPTION =
  "Agence marketing digital à Rueil-Malmaison et Paris : site internet dès 490 €, Google et Meta Ads, SEO, visibilité IA, CRM et relances. Prix fixe sous 24h.";

export const metadata: Metadata = {
  title: "Services marketing digital Paris et Rueil (92)",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `Services marketing digital à Paris et Rueil-Malmaison | ${SITE.name}`,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
};

// La note agrégée n'est pas affichée sur cette page : elle reste déclarée sur l'accueil seulement.
const { aggregateRating: _noteAccueil, ...localBusinessSansNote } = STRUCTURED_DATA.localBusiness;
void _noteAccueil;

const servicesSchema = {
  "@context": "https://schema.org",
  ...localBusinessSansNote,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services marketing digital",
    itemListElement: POLES.map((pole) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: pole.nomCourt,
        url: `${SITE.url}${pole.href}`,
        provider: PROVIDER_ORGANISATION,
      dateModified: "2026-09-16",
      },
    })),
  },
};

export default function ServicesPage() {
  const jsonLd = [filArianeSchema(FIL_ARIANE_SERVICES, URL), servicesSchema, faqPageSchema(FAQ_SERVICES)];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <ServicesPageContent />
      <Footer />
    </div>
  );
}
