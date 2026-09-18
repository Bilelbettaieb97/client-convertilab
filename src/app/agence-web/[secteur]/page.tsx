import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE, PRICING, STRUCTURED_DATA } from "@/lib/constants";
import { cities, getCityBySlug } from "@/data/cities";
import { POLES } from "@/data/poles";
import { MAILLAGE_VILLE } from "@/lib/maillage-poles";
import { getContenuLocal } from "@/data/cities-contenu-local";
import { caseStudies } from "@/data/case-studies";
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
import SuggestedArticles from "@/components/internal-links/SuggestedArticles";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";
import LazyMapEmbed from "@/components/ui/LazyMapEmbed";

export const dynamicParams = false;

type Props = { params: Promise<{ secteur: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { secteur: ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) return { title: "Page introuvable" };

  // Titles et descriptions différenciés par ville (pattern unique + données
  // locales) pour éviter 53 pages au title identique, signal de contenu dupliqué.
  const titleVariants = [
    `Agence web ${city.name} : site internet à 890 €`,
    `Création de site internet à ${city.name} : agence web`,
    `Agence web à ${city.name} : site vitrine à 890 €`,
  ];
  const title = titleVariants[city.slug.length % titleVariants.length];
  const industries = city.keyIndustries.slice(0, 2).join(", ").toLowerCase();
  const description = `Agence web à ${city.name} (${city.department}) : site internet pour ${industries} et PME. Site vitrine 890 €, livré en 7 à 14 jours, prix fixe, maquette gratuite sous 48 h.`;

  return {
    title,
    description,
    keywords: city.keywords.join(", "),
    alternates: { canonical: `${SITE.url}/agence-web/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/agence-web/${city.slug}`,
      type: "website",
      images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
    },
    other: {
      "geo.region": "FR-IDF",
      "geo.placename": city.name,
      ICBM: `${city.lat}, ${city.lng}`,
    },
  };
}

/** Villes sans aucune impression Google en 90 jours (audit du 18/09/2026) : redirigées vers /agence-web par next.config, plus générées ni listées. */
/** Dernière modification du gabarit des pages villes (prix, délais, références réelles). */
const CITY_PAGES_UPDATED_ISO = "2026-09-18";

/** « de Aix-en-Provence » devient « d'Aix-en-Provence ». */
function deVille(nom: string): string {
  return /^[aeiouyàâéèêëîïôöûüh]/i.test(nom) ? `d'${nom}` : `de ${nom}`;
}
/** Rueil et sa couronne : rendez-vous possible ; ailleurs, à distance. Le texte ne prétend jamais des locaux dans la ville. */
function modeAccompagnement(city: { slug: string; department: string }): string {
  if (city.slug === "rueil-malmaison") return "depuis ses bureaux de Rueil-Malmaison, en rendez-vous ou en visio";
  const couronne = ["Hauts-de-Seine", "Yvelines", "Val-d'Oise", "Val-de-Marne", "Seine-Saint-Denis", "Paris", "Essonne", "Seine-et-Marne"];
  return couronne.includes(city.department)
    ? "à quelques minutes de Rueil-Malmaison, en rendez-vous ou en visio"
    : "à distance, en visio";
}
/** Même élision quand le nom de la ville est dans un <span> séparé : « d'Amiens », « de Lyon ». */
function de(nom: string): string {
  return /^[aeiouyàâéèêëîïôöûüh]/i.test(nom) ? "d'" : "de ";
}

export const VILLES_RETIREES = ["neuilly-sur-seine", "versailles", "toulon", "perpignan", "saint-denis", "asnieres-sur-seine"];

export function generateStaticParams() {
  return cities.filter((city) => !VILLES_RETIREES.includes(city.slug)).map((city) => ({ secteur: city.slug }));
}

export default async function CityPage({ params }: Props) {
  const { secteur: ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) notFound();
  const local = getContenuLocal(city.slug);
  const faqAffichee = local ? local.faq : city.faqItems;
  // Trois études de cas réelles, différentes d'une ville à l'autre (pas de témoignages inventés).
  const decalage = [...city.slug].reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % caseStudies.length;
  const references = [0, 1, 2].map((i) => caseStudies[(decalage + i * 7) % caseStudies.length]);

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
      desc: "Développement avec les technologies les plus performantes (Next.js, React). Site ultra-rapide, sécurisé, optimisé SEO, avec un score Google PageSpeed vérifiable à la livraison.",
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
      title: "Deux tours de corrections inclus",
      desc: "Vous validez une maquette avant la mise en ligne, puis deux tours de corrections sont inclus. Vous savez ce que vous obtenez avant de payer.",
    },
    {
      icon: DollarSign,
      title: "Prix fixe, écrit dans le devis",
      desc: "Le prix annoncé dans le devis est le prix final. Aucun coût caché, aucune surprise. Vous savez exactement ce que vous payez.",
    },
    {
      icon: CalendarCheck,
      title: "Livré en 7 à 14 jours",
      desc: "Votre site vitrine est livré en 7 à 14 jours, le délai est écrit dans le devis. Pour un e-commerce ou une application, le délai est fixé au devis.",
    },
    {
      icon: Headphones,
      title: "Support 30 jours inclus",
      desc: "Après la livraison, nous restons à vos côtés pendant 30 jours pour toute modification, question ou ajustement. Réponse sous 24h.",
    },
  ];

  /* ---------- Structured Data ---------- */

  // Une seule entité locale réelle : ConvertiLab à Rueil-Malmaison (STRUCTURED_DATA.localBusiness,
  // @id .../#localbusiness, portée par l'accueil). Les autres pages villes ne déclarent plus
  // d'établissement fictif : elles décrivent un Service dont la zone desservie est la ville.
  const localBusinessSchema =
    city.slug === "rueil-malmaison" ? { "@context": "https://schema.org", ...STRUCTURED_DATA.localBusiness } : null;

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
    mainEntity: faqAffichee.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Création de site internet à ${city.name}`,
    serviceType: "Création de site internet",
    provider: { "@id": `${SITE.url}/#localbusiness` },
    areaServed: { "@type": "City", name: city.name },
    dateModified: local ? "2026-09-18" : CITY_PAGES_UPDATED_ISO,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: String(PRICING.vitrine.from),
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: String(PRICING.landing.from),
      },
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/agence-web/${city.slug}`,
    },
  };

  const otherCities = cities.filter((c) => c.slug !== city.slug);


  return (
    <div className="min-h-screen">
      {localBusinessSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      )}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6 ml-3">
            <Zap className="w-4 h-4" />Réponse sous 24h, vous parlez au fondateur
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
            {city.description} ConvertiLab accompagne les entreprises{" "}
            {deVille(city.name)} {modeAccompagnement(city)}, avec un interlocuteur unique :
            création de site internet, référencement local et publicité en
            ligne, à prix publics, avec une maquette gratuite sous 48 h.
          </p>

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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              <a href={`tel:${SITE.phone}`}>
                <Phone className="mr-2 w-5 h-5" />
                {SITE.phoneDisplay}
              </a>
            </Button>
          </div>

          {/* Repères vérifiables (les anciens « X entreprises » et « recherches/mois »
              étaient des estimations invérifiables) */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-gray-700">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">Réponse sous 24 h</span>, par le fondateur
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Search className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">Maquette gratuite</span> sous 48 h
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">4,5/5</span> (14 avis Trustpilot)
            </div>
          </div>


          {/* Badges confiance */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Livraison en 7 à 14 jours
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Deux tours de corrections inclus
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              150+ clients accompagnés
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Paiement après validation
            </span>
          </div>

          {/* Preuve de proximité : NAP + carte (SXO local, 1er écran) */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="flex flex-col justify-center p-6 bg-white/80 backdrop-blur rounded-2xl border border-purple-100 shadow-sm">
              <div className="flex items-center gap-2 text-gray-900 font-semibold mb-2">
                <MapPin className="w-5 h-5 text-purple-600" />
                Votre agence web près {deVille(city.name)}
              </div>
              <p className="text-sm text-gray-600 mb-3">
                ConvertiLab est basée à Rueil-Malmaison (92500) et accompagne les entreprises{" "}
                {deVille(city.name)}{city.region === "Île-de-France" ? " et de toute l'Île-de-France, en visio ou sur place selon votre projet." : " et de toute la France, en visio, avec un interlocuteur unique."}
              </p>
              <div className="flex flex-col gap-1.5 text-sm text-gray-700">
                <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 hover:text-purple-700 font-medium">
                  <Phone className="w-4 h-4 text-purple-600" /> {SITE.phoneDisplay}
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-600" /> {SITE.fullAddress}
                </span>
                <a href={SITE.reviewsGoogle.url} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-purple-700">
                  <Star className="w-4 h-4 text-yellow-500" /> Avis Google : {SITE.reviewsGoogle.rating}/5 sur {SITE.reviewsGoogle.count} avis
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-purple-100 shadow-sm min-h-[220px]">
              <LazyMapEmbed
                title={`Carte de ${city.name}, zone d'intervention ConvertiLab`}
                src={`https://www.google.com/maps?q=${city.lat},${city.lng}&z=12&output=embed`}
                label={city.name}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          2. POURQUOI [VILLE] A BESOIN D'UNE AGENCE WEB
          ============================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Pourquoi les entreprises {de(city.name)}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {city.name}
            </span>{" "}
            ont-elles besoin d&apos;un site qui travaille pour elles ?
          </h2>

          {/* Secteurs clés */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {city.keyIndustries.map((industry, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            {/* Contexte local unique */}
            <p className="text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-5 border-l-4 border-purple-400">
              {city.localContext}
            </p>
            {city.marcheLocal && (
              <>
                <h3 className="text-2xl font-bold text-gray-900 pt-4">
                  Le marché du web à {city.name} : ce qu&apos;il faut savoir
                </h3>
                {city.marcheLocal.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </>
            )}
            {local && local.accroche.map((p, i) => (
              <p key={`local-${i}`}>{p}</p>
            ))}
            {/* Sans contenu local : un paragraphe factuel, sans chiffre invérifiable
                (les anciens « X recherches/mois » et « 87 % des consommateurs » sont retirés). */}
            {!local && (
              <p>
                {city.name}, dans le département {city.department} en {city.region},
                réunit des commerces, des artisans, des professions libérales et des PME
                dont les clients commencent presque toujours par une recherche Google ou
                Google Maps. Une entreprise sans site, ou avec un site lent et dépassé,
                laisse ces demandes à ses concurrents. Un site professionnel, relié à
                une fiche Google exacte, répond à ces recherches à toute heure.
              </p>
            )}
            <p>
              ConvertiLab est une agence web spécialisée dans l&apos;accompagnement
              des entreprises {deVille(city.name)} et de tout le département{" "}
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

      {local && (
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              Ce que les entreprises {de(city.name)}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                {city.name}
              </span>{" "}
              nous demandent
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Les quatre demandes qui reviennent le plus souvent, et la réponse concrète à chacune.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {local.demandes.map((d) => (
                <div key={d.titre} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{d.titre}</h3>
                  <p className="text-gray-600 leading-relaxed flex-1">{d.texte}</p>
                  <Link href={d.href} className="inline-flex items-center gap-2 text-purple-700 font-semibold mt-5 hover:underline underline-offset-4">
                    {d.lien}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Où nous intervenons autour {deVille(city.name)}</h3>
                <p className="text-gray-600 mb-5">
                  Les quartiers, zones d&apos;activité et communes d&apos;où viennent le plus souvent les demandes.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {local.zones.map((z) => (
                    <li key={z} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700">
                      {z}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Les secteurs qui font l&apos;économie {deVille(city.name)}</h3>
                <ul className="space-y-4">
                  {local.secteurs.map((s) => (
                    <li key={s.nom} className="bg-white rounded-xl border border-gray-200 p-5">
                      <p className="font-semibold text-gray-900 mb-1">{s.nom}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.texte}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          3. SERVICES
          ============================================ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Quels services propose ConvertiLab pour les entreprises {de(city.name)}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {city.name}
            </span>{" "}?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Création de site, SEO local et publicité digitale : tout ce qu&apos;il faut pour être visible à {city.name} et en {city.department}
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
          5. RÉFÉRENCES RÉELLES (études de cas)
          ============================================ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Des résultats réels, chez de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              vrais clients
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Trois projets livrés, avec leurs chiffres. Le détail de chacun est consultable dans nos études de cas.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {references.map((cs) => (
              <Link
                key={cs.slug}
                href={`/etude-de-cas/${cs.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="relative aspect-[16/10] bg-gray-100">
                  <Image src={cs.image} alt={`${cs.client} : ${cs.title}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-purple-700 mb-2">{cs.sector}</p>
                  <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-purple-700 transition-colors">
                    {cs.client}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">{cs.title}</p>
                  {(cs.metrics.find((m) => /^[\d+]/.test(m.value)) ?? cs.metrics[0]) && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-semibold self-start">
                      <CheckCircle2 className="w-4 h-4" />
                      {(cs.metrics.find((m) => /^[\d+]/.test(m.value)) ?? cs.metrics[0]).value} {(cs.metrics.find((m) => /^[\d+]/.test(m.value)) ?? cs.metrics[0]).label}
                    </div>
                  )}
                </div>
              </Link>
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
            Quels engagements pour votre site internet à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {city.name}
            </span>{" "}?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Des engagements concrets, écrits dans le devis. Zéro mauvaise surprise.
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
            {faqAffichee.map((faq, i) => (
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
                Rejoignez les 150+ clients que nous avons accompagnés et qui nous font
                confiance. Obtenez un devis gratuit et personnalisé sous 24h.
                Sites vitrine à partir de {PRICING.vitrine.label}, e-commerce à
                partir de {PRICING.ecommerce.label}.
              </p>
              <p className="text-sm text-white/70 mb-8">
                Paiement uniquement après validation de la maquette. Paiement étalé possible, pas d&apos;abonnement.
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

      {/* ============================================
          8 bis. LES QUATRE PÔLES (MAILLAGE VERS LES PAGES DE SERVICE)
          ============================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Quatre pôles pour trouver vos clients à {city.name}
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Un site internet, la publicité en ligne, le référencement et le CRM : chaque pôle se commande seul, avec un
            prix et un délai écrits avant de commencer. Nous travaillons à distance pour {city.name} comme pour toute la
            France, en visioconférence.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {POLES.map((pole, i) => (
              <Link
                key={pole.slug}
                href={pole.href}
                className="group flex flex-col p-5 rounded-2xl border border-gray-200 bg-white hover:border-purple-300 hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold tracking-wide text-purple-600">0{i + 1}</span>
                <h3 className="mt-1 font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{pole.nomCourt}</h3>
                <p className="mt-2 text-sm text-gray-600 flex-grow">{pole.titre}</p>
                <span className="mt-3 text-xs font-medium text-purple-600">{pole.prix}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          9. AUTRES VILLES (MAILLAGE INTERNE)
          ============================================ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            ConvertiLab intervient aussi dans ces villes proches {deVille(city.name)}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Agence web en {city.department} et dans toute la {city.region}
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

      {/* Maillage secteur×ville */}
      <SuggestedArticles title="Conseils pour développer votre business en ligne" max={3} themes={MAILLAGE_VILLE.themes} />
      <RelatedServicesSection title={`Nos services à ${city.name}`} max={4} poles={MAILLAGE_VILLE.poles} />
      <Footer />
    </div>
  );
}
