import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import StrategieContent from "./StrategieContent";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";

export const metadata: Metadata = {
  title: "Stratégie Social Media | Plan Marketing Réseaux",
  description: "Stratégie social media sur-mesure : audit, benchmark, ligne éditoriale, KPIs. Développez votre influence en ligne. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/social-media/strategie` },
  openGraph: {
    title: "Stratégie Social Media Paris | Plan Marketing Réseaux | ConvertiLab",
    description: "Stratégie social media sur-mesure : audit, benchmark, ligne éditoriale, KPIs. Développez votre influence. Devis gratuit.",
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
      <RelatedServicesSection exclude={["/services/social-media/strategie"]} />
      <ServiceFAQ
        title="Questions fréquentes sur la stratégie social media"
        faqs={[
        { q: "Que contient une stratégie social media ?", a: "Le choix des réseaux, la cible, le ton, les formats, le calendrier, les objectifs chiffrés (messages, clics, demandes) et la façon de les mesurer. Livrée en un document court et un calendrier de trois mois, que vous pouvez appliquer seul ou nous confier." },
        { q: "Est-ce utile si je publie déjà ?", a: "C'est souvent là que la stratégie rapporte le plus : vous publiez, mais sans objectif ni mesure. Un audit de vos comptes montre en général deux ou trois réglages qui changent les résultats à effort égal." },
        { q: "Combien coûte une stratégie social media ?", a: "Un forfait fixe pour l'audit, la stratégie et le calendrier de trois mois, chiffré après un échange de 30 minutes. La mise en œuvre mensuelle est facultative." },
        { q: "La publicité fait-elle partie de la stratégie ?", a: "Elle y est prévue quand elle a un sens : un budget test de 10 à 20 € par jour sur les publications qui fonctionnent déjà, avec un coût par demande suivi. Voir notre offre Meta Ads." },
      ]}
      />
      <Footer />
    </div>
  );
}
