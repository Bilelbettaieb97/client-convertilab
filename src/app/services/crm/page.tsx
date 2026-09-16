import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { filArianeSchema } from "@/components/pole";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CrmContent, { FAQ_CRM, FIL_ARIANE, pole } from "./CrmContent";

const URL = pole.href;
const PAGE_URL = `${SITE.url}${URL}`;

// Le gabarit du layout ajoute « | ConvertiLab » : le titre reste sous 60 caractères au total.
const TITLE = "CRM et relances automatiques pour TPE et PME";
const DESCRIPTION =
  "Agence CRM pour TPE et PME : CRM en place (HubSpot, Salesforce, Pipedrive ou le vôtre), relances automatiques, site et campagnes reliés. Prix fixe écrit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${TITLE} à Paris | ${SITE.name}`,
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
  name: "CRM et relances automatiques pour TPE et PME",
  serviceType: "Mise en place de CRM et automatisation des relances commerciales",
  description:
    "Mise en place d'un CRM (HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM, ou l'outil déjà en place), relances automatiques par email des devis sans réponse et rappels de rendez-vous, formulaires du site et campagnes Google Ads et Meta Ads reliés au CRM avec leur source. Diagnostic d'une journée, prix fixe communiqué sous 24 h.",
  url: PAGE_URL,
  provider: PROVIDER_ORGANISATION,
  areaServed: [
    { "@type": "City", name: "Rueil-Malmaison" },
    { "@type": "City", name: "Paris" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
    { "@type": "Country", name: "France" },
  ],
  audience: {
    "@type": "BusinessAudience",
    name: "TPE et PME",
  },
  // Les quatre sous-pages du pôle (poles.ts) : une offre chacune, avec son URL.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Offres CRM et relances automatiques",
    itemListElement: pole.sousPages.map((sp) => ({
      "@type": "Offer",
      name: sp.label,
      description: `${sp.description} Sur devis, prix fixe écrit avant de commencer.`,
      url: `${SITE.url}${sp.href}`,
    })),
  },
};

export default function CrmPage() {
  const jsonLd = [filArianeSchema(FIL_ARIANE, URL), serviceSchema, faqPageSchema(FAQ_CRM)];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <CrmContent />
      <Footer />
    </div>
  );
}
