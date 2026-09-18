"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users, BarChart3, Mail, Share2, ArrowRight, CheckCircle2,
  Calendar, Sparkles, Camera, MessageSquare, Star, Megaphone,
  Store, Hammer, Briefcase, ShieldCheck
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { Conteneur, Surtitre } from "@/components/pole/pole-ui";

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

// Repères factuels du hero : délais et périmètre réels, aucune statistique.
const stats = [
  { value: "24 h", label: "Devis envoyé après un échange de 30 minutes" },
  { value: "4 réseaux", label: "Instagram, Facebook, LinkedIn, TikTok" },
  { value: "1 rapport", label: "Chaque mois, lisible en une page" },
];

/* Déroulé d'un mois d'accompagnement : le « quand » distingue cette section
   de la liste des inclusions de la page community-management. */
const moisType = [
  {
    icon: Calendar,
    quand: "Début de mois",
    title: "Le calendrier éditorial, validé par vous",
    description:
      "Nous vous envoyons le planning des publications : sujets, formats, dates, réseau concerné. Vous corrigez, vous validez, rien ne part sans votre accord.",
  },
  {
    icon: Camera,
    quand: "Au fil du mois",
    title: "Les visuels et les textes prêts à publier",
    description:
      "Photos retouchées, carrousels, Stories et vidéos courtes, dans votre ton, avec vos couleurs et votre logo. Vous relisez, nous publions.",
  },
  {
    icon: MessageSquare,
    quand: "Les jours ouvrés",
    title: "Les réponses aux commentaires et aux messages",
    description:
      "Questions pratiques, horaires, tarifs, disponibilités : nous répondons à votre place et vous transférons ce qui demande votre décision.",
  },
  {
    icon: Star,
    quand: "À chaque avis reçu",
    title: "Les réponses aux avis Google",
    description:
      "Chaque avis reçoit une réponse signée de votre établissement, y compris les avis négatifs, avec un ton posé et factuel.",
  },
  {
    icon: Megaphone,
    quand: "Quand vous avez une actualité",
    title: "Vos nouveautés relayées",
    description:
      "Nouveau produit, promotion, fermeture exceptionnelle, événement : vous nous prévenez, nous l'intégrons au planning ou nous le publions en priorité.",
  },
  {
    icon: BarChart3,
    quand: "Fin de mois",
    title: "Le rapport mensuel",
    description:
      "Une page, pas trente : ce qui a été publié, ce qui a fait réagir, les messages reçus, les clics vers votre site, et ce que nous changeons le mois suivant.",
  },
];

/* Trois profils de clients et ce qui change concrètement pour chacun. */
const profils = [
  {
    icon: Store,
    title: "Commerce et restauration",
    intro:
      "Boutique, restaurant, salon de coiffure, institut : vos clients habitent à quelques rues et regardent Instagram et Facebook avant de pousser la porte.",
    changements: [
      "Photos de la vitrine, des plats ou des prestations prises sur place",
      "Horaires, nouveautés et offres du moment relayés sans délai",
      "Réponses aux avis Google comprises dans le forfait",
    ],
  },
  {
    icon: Hammer,
    title: "Artisan et entreprise du bâtiment",
    intro:
      "Plombier, électricien, paysagiste, menuisier : vos chantiers sont votre meilleure preuve, encore faut-il les montrer.",
    changements: [
      "Avant et après de vos réalisations, avec l'accord du client",
      "Zone d'intervention rappelée dans chaque publication",
      "Facebook et fiche Google en priorité, là où vos clients cherchent",
    ],
  },
  {
    icon: Briefcase,
    title: "Indépendant, coach ou cabinet",
    intro:
      "Consultant, thérapeute, avocat, expert-comptable : on vous choisit pour votre expertise et pour votre façon de l'expliquer.",
    changements: [
      "Publications LinkedIn qui vulgarisent votre métier",
      "Votre visage et votre voix au premier plan, pas un logo",
      "Un lien de prise de rendez-vous dans chaque profil",
    ],
  },
];

