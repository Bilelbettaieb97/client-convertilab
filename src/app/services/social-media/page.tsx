import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SocialMediaContent from "./SocialMediaContent";

export const metadata: Metadata = {
  title: "Social Media & Community Management Paris",
  description: "Community management et stratégie social media pour PME. Instagram, Facebook, LinkedIn, TikTok. +150 clients. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/social-media` },
  openGraph: {
    title: "Social Media & Community Management | ConvertiLab",
    description: "Développez votre communauté sur les réseaux sociaux avec ConvertiLab.",
    url: `${SITE.url}/services/social-media`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media & Community Management",
  description: "Community management, stratégie social media et email marketing pour PME et entrepreneurs.",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
    { "@type": "ListItem", position: 3, name: "Social Media", item: `${SITE.url}/services/social-media` },
  ],
};

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />
      <SocialMediaContent />
      <Footer />
    </div>
  );
}
