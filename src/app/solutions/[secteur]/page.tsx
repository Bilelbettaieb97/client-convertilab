import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE, PRICING } from "@/lib/constants";
import { sectors, getSectorBySlug } from "@/data/sectors";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Star, Shield, Clock, Zap, Phone, AlertTriangle } from "lucide-react";

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      { "@type": "ListItem", position: 3, name: `Site Web ${sector.name}`, item: `${SITE.url}/solutions/${sector.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Création Site Web ${sector.name}`,
    description: sector.description,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
    offers: { "@type": "Offer", priceCurrency: "EUR", price: "500", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "500", description: "À partir de" } },
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-4 text-5xl">{sector.emoji}</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center leading-tight">
            Création Site Web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{sector.name}</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
            {sector.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 text-lg">
              <Link href="/contact">{sector.cta} <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg">
              <Link href="/portfolio">Voir nos réalisations</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border"><Zap className="w-4 h-4 text-purple-500" /> Livré en 7 jours</span>
            <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border"><Shield className="w-4 h-4 text-green-500" /> {PRICING.vitrine.label}</span>
            <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border"><Star className="w-4 h-4 text-yellow-500" /> 4.9/5 satisfaction</span>
          </div>
        </div>
      </section>

      {/* Problèmes */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Les défis des <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{sector.name.toLowerCase()}s</span> en ligne
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">Vous vous reconnaissez ?</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {sector.painPoints.map((pain, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-red-50 rounded-xl border border-red-100">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{pain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Notre solution</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {sector.solutions.map((sol, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{sol}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Ce qui est inclus dans votre site {sector.name.toLowerCase()}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sector.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 p-4 bg-purple-50 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{feat}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            + hébergement 1 an, certificat SSL, formation, support 30 jours — tout inclus à partir de {PRICING.vitrine.label}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 sm:p-16 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Prêt à créer votre site {sector.name.toLowerCase()} ?</h2>
            <p className="text-lg text-white/80 mb-8">Devis gratuit sous 24h. Livraison en 7 jours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">
                <Link href="/contact">{sector.cta} <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link href={`tel:${SITE.phone}`}><Phone className="mr-2 w-5 h-5" />{SITE.phoneDisplay}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Autres secteurs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Nous créons aussi des sites pour</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.filter((s) => s.slug !== sector.slug).map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 hover:text-purple-600 hover:shadow-md transition-all border">
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
