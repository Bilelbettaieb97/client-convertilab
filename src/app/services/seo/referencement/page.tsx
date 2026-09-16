import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { filArianeSchema } from "@/components/pole";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ReferencementContent, { FAQ, FIL, URL_PAGE, pole } from "./ReferencementContent";

// Le gabarit du layout ajoute « | ConvertiLab » : 44 + 14 = 58 caractères.
const TITRE = "Référencement SEO Paris : le forfait mensuel";
const DESCRIPTION =
  "Référencement naturel à Paris et Rueil-Malmaison : audit, technique, contenus, liens, fiche Google, visibilité IA. Forfait dès 500 €/mois, 6 mois minimum.";

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
    name: "Référencement naturel : forfait SEO mensuel",
    serviceType: "Référencement naturel (audit, technique, contenus, maillage, liens entrants, SEO local, visibilité IA)",
    description: DESCRIPTION,
    url: `${SITE.url}${URL_PAGE}`,
    provider: PROVIDER_ORGANISATION,
    areaServed: STRUCTURED_DATA.localBusiness.areaServed,
    isPartOf: { "@id": `${SITE.url}${pole.href}#service` },
    // Seules les offres affichées sur la page (section « Prix et engagement ») figurent ici.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Référencement naturel",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Forfait référencement naturel" },
          priceCurrency: "EUR",
          price: "500",
          description: "À partir de 500 € par mois, 6 mois minimum, puis libre mois par mois. Devis écrit avant tout engagement.",
          url: `${SITE.url}${URL_PAGE}#prix`,
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Audit SEO complet" },
          description: "Sur devis, inclus au démarrage du forfait.",
          url: `${SITE.url}${pole.sousPages[1].href}`,
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Mission SEO sur mesure" },
          description: "Sur devis, prix fixe écrit après un échange de 30 minutes.",
          url: `${SITE.url}${URL_PAGE}#prix`,
        },
      ],
    },
  },
];

export default function ReferencementPage() {
  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <ReferencementContent />
      <Footer />
    </div>
  );
}
