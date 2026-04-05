"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, CheckCircle, TrendingUp, Clock, Search, FileText, Link2, BarChart } from "lucide-react";
import ServiceFAQ from "@/components/services/ServiceFAQ";

const features = [
  { icon: <Search className="w-6 h-6" />, title: "Optimisation On-Page", description: "Structure, balises, contenu optimises pour Google" },
  { icon: <FileText className="w-6 h-6" />, title: "Strategie Contenu", description: "Creation de contenus qui rankent" },
  { icon: <Link2 className="w-6 h-6" />, title: "Netlinking", description: "Acquisition de backlinks de qualite" },
  { icon: <BarChart className="w-6 h-6" />, title: "Suivi Positions", description: "Monitoring et rapports mensuels" },
];
const includes = ["Optimisation on-page complete", "Recherche de mots-cles", "Strategie de contenu", "Optimisation technique", "Netlinking qualitatif", "Suivi des positions", "Rapports mensuels detailles", "Recommandations continues"];
const idealFor = ["Sites e-commerce", "Sites vitrines", "Blogs professionnels", "Entreprises locales", "Startups B2B", "Professions liberales"];

export default function ReferencementContent() {
  return (
    <main className="pt-20">
      <section className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 text-white py-20 overflow-hidden"><div className="container mx-auto px-4 relative z-10">
        <Breadcrumb className="mb-8"><BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-white/70 hover:text-white">Accueil</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services" className="text-white/70 hover:text-white">Services</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services/seo" className="text-white/70 hover:text-white">SEO</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbPage className="text-white">Referencement SEO</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList></Breadcrumb>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6"><div className="p-3 bg-white/20 rounded-xl"><TrendingUp className="w-8 h-8" /></div><span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">SEO</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Referencement SEO</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">Ameliorez durablement votre positionnement sur les moteurs de recherche.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100"><Link href="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"><Clock className="w-5 h-5" /><span>Resultats : 3-6 mois</span></div>
          </div>
        </div>
      </div></section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Notre approche SEO</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (<div key={index} className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"><div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-600 mb-4">{feature.icon}</div><h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3><p className="text-muted-foreground text-sm">{feature.description}</p></div>))}</div>
      </div></section>

      <section className="py-20"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center">
        <div><h2 className="text-3xl font-bold mb-6 text-foreground">Ce qui est inclus</h2><p className="text-muted-foreground mb-8">Une strategie SEO complete pour dominer les resultats de recherche.</p>
          <ul className="space-y-4">{includes.map((item, index) => (<li key={index} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-foreground">{item}</span></li>))}</ul></div>
        <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-2xl"><h3 className="text-xl font-semibold mb-4 text-foreground">Ideal pour</h3>
          <ul className="space-y-3">{idealFor.map((item, index) => (<li key={index} className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-emerald-600" /><span className="text-foreground">{item}</span></li>))}</ul></div>
      </div></div></section>

      <ServiceFAQ faqs={[
        { q: "Combien coute une prestation de referencement SEO ?", a: "Nos forfaits SEO demarrent a partir de 490 euros/mois. Le tarif depend de la concurrence sur vos mots-cles, du volume de pages a optimiser et de vos objectifs. Nous etablissons un devis personnalise apres audit." },
        { q: "Faut-il un contrat longue duree pour le SEO ?", a: "Nous recommandons un engagement de 6 mois minimum pour voir des resultats significatifs, mais il n'y a pas de contrat contraignant. Le SEO est un travail continu qui porte ses fruits sur la duree." },
        { q: "Que comprend votre prestation de netlinking ?", a: "Notre strategie de netlinking inclut l'identification de sites autoritaires dans votre secteur, la creation de contenus qualitatifs pour obtenir des backlinks naturels, et le suivi du profil de liens." },
        { q: "Travaillez-vous sur tous les types de sites ?", a: "Oui, nous intervenons sur les sites vitrines, e-commerce, blogs, applications web et sites institutionnels. Chaque strategie est adaptee a votre secteur d'activite et a vos objectifs commerciaux." }
      ]} />

      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white"><div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pret a booster votre visibilite ?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Obtenez un audit SEO gratuit de votre site et decouvrez votre potentiel.</p>
        <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100"><Link href="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
      </div></section>
    </main>
  );
}
