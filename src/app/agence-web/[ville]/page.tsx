import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE, PRICING } from "@/lib/constants";
import { cities, getCityBySlug } from "@/data/cities";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Star,
  Shield,
  Clock,
  Zap,
  Globe,
  Search,
  BarChart3,
  Users,
  FileSearch,
  Paintbrush,
  Code2,
  Rocket,
  BadgeCheck,
  DollarSign,
  Headphones,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ ville: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) return { title: "Page introuvable" };

  return {
    title: `Agence Web ${city.name} | Création Site Internet ${city.name}`,
    description: `Agence web à ${city.name} (${city.department}). Création de sites internet, SEO, Google Ads. +150 clients, livraison en 7 jours. Devis gratuit.`,
    keywords: city.keywords.join(", "),
    alternates: { canonical: `${SITE.url}/agence-web/${city.slug}` },
    openGraph: {
      title: `Agence Web ${city.name} | Création Site Internet | ConvertiLab`,
      description: `Votre agence web à ${city.name}. Sites sur-mesure, SEO, Ads. Devis gratuit.`,
      url: `${SITE.url}/agence-web/${city.slug}`,
    },
    other: {
      "geo.region": "FR-IDF",
      "geo.placename": city.name,
      ICBM: `${city.lat}, ${city.lng}`,
    },
  };
}

export function generateStaticParams() {
  return cities.map((city) => ({ ville: city.slug }));
}

