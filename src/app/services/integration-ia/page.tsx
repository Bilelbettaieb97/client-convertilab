import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { filArianeSchema } from "@/components/pole";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import IntegrationIaContent, { FAQ_INTEGRATION_IA, FIL_ARIANE, URL_INTEGRATION_IA } from "./IntegrationIaContent";

// Sous-page du pôle 04 « CRM et relances automatiques » (/services/crm) : l'URL reste /services/integration-ia.
const URL = URL_INTEGRATION_IA;
const PAGE_URL = `${SITE.url}${URL}`;

// Le gabarit du layout ajoute « | ConvertiLab » : le titre reste sous 60 caractères au total.
const TITLE = "Intégration IA pour PME et TPE à Paris";
const DESCRIPTION =
  "Automatisez devis, avis Google, relances et rédaction avec Claude (Anthropic). Diagnostic IA d'une journée, intégration sur mesure, prix fixe sous 24 h.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${TITLE} : automatisez avec Claude | ${SITE.name}`,
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
  name: "Intégration IA pour PME et TPE",
  serviceType: "Intégration d'intelligence artificielle et automatisation",
  description:
    "Diagnostic IA d'une journée puis intégration sur mesure de Claude (Anthropic) dans les outils d'une TPE ou PME : réponse aux demandes de devis, réponses aux avis Google, relances clients, prise de rendez-vous, rédaction, tri des emails, comptes rendus, extraction de documents.",
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
    name: "TPE et PME de 3 à 30 personnes",
  },
  // Sous-page du pôle CRM : le fil d'Ariane le dit, le Service aussi.
  isPartOf: { "@id": `${SITE.url}/services/crm#service` },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Offres d'intégration IA",
    itemListElement: [
      { "@type": "Offer", name: "Diagnostic IA d'une journée", description: "Inventaire des tâches répétitives, temps chiffré, plan écrit. Prix fixe communiqué sous 24 h." },
      { "@type": "Offer", name: "Intégration sur mesure", description: "Automatisations construites avec Claude, reliées aux outils de l'entreprise. Sur devis." },
      { "@type": "Offer", name: "Suivi mensuel optionnel", description: "Relecture des journaux, ajustement des consignes, ajout des tâches suivantes. Sur devis." },
    ],
  },
};

export default function IntegrationIaPage() {
  const jsonLd = [filArianeSchema(FIL_ARIANE, URL), serviceSchema, faqPageSchema(FAQ_INTEGRATION_IA)];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <IntegrationIaContent />
      <Footer />
    </div>
  );
}
