import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ApplicationWebContent from "./ApplicationWebContent";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";

export const metadata: Metadata = {
  title: "Application Web Sur-Mesure Paris | SaaS & Portails Clients",
  description: "Développement d'applications web sur-mesure : SaaS, portails clients, outils métiers. Architecture scalable et sécurisée. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/sites-web/application-web` },
  openGraph: {
    title: "Application Web Sur-Mesure Paris | SaaS & Portails Clients | ConvertiLab",
    description: "Développement d'applications web sur-mesure : SaaS, portails clients, outils métiers. Architecture scalable et sécurisée. Devis gratuit.",
    url: `${SITE.url}/services/sites-web/application-web`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Sites Web", "item": `${SITE.url}/services/sites-web` },
    { "@type": "ListItem", "position": 4, "name": "Application Web", "item": `${SITE.url}/services/sites-web/application-web` },
  ]
};

export default function ApplicationWebPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />
      <ApplicationWebContent />
      <RelatedServicesSection exclude={["/services/sites-web/application-web"]} />
      <Footer />
    </div>
  );
}