export default async function CityPage({ params }: Props) {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) notFound();

  const services = [
    {
      icon: Globe,
      title: "Création de Site Vitrine",
      desc: `Un site professionnel et sur-mesure pour votre entreprise à ${city.name}. Design moderne, responsive, optimisé pour le SEO local et conçu pour convertir vos visiteurs en clients. Inclut 5 pages, formulaire de contact et intégration Google Maps.`,
      price: PRICING.vitrine.label,
      link: "/services/sites-web/site-vitrine",
    },
    {
      icon: Search,
      title: "Référencement SEO Local",
      desc: `Apparaissez en première page Google quand vos clients cherchent vos services à ${city.name} et en ${city.department}. Audit technique, optimisation on-page, Google Business Profile, création de contenu et stratégie de backlinks locaux.`,
      price: "Sur devis",
      link: "/services/seo/referencement",
    },
    {
      icon: BarChart3,
      title: "Google Ads & Meta Ads",
      desc: `Campagnes publicitaires ultra-ciblées pour toucher vos clients à ${city.name} et dans toute l'Île-de-France. Création d'annonces, ciblage géographique, A/B testing et optimisation continue pour maximiser votre retour sur investissement.`,
      price: "Sur devis",
      link: "/services/sea",
    },
  ];

  const processSteps = [
    {
      icon: FileSearch,
      step: "01",
      title: "Audit & Stratégie",
      desc: `Nous analysons votre marché à ${city.name}, vos concurrents et vos objectifs. Un appel de 30 minutes pour comprendre votre activité et définir la meilleure stratégie digitale.`,
    },
    {
      icon: Paintbrush,
      step: "02",
      title: "Maquette & Design",
      desc: "Création d'une maquette sur-mesure que vous validez avant le développement. Design moderne, responsive et aligné avec votre identité de marque. Révisions illimitées incluses.",
    },
    {
      icon: Code2,
      step: "03",
      title: "Développement",
      desc: "Développement avec les technologies les plus performantes (Next.js, React). Site ultra-rapide, sécurisé, optimisé SEO. Score Google PageSpeed 90+ garanti.",
    },
    {
      icon: Rocket,
      step: "04",
      title: "Livraison & Suivi",
      desc: "Mise en ligne, formation à l'utilisation, et 30 jours de support inclus. Nous restons disponibles pour faire évoluer votre site selon vos besoins.",
    },
  ];

  const garanties = [
    {
      icon: BadgeCheck,
      title: "Satisfait ou remboursé",
      desc: "Si le résultat ne vous convient pas après les révisions, nous vous remboursons intégralement. Zéro risque pour vous.",
    },
    {
      icon: DollarSign,
      title: "Prix fixe garanti",
      desc: "Le prix annoncé dans le devis est le prix final. Aucun coût caché, aucune surprise. Vous savez exactement ce que vous payez.",
    },
    {
      icon: CalendarCheck,
      title: "Délai de 7 jours garanti",
      desc: "Votre site vitrine est livré en 7 jours ouvrés maximum. Si nous dépassons ce délai, nous vous offrons un mois de maintenance gratuit.",
    },
    {
      icon: Headphones,
      title: "Support 30 jours inclus",
      desc: "Après la livraison, nous restons à vos côtés pendant 30 jours pour toute modification, question ou ajustement. Réponse sous 24h garantie.",
    },
  ];

  /* ---------- Structured Data ---------- */

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: `ConvertiLab - Agence Web ${city.name}`,
    url: `${SITE.url}/agence-web/${city.slug}`,
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
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
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
        name: `Agence Web ${city.name}`,
        item: `${SITE.url}/agence-web/${city.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Création de site internet à ${city.name}`,
    brand: { "@type": "Brand", name: "ConvertiLab" },
    review: city.testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: t.author },
      reviewBody: t.text,
    })),
  };

  const otherCities = cities.filter((c) => c.slug !== city.slug);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Navigation />

      {/* ============================================
          1. HERO
          ============================================ */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          {/* Badge ville */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            {city.name}, {city.department}
          </div>

          {/* Badge urgence */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6 ml-3">
            <Zap className="w-4 h-4" />3 créneaux disponibles cette semaine
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Agence Web à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {city.name}
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">
              Création de Site Internet & SEO
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
            {city.description} ConvertiLab, votre agence web locale, vous
            accompagne dans la création de votre site internet professionnel, le
            référencement SEO et la publicité en ligne. Plus de 150 entreprises
            nous font déjà confiance en Île-de-France.
          </p>

          {/* Stats locales */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-700">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">{city.stats.entreprises}</span>{" "}
              à {city.name}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Search className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">{city.stats.searches}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">4.9/5</span> (47 avis clients)
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg"
            >
              <Link href="/portfolio">Voir nos réalisations</Link>
            </Button>
          </div>

          {/* Badges confiance */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Livraison en 7 jours
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Satisfait ou remboursé
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              +150 clients en IDF
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Paiement après validation
            </span>
          </div>
        </div>
      </section>

      {/* ============================================
          2. POURQUOI [VILLE] A BESOIN D'UNE AGENCE WEB
          ============================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Pourquoi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {city.name}
            </span>{" "}
            a besoin d&apos;une agence web locale
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Avec <strong>{city.stats.entreprises}</strong> recensées,{" "}
              {city.name} est un bassin économique dynamique au sein du
              département {city.department} en {city.region}. Chaque mois, ce
              sont{" "}
              <strong>{city.stats.searches}</strong> qui sont effectuées par des
              internautes cherchant des services locaux. Si votre entreprise
              n&apos;est pas visible en ligne, vous perdez des clients au profit de
              vos concurrents.
            </p>
            <p>
              Aujourd&apos;hui, <strong>87% des consommateurs</strong> recherchent
              en ligne avant d&apos;acheter localement. Un site web professionnel
              n&apos;est plus un luxe, c&apos;est une nécessité absolue pour toute
              entreprise à {city.name}. Que vous soyez commerçant, artisan,
              profession libérale ou dirigeant de PME, votre site internet est
              votre vitrine digitale 24h/24, 7j/7.
            </p>
            <p>
              ConvertiLab est une agence web spécialisée dans l&apos;accompagnement
              des entreprises de {city.name} et de tout le département{" "}
              {city.department}. Nous ne nous contentons pas de créer de beaux
              sites : nous concevons des{" "}
              <strong>outils de conversion</strong> qui transforment vos
              visiteurs en clients, avec un référencement local optimisé pour
              que vos prospects à {city.name} vous trouvent facilement sur
              Google.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          3. SERVICES
          ============================================ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Nos services à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {city.name}
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Des solutions digitales sur-mesure pour les entreprises de{" "}
            {city.name} et ses environs en {city.department}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {s.desc}
                </p>
                <p className="text-sm font-bold text-purple-600 mb-4">
                  {s.price}
                </p>
                <Link
                  href={s.link}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors"
                >
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          4. PROCESS
          ============================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Comment nous créons votre site à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {city.name}
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Un processus simple et transparent en 4 étapes, de l&apos;audit initial
            à la mise en ligne
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                {/* Connecting line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-300 to-pink-300" />
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                  Étape {step.step}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          5. TEMOIGNAGES
          ============================================ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Ils nous font confiance à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {city.name}
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Découvrez les retours de nos clients dans votre ville
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {city.testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* Metric badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  {t.metric}
                </div>
                {/* Author */}
                <div className="flex items-center gap-4">
                  <Image
                    src={t.photo}
                    alt={t.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{t.author}</p>
                    <p className="text-sm text-gray-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          6. GARANTIES
          ============================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Nos garanties pour votre projet à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {city.name}
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Nous nous engageons sur des résultats concrets. Zéro risque pour
            vous.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {garanties.map((g, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-purple-50/50 border border-purple-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <g.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {g.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          7. FAQ
          ============================================ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Questions fréquentes sur la création de site à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {city.name}
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de lancer votre projet web
          </p>
          <div className="space-y-4">
            {city.faqItems.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left font-semibold text-gray-900 hover:text-purple-700 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-purple-600 group-open:rotate-45 transition-transform duration-200 text-2xl flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          8. CTA FINAL
          ============================================ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Prêt à lancer votre projet à {city.name} ?
              </h2>
              <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
                Rejoignez les +150 entreprises d&apos;Île-de-France qui nous font
                confiance. Obtenez un devis gratuit et personnalisé sous 24h.
                Sites vitrine à partir de {PRICING.vitrine.label}, e-commerce à
                partir de {PRICING.ecommerce.label}.
              </p>
              <p className="text-sm text-white/70 mb-8">
                Paiement uniquement après validation. Satisfait ou remboursé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
                >
                  <Link href="/contact">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
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

      {/* ============================================
          9. AUTRES VILLES (MAILLAGE INTERNE)
          ============================================ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Nous intervenons aussi dans ces villes
          </h2>
          <p className="text-gray-600 text-center mb-8">
            ConvertiLab accompagne les entreprises dans tout le département{" "}
            {city.department} et en {city.region}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/agence-web/${c.slug}`}
                className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 hover:text-purple-600 hover:shadow-md transition-all border border-gray-200 hover:border-purple-200"
              >
                Agence web {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
