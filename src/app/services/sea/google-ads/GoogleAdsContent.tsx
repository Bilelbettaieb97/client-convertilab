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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Agence Google Ads Paris</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">Campagnes Search, Shopping et Display pour capter vos clients en Île-de-France et partout en France au bon moment.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100"><Link href="/contact">Demander un audit gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"><Clock className="w-5 h-5" /><span>Resultats : Immediat</span></div>
          </div>
        </div>
      </div></section>

      {/* STATS */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "x4.8", label: "ROAS moyen constaté" },
              { value: "−38%", label: "Coût par lead vs moyenne" },
              { value: "+150", label: "campagnes gérées" },
              { value: "24h", label: "délai de lancement" },
            ].map((s, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl font-black text-blue-600 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI GOOGLE ADS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Pourquoi Google Ads est indispensable pour votre business en 2026</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Google traite plus de <strong>8,5 milliards de recherches par jour</strong>. Quand un prospect cherche votre service ou votre produit, il est en intention d'achat active — c'est le moment idéal pour apparaître. Contrairement aux réseaux sociaux où vous interrompez l'utilisateur, Google Ads répond à une demande déjà formulée.</p>
                <p>Le référencement SEO naturel prend 6 à 12 mois pour produire des résultats. Google Ads, lui, génère du trafic qualifié <strong>dès le premier jour</strong>. Pour les entreprises qui ont besoin de clients rapidement, c'est souvent le levier le plus efficace.</p>
                <p>Notre équipe gère des campagnes Google Ads pour des PME parisiennes depuis 2019. Nos clients atteignent en moyenne un ROAS (retour sur investissement publicitaire) de <strong>x4.8</strong>, ce qui signifie que pour 1€ investi en publicité, ils génèrent 4,8€ de chiffre d'affaires.</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Google Ads vs SEO : lequel choisir ?</h3>
              <div className="space-y-3">
                {[
                  { label: "Délai de résultats", ads: "Immédiat (24h)", seo: "3 à 12 mois" },
                  { label: "Contrôle du budget", ads: "Total, ajustable", seo: "Indirect" },
                  { label: "Ciblage géographique", ads: "Au kilomètre près", seo: "Par page/contenu" },
                  { label: "Mots-clés compétitifs", ads: "Accessible dès J+1", seo: "Difficile / long" },
                  { label: "Arrêt des dépenses", ads: "Stop = arrêt du trafic", seo: "Trafic durable" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 text-sm p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">{row.label}</span>
                    <span className="text-blue-600 font-semibold">{row.ads}</span>
                    <span className="text-gray-500">{row.seo}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">Notre recommandation : combiner Google Ads (résultats immédiats) + SEO (croissance durable) pour un ROI maximal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Types de campagnes Google Ads</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (<div key={index} className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"><div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 mb-4">{feature.icon}</div><h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3><p className="text-muted-foreground text-sm">{feature.description}</p></div>))}</div>
      </div></section>

      <section className="py-20"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center">
        <div><h2 className="text-3xl font-bold mb-6 text-foreground">Ce qui est inclus</h2><p className="text-muted-foreground mb-8">Une gestion complete de vos campagnes Google Ads pour maximiser votre ROI.</p>
          <ul className="space-y-4">{includes.map((item, index) => (<li key={index} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-foreground">{item}</span></li>))}</ul></div>
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl"><h3 className="text-xl font-semibold mb-4 text-foreground">Ideal pour</h3>
          <ul className="space-y-3">{idealFor.map((item, index) => (<li key={index} className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-blue-600" /><span className="text-foreground">{item}</span></li>))}</ul></div>
      </div></div></section>

      {/* NOTRE MÉTHODE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-foreground text-center">Notre méthode Google Ads en 5 étapes</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Une approche structurée qui élimine les dépenses inutiles et maximise chaque euro investi.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: "1", title: "Audit & objectifs", desc: "Analyse de votre marché, vos concurrents et vos objectifs de CA. Définition du budget optimal et du ROAS cible." },
              { num: "2", title: "Recherche mots-clés", desc: "Identification des requêtes à fort potentiel commercial. Exclusion des mots-clés négatifs pour éviter le gaspillage." },
              { num: "3", title: "Création campagnes", desc: "Structure de compte propre, groupes d'annonces thématiques, landing pages dédiées pour maximiser le Quality Score." },
              { num: "4", title: "Tracking précis", desc: "Configuration Google Ads + GA4 + Consent Mode v2. Chaque conversion est tracée : appel, formulaire, achat." },
              { num: "5", title: "Optimisation continue", desc: "Ajustement des enchères, A/B test des annonces, expansion des mots-clés performants, rapport hebdomadaire." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-black text-xl flex items-center justify-center mx-auto mb-3">{step.num}</div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-foreground text-center">Secteurs où Google Ads performe le mieux</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { sector: "E-commerce", detail: "Shopping Ads + Search. ROAS moyen x5.2 sur nos comptes e-commerce.", kw: "chaussures femme pas cher, achat canapé livraison rapide" },
              { sector: "Services B2B", detail: "Lead generation via Search. CPL optimisé sur les requêtes à forte intention.", kw: "logiciel comptabilité PME, expert-comptable Paris" },
              { sector: "Professions libérales", detail: "Ciblage géographique précis pour médecins, avocats, architectes.", kw: "dermatologue Paris 16, avocat droit des affaires" },
              { sector: "Artisans & BTP", detail: "Campagnes locales hyper-ciblées. Les artisans génèrent 3-8 devis/mois.", kw: "plombier urgence Paris, peintre maison Île-de-France" },
              { sector: "Immobilier", detail: "Campagnes Search + Display pour agences immobilières et promoteurs.", kw: "appartement à vendre Paris, agence immobilière Lyon" },
              { sector: "Formation & coaching", detail: "Ciblage par intentions d'apprentissage. Conversions sur formulaire d'inscription.", kw: "formation Excel Paris, coaching carrière en ligne" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-blue-100">
                <h3 className="font-bold text-foreground mb-2">{s.sector}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.detail}</p>
                <p className="text-xs text-blue-500 italic">ex : {s.kw}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
