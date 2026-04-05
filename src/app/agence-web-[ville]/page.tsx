import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE, PRICING } from "@/lib/constants";
import { cities, getCityBySlug } from "@/data/cities";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Star, Shield, Clock, Zap, Globe, Search, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Props = { params: Promise<{ ville: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) return { title: "Page introuvable" };

  return {
    title: `Agence Web ${city.name} | Création Site Internet ${city.name}`,
    description: `Agence web à ${city.name} (${city.department}). Création de sites internet, SEO, Google Ads. +150 clients, livraison en 7 jours. Devis gratuit.`,
    keywords: `agence web ${city.name}, création site internet ${city.name}, SEO ${city.name}, site vitrine ${city.name}, agence digitale ${city.department}`,
    alternates: { canonical: `${SITE.url}/agence-web-${city.slug}` },
    openGraph: {
      title: `Agence Web ${city.name} | Création Site Internet | ConvertiLab`,
      description: `Votre agence web à ${city.name}. Sites sur-mesure, SEO, Ads. Devis gratuit.`,
      url: `${SITE.url}/agence-web-${city.slug}`,
    },
    other: {
      "geo.region": "FR-IDF",
      "geo.placename": city.name,
      "ICBM": `${city.lat}, ${city.lng}`,
    },
  };
}

export function generateStaticParams() {
  return cities.map((city) => ({ ville: city.slug }));
}

export default async function CityPage({ params }: Props) {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) notFound();

  const services = [
    { icon: Globe, title: "Création Site Vitrine", desc: `Site professionnel 5 pages pour votre entreprise à ${city.name}. Design sur-mesure, responsive, SEO optimisé.`, price: PRICING.vitrine.label, link: "/services/sites-web/site-vitrine" },
    { icon: Search, title: "Référencement SEO", desc: `Apparaissez en première page Google quand vos clients cherchent vos services à ${city.name}.`, price: "Sur devis", link: "/services/seo/referencement" },
    { icon: BarChart3, title: "Google Ads & Meta Ads", desc: `Campagnes publicitaires ciblées pour toucher vos clients à ${city.name} et en ${city.department}.`, price: "Sur devis", link: "/services/sea" },
  ];

  const avantages = [
    { icon: MapPin, text: `Basés en Île-de-France, nous connaissons le marché de ${city.name}` },
    { icon: Clock, text: "Site livré en 7 jours, garanti" },
    { icon: Shield, text: "Paiement uniquement après validation" },
    { icon: Star, text: "4.9/5 de satisfaction client (47 avis)" },
    { icon: Zap, text: "Sites ultra-rapides (Next.js, score 90+)" },
    { icon: Users, text: "+150 entreprises accompagnées en Île-de-France" },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: `ConvertiLab - Agence Web ${city.name}`,
    url: `${SITE.url}/agence-web-${city.slug}`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      postalCode: city.postalCode,
      addressRegion: city.region,
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
    areaServed: { "@type": "City", name: city.name },
    priceRange: "€€",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "47", bestRating: "5" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: `Agence Web ${city.name}`, item: `${SITE.url}/agence-web-${city.slug}` },
    ],
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            {city.name}, {city.department}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Agence Web à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{city.name}</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
            {city.description} ConvertiLab vous accompagne dans la création de votre site internet, le référencement SEO et la publicité en ligne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 text-lg">
              <Link href="/contact">
                Devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg">
              <Link href="/portfolio">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Nos services à <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{city.name}</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Des solutions digitales sur-mesure pour les entreprises de {city.name} et ses environs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{s.desc}</p>
                  <p className="text-sm font-semibold text-purple-600 mb-4">{s.price}</p>
                  <Link href={s.link} className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-800">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Pourquoi choisir ConvertiLab à {city.name} ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantages.map((a, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm">
                <a.icon className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à lancer votre projet à {city.name} ?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Obtenez un devis gratuit sous 24h. Sites à partir de {PRICING.vitrine.label}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">
                <Link href="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link href={`tel:${SITE.phone}`}>
                  <Phone className="mr-2 w-5 h-5" />
                  {SITE.phoneDisplay}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Autres villes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nous intervenons aussi à</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.filter((c) => c.slug !== city.slug).map((c) => (
              <Link key={c.slug} href={`/agence-web-${c.slug}`} className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 hover:text-purple-600 hover:shadow-md transition-all border">
                Agence web {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
