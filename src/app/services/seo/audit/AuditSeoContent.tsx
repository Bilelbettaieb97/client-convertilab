"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, CheckCircle, ClipboardCheck, Clock, Search, FileText, Target, Lightbulb } from "lucide-react";
import ServiceFAQ from "@/components/services/ServiceFAQ";

const features = [
  { icon: <Search className="w-6 h-6" />, title: "Analyse Technique", description: "Performance, indexation, structure du site" },
  { icon: <FileText className="w-6 h-6" />, title: "Audit Contenu", description: "Qualite, pertinence, optimisation des pages" },
  { icon: <Target className="w-6 h-6" />, title: "Analyse Concurrence", description: "Positionnement vs vos concurrents" },
  { icon: <Lightbulb className="w-6 h-6" />, title: "Recommandations", description: "Plan d'action priorise et detaille" },
];
const includes = ["Rapport detaille (+50 pages)", "Analyse technique complete", "Audit du contenu", "Etude de la concurrence", "Analyse des backlinks", "Recommandations priorisees", "Plan d'action concret", "Call de restitution 1h"];
const idealFor = ["Avant une refonte", "Baisse de trafic", "Nouveau site", "Lancement SEO", "Problemes de positionnement", "Due diligence"];

export default function AuditSeoContent() {
  return (
    <main className="pt-20">
      <section className="relative bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 text-white py-20 overflow-hidden"><div className="container mx-auto px-4 relative z-10">
        <Breadcrumb className="mb-8"><BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-white/70 hover:text-white">Accueil</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services" className="text-white/70 hover:text-white">Services</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services/seo" className="text-white/70 hover:text-white">SEO</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbPage className="text-white">Audit SEO</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList></Breadcrumb>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6"><div className="p-3 bg-white/20 rounded-xl"><ClipboardCheck className="w-8 h-8" /></div><span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">SEO</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Audit SEO</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">Analyse complete de votre visibilite actuelle et axes d&apos;amelioration prioritaires.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100"><Link href="/contact">Demander un audit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"><Clock className="w-5 h-5" /><span>Livraison : 5-7 jours</span></div>
          </div>
        </div>
      </div></section>

      {/* POURQUOI AUDIT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Pourquoi un audit SEO est indispensable avant tout action</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Lancer une stratégie SEO sans audit préalable, c&apos;est construire une maison sans fondations. Un <strong>audit SEO complet</strong> vous révèle exactement pourquoi votre site ne ranke pas, quelles pages perdent du trafic et quels concurrents vous dépassent — et surtout, quoi faire en priorité pour inverser la tendance.</p>
                <p>Notre audit couvre plus de <strong>150 points de contrôle</strong> répartis en 6 axes : technique, on-page, contenu, backlinks, expérience utilisateur et référencement local. Chaque point est noté et priorisé selon son impact sur votre visibilité Google.</p>
                <p>Le rapport livré inclut un <strong>plan d&apos;action concret et priorisé</strong> : vous savez exactement quoi corriger cette semaine, ce mois-ci et ce trimestre pour maximiser l&apos;impact de votre budget SEO.</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Les 6 axes analysés dans notre audit</h3>
              {[
                { num: "01", title: "SEO Technique", items: ["Vitesse & Core Web Vitals", "Indexation & crawlabilité", "Structure des URLs", "Fichiers robots.txt & sitemap"] },
                { num: "02", title: "SEO On-Page", items: ["Balises title & meta description", "Structure H1/H2/H3", "Densité de mots-clés", "Données structurées Schema.org"] },
                { num: "03", title: "Contenu", items: ["Qualité & unicité du contenu", "Couverture des mots-clés", "Contenu dupliqué", "Opportunités de contenu"] },
                { num: "04", title: "Backlinks", items: ["Profil de liens entrants", "Autorité de domaine (DA)", "Liens toxiques à désavouer", "Opportunités de netlinking"] },
                { num: "05", title: "UX & Conversion", items: ["Taux de rebond par page", "Parcours utilisateur", "Formulaires & CTAs", "Mobile-friendliness"] },
                { num: "06", title: "SEO Local", items: ["Google Business Profile", "Cohérence NAP", "Citations locales", "Avis et réputation"] },
              ].map((axis, i) => (
                <div key={i} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-600 font-black text-lg w-8 flex-shrink-0">{axis.num}</span>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{axis.title}</div>
                    <div className="text-xs text-muted-foreground">{axis.items.slice(0,2).join(" · ")}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Ce que nous analysons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (<div key={index} className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"><div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 mb-4">{feature.icon}</div><h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3><p className="text-muted-foreground text-sm">{feature.description}</p></div>))}</div>
      </div></section>

      <section className="py-20"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center">
        <div><h2 className="text-3xl font-bold mb-6 text-foreground">Ce qui est inclus</h2><p className="text-muted-foreground mb-8">Un audit complet pour comprendre votre situation et savoir exactement quoi ameliorer.</p>
          <ul className="space-y-4">{includes.map((item, index) => (<li key={index} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-foreground">{item}</span></li>))}</ul></div>
        <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl"><h3 className="text-xl font-semibold mb-4 text-foreground">Ideal pour</h3>
          <ul className="space-y-3">{idealFor.map((item, index) => (<li key={index} className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-blue-600" /><span className="text-foreground">{item}</span></li>))}</ul></div>
      </div></div></section>

      <ServiceFAQ faqs={[
        { q: "Que contient un audit SEO complet ?", a: "Notre audit couvre l'analyse technique (performance, indexation, structure), l'audit du contenu (qualite, pertinence, optimisation), l'etude de la concurrence et l'analyse du profil de backlinks. Un rapport detaille de +50 pages est livre avec un plan d'action priorise." },
        { q: "Combien de temps prend un audit SEO ?", a: "Un audit SEO complet necessite 5 a 10 jours ouvres selon la taille du site. Nous analysons en profondeur chaque aspect technique et editorial pour vous fournir des recommandations concretes et actionnables." },
        { q: "Que faire apres avoir recu l'audit ?", a: "Nous organisons un call de restitution d'1h pour parcourir les resultats ensemble. Vous pouvez ensuite implementer les recommandations en interne ou nous confier l'execution du plan d'action." },
        { q: "L'audit est-il adapte a mon secteur d'activite ?", a: "Oui, chaque audit est personnalise. Nous analysons votre secteur, vos concurrents directs et les specificites de votre marche pour fournir des recommandations pertinentes et adaptees." }
      ]} />

      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-500 text-white"><div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pret a auditer votre site ?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Decouvrez les points forts et les axes d&apos;amelioration de votre referencement.</p>
        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100"><Link href="/contact">Demander un audit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
      </div></section>
    </main>
  );
}
