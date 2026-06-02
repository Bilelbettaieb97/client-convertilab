"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, CheckCircle, TrendingUp, Clock, Search, FileText, Link2, BarChart, Target, Users, Star, AlertCircle } from "lucide-react";
import ServiceFAQ from "@/components/services/ServiceFAQ";

const features = [
  { icon: <Search className="w-6 h-6" />, title: "Optimisation On-Page", description: "Balises title, meta-description, structure H1-H6, maillage interne, vitesse de chargement et données structurées Schema.org pour chaque page clé de votre site." },
  { icon: <FileText className="w-6 h-6" />, title: "Stratégie de Contenu", description: "Recherche de mots-clés longue traîne, création d'articles de blog optimisés et de pages de service qui répondent exactement aux questions que posent vos futurs clients sur Google." },
  { icon: <Link2 className="w-6 h-6" />, title: "Netlinking Qualitatif", description: "Acquisition de backlinks sur des sites français à forte autorité (DA 30+), mentions de marque, partenariats éditoriaux et articles invités dans votre secteur d'activité." },
  { icon: <BarChart className="w-6 h-6" />, title: "Suivi & Reporting", description: "Tableau de bord mensuel avec vos positions sur vos mots-clés cibles, le trafic organique, les pages qui rankent et les actions prioritaires pour le mois suivant." },
];

const methodology = [
  { step: "01", title: "Audit SEO complet", desc: "On analyse l'état technique de votre site, vos positions actuelles, le profil de vos concurrents et les opportunités de mots-clés dans votre secteur. Cet audit identifie les quick wins et les chantiers long terme.", duration: "Semaine 1" },
  { step: "02", title: "Stratégie & feuille de route", desc: "On construit un plan d'action priorisé : pages à optimiser en priorité, sujets d'articles à créer, backlinks à obtenir. Chaque action est liée à un objectif de ranking précis.", duration: "Semaine 2" },
  { step: "03", title: "Optimisations techniques", desc: "Corrections on-page, amélioration de la vitesse (Core Web Vitals), structure du maillage interne, implémentation des données structurées. Base technique solide pour que Google indexe et classe vos pages.", duration: "Mois 1" },
  { step: "04", title: "Production de contenu", desc: "Création des pages et articles optimisés selon la stratégie définie. Chaque contenu est rédigé pour répondre à l'intention de recherche de vos visiteurs et positionner votre site comme référence dans votre domaine.", duration: "En continu" },
  { step: "05", title: "Acquisition de backlinks", desc: "Développement progressif de votre profil de liens entrants via des partenariats éditoriaux, publications sur des sites sectoriels et stratégie de relations presse digitale.", duration: "Mois 2+" },
  { step: "06", title: "Suivi & ajustements", desc: "Rapport mensuel détaillé, analyse des positions gagnées et perdues, ajustement de la stratégie en fonction des résultats de Google Search Console et Analytics.", duration: "Mensuel" },
];

const includes = [
  "Audit SEO technique complet",
  "Recherche de mots-clés et analyse concurrentielle",
  "Optimisation on-page de toutes les pages clés",
  "Création de contenus optimisés (articles, pages services)",
  "Netlinking qualitatif (backlinks DA 30+)",
  "Optimisation Core Web Vitals et vitesse",
  "Implémentation Schema.org (données structurées)",
  "Rapport mensuel + suivi des positions",
  "Recommandations continues",
];

const idealFor = [
  "Sites e-commerce qui veulent plus de trafic qualifié",
  "Sites vitrines d'artisans et commerçants locaux",
  "Cabinets de professionnels libéraux",
  "PME B2B cherchant des leads organiques",
  "Startups voulant s'imposer sur leur marché",
  "Blogs professionnels à monétiser",
];

const results = [
  { metric: "+38%", label: "de trafic organique en moyenne à 6 mois" },
  { metric: "Top 10", label: "sur les mots-clés cibles en 3 à 6 mois" },
  { metric: "150+", label: "entrepreneurs accompagnés depuis 2022" },
  { metric: "4.9★", label: "de satisfaction client sur Trustpilot" },
];

