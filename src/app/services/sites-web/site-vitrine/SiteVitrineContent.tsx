"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Clock, Search, Palette, Globe, Users, Star, Shield, RotateCcw, Lock, Headphones, Phone, Award } from "lucide-react";
import ServiceCaseStudies from "@/components/services/ServiceCaseStudies";
import { SITE, PRICING } from "@/lib/constants";

const features = [
  { icon: <Palette className="w-6 h-6" />, title: "Design Sur-Mesure", description: "Un design unique qui reflete votre identite et vous differencie de la concurrence" },
  { icon: <Search className="w-6 h-6" />, title: "SEO Optimisé", description: "Référencement naturel pour apparaitre en premiere page Google sur vos mots-cles" },
  { icon: <Globe className="w-6 h-6" />, title: "Jusqu'a 5 Pages", description: "Accueil, services, a propos, contact, blog -- tout pour presenter votre activité" },
  { icon: <Users className="w-6 h-6" />, title: "UX Conversion", description: "Navigation pensee pour guider vos visiteurs vers la prise de contact" },
];

const includes = ["Jusqu'a 5 pages personnalisées", "Design sur-mesure unique", "Optimisation SEO complète", "Responsive mobile, tablette, desktop", "Formulaire de contact + Google Maps", "Blog intégré (optionnel)", "Hebergement 1 an inclus", "Support technique 3 mois"];

const processSteps = [
  { num: "01", title: "Consultation gratuite", desc: "On echange sur vos objectifs, votre cible et votre identite. Devis detaille sous 24h." },
  { num: "02", title: "Maquette & validation", desc: "Vous validez le design page par page. Modifications illimitees a cette étape." },
  { num: "03", title: "Développement", desc: "Integration pixel-perfect, contenu, SEO technique et optimisation performances." },
  { num: "04", title: "Livraison & formation", desc: "Mise en ligne, formation a l'administration, support technique inclus." },
];

const testimonials = [
  { quote: "Notre site vitrine nous apporte 80% de nos nouveaux clients. Les prospects nous trouvent sur Google et nous contactent directement.", result: "80% des nouveaux clients", name: "Pierre D.", role: "Artisan menuisier", initial: "P" },
  { quote: "En 3 mois, notre trafic organique a ete multiplie par 5. Le site nous a permis de nous positionner comme reference dans notre secteur.", result: "Trafic x5 en 3 mois", name: "Caroline M.", role: "Avocate, Cabinet juridique", initial: "C" },
  { quote: "Le design professionnel a completement change la perception de notre cabinet. Les clients nous prennent au serieux des le premier contact.", result: "+60% de demandes de devis", name: "Olivier B.", role: "Architecte d'interieur", initial: "O" },
];

const guarantees = [
  { icon: <RotateCcw className="w-5 h-5" />, title: "Satisfait ou retravaille", desc: "On retravaille gratuitement si le résultat ne correspond pas au brief valide." },
  { icon: <Lock className="w-5 h-5" />, title: "Prix fixe garanti", desc: "Le devis signe est le prix final. Aucun coût cache, aucune surprise." },
  { icon: <Shield className="w-5 h-5" />, title: "Livraison 10-15 jours", desc: "Délai garanti. 10% de remise en cas de retard de notre fait." },
  { icon: <Headphones className="w-5 h-5" />, title: "Support 3 mois", desc: "Support technique inclus pendant 3 mois. Reponse sous 24h." },
];

const faqs = [
  { q: "Quelle est la différence entre un site vitrine et une landing page ?", a: "Un site vitrine comporte plusieurs pages (accueil, services, a propos, contact, blog) pour presenter votre activité complète. Une landing page est une page unique optimisée pour convertir sur un objectif précis (campagne pub, lancement). Le site vitrine renforce votre credibilite globale." },
  { q: "Combien de temps faut-il pour créer mon site vitrine ?", a: "10 a 15 jours ouvres entre le brief valide et la mise en ligne. Ce délai inclut la maquette, le développement et la mise en ligne. Nous nous engageons contractuellement sur ce délai." },
  { q: "Mon site sera-t-il bien positionne sur Google ?", a: "Oui. Nous optimisons chaque page pour le SEO : balises meta, structure semantique, vitesse, sitemap, robots.txt. Nos clients constatent en moyenne une apparition en premiere page Google sur leurs mots-cles locaux sous 2-3 mois." },
  { q: "Puis-je modifier le contenu moi-meme ?", a: "Absolument. Nous vous formons a l'administration de votre site et vous fournissons une documentation. Pour les modifications complexes, notre support technique est disponible pendant 3 mois." },
  { q: "Y a-t-il des frais recurrents après la livraison ?", a: "L'hebergement de la premiere annee est inclus. Ensuite, le renouvellement coûte environ 10 euros/mois. Il n'y a aucun autre frais obligatoire." },
  { q: "Proposez-vous le paiement en plusieurs fois ?", a: "Oui, paiement en 2 ou 3 fois sans frais : un acompte au demarrage, le solde a la livraison (ou reparti sur 2 echeances)." },
];

