"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import { ArrowRight, CheckCircle, Fingerprint, Clock, Palette, Type, Image, BookOpen } from "lucide-react";

const features = [
  { icon: <Palette className="w-6 h-6" />, title: "Creation Logo", description: "Un logo unique et memorable pour votre marque" },
  { icon: <Type className="w-6 h-6" />, title: "Typographie", description: "Selection de polices coherentes avec votre identite" },
  { icon: <Image className="w-6 h-6" />, title: "Univers Visuel", description: "Couleurs, formes et style graphique distinctifs" },
  { icon: <BookOpen className="w-6 h-6" />, title: "Charte Graphique", description: "Document de reference pour une communication coherente" },
];

const includes = [
  "Creation de logo (3 propositions)",
  "Charte graphique complete",
  "Palette de couleurs",
  "Typographies definies",
  "Declinaisons supports print/web",
  "Fichiers sources (AI, PSD, PDF)",
  "Guide d'utilisation",
  "Formats optimises reseaux sociaux",
];

const idealFor = [
  "Creation d'entreprise",
  "Rebranding",
  "Lancement de marque",
  "Startups",
  "Associations",
  "Commerces locaux",
];

export default function IdentiteVisuelleClient() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/">Accueil</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/services">Services</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/services/design">Design</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Identite Visuelle</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="relative bg-gradient-to-br from-fuchsia-500 via-purple-500 to-violet-600 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl">
                <Fingerprint className="w-8 h-8" />
              </div>
              <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">Design</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Identite Visuelle</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Logo et charte graphique pour une image de marque coherente et memorable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                <Clock className="w-5 h-5" />
                <span>Livraison : 7-14 jours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Les piliers de votre identite</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ce qui est inclus</h2>
              <p className="text-gray-600 mb-8">
                Une identite visuelle complete pour une communication professionnelle et coherente.
              </p>
              <ul className="space-y-4">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-fuchsia-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Ideal pour</h3>
              <ul className="space-y-3">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={[
        { q: "Combien coute la creation d'un logo professionnel ?", a: "La creation d'un logo professionnel avec charte graphique complete demarre a partir de 490€. Le tarif varie selon la complexite du projet et les livrables souhaites (declinaisons, supports print, etc.)." },
        { q: "Combien de propositions de logo vais-je recevoir ?", a: "Nous proposons 3 directions creatives distinctes basees sur le brief. Apres votre choix, 2 tours de revisions sont inclus pour affiner le logo retenu jusqu'a satisfaction complete." },
        { q: "Quels fichiers sont livres avec l'identite visuelle ?", a: "Vous recevez les fichiers sources (AI, EPS, PSD), les versions web optimisees (SVG, PNG), les declinaisons print (CMJN), un guide d'utilisation et la charte graphique complete au format PDF." },
        { q: "Puis-je utiliser mon logo sur tous les supports ?", a: "Absolument. Nous livrons toutes les declinaisons necessaires : fond clair, fond fonce, monochrome, favicon, reseaux sociaux, carte de visite, etc. Votre logo est utilisable partout sans restriction." },
      ]} />

      <section className="py-20 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pret a creer votre identite ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Donnez a votre marque une image forte et reconnaissable.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <Link href="/contact">Demander un devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
