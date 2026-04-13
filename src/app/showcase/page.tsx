import type { Metadata } from "next";
import ScrollMorphHero from "@/components/ui/scroll-morph-hero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos Realisations — Explorez nos projets | ConvertiLab",
  description: "Decouvrez nos 150+ projets web livres. Sites vitrine, e-commerce, landing pages — explorez nos realisations en version cinematique.",
  alternates: { canonical: `${SITE.url}/showcase` },
};

export default function ShowcasePage() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <ScrollMorphHero />
    </main>
  );
}
