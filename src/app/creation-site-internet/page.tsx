import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { creationSiteCities } from "@/data/cities";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Création de Site Internet par Ville : Site Web Pro dès 500€",
  description: "Création de site internet professionnel dans les grandes villes de France : Paris, Lyon, Marseille, Bordeaux, Toulouse… Site web livré en 7 jours dès 500€. +150 clients, 15 avis 4.9★.",
  keywords: "création site internet par ville, création site web Paris Lyon Marseille Bordeaux, site internet professionnel 500€, création site vitrine France",
  alternates: { canonical: `${SITE.url}/creation-site-internet` },
  openGraph: {
    title: "Création de Site Internet par Ville | ConvertiLab",
    description: "Création de site internet professionnel à Paris, Lyon, Marseille, Bordeaux, Toulouse et plus. Site web livré en 7 jours dès 500€. +150 clients, 15 avis 4.9★.",
    url: `${SITE.url}/creation-site-internet`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function CreationSiteInternetPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Création de site internet par ville", item: `${SITE.url}/creation-site-internet` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Création de site internet ConvertiLab par ville",
    description: "ConvertiLab crée des sites internet professionnels dans les grandes villes de France",
    numberOfItems: creationSiteCities.length,
    itemListElement: creationSiteCities.map((city, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Création de site internet ${city.name}`,
      url: `${SITE.url}/creation-site-internet/${city.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Combien coûte la création d'un site internet ?", acceptedAnswer: { "@type": "Answer", text: "Chez ConvertiLab, la création d'un site vitrine professionnel démarre à 500€. Ce prix inclut le design sur-mesure, 5 pages, le référencement de base, l'hébergement première année et le support 30 jours. Les e-commerces et sites sur-mesure font l'objet d'un devis." } },
      { "@type": "Question", name: "Combien de temps pour créer un site internet professionnel ?", acceptedAnswer: { "@type": "Answer", text: "ConvertiLab livre votre site en 7 jours ouvrés après validation de la maquette. La maquette est présentée sous 48h après l'appel découverte, soit environ 2 semaines de la prise de contact à la mise en ligne." } },
      { "@type": "Question", name: "Faut-il être dans la même ville que l'agence ?", acceptedAnswer: { "@type": "Answer", text: "Non. ConvertiLab crée des sites internet pour des entreprises partout en France, à distance (visio, Figma, Notion), avec les mêmes résultats. Nous intervenons aussi en présentiel en Île-de-France." } },
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
            Création de site internet en France
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Création de site internet —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">dans votre ville</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed bg-purple-50 border-l-4 border-purple-400 px-5 py-4 rounded-r-xl text-left">
            ConvertiLab crée des sites internet professionnels pour les entrepreneurs et PME dans les grandes villes de France. Site vitrine livré en 7 jours dès 500€, avec référencement local et support 30 jours inclus. Basés à Rueil-Malmaison, nous intervenons en présentiel en Île-de-France et à distance partout en France.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">Dans quelle ville créer votre site internet ?</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Sélectionnez votre ville pour découvrir nos offres de création de site internet et les témoignages clients de votre région.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creationSiteCities.map((city) => (
              <Link
                key={city.slug}
                href={`/creation-site-internet/${city.slug}`}
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

      {/* Zone d'intervention */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Peut-on faire créer son site internet à distance ?</h2>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            Oui. ConvertiLab crée des sites internet pour des entreprises partout en France. 100% de nos projets sont gérés avec des outils collaboratifs (Figma, Notion, Zoom), avec le même niveau de qualité que vous soyez à Paris ou à Bordeaux.
          </p>
          <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
            Nous intervenons également en présentiel dans toute l&apos;Île-de-France (Paris 75, Hauts-de-Seine 92, Yvelines 78, Val-d&apos;Oise 95, Seine-Saint-Denis 93, Val-de-Marne 94, Essonne 91, Seine-et-Marne 77).
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
              Nous créons des sites internet pour des entreprises de toute la France. Contactez-nous pour discuter de votre projet.
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
