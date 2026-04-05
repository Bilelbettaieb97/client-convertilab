import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CommunityManagementContent from "./CommunityManagementContent";

export const metadata: Metadata = {
  title: "Community Management | Gestion Réseaux Sociaux",
  description: "Confiez la gestion de vos réseaux sociaux à nos experts. Contenu engageant, modération, calendrier éditorial et reporting mensuel. Résultats garantis.",
  alternates: { canonical: `${SITE.url}/services/social-media/community-management` },
  openGraph: {
    title: "Community Management | Gestion Réseaux Sociaux | ConvertiLab",
    description: "Confiez la gestion de vos réseaux sociaux à nos experts.",
    url: `${SITE.url}/services/social-media/community-management`,
  },
};

export default function CommunityManagementPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CommunityManagementContent />
      <Footer />
    </div>
  );
}