/* Pages liées : toutes ces routes existent dans src/app. */
const pagesLiees = [
  {
    href: "/services/social-media/community-management",
    title: "Community management",
    description: "Le détail de la gestion mensuelle : ce qui est inclus, les plateformes gérées et le processus.",
  },
  {
    href: "/services/social-media/strategie",
    title: "Stratégie social media",
    description: "Audit, ligne éditoriale et calendrier sur trois mois, avant de publier quoi que ce soit.",
  },
  {
    href: "/services/sea/meta-ads",
    title: "Publicité Meta Ads",
    description: "Quand les publications ne suffisent plus : campagnes sponsorisées sur Facebook et Instagram.",
  },
  {
    href: "/prix/community-management",
    title: "Tarifs du community management",
    description: "Nos formules, ce qu'elles comprennent et la façon dont le devis est établi.",
  },
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

      {/* Ce que nous faisons chaque mois */}
      <section id="chaque-mois" className="scroll-mt-24 py-20 bg-gray-50">
        <Conteneur>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Surtitre>Le déroulé d&apos;un mois</Surtitre>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ce que nous faisons chaque mois
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Un accompagnement social media n&apos;est pas une suite de publications lancées au hasard.
              Chaque mois suit le même déroulé, que vous validez avant toute mise en ligne. Le détail
              de la gestion au quotidien est décrit sur notre page{" "}
              <Link href="/services/social-media/community-management" className="font-semibold text-purple-700 underline underline-offset-4 hover:text-purple-900">
                community management
              </Link>
              .
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {moisType.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-pink-700">{item.quand}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Conteneur>
      </section>

      {/* Platforms */}
      <section className="py-20">
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

      {/* Pour qui */}
      <section id="pour-qui" className="scroll-mt-24 py-20 bg-gray-50">
        <Conteneur>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Surtitre>Trois situations courantes</Surtitre>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pour qui ce service est-il fait ?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous travaillons avec des petites structures, à Rueil-Malmaison, en Île-de-France et
              ailleurs en France. Le contenu change selon votre métier, la méthode reste la même,
              et le community management est chiffré{" "}
              <Link href="/prix/community-management" className="font-semibold text-purple-700 underline underline-offset-4 hover:text-purple-900">
                sur devis
              </Link>
              , avec un nombre de publications fixé à l&apos;avance.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {profils.map((profil, i) => {
              const Icon = profil.icon;
              return (
                <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{profil.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-5">{profil.intro}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-pink-700 mb-3">Ce qui change pour vous</p>
                    <ul className="space-y-2.5">
                      {profil.changements.map((c, ci) => (
                        <li key={ci} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Conteneur>
      </section>

      {/* Ce que nous ne promettons pas */}
      <section id="engagements" className="scroll-mt-24 py-20">
        <Conteneur>
          <div className="max-w-3xl mx-auto rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-purple-50 p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-purple-700 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <Surtitre className="mb-0">Pour être clairs dès le départ</Surtitre>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ce que nous ne promettons pas
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">Aucun nombre d&apos;abonnés garanti.</strong>{" "}Les abonnés
                s&apos;achètent, et ceux-là ne deviennent jamais clients : nous ne le faisons pas et nous
                vous déconseillons de le faire. Une communauté utile grandit au rythme de votre activité
                et de la régularité de vos publications, pas à celui d&apos;un compteur.
              </p>
              <p>
                <strong className="text-gray-900">Aucune viralité promise.</strong>{" "}Une publication qui fait
                le tour de la France arrive parfois, mais elle ne se commande pas et elle ne remplit pas un
                carnet de commandes. Nous cherchons des publications qui parlent à vos clients d&apos;à côté,
                pas à des inconnus à l&apos;autre bout du pays. Si vous avez besoin d&apos;une portée rapide
                et mesurable, la bonne réponse est souvent une campagne{" "}
                <Link href="/services/sea/meta-ads" className="font-semibold text-purple-700 underline underline-offset-4 hover:text-purple-900">
                  Meta Ads
                </Link>{" "}
                en complément, avec un budget décidé ensemble.
              </p>
              <p>
                <strong className="text-gray-900">Ce que nous promettons en revanche :</strong>{" "}une présence
                régulière, une réponse à chaque message et à chaque avis, un rapport chaque mois, et des
                indicateurs qui comptent pour votre chiffre d&apos;affaires, comme les messages reçus, les clics
                vers votre site et les demandes de devis. Et si, après un premier échange, les réseaux sociaux
                ne nous semblent pas la priorité pour votre activité, nous vous le disons.
              </p>
            </div>
          </div>
        </Conteneur>
      </section>

      {/* Pages liées */}
      <section id="aller-plus-loin" className="scroll-mt-24 py-20 bg-gray-50">
        <Conteneur>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Surtitre>Pour aller plus loin</Surtitre>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Les pages liées à ce service
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pagesLiees.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group block bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-pink-100"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">{page.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{page.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </Conteneur>
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
