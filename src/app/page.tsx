import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/sections/AnimatedSection";
import PromoBanner from "@/components/conversion/PromoBanner";

// Dynamic imports — code-split heavy / below-fold sections out of the initial bundle
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const ToolsOrbital = dynamic(() => import("@/components/sections/ToolsOrbital"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const TestimonialsColumnsSection = dynamic(() => import("@/components/sections/TestimonialsColumns"));
const ProcessTimeline = dynamic(() => import("@/components/sections/ProcessTimeline"));
const About = dynamic(() => import("@/components/sections/About"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const SocialProofToast = dynamic(() => import("@/components/conversion/SocialProofToast"));
const StickyMobileCTA = dynamic(() => import("@/components/conversion/StickyMobileCTA"));
const CinematicFooter = dynamic(() =>
  import("@/components/ui/motion-footer").then((m) => ({ default: m.CinematicFooter }))
);

export const metadata: Metadata = {
  title: { absolute: `Agence Web Paris & Île-de-France | SEO & Ads | ${SITE.name}` },
  description: "Agence web à Paris & Rueil-Malmaison : création site internet, SEO, Google Ads, Meta Ads. +150 clients en Île-de-France, 4.9★ Trustpilot. Devis gratuit.",
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
    streetAddress: "1 Rue du 4 Septembre",
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
  image: `${SITE.url}/og-image.png`,
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.reviews.rating,
    reviewCount: SITE.reviews.count,
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
      name: "ConvertiLab s'occupe-t-il aussi des textes et des visuels ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous rédigeons tous les textes de votre site, optimisés pour le SEO et adaptés à votre secteur. Nous sélectionnons les visuels (photos Unsplash, illustrations). Vous n'avez qu'à valider — zéro rédaction de votre côté si vous le souhaitez.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous avec des entreprises hors Île-de-France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous accompagnons des clients dans toute la France — Paris, Lyon, Marseille, Bordeaux, Nantes et partout en province. Tout se passe en visio : découverte, validation du design, formation. La localisation n'est pas un obstacle.",
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
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

        {/* S2 — TRUST BAR (white) */}
        <AnimatedSection animation="fade-up">
          <TrustBar />
        </AnimatedSection>

        {/* S3 — SERVICES (light gradient) — la solution juste après la preuve rapide */}
        <AnimatedSection animation="fade-up">
          <section id="services">
            <Services />
          </section>
        </AnimatedSection>

        {/* S4 — RÉALISATIONS / RÉSULTATS CLIENTS (light) — preuve concrète */}
        <AnimatedSection animation="fade-up">
          <section id="portfolio">
            <Portfolio />
          </section>
        </AnimatedSection>

        {/* S5 — TÉMOIGNAGES (dark, 3 scrolling columns) — preuve sociale */}
        <AnimatedSection animation="fade-up" delay={100}>
          <section id="testimonials">
            <TestimonialsColumnsSection />
          </section>
        </AnimatedSection>

        {/* S6 — PROCESS (white) — réduit la peur de l'effort */}
        <AnimatedSection animation="fade-up" delay={100}>
          <ProcessTimeline />
        </AnimatedSection>

        {/* S7 — À PROPOS (dark) — l'humain derrière l'agence */}
        <AnimatedSection animation="scale">
          <About />
        </AnimatedSection>

        {/* S8 — PRIX & OFFRES (light) — l'offre une fois la confiance établie */}
        <AnimatedSection animation="fade-up">
          <Pricing />
        </AnimatedSection>

        {/* S9 — FAQ (white) — traitement des objections avant le CTA final */}
        <AnimatedSection animation="fade-up">
          <FAQ />
        </AnimatedSection>

        {/* S10 — BOÎTE À OUTILS ORBITAL (dark) — engagement progressif pour les
            visiteurs pas encore prêts à demander un devis */}
        <AnimatedSection animation="fade-up">
          <ToolsOrbital />
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
