import type { Metadata } from "next";
import { PRICING, SITE, STRUCTURED_DATA, PROVIDER_ORGANISATION } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { filArianeSchema } from "@/components/pole";
import RefonteSiteContent from "./RefonteSiteContent";
import { REFONTE_FAQ, REFONTE_FIL, REFONTE_URL } from "./donnees";

const TITLE = "Refonte de site internet Paris : SEO préservé";
const DESCRIPTION =
  "Refonte de site internet à Paris et Rueil-Malmaison : design, mobile, vitesse, redirections posées pour garder vos pages Google. 690 €, en 2 semaines.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}${REFONTE_URL}` },
  openGraph: {
    title: `${TITLE} | ${SITE.name}`,
    description: DESCRIPTION,
    url: `${SITE.url}${REFONTE_URL}`,
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function RefonteSitePage() {
  const jsonLd = [
    filArianeSchema(REFONTE_FIL, REFONTE_URL),
    faqPageSchema(REFONTE_FAQ),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE.url}${REFONTE_URL}#service`,
      name: "Refonte de site internet",
      serviceType: "Refonte de site internet",
      description: DESCRIPTION,
      url: `${SITE.url}${REFONTE_URL}`,
      provider: PROVIDER_ORGANISATION,
      dateModified: "2026-09-16",
      areaServed: STRUCTURED_DATA.localBusiness.areaServed,
      // Le prix affiché sur la page (PRICING.refonte), pas un autre.
      offers: {
        "@type": "Offer",
        name: "Refonte de site vitrine",
        price: String(PRICING.refonte.from),
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${SITE.url}${REFONTE_URL}#prix`,
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />
      <RefonteSiteContent />
      <Footer />
    </div>
  );
}
