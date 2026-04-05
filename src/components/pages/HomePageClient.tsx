"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import AnimatedSection from "@/components/sections/AnimatedSection";

const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const SimplifiedContact = dynamic(() => import("@/components/sections/SimplifiedContact"));
const Footer = dynamic(() => import("@/components/layout/Footer"));
const PromoBanner = dynamic(() => import("@/components/conversion/PromoBanner"));
const ProcessTimeline = dynamic(() => import("@/components/sections/ProcessTimeline"));
const About = dynamic(() => import("@/components/sections/About"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const SuggestedArticles = dynamic(() => import("@/components/internal-links/SuggestedArticles"));
const SocialProofToast = dynamic(() => import("@/components/conversion/SocialProofToast"));
const StickyMobileCTA = dynamic(() => import("@/components/conversion/StickyMobileCTA"));

export default function HomePageClient() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div style={{ paddingTop: "64px" }}>
        <PromoBanner />
        <section id="hero">
          <Hero />
        </section>
      </div>
      <AnimatedSection animation="fade-up">
        <section id="portfolio" className="-mt-4" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" } as React.CSSProperties}>
          <Portfolio />
        </section>
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <section id="services" className="-mt-4">
          <Services />
        </section>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <ProcessTimeline />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <section id="testimonials" className="-mt-4">
          <Testimonials />
        </section>
      </AnimatedSection>
      <AnimatedSection animation="scale">
        <About />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <FAQ />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <SuggestedArticles title="Derniers articles du blog" max={3} />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <section id="contact" className="-mt-4">
          <SimplifiedContact />
        </section>
      </AnimatedSection>
      <Footer />
      <SocialProofToast />
      <StickyMobileCTA />
    </div>
  );
}
