import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { glossaryTerms } from "@/data/glossary";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Glossaire Marketing Digital & Web — 100+ Termes",
  description: "Tous les termes du marketing digital et de la création web expliqués simplement : SEO, SEA, landing page, backlink, CTA, conversion, responsive design et plus. 100+ définitions.",
  keywords: "glossaire SEO, définition marketing digital, SEA signification, landing page définition, backlink c'est quoi, CTA marketing",
  alternates: { canonical: `${SITE.url}/glossaire` },
  openGraph: {
    title: "Glossaire Marketing Digital & Web — 100+ Termes | ConvertiLab",
    description: "100+ termes du marketing digital expliqués simplement : SEO, SEA, landing page, backlink, CTA. Référence complète.",
    url: `${SITE.url}/glossaire`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function GlossairePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              Glossaire
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Glossaire du <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Marketing Digital</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tous les termes essentiels du web et du marketing digital expliqués simplement.
            </p>
          </div>
          <div className="grid gap-4">
            {glossaryTerms.map((term) => (
              <Link
                key={term.slug}
                href={`/glossaire/${term.slug}`}
                className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all"
              >
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-1">
                    {term.term}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{term.definition}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
