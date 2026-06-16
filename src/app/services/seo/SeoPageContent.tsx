"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, CheckCircle, Search, TrendingUp, ClipboardCheck, Clock, Target, FileSearch, Zap, Star } from "lucide-react";
import ServiceFAQ from "@/components/services/ServiceFAQ";

const services = [
  { id: "referencement-seo", icon: <TrendingUp className="w-8 h-8" />, title: "Référencement SEO", subtitle: "Positionnement durable sur Google",
    description: "Le SEO est un investissement long terme qui généré du trafic qualifié sans coût publicitaire. Nous optimisons votre site pour qu'il apparaisse en tete des résultats de recherche sur vos mots-cles stratégiques.",
    features: ["Audit SEO initial complet", "Recherche de mots-cles", "Optimisation on-page", "Création de contenu SEO", "Stratégie de netlinking", "Suivi des positions", "Rapports mensuels detailles"],
    benefits: [{ title: "Trafic qualifié", desc: "Visiteurs reellement intéressés par vos services" }, { title: "ROI durable", desc: "Investissement rentable sur le long terme" }, { title: "Credibilite", desc: "Etre en premiere page renforce la confiance" }, { title: "Visibilité 24/7", desc: "Votre site travaille pour vous en permanence" }],
    deliveryTime: "Engagement 6 mois minimum" },
  { id: "audit-seo", icon: <ClipboardCheck className="w-8 h-8" />, title: "Audit SEO", subtitle: "Diagnostic complet de votre visibilité",
    description: "Avant d'optimiser, il faut comprendre. Notre audit SEO analyse en profondeur votre site pour identifier les freins a votre référencement et les opportunites de croissance.",
    features: ["Analyse technique complète", "Audit de contenu", "Analyse des backlinks", "Etude de la concurrence", "Analyse des mots-cles actuels", "Rapport detaille (30+ pages)", "Plan d'action priorise"],
    benefits: [{ title: "Vision claire", desc: "Comprendre votre situation actuelle" }, { title: "Priorités définies", desc: "Savoir par ou commencer" }, { title: "Budget optimisé", desc: "Investir la ou ca compte" }, { title: "Roadmap", desc: "Plan d'action concret a suivre" }],
    deliveryTime: "5-7 jours" },
];

const stats = [
  { value: "93%", label: "des experiences en ligne commencent par un moteur de recherche" },
  { value: "75%", label: "des utilisateurs ne depassent jamais la 1ere page" },
  { value: "14.6%", label: "taux de conversion moyen du SEO (vs 1.7% pour le print)" },
];

