import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { SITE } from "@/lib/constants";
import { guides } from "@/data/guides";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";

/**
 * Index des guides : la page n'existait pas alors que chaque guide y renvoyait
 * dans son fil d'Ariane (404), et 8 guides sur 10 n'avaient aucun lien entrant.
 */

export const metadata: Metadata = {
  title: "Guides pratiques : site internet, SEO, publicité, CRM",
  description:
    "Des guides pas à pas pour créer son site, le référencer, lancer sa publicité et organiser ses relances : étapes, conseils, questions fréquentes. Gratuits, écrits pour les TPE.",
  alternates: { canonical: `${SITE.url}/guide` },
  openGraph: {
    title: "Guides pratiques ConvertiLab",
    description: "Créer son site, le référencer, lancer sa publicité, organiser ses relances : des guides pas à pas pour les TPE.",
    url: `${SITE.url}/guide`,
    type: "website",
  },
};

export default function GuidesIndexPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Guides pratiques ConvertiLab",
    itemListElement: guides.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/guide/${g.slug}`,
      name: g.title,
    })),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE.url}/guide` },
    ],
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />
      <main className="pt-16">
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
                <BreadcrumbPage>Guides</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-6">
                <BookOpen className="w-4 h-4" />
                {guides.length} guides gratuits
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5 leading-tight">
                Des guides pas à pas pour les entreprises qui font tout elles-mêmes
              </h1>
              <p className="text-lg text-muted-foreground">
                Créer son site, le faire trouver sur Google, lancer une première campagne, organiser ses relances : chaque guide donne les étapes, les pièges et les questions que l&apos;on nous pose le plus.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {guides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guide/${g.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/40 transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{g.steps.length} étapes · {g.faqItems.length} questions</p>
                  <h2 className="text-xl font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">{g.title}</h2>
                  <p className="text-sm text-muted-foreground flex-1">{g.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold mt-5 text-sm">
                    Lire le guide
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <RelatedServicesSection title="Quand vous préférez déléguer" max={4} poles={["site", "seo", "publicite", "crm"]} />
      </main>
      <Footer />
    </div>
  );
}
