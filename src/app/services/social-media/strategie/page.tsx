import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import StrategieContent from "./StrategieContent";

export const metadata: Metadata = {
  title: "Stratégie Social Media | Plan Marketing Réseaux Sociaux",
  description: "Stratégie social media sur-mesure : audit, benchmark concurrence, ligne éditoriale, KPIs. Développez votre présence et votre influence en ligne.",
  alternates: { canonical: `${SITE.url}/services/social-media/strategie` },
  openGraph: {
    title: "Stratégie Social Media | ConvertiLab",
    description: "Stratégie social media sur-mesure pour développer votre présence en ligne.",
    url: `${SITE.url}/services/social-media/strategie`,
  },
};

export default function StrategiePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <StrategieContent />
      <Footer />
    </div>
  );
}
