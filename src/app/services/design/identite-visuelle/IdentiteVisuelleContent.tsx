"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, CheckCircle, Fingerprint, Clock, Palette, Type, Image, BookOpen } from "lucide-react";
import ServiceFAQ from "@/components/services/ServiceFAQ";

const features = [
  { icon: <Palette className="w-6 h-6" />, title: "Création Logo", description: "Un logo unique et memorable pour votre marque" },
  { icon: <Type className="w-6 h-6" />, title: "Typographie", description: "Selection de polices coherentes avec votre identite" },
  { icon: <Image className="w-6 h-6" />, title: "Univers Visuel", description: "Couleurs, formes et style graphique distinctifs" },
  { icon: <BookOpen className="w-6 h-6" />, title: "Charte Graphique", description: "Document de reference pour une communication coherente" },
];
const includes = ["Création de logo (3 propositions)", "Charte graphique complète", "Palette de couleurs", "Typographies définies", "Declinaisons supports print/web", "Fichiers sources (AI, PSD, PDF)", "Guide d'utilisation", "Formats optimisés réseaux sociaux"];
const idealFor = ["Création d'entreprise", "Rebranding", "Lancement de marque", "Startups", "Associations", "Commerces locaux"];

export default function IdentiteVisuelleContent() {
  return (
    <main className="pt-20">
      <section className="relative bg-gradient-to-br from-fuchsia-500 via-purple-500 to-violet-600 text-white py-20 overflow-hidden"><div className="container mx-auto px-4 relative z-10">
        <Breadcrumb className="mb-8"><BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-white/70 hover:text-white">Accueil</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services" className="text-white/70 hover:text-white">Services</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services/design" className="text-white/70 hover:text-white">Design</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem><BreadcrumbPage className="text-white">Identite Visuelle</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList></Breadcrumb>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6"><div className="p-3 bg-white/20 rounded-xl"><Fingerprint className="w-8 h-8" /></div><span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">Design</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Identite Visuelle</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">Logo et charte graphique pour une image de marque coherente et memorable.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100"><Link href="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"><Clock className="w-5 h-5" /><span>Livraison : 7-14 jours</span></div>
          </div>
        </div>
      </div></section>

      {/* POURQUOI IDENTITE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Pourquoi votre identité visuelle est votre premier argument commercial</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Il faut <strong>moins de 7 secondes</strong> pour qu&apos;un prospect se fasse une première impression de votre entreprise. Cette impression est formée à 93% par des signaux visuels : votre logo, vos couleurs, votre typographie. Si ces éléments ne transmettent pas immédiatement professionnalisme, confiance et cohérence, le prospect est perdu avant d&apos;avoir lu un mot de votre offre.</p>
                <p>Une identité visuelle forte est un investissement à long terme. Contrairement à la publicité qui s&apos;arrête dès que le budget est coupé, <strong>votre logo et votre charte graphique travaillent pour vous en permanence</strong> : sur votre site web, vos cartes de visite, vos devis, vos réseaux sociaux, vos véhicules, vos uniformes...</p>
                <p>Notre processus de création d&apos;identité visuelle commence toujours par une phase de <strong>stratégie de marque</strong> : qui êtes-vous, qui ciblez-vous, quelles valeurs voulez-vous transmettre ? Seulement ensuite viennent les choix graphiques, fondés sur une réflexion stratégique et non sur des tendances éphémères.</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Ce qu&apos;une identité visuelle professionnelle vous apporte</h3>
              <div className="space-y-3">
                {[
                  { icon: "🎯", title: "Cohérence multi-supports", detail: "Votre marque est reconnaissable instantanément partout : digital, print, signalétique, uniforme." },
                  { icon: "💼", title: "Crédibilité renforcée", detail: "Un logo professionnel augmente la confiance perçue et vous permet de justifier des prix plus élevés." },
                  { icon: "🧠", title: "Mémorisation accrue", detail: "Une identité cohérente est 3× plus mémorable qu'une communication visuelle disparate." },
                  { icon: "📈", title: "Avantage concurrentiel", detail: "Dans des secteurs où les offres sont similaires, l'image de marque peut être le facteur décisif." },
                  { icon: "🔄", title: "Gain de temps opérationnel", detail: "Une charte graphique complète accélère la création de tous vos futurs supports de communication." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <div className="font-bold text-foreground text-sm">{s.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Les piliers de votre identité</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (<div key={index} className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"><div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 mb-4">{feature.icon}</div><h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3><p className="text-muted-foreground text-sm">{feature.description}</p></div>))}</div>
      </div></section>

      <section className="py-20"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center">
        <div><h2 className="text-3xl font-bold mb-6 text-foreground">Ce qui est inclus</h2><p className="text-muted-foreground mb-8">Une identite visuelle complète pour une communication professionnelle et coherente.</p>
          <ul className="space-y-4">{includes.map((item, index) => (<li key={index} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-foreground">{item}</span></li>))}</ul></div>
        <div className="bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-purple-900/20 dark:to-fuchsia-900/20 p-8 rounded-2xl"><h3 className="text-xl font-semibold mb-4 text-foreground">Ideal pour</h3>
          <ul className="space-y-3">{idealFor.map((item, index) => (<li key={index} className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-purple-600" /><span className="text-foreground">{item}</span></li>))}</ul></div>
      </div></div></section>

      <ServiceFAQ faqs={[
        { q: "Combien coute la création d'un logo professionnel ?", a: "La création d'un logo professionnel avec charte graphique complète démarre a partir de 490 euros. Le tarif varie selon la complexite du projet et les livrables souhaites (déclinaisons, supports print, etc.)." },
        { q: "Combien de propositions de logo vais-je recevoir ?", a: "Nous proposons 3 directions créatives distinctes basees sur le brief. Apres votre choix, 2 tours de revisions sont inclus pour affiner le logo retenu jusqu'a satisfaction complète." },
        { q: "Quels fichiers sont livrés avec l'identite visuelle ?", a: "Vous recevez les fichiers sources (AI, EPS, PSD), les versions web optimisées (SVG, PNG), les déclinaisons print (CMJN), un guide d'utilisation et la charte graphique complète au format PDF." },
        { q: "Puis-je utiliser mon logo sur tous les supports ?", a: "Absolument. Nous livrons toutes les déclinaisons necessaires : fond clair, fond fonce, monochrome, favicon, réseaux sociaux, carte de visite, etc. Votre logo est utilisable partout sans restriction." }
      ]} />

      <section className="py-20 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white"><div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à créer votre identite ?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Donnez a votre marque une image forte et reconnaissable.</p>
        <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100"><Link href="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
      </div></section>
    </main>
  );
}
