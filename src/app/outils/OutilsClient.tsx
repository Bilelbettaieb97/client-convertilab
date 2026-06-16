"use client";

import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Search, Zap, Palette, TrendingUp, FileText,
  Code, BarChart3, GitCompare, ArrowRight, Sparkles, CheckCircle
} from "lucide-react";

const tools = [
  {
    label: "Audit SEO",
    href: "/seo-check",
    icon: Search,
    badge: "Populaire",
    badgeColor: "bg-green-100 text-green-700",
    desc: "Analysez 60+ points SEO de votre site en 60 secondes. Score détaillé, analyse IA (GEO) et plan d'action envoyé par email en PDF.",
    highlights: ["60+ points de contrôle", "Rapport PDF gratuit", "Analyse IA / GEO"],
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-100",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    cta: "Lancer l'audit SEO",
    ctaColor: "bg-green-500 hover:bg-green-600",
  },
  {
    label: "Audit Vitesse",
    href: "/speed-check",
    icon: Zap,
    badge: null,
    badgeColor: "",
    desc: "Testez la performance de votre site web. Core Web Vitals, temps de chargement et recommandations concrètes pour aller plus vite.",
    highlights: ["Core Web Vitals", "Temps de chargement", "Rapport détaillé"],
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    cta: "Tester la vitesse",
    ctaColor: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    label: "Audit Design & UX",
    href: "/design-score",
    icon: Palette,
    badge: null,
    badgeColor: "",
    desc: "Évaluez l'expérience utilisateur et le design de votre site. Lisibilité, confiance, conversion — score sur 100 avec conseils.",
    highlights: ["Score UX / 100", "Analyse confiance", "Conseils conversion"],
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    cta: "Analyser le design",
    ctaColor: "bg-pink-500 hover:bg-pink-600",
  },
  {
    label: "Estimateur Ads",
    href: "/estimateur-ads",
    icon: TrendingUp,
    badge: null,
    badgeColor: "",
    desc: "Estimez le ROI de vos campagnes publicitaires Google Ads et Meta Ads. Projections de leads, ROAS et budget optimal par secteur.",
    highlights: ["Projection ROAS", "Leads estimés/mois", "Budget recommandé"],
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    cta: "Estimer mon ROI",
    ctaColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    label: "Mentions Légales",
    href: "/generateur-mentions-legales",
    icon: FileText,
    badge: null,
    badgeColor: "",
    desc: "Générez vos mentions légales, CGU et CGV conformes RGPD en quelques clics. Téléchargement PDF immédiat, mis à jour avec la loi.",
    highlights: ["Conforme RGPD", "CGU + CGV incluses", "PDF téléchargeable"],
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    cta: "Générer mes mentions",
    ctaColor: "bg-violet-500 hover:bg-violet-600",
  },
  {
    label: "Robots & Sitemap",
    href: "/generateur-robots-sitemap",
    icon: Code,
    badge: null,
    badgeColor: "",
    desc: "Créez votre fichier robots.txt et sitemap.xml optimisés pour Google. Paramétrage avancé, export immédiat.",
    highlights: ["robots.txt optimisé", "sitemap.xml complet", "Export direct"],
    color: "from-slate-500 to-gray-600",
    bg: "bg-slate-50",
    border: "border-slate-100",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    cta: "Générer mes fichiers",
    ctaColor: "bg-slate-600 hover:bg-slate-700",
  },
  {
    label: "Rapport Sectoriel",
    href: "/rapport-sectoriel",
    icon: BarChart3,
    badge: null,
    badgeColor: "",
    desc: "Analysez votre marché et vos concurrents par secteur d'activité. Tendances, benchmarks et opportunités de croissance.",
    highlights: ["Analyse de marché", "Benchmarks secteur", "Opportunités identifiées"],
    color: "from-teal-500 to-cyan-500",
    bg: "bg-teal-50",
    border: "border-teal-100",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    cta: "Analyser mon secteur",
    ctaColor: "bg-teal-500 hover:bg-teal-600",
  },
  {
    label: "Comparateur Sites",
    href: "/comparateur-sites",
    icon: GitCompare,
    badge: null,
    badgeColor: "",
    desc: "Comparez votre site avec celui de vos concurrents. Vitesse, SEO, design, mobile — qui gagne point par point ?",
    highlights: ["Comparaison point par point", "SEO vs concurrents", "Score mobile"],
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    cta: "Comparer les sites",
    ctaColor: "bg-orange-500 hover:bg-orange-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function OutilsClient() {
  return (
    <>
      <Navigation />
      <main className="pt-16 bg-white min-h-screen">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-green-50/30 py-20 px-4">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green-100/40 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-4xl text-center relative">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              8 outils gratuits — sans inscription
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5"
            >
              Nos outils{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                100% gratuits
              </span>
              <br className="hidden sm:block" /> pour booster votre site
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-lg text-gray-500 max-w-2xl mx-auto"
            >
              Analysez, comparez et optimisez votre présence en ligne. Chaque outil génère un rapport PDF complet envoyé par email.
            </motion.p>
          </div>
        </section>

        {/* Tools grid */}
        <section className="container mx-auto max-w-6xl px-4 py-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {tools.map((tool) => (
              <motion.div key={tool.href} variants={item}>
                <Link
                  href={tool.href}
                  className={`group flex flex-col h-full rounded-2xl border ${tool.border} ${tool.bg} p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  {/* Icon + badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${tool.iconBg} group-hover:bg-gradient-to-br group-hover:${tool.color} transition-all duration-300`}>
                      <tool.icon className={`w-5 h-5 ${tool.iconColor} group-hover:text-white transition-colors duration-300`} />
                    </div>
                    {tool.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tool.badgeColor}`}>
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  {/* Title + desc */}
                  <h2 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-800">
                    {tool.label}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                    {tool.desc}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {tool.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-white text-sm font-semibold ${tool.ctaColor} transition-colors duration-200`}>
                    {tool.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Vous avez identifié des points à améliorer ?
              </h2>
              <p className="text-purple-100 mb-8 text-lg">
                Notre équipe analyse votre situation gratuitement et vous propose un plan d&apos;action concret.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 font-semibold px-8 py-3.5 rounded-xl hover:bg-purple-50 transition-colors duration-200"
                >
                  Parler à un expert <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/estimation-prix-site-web"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-colors duration-200 border border-white/20"
                >
                  Estimer mon projet
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
