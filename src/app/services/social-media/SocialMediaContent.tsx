"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users, BarChart3, Mail, Share2, ArrowRight, CheckCircle2,
  Calendar, MessageSquare, TrendingUp, Heart, Sparkles, Target
} from "lucide-react";
import { SITE } from "@/lib/constants";

const services = [
  {
    icon: Users,
    title: "Community Management",
    description: "Gestion quotidienne de vos réseaux sociaux avec du contenu engageant qui fidélise votre communauté.",
    features: ["Calendrier éditorial mensuel", "Création de contenu visuel", "Modération et réponses", "Reporting mensuel détaillé"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: BarChart3,
    title: "Stratégie Social Media",
    description: "Plan stratégique complet pour développer votre présence et votre influence sur les réseaux.",
    features: ["Audit de vos réseaux actuels", "Benchmark concurrence", "Ligne éditoriale sur-mesure", "KPIs & objectifs mesurables"],
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Campagnes email et automation pour fidéliser vos clients et maximiser vos conversions.",
    features: ["Séquences automatisées", "Newsletters engageantes", "Segmentation avancée", "A/B testing continu"],
    gradient: "from-blue-500 to-cyan-600",
  },
];

const platforms = [
  { name: "Instagram", description: "Contenu visuel, Reels, Stories" },
  { name: "Facebook", description: "Publications, Groupes, Events" },
  { name: "LinkedIn", description: "Personal branding, B2B" },
  { name: "TikTok", description: "Vidéos courtes, tendances" },
];

const stats = [
  { value: "+200%", label: "Engagement moyen" },
  { value: "50+", label: "Clients accompagnés" },
  { value: "4.9/5", label: "Satisfaction client" },
];

export default function SocialMediaContent() {
  const router = useRouter();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-6">
              <Share2 className="w-4 h-4" />
              Social Media & Email Marketing
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Développez votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                communauté
              </span>{" "}
              en ligne
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stratégie social media, community management et email marketing pour engager
              votre audience et transformer vos abonnés en clients fidèles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
                onClick={() => router.push("/contact")}
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg"
                onClick={() => window.open(SITE.calendly, "_blank")}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Réserver un appel
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos services Social Media
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un accompagnement complet pour maximiser votre impact sur les réseaux sociaux
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Card key={i} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Plateformes couvertes
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-1">{platform.name}</h3>
                <p className="text-sm text-gray-500">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
            <div className="relative z-10">
              <Sparkles className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Prêt à booster vos réseaux sociaux ?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                Obtenez un audit gratuit de vos réseaux sociaux et un plan d&apos;action personnalisé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-xl"
                  onClick={() => router.push("/contact")}
                >
                  Demander mon audit gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="/portfolio">Voir nos résultats</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
