import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { filArianeSchema } from "@/components/pole";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import NettoyageCrmContent, { FAQ_NETTOYAGE_CRM, FIL_ARIANE, URL_PAGE, pole } from "./NettoyageCrmContent";

const PAGE_URL = `${SITE.url}${URL_PAGE}`;

// Le gabarit du layout ajoute « | ConvertiLab » : 40 + 14 = 54 caractères.
const TITLE = "Nettoyage de CRM pour TPE et PME à Paris";
const DESCRIPTION =
  "Doublons fusionnés, contacts inactifs archivés, champs harmonisés, règles écrites pour un CRM qui reste propre. Export avant tout, prix fixe sous 24 h.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${TITLE} | ${SITE.name}`,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE.name}`,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Nettoyage de CRM pour TPE et PME",
  serviceType: "Nettoyage d'une base CRM (doublons fusionnés, contacts inactifs archivés, champs harmonisés, règles de doublons et d'archivage écrites)",
  description: DESCRIPTION,
  url: PAGE_URL,
  provider: PROVIDER_ORGANISATION,
  areaServed: [
    { "@type": "City", name: "Rueil-Malmaison" },
    { "@type": "City", name: "Paris" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
    { "@type": "Country", name: "France" },
  ],
  audience: { "@type": "BusinessAudience", name: "TPE et PME" },
  isPartOf: { "@id": `${SITE.url}${pole.href}#service` },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nettoyage de CRM",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Diagnostic CRM d'une journée",
        description: "Comptage des fiches, doublons, fiches incomplètes, contacts inactifs, formats. Règles écrites et prix fixe communiqué sous 24 h.",
      },
      {
        "@type": "Offer",
        name: "Nettoyage du CRM",
        description: "Export complet, fusion des doublons, archivage des contacts inactifs, harmonisation des champs, garde-fous et guide d'équipe. Sur devis, prix fixe écrit avant de commencer.",
      },
      {
        "@type": "Offer",
        name: "Suivi mensuel facultatif",
        description: "Nettoyage léger trimestriel et relecture des fiches incomplètes. Jamais imposé.",
      },
    ],
  },
};

export default function NettoyageCrmPage() {
  const jsonLd = [filArianeSchema(FIL_ARIANE, URL_PAGE), serviceSchema, faqPageSchema(FAQ_NETTOYAGE_CRM)];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <NettoyageCrmContent />
      <Footer />
    </div>
  );
}
