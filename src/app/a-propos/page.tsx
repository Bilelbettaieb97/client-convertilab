import type { Metadata } from "next";
import Link from "next/link";
import { SITE, STRUCTURED_DATA } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";
import SuggestedArticles from "@/components/internal-links/SuggestedArticles";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "A Propos | Agence Web Paris",
  description:
    "Decouvrez ConvertiLab, agence web a Paris. +50 clients accompagnes, +280% de CA moyen. Expertise en sites web, SEO et Ads.",
  keywords:
    "agence web Paris, creation site internet, agence digitale, developpement web, design web, equipe web",
  alternates: { canonical: `${SITE.url}/a-propos` },
};

export default function AboutPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "A propos",
        item: `${SITE.url}/a-propos`,
      },
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    ...STRUCTURED_DATA.organization,
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    ...STRUCTURED_DATA.localBusiness,
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
                <BreadcrumbPage>A propos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <About />

        <RelatedServicesSection title="Decouvrez nos services" max={4} />
        <SuggestedArticles title="Derniers articles du blog" max={3} />
      </main>

      <Footer />
    </div>
  );
}
