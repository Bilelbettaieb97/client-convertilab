"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Globe,
  ShoppingBag,
  Target,
  RefreshCw,
  Search,
  Zap as ZapIcon,
  Palette,
  TrendingUp,
  FileText,
  Code,
  BarChart3,
  GitCompare,
} from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { HeroParallax } from "@/components/ui/hero-parallax";
import RadialOrbitalTimeline, { OrbitalItem } from "@/components/ui/radial-orbital-timeline";
import OrbitingSkills from "@/components/ui/orbiting-skills";
import { ClientsSection, type Stat, type Testimonial } from "@/components/ui/testimonial-card";
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";
import { SocialConnect } from "@/components/ui/connect-with-us";

const clientStats: Stat[] = [
  { value: "150+", label: "Clients heureux" },
  { value: "+280%", label: "CA moyen" },
  { value: "4.9/5", label: "Note moyenne" },
];

const clientTestimonials: Testimonial[] = [
  {
    name: "Marie Lefèvre",
    title: "Fondatrice — Papapret",
    quote: "ConvertiLab a refait notre site en 7 jours. Résultat : +340% de leads en 3 mois. L'équipe est ultra réactive et professionnelle, je recommande à 100%.",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    rating: 5.0,
  },
  {
    name: "Thomas Bernard",
    title: "CEO — Funestore",
    quote: "On a doublé nos ventes en ligne grâce à leur refonte. Le design est magnifique, le site ultra-rapide et le SEO impeccable. Le meilleur investissement de l'année.",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    rating: 5.0,
  },
  {
    name: "Sophie Martin",
    title: "Directrice — Arancini Paris",
    quote: "Notre restaurant a vu ses réservations exploser depuis le nouveau site. ConvertiLab a parfaitement compris notre identité et l'a sublimée. Bravo !",
    avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
    rating: 4.9,
  },
  {
    name: "Julien Moreau",
    title: "Fondateur — Vinoboat",
    quote: "Service au top, design haut de gamme, livraison express. Et surtout, des résultats concrets : +150% de chiffre d'affaires en 6 mois. Que demander de plus ?",
    avatarSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
    rating: 5.0,
  },
];

const tools: OrbitalItem[] = [
  {
    id: 1,
    title: "Audit SEO",
    date: "60 sec",
    content: "Analysez votre site et obtenez un score SEO complet en 60 secondes. Mots-clés, balises, performances.",
    category: "SEO",
    icon: Search,
    href: "/seo-check",
    relatedIds: [2, 6],
    status: "popular",
    energy: 95,
  },
  {
    id: 2,
    title: "Audit Vitesse",
    date: "Instantané",
    content: "Testez la vitesse de chargement de votre site. Core Web Vitals, mobile, desktop, optimisations.",
    category: "Performance",
    icon: ZapIcon,
    href: "/speed-check",
    relatedIds: [1, 3],
    status: "live",
    energy: 85,
  },
  {
    id: 3,
    title: "Score Design",
    date: "2 min",
    content: "Évaluez le design et l'expérience utilisateur de votre site. UX, accessibilité, esthétique.",
    category: "Design",
    icon: Palette,
    href: "/design-score",
    relatedIds: [2, 8],
    status: "live",
    energy: 75,
  },
  {
    id: 4,
    title: "Estimateur Ads",
    date: "Calcul live",
    content: "Estimez le ROI de vos campagnes Google Ads et Meta Ads. Budget, CPC, conversions, profit.",
    category: "Marketing",
    icon: TrendingUp,
    href: "/estimateur-ads",
    relatedIds: [7],
    status: "popular",
    energy: 90,
  },
  {
    id: 5,
    title: "Mentions Légales",
    date: "1 min",
    content: "Générez vos mentions légales conformes RGPD en 1 minute. Gratuit, prêt à copier-coller.",
    category: "Légal",
    icon: FileText,
    href: "/generateur-mentions-legales",
    relatedIds: [6],
    status: "live",
    energy: 65,
  },
  {
    id: 6,
    title: "Robots & Sitemap",
    date: "Auto",
    content: "Générez automatiquement votre robots.txt et sitemap.xml. Optimisez votre indexation Google.",
    category: "SEO",
    icon: Code,
    href: "/generateur-robots-sitemap",
    relatedIds: [1, 5],
    status: "live",
    energy: 70,
  },
  {
    id: 7,
    title: "Rapport Sectoriel",
    date: "Live data",
    content: "Analysez votre secteur d'activité. Concurrence, tendances, opportunités, benchmarks.",
    category: "Stratégie",
    icon: BarChart3,
    href: "/rapport-sectoriel",
    relatedIds: [4, 8],
    status: "new",
    energy: 80,
  },
  {
    id: 8,
    title: "Comparateur Sites",
    date: "Side by side",
    content: "Comparez votre site web avec ceux de vos concurrents. Score, vitesse, SEO, design.",
    category: "Analyse",
    icon: GitCompare,
    href: "/comparateur-sites",
    relatedIds: [3, 7],
    status: "new",
    energy: 88,
  },
];

