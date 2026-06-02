"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, CheckCircle, Palette, PenTool, Fingerprint, Clock, Eye, Layers, Star } from "lucide-react";
import ServiceFAQ from "@/components/services/ServiceFAQ";

const services = [
  {
    id: "design-ui-ux", icon: <PenTool className="w-8 h-8" />, title: "Design UI/UX", subtitle: "Interfaces intuitives et esthetiques",
    description: "Le design UI/UX place l'utilisateur au centre de la conception. Nous creons des interfaces qui non seulement seduisent visuellement, mais guident naturellement vos visiteurs vers la conversion.",
    features: ["Recherche utilisateur (UX Research)", "Wireframes et architecture", "Prototypes interactifs", "Design system complet", "Tests utilisateurs", "Iterations illimitees", "Fichiers sources (Figma)"],
    process: [{ step: "Decouverte", desc: "Analyse de vos besoins et de votre audience" }, { step: "Architecture", desc: "Structure et parcours utilisateur" }, { step: "Wireframes", desc: "Maquettes fonctionnelles" }, { step: "Design", desc: "Creation visuelle complete" }, { step: "Prototype", desc: "Version interactive testable" }, { step: "Validation", desc: "Tests et ajustements" }],
    deliveryTime: "10-20 jours"
  },
  {
    id: "identite-visuelle", icon: <Fingerprint className="w-8 h-8" />, title: "Identite Visuelle", subtitle: "Logo et charte graphique complete",
    description: "Votre identite visuelle est le premier contact avec vos clients. Nous creons des logos memorables et des chartes graphiques coherentes qui refletent vos valeurs et vous differencient de la concurrence.",
    features: ["Creation de logo (3 propositions)", "Charte graphique complete", "Palette de couleurs", "Typographies definies", "Declinaisons tous supports", "Guide d'utilisation", "Fichiers vectoriels (AI, SVG, PDF)"],
    process: [{ step: "Brief", desc: "Comprehension de votre univers" }, { step: "Recherche", desc: "Benchmark et inspiration" }, { step: "Concepts", desc: "3 directions creatives" }, { step: "Selection", desc: "Choix et affinage" }, { step: "Finalisation", desc: "Declinaisons et charte" }, { step: "Livraison", desc: "Fichiers et documentation" }],
    deliveryTime: "10-15 jours"
  }
];

