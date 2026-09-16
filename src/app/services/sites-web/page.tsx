import type { Metadata } from "next";
import { PRICING, SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { filArianeSchema } from "@/components/pole";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SitesWebContent from "./SitesWebContent";
import { SITES_WEB_FAQ, SITES_WEB_FIL, SITES_WEB_URL, pole } from "./donnees";

const URL_PAGE = `${SITE.url}${SITES_WEB_URL}`;

const DESCRIPTION = `Création de site internet à Rueil-Malmaison et Paris : site vitrine ${PRICING.vitrine.from} €, landing page ${PRICING.landing.from} €, refonte, e-commerce. Livré en 2 semaines, paiement étalé.`;

export const metadata: Metadata = {
  title: "Création site internet Rueil-Malmaison, Paris",
  description: DESCRIPTION,
  alternates: { canonical: URL_PAGE },
  openGraph: {
    title: `Création de site internet à Rueil-Malmaison et Paris | ${SITE.name}`,
    description: DESCRIPTION,
    url: URL_PAGE,
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

const offre = (name: string, url: string, price: number) => ({
  "@type": "Offer",
  name,
  url: `${SITE.url}${url}`,
  price,
  priceCurrency: "EUR",
  availability: "https://schema.org/InStock",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL_PAGE}#service`,
  name: pole.nomCourt,
  serviceType: "Création de site internet",
  description: DESCRIPTION,
  url: URL_PAGE,
  provider: PROVIDER_ORGANISATION,
  areaServed: STRUCTURED_DATA.localBusiness.areaServed,
  offers: [
    offre("Landing page", "/services/sites-web/landing-page", PRICING.landing.from),
    offre("Site vitrine professionnel", "/services/sites-web/site-vitrine", PRICING.vitrine.from),
    offre("Refonte de site internet", "/services/sites-web/refonte-site", PRICING.refonte.from),
    offre("Site e-commerce", "/services/sites-web/site-ecommerce", PRICING.ecommerce.from),
  ],
};

export default function SitesWebPage() {
  const jsonLd = [filArianeSchema(SITES_WEB_FIL, SITES_WEB_URL), serviceSchema, faqPageSchema(SITES_WEB_FAQ)];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <SitesWebContent />
      <Footer />
    </div>
  );
}
