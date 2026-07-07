import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { devisServices } from "@/data/devis-pages";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Devis Gratuit — Sites Web, SEO, Google Ads & Meta Ads",
  description:
    "Demandez un devis gratuit et sans engagement pour votre projet digital : site vitrine, e-commerce, landing page, SEO, Google Ads, Meta Ads. Réponse sous 24h.",
  alternates: { canonical: `${SITE.url}/devis` },
  openGraph: {
    title: "Devis Gratuit pour votre projet digital | ConvertiLab",
    description:
      "Site vitrine, e-commerce, SEO, Google Ads, Meta Ads : recevez un devis détaillé et gratuit sous 24h. +150 clients accompagnés, 4.9★ Trustpilot.",
    url: `${SITE.url}/devis`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Devis gratuit", item: `${SITE.url}/devis` },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: devisServices.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Devis ${s.name}`,
    url: `${SITE.url}/devis/${s.slug}`,
  })),
};

export default function DevisHubPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Navigation />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm bg-white border border-purple-200 text-purple-800 rounded-full shadow-sm">
              <FileText className="w-4 h-4" />
              <span className="font-semibold">Devis gratuit et sans engagement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Recevez votre devis gratuit sous 24h
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Choisissez votre projet ci-dessous. Nous vous envoyons un devis détaillé, transparent
              et personnalisé sous 24h, sans aucun engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-600" /> Réponse sous 24h</span>
              <span className="inline-flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-600" /> Sans engagement</span>
              <span className="inline-flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-600" /> +150 clients accompagnés</span>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {devisServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/devis/${service.slug}`}
                  className="group block p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                    Devis {service.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-purple-600 font-semibold text-sm">
                    Demander un devis
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Un projet sur-mesure ou une question ?
            </h2>
            <p className="text-gray-600 mb-8">
              Parlons de votre projet directement. Réponse rapide et conseils gratuits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Nous contacter <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Voir tous nos services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
