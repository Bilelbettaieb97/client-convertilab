"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users, ArrowRight, CheckCircle2, Calendar, MessageSquare,
  Heart, Camera, BarChart3, Shield, Clock, Sparkles, Share2
} from "lucide-react";
import { SITE } from "@/lib/constants";

const inclusions = [
  {
    icon: Calendar,
    title: "Calendrier éditorial",
    description: "Planification mensuelle de vos publications avec validation avant mise en ligne.",
  },
  {
    icon: Camera,
    title: "Création de contenu",
    description: "Visuels, carrousels, Reels et Stories adaptés à chaque plateforme.",
  },
  {
    icon: MessageSquare,
    title: "Modération & réponses",
    description: "Gestion des commentaires, messages privés et avis en moins de 2h.",
  },
  {
    icon: BarChart3,
    title: "Reporting mensuel",
    description: "Rapport détaillé avec KPIs, insights et recommandations d'optimisation.",
  },
  {
    icon: Heart,
    title: "Engagement communauté",
    description: "Interactions proactives pour développer votre communauté et fidéliser.",
  },
  {
    icon: Share2,
    title: "Veille & tendances",
    description: "Surveillance de votre secteur et intégration des tendances pertinentes.",
  },
];

const platforms = [
  { name: "Instagram", posts: "12-16 posts/mois", description: "Feed, Stories, Reels" },
  { name: "Facebook", posts: "8-12 posts/mois", description: "Publications, Events" },
  { name: "LinkedIn", posts: "8-12 posts/mois", description: "Articles, Posts B2B" },
  { name: "TikTok", posts: "8-12 vidéos/mois", description: "Vidéos courtes" },
];

const process = [
  { step: "01", title: "Audit & Brief", description: "Analyse de votre présence actuelle, vos concurrents et définition de vos objectifs." },
  { step: "02", title: "Stratégie & Planning", description: "Création de votre ligne éditoriale, ton de voix et calendrier de publication." },
  { step: "03", title: "Création & Publication", description: "Production des contenus, validation et publication selon le planning défini." },
  { step: "04", title: "Analyse & Optimisation", description: "Suivi des performances, ajustements et rapport mensuel détaillé." },
];

export default function CommunityManagementContent() {
  const router = useRouter();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              Community Management
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Vos réseaux sociaux gérés par des{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                experts
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contenu engageant, modération réactive, communauté fidèle.
              Nous gérons vos réseaux sociaux comme si c&apos;était les nôtres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
                onClick={() => router.push("/contact")}
              >
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" onClick={() => window.open(SITE.calendly, "_blank")}>
                <Calendar className="mr-2 w-5 h-5" />
                Réserver un appel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI COMMUNITY MANAGEMENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Pourquoi déléguer votre community management ?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Les réseaux sociaux exigent une présence quotidienne et cohérente. Publier 3 à 5 fois par semaine, répondre aux commentaires, interagir avec les abonnés, analyser les statistiques, adapter la stratégie aux tendances : tout cela représente <strong>15 à 20 heures par semaine</strong> qu&apos;un entrepreneur ne peut pas se permettre de sacrifier.</p>
                <p>Un community manager professionnel connaît les algorithmes de chaque plateforme, sait quels formats performent (Reels, Stories, Carrousels), à quelle heure publier pour maximiser la portée, et comment transformer des abonnés passifs en clients actifs. Cette expertise s&apos;acquiert en années, pas en quelques jours de formation YouTube.</p>
                <p>Nos clients qui délèguent leur community management constatent en moyenne <strong>+340% d&apos;engagement</strong> et <strong>×2,5 de croissance d&apos;abonnés</strong> dans les 3 premiers mois. Parce que la régularité, la qualité de contenu et la réactivité font une différence radicale par rapport à une publication sporadique et improvisée.</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ce qu&apos;un bon community manager fait pour vous</h3>
              <div className="space-y-3">
                {[
                  { icon: "📅", title: "Calendrier éditorial", detail: "Planning mensuel avec thèmes, formats et messages alignés sur vos objectifs commerciaux." },
                  { icon: "✍️", title: "Création de contenu", detail: "Textes, visuels, vidéos courtes, Stories — tout est créé et optimisé pour chaque plateforme." },
                  { icon: "💬", title: "Modération & réponses", detail: "Réponse sous 2h aux commentaires et messages. Aucun client laissé sans réponse." },
                  { icon: "📊", title: "Reporting mensuel", detail: "Rapport détaillé : reach, engagement, croissance, publications les plus performantes." },
                  { icon: "🔥", title: "Gestion des tendances", detail: "Intégration des trends et sujets viraux pour maximiser votre visibilité organique." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 bg-pink-50 rounded-lg border border-pink-100">
                    <span className="text-xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{s.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{s.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ce qui est inclus</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un service complet pour que vous puissiez vous concentrer sur votre coeur de métier
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {inclusions.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
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

      {/* Plateformes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Plateformes gérées</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {platforms.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-sm font-medium text-purple-600 mb-1">{p.posts}</p>
                <p className="text-xs text-gray-500">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Notre processus</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-3">
                  {p.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Prêt à déléguer vos réseaux ?</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                Obtenez un audit gratuit de vos réseaux sociaux et une proposition personnalisée
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
