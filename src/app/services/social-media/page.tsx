import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import SocialMediaContent from "./SocialMediaContent";

export const metadata: Metadata = {
  title: "Social Media & Community Management Paris",
  description: "Community management et stratégie social media pour PME. Instagram, Facebook, LinkedIn, TikTok. +150 clients. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/social-media` },
  openGraph: {
    title: "Social Media & Community Management Paris | ConvertiLab",
    description: "Community management Instagram, Facebook, LinkedIn, TikTok. +150 clients PME. Devis gratuit.",
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
      <ServiceFAQ
        title="Questions fréquentes sur le social media"
        faqs={[
        { q: "Combien coûte la gestion des réseaux sociaux par une agence ?", a: "Le prix dépend du nombre de réseaux, du volume de publications et de la production de visuels ou de vidéos. Nous établissons un devis après un échange de 30 minutes ; la plupart de nos accompagnements pour une TPE tiennent en un forfait mensuel avec un nombre de publications fixé à l'avance." },
        { q: "Sur quels réseaux une petite entreprise doit-elle être présente ?", a: "Sur un ou deux, pas sur tous : Instagram et Facebook pour les commerces, la restauration et l'artisanat, LinkedIn pour les services aux entreprises, TikTok quand la marque a une dimension visuelle forte. Mieux vaut un réseau vivant que quatre réseaux abandonnés." },
        { q: "Les réseaux sociaux remplacent-ils un site internet ?", a: "Non. Les réseaux sont des espaces loués, dont les règles changent sans préavis ; le site est le seul espace qui vous appartient, celui où le client décide et vous contacte. Les deux se renforcent : le réseau amène, le site convertit." },
        { q: "Combien de temps avant des résultats ?", a: "Trois mois pour installer une régularité et un ton, six mois pour mesurer un effet sur les demandes. Nous suivons les indicateurs qui comptent : messages reçus, clics vers le site, demandes de devis, pas seulement les abonnés." },
      ]}
      />
      <Footer />
    </div>
  );
}
