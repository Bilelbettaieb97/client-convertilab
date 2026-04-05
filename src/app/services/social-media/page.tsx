import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SocialMediaContent from "./SocialMediaContent";

export const metadata: Metadata = {
  title: "Social Media & Community Management",
  description: "Développez votre communauté et engagez votre audience sur les réseaux sociaux. Community management, stratégie social media, email marketing.",
  alternates: { canonical: `${SITE.url}/services/social-media` },
  openGraph: {
    title: "Social Media & Community Management | ConvertiLab",
    description: "Développez votre communauté et engagez votre audience sur les réseaux sociaux.",
    url: `${SITE.url}/services/social-media`,
  },
};

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SocialMediaContent />
      <Footer />
    </div>
  );
}
