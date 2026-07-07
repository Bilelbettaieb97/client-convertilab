import type { Metadata } from "next";
import Link from "next/link";
import { SITE, STRUCTURED_DATA } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";
import LazyMapEmbed from "@/components/ui/LazyMapEmbed";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Contact Agence Web Paris | Devis Gratuit sous 24h",
  description:
    "Contactez notre agence web à Paris & Rueil-Malmaison. Devis gratuit sous 24h, consultation 30 min offerte. 4.9★ sur Trustpilot. Tél : 06 16 47 72 45.",
  keywords:
    "contact agence web Paris, devis site internet Rueil-Malmaison, agence web Île-de-France, création site web Paris, consultation gratuite",
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Contactez ConvertiLab — Devis Gratuit sous 24h",
    description:
      "Agence web Paris & Rueil-Malmaison. Devis gratuit sous 24h, consultation 30 min offerte. 4.9★ Trustpilot. +150 clients accompagnés.",
    url: `${SITE.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${SITE.url}/contact`,
      },
    ],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    ...STRUCTURED_DATA.localBusiness,
  };

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contactez ConvertiLab",
    url: `${SITE.url}/contact`,
    description: "Formulaire de contact et demande de devis pour la création de site web à Paris et en Île-de-France.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE.url}/contact` },
      ],
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
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
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Contact />

        {/* Google Maps */}
        <section className="py-12 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-slate-900 dark:text-white">
              Notre agence en Île-de-France
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
              Basés à Rueil-Malmaison (92), nous accompagnons les entreprises à
              Paris, en Île-de-France et partout en France.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto">
              <LazyMapEmbed
                title="ConvertiLab - Agence web Rueil-Malmaison, Paris"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.8!2d2.1894!3d48.8769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e664d3c0a03c2f%3A0x0!2s1+Rue+du+4+Septembre%2C+92500+Rueil-Malmaison!5e0!3m2!1sfr!2sfr!4v1"
                label="notre agence"
                heightClass="h-[400px]"
              />
            </div>
            <div className="text-center mt-6 text-sm text-slate-500 dark:text-slate-400">
              <p>
                1 Rue du 4 Septembre, 92500 Rueil-Malmaison | +33 6 16 47 72 45
                | contact@convertilab.com
              </p>
            </div>
          </div>
        </section>

        <RelatedServicesSection title="Nos services" max={4} />
      </main>

      <Footer />
    </div>
  );
}
