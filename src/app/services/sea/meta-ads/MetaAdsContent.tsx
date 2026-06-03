"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, CheckCircle, Fingerprint, Clock, Users, Image, Target, TrendingUp } from "lucide-react";
import ServiceFAQ from "@/components/services/ServiceFAQ";

const features = [
  { icon: <Users className="w-6 h-6" />, title: "Ciblage Precis", description: "Touchez votre audience ideale" },
  { icon: <Image className="w-6 h-6" />, title: "Creatifs Optimises", description: "Visuels et videos performants" },
  { icon: <Target className="w-6 h-6" />, title: "Retargeting", description: "Reconvertissez vos visiteurs" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Scaling", description: "Augmentez vos budgets sans perdre en ROI" },
];
const includes = ["Audit de compte existant", "Strategie d'audience", "Creation des campagnes", "Design des creatifs", "Tests A/B continus", "Optimisation quotidienne", "Rapports hebdomadaires", "Conseils creatifs"];
const idealFor = ["E-commerce mode/beaute", "Applications mobiles", "Services B2C", "Evenements", "Marques lifestyle", "Restaurants"];

export default function MetaAdsContent() {
  return (
    <main className="pt-20">
      <section className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white py-20 overflow-hidden"><div className="container mx-auto px-4 relative z-10">
        <Breadcrumb className="mb-8"><BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-white/70 hover:text-white">Accueil</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services" className="text-white/70 hover:text-white">Services</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services/sea" className="text-white/70 hover:text-white">SEA</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbPage className="text-white">Meta Ads</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList></Breadcrumb>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6"><div className="p-3 bg-white/20 rounded-xl"><Fingerprint className="w-8 h-8" /></div><span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">SEA</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Agence Meta Ads Paris</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">Publicités Facebook et Instagram ciblées pour toucher votre audience idéale en Île-de-France et partout en France.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100"><Link href="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"><Clock className="w-5 h-5" /><span>Resultats : 1-2 semaines</span></div>
          </div>
        </div>
      </div></section>

      {/* STATS */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "x3.2", label: "ROAS moyen constaté" },
              { value: "3.2Md", label: "utilisateurs Meta" },
              { value: "−42%", label: "CPM vs année précédente" },
              { value: "72h", label: "délai de lancement" },
            ].map((s, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl font-black text-purple-600 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI META ADS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Pourquoi les publicités Meta Ads sont puissantes pour votre business</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Facebook et Instagram réunissent plus de <strong>3,2 milliards d'utilisateurs actifs</strong> dans le monde, dont 45 millions en France. Ces plateformes collectent des données comportementales exceptionnellement précises : centres d'intérêt, comportements d'achat, événements de vie, interactions avec des pages similaires à la vôtre.</p>
                <p>La différence avec Google Ads est fondamentale : <strong>Meta Ads crée la demande</strong> là où Google Ads répond à une demande existante. C'est pourquoi Meta excelle pour les produits découverts impulsivement — mode, décoration, cosmétiques, restaurants — et pour construire une notoriété de marque auprès d'audiences ciblées.</p>
                <p>Notre agence Meta Ads à Paris gère des budgets de 500€ à 50 000€/mois. Nous créons des campagnes complètes incluant la stratégie créative, le ciblage d'audience, les tests A/B et l'optimisation quotidienne. Nos clients e-commerce atteignent en moyenne un <strong>ROAS de x3.2</strong>.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Les formats publicitaires Meta en 2026</h3>
              <div className="space-y-3">
                {[
                  { format: "Reels sponsorisés", desc: "Format vidéo court le plus viral. Idéal pour la notoriété et l'engagement. +40% de reach vs posts classiques." },
                  { format: "Carrousel produits", desc: "Showcase de 2 à 10 produits avec liens individuels. Parfait pour le e-commerce et les promotions." },
                  { format: "Collection ads", desc: "Expérience immersive : image ou vidéo principale + catalogue produits. Taux de conversion x2." },
                  { format: "Dynamic ads", desc: "Retargeting automatique avec les produits consultés sur votre site. ROI exceptionnel sur visiteurs chauds." },
                  { format: "Lead ads", desc: "Formulaire natif dans Facebook. Collecte d'emails et numéros sans quitter l'application." },
                ].map((f, i) => (
                  <div key={i} className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <span className="font-bold text-purple-700 text-sm">{f.format}</span>
                    <p className="text-xs text-gray-600 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Notre expertise Meta Ads</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (<div key={index} className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"><div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 mb-4">{feature.icon}</div><h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3><p className="text-muted-foreground text-sm">{feature.description}</p></div>))}</div>
      </div></section>

      <section className="py-20"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center">
        <div><h2 className="text-3xl font-bold mb-6 text-foreground">Ce qui est inclus</h2><p className="text-muted-foreground mb-8">Une gestion complete de vos campagnes Meta pour un ROI optimal.</p>
          <ul className="space-y-4">{includes.map((item, index) => (<li key={index} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-foreground">{item}</span></li>))}</ul></div>
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 p-8 rounded-2xl"><h3 className="text-xl font-semibold mb-4 text-foreground">Ideal pour</h3>
          <ul className="space-y-3">{idealFor.map((item, index) => (<li key={index} className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-purple-600" /><span className="text-foreground">{item}</span></li>))}</ul></div>
      </div></div></section>

      <ServiceFAQ faqs={[
        { q: "Facebook Ads ou Instagram Ads : lequel choisir ?", a: "Les deux plateformes sont gerees depuis le meme outil (Meta Business Suite). Nous diffusons sur les deux simultanement et optimisons la repartition selon les performances. Instagram est ideal pour le visuel, Facebook pour le ciblage detaille." },
        { q: "Quel type de contenu fonctionne le mieux en Meta Ads ?", a: "Les videos courtes (15-30s), les carrousels produits et les temoignages clients performent le mieux. Nous creons ou optimisons vos visuels pour maximiser l'engagement et les conversions." },
        { q: "Comment fonctionne le ciblage sur Meta Ads ?", a: "Meta offre un ciblage ultra-precis : donnees demographiques, centres d'interet, comportements d'achat, audiences similaires (lookalike) et retargeting de vos visiteurs. Nous exploitons ces options pour toucher votre audience ideale." },
        { q: "Puis-je voir les resultats en temps reel ?", a: "Oui, vous avez acces a un tableau de bord en temps reel et recevez des rapports hebdomadaires detailles avec les metriques cles : impressions, clics, conversions, cout par acquisition et ROAS." }
      ]} />

      {/* Outil gratuit */}
      <div className="container mx-auto px-4 my-8">
        <div className="p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900">Estimez votre ROI Meta Ads gratuitement</p>
              <p className="text-sm text-gray-600">Simulez vos campagnes Facebook et Instagram</p>
            </div>
            <Link href="/estimateur-ads" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 whitespace-nowrap">
              Estimer mon ROI <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white"><div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pret a conquerir les reseaux sociaux ?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Developpez votre presence sur Facebook et Instagram avec des campagnes performantes.</p>
        <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100"><Link href="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
      </div></section>
    </main>
  );
}
