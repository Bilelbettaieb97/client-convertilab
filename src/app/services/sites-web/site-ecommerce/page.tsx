import type { Metadata } from "next";
import { PRICING, SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { filArianeSchema } from "@/components/pole";
import SiteEcommerceContent from "./SiteEcommerceContent";
import { FAQ_ECOMMERCE, FIL_ARIANE_ECOMMERCE, URL_SITE_ECOMMERCE } from "./donnees";

const URL = URL_SITE_ECOMMERCE;

/** ≤ 60 caractères : le gabarit du layout ajoute « | ConvertiLab ». */
const TITLE = "Création de boutique en ligne à Paris";
/** ≤ 155 caractères. */
const DESCRIPTION =
  "Création de site e-commerce à Paris et Rueil-Malmaison : catalogue, paiement Stripe ou PayPal, commandes et stock suivis. Dès 1 490 €, paiement étalé.";

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

export default function SiteEcommercePage() {
  const jsonLd = [
    filArianeSchema(FIL_ARIANE_ECOMMERCE, URL),
    faqPageSchema(FAQ_ECOMMERCE),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE.url}${URL}#service`,
      name: "Création de site e-commerce",
      serviceType: "Création de boutique en ligne",
      description: DESCRIPTION,
      url: `${SITE.url}${URL}`,
      provider: PROVIDER_ORGANISATION,
      dateModified: "2026-09-16",
      areaServed: STRUCTURED_DATA.localBusiness.areaServed,
      // Le prix affiché sur la page (« à partir de 1 490 € ») : Offer aligné sur ce que le visiteur lit.
      offers: {
        "@type": "Offer",
        name: `Site e-commerce à partir de ${PRICING.ecommerce.from.toLocaleString("fr-FR")} €`,
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: PRICING.ecommerce.from,
          priceCurrency: "EUR",
        },
        url: `${SITE.url}${URL}#prix`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ce que contient la boutique",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Catalogue et fiches produits" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paiement sécurisé Stripe ou PayPal" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Panier et tunnel de commande" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestion des commandes, des stocks et de la livraison" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Référencement des produits" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Espace de gestion et formation" } },
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <SiteEcommerceContent />
      <Footer />
    </div>
  );
}