const mistakes = [
  { title: "Négliger la vitesse du site", desc: "Google pénalise les sites lents depuis Core Web Vitals 2021. Un site qui met plus de 3 secondes à charger perd des positions et des visiteurs." },
  { title: "Oublier le SEO local", desc: "Pour un artisan, médecin ou restaurant, apparaître sur « votre métier + votre ville » est souvent plus rentable que de cibler des mots-clés nationaux très concurrentiels." },
  { title: "Publier sans stratégie", desc: "Écrire des articles sans recherche de mots-clés préalable, c'est travailler à l'aveugle. Chaque contenu doit répondre à une vraie question de vos clients potentiels." },
  { title: "Ignorer le maillage interne", desc: "Les liens entre vos propres pages sont souvent négligés alors qu'ils transmettent l'autorité de vos pages fortes vers vos pages faibles et améliorent l'indexation." },
];

export default function ReferencementContent() {
  return (
    <main className="pt-20">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-white/70 hover:text-white">Accueil</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services" className="text-white/70 hover:text-white">Services</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services/seo" className="text-white/70 hover:text-white">SEO</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50" />
              <BreadcrumbItem><BreadcrumbPage className="text-white">Référencement SEO</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl"><TrendingUp className="w-8 h-8" /></div>
              <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">SEO · Référencement naturel</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Référencement SEO — Passez en première page Google</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl">
              93% des expériences en ligne commencent par un moteur de recherche. Si votre site n'apparaît pas en première page sur vos mots-clés, vous êtes invisible pour vos futurs clients.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Notre stratégie SEO combine optimisation technique, création de contenu et acquisition de backlinks pour vous positionner durablement sur les recherches qui comptent pour votre activité.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link href="/contact">Demander un audit SEO gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                <Clock className="w-5 h-5" />
                <span>Premiers résultats : 3 à 6 mois</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RÉSULTATS */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{r.metric}</div>
                <div className="text-sm text-muted-foreground">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Pourquoi le SEO est indispensable pour votre business</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Le référencement naturel (SEO) est la discipline qui consiste à optimiser votre site pour qu'il apparaisse en bonne position dans les résultats de Google. Contrairement à la publicité payante (Google Ads), le trafic organique généré par le SEO est gratuit et durable : une fois que vous rankez, vous continuez à recevoir des visiteurs sans payer à chaque clic.
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Un site bien référencé, c'est un commercial qui travaille 24h/24 pour vous. Quand un artisan de Rueil-Malmaison apparaît en première position sur "plombier Rueil", il reçoit des appels sans effort. Quand un cabinet de kinésithérapie rankent sur "kiné + sa ville", son agenda se remplit automatiquement.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Le SEO n'est pas magique — c'est un travail méthodique et continu. Mais c'est l'un des investissements avec le meilleur retour sur le long terme, car chaque amélioration s'accumule et renforce votre position dans le temps.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Notre approche SEO en 4 piliers</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Un référencement efficace repose sur quatre leviers complémentaires. Négliger l'un d'eux, c'est limiter l'impact des trois autres.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-600 mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODOLOGIE */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Notre méthode étape par étape</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            De l'audit initial aux résultats durables — voici exactement comment on travaille.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {methodology.map((m, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-black text-emerald-500">{m.step}</span>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">{m.duration}</span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">{m.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERREURS À ÉVITER */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Les 4 erreurs SEO qui coûtent cher</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Les erreurs les plus fréquentes que nous corrigeons sur les sites de nos clients.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {mistakes.map((m, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6 flex gap-4">
                <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUI EST INCLUS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ce qui est inclus dans votre prestation SEO</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Une stratégie SEO complète pensée pour les PME et indépendants qui veulent des résultats concrets, pas des rapports incompréhensibles.
              </p>
              <ul className="space-y-4">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2"><Target className="w-5 h-5 text-emerald-600" />Idéal pour</h3>
                <ul className="space-y-3">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold text-foreground">Témoignage client</span>
                </div>
                <p className="text-muted-foreground text-sm italic leading-relaxed mb-3">
                  "Avant ConvertiLab, mon site était invisible sur Google. En 4 mois, j'apparais en première page sur 'plombier Rueil' et je reçois 3 à 5 demandes de devis par semaine directement du site."
                </p>
                <p className="text-xs text-muted-foreground">— Client artisan, Rueil-Malmaison</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIENS BLOG UTILES */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Pour aller plus loin</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/seo-check" className="bg-background border border-border rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all group">
              <div className="text-emerald-600 font-semibold mb-2 group-hover:underline">Outil audit SEO gratuit →</div>
              <p className="text-sm text-muted-foreground">Analysez votre site en 30 secondes et obtenez votre score SEO avec les points à corriger en priorité.</p>
            </Link>
            <Link href="/blog/typographie-web-choisir-polices" className="bg-background border border-border rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all group">
              <div className="text-emerald-600 font-semibold mb-2 group-hover:underline">Typographie web et SEO →</div>
              <p className="text-sm text-muted-foreground">Comment choisir les bonnes polices améliore la lisibilité, le temps passé sur le site et indirectement votre référencement.</p>
            </Link>
            <Link href="/services/seo/audit" className="bg-background border border-border rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all group">
              <div className="text-emerald-600 font-semibold mb-2 group-hover:underline">Audit SEO professionnel →</div>
              <p className="text-sm text-muted-foreground">Un audit complet de votre site avec un rapport détaillé et un plan d'action priorisé par un expert SEO.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ServiceFAQ faqs={[
        { q: "Combien coûte une prestation de référencement SEO ?", a: "Nos forfaits SEO démarrent à partir de 490€/mois. Le tarif dépend de la concurrence sur vos mots-clés, du volume de pages à optimiser et de vos objectifs. Nous établissons un devis personnalisé après un audit gratuit de votre site." },
        { q: "Combien de temps faut-il pour voir des résultats en SEO ?", a: "Les premières améliorations techniques sont visibles en quelques semaines. Les positions sur Google commencent à progresser entre le 2e et le 3e mois. Les résultats significatifs arrivent entre 3 et 6 mois. Le SEO est un investissement long terme : plus vous continuez, plus vos positions se renforcent." },
        { q: "Faut-il un contrat longue durée pour le SEO ?", a: "Nous recommandons un engagement de 6 mois minimum pour voir des résultats significatifs, mais il n'y a pas de contrat contraignant. Le SEO est un travail continu — s'arrêter avant d'avoir atteint vos objectifs, c'est perdre une partie du travail accompli." },
        { q: "Que comprend votre prestation de netlinking ?", a: "Notre stratégie de netlinking inclut l'identification de sites à forte autorité dans votre secteur, la création de contenus qualitatifs pour obtenir des backlinks naturels (DA 30+), et le suivi régulier de votre profil de liens entrants." },
        { q: "La création d'un site ConvertiLab inclut-elle le SEO ?", a: "Chaque site créé chez ConvertiLab intègre les bases SEO : balises title et meta optimisées, structure H1-H6 correcte, données structurées Schema.org, sitemap, robots.txt, et optimisation de la vitesse. Le référencement continu (contenu + backlinks) fait l'objet d'un forfait mensuel séparé." },
        { q: "Travaillez-vous sur tous les types de sites ?", a: "Oui, nous intervenons sur les sites vitrines, e-commerce, blogs, applications web et sites institutionnels. Chaque stratégie est adaptée à votre secteur d'activité, votre zone géographique et vos objectifs commerciaux." }
      ]} />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4"><Users className="w-10 h-10 opacity-80" /></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à passer en première page Google ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Audit SEO gratuit de votre site. On vous dit exactement où vous en êtes, quelles pages optimiser en priorité et ce qu'on peut atteindre ensemble.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Link href="/contact">Demander mon audit SEO gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/seo-check">Tester mon site gratuitement</Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
