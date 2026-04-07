import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { comparisons } from "@/data/comparisons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);
  if (!comp) return {};

  const title = comp.title.length > 50 ? comp.title : `${comp.title} : Quel Choix ?`;
  const description = `${comp.optionA.name} ou ${comp.optionB.name} ? Comparatif complet pour choisir la meilleure solution. Devis gratuit.`;

  return {
    title: title.slice(0, 60),
    description: description.slice(0, 160),
    alternates: { canonical: `${SITE.url}/comparatifs/${slug}` },
    openGraph: {
      title: `${title} | ConvertiLab`,
      description: description.slice(0, 160),
      url: `${SITE.url}/comparatifs/${slug}`,
    },
  };
}

export default async function ComparisonDetailPage({ params }: Props) {
  const { slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);
  if (!comp) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Comparatifs", item: `${SITE.url}/comparatifs` },
      { "@type": "ListItem", position: 3, name: comp.title, item: `${SITE.url}/comparatifs/${slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comp.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-purple-600 transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/comparatifs" className="hover:text-purple-600 transition-colors">Comparatifs</Link>
            <span>/</span>
            <span className="text-gray-900">{comp.title}</span>
          </nav>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-purple-100 text-purple-700">
              {comp.optionA.name}
            </span>
            <span className="text-2xl font-bold text-gray-400">VS</span>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-pink-100 text-pink-700">
              {comp.optionB.name}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {comp.title}
          </h1>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Option A */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 p-8">
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-purple-100 text-purple-700 mb-3">
                  {comp.optionA.name}
                </span>
                <p className="text-gray-600 text-sm">{comp.optionA.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">
                  Avantages
                </h3>
                <ul className="space-y-2">
                  {comp.optionA.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
                  Inconvenients
                </h3>
                <ul className="space-y-2">
                  {comp.optionA.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Option B */}
            <div className="bg-white rounded-2xl border-2 border-pink-200 p-8">
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-pink-100 text-pink-700 mb-3">
                  {comp.optionB.name}
                </span>
                <p className="text-gray-600 text-sm">{comp.optionB.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">
                  Avantages
                </h3>
                <ul className="space-y-2">
                  {comp.optionB.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
                  Inconvenients
                </h3>
                <ul className="space-y-2">
                  {comp.optionB.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Notre verdict
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{comp.verdict}</p>
            <div className="mt-6">
              <Link
                href={comp.relatedService}
                className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
              >
                Decouvrir notre service
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Outil gratuit */}
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Questions frequentes
          </h2>
          <div className="space-y-6">
            {comp.faqItems.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d&apos;un conseil personnalise ?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Nos experts analysent votre situation et vous recommandent la
              meilleure solution. Devis gratuit sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Devis gratuit
              </Link>
              <Link
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
