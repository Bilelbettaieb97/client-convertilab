import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import RefonteSiteContent from "./RefonteSiteContent";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Refonte Site Web Paris | SEO Préservé, Design Moderne",
  description: "Modernisez votre site web : design actuel, SEO préservé, conversion optimisée. Audit gratuit et devis sous 24h.",
  alternates: { canonical: `${SITE.url}/services/sites-web/refonte-site` },
  openGraph: {
    title: "Refonte Site Web Paris | SEO Préservé, Design Moderne | ConvertiLab",
    description: "Modernisez votre site web : design actuel, SEO préservé, conversion optimisée. Audit gratuit et devis sous 24h.",
    url: `${SITE.url}/services/sites-web/refonte-site`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  { "@type": "ListItem", "position": 3, "name": "Sites Web", "item": `${SITE.url}/services/sites-web` },
  { "@type": "ListItem", "position": 4, "name": "Refonte de Site", "item": `${SITE.url}/services/sites-web/refonte-site` },
]};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Refonte de Site Web",
  description: "Modernisation complète de votre site web existant avec préservation du référencement SEO.",
  url: `${SITE.url}/services/sites-web/refonte-site`,
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
  },
  areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "800",
    availability: "https://schema.org/InStock",
  },
};

const refonteStats = [
  { value: "53%", label: "des visiteurs mobiles quittent un site qui charge en plus de 3 secondes", source: "Google" },
  { value: "75%", label: "des internautes jugent la crédibilité d'une entreprise sur le design de son site", source: "Stanford" },
  { value: "88%", label: "des visiteurs ne reviennent pas après une mauvaise expérience sur un site", source: "Amazon Web Services" },
  { value: "3-5 ans", label: "c'est la durée de vie moyenne d'un site web avant qu'une refonte devienne nécessaire", source: "usage marché" },
];

export default function RefonteSitePage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navigation />
      <RefonteSiteContent />

      {/* Chiffres clés refonte (SXO : les concurrents traitent la refonte comme un produit à part entière) */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
            Pourquoi refaire votre site web ? Les chiffres parlent
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Un site vieillissant coûte des clients chaque jour, souvent sans que vous le voyiez.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {refonteStats.map((s) => (
              <div key={s.value} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {s.value}
                </div>
                <p className="text-sm text-gray-700 leading-snug">{s.label}</p>
                <p className="text-xs text-gray-400 mt-2">Source : {s.source}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/portfolio">Voir nos refontes avant/après</Link>
            </Button>
          </div>
        </div>
      </section>

      <RelatedServicesSection exclude={["/services/sites-web/refonte-site"]} />
      <Footer />
    </div>
  );
}
