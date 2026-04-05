import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CommunityManagementContent from "./CommunityManagementContent";

export const metadata: Metadata = {
  title: "Community Management | Gestion Réseaux Sociaux",
  description: "Gestion de vos réseaux sociaux par des experts. Contenu engageant, modération, calendrier éditorial, reporting mensuel. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/social-media/community-management` },
  openGraph: {
    title: "Community Management | ConvertiLab",
    description: "Confiez la gestion de vos réseaux sociaux à nos experts.",
    url: `${SITE.url}/services/social-media/community-management`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Community Management",
  description: "Gestion quotidienne de vos réseaux sociaux : création de contenu, modération, calendrier éditorial et reporting mensuel.",
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
    { "@type": "ListItem", position: 4, name: "Community Management", item: `${SITE.url}/services/social-media/community-management` },
  ],
};

export default function CommunityManagementPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />
      <CommunityManagementContent />
      <Footer />
    </div>
  );
}
