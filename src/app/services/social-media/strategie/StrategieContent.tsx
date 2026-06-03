"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3, ArrowRight, CheckCircle2, Calendar, Target,
  TrendingUp, Search, FileText, Lightbulb, Sparkles, Users, Eye
} from "lucide-react";
import { SITE } from "@/lib/constants";

const deliverables = [
  {
    icon: Search,
    title: "Audit complet",
    description: "Analyse de votre présence actuelle, performances, audience et positionnement vs concurrents.",
  },
  {
    icon: Target,
    title: "Définition des objectifs",
    description: "KPIs clairs et mesurables alignés sur vos objectifs business (notoriété, leads, ventes).",
  },
  {
    icon: Users,
    title: "Personas & ciblage",
    description: "Identification de vos audiences cibles, leurs comportements et les plateformes à privilégier.",
  },
  {
    icon: FileText,
    title: "Ligne éditoriale",
    description: "Ton de voix, thématiques, formats de contenu et fréquence de publication par plateforme.",
  },
  {
    icon: Calendar,
    title: "Calendrier éditorial",
    description: "Planning de publication sur 3 mois avec les temps forts, marronniers et campagnes.",
  },
  {
    icon: BarChart3,
    title: "Dashboard & KPIs",
    description: "Mise en place du suivi des performances avec tableaux de bord et alertes automatiques.",
  },
];

const benefits = [
  { icon: Eye, text: "Visibilité accrue sur les réseaux" },
  { icon: TrendingUp, text: "Croissance organique mesurable" },
  { icon: Target, text: "Ciblage précis de votre audience" },
  { icon: Lightbulb, text: "Contenu différenciant et impactant" },
];

const process = [
  { step: "01", title: "Discovery", description: "Entretien approfondi pour comprendre votre marque, vos objectifs et votre marché.", duration: "1 semaine" },
  { step: "02", title: "Audit & Benchmark", description: "Analyse de vos réseaux, de vos concurrents et des meilleures pratiques du secteur.", duration: "1 semaine" },
  { step: "03", title: "Stratégie", description: "Élaboration de la stratégie complète : personas, ligne éditoriale, calendrier, KPIs.", duration: "1-2 semaines" },
  { step: "04", title: "Présentation & Lancement", description: "Présentation de la stratégie, ajustements et accompagnement au démarrage.", duration: "1 semaine" },
];

export default function StrategieContent() {
  const router = useRouter();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-6">
              <BarChart3 className="w-4 h-4" />
              Stratégie Social Media
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Une stratégie{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                sur-mesure
              </span>{" "}
              pour vos réseaux
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Audit, benchmark, ligne éditoriale, calendrier de publication et KPIs.
              Une feuille de route complète pour maximiser votre impact sur les réseaux sociaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
                onClick={() => router.push("/contact")}
              >
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" onClick={() => window.open(SITE.calendly, "_blank")}>
                <Calendar className="mr-2 w-5 h-5" />
                Réserver un appel stratégique
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="flex items-center gap-3 p-4 bg-violet-50 rounded-xl">
                  <Icon className="w-5 h-5 text-violet-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{b.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POURQUOI STRATÉGIE SOCIAL MEDIA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Pourquoi votre entreprise a besoin d&apos;une stratégie social media structurée</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Publier sur les réseaux sociaux sans stratégie, c&apos;est comme envoyer des lettres sans adresse : de l&apos;énergie dépensée, peu de résultats. <strong>80% des entreprises présentes sur les réseaux sociaux publient sans ligne éditoriale cohérente</strong>, sans objectifs mesurables et sans comprendre pourquoi certains contenus performent et d&apos;autres pas.</p>
                <p>Une stratégie social media professionnelle définit <strong>pour qui vous publiez</strong> (persona client), <strong>quoi publier</strong> (mix de contenus : éducatif, inspirationnel, commercial, communautaire), <strong>où publier</strong> (LinkedIn, Instagram, Facebook, TikTok — selon votre cible), et <strong>comment mesurer</strong> si votre présence génère réellement des leads et du chiffre d&apos;affaires.</p>
                <p>Nos clients qui adoptent une stratégie structurée réduisent leur temps de publication de <strong>40%</strong> tout en multipliant leur engagement par <strong>3 en moyenne</strong>. La clé : moins mais mieux, avec un message cohérent et des appels à l&apos;action qui guident vers la conversion.</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quelle plateforme choisir pour votre secteur ?</h3>
              <div className="space-y-3">
                {[
                  { platform: "Instagram", best: "Mode, beauté, restauration, voyage, artisanat", format: "Reels, Stories, Posts visuels" },
                  { platform: "LinkedIn", best: "B2B, consulting, RH, formation, SaaS", format: "Articles, Posts texte, Vidéos courtes" },
                  { platform: "Facebook", best: "Commerce local, services à la personne, événements", format: "Posts, Stories, Groupes, Événements" },
                  { platform: "TikTok", best: "Cible 18-35 ans, produits de consommation, humour", format: "Vidéos courtes 15-60s, trends" },
                  { platform: "YouTube", best: "Tutoriels, formations, B2B technique, expertise", format: "Vidéos longues, Shorts" },
                ].map((p, i) => (
                  <div key={i} className="p-3 bg-violet-50 rounded-lg border border-violet-100">
                    <div className="font-bold text-violet-800 text-sm">{p.platform}</div>
                    <div className="text-xs text-gray-600 mt-0.5">Idéal : {p.best}</div>
                    <div className="text-xs text-violet-600 mt-0.5">Formats : {p.format}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livrables */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ce que vous recevez</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une stratégie actionnable avec des livrables concrets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deliverables.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Notre processus</h2>
            <p className="text-lg text-gray-600">De l&apos;audit au lancement en 4 semaines</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-3">
                  {p.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{p.description}</p>
                <span className="inline-block text-xs font-medium text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
                  {p.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <Sparkles className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Prêt à structurer votre présence sociale ?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                Obtenez un pré-audit gratuit de vos réseaux et une première recommandation stratégique
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-xl"
                onClick={() => router.push("/contact")}
              >
                Demander mon audit gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
