import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { filArianeSchema } from "@/components/pole";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AuditSeoContent, { FAQ, FIL, URL_PAGE, pole } from "./AuditSeoContent";

// Le gabarit du layout ajoute « | ConvertiLab » : 42 + 14 = 56 caractères.
const TITRE = "Audit SEO Paris : rapport et plan d'action";
const DESCRIPTION =
  "Audit SEO complet à Paris et Rueil-Malmaison : technique, contenu, positions, concurrents, fiche Google, robots d'IA. Plan d'action écrit, devis sous 24 h.";

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

/**
 * JSON-LD : fil d'Ariane, FAQ (générée depuis la même liste que la FAQ visible)
 * et Service. Aucun prix dans le schéma : l'audit seul est sur devis et
 * la page n'affiche aucun montant pour lui (l'ancienne Offer à 300 € a été retirée).
 */
const jsonLd = [
  filArianeSchema(FIL, URL_PAGE),
  faqPageSchema(FAQ),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${URL_PAGE}#service`,
    name: "Audit SEO complet",
    serviceType: "Audit de référencement naturel (technique, contenu, positions, concurrents, fiche Google, robots d'IA)",
    description: DESCRIPTION,
    url: `${SITE.url}${URL_PAGE}`,
    provider: PROVIDER_ORGANISATION,
    areaServed: STRUCTURED_DATA.localBusiness.areaServed,
    isPartOf: { "@id": `${SITE.url}${pole.href}#service` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Audit SEO",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Audit SEO complet, commandé seul" },
          description: "Sur devis, prix fixe écrit après un échange de 30 minutes.",
          url: `${SITE.url}${URL_PAGE}#prix`,
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Audit SEO compris au démarrage du forfait SEO" },
          priceCurrency: "EUR",
          price: "500",
          description: "Forfait SEO à partir de 500 € par mois, 6 mois minimum, audit complet inclus au démarrage.",
          url: `${SITE.url}${pole.sousPages[0].href}`,
        },
      ],
    },
  },
];

export default function AuditSeoPage() {
  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <AuditSeoContent />
      <Footer />
    </div>
  );
}
