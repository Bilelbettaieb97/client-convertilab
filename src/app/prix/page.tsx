import type { Metadata } from "next";
import Link from "next/link";
import { SITE, PRICING } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { pricingPages } from "@/data/pricing-pages";

export const metadata: Metadata = {
  title: "Tarifs Création Site Web 2026 | Dès 500€ | ConvertiLab Paris",
  description:
    "Sites web à partir de 500€, e-commerce dès 800€, SEO et Google Ads sur devis. Tarifs transparents, sans frais cachés. Devis gratuit sous 24h.",
  alternates: { canonical: `${SITE.url}/prix` },
  openGraph: {
    title: "Tarifs Création Site Web | ConvertiLab",
    description:
      "Sites web à partir de 500€, e-commerce dès 800€, SEO et Google Ads sur devis. Tarifs transparents, sans frais cachés. Devis gratuit sous 24h.",
    url: `${SITE.url}/prix`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Prix", item: `${SITE.url}/prix` },
  ],
};

export default function PrixPage() {
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
            Tarifs transparents
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nos{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              tarifs
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Des prix clairs, sans surprise. Découvrez nos offres adaptées à
            chaque besoin et chaque budget.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPages.map((service) => {
              const isDevis = service.price === "Sur devis";
              return (
                <Link
                  key={service.slug}
                  href={`/prix/${service.slug}`}
                  className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    {isDevis ? (
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Sur devis
                      </span>
                    ) : (
                      <div>
                        <span className="text-sm text-gray-500">
                          à partir de
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {service.price}€
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 mb-8">
                    {service.includes.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-purple-600 font-medium text-sm">
                    Voir le détail
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d&apos;un devis personnalisé ?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Chaque projet est unique. Contactez-nous pour recevoir un devis
                gratuit adapté à vos besoins en moins de 24h.
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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
