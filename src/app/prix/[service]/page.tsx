import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { pricingPages } from "@/data/pricing-pages";

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return pricingPages.map((p) => ({ service: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const page = pricingPages.find((p) => p.slug === slug);
  if (!page) return {};

  const title = `Prix ${page.name} | ${page.priceLabel}`;
  const description = `${page.name} ${page.priceLabel}. ${page.description} Devis gratuit sous 24h.`;

  return {
    title: title.length > 60 ? `Prix ${page.name} | ${page.priceLabel}` : title,
    description: description.slice(0, 160),
    alternates: { canonical: `${SITE.url}/prix/${slug}` },
    openGraph: {
      title: `${title} | ConvertiLab`,
      description: description.slice(0, 160),
      url: `${SITE.url}/prix/${slug}`,
    },
  };
}

export default async function PricingDetailPage({ params }: Props) {
  const { service: slug } = await params;
  const page = pricingPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const isDevis = page.price === "Sur devis";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Prix", item: `${SITE.url}/prix` },
      { "@type": "ListItem", position: 3, name: page.name, item: `${SITE.url}/prix/${slug}` },
    ],
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: page.name,
    description: page.description,
    url: `${SITE.url}/prix/${slug}`,
    ...(isDevis
      ? {}
      : {
          price: page.price,
          priceCurrency: "EUR",
        }),
    seller: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    availability: "https://schema.org/InStock",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqItems.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
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
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-purple-600 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/prix" className="hover:text-purple-600 transition-colors">
              Prix
            </Link>
            <span>/</span>
            <span className="text-gray-900">{page.name}</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {page.name}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {page.description}
          </p>

          <div className="inline-flex items-center gap-4 bg-white rounded-2xl border border-gray-200 px-8 py-6 shadow-lg">
            {isDevis ? (
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sur devis
              </span>
            ) : (
              <div className="text-center">
                <span className="text-sm text-gray-500 block">à partir de</span>
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {page.price}€
                </span>
              </div>
            )}
            <div className="h-12 w-px bg-gray-200" />
            <div className="text-left">
              <span className="text-sm text-gray-500 block">Délai</span>
              <span className="font-semibold text-gray-900">{page.deliveryTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Inclus / Non inclus */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Inclus */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Ce qui est inclus
              </h2>
              <ul className="space-y-4">
                {page.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Non inclus */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                Non inclus
              </h2>
              <ul className="space-y-4">
                {page.notIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Liens */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-3">En savoir plus :</p>
                <div className="flex flex-col gap-2">
                  <Link
                    href={page.relatedService}
                    className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-1"
                  >
                    Voir le service {page.name}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-1"
                  >
                    Demander un devis gratuit
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Questions fréquentes sur les prix
          </h2>
          <div className="space-y-6">
            {page.faqItems.map((faq) => (
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
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Recevez un devis gratuit personnalisé en moins de 24h. Sans
              engagement.
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
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
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
