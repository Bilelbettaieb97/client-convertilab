import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import { CinematicFooter } from "@/components/ui/motion-footer";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/sections/AnimatedSection";
import PromoBanner from "@/components/conversion/PromoBanner";
import SocialProofToast from "@/components/conversion/SocialProofToast";
import StickyMobileCTA from "@/components/conversion/StickyMobileCTA";

export const metadata: Metadata = {
  title: `Agence Web Paris & Île-de-France | SEO & Ads | ${SITE.name}`,
  description: "Agence web à Paris & Rueil-Malmaison : création site internet, SEO, Google Ads, Meta Ads. +50 clients en Île-de-France, +280% de CA. Devis gratuit.",
  keywords: ["agence web Paris", "création site internet Paris", "SEO Île-de-France", "Google Ads Paris", "agence marketing digital Rueil-Malmaison", "agence digitale Hauts-de-Seine"],
  alternates: {
    canonical: SITE.url,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/logo.png`,
  sameAs: Object.values(SITE.social),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    contactType: "customer service",
    availableLanguage: "French",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rueil-Malmaison",
    postalCode: "92500",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "48.8769",
    longitude: "2.1894",
  },
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels services de marketing digital proposez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons une offre 360° : création de sites web, SEO, Google Ads & Meta Ads, gestion des réseaux sociaux, email marketing, content marketing, branding et identité visuelle.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps avant de voir les premiers résultats ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La publicité (Google/Meta Ads) génère des résultats dès les premières semaines. Le SEO prend 3 à 6 mois. Le social media commence à porter ses fruits après 1 à 3 mois.",
      },
    },
    {
      "@type": "Question",
      name: "Comment mesurez-vous le ROI de vos actions ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tracking complet dès le départ (Google Analytics, pixels, UTMs). Rapports mensuels avec KPIs clés : trafic, leads, conversions, coût par acquisition, ROI.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence avec une agence web classique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre approche couvre l'ensemble du tunnel d'acquisition digital : attirer (SEO, Ads), convertir (landing pages, UX), fidéliser (email, social). Chaque action est pensée pour générer du business.",
      },
    },
    {
      "@type": "Question",
      name: "Quel budget prévoir pour une stratégie marketing digitale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos accompagnements démarrent à partir de 500€/mois. Le budget dépend de vos objectifs, votre secteur et les leviers activés.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte la création d'un site web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos tarifs démarrent à partir de 500€ pour une landing page et à partir de 500€ pour un site vitrine complet. Possibilité de paiement en mensualités.",
      },
    },
    {
      "@type": "Question",
      name: "En combien de temps mon site sera-t-il livré ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une landing page est livrée en 5-7 jours, un site vitrine en 2-3 semaines, un site e-commerce en 3-4 semaines.",
      },
    },
    {
      "@type": "Question",
      name: "Je n'ai pas de textes ni de contenu, vous pouvez vous en charger ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bien sûr ! Nous rédigeons tous les textes de votre site optimisés pour le SEO. Nous sélectionnons aussi les visuels. Vous n'avez qu'à valider.",
      },
    },
    {
      "@type": "Question",
      name: "Avec quelle technologie construisez-vous les sites ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous utilisons Next.js (React), le framework utilisé par Netflix, Nike, Uber. Résultat : des sites ultra-rapides, sécurisés, optimisés SEO et 100% sur-mesure.",
      },
    },
    {
      "@type": "Question",
      name: "Je peux payer en plusieurs fois ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui ! Nous proposons le paiement en 2 à 4 mensualités sans frais. Vous pouvez aussi opter pour notre offre mensuelle à partir de 39€/mois.",
      },
    },
  ],
};

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}#localbusiness-reviews`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rueil-Malmaison",
    postalCode: "92500",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Marie Dubois" },
      datePublished: "2026-02-15",
      reviewBody: "Notre chiffre d'affaires en ligne a augmenté de 250% grâce à leur stratégie digitale !",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Thomas Laurent" },
      datePublished: "2026-02-22",
      reviewBody: "50+ leads qualifiés par mois grâce aux Meta Ads et au social media.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sophie Martin" },
      datePublished: "2026-03-05",
      reviewBody: "On est passé de 5 à 30 demandes de devis par semaine avec le SEO + Google Ads.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Alexandre Chen" },
      datePublished: "2026-03-18",
      reviewBody: "Notre coût par acquisition a baissé de 60% grâce à leur approche data-driven.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment booster votre croissance digitale avec ConvertiLab",
  description: "Notre processus éprouvé en 5 étapes pour développer votre présence en ligne et maximiser votre ROI.",
  totalTime: "P30D",
  step: [
    { "@type": "HowToStep", name: "Audit & Stratégie", text: "Analyse de votre marché, vos concurrents et vos objectifs pour définir la meilleure stratégie digitale." },
    { "@type": "HowToStep", name: "Plan d'Action", text: "Construction de votre stratégie marketing digitale personnalisée avec des objectifs clairs et un calendrier détaillé." },
    { "@type": "HowToStep", name: "Mise en Place", text: "Déploiement des campagnes, création des contenus et configuration des outils de tracking." },
    { "@type": "HowToStep", name: "Optimisation Continue", text: "Analyse des résultats et optimisation continue pour maximiser votre retour sur investissement." },
    { "@type": "HowToStep", name: "Scale & Croissance", text: "Développement des leviers performants pour accélérer votre croissance à long terme." },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="min-h-screen">
        <Navigation />

        {/* S1 — HERO (light gradient) */}
        <div style={{ paddingTop: "64px" }}>
          <PromoBanner />
          <section id="hero">
            <Hero />
          </section>
        </div>

        {/* S2 — RÉALISATIONS / RÉSULTATS CLIENTS (light) */}
        <AnimatedSection animation="fade-up">
          <section id="portfolio">
            <Portfolio />
          </section>
        </AnimatedSection>

        {/* S3 — TRUST BAR (white) */}
        <AnimatedSection animation="fade-up">
          <TrustBar />
        </AnimatedSection>

        {/* S3 — PROBLÈME (light gray) */}
        <AnimatedSection animation="fade-up">
          <Problem />
        </AnimatedSection>

        {/* S4 — SOLUTION (white) */}
        <AnimatedSection animation="fade-up">
          <Solution />
        </AnimatedSection>

        {/* S5 — SERVICES (light gradient) */}
        <AnimatedSection animation="fade-up">
          <section id="services">
            <Services />
          </section>
        </AnimatedSection>

        {/* S6 — BOÎTE À OUTILS (dark) — lead magnet */}
        <AnimatedSection animation="fade-up">
          <section className="py-20 sm:py-28 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/20" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px]" />
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold uppercase tracking-wider mb-6">
                  💎 Lead magnets
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Pas prêt à acheter ?{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                    Testez gratuitement
                  </span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  8 outils professionnels, 100% gratuits, sans inscription. Analysez votre site en quelques secondes.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { emoji: "🔍", name: "Audit SEO", description: "60+ points analysés", href: "/seo-check" },
                  { emoji: "⚡", name: "Audit Vitesse", description: "Core Web Vitals", href: "/speed-check" },
                  { emoji: "🎨", name: "Audit Design", description: "UX & UI scoring", href: "/design-score" },
                  { emoji: "📊", name: "Estimateur Ads", description: "ROI prévisionnel", href: "/estimateur-ads" },
                  { emoji: "📋", name: "Mentions Légales", description: "CGU automatiques", href: "/generateur-mentions-legales" },
                  { emoji: "🤖", name: "Robots & Sitemap", description: "Fichiers techniques", href: "/generateur-robots-sitemap" },
                  { emoji: "📈", name: "Rapport Sectoriel", description: "Analyse marché", href: "/rapport-sectoriel" },
                  { emoji: "🔄", name: "Comparateur Sites", description: "Benchmark concurrents", href: "/comparateur-sites" },
                ].map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                      Gratuit
                    </span>
                    <div className="text-4xl mb-3">{tool.emoji}</div>
                    <h3 className="text-white font-semibold text-base mb-1 group-hover:text-purple-300 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-gray-400 text-xs">{tool.description}</p>
                    <div className="mt-4 flex items-center text-xs font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                      Essayer
                      <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* S7 — PROCESS (white) */}
        <AnimatedSection animation="fade-up" delay={100}>
          <ProcessTimeline />
        </AnimatedSection>

        {/* S9 — TÉMOIGNAGES (light gradient) */}
        <AnimatedSection animation="fade-up" delay={100}>
          <section id="testimonials">
            <Testimonials />
          </section>
        </AnimatedSection>

        {/* S10 — À PROPOS (dark) */}
        <AnimatedSection animation="scale">
          <About />
        </AnimatedSection>

        {/* S11 — PRIX & OFFRES (light) */}
        <AnimatedSection animation="fade-up">
          <Pricing />
        </AnimatedSection>

        {/* S12 — FAQ (white) */}
        <AnimatedSection animation="fade-up">
          <FAQ />
        </AnimatedSection>

        {/* S13 — CINEMATIC FOOTER (closer cinématographique GSAP) */}
        <CinematicFooter />

        <Footer />
        <SocialProofToast />
        <StickyMobileCTA />
      </div>
    </>
  );
}
