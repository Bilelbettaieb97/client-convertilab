import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import StrategieContent from "./StrategieContent";

export const metadata: Metadata = {
  title: "Stratégie Social Media | Plan Marketing Réseaux",
  description: "Stratégie social media sur-mesure : audit, benchmark, ligne éditoriale, KPIs. Développez votre influence en ligne. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/social-media/strategie` },
  openGraph: {
    title: "Stratégie Social Media | ConvertiLab",
    description: "Stratégie social media sur-mesure pour développer votre présence en ligne.",
    url: `${SITE.url}/services/social-media/strategie`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Stratégie Social Media",
  description: "Plan stratégique complet pour vos réseaux sociaux : audit, benchmark concurrence, ligne éditoriale, calendrier de publication et KPIs.",
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
    { "@type": "ListItem", position: 4, name: "Stratégie", item: `${SITE.url}/services/social-media/strategie` },
  ],
};

export default function StrategiePage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />
      <StrategieContent />
      <Footer />
    </div>
  );
}
