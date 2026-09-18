import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CommunityManagementContent from "./CommunityManagementContent";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";

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
      <RelatedServicesSection exclude={["/services/social-media/community-management"]} />
      <ServiceFAQ
        title="Questions fréquentes sur le community management"
        faqs={[
        { q: "Qui rédige les publications ?", a: "Nous, à partir d'un entretien sur votre activité, vos clients et votre ton, puis d'un calendrier validé ensemble chaque mois. Vous relisez avant publication si vous le souhaitez ; vous fournissez les photos de terrain, nous nous chargeons du reste." },
        { q: "Répondez-vous aux messages et aux commentaires ?", a: "Oui, pendant les heures ouvrées, avec des réponses validées avec vous pour les questions fréquentes (prix, horaires, disponibilités). Les demandes de devis sont transmises immédiatement, et enregistrées dans votre CRM si vous en avez un." },
        { q: "Combien de publications par mois ?", a: "Pour une TPE, huit à douze publications par mois sur un réseau principal suffisent, avec des stories régulières. Le nombre exact est fixé dans le forfait ; la régularité compte plus que le volume." },
        { q: "Peut-on arrêter quand on veut ?", a: "Oui. Nos forfaits sont mensuels, sans engagement au-delà du mois en cours. Vous gardez les accès, les visuels et le calendrier." },
      ]}
      />
      <Footer />
    </div>
  );
}
