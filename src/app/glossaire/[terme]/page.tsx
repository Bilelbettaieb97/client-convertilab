import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { glossaryTerms, getTermBySlug } from "@/data/glossary";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ terme: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { terme } = await params;
  const term = getTermBySlug(terme);
  if (!term) return { title: "Terme introuvable" };

  return {
    title: `${term.term} — Définition & Explication`,
    description: term.definition,
    alternates: { canonical: `${SITE.url}/glossaire/${term.slug}` },
    openGraph: {
      title: `${term.term} | Glossaire ConvertiLab`,
      description: term.definition,
      url: `${SITE.url}/glossaire/${term.slug}`,
    },
  };
}

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ terme: t.slug }));
}

export default async function GlossaryTermPage({ params }: Props) {
  const { terme } = await params;
  const term = getTermBySlug(terme);
  if (!term) notFound();

  const relatedTerms = term.relatedTerms
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter(Boolean);

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    inDefinedTermSet: { "@type": "DefinedTermSet", name: "Glossaire Marketing Digital ConvertiLab", url: `${SITE.url}/glossaire` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Glossaire", item: `${SITE.url}/glossaire` },
      { "@type": "ListItem", position: 3, name: term.term, item: `${SITE.url}/glossaire/${term.slug}` },
    ],
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />

      <article className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/glossaire" className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 mb-8">
            <ArrowLeft className="w-4 h-4" /> Retour au glossaire
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-4">
            <BookOpen className="w-3 h-3" /> Définition
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{term.term}</h1>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-8">
            <p className="text-lg text-gray-800 leading-relaxed font-medium">{term.definition}</p>
          </div>

          <div className="prose prose-gray max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">En savoir plus</h2>
            <p className="text-gray-600 leading-relaxed text-base">{term.content}</p>
          </div>

          {/* Service lié */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-12">
            <h3 className="text-xl font-bold mb-2">Besoin d&apos;aide avec le {term.term.split(" ")[0]} ?</h3>
            <p className="text-white/80 mb-4">Nos experts vous accompagnent. Devis gratuit sous 24h.</p>
            <div className="flex gap-3">
              <Button asChild className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href={term.relatedService}>Découvrir notre service <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>

          {/* Termes liés */}
          {relatedTerms.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Termes liés</h3>
              <div className="flex flex-wrap gap-3">
                {relatedTerms.map((t) => t && (
                  <Link
                    key={t.slug}
                    href={`/glossaire/${t.slug}`}
                    className="px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all border"
                  >
                    {t.term}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}
