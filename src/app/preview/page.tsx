/**
 * PREVIEW ONLY — nouvelle structure homepage ConvertiLab
 * Accès local : http://localhost:3000/preview
 * Ne pas push sans validation de Bilel
 */

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/sections/AnimatedSection";
import PromoBanner from "@/components/conversion/PromoBanner";
import HeroV2 from "@/components/sections/HeroV2";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import StatsStrip from "@/components/sections/StatsStrip";

const Services = dynamic(() => import("@/components/sections/Services"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const ProcessTimeline = dynamic(() => import("@/components/sections/ProcessTimeline"));
const TestimonialsColumnsSection = dynamic(() => import("@/components/sections/TestimonialsColumns"));
const ToolsOrbital = dynamic(() => import("@/components/sections/ToolsOrbital"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"));
const CinematicFooter = dynamic(() =>
  import("@/components/ui/motion-footer").then((m) => ({ default: m.CinematicFooter }))
);
const SocialProofToast = dynamic(() => import("@/components/conversion/SocialProofToast"));
const StickyMobileCTA = dynamic(() => import("@/components/conversion/StickyMobileCTA"));

export const metadata: Metadata = {
  title: "PREVIEW : Nouvelle homepage ConvertiLab",
  robots: { index: false, follow: false },
};

export default function PreviewHomePage() {
  return (
    <div className="min-h-screen">
      {/* ── INDICATEUR DE PREVIEW ── */}
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-amber-400 text-amber-950 text-xs font-bold text-center py-1.5 tracking-wide">
        🚧 MODE PREVIEW — Nouvelle structure homepage · Pas en production
      </div>

      <div style={{ paddingTop: "28px" }}>
        <Navigation />

        {/* S1 — PROMO BANNER */}
        <div style={{ paddingTop: "64px" }}>
          <PromoBanner />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S2 — HERO V2
              → Headline bénéfice + secteur rotatif + micro social proof
                inline + mockup browser animé
              CHANGEMENTS vs hero actuel :
              · Sous-titre plus qualifiant (cible + résultat + méthode)
              · Micro social proof (étoiles + count) dans le hero
              · Visuel mockup browser avec stats flottantes
              · Suppression du typewriter (trop lent, freine la lecture)
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="hero">
            <HeroV2 />
          </section>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S3 — TRUST BAR (logos + stats)
              → Preuve sociale immédiate post-hero (CRO pilier 3)
              INCHANGÉ — section existante, juste repositionnée
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <AnimatedSection animation="fade-up">
            <TrustBar />
          </AnimatedSection>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S4 — PROBLÈME (PAS Framework)
              → "Vous reconnaissez ces problèmes ?"
              AJOUT — section existait mais absente de la homepage !
              Place ici : après la confiance, avant la solution.
              But : créer la connexion émotionnelle avec la douleur
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <AnimatedSection animation="fade-up">
            <Problem />
          </AnimatedSection>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S5 — STATS ANIMÉES (fond sombre)
              → 4 chiffres clés avec compteurs Framer Motion
              NOUVEAU — reinforcement de la preuve après les douleurs
              But : chiffres concrets qui répondent aux peurs
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <StatsStrip />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S6 — SERVICES
              → Tabs : Sites Web / SEO / Publicité / Social / Branding
              INCHANGÉ — section existante (Tabs design)
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <AnimatedSection animation="fade-up">
            <section id="services">
              <Services />
            </section>
          </AnimatedSection>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S7 — RÉALISATIONS / PORTFOLIO
              → Preuve par les résultats (maintenant APRÈS services)
              DÉPLACÉ — était en S3, trop tôt avant d'expliquer les services
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <AnimatedSection animation="fade-up">
            <section id="portfolio">
              <Portfolio />
            </section>
          </AnimatedSection>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S8 — PROCESSUS "Comment ça marche"
              → 5 étapes de l'audit à la livraison
              INCHANGÉ — réduit la peur de l'effort (CRO pilier 5)
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <AnimatedSection animation="fade-up" delay={100}>
            <ProcessTimeline />
          </AnimatedSection>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S9 — TÉMOIGNAGES (colonnes scrollantes)
              → Preuve sociale avant pricing (CRO pilier 3)
              INCHANGÉ — 3 colonnes scrollantes, dark bg
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <AnimatedSection animation="fade-up" delay={100}>
            <section id="testimonials">
              <TestimonialsColumnsSection />
            </section>
          </AnimatedSection>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S10 — OUTILS GRATUITS (lead magnets orbital)
              → Valeur gratuite = réciprocité (CRO pilier 8)
              DÉPLACÉ — était en S6 (trop tôt). Maintenant après
              témoignages pour maximiser le lead magnet opt-in.
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <AnimatedSection animation="fade-up">
            <ToolsOrbital />
          </AnimatedSection>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S11 — TARIFS
              → Ancrage psychologique : prix barré + offre principale
              INCHANGÉ — section existante
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <AnimatedSection animation="fade-up">
            <section id="pricing">
              <Pricing />
            </section>
          </AnimatedSection>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S12 — FAQ (objections)
              → Traitement des 7 objections principales
              INCHANGÉ — section existante
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <AnimatedSection animation="fade-up">
            <FAQ />
          </AnimatedSection>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S13 — CTA FINAL
              → Urgence réelle (3 créneaux) + Calendly
              AJOUT — FinalCTA existait mais n'était pas dans la homepage !
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <AnimatedSection animation="fade-up">
            <FinalCTA />
          </AnimatedSection>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              S14 — CINEMATIC FOOTER + FOOTER
              SUPPRIMÉ : CinematicHero (mobile showcase) — interrompait
              le tunnel de décision.
              SUPPRIMÉ : About — page /a-propos existe pour ça.
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <CinematicFooter />
        </div>
      </div>

      <Footer />
      <SocialProofToast />
      <StickyMobileCTA />
    </div>
  );
}
