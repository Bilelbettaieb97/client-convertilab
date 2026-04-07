"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, CheckCircle, Search, Clock, ShoppingBag, Monitor, RefreshCw } from "lucide-react";
import ServiceFAQ from "@/components/services/ServiceFAQ";

const features = [
  { icon: <Search className="w-6 h-6" />, title: "Campagnes Search", description: "Apparaissez en tete des resultats Google" },
  { icon: <ShoppingBag className="w-6 h-6" />, title: "Google Shopping", description: "Mettez vos produits en avant" },
  { icon: <Monitor className="w-6 h-6" />, title: "Display", description: "Bannieres sur le reseau Google" },
  { icon: <RefreshCw className="w-6 h-6" />, title: "Remarketing", description: "Reconquerez vos visiteurs" },
];
const includes = ["Audit de compte existant", "Recherche de mots-cles", "Creation des campagnes", "Redaction des annonces", "Configuration du tracking", "Optimisation continue", "Rapports hebdomadaires", "Accompagnement strategique"];
const idealFor = ["E-commerce", "Generation de leads", "Services B2B", "Commerces locaux", "Applications mobiles", "Evenements"];

export default function GoogleAdsContent() {
  return (
    <main className="pt-20">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white py-20 overflow-hidden"><div className="container mx-auto px-4 relative z-10">
        <Breadcrumb className="mb-8"><BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-white/70 hover:text-white">Accueil</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services" className="text-white/70 hover:text-white">Services</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services/sea" className="text-white/70 hover:text-white">SEA</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbPage className="text-white">Google Ads</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList></Breadcrumb>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6"><div className="p-3 bg-white/20 rounded-xl"><Search className="w-8 h-8" /></div><span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">SEA</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Google Ads</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">Campagnes Search, Display et Shopping pour capter vos clients au bon moment.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100"><Link href="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"><Clock className="w-5 h-5" /><span>Resultats : Immediat</span></div>
          </div>
        </div>
      </div></section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Types de campagnes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (<div key={index} className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"><div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 mb-4">{feature.icon}</div><h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3><p className="text-muted-foreground text-sm">{feature.description}</p></div>))}</div>
      </div></section>

      <section className="py-20"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center">
        <div><h2 className="text-3xl font-bold mb-6 text-foreground">Ce qui est inclus</h2><p className="text-muted-foreground mb-8">Une gestion complete de vos campagnes Google Ads pour maximiser votre ROI.</p>
          <ul className="space-y-4">{includes.map((item, index) => (<li key={index} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-foreground">{item}</span></li>))}</ul></div>
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl"><h3 className="text-xl font-semibold mb-4 text-foreground">Ideal pour</h3>
          <ul className="space-y-3">{idealFor.map((item, index) => (<li key={index} className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-blue-600" /><span className="text-foreground">{item}</span></li>))}</ul></div>
      </div></div></section>

      <ServiceFAQ faqs={[
        { q: "Quel budget minimum pour Google Ads ?", a: "Nous recommandons un budget minimum de 500 euros/mois en depense publicitaire pour obtenir des donnees suffisantes et optimiser vos campagnes. Le budget ideal depend de votre secteur et de vos objectifs." },
        { q: "Combien de temps pour rentabiliser mes campagnes ?", a: "Les premiers resultats sont visibles des les premiers jours. L'optimisation complete prend 2 a 4 semaines pour atteindre un ROAS optimal. Nos clients atteignent en moyenne un ROAS de x4.8." },
        { q: "Google Ads est-il adapte a mon activite ?", a: "Google Ads est efficace pour presque tous les secteurs : e-commerce, services B2B, professions liberales, commerces locaux. Si vos clients recherchent vos produits/services sur Google, c'est pertinent." },
        { q: "Que comprend votre gestion de campagnes ?", a: "Notre gestion inclut la recherche de mots-cles, la creation d'annonces, la configuration du tracking, l'optimisation continue des encheres, les tests A/B et des rapports hebdomadaires detailles." }
      ]} />

      {/* Outil gratuit */}
      <div className="container mx-auto px-4 my-8">
        <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900">Estimez votre ROI Google Ads gratuitement</p>
              <p className="text-sm text-gray-600">Simulez vos campagnes et anticipez vos resultats</p>
            </div>
            <Link href="/estimateur-ads" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 whitespace-nowrap">
              Estimer mon ROI <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white"><div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pret a booster vos ventes ?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Obtenez un audit gratuit de votre compte Google Ads ou lancez vos premieres campagnes.</p>
        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100"><Link href="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
      </div></section>
    </main>
  );
}
