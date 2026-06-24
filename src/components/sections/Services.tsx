"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Globe, Palette, Search, ArrowRight, Rocket, FileText, Store, RefreshCw, Code,
  PenTool, Fingerprint, TrendingUp, ClipboardCheck, Sparkles, Target, Share2,
  Mail, BarChart3, Megaphone, Users, PenLine
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      id: "sites-web",
      icon: <Globe className="w-5 h-5" />,
      label: "Sites Web",
      title: "Création de Sites Web",
      description: "Des solutions web sur-mesure adaptées à vos objectifs business",
      gradient: "from-violet-500 to-purple-600",
      lightGradient: "from-violet-50 to-purple-50",
      accentColor: "text-violet-600",
      link: "/services/sites-web",
      services: [
        { name: "Landing Page", icon: <Rocket className="w-5 h-5" />, description: "Page unique optimisée pour la conversion de vos visiteurs en clients", features: ["Design responsive", "Optimisation conversion", "Formulaire contact", "Hébergement inclus"], link: "/services/sites-web/landing-page" },
        { name: "Site Vitrine", icon: <FileText className="w-5 h-5" />, description: "Présentation complète et professionnelle de votre activité", features: ["Multi-pages", "SEO optimisé", "Design personnalisé", "Support inclus"], link: "/services/sites-web/site-vitrine" },
        { name: "Site E-commerce", icon: <Store className="w-5 h-5" />, description: "Boutique en ligne performante pour vendre vos produits", features: ["Paiement sécurisé", "Gestion stocks", "Formation incluse", "Analytics"], link: "/services/sites-web/site-ecommerce" },
        { name: "Application Web", icon: <Code className="w-5 h-5" />, description: "Solutions sur-mesure pour des besoins spécifiques", features: ["Développement custom", "API intégrées", "Scalable", "Maintenance"], link: "/services/sites-web/application-web" },
        { name: "Refonte de Site", icon: <RefreshCw className="w-5 h-5" />, description: "Modernisez votre présence en ligne existante", features: ["Audit complet", "Nouveau design", "Migration données", "SEO préservé"], link: "/services/sites-web/refonte-site" }
      ]
    },
    {
      id: "seo",
      icon: <Search className="w-5 h-5" />,
      label: "SEO",
      title: "SEO & Référencement Naturel",
      description: "Dominez les résultats Google et attirez du trafic qualifié",
      gradient: "from-emerald-500 to-teal-600",
      lightGradient: "from-emerald-50 to-teal-50",
      accentColor: "text-emerald-600",
      link: "/services/seo",
      services: [
        { name: "Référencement SEO", icon: <TrendingUp className="w-5 h-5" />, description: "Stratégie SEO complète pour un positionnement durable sur Google", features: ["Optimisation on-page", "Stratégie contenu", "Netlinking", "Suivi positions"], link: "/services/seo/referencement" },
        { name: "Audit SEO", icon: <ClipboardCheck className="w-5 h-5" />, description: "Analyse complète de votre visibilité et plan d'action concret", features: ["Rapport détaillé", "Analyse concurrence", "Recommandations", "Plan d'action"], link: "/services/seo/audit" },
        { name: "Content Marketing", icon: <PenLine className="w-5 h-5" />, description: "Création de contenu optimisé SEO qui attire et convertit", features: ["Articles de blog", "Pages piliers", "Stratégie éditoriale", "Maillage interne"], link: "/services/seo/referencement" }
      ]
    },
    {
      id: "sea",
      icon: <Target className="w-5 h-5" />,
      label: "Publicité",
      title: "Publicité Digitale (SEA)",
      description: "Générez des leads et des ventes avec des campagnes publicitaires ciblées",
      gradient: "from-amber-500 to-orange-600",
      lightGradient: "from-amber-50 to-orange-50",
      accentColor: "text-amber-600",
      link: "/services/sea",
      services: [
        { name: "Google Ads", icon: <Search className="w-5 h-5" />, description: "Campagnes Search, Display et Shopping pour capter vos clients au bon moment", features: ["Campagnes Search", "Google Shopping", "Display", "Remarketing"], link: "/services/sea/google-ads" },
        { name: "Meta Ads", icon: <Megaphone className="w-5 h-5" />, description: "Publicités Facebook et Instagram pour toucher votre audience idéale", features: ["Facebook Ads", "Instagram Ads", "Ciblage précis", "Créatifs optimisés"], link: "/services/sea/meta-ads" }
      ]
    },
    {
      id: "social-media",
      icon: <Share2 className="w-5 h-5" />,
      label: "Social Media",
      title: "Social Media & Community Management",
      description: "Développez votre communauté et engagez votre audience sur les réseaux sociaux",
      gradient: "from-pink-500 to-rose-600",
      lightGradient: "from-pink-50 to-rose-50",
      accentColor: "text-pink-600",
      link: "/contact",
      services: [
        { name: "Community Management", icon: <Users className="w-5 h-5" />, description: "Gestion quotidienne de vos réseaux sociaux avec du contenu engageant", features: ["Calendrier éditorial", "Création de contenu", "Modération", "Reporting mensuel"], link: "/contact" },
        { name: "Stratégie Social Media", icon: <BarChart3 className="w-5 h-5" />, description: "Plan stratégique pour développer votre présence et votre influence", features: ["Audit réseaux", "Benchmark concurrence", "Ligne éditoriale", "KPIs & objectifs"], link: "/contact" },
        { name: "Email Marketing", icon: <Mail className="w-5 h-5" />, description: "Campagnes email et automation pour fidéliser et convertir", features: ["Séquences automatisées", "Newsletters", "Segmentation", "A/B testing"], link: "/contact" }
      ]
    },
    {
      id: "design",
      icon: <Palette className="w-5 h-5" />,
      label: "Branding",
      title: "Branding & Identité Visuelle",
      description: "Une image de marque forte et mémorable qui vous distingue",
      gradient: "from-indigo-500 to-blue-600",
      lightGradient: "from-indigo-50 to-blue-50",
      accentColor: "text-indigo-600",
      link: "/services/design",
      services: [
        { name: "Design UI/UX", icon: <PenTool className="w-5 h-5" />, description: "Interfaces intuitives qui optimisent l'expérience utilisateur", features: ["Wireframes", "Prototypes interactifs", "Tests utilisateurs", "Design system"], link: "/services/design/ui-ux" },
        { name: "Identité Visuelle", icon: <Fingerprint className="w-5 h-5" />, description: "Logo et charte graphique pour une image cohérente sur tous vos canaux", features: ["Création logo", "Charte graphique", "Déclinaisons supports", "Guide d'utilisation"], link: "/services/design/identite-visuelle" }
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <header className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-pink-100 dark:from-violet-900/30 dark:to-pink-900/30 mb-6">
            <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Nos expertises</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Solutions de{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Marketing Digital
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            De la stratégie à l&apos;exécution, un accompagnement 360° pour votre croissance digitale
          </p>
        </header>

        {/* Top 3 services les plus demandés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {[
            { icon: <Globe className="w-6 h-6" />, title: "Site Vitrine", desc: "à partir de 500€", link: "/services/sites-web/site-vitrine", gradient: "from-violet-500 to-purple-600", badge: "Le + demandé" },
            { icon: <Store className="w-6 h-6" />, title: "Site E-commerce", desc: "à partir de 800€", link: "/services/sites-web/site-ecommerce", gradient: "from-pink-500 to-rose-600", badge: null },
            { icon: <Search className="w-6 h-6" />, title: "SEO Google", desc: "Référencement naturel", link: "/services/seo/referencement", gradient: "from-emerald-500 to-teal-600", badge: "ROI le + élevé" },
          ].map((s, i) => (
            <Link key={i} href={s.link} className="group relative p-6 rounded-2xl border-2 border-border bg-card hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              {s.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg">
                  {s.badge}
                </span>
              )}
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-purple-600">
                Découvrir <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <Tabs defaultValue="sites-web" className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto flex overflow-x-auto sm:grid sm:grid-cols-5 mb-12 h-auto p-1.5 bg-muted/70 backdrop-blur-sm rounded-2xl scrollbar-hide gap-1 sm:gap-0">
            {[
              { value: "sites-web", icon: <Globe className="w-5 h-5" />, label: "Sites Web", gradient: "data-[state=active]:from-violet-500 data-[state=active]:to-purple-600" },
              { value: "seo", icon: <Search className="w-5 h-5" />, label: "SEO", gradient: "data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600" },
              { value: "sea", icon: <Target className="w-5 h-5" />, label: "Publicité", gradient: "data-[state=active]:from-amber-500 data-[state=active]:to-orange-600" },
              { value: "social-media", icon: <Share2 className="w-5 h-5" />, label: "Social Media", gradient: "data-[state=active]:from-pink-500 data-[state=active]:to-rose-600" },
              { value: "design", icon: <Palette className="w-5 h-5" />, label: "Branding", gradient: "data-[state=active]:from-indigo-500 data-[state=active]:to-blue-600" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                aria-label={tab.label}
                className={`flex items-center justify-center gap-2 py-3 px-4 sm:px-3 text-sm rounded-xl transition-all duration-300 min-h-[48px] min-w-[56px] flex-shrink-0 sm:flex-shrink sm:min-w-0 data-[state=active]:bg-gradient-to-r ${tab.gradient} data-[state=active]:text-white data-[state=active]:shadow-lg`}
              >
                {tab.icon}
                <span className="hidden sm:inline font-medium">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0 focus-visible:outline-none animate-fade-in">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{category.title}</h3>
                <p className="text-muted-foreground text-lg">{category.description}</p>
              </div>

              <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.lightGradient} dark:from-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{service.name}</h4>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 3).map((feature, fi) => (
                          <span key={fi} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{feature}</span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">+{service.features.length - 3}</span>
                        )}
                      </div>
                      <Link href={service.link} aria-label={`En savoir plus sur ${service.name}`} className={`inline-flex items-center gap-1 text-sm font-medium ${category.accentColor} hover:opacity-80 transition-opacity group/btn`}>
                        En savoir plus
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link href={category.link} className={`inline-flex items-center gap-2 ${category.accentColor} hover:opacity-80 font-medium transition-opacity`}>
                  En savoir plus sur {category.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-20 text-center">
          <div className="inline-block p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Besoin d&apos;une stratégie digitale complète ?
              </h3>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Obtenez un audit gratuit de votre présence en ligne et un plan d&apos;action personnalisé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button onClick={scrollToContact} size="lg" className="bg-white text-purple-600 hover:bg-white/90 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Demander un audit gratuit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Link href="/portfolio" className="text-sm text-white/90 hover:text-white transition-colors underline underline-offset-4">
                  Voir nos résultats clients
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
