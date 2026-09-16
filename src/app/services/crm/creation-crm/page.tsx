import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { filArianeSchema } from "@/components/pole";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CreationCrmContent, { FAQ_CREATION_CRM, FIL_ARIANE, URL_PAGE, pole } from "./CreationCrmContent";

const PAGE_URL = `${SITE.url}${URL_PAGE}`;

// Le gabarit du layout ajoute « | ConvertiLab » : 39 + 14 = 53 caractères.
const TITLE = "Création de CRM pour TPE et PME à Paris";
const DESCRIPTION =
  "Mise en place de votre CRM (HubSpot, Pipedrive, Zoho ou un autre) : pipeline de vente, champs utiles, import des contacts, site relié. Prix fixe sous 24 h.";

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
  name: "Création de CRM pour TPE et PME",
  serviceType: "Mise en place complète d'un CRM (choix de l'outil, pipeline de vente, champs, import des contacts, site et campagnes reliés)",
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
    name: "Création de CRM",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Diagnostic CRM d'une journée",
        description: "Canaux, contacts, outils actuels, comparaison de deux ou trois CRM adaptés. Plan écrit et prix fixe communiqué sous 24 h.",
      },
      {
        "@type": "Offer",
        name: "Création du CRM",
        description: "Compte à votre nom, pipeline de vente, champs utiles, import des contacts après nettoyage, formulaires du site et campagnes reliés, prise en main. Sur devis, prix fixe écrit avant de commencer.",
      },
      {
        "@type": "Offer",
        name: "Suivi mensuel facultatif",
        description: "Relecture du pipeline, ajustement des relances, étape suivante. Jamais imposé.",
      },
    ],
  },
};

export default function CreationCrmPage() {
  const jsonLd = [filArianeSchema(FIL_ARIANE, URL_PAGE), serviceSchema, faqPageSchema(FAQ_CREATION_CRM)];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <CreationCrmContent />
      <Footer />
    </div>
  );
}
