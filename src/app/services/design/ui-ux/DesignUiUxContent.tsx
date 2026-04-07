"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, CheckCircle, PenTool, Clock, Layout, Users, Layers, MousePointer } from "lucide-react";
import ServiceFAQ from "@/components/services/ServiceFAQ";

const features = [
  { icon: <Layout className="w-6 h-6" />, title: "Wireframes", description: "Maquettes fonctionnelles pour valider la structure" },
  { icon: <Layers className="w-6 h-6" />, title: "Prototypes", description: "Versions interactives pour tester l'experience" },
  { icon: <Users className="w-6 h-6" />, title: "Tests Utilisateurs", description: "Validation avec de vrais utilisateurs" },
  { icon: <MousePointer className="w-6 h-6" />, title: "Design System", description: "Composants reutilisables et coherents" },
];
const includes = ["Recherche utilisateur (UX Research)", "Wireframes et architecture", "Prototypes interactifs Figma", "Tests utilisateurs", "Design system complet", "Guides de style", "Assets exportables", "Accompagnement developpement"];
const idealFor = ["Applications mobiles", "Applications web", "Refonte d'interface", "Nouveaux produits digitaux", "Optimisation conversion", "Startups en phase MVP"];

export default function DesignUiUxContent() {
  return (
    <main className="pt-20">
      <section className="relative bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 text-white py-20 overflow-hidden"><div className="container mx-auto px-4 relative z-10">
        <Breadcrumb className="mb-8"><BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-white/70 hover:text-white">Accueil</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services" className="text-white/70 hover:text-white">Services</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services/design" className="text-white/70 hover:text-white">Design</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbPage className="text-white">Design UI/UX</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList></Breadcrumb>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6"><div className="p-3 bg-white/20 rounded-xl"><PenTool className="w-8 h-8" /></div><span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">Design</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Design UI/UX</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">Des interfaces intuitives qui optimisent l&apos;experience utilisateur et augmentent vos conversions.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100"><Link href="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"><Clock className="w-5 h-5" /><span>Livraison : 10-20 jours</span></div>
          </div>
        </div>
      </div></section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Notre processus UX</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (<div key={index} className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"><div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center text-pink-600 mb-4">{feature.icon}</div><h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3><p className="text-muted-foreground text-sm">{feature.description}</p></div>))}</div>
      </div></section>

      <section className="py-20"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center">
        <div><h2 className="text-3xl font-bold mb-6 text-foreground">Ce qui est inclus</h2><p className="text-muted-foreground mb-8">Un processus complet centre sur l&apos;utilisateur pour creer des interfaces qui convertissent.</p>
          <ul className="space-y-4">{includes.map((item, index) => (<li key={index} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-foreground">{item}</span></li>))}</ul></div>
        <div className="bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 p-8 rounded-2xl"><h3 className="text-xl font-semibold mb-4 text-foreground">Ideal pour</h3>
          <ul className="space-y-3">{idealFor.map((item, index) => (<li key={index} className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-pink-600" /><span className="text-foreground">{item}</span></li>))}</ul></div>
      </div></div></section>

      <ServiceFAQ faqs={[
        { q: "Quelle est votre methodologie de design UX ?", a: "Nous suivons un processus en 5 etapes : recherche utilisateur, architecture de l'information, wireframes, prototypes interactifs et tests utilisateurs. Chaque etape est validee avec vous avant de passer a la suivante." },
        { q: "Combien de temps prend un projet de design UI/UX ?", a: "Un projet complet de design UI/UX prend entre 2 et 4 semaines selon la complexite. Les wireframes sont livres en 1 semaine, suivis des maquettes haute-fidelite et des prototypes interactifs." },
        { q: "Livrez-vous un design system reutilisable ?", a: "Oui, nous creons un design system complet avec des composants reutilisables, des guidelines de style, des tokens de design et une documentation pour vos developpeurs." },
        { q: "Faites-vous des tests utilisateurs ?", a: "Oui, nous realisons des tests d'utilisabilite avec de vrais utilisateurs pour valider les parcours et identifier les points de friction. Les resultats alimentent les iterations de design." }
      ]} />

      {/* Outil gratuit */}
      <div className="container mx-auto px-4 my-8">
        <div className="p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border border-pink-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900">Evaluez le design de votre site gratuitement</p>
              <p className="text-sm text-gray-600">Score UX, accessibilite, coherence visuelle en quelques clics</p>
            </div>
            <Link href="/design-score" className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-semibold hover:bg-pink-700 whitespace-nowrap">
              Evaluer mon design <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white"><div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pret a ameliorer votre UX ?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Discutons de votre projet et creons ensemble une experience utilisateur exceptionnelle.</p>
        <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100"><Link href="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
      </div></section>
    </main>
  );
}
