"use client";

import { Search, Zap, Palette, TrendingUp, FileText, Bot, BarChart3, GitCompare } from "lucide-react";
import RadialOrbitalTimeline, { type OrbitalItem } from "@/components/ui/radial-orbital-timeline";

const tools: OrbitalItem[] = [
  {
    id: 1,
    title: "Audit SEO",
    date: "2 min",
    content: "60+ points de controle analyses automatiquement. Score sur 100, plan d'action priorise et rapport PDF envoye par email.",
    category: "SEO",
    icon: Search,
    href: "/seo-check",
    relatedIds: [2, 8],
    status: "popular",
    energy: 100,
  },
  {
    id: 2,
    title: "Audit Vitesse",
    date: "1 min",
    content: "Testez la rapidite de votre site. Core Web Vitals, compression, images, scripts bloquants — tout est analyse.",
    category: "Performance",
    icon: Zap,
    href: "/speed-check",
    relatedIds: [1, 3],
    status: "live",
    energy: 95,
  },
  {
    id: 3,
    title: "Audit Design",
    date: "1 min",
    content: "Evaluez l'experience utilisateur de votre site. 6 categories UX analysees avec plan d'action detaille.",
    category: "Design",
    icon: Palette,
    href: "/design-score",
    relatedIds: [2, 4],
    status: "live",
    energy: 90,
  },
  {
    id: 4,
    title: "Estimateur Ads",
    date: "3 min",
    content: "Combien de clients et de CA pouvez-vous generer avec la publicite en ligne ? Projection ROI sur 3/6/12 mois.",
    category: "Publicite",
    icon: TrendingUp,
    href: "/estimateur-ads",
    relatedIds: [3, 5],
    status: "new",
    energy: 85,
  },
  {
    id: 5,
    title: "Mentions Legales",
    date: "2 min",
    content: "Generez vos mentions legales conformes LCEN + RGPD en 2 minutes. Document PDF personnalise.",
    category: "Legal",
    icon: FileText,
    href: "/generateur-mentions-legales",
    relatedIds: [4, 6],
    status: "live",
    energy: 80,
  },
  {
    id: 6,
    title: "Robots & Sitemap",
    date: "1 min",
    content: "Generez automatiquement vos fichiers robots.txt et sitemap.xml optimises avec regles pour les bots IA.",
    category: "SEO Technique",
    icon: Bot,
    href: "/generateur-robots-sitemap",
    relatedIds: [5, 7],
    status: "live",
    energy: 75,
  },
  {
    id: 7,
    title: "Rapport Sectoriel",
    date: "2 min",
    content: "Decouvrez les opportunites digitales de votre secteur. 50+ secteurs analyses avec etudes de cas.",
    category: "Strategie",
    icon: BarChart3,
    href: "/rapport-sectoriel",
    relatedIds: [6, 8],
    status: "popular",
    energy: 90,
  },
  {
    id: 8,
    title: "Comparateur Sites",
    date: "2 min",
    content: "Votre site vs la concurrence. Comparaison cote a cote sur 8 categories avec recommandations.",
    category: "Benchmark",
    icon: GitCompare,
    href: "/comparateur-sites",
    relatedIds: [7, 1],
    status: "new",
    energy: 95,
  },
];

export default function ToolsOrbital() {
  return (
    <section className="relative bg-gray-900 py-16 sm:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/20" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px]" />

      {/* Heading */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold uppercase tracking-wider mb-6">
          &#128142; Lead magnets
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Pas pret a acheter ?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
            Testez gratuitement
          </span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          8 outils professionnels, 100% gratuits, sans inscription. Cliquez sur un outil pour le decouvrir.
        </p>
      </div>

      {/* Orbital component */}
      <div className="relative z-10">
        <RadialOrbitalTimeline timelineData={tools} centerLabel="Outils" />
      </div>
    </section>
  );
}
