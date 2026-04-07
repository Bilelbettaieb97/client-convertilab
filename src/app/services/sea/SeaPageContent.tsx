"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, CheckCircle, TrendingUp, Search, Clock, Target, BarChart3, Zap, DollarSign, Users, Eye, Star } from "lucide-react";
import ServiceFAQ from "@/components/services/ServiceFAQ";

const services = [
  { id: "google-ads", icon: <Search className="w-8 h-8" />, title: "Google Ads", subtitle: "Publicite sur le reseau Google",
    description: "Google Ads vous permet d'apparaitre instantanement en tete des resultats de recherche. Ideal pour generer du trafic qualifie rapidement et mesurer precisement votre retour sur investissement.",
    features: ["Campagnes Search (mots-cles)", "Google Shopping (e-commerce)", "Display (bannieres)", "YouTube Ads", "Remarketing dynamique", "Optimisation continue", "Reporting hebdomadaire"],
    benefits: [{ icon: <Target className="w-5 h-5" />, title: "Ciblage precis", desc: "Touchez les personnes qui recherchent vos services" }, { icon: <Zap className="w-5 h-5" />, title: "Resultats immediats", desc: "Trafic des le premier jour de campagne" }, { icon: <BarChart3 className="w-5 h-5" />, title: "ROI mesurable", desc: "Suivez chaque euro investi et son retour" }, { icon: <DollarSign className="w-5 h-5" />, title: "Budget maitrise", desc: "Payez uniquement au clic, ajustez en temps reel" }],
    deliveryTime: "Mise en place: 5-7 jours" },
  { id: "meta-ads", icon: <Users className="w-8 h-8" />, title: "Meta Ads", subtitle: "Publicite Facebook & Instagram",
    description: "Meta Ads vous permet de toucher votre audience ideale sur Facebook et Instagram avec des formats creatifs engageants. Parfait pour developper votre notoriete et generer des conversions.",
    features: ["Campagnes Facebook Ads", "Campagnes Instagram Ads", "Ciblage demographique avance", "Audiences similaires (Lookalike)", "Creatifs visuels optimises", "A/B testing continu", "Retargeting personnalise"],
    benefits: [{ icon: <Users className="w-5 h-5" />, title: "Audience massive", desc: "3 milliards d'utilisateurs actifs mensuels" }, { icon: <Eye className="w-5 h-5" />, title: "Formats creatifs", desc: "Stories, Reels, carrousels, videos..." }, { icon: <Target className="w-5 h-5" />, title: "Ciblage fin", desc: "Interets, comportements, donnees demographiques" }, { icon: <BarChart3 className="w-5 h-5" />, title: "Pixel de suivi", desc: "Mesurez les conversions avec precision" }],
    deliveryTime: "Mise en place: 5-7 jours" },
];

const process = [
  { step: "1", title: "Audit & Strategie", desc: "Analyse de votre marche et definition des objectifs" },
  { step: "2", title: "Configuration", desc: "Creation des comptes, pixels et tracking" },
  { step: "3", title: "Creation", desc: "Redaction des annonces et visuels" },
  { step: "4", title: "Lancement", desc: "Mise en ligne des campagnes" },
  { step: "5", title: "Optimisation", desc: "Ajustements continus pour maximiser le ROI" },
  { step: "6", title: "Reporting", desc: "Rapports detailles et recommandations" },
];

