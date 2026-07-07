import type { Metadata } from "next";
import Link from "next/link";
import { SITE, PRICING } from "@/lib/constants";
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

const refonteFaq = [
  {
    question: "Quand faut-il envisager la refonte de son site vitrine ?",
    answer:
      "Un site vitrine se refait en général tous les 3 à 5 ans. Les signes qui ne trompent pas : un design daté, un site lent sur mobile, un taux de rebond élevé, des demandes de contact en baisse ou un site que vous ne pouvez plus modifier vous-même. Si votre site n'est pas responsive ou n'apparaît plus sur Google, la refonte devient urgente.",
  },
  {
    question: "Combien coûte une refonte de site web ?",
    answer:
      `Chez ConvertiLab, une refonte de site vitrine démarre ${PRICING.refonte.label}. Le prix dépend du nombre de pages, des fonctionnalités à reprendre (formulaires, réservation, blog) et du travail SEO nécessaire. Vous recevez un devis détaillé et gratuit sous 24h.`,
  },
  {
    question: "Vais-je perdre mon référencement Google pendant la refonte ?",
    answer:
      "Non, à condition que la migration soit faite correctement. Nous préservons votre SEO : audit des pages qui rankent, redirections 301 de chaque ancienne URL, conservation des balises title et des contenus performants, re-soumission du sitemap à Google. C'est le point le plus critique d'une refonte et notre priorité absolue.",
  },
  {
    question: "Combien de temps dure une refonte de site ?",
    answer:
      "Une refonte de site vitrine prend en général 1 à 2 semaines chez ConvertiLab : audit de l'existant, nouvelle maquette (validée avant tout développement), intégration des contenus, redirections et mise en ligne. Les projets plus complexes (e-commerce, application) prennent 3 à 6 semaines.",
  },
  {
    question: "Puis-je garder mon nom de domaine et mes contenus ?",
    answer:
      "Oui. Votre nom de domaine vous appartient et reste inchangé. Nous reprenons vos contenus existants (textes, images, avis clients) en les retravaillant si besoin pour le SEO et la conversion. Vous ne repartez pas de zéro : vous capitalisez sur l'existant.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: refonteFaq.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

      {/* FAQ refonte (contenu citable IA + rich results) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Questions fréquentes sur la refonte de site web
          </h2>
          <div className="space-y-6">
            {refonteFaq.map((f) => (
              <div key={f.question} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServicesSection exclude={["/services/sites-web/refonte-site"]} />
      <Footer />
    </div>
  );
}