export default function SeoPageContent() {
  const router = useRouter();
  return (
    <main className="pt-16">
      <div className="container mx-auto px-4 sm:px-6 py-4"><Breadcrumb><BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Accueil</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services">Services</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>SEO</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList></Breadcrumb></div>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20"><div className="container mx-auto px-4 sm:px-6"><div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-6"><Search className="w-5 h-5 text-emerald-600" /><span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Référencement naturel</span></div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">SEO & Visibilité</h1>
        <p className="text-xl text-muted-foreground mb-8">Dominez les résultats de recherche et attirez des clients qualifiés grâce à une stratégie SEO sur-mesure.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={() => router.push("/contact")} size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600">Demander un audit gratuit <ArrowRight className="ml-2 w-4 h-4" /></Button>
          <Button asChild variant="outline" size="lg"><Link href="/blog">Lire nos conseils SEO</Link></Button>
        </div>
      </div></div></section>

      <section className="py-16 bg-card border-y border-border"><div className="container mx-auto px-4 sm:px-6"><div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (<div key={index} className="text-center"><p className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</p><p className="text-sm text-muted-foreground">{stat.label}</p></div>))}
      </div></div></section>

      {/* Outil gratuit */}
      <div className="container mx-auto px-4 sm:px-6 my-8">
        <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900">Testez votre SEO gratuitement</p>
              <p className="text-sm text-gray-600">Audit complet de 60+ points en 60 secondes</p>
            </div>
            <Link href="/seo-check" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 whitespace-nowrap">
              Lancer l&apos;audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20"><div className="container mx-auto px-4 sm:px-6"><div className="space-y-32">
        {services.map((service) => (
          <div key={service.id} id={service.id}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mx-auto mb-6">{service.icon}</div>
              <p className="text-sm font-medium text-emerald-600 mb-2">{service.subtitle}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
              <p className="text-muted-foreground text-lg">{service.description}</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="p-8 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-6"><FileSearch className="w-6 h-6 text-emerald-600" /><h3 className="text-xl font-semibold">Ce qui est inclus</h3></div>
                <div className="space-y-3">{service.features.map((feature, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{feature}</span></div>))}</div>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-4"><Clock className="w-5 h-5 text-emerald-600" /><span className="font-medium">{service.deliveryTime}</span></div>
                  <Button onClick={() => router.push("/contact")} className="w-full bg-gradient-to-r from-emerald-500 to-teal-600">Demander un devis <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </div>
              </div>
              <div className="p-8 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-6"><Zap className="w-6 h-6 text-emerald-600" /><h3 className="text-xl font-semibold">Les bénéfices</h3></div>
                <div className="space-y-6">{service.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4"><div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0"><Target className="w-5 h-5 text-emerald-600" /></div><div><p className="font-medium text-foreground">{benefit.title}</p><p className="text-sm text-muted-foreground">{benefit.desc}</p></div></div>
                ))}</div>
              </div>
            </div>
          </div>
        ))}
      </div></div></section>

      <section className="py-20 bg-card border-y border-border"><div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12"><h2 className="text-3xl font-bold text-foreground mb-4">Ce que nos clients disent</h2><p className="text-muted-foreground">Des résultats SEO concrets et mesurables</p></div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[{ quote: "Nous sommes passes de la page 5 a la 1ere position sur nos mots-cles principaux en 6 mois. Notre trafic organique a augmente de 340%.", name: "Antoine C.", role: "Directeur, Agence Immo", initial: "A" },
            { quote: "L'audit SEO a revele des problemes techniques qu'on ignorait. Après les corrections, notre taux de conversion a double.", name: "Laura P.", role: "E-commerce Manager", initial: "L" }].map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-muted/50 border border-border">
              <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-muted-foreground mb-4 italic">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">{t.initial}</div><div><p className="font-medium text-foreground">{t.name}</p><p className="text-sm text-muted-foreground">{t.role}</p></div></div>
            </div>
          ))}
        </div>
      </div></section>

      {/* CONTENU SEO ENRICHI */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Le SEO en 2026 : ce que vous devez absolument savoir</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: "L'IA change le SEO", content: "Google Gemini, SGE et les résultats génératifs transforment les SERPs. Les sites avec du contenu structuré, des données Schema.org et une autorité thématique forte sont prioritairement affichés. Notre approche intègre ces nouvelles règles dès aujourd'hui.", icon: "🤖" },
              { title: "SEO local = croissance rapide", content: "46% des recherches Google ont une intention locale. Apparaître dans le Local Pack de Google Maps pour votre ville est souvent plus rentable que ranker sur des mots-clés nationaux. Nous optimisons simultanément votre présence locale et nationale.", icon: "📍" },
              { title: "Core Web Vitals = classement", content: "Depuis 2021, Google utilise la vitesse et l'expérience utilisateur (LCP, INP, CLS) comme facteurs de classement directs. Un site lent perd des positions — et des clients. Nos optimisations techniques garantissent des scores PageSpeed 90+.", icon: "⚡" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Notre agence SEO à Paris gère des stratégies pour des secteurs variés : e-commerce, services B2B, professions libérales, artisans, restaurants. Chaque projet commence par un <strong>audit SEO complet de 150+ points</strong> pour identifier précisément vos opportunités de croissance organique.
            </p>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={[
        { q: "Combien de temps faut-il pour voir des résultats en SEO ?", a: "Les premiers résultats SEO apparaissent généralement entre 3 et 6 mois. Le SEO est un investissement long terme : une fois les positions acquises, elles génèrent du trafic qualifié de maniere durable sans coût publicitaire." },
        { q: "Quelle est la différence entre SEO et SEA ?", a: "Le SEO (référencement naturel) vise des résultats organiques durables sans payer au clic. Le SEA (publicité payante) offre une visibilité immediate mais s'arrete des que vous stoppez les dépenses. Idealement, les deux stratégies se completent." },
        { q: "Un audit SEO est-il vraiment utile ?", a: "Oui, l'audit SEO identifie les freins techniques, les opportunites de mots-cles et les axes d'amélioration prioritaires. C'est la base de toute stratégie SEO efficace et permet d'eviter de travailler a l'aveugle." },
        { q: "Pourquoi faire appel a une agence SEO plutot que de faire soi-meme ?", a: "Le SEO evolue constamment (algorithmes Google, bonnes pratiques). Une agence apporte l'expertise technique, les outils professionnels et l'experience de dizaines de projets pour maximiser vos résultats." },
        { q: "Garantissez-vous la premiere position sur Google ?", a: "Aucune agence serieuse ne peut garantir la position 1, car Google seul decide du classement. En revanche, nous garantissons une méthodologie eprouvee, un suivi rigoureux et une amélioration mesurable de votre visibilité." }
      ]} />

      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600"><div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Prêt à dominer Google ?</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">Commencez par un audit gratuit de votre visibilité actuelle.</p>
        <Button onClick={() => router.push("/contact")} size="lg" className="bg-white text-emerald-600 hover:bg-white/90">Obtenir mon audit gratuit <ArrowRight className="ml-2 w-4 h-4" /></Button>
      </div></section>
    </main>
  );
}
