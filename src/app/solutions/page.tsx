import type { Metadata } from "next";
import Link from "next/link";
import { SITE, PRICING } from "@/lib/constants";
import { sectors } from "@/data/sectors";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, Shield } from "lucide-react";
import SolutionsGrid from "./SolutionsGrid";

export const metadata: Metadata = {
  title: "Création Site Web par Secteur d'Activité",
  description: "Site web sur-mesure par métier : restaurant, avocat, artisan, immobilier, coach, e-commerce. SEO optimisé, livré en 7j, dès 500€. +150 clients. Devis gratuit.",
  keywords: "site web restaurant, site internet avocat, site web artisan, création site par secteur, site web métier, site internet professionnel Paris",
  alternates: { canonical: `${SITE.url}/solutions` },
  openGraph: {
    title: "Création Site Web par Métier — Restaurant, Artisan, Coach | ConvertiLab",
    description: "Site web sur-mesure adapté à votre secteur : restaurant, avocat, artisan, immobilier, coach. Livré en 7 jours dès 500€. +150 clients, 15 avis 4.9★.",
    url: `${SITE.url}/solutions`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function SolutionsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Solutions par secteur", item: `${SITE.url}/solutions` },
    ],
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Solutions ConvertiLab par secteur d'activité",
        description: "Sites web professionnels sur-mesure pour chaque secteur d'activité",
        itemListElement: sectors.slice(0, 15).map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Site web ${s.name}`,
          url: `${SITE.url}/solutions/${s.slug}`,
        })),
      }) }} />
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Solutions par secteur
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Un site web adapté à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">votre métier</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Chaque secteur a ses spécificités. Nous créons des sites sur-mesure qui répondent aux besoins précis de votre activité : design adapté, fonctionnalités métier, SEO sectoriel.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border"><Zap className="w-4 h-4 text-purple-500" /> Livré en 7 jours</span>
            <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border"><Shield className="w-4 h-4 text-green-500" /> {PRICING.vitrine.label}</span>
            <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border"><Star className="w-4 h-4 text-yellow-500" /> 4.9/5 satisfaction</span>
          </div>
        </div>
      </section>

      {/* Grille des secteurs */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">Choisissez votre secteur</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Chaque page détaille les fonctionnalités, les études de cas et les tarifs spécifiques à votre métier.</p>

          <SolutionsGrid sectors={sectors.map(s => ({ slug: s.slug, name: s.name, emoji: s.emoji, description: s.description, features: s.features }))} />
        </div>
      </section>

      {/* Outil gratuit */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900">Analysez votre secteur gratuitement</p>
                <p className="text-sm text-gray-600">Rapport sectoriel complet : concurrence, opportunites, tendances</p>
              </div>
              <Link href="/rapport-sectoriel" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 whitespace-nowrap">
                Analyser mon secteur <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 sm:p-16 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Votre secteur n&apos;est pas listé ?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Nous créons des sites pour tous les métiers. Contactez-nous pour un devis personnalisé.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">
              <Link href="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
