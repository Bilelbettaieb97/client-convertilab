import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SITE, PRICING } from "@/lib/constants";
import { sectors, getSectorBySlug } from "@/data/sectors";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Shield,
  Clock,
  Zap,
  Phone,
  AlertTriangle,
  Quote,
  TrendingUp,
  Target,
  Users,
  BarChart3,
} from "lucide-react";

type Props = { params: Promise<{ secteur: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { secteur } = await params;
  const sector = getSectorBySlug(secteur);
  if (!sector) return { title: "Page introuvable" };

  return {
    title: `Création Site Web ${sector.name} | Site Internet ${sector.name}`,
    description: `Création de site internet pour ${sector.name.toLowerCase()}. ${sector.description.slice(0, 120)}`,
    keywords: `site web ${sector.name.toLowerCase()}, création site internet ${sector.name.toLowerCase()}, site vitrine ${sector.name.toLowerCase()}`,
    alternates: { canonical: `${SITE.url}/solutions/${sector.slug}` },
    openGraph: {
      title: `Création Site Web ${sector.name} | ConvertiLab`,
      description: sector.description,
      url: `${SITE.url}/solutions/${sector.slug}`,
    },
  };
}

export function generateStaticParams() {
  return sectors.map((s) => ({ secteur: s.slug }));
}

export default async function SectorPage({ params }: Props) {
  const { secteur } = await params;
  const sector = getSectorBySlug(secteur);
  if (!sector) notFound();

  const isEcommerce = sector.slug === "ecommerce";
  const price = isEcommerce ? "800" : "500";
  const priceLabel = isEcommerce ? PRICING.ecommerce.label : PRICING.vitrine.label;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: `Site Web ${sector.name}`,
        item: `${SITE.url}/solutions/${sector.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Création Site Web ${sector.name}`,
    description: sector.description,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        price,
        description: "À partir de",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sector.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const statIcons = [TrendingUp, Target, BarChart3];

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      {/* ============================================================ */}
      {/* 1. HERO */}
      {/* ============================================================ */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-4 text-6xl">{sector.emoji}</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center leading-tight">
            Création Site Web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.name}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
            {sector.description}
          </p>

          {/* Stats sectorielles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            {sector.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div
                  key={i}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm"
                >
                  <Icon className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 text-lg"
            >
              <Link href="/contact">
                {sector.cta} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg">
              <Link href="/portfolio">Voir nos réalisations</Link>
            </Button>
          </div>

          {/* Badges confiance */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border">
              <Zap className="w-4 h-4 text-purple-500" /> Livré en 7 jours
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border">
              <Shield className="w-4 h-4 text-green-500" /> {priceLabel}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border">
              <Star className="w-4 h-4 text-yellow-500" /> 4.9/5 satisfaction
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border">
              <Clock className="w-4 h-4 text-blue-500" /> Devis sous 24h
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. LES DEFIS */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Les défis des{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.name.toLowerCase()}s
            </span>{" "}
            en ligne
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Vous vous reconnaissez dans ces situations ? Vous n&apos;êtes pas seul. La majorité
            des professionnels de votre secteur rencontrent ces mêmes obstacles.
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
                    Un problème courant qui vous fait perdre des clients chaque jour.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            {sector.stats[0].value} {sector.stats[0].label.toLowerCase()}. Ne pas être
            visible en ligne, c&apos;est perdre des clients tous les jours.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. NOTRE SOLUTION */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Notre solution pour les{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.name.toLowerCase()}s
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Un site web professionnel, conçu spécifiquement pour répondre aux besoins de
            votre secteur et transformer vos visiteurs en clients.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {sector.solutions.map((sol, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex items-start gap-3 p-5">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-800 font-medium">{sol}</span>
                    <p className="text-sm text-gray-500 mt-1">
                      Pensé et optimisé pour maximiser votre impact en ligne.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CE QUI EST INCLUS */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Ce qui est inclus dans votre site{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.name.toLowerCase()}
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Tout est compris dans notre offre. Pas de surprise, pas de frais cachés. Vous
            recevez un site clé en main, prêt à générer des clients.
          </p>

          {/* Features en grille */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sector.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl border border-purple-100"
              >
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{feat}</span>
              </div>
            ))}
          </div>

          {/* Bonus inclus */}
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-purple-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
              Inclus dans chaque projet
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Hébergement 1 an",
                "Certificat SSL",
                "Formation utilisation",
                "Support 30 jours",
                "Design responsive",
                "Optimisation SEO",
                "Conformité RGPD",
                "Analytics intégrés",
              ].map((bonus, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{bonus}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-purple-600 font-semibold mt-6">
              Tout inclus {priceLabel}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. ETUDE DE CAS */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Étude de cas :{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.caseStudy.client}
            </span>
          </h2>
          <p className="text-center text-gray-500 mb-12">{sector.caseStudy.sector}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenge & Solution */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Le défi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {sector.caseStudy.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Notre solution
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {sector.caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Résultats */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                Résultats obtenus
              </h3>
              <div className="space-y-3">
                {sector.caseStudy.results.map((result, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-green-100"
                  >
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 font-medium text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Témoignage */}
          <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <Quote className="w-8 h-8 text-purple-200 mb-4" />
            <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
              &ldquo;{sector.caseStudy.testimonial}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {sector.caseStudy.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {sector.caseStudy.author}
                </p>
                <p className="text-sm text-gray-500">{sector.caseStudy.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. PROCESS */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Comment nous créons votre site{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.name.toLowerCase()}
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Un processus simple en 4 étapes, adapté aux besoins spécifiques de votre secteur.
            De la découverte au lancement, nous gérons tout.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sector.process.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                {i < sector.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 text-gray-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-10">
            Délai moyen : 7 jours ouvrés de la signature au lancement.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CE QUE DISENT LES CHIFFRES */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Ce que disent les{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              chiffres
            </span>
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Les statistiques du secteur {sector.name.toLowerCase()} confirment l&apos;importance
            d&apos;une présence en ligne professionnelle.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {sector.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. FAQ */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Questions fréquentes sur les sites{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {sector.name.toLowerCase()}
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Vous avez des questions ? Voici les réponses aux plus courantes.
          </p>
          <div className="space-y-3">
            {sector.faqItems.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <span className="text-purple-600 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Une autre question ?{" "}
            <Link href="/contact" className="text-purple-600 font-medium hover:underline">
              Contactez-nous
            </Link>
            , nous répondons sous 24h.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. CTA FINAL */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="text-5xl mb-6">{sector.emoji}</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Prêt à créer votre site {sector.name.toLowerCase()} ?
              </h2>
              <p className="text-lg text-white/80 mb-3 max-w-2xl mx-auto">
                Rejoignez les professionnels qui génèrent des clients grâce à leur site web.
                Devis gratuit et personnalisé sous 24h.
              </p>
              <p className="text-white/70 mb-8">
                {priceLabel} &middot; Livraison en 7 jours &middot; Satisfait ou remboursé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
                >
                  <Link href="/contact">
                    {sector.cta} <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* ============================================================ */}
      {/* 10. AUTRES SECTEURS (Cross-linking) */}
      {/* ============================================================ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Nous créons aussi des sites pour
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors
              .filter((s) => s.slug !== sector.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 hover:text-purple-600 hover:shadow-md transition-all border"
                >
                  {s.emoji} Site web {s.name.toLowerCase()}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
