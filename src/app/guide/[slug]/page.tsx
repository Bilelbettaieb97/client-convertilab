import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PrixSiteCta from "@/components/internal-links/PrixSiteCta";
import SeoCheckCta from "@/components/internal-links/SeoCheckCta";
import { guides, getGuideBySlug, getAllGuideSlugs } from "@/data/guides";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  CheckCircle2,
  Lightbulb,
  ChevronRight,
  ArrowRight,
  HelpCircle,
  BookOpen,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  const title = guide.title.length > 57 ? guide.title.slice(0, 57) + "..." : guide.title;

  return {
    title,
    description: guide.description,
    alternates: { canonical: `${SITE.url}/guide/${slug}` },
    openGraph: {
      title,
      description: guide.description,
      url: `${SITE.url}/guide/${slug}`,
      siteName: SITE.name,
      type: "article",
      images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE.url}/guide` },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `${SITE.url}/guide/${slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />

      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/guide">Guides</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{guide.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-6">
                <BookOpen className="w-4 h-4" />
                Guide complet
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {guide.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                {guide.description}
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                Les étapes a suivre
              </h2>
              <div className="space-y-12">
                {guide.steps.map((step, i) => (
                  <div key={i} className="relative flex gap-6">
                    {/* Step number line */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg shadow-purple-500/20 shrink-0">
                        {i + 1}
                      </div>
                      {i < guide.steps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-purple-300 to-pink-200 dark:from-purple-700 dark:to-pink-800 mt-4" />
                      )}
                    </div>
                    {/* Step content */}
                    <div className="pb-8 flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                  Nos conseils
                </h2>
              </div>
              <div className="grid gap-4">
                {guide.tips.map((tip, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                  Questions fréquentes
                </h2>
              </div>
              <div className="space-y-4">
                {guide.faqItems.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <span className="font-semibold text-slate-900 dark:text-white pr-4">
                        {item.question}
                      </span>
                      <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Outils gratuits contextuels */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto space-y-4">
              {/* SEO Check — guides contenant "seo" */}
              {slug.includes("seo") && (
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-slate-900">Testez votre SEO gratuitement</p>
                      <p className="text-sm text-slate-600">Audit complet de 60+ points en 60 secondes</p>
                    </div>
                    <Link href="/seo-check" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 whitespace-nowrap">
                      Lancer l&apos;audit <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Speed Check — guides contenant "site-internet" ou "convertit" */}
              {(slug.includes("site-internet") || slug.includes("convertit")) && (
                <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-slate-900">Testez la vitesse de votre site</p>
                      <p className="text-sm text-slate-600">Analysez les performances et obtenez des recommandations</p>
                    </div>
                    <Link href="/speed-check" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 whitespace-nowrap">
                      Tester la vitesse <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Mentions legales — guides contenant "site-internet" */}
              {slug.includes("site-internet") && (
                <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-slate-900">Générez vos mentions legales</p>
                      <p className="text-sm text-slate-600">Conformes RGPD, prêts à intégrer sur votre site</p>
                    </div>
                    <Link href="/generateur-mentions-legales" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-900 whitespace-nowrap">
                      Generer mes mentions <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-purple-600 to-pink-500">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Prêt à passer a l&apos;action ?
              </h2>
              <p className="text-lg text-purple-100 mb-8">
                Obtenez un devis gratuit et personnalisé sous 24h. Sans engagement.
              </p>
              <Link
                href={`/devis/${guide.relatedDevis}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-colors shadow-lg shadow-purple-900/20"
              >
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {slug === "ameliorer-seo" && (
        <SeoCheckCta title="Première étape du guide : auditez votre site" />
      )}

      {["devis-site-web", "creer-site-internet", "site-web-qui-convertit"].includes(slug) && (
        <PrixSiteCta title="Chiffrez votre projet avant de demander des devis" />
      )}

      <Footer />
    </div>
  );
}