export default function SeaPageContent() {
  const router = useRouter();
  return (
    <main className="pt-16">
      <div className="container mx-auto px-4 sm:px-6 py-4"><Breadcrumb><BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Accueil</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services">Services</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>SEA</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList></Breadcrumb></div>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20"><div className="container mx-auto px-4 sm:px-6"><div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-6"><TrendingUp className="w-5 h-5 text-amber-600" /><span className="text-sm font-medium text-amber-700 dark:text-amber-300">Publicite en ligne</span></div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">SEA & Publicite Digitale</h1>
        <p className="text-xl text-muted-foreground mb-8">Boostez votre visibilite et generez des leads qualifies avec des campagnes publicitaires optimisees sur Google et les reseaux sociaux.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={() => router.push("/contact")} size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600">Lancer ma campagne <ArrowRight className="ml-2 w-4 h-4" /></Button>
          <Button asChild variant="outline" size="lg"><Link href="/portfolio">Voir nos resultats</Link></Button>
        </div>
      </div></div></section>

      <section className="py-20"><div className="container mx-auto px-4 sm:px-6"><div className="grid lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} id={service.id} className="p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-6"><div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white flex-shrink-0">{service.icon}</div><div><p className="text-sm font-medium text-amber-600 mb-1">{service.subtitle}</p><h2 className="text-2xl font-bold text-foreground">{service.title}</h2></div></div>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <div className="mb-6"><h3 className="font-semibold mb-3">Ce qui est inclus:</h3><div className="grid grid-cols-2 gap-2">{service.features.map((feature, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{feature}</span></div>))}</div></div>
            <div className="mb-6 p-4 rounded-xl bg-muted/50"><h3 className="font-semibold mb-3">Les avantages:</h3><div className="space-y-3">{service.benefits.map((benefit, i) => (<div key={i} className="flex items-start gap-3"><div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 flex-shrink-0">{benefit.icon}</div><div><p className="font-medium text-sm text-foreground">{benefit.title}</p><p className="text-xs text-muted-foreground">{benefit.desc}</p></div></div>))}</div></div>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="w-4 h-4" />{service.deliveryTime}</div>
              <Button onClick={() => router.push("/contact")} className="bg-gradient-to-r from-amber-500 to-orange-600">Demander un devis <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </div>
          </div>
        ))}
      </div></div></section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12"><h2 className="text-3xl font-bold text-foreground mb-4">Notre methodologie</h2><p className="text-muted-foreground">Un processus eprouve pour des campagnes performantes</p></div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">{process.map((item, index) => (<div key={index} className="text-center"><div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold mx-auto mb-4">{item.step}</div><h3 className="font-semibold text-foreground mb-1">{item.title}</h3><p className="text-xs text-muted-foreground">{item.desc}</p></div>))}</div>
      </div></section>

      <section className="py-20 bg-card border-y border-border"><div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12"><h2 className="text-3xl font-bold text-foreground mb-4">Ce que nos clients disent</h2><p className="text-muted-foreground">Des campagnes qui generent des resultats concrets</p></div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[{ quote: "Nos campagnes Google Ads generent maintenant un ROAS de 5.2. Chaque euro investi en rapporte plus de 5. Un game changer pour notre business.", name: "Nicolas F.", role: "Fondateur, E-shop Sport", initial: "N" },
            { quote: "Les campagnes Meta Ads nous ont permis de multiplier par 4 nos demandes de devis. Le ciblage est d'une precision redoutable.", name: "Claire V.", role: "Gerante, Institut Beaute", initial: "C" }].map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-muted/50 border border-border">
              <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-muted-foreground mb-4 italic">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">{t.initial}</div><div><p className="font-medium text-foreground">{t.name}</p><p className="text-sm text-muted-foreground">{t.role}</p></div></div>
            </div>
          ))}
        </div>
      </div></section>

      <ServiceFAQ faqs={[
        { q: "Quel budget faut-il pour commencer en Google Ads ou Meta Ads ?", a: "Nous recommandons un budget minimum de 500 euros/mois par plateforme pour obtenir des resultats significatifs. A cela s'ajoutent les frais de gestion. Nous optimisons chaque euro investi pour maximiser votre retour." },
        { q: "Quelle est la difference entre Google Ads et Meta Ads ?", a: "Google Ads cible les utilisateurs qui recherchent activement vos produits/services (intention d'achat). Meta Ads (Facebook/Instagram) cible des audiences basees sur leurs interets et comportements (decouverte). Les deux sont complementaires." },
        { q: "Combien de temps pour voir des resultats avec la publicite en ligne ?", a: "Contrairement au SEO, les resultats sont quasi immediats. Des le lancement, vos annonces sont visibles. L'optimisation des campagnes prend 2 a 4 semaines pour atteindre les performances optimales." },
        { q: "Comment mesurez-vous le retour sur investissement (ROI) ?", a: "Nous installons un tracking complet (Google Analytics, pixels, conversions) pour mesurer chaque action : ventes, leads, appels. Vous recevez des rapports detailles avec le cout par conversion et le ROAS." },
        { q: "Puis-je arreter mes campagnes a tout moment ?", a: "Oui, il n'y a aucun engagement de duree. Vous pouvez ajuster, pauser ou arreter vos campagnes a tout moment. Nous recommandons cependant 3 mois minimum pour optimiser pleinement les performances." }
      ]} />

      {/* Outil gratuit */}
      <div className="container mx-auto px-4 sm:px-6 my-8">
        <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900">Estimez votre ROI Ads gratuitement</p>
              <p className="text-sm text-gray-600">Simulez vos campagnes Google Ads et Meta Ads en quelques clics</p>
            </div>
            <Link href="/estimateur-ads" className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-semibold hover:bg-amber-700 whitespace-nowrap">
              Estimer mon ROI <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600"><div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Pret a booster votre visibilite ?</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">Discutons de vos objectifs et creons ensemble une strategie publicitaire sur-mesure.</p>
        <Button onClick={() => router.push("/contact")} size="lg" className="bg-white text-amber-600 hover:bg-white/90">Contactez-nous <ArrowRight className="ml-2 w-4 h-4" /></Button>
      </div></section>
    </main>
  );
}