export default function SiteVitrineContent() {
  return (
    <main className="pt-16">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb><BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Accueil</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services">Services</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services/sites-web">Sites Web</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>Site Vitrine</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList></Breadcrumb>
      </div>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6"><div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-pulse"><span className="w-2 h-2 rounded-full bg-accent" /><span className="text-sm font-semibold text-accent">3 creneaux disponibles ce mois-ci</span></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">Un Site Vitrine Qui <span className="text-primary">Attire Vos Clients Ideaux</span></h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Nos clients recoivent en moyenne <strong className="text-foreground">3x plus de demandes de contact</strong> après la mise en ligne. Design sur-mesure, SEO inclus.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg"><Link href="/contact">Obtenir mon devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6"><Link href="/portfolio">Voir nos realisations</Link></Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><div className="flex -space-x-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div><span className="font-medium text-foreground">4.9/5</span><span>sur 47 avis</span></div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /><span><strong className="text-foreground">+50</strong> clients satisfaits</span></div>
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /><span>Satisfaction <strong className="text-foreground">garantie</strong></span></div>
          </div>
        </div></div>
      </section>

      <section className="py-10 bg-primary"><div className="container mx-auto px-4 sm:px-6"><div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {[{ value: "10-15j", label: "Délai de livraison" }, { value: "5 pages", label: "Personnalisees" }, { value: "Top Google", label: "SEO optimisé" }, { value: "3 mois", label: "Support inclus" }].map((m, i) => (
          <div key={i}><p className="text-3xl sm:text-4xl font-black text-primary-foreground">{m.value}</p><p className="text-sm text-primary-foreground/70 mt-1">{m.label}</p></div>
        ))}
      </div></div></section>

      <section className="py-20"><div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-14"><h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Pourquoi un site vitrine professionnel change tout ?</h2><p className="text-muted-foreground max-w-2xl mx-auto">80% des consommateurs recherchent une entreprise en ligne avant de la contacter. Sans site, vous perdez des clients chaque jour.</p></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((f, i) => (
          <div key={i} className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow text-center"><div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">{f.icon}</div><h3 className="font-bold text-foreground mb-2">{f.title}</h3><p className="text-sm text-muted-foreground">{f.description}</p></div>
        ))}</div>
      </div></section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4 sm:px-6"><div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div><h2 className="text-3xl font-bold text-foreground mb-6">Tout est inclus, sans surprise</h2><p className="text-muted-foreground mb-8">Design, développement, SEO, hebergement et support : tout est compris dans le prix.</p>
          <div className="grid sm:grid-cols-2 gap-3">{includes.map((item, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" /><span className="text-sm text-foreground">{item}</span></div>))}</div></div>
        <div className="w-full max-w-md mx-auto"><div className="p-8 rounded-2xl border-2 border-primary bg-card shadow-xl relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">Le plus populaire</span></div>
          <div className="text-center mb-6"><p className="text-4xl font-black text-foreground">{PRICING.vitrine.label}</p><p className="text-sm text-muted-foreground mt-1">Prix fixe, sans surprise</p></div>
          <div className="flex items-center justify-center gap-2 mb-4"><Clock className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-foreground">Livraison : 10-15 jours</span></div>
          <div className="flex flex-wrap gap-2 justify-center mb-6">{["PME & artisans", "Professions liberales", "Restaurants"].map((tag, i) => (<span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>))}</div>
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base"><Link href="/contact">Demander mon devis gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          <p className="text-center text-xs text-muted-foreground mt-3">Paiement en 2-3x sans frais</p>
        </div></div>
      </div></div></section>

      {/* POURQUOI SITE VITRINE PRO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Qu&apos;est-ce qu&apos;un site vitrine professionnel en 2026 ?</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Un site vitrine est votre vitrine digitale permanente : disponible <strong>24h/24, 7j/7</strong>, il présente votre activité, vos services, vos réalisations et vos coordonnées aux prospects qui vous cherchent en ligne. Contrairement à un profil sur les réseaux sociaux, il vous appartient entièrement.</p>
              <p>En 2026, <strong>87% des consommateurs</strong> consultent internet avant de contacter une entreprise locale. Si vous n&apos;avez pas de site web professionnel — ou si le vôtre est daté, lent ou non-responsive — vous perdez des clients chaque jour au profit de vos concurrents qui ont fait ce choix.</p>
              <p>Chez ConvertiLab, nous créons des sites vitrines avec <strong>Next.js</strong>, la technologie utilisée par les plus grandes marques mondiales. Résultat : des sites ultra-rapides (score PageSpeed 90+), parfaitement optimisés pour Google, et dont vous êtes propriétaire à 100%.</p>
              <p>Un site vitrine bien conçu génère en moyenne <strong>3 à 8 demandes de devis par mois</strong> pour nos clients artisans, commerçants et professions libérales. C&apos;est un commercial qui travaille pour vous sans jamais prendre de vacances.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Site vitrine vs autres solutions</h3>
              <div className="space-y-2">
                {[
                  { label: "Vous appartient à 100%", vitrine: "✅ Oui", rs: "❌ Non" },
                  { label: "Visible sur Google", vitrine: "✅ SEO natif", rs: "⚠️ Limité" },
                  { label: "Image professionnelle", vitrine: "✅ Premium", rs: "❌ Générique" },
                  { label: "Indépendant des algorithmes", vitrine: "✅ Oui", rs: "❌ Non" },
                  { label: "Performance & vitesse", vitrine: "✅ 90+ PageSpeed", rs: "⚠️ Variable" },
                  { label: "Données visiteurs", vitrine: "✅ Analytics complet", rs: "⚠️ Partiel" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 text-sm p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">{row.label}</span>
                    <span className="text-green-600 font-medium">{row.vitrine}</span>
                    <span className="text-gray-400">{row.rs}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400">Comparaison : site vitrine pro vs présence uniquement sur réseaux sociaux</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Les technologies qui font la différence</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">Tous nos sites vitrines sont développés avec les technologies les plus performantes du marché, utilisées par Vercel, Notion et les licornes de la tech.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { tech: "Next.js 15", role: "Framework React dernière génération", benefit: "Vitesse de chargement × 4 vs WordPress" },
              { tech: "Tailwind CSS", role: "Design system moderne", benefit: "Cohérence visuelle parfaite sur tous les écrans" },
              { tech: "Vercel CDN", role: "Hébergement mondial", benefit: "Latence < 100ms depuis n'importe où en France" },
              { tech: "Framer Motion", role: "Animations fluides", benefit: "Expérience premium qui inspire confiance" },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 text-left">
                <div className="font-black text-purple-600 text-lg mb-1">{t.tech}</div>
                <div className="text-sm text-gray-500 mb-2">{t.role}</div>
                <div className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded font-medium">{t.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20"><div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12"><h2 className="text-3xl font-bold text-foreground mb-4">Votre site vitrine en 4 étapes</h2><p className="text-muted-foreground">Un processus clair et prévisible, du premier échange à la mise en ligne.</p></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">{processSteps.map((s, i) => (
          <div key={i} className="relative text-center"><div className="text-5xl font-black text-primary/15 mb-2">{s.num}</div><h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3><p className="text-sm text-muted-foreground">{s.desc}</p>{i < processSteps.length - 1 && <div className="hidden lg:block absolute top-8 -right-4 w-8 text-primary/30 text-2xl">&rarr;</div>}</div>
        ))}</div>
      </div></section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12"><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 mb-4"><Shield className="w-4 h-4 text-green-600" /><span className="text-sm font-semibold text-green-700 dark:text-green-300">Zero risque</span></div><h2 className="text-3xl font-bold text-foreground mb-4">Nos garanties</h2><p className="text-muted-foreground">Vous ne prenez aucun risque en travaillant avec nous.</p></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">{guarantees.map((g, i) => (
          <div key={i} className="text-center p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow"><div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4 text-green-600">{g.icon}</div><h3 className="font-bold text-foreground mb-2">{g.title}</h3><p className="text-sm text-muted-foreground">{g.desc}</p></div>
        ))}</div>
      </div></section>

      <ServiceCaseStudies category="site-vitrine" title="Nos sites vitrines realises" subtitle="Decouvrez les sites vitrines que nous avons créés pour nos clients" max={6} />

      <section className="py-20"><div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12"><h2 className="text-3xl font-bold text-foreground mb-4">Résultats concrets de nos clients</h2><p className="text-muted-foreground">Des sites vitrines qui ont transforme leur visibilité</p></div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{testimonials.map((t, i) => (
          <div key={i} className="p-6 rounded-2xl bg-card border border-border">
            <div className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold mb-4">{t.result}</div>
            <div className="flex items-center gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
            <p className="text-muted-foreground mb-4 italic text-sm">&quot;{t.quote}&quot;</p>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">{t.initial}</div><div><p className="font-medium text-foreground text-sm">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}</p></div></div>
          </div>
        ))}</div>
      </div></section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4 sm:px-6"><div className="max-w-3xl mx-auto">
        <div className="text-center mb-12"><h2 className="text-3xl font-bold text-foreground mb-4">Questions fréquentes</h2><p className="text-muted-foreground">Tout ce que vous devez savoir avant de vous lancer</p></div>
        <Accordion type="single" collapsible className="space-y-3">{faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card"><AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">{faq.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent></AccordionItem>
        ))}</Accordion>
      </div></div></section>

      <section className="py-20 bg-primary"><div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Prêt à créer votre site vitrine professionnel ?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">Recevez un devis personnalisé sous 24h. Consultation gratuite, sans engagement.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6"><Link href="/contact">Obtenir mon devis gratuit <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"><a href={`tel:${SITE.phone}`}><Phone className="mr-2 w-4 h-4" />Nous appeler</a></Button>
        </div>
        <p className="text-primary-foreground/60 text-sm mt-6">Reponse sous 24h - Prix fixe garanti - Paiement en 3x sans frais</p>
      </div></section>
    </main>
  );
}
