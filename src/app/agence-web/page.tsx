import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { cities } from "@/data/cities";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Agence Web Île-de-France | Création Site Internet",
  description: "Agence web locale en Île-de-France : Paris, Rueil-Malmaison, Boulogne, Nanterre. +150 clients, livraison 7j. Devis gratuit.",
  keywords: "agence web Île-de-France, création site internet Paris, agence web Hauts-de-Seine, agence digitale locale",
  alternates: { canonical: `${SITE.url}/agence-web` },
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

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            Île-de-France
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Votre agence web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">près de chez vous</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Basés à Rueil-Malmaison, nous accompagnons les entreprises de toute l&apos;Île-de-France dans leur transformation digitale. Proximité, réactivité et expertise locale.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">Nos implantations</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Trouvez votre agence web locale et bénéficiez d&apos;un accompagnement de proximité.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Zone d&apos;intervention</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nous intervenons dans toute l&apos;Île-de-France : Paris (75), Hauts-de-Seine (92), Yvelines (78), Val-d&apos;Oise (95), Seine-Saint-Denis (93), Val-de-Marne (94), Essonne (91) et Seine-et-Marne (77).
          </p>
          <p className="text-base text-gray-500 mb-8">
            Nos services sont aussi disponibles en 100% distanciel pour les entreprises hors Île-de-France.
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