const portfolioProducts = [
  { title: "Papapret", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-papapret-hero.webp" },
  { title: "Arancini", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-arancini-hero.webp" },
  { title: "Funestore", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-funestore-hero.webp" },
  { title: "ACB", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-acb-hero.webp" },
  { title: "Eleva", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-eleva-hero.webp" },
  { title: "Vinoboat", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-vinoboat-hero.webp" },
  { title: "Ecrin de Séoul", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-ecrindeseoul-hero.webp" },
  { title: "Art des Roses", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-artdesroses-hero.webp" },
  { title: "Couleur Sable", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-couleursable-hero.webp" },
  { title: "Temple Zen", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-templezen-hero.webp" },
  { title: "Spectacle", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-spectacle-hero.webp" },
  { title: "Institut Nomad", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-institut-nomad-hero.webp" },
  { title: "Trievent", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-trievent-hero.webp" },
  { title: "Segermes", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-segermes-hero.webp" },
  { title: "AH Studio", link: "/portfolio", thumbnail: "/images/portfolio/portfolio-ahstudio-hero.webp" },
];

type CornerPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const services: {
  pos: CornerPosition;
  title: string;
  desc: string;
  icon: typeof Globe;
  gradient: string;
}[] = [
  {
    pos: "top-left",
    title: "Site vitrine",
    desc: "Présentez votre activité avec un design premium qui convertit.",
    icon: Globe,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    pos: "top-right",
    title: "E-commerce",
    desc: "Boutique en ligne sur-mesure, paiement sécurisé, panier optimisé.",
    icon: ShoppingBag,
    gradient: "from-pink-500 to-orange-500",
  },
  {
    pos: "bottom-left",
    title: "Landing page",
    desc: "Page de capture haute performance pour vos campagnes Ads.",
    icon: Target,
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    pos: "bottom-right",
    title: "Refonte de site",
    desc: "On reprend votre site existant et on multiplie sa conversion.",
    icon: RefreshCw,
    gradient: "from-blue-500 to-purple-500",
  },
];

const cornerClasses: Record<CornerPosition, string> = {
  "top-left": "top-[18%] left-[8%] md:left-[18%] lg:left-[22%] items-start text-left",
  "top-right": "top-[18%] right-[8%] md:right-[18%] lg:right-[22%] items-end text-right",
  "bottom-left": "bottom-[18%] left-[8%] md:left-[18%] lg:left-[22%] items-start text-left",
  "bottom-right": "bottom-[18%] right-[8%] md:right-[18%] lg:right-[22%] items-end text-right",
};

const cornerCoords: Record<CornerPosition, { x: number; y: number }> = {
  "top-left": { x: 28, y: 26 },
  "top-right": { x: 72, y: 26 },
  "bottom-left": { x: 28, y: 74 },
  "bottom-right": { x: 72, y: 74 },
};

function ServiceCorner({
  service,
  range,
  scrollYProgress,
  onHover,
}: {
  service: (typeof services)[number];
  range: [number, number];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  onHover: (pos: CornerPosition | null) => void;
}) {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  const y = useTransform(scrollYProgress, range, [30, 0]);
  const Icon = service.icon;
  const isRight = service.pos.includes("right");

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute z-20 max-w-[260px] flex flex-col gap-2 ${cornerClasses[service.pos]}`}
      onMouseEnter={() => onHover(service.pos)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="group cursor-pointer relative">
        {/* Purple glow background on hover */}
        <div className="absolute -inset-8 bg-purple-500/0 group-hover:bg-purple-500/30 rounded-full blur-3xl transition-all duration-500 -z-10" />
        <div className="absolute -inset-4 bg-pink-500/0 group-hover:bg-pink-500/20 rounded-full blur-2xl transition-all duration-500 -z-10" />
        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-purple-400/60 group-hover:bg-purple-500/10 transition-all duration-300">
          <div className={`w-4 h-4 rounded-md bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
            <Icon className="w-2.5 h-2.5 text-white" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">
            Service
          </span>
        </div>
        <h3
          className={`text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r ${service.gradient} group-hover:scale-[1.04] transition-transform duration-300 ${isRight ? "origin-right" : "origin-left"}`}
        >
          {service.title}
        </h3>
        <p className="text-xs md:text-sm text-white/50 group-hover:text-white/90 transition-colors leading-relaxed mt-1 max-w-[240px]">
          {service.desc}
        </p>
        <div
          className={`mt-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity ${isRight ? "justify-end" : ""}`}
        >
          En savoir plus <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </motion.div>
  );
}

function RobotHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [hoveredCorner, setHoveredCorner] = useState<CornerPosition | null>(null);

  const centerOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 0.3, 0]);
  const centerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const centerY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
  const centerPointerEvents = useTransform(scrollYProgress, (v) => (v > 0.08 ? "none" : "auto"));

  return (
    <section ref={ref} className="relative h-[350vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#a855f7" />

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

        {/* Robot Spline plein écran (suit nativement le curseur) */}
        <div className="absolute inset-0 z-10">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Contenu central — fade out au scroll */}
        <motion.div
          style={{
            opacity: centerOpacity,
            scale: centerScale,
            y: centerY,
            pointerEvents: centerPointerEvents,
          }}
          className="relative z-20 text-center max-w-3xl mx-auto px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-md border border-purple-500/30">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
              Agence n°1 en Île-de-France
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6">
            On crée des sites
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              qui rapportent
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-8">
            Design premium, développement haute performance, résultats mesurables.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/70 hover:scale-105 transition-all flex items-center gap-2">
              Démarrer un projet <ArrowRight className="w-4 h-4" />
            </button>
            <button className="text-white/80 px-6 py-4 font-semibold hover:text-white flex items-center gap-2">
              <Play className="w-4 h-4" /> Showreel
            </button>
          </div>
          <div className="mt-12 inline-flex items-center gap-2 text-xs text-white/40 animate-bounce">
            <span>↓ Scrollez pour voir nos services</span>
          </div>
        </motion.div>

        {/* 4 services en coins — reveal séquentiel au scroll */}
        <ServiceCorner service={services[0]} range={[0.12, 0.22]} scrollYProgress={scrollYProgress} onHover={setHoveredCorner} />
        <ServiceCorner service={services[1]} range={[0.24, 0.34]} scrollYProgress={scrollYProgress} onHover={setHoveredCorner} />
        <ServiceCorner service={services[2]} range={[0.36, 0.46]} scrollYProgress={scrollYProgress} onHover={setHoveredCorner} />
        <ServiceCorner service={services[3]} range={[0.48, 0.58]} scrollYProgress={scrollYProgress} onHover={setHoveredCorner} />
      </div>
    </section>
  );
}

function SectionDivider() {
  return (
    <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
    </div>
  );
}

export default function HeroLabClient() {
  return (
    <>
      {/* 1. HERO — Robot Spline + 4 services */}
      <RobotHero />

      {/* 2. PORTFOLIO — Parallaxe 3D des projets */}
      <HeroParallax products={portfolioProducts} />

      <SectionDivider />

      {/* 3. OUTILS GRATUITS — Donne de la valeur en premier (orbital radial) */}
      <section className="relative bg-black py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(168,85,247,0.15),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-500/10 border border-purple-500/30">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                  Notre boîte à outils, 100% gratuit
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                8 outils pour booster
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                  votre business en ligne
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
                Audits, générateurs, estimateurs. Tout ce dont vous avez besoin pour analyser et améliorer votre site web, sans inscription. Cliquez sur un outil dans l&apos;orbite pour l&apos;explorer.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">8</div>
                  <div className="text-xs text-white/60 mt-1">Outils gratuits</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">0€</div>
                  <div className="text-xs text-white/60 mt-1">Sans inscription</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-7 py-3.5 rounded-full font-bold shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/70 hover:scale-105 transition-all flex items-center gap-2">
                  Découvrir les outils <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Orbite à droite */}
            <div className="relative h-[640px] w-full">
              <RadialOrbitalTimeline timelineData={tools} centerLabel="OUTILS" />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. STACK TECHNIQUE — Crédibilité technique */}
      <section className="relative bg-black py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(236,72,153,0.12),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Orbite à gauche */}
            <div className="relative w-full flex items-center justify-center order-2 lg:order-1">
              <OrbitingSkills />
            </div>

            {/* Texte à droite */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-pink-500/10 border border-pink-500/30">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-pink-300">
                  Stack technique 2026
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                Les technologies
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                  les plus modernes
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
                On code vos sites avec les frameworks les plus rapides et performants du marché. <strong className="text-white">Next.js 16</strong>, React, TypeScript, Tailwind. Résultat : des sites ultra-rapides, sécurisés et qui se positionnent en première page Google.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8 max-w-md">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-bold text-white">Score Lighthouse 100</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-xs font-bold text-white">SSR + Edge</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                  <span className="text-xs font-bold text-white">SEO optimisé</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  <span className="text-xs font-bold text-white">100% TypeScript</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-7 py-3.5 rounded-full font-bold shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/70 hover:scale-105 transition-all flex items-center gap-2">
                  Voir notre stack <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 5. MOBILE RESPONSIVE — Démo cinématique */}
      <CinematicHero />

      <SectionDivider />

      {/* 6. TÉMOIGNAGES — Preuve sociale */}
      <ClientsSection
        tagLabel="150+ clients satisfaits"
        title="Ce que nos clients disent de nous"
        description="Plus de 150 marques nous font confiance pour leur présence digitale. Voici ce qu'ils en pensent."
        stats={clientStats}
        testimonials={clientTestimonials}
        primaryActionLabel="Démarrer mon projet"
        secondaryActionLabel="Voir tous les avis"
      />

      <SectionDivider />

      {/* 7. CONTACT — Réseaux + email + téléphone */}
      <SocialConnect />
    </>
  );
}
