import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE, PRICING } from "@/lib/constants";
import { sectors, getSectorBySlug } from "@/data/sectors";
import { cities, getCityBySlug } from "@/data/cities";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Phone,
  MapPin,
  Zap,
  Shield,
  Clock,
  AlertTriangle,
  TrendingUp,
  Users,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Combinaisons curated — 8 secteurs × 10 villes = 80 pages            */
/* ------------------------------------------------------------------ */
const PRIORITY_SECTORS = [
  "restaurant",
  "coiffeur",
  "artisan",
  "coach",
  "plombier",
  "electricien",
  "immobilier",
  "boulangerie",
];

const PRIORITY_CITIES = [
  "paris",
  "rueil-malmaison",
  "boulogne-billancourt",
  "versailles",
  "neuilly-sur-seine",
  "lyon",
  "marseille",
  "bordeaux",
  "nice",
  "nantes",
];

export const dynamicParams = false;

type Props = { params: Promise<{ secteur: string; ville: string }> };

export async function generateStaticParams() {
  const params: { secteur: string; ville: string }[] = [];
  for (const secteur of PRIORITY_SECTORS) {
    for (const ville of PRIORITY_CITIES) {
      params.push({ secteur, ville });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { secteur, ville } = await params;
  const sector = getSectorBySlug(secteur);
  const city = getCityBySlug(ville);
  if (!sector || !city) return { title: "Page introuvable" };

  const isEcommerce = sector.slug === "ecommerce";
  const priceLabel = isEcommerce ? PRICING.ecommerce.label : PRICING.vitrine.label;

  const metaTitle = `Site Web ${sector.name} à ${city.name} — ${priceLabel}, livré en 7 jours`;
  const metaDesc = `Combien coûte un site internet pour ${sector.name.toLowerCase()} à ${city.name} ? ConvertiLab crée votre site professionnel ${priceLabel}, livré en 7 jours, satisfait ou remboursé. +150 clients, 15 avis 4.9★.`;

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: [
      `création site internet ${sector.name.toLowerCase()} ${city.name}`,
      `site web ${sector.name.toLowerCase()} ${city.name}`,
      `agence web ${sector.name.toLowerCase()} ${city.name}`,
      `site vitrine ${sector.name.toLowerCase()} ${city.name}`,
      `prix site internet ${sector.name.toLowerCase()} ${city.name}`,
    ].join(", "),
    alternates: {
      canonical: `${SITE.url}/agence-web/${sector.slug}/${city.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: `Site internet ${sector.name.toLowerCase()} à ${city.name}, ${priceLabel}, livraison 7 jours, 15 avis 4.9★.`,
      url: `${SITE.url}/agence-web/${sector.slug}/${city.slug}`,
      type: "website",
      images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
    },
    other: {
      "geo.region": "FR",
      "geo.placename": city.name,
      ICBM: `${city.lat}, ${city.lng}`,
    },
  };
}

export default async function SecteurVillePage({ params }: Props) {
  const { secteur, ville } = await params;
  const sector = getSectorBySlug(secteur);
  const city = getCityBySlug(ville);

  if (
    !sector ||
    !city ||
    !PRIORITY_SECTORS.includes(secteur) ||
    !PRIORITY_CITIES.includes(ville)
  ) {
    notFound();
  }

  const isEcommerce = sector.slug === "ecommerce";
  const price = isEcommerce ? "800" : "500";
  const priceLabel = isEcommerce ? PRICING.ecommerce.label : PRICING.vitrine.label;

  /* ---------- Maillage interne ---------- */
  const otherCitiesForSector = PRIORITY_CITIES.filter((c) => c !== city.slug).map(
    (c) => getCityBySlug(c)
  ).filter(Boolean);

  const otherSectorsForCity = PRIORITY_SECTORS.filter((s) => s !== sector.slug).map(
    (s) => getSectorBySlug(s)
  ).filter(Boolean);

  /* ---------- Structured Data ---------- */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: `ConvertiLab - Site Web ${sector.name} ${city.name}`,
    url: `${SITE.url}/agence-web/${sector.slug}/${city.slug}`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      postalCode: city.postalCode,
      addressRegion: city.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.lat,
      longitude: city.lng,
    },
    areaServed: { "@type": "City", name: city.name },
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.reviews.rating,
      reviewCount: SITE.reviews.count,
      bestRating: "5",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Création Site Web ${sector.name} à ${city.name}`,
    description: sector.description,
    url: `${SITE.url}/agence-web/${sector.slug}/${city.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
    },
    areaServed: { "@type": "City", name: city.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price,
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Agence Web",
        item: `${SITE.url}/agence-web`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Agence Web ${city.name}`,
        item: `${SITE.url}/agence-web/${city.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `Site Web ${sector.name} ${city.name}`,
        item: `${SITE.url}/agence-web/${sector.slug}/${city.slug}`,
      },
    ],
  };

  /* FAQ dynamique unique par combinaison secteur+ville */
  const dynamicFaqItems = [
    {
      question: `Combien coûte un site web pour un ${sector.name.toLowerCase()} à ${city.name} ?`,
      answer: `Chez ConvertiLab, la création d'un site internet pour ${sector.name.toLowerCase()} à ${city.name} démarre ${priceLabel}. Ce tarif inclut le design sur-mesure, l'optimisation SEO locale pour ${city.name} (${city.department}), ${sector.features.slice(0, 2).join(", ")}, hébergement 1 an et support 30 jours. Devis gratuit sous 24h, sans engagement.`,
    },
    {
      question: `Comment trouver des clients ${sector.name.toLowerCase()} à ${city.name} grâce à un site web ?`,
      answer: `Pour attirer des clients ${sector.name.toLowerCase()} à ${city.name}, votre site doit apparaître quand quelqu'un tape « ${sector.name.toLowerCase()} ${city.name} » sur Google. Avec ${city.stats.entreprises} recensées à ${city.name} et ${city.stats.searches}, la concurrence locale est réelle. Nous optimisons chaque page pour le référencement local : balises SEO, fiche Google Business, schema LocalBusiness et contenu géolocalisé spécifique à ${city.name}.`,
    },
  ];

  const allFaqItems = [...dynamicFaqItems, ...sector.faqItems.slice(0, 3)];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      {/* ============================================================
          1. HERO
          ============================================================ */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
              <span className="text-base">{sector.emoji}</span>
              {sector.name}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
              <MapPin className="w-4 h-4" />
              {city.name}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Création Site Web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.name}
            </span>{" "}
            à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {city.name}
            </span>
          </h1>

          {/* Snippet bait — réponse directe 40-60 mots, ton neutre */}
          <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-3xl leading-relaxed bg-purple-50 border-l-4 border-purple-400 px-5 py-4 rounded-r-xl">
            Un site web pour {sector.name.toLowerCase()} à {city.name} est un outil
            de conversion conçu pour attirer des clients locaux. Il intègre le
            référencement local Google, un design adapté au secteur et des pages
            optimisées pour les recherches «&nbsp;{sector.name.toLowerCase()} {city.name}&nbsp;».
            Livraison en 7 jours, {priceLabel}.
          </p>

          <p className="text-base text-gray-600 mb-8 max-w-3xl leading-relaxed">
            {sector.description} {city.description}
          </p>

          {/* Stats rapides */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-700">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">{city.stats.entreprises}</span> à {city.name}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">{city.stats.searches}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">4.9/5</span> ({SITE.reviews.count} avis)
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 text-lg"
            >
              <Link href="/contact">
                Devis gratuit en 24h
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg">
              <Link href="/portfolio">Voir nos réalisations</Link>
            </Button>
          </div>

          {/* Badges confiance */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            {[
              "Livraison en 7 jours",
              "Satisfait ou remboursé",
              `+150 clients en IDF`,
              "Paiement après validation",
            ].map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          2. PROBLÈMES COURANTS DU SECTEUR DANS CETTE VILLE
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Pourquoi les{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.name.toLowerCase()}s de {city.name}
            </span>{" "}
            peinent-ils à trouver des clients en ligne ?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            {city.localContext}
          </p>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Dans ce contexte concurrentiel, voici les obstacles les plus fréquents que rencontrent les {sector.name.toLowerCase()}s de {city.name} pour attirer des clients via le web.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {sector.painPoints.map((pain, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 bg-red-50 rounded-xl border border-red-100"
              >
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-800 font-medium">{pain}</span>
                  <p className="text-sm text-gray-500 mt-1">
                    Un problème courant qui vous fait perdre des clients chaque jour à {city.name}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. NOTRE SOLUTION
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Qu&apos;est-ce qui est inclus dans un site web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.name.toLowerCase()} à {city.name}
            </span>{" "}
            ?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Tout est inclus dans un forfait fixe — design sur-mesure, SEO local {city.name}, fonctionnalités secteur et support 30 jours.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {sector.solutions.map((sol, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{sol}</span>
              </div>
            ))}
          </div>

          {/* Features incluses */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-purple-100">
            <h3 className="text-lg font-bold text-gray-900 mb-5 text-center">
              Tout inclus dans votre site {sector.name.toLowerCase()} {priceLabel}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sector.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feat}</span>
                </div>
              ))}
              {[
                "Hébergement 1 an",
                "Certificat SSL",
                "Formation utilisation",
                "Support 30 jours",
                "Design responsive",
                "Conformité RGPD",
              ].map((bonus, i) => (
                <div key={`bonus-${i}`} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. ÉTUDE DE CAS
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Cas client :{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.caseStudy.client}
            </span>
          </h2>
          <p className="text-gray-500 text-center mb-10">{sector.caseStudy.sector}</p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" /> Le défi
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {sector.caseStudy.challenge}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> Notre solution
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {sector.caseStudy.solution}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" /> Résultats
              </h3>
              <div className="space-y-3">
                {sector.caseStudy.results.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-green-100 shadow-sm"
                  >
                    <span className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 text-sm font-medium">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Témoignage */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
            <p className="text-gray-700 italic leading-relaxed mb-4 text-base">
              &ldquo;{sector.caseStudy.testimonial}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                {sector.caseStudy.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {sector.caseStudy.author}
                </p>
                <p className="text-xs text-gray-500">{sector.caseStudy.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. CONTEXTE LOCAL — contenu 100% unique par ville
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Le marché des{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.name.toLowerCase()}s à {city.name}
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4 bg-white rounded-xl p-5 border-l-4 border-purple-400 shadow-sm">
                {city.localContext}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Dans ce marché, les {sector.name.toLowerCase()}s de {city.name} qui
                investissent dans leur présence en ligne prennent une longueur
                d&apos;avance décisive. Avec <strong>{city.stats.searches}</strong>,
                chaque mois des prospects cherchent activement des professionnels
                de votre secteur dans votre ville. Un site optimisé vous permet
                d&apos;en capter une partie directement.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-4">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Chiffres clés — {city.name}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Entreprises recensées</span>
                    <span className="font-bold text-gray-900">{city.stats.entreprises}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Recherches locales</span>
                    <span className="font-bold text-gray-900">{city.stats.searches}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Sites ConvertiLab livrés</span>
                    <span className="font-bold text-purple-600">+150 en IDF</span>
                  </div>
                </div>
              </div>
              {city.keyIndustries.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Secteurs actifs à {city.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {city.keyIndustries.map((ind, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs border border-purple-100"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. FAQ
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Questions fréquentes — Site web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.name.toLowerCase()} à {city.name}
            </span>
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Tout ce que vous devez savoir avant de lancer votre projet.
          </p>
          <div className="space-y-3">
            {allFaqItems.map((faq, i) => (
              <details
                key={i}
                className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 text-left font-semibold text-gray-900 hover:text-purple-700 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-purple-600 group-open:rotate-45 transition-transform duration-200 text-2xl flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Autre question ?{" "}
            <Link href="/contact" className="text-purple-600 font-medium hover:underline">
              Contactez-nous
            </Link>
            , réponse sous 24h.
          </p>
        </div>
      </section>

      {/* ============================================================
          7. CTA FINAL
          ============================================================ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="text-5xl mb-4">{sector.emoji}</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Prêt à créer votre site {sector.name.toLowerCase()} à {city.name}&nbsp;?
              </h2>
              <p className="text-lg text-white/90 mb-3 max-w-2xl mx-auto">
                Rejoignez les professionnels qui génèrent des clients grâce à leur site web.
                Devis gratuit et personnalisé sous 24h.
              </p>
              <p className="text-sm text-white/70 mb-8">
                {priceLabel} &middot; Livraison 7 jours &middot; Satisfait ou remboursé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
                >
                  <Link href="/contact">
                    {sector.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white px-8 py-6 text-lg"
                >
                  <Link href={`tel:${SITE.phone}`}>
                    <Phone className="mr-2 w-5 h-5" />
                    {SITE.phoneDisplay}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          8. MAILLAGE INTERNE
          ============================================================ */}

      {/* Même secteur, autres villes */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
            Site web {sector.name.toLowerCase()} dans d&apos;autres villes
          </h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            Nous intervenons partout en France
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {/* Lien vers page pilier secteur */}
            <Link
              href={`/solutions/${sector.slug}`}
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold hover:bg-purple-200 transition-colors border border-purple-200"
            >
              {sector.emoji} Tous nos sites {sector.name.toLowerCase()}
            </Link>
            {otherCitiesForSector.map((c) =>
              c ? (
                <Link
                  key={c.slug}
                  href={`/agence-web/${sector.slug}/${c.slug}`}
                  className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 hover:text-purple-600 hover:shadow-md transition-all border border-gray-200 hover:border-purple-200"
                >
                  Site {sector.name.toLowerCase()} {c.name}
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* Même ville, autres secteurs */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
            Autres types de sites à {city.name}
          </h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            Nous créons des sites pour tous les secteurs
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {/* Lien vers page pilier ville */}
            <Link
              href={`/agence-web/${city.slug}`}
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold hover:bg-purple-200 transition-colors border border-purple-200"
            >
              <MapPin className="w-3.5 h-3.5 inline-block mr-1" />
              Agence web {city.name} — tous secteurs
            </Link>
            {otherSectorsForCity.map((s) =>
              s ? (
                <Link
                  key={s.slug}
                  href={`/agence-web/${s.slug}/${city.slug}`}
                  className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 hover:text-purple-600 hover:shadow-md transition-all border border-gray-200 hover:border-purple-200"
                >
                  {s.emoji} Site {s.name.toLowerCase()} {city.name}
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* Badges garanties */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {[
              { icon: Zap, label: "Livraison en 7 jours" },
              { icon: Shield, label: "Satisfait ou remboursé" },
              { icon: Star, label: `4.9/5 (${SITE.reviews.count} avis)` },
              { icon: Clock, label: "Devis sous 24h" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-purple-600" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
