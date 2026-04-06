import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { glossaryTerms, getTermBySlug } from "@/data/glossary";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Calendar,
  ExternalLink,
} from "lucide-react";

type Props = { params: Promise<{ terme: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { terme } = await params;
  const term = getTermBySlug(terme);
  if (!term) return { title: "Terme introuvable" };

  return {
    title: `${term.term} — Définition & Explication | Glossaire ConvertiLab`,
    description: term.definition,
    alternates: { canonical: `${SITE.url}/glossaire/${term.slug}` },
    openGraph: {
      title: `${term.term} | Glossaire Marketing Digital ConvertiLab`,
      description: term.definition,
      url: `${SITE.url}/glossaire/${term.slug}`,
    },
  };
}

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ terme: t.slug }));
}

function renderContent(content: string) {
  const blocks: { type: "heading" | "paragraph"; text: string }[] = [];
  const lines = content.split("\n");
  let currentParagraph = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ")) {
      if (currentParagraph.trim()) {
        blocks.push({ type: "paragraph", text: currentParagraph.trim() });
        currentParagraph = "";
      }
      blocks.push({ type: "heading", text: trimmed.replace("## ", "") });
    } else if (trimmed === "") {
      if (currentParagraph.trim()) {
        blocks.push({ type: "paragraph", text: currentParagraph.trim() });
        currentParagraph = "";
      }
    } else {
      currentParagraph += (currentParagraph ? " " : "") + trimmed;
    }
  }
  if (currentParagraph.trim()) {
    blocks.push({ type: "paragraph", text: currentParagraph.trim() });
  }

  return blocks.map((block, i) => {
    if (block.type === "heading") {
      return (
        <h3
          key={i}
          className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-3"
        >
          {block.text}
        </h3>
      );
    }
    // Render bold text within paragraphs
    const parts = block.text.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-gray-600 leading-relaxed text-base mb-4">
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={j} className="text-gray-800 font-semibold">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return <span key={j}>{part}</span>;
        })}
      </p>
    );
  });
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
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Glossaire Marketing Digital ConvertiLab",
      url: `${SITE.url}/glossaire`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Glossaire",
        item: `${SITE.url}/glossaire`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: term.term,
        item: `${SITE.url}/glossaire/${term.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: term.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      <article className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* 1. Navigation retour */}
          <Link
            href="/glossaire"
            className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour au glossaire
          </Link>

          {/* 2. En-tete */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-4">
              <BookOpen className="w-3 h-3" />
              Définition
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              {term.term}
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-3.5 h-3.5" />
              Mis à jour le {term.lastUpdated}
            </div>
          </div>

          {/* 3. Definition - encadre violet */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-6 sm:p-8 mb-10">
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-medium">
              {term.definition}
            </p>
          </div>

          {/* 4. Pourquoi c'est important */}
          <section className="mb-10">
            <div className="flex items-start gap-4 bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  Pourquoi c&apos;est important
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {term.importance}
                </p>
              </div>
            </div>
          </section>

          {/* 5. Explication detaillee */}
          <section className="mb-12">
            <div className="prose prose-gray max-w-none">
              {renderContent(term.content)}
            </div>
          </section>

          {/* 6. Exemples pratiques */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Exemples pratiques
            </h2>
            <div className="space-y-4">
              {term.examples.map((example, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-5"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {example}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-3">
              {term.faqItems.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-gray-900 font-medium hover:bg-gray-100 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-5 pt-1">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* 8. CTA Service */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 sm:p-10 text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                Besoin d&apos;aide avec le {term.term.split(" ")[0]} ?
              </h2>
              <p className="text-white/80 mb-6 text-base sm:text-lg leading-relaxed">
                Nos experts vous accompagnent pour mettre en place une stratégie
                efficace. Obtenez un devis gratuit et personnalisé sous 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
                >
                  <Link href={term.relatedService}>
                    Découvrir notre service
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white"
                >
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* 9. Aller plus loin */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Aller plus loin
            </h2>

            {relatedTerms.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Termes liés
                </h3>
                <div className="flex flex-wrap gap-3">
                  {relatedTerms.map(
                    (t) =>
                      t && (
                        <Link
                          key={t.slug}
                          href={`/glossaire/${t.slug}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all border border-gray-200 hover:border-purple-200"
                        >
                          {t.term}
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}

            <Link
              href="/glossaire"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors group"
            >
              <BookOpen className="w-4 h-4" />
              Voir tout le glossaire marketing digital
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </section>

          {/* 10. Date de mise a jour en bas */}
          <div className="border-t border-gray-200 pt-6 mt-12">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              Dernière mise à jour : {term.lastUpdated}
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