export default function DesignPageContent() {
  const router = useRouter();
  return (
    <main className="pt-16">
      <div className="container mx-auto px-4 sm:px-6 py-4"><Breadcrumb><BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Accueil</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink asChild><Link href="/services">Services</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Design</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList></Breadcrumb></div>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20"><div className="container mx-auto px-4 sm:px-6"><div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 mb-6"><Palette className="w-5 h-5 text-pink-600" /><span className="text-sm font-medium text-pink-700 dark:text-pink-300">Design & Identite</span></div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Design & Identite Visuelle</h1>
        <p className="text-xl text-muted-foreground mb-8">Des creations visuelles qui marquent les esprits et transforment votre image de marque en avantage concurrentiel.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={() => router.push("/contact")} size="lg" className="bg-gradient-to-r from-pink-500 to-rose-600">Demander un devis gratuit <ArrowRight className="ml-2 w-4 h-4" /></Button>
          <Button asChild variant="outline" size="lg"><Link href="/portfolio">Voir nos creations</Link></Button>
        </div>
      </div></div></section>

      <section className="py-20"><div className="container mx-auto px-4 sm:px-6"><div className="space-y-32">
        {services.map((service) => (
          <div key={service.id} id={service.id}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white mx-auto mb-6">{service.icon}</div>
              <p className="text-sm font-medium text-pink-600 mb-2">{service.subtitle}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
              <p className="text-muted-foreground text-lg">{service.description}</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="p-8 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-6"><Layers className="w-6 h-6 text-pink-600" /><h3 className="text-xl font-semibold">Ce qui est inclus</h3></div>
                <div className="space-y-3">{service.features.map((feature, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{feature}</span></div>))}</div>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-4"><Clock className="w-5 h-5 text-pink-600" /><span className="font-medium">Delai: {service.deliveryTime}</span></div>
                  <Button onClick={() => router.push("/contact")} className="w-full bg-gradient-to-r from-pink-500 to-rose-600">Demander un devis <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </div>
              </div>
              <div className="p-8 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-6"><Eye className="w-6 h-6 text-pink-600" /><h3 className="text-xl font-semibold">Notre processus</h3></div>
                <div className="space-y-6">{service.process.map((item, i) => (
                  <div key={i} className="flex gap-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</div><div><p className="font-medium text-foreground">{item.step}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div></div>
                ))}</div>
              </div>
            </div>
          </div>
        ))}
      </div></div></section>

      <section className="py-20 bg-muted/30"><div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12"><h2 className="text-3xl font-bold text-foreground mb-4">Ce que nos clients disent</h2><p className="text-muted-foreground">Des identites visuelles qui ont transforme leur image</p></div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { quote: "Notre nouveau logo et notre charte graphique ont completement transforme notre image. Nos clients nous percoivent maintenant comme une entreprise premium.", name: "Julie R.", role: "Directrice, Cabinet Conseil", initial: "J" },
            { quote: "Le design UX de notre application a fait chuter notre taux de rebond de 60%. Les utilisateurs restent et convertissent. Excellent travail !", name: "Thomas B.", role: "CEO, AppMobile", initial: "T" },
          ].map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-muted-foreground mb-4 italic">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold">{t.initial}</div><div><p className="font-medium text-foreground">{t.name}</p><p className="text-sm text-muted-foreground">{t.role}</p></div></div>
            </div>
          ))}
        </div>
      </div></section>

      <ServiceFAQ faqs={[
        { q: "Quelle est la difference entre UI et UX design ?", a: "L'UX (User Experience) se concentre sur l'experience utilisateur : parcours, ergonomie, facilite d'utilisation. L'UI (User Interface) concerne l'aspect visuel : couleurs, typographies, boutons. Les deux sont indissociables pour un design efficace." },
        { q: "Pourquoi investir dans une identite visuelle professionnelle ?", a: "Votre identite visuelle est le premier contact avec vos clients. Un logo et une charte graphique professionnels inspirent confiance, renforcent la memorisation de votre marque et vous differencient de la concurrence." },
        { q: "Combien de propositions de logo recevrai-je ?", a: "Nous proposons 3 directions creatives distinctes pour votre logo. Apres votre choix, nous affinons la version retenue avec 2 tours de revisions inclus pour aboutir au resultat parfait." },
        { q: "Quels fichiers me seront livres ?", a: "Vous recevez tous les fichiers sources (AI, PSD, PDF) ainsi que les declinaisons optimisees pour le web, le print et les reseaux sociaux. Un guide d'utilisation complet accompagne la livraison." },
        { q: "Travaillez-vous avec Figma ?", a: "Oui, Figma est notre outil principal pour le design UI/UX. Vous accedez a vos maquettes en temps reel, pouvez commenter et suivre l'avancement. Les prototypes interactifs sont egalement realises sur Figma." }
      ]} />

      {/* Outil gratuit */}
      <div className="container mx-auto px-4 sm:px-6 my-8">
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

      <section className="py-12 bg-muted/30"><div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Ressources design pour votre site</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/typographie-web-choisir-polices" className="bg-background border border-border rounded-xl p-5 hover:border-pink-400/60 hover:shadow-md transition-all group flex gap-4 items-start">
            <div className="w-10 h-10 bg-pink-50 dark:bg-pink-900/20 rounded-lg flex items-center justify-center flex-shrink-0 text-lg">🔤</div>
            <div><div className="font-semibold text-foreground group-hover:text-pink-600 transition-colors mb-1">Typographie web : choisir les bonnes polices →</div><p className="text-sm text-muted-foreground">Google Fonts, lisibilité, hiérarchie visuelle : le guide complet pour choisir vos polices comme un pro.</p></div>
          </Link>
          <Link href="/design-score" className="bg-background border border-border rounded-xl p-5 hover:border-pink-400/60 hover:shadow-md transition-all group flex gap-4 items-start">
            <div className="w-10 h-10 bg-pink-50 dark:bg-pink-900/20 rounded-lg flex items-center justify-center flex-shrink-0 text-lg">🎨</div>
            <div><div className="font-semibold text-foreground group-hover:text-pink-600 transition-colors mb-1">Tester le score design de votre site →</div><p className="text-sm text-muted-foreground">Outil gratuit : analysez votre design en 30 secondes et obtenez un score avec les points à améliorer.</p></div>
          </Link>
        </div>
      </div></section>

      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600"><div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Pret a transformer votre image ?</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">Discutons de votre projet de design et creons ensemble une identite qui vous ressemble.</p>
        <Button onClick={() => router.push("/contact")} size="lg" className="bg-white text-pink-600 hover:bg-white/90">Contactez-nous <ArrowRight className="ml-2 w-4 h-4" /></Button>
      </div></section>
    </main>
  );
}
