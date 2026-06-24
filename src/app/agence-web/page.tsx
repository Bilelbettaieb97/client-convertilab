import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { cities } from "@/data/cities";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Agence Web par Ville — Création Site Internet en France | ConvertiLab",
  description: "Quelle agence web choisir en Île-de-France ? ConvertiLab intervient dans 51 villes : Paris, Lyon, Marseille, Bordeaux et toute la France. Site vitrine dès 990€, livré en 7 jours. +150 clients, 15 avis 4.9★.",
  keywords: "agence web Île-de-France, création site internet Paris Lyon Marseille, agence web locale France, site vitrine entreprise 990€",
  alternates: { canonical: `${SITE.url}/agence-web` },
  openGraph: {
    title: "Agence Web par Ville — 51 villes en France | ConvertiLab",
    description: "ConvertiLab intervient dans 51 villes en France. Site vitrine dès 990€, livré en 7 jours. +150 clients, 15 avis 4.9★. Devis gratuit.",
    url: `${SITE.url}/agence-web`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function AgenceWebPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Agence Web par ville", item: `${SITE.url}/agence-web` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Agences web ConvertiLab par ville",
    description: "ConvertiLab intervient dans 51 villes en France pour la création de sites internet professionnels",
    numberOfItems: cities.length,
    itemListElement: cities.slice(0, 20).map((city, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Agence web ${city.name}`,
      url: `${SITE.url}/agence-web/${city.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Comment choisir une agence web locale ?", acceptedAnswer: { "@type": "Answer", text: "Vérifiez le portfolio (réalisations concrètes), les avis clients (Trustpilot, Google), les délais de livraison et la transparence des prix. ConvertiLab affiche des prix fixes, livre en 7 jours et publie 15 avis 4.9★ vérifiés." } },
      { "@type": "Question", name: "Faut-il une agence web proche de chez moi ?", acceptedAnswer: { "@type": "Answer", text: "Non, ce n'est pas indispensable. ConvertiLab gère 100% des projets à distance (visio, Figma, Notion) avec les mêmes résultats que si vous étiez à Paris. Nous intervenons aussi en présentiel dans toute l'Île-de-France." } },
      { "@type": "Question", name: "Quel est le prix d'un site web pour une PME ?", acceptedAnswer: { "@type": "Answer", text: "Le prix d'un site vitrine professionnel chez ConvertiLab démarre à 990€ pour une PME. Il inclut le design sur-mesure, 5 pages, le SEO, l'hébergement première année et le support 30 jours. Les grandes entreprises et e-commerces ont des forfaits sur devis." } },
      { "@type": "Question", name: "Combien de temps pour créer un site internet ?", acceptedAnswer: { "@type": "Answer", text: "ConvertiLab livre votre site en 7 jours ouvrés à partir de la validation de la maquette. La maquette est présentée sous 48h après l'appel découverte. Au total, comptez 2 semaines de la prise de contact à la mise en ligne." } },
    ],
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            Île-de-France
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Agence web locale —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">51 villes en France</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed bg-purple-50 border-l-4 border-purple-400 px-5 py-4 rounded-r-xl text-left">
            ConvertiLab crée des sites internet professionnels pour les entrepreneurs et PME dans 51 villes en France. Site vitrine livré en 7 jours dès 990€, avec référencement local et support 30 jours inclus. Basés à Rueil-Malmaison, nous intervenons en présentiel en Île-de-France et à distance partout en France.
          </p>
          <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
            +150 clients accompagnés · 15 avis 4.9★ · Satisfait ou remboursé
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm border">
              <Users className="w-5 h-5 text-purple-500" />
              <span className="font-bold text-gray-900">150+</span>
              <span className="text-gray-600 text-sm">entreprises accompagnées</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm border">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600 text-sm">satisfaction client</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm border">
              <Zap className="w-5 h-5 text-green-500" />
              <span className="font-bold text-gray-900">7 jours</span>
              <span className="text-gray-600 text-sm">délai de livraison</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grille des villes */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">Dans quelle ville intervenons-nous ?</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Sélectionnez votre ville pour découvrir nos offres locales et les témoignages clients de votre région.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/agence-web/${city.slug}`}
                className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:border-purple-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{city.name}</h3>
                    <p className="text-xs text-gray-500">{city.department} ({city.postalCode})</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">{city.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{city.stats.entreprises}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 group-hover:gap-2 transition-all">
                    Voir <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Carte / Zone d'intervention */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Peut-on travailler avec une agence web à distance ?</h2>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            Oui. ConvertiLab intervient en présentiel dans toute l&apos;Île-de-France (Paris 75, Hauts-de-Seine 92, Yvelines 78, Val-d&apos;Oise 95, Seine-Saint-Denis 93, Val-de-Marne 94, Essonne 91, Seine-et-Marne 77) et à distance dans toute la France.
          </p>
          <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
            100% de nos projets sont gérés avec des outils collaboratifs (Figma, Notion, Zoom). Nous livrons des sites identiques que vous soyez à Paris ou à Bordeaux.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 text-lg">
            <Link href="/contact">
              Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 sm:p-16 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Votre ville n&apos;est pas listée ?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Nous travaillons avec des entreprises de toute la France. Contactez-nous pour discuter de votre projet.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">
              <Link href="/contact">Nous contacter <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
