"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, CheckCircle, RefreshCw, Clock, Search, Zap, Shield, TrendingUp } from "lucide-react";
import ServiceFAQ from "@/components/services/ServiceFAQ";

const features = [
  { icon: <Search className="w-6 h-6" />, title: "Audit Complet", description: "Analyse approfondie de votre site existant" },
  { icon: <Zap className="w-6 h-6" />, title: "Performances", description: "Optimisation vitesse et Core Web Vitals" },
  { icon: <Shield className="w-6 h-6" />, title: "SEO Préservé", description: "Migration sans perte de référencement" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Conversion", description: "Design optimisé pour convertir" },
];
const includes = ["Audit complet de l'existant", "Nouveau design moderne", "Migration des contenus", "Preservation du SEO", "Amélioration des performances", "Redirection des URLs", "Hebergement 1 an inclus", "Support post-refonte 3 mois"];
const idealFor = ["Sites vieillissants (+3 ans)", "Problemes de performance", "Mauvais taux de conversion", "Image de marque a rafraichir", "Site non responsive", "Changement d'activité"];

export default function RefonteSiteContent() {
  return (
    <main className="pt-20">
      <section className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white py-20 overflow-hidden"><div className="container mx-auto px-4 relative z-10">
        <Breadcrumb className="mb-8"><BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-white/70 hover:text-white">Accueil</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services" className="text-white/70 hover:text-white">Services</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services/sites-web" className="text-white/70 hover:text-white">Sites Web</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbPage className="text-white">Refonte de Site</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList></Breadcrumb>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6"><div className="p-3 bg-white/20 rounded-xl"><RefreshCw className="w-8 h-8" /></div><span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">Sites Web</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Refonte de Site</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">Modernisez votre site existant tout en preservant votre référencement et vos acquis.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100"><Link href="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"><Clock className="w-5 h-5" /><span>Livraison : 15-25 jours</span></div>
          </div>
        </div>
      </div></section>

      {/* POURQUOI REFONTE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Quand faut-il refondre son site web ?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Un site web a une durée de vie de 3 à 5 ans. Au-delà, il devient un frein plutôt qu&apos;un accélérateur pour votre business : design daté qui crée de la méfiance, performances dégradées qui pénalisent votre référencement Google, et expérience mobile insuffisante qui fait fuir 60% de vos visiteurs.</p>
                <p>La refonte de site web est souvent perçue comme un risque pour le SEO. C&apos;est vrai — mais uniquement si elle est mal exécutée. Chez ConvertiLab, nous appliquons un <strong>protocole SEO de migration rigoureux</strong> : cartographie des URLs existantes, redirections 301 systématiques, vérification post-lancement. Nos clients ne perdent aucune position lors de la transition.</p>
                <p>Une refonte bien menée génère en moyenne <strong>+150% de trafic organique</strong> dans les 6 mois qui suivent, grâce à la combinaison d&apos;un design moderne (meilleur taux d&apos;engagement), d&apos;une architecture SEO optimisée et de performances améliorées (Core Web Vitals).</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Les 7 signaux qui indiquent qu&apos;une refonte s&apos;impose</h3>
              <div className="space-y-3">
                {[
                  { signal: "Site non responsive", detail: "Plus de 60% du trafic web est mobile — un site non adapté perd ces visiteurs." },
                  { signal: "Score PageSpeed < 50", detail: "Chaque seconde de chargement supplémentaire réduit vos conversions de 20%." },
                  { signal: "Taux de rebond > 70%", detail: "Les visiteurs partent avant de voir ce que vous proposez — signe d'un UX défaillant." },
                  { signal: "Site de plus de 4 ans", detail: "Les technologies et standards du web évoluent — votre site aussi doit évoluer." },
                  { signal: "Image de marque évoluée", detail: "Si votre identité a changé mais pas votre site, il y a un décalage nuisible." },
                  { signal: "Peu de conversions", detail: "Un site mal conçu pour la conversion perd des dizaines de clients par mois." },
                  { signal: "Difficile à modifier", detail: "Si chaque mise à jour nécessite un développeur, le CMS est trop complexe." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-orange-800 text-sm">{s.signal}</div>
                      <div className="text-xs text-orange-700/70">{s.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Pourquoi refondre votre site ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (<div key={index} className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"><div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-orange-600 mb-4">{feature.icon}</div><h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3><p className="text-muted-foreground text-sm">{feature.description}</p></div>))}</div>
      </div></section>

      <section className="py-20"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center">
        <div><h2 className="text-3xl font-bold mb-6 text-foreground">Ce qui est inclus</h2><p className="text-muted-foreground mb-8">Une refonte complète qui respecte votre historique tout en vous projetant vers l&apos;avenir.</p>
          <ul className="space-y-4">{includes.map((item, index) => (<li key={index} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-foreground">{item}</span></li>))}</ul></div>
        <div className="bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl"><h3 className="text-xl font-semibold mb-4 text-foreground">Ideal pour</h3>
          <ul className="space-y-3">{idealFor.map((item, index) => (<li key={index} className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-orange-600" /><span className="text-foreground">{item}</span></li>))}</ul></div>
      </div></div></section>

      <ServiceFAQ faqs={[
        { q: "Vais-je perdre mon référencement lors de la refonte ?", a: "Non, nous mettons en place un plan de migration SEO complet : redirections 301, preservation des URLs stratégiques, transfert des contenus optimisés et suivi post-migration pour garantir zero perte de positionnement." },
        { q: "Combien de temps dure une refonte de site ?", a: "Une refonte complète prend entre 3 et 8 semaines selon la complexite du site. Nous travaillons en parallele sur le design, le développement et la migration de contenu pour respecter les delais." },
        { q: "Mon ancien site reste-t-il en ligne pendant la refonte ?", a: "Oui, votre site actuel reste 100% fonctionnel pendant toute la duree du projet. Le nouveau site est developpe sur un environnement separe et ne remplace l'ancien qu'une fois valide et teste." },
        { q: "Est-ce le bon moment pour refondre mon site ?", a: "Si votre site a plus de 3 ans, n'est pas responsive, a un taux de conversion faible ou ne reflete plus votre image de marque, c'est le bon moment. Un audit gratuit vous aidera a evaluer la situation." }
      ]} />

      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500 text-white"><div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à moderniser votre site ?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Obtenez un audit gratuit de votre site actuel et decouvrez son potentiel d&apos;amélioration.</p>
        <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100"><Link href="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
      </div></section>
    </main>
  );
}
