import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import IdentiteVisuelleContent from "./IdentiteVisuelleContent";

export const metadata: Metadata = {
  title: "Identite Visuelle | Logo & Branding",
  description: "Creation de logo et charte graphique sur-mesure. Demarquez-vous avec une identite visuelle forte et memorable. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/design/identite-visuelle` },
  openGraph: { title: "Identite Visuelle | Logo & Branding | ConvertiLab", description: "Creation de logo et charte graphique sur-mesure. Demarquez-vous avec une identite visuelle forte et memorable. Devis gratuit.", url: `${SITE.url}/services/design/identite-visuelle` },
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  { "@type": "ListItem", "position": 3, "name": "Design", "item": `${SITE.url}/services/design` },
  { "@type": "ListItem", "position": 4, "name": "Identite Visuelle", "item": `${SITE.url}/services/design/identite-visuelle` },
]};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Identité Visuelle & Logo",
  description: "Création de logo, charte graphique et identité visuelle complète pour votre marque.",
  url: `${SITE.url}/services/design/identite-visuelle`,
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
  },
  areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "300",
    availability: "https://schema.org/InStock",
  },
};

export default function IdentiteVisuellePage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navigation />
      <IdentiteVisuelleContent />
      <Footer />
    </div>
  );
}
