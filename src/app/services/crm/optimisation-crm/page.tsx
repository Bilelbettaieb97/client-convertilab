import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { filArianeSchema } from "@/components/pole";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import OptimisationCrmContent, { FAQ_OPTIMISATION_CRM, FIL_ARIANE, URL_PAGE, pole } from "./OptimisationCrmContent";

const PAGE_URL = `${SITE.url}${URL_PAGE}`;

// Le gabarit du layout ajoute « | ConvertiLab » : 43 + 14 = 57 caractères.
const TITLE = "Optimisation de CRM pour TPE et PME à Paris";
const DESCRIPTION =
  "CRM en place mais sous-utilisé : étapes revues, relances automatiques par email, rappels de rendez-vous, tableau de bord lisible. Prix fixe sous 24 h.";

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
  name: "Optimisation de CRM pour TPE et PME",
  serviceType: "Optimisation d'un CRM existant (étapes revues, relances automatiques par email, rappels de rendez-vous, alertes internes, tableau de bord)",
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
    name: "Optimisation de CRM",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Diagnostic CRM d'une journée",
        description: "Ce qui est rempli, ce qui ne l'est pas, les devis sans suite, ce que l'outil sait automatiser. Plan écrit et prix fixe communiqué sous 24 h.",
      },
      {
        "@type": "Offer",
        name: "Optimisation du CRM",
        description: "Pipeline allégé, relances de devis par email, rappels de rendez-vous, alertes internes, tableau de bord, règles écrites. Sur devis, prix fixe écrit avant de commencer.",
      },
      {
        "@type": "Offer",
        name: "Suivi mensuel facultatif",
        description: "Relecture du pipeline, relances ajustées, automatisation suivante. Jamais imposé.",
      },
    ],
  },
};

export default function OptimisationCrmPage() {
  const jsonLd = [filArianeSchema(FIL_ARIANE, URL_PAGE), serviceSchema, faqPageSchema(FAQ_OPTIMISATION_CRM)];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <OptimisationCrmContent />
      <Footer />
    </div>
  );
}
