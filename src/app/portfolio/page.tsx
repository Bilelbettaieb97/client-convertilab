import type { Metadata } from "next";
import Link from "next/link";
import { SITE, STRUCTURED_DATA } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";
import SuggestedArticles from "@/components/internal-links/SuggestedArticles";
import PortfolioClient from "./PortfolioClient";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Portfolio Agence Web | +150 Sites Créés, 4.9★ Trustpilot",
  description:
    "+150 clients accompagnés, +280% de CA moyen. Études de cas e-commerce, restaurants, B2B. Découvrez nos résultats concrets.",
  keywords:
    "portfolio agence web, réalisations sites web, études de cas, résultats clients, création site web Paris",
  alternates: { canonical: `${SITE.url}/portfolio` },
  openGraph: {
    title: "Portfolio ConvertiLab — +150 Sites Web Créés | 4.9★ Trustpilot",
    description: "+150 clients accompagnés, +280% de CA moyen. Réalisations e-commerce, restaurants, artisans, B2B. Résultats concrets.",
    url: `${SITE.url}/portfolio`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function PortfolioPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${SITE.url}/portfolio`,
      },
    ],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    ...STRUCTURED_DATA.localBusiness,
  };

  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.reviews.rating,
      reviewCount: SITE.reviews.count,
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Marie L." },
        reviewBody:
          "ConvertiLab a transforme notre presence en ligne. +180% de trafic en 6 mois.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Thomas D." },
        reviewBody:
          "Un accompagnement professionnel et des resultats concrets sur nos campagnes Ads.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sophie M." },
        reviewBody:
          "Notre site e-commerce genere maintenant 3x plus de ventes.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
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
                <BreadcrumbPage>Portfolio</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <PortfolioClient />

        {/* Related services */}
        <RelatedServicesSection
          title="Nos services pour booster votre business"
          max={4}
        />

        {/* Suggested articles */}
        <SuggestedArticles title="Articles pour aller plus loin" max={3} />
      </main>

      <Footer />
    </div>
  );
}
