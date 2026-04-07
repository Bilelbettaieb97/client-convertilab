import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { comparisons } from "@/data/comparisons";

export const metadata: Metadata = {
  title: "Comparatifs Web & Marketing Digital",
  description:
    "WordPress vs Next.js, Wix vs agence, SEO vs Google Ads... Comparez les solutions pour faire le meilleur choix. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/comparatifs` },
  openGraph: {
    title: "Comparatifs Web & Marketing | ConvertiLab",
    description:
      "WordPress vs Next.js, Wix vs agence, SEO vs Google Ads... Comparez les solutions pour faire le meilleur choix. Devis gratuit.",
    url: `${SITE.url}/comparatifs`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Comparatifs", item: `${SITE.url}/comparatifs` },
  ],
};

export default function ComparatifsPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700">
            Guides comparatifs
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Comparatifs
            </span>{" "}
            web &amp; marketing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Faites le bon choix pour votre projet digital. Nos comparatifs
            objectifs vous aident a prendre la meilleure decision.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisons.map((comp) => (
              <Link
                key={comp.slug}
                href={`/comparatifs/${comp.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700">
                    {comp.optionA.name}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">vs</span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-100 text-pink-700">
                    {comp.optionB.name}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {comp.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                  {comp.verdict.slice(0, 120)}...
                </p>
                <span className="text-purple-600 text-sm font-medium flex items-center gap-1">
                  Lire le comparatif
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Outil gratuit */}
          <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900">Comparez votre site avec la concurrence</p>
                <p className="text-sm text-gray-600">Analysez performances, design et SEO face a vos concurrents</p>
              </div>
              <Link
                href="/comparateur-sites"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 whitespace-nowrap"
              >
                Comparer maintenant
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d&apos;aide pour choisir ?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Nos experts analysent votre situation et vous recommandent la
                meilleure solution. Devis gratuit sous 24h.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Devis gratuit
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
