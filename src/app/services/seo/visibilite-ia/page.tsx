import type { Metadata } from "next";
import { SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { getPole } from "@/data/poles";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { filArianeSchema } from "@/components/pole";
import VisibiliteIaContent, {
  FAQ_VISIBILITE_IA,
  FIL_ARIANE_VISIBILITE_IA,
  URL_VISIBILITE_IA,
} from "./VisibiliteIaContent";

const pole = getPole("seo");
const URL = URL_VISIBILITE_IA;

/** ≤ 60 caractères : le gabarit du layout ajoute « | ConvertiLab ». */
const TITLE = "Visibilité IA : être cité par ChatGPT (GEO)";
const DESCRIPTION =
  "Référencement IA (GEO) à Rueil-Malmaison et Paris : contenu citable, données structurées, llms.txt, fiches à jour. Inclus dans le forfait SEO sans surcoût.";

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

export default function VisibiliteIaPage() {
  const jsonLd = [
    filArianeSchema(FIL_ARIANE_VISIBILITE_IA, URL),
    faqPageSchema(FAQ_VISIBILITE_IA),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE.url}${URL}#service`,
      name: "Visibilité IA : référencement dans ChatGPT, Perplexity et Google AI Overviews (GEO)",
      serviceType: "Generative Engine Optimization (référencement IA)",
      description: DESCRIPTION,
      url: `${SITE.url}${URL}`,
      provider: PROVIDER_ORGANISATION,
      areaServed: STRUCTURED_DATA.localBusiness.areaServed,
      isPartOf: { "@type": "Service", "@id": `${SITE.url}${pole.href}#service`, name: pole.nomCourt, url: `${SITE.url}${pole.href}` },
      offers: {
        "@type": "Offer",
        description: `Inclus dans le forfait SEO ${pole.prix}, ${pole.prixDetail}. Audit et mission ponctuelle sur devis.`,
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
      <VisibiliteIaContent />
      <Footer />
    </div>
  );
}
