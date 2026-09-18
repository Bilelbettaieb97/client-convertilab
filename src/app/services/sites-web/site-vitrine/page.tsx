import type { Metadata } from "next";
import { PRICING, SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { getPole } from "@/data/poles";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { filArianeSchema } from "@/components/pole";
import SiteVitrineContent, { FAQ_SITE_VITRINE, FIL_ARIANE_SITE_VITRINE, URL_SITE_VITRINE } from "./SiteVitrineContent";

const pole = getPole("sites-web");
const URL = URL_SITE_VITRINE;

/** ≤ 60 caractères avec le suffixe « | ConvertiLab » du gabarit. Mot-clé principal conservé : « création site vitrine Paris ». */
const TITLE = "Création de site vitrine à Paris dès 890 €";
const DESCRIPTION =
  "Site vitrine professionnel à Paris et Rueil-Malmaison : 890 € ou 39 €/mois en paiement étalé, maquette gratuite sous 48 h, livré en 2 semaines. Devis 24 h.";

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

export default function SiteVitrinePage() {
  const jsonLd = [
    filArianeSchema(FIL_ARIANE_SITE_VITRINE, URL),
    faqPageSchema(FAQ_SITE_VITRINE),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE.url}${URL}#service`,
      name: "Création de site vitrine professionnel",
      serviceType: "Création de site internet",
      description: DESCRIPTION,
      url: `${SITE.url}${URL}`,
      provider: PROVIDER_ORGANISATION,
      dateModified: "2026-09-16",
      areaServed: STRUCTURED_DATA.localBusiness.areaServed,
      isRelatedTo: { "@type": "Service", "@id": `${SITE.url}${pole.href}#service`, name: pole.nomCourt, url: `${SITE.url}${pole.href}` },
      // Prix affiché sur la page (hero, section prix, FAQ) : le JSON-LD reflète ce que le visiteur lit.
      offers: {
        "@type": "Offer",
        price: String(PRICING.vitrine.from),
        priceCurrency: "EUR",
        url: `${SITE.url}${URL}#prix`,
        description: `Site vitrine professionnel jusqu'à cinq pages, ${PRICING.vitrine.monthly.replace(/(\d)€/g, "$1 €")}, paiement étalé, pas d'abonnement. Livré en 2 semaines.`,
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <SiteVitrineContent />
      <Footer />
    </div>
  );
}
