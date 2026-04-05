"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase/client";
import confetti from "canvas-confetti";
import {
  Check,
  Clock,
  Users,
  Zap,
  Star,
  ArrowRight,
  Phone,
  Sparkles,
  Shield,
  Award,
  TrendingUp,
} from "lucide-react";

const TOTAL_SPOTS = 10;

export default function OffreSpecialeClient() {
  const { toast } = useToast();
  const [spotsRemaining, setSpotsRemaining] = useState(TOTAL_SPOTS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [isReserved, setIsReserved] = useState(false);

  useEffect(() => {
    const fetchSpots = async () => {
      const { count } = await supabase
        .from("offer_reservations")
        .select("*", { count: "exact", head: true });
      if (count !== null) {
        setSpotsRemaining(Math.max(2, TOTAL_SPOTS - count));
      }
    };
    fetchSpots();

    const channel = supabase
      .channel("offer-reservations")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "offer_reservations" }, () => {
        setSpotsRemaining((prev) => Math.max(2, prev - 1));
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (spotsRemaining <= 0) {
      toast({ title: "Offre epuisee", description: "Desole, toutes les places ont ete prises.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const phoneDigits = formData.phone.replace(/\D/g, "");
      if (phoneDigits.length < 6) {
        toast({ title: "Numero invalide", description: "Veuillez entrer un numero de telephone valide.", variant: "destructive" });
        setIsSubmitting(false);
        return;
      }
      const { error } = await supabase.from("offer_reservations").insert({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: `+33 ${phoneDigits}`,
        company: formData.company.trim(),
      });
      if (error) {
        if (error.code === "23505") {
          toast({ title: "Email deja enregistre", description: "Vous avez deja reserve votre place !", variant: "destructive" });
        } else throw error;
      } else {
        await supabase.functions.invoke("notify-contact", {
          body: { type: "offer", name: formData.name.trim(), email: formData.email.trim().toLowerCase(), phone: `+33 ${phoneDigits}`, company: formData.company.trim() },
        });
        const duration = 3000;
        const end = Date.now() + duration;
        const frame = () => {
          confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ["#8b5cf6", "#ec4899"] });
          confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ["#8b5cf6", "#ec4899"] });
          if (Date.now() < end) requestAnimationFrame(frame);
        };
        frame();
        setIsReserved(true);
        toast({ title: "Place reservee !", description: "Nous vous contacterons sous 24h pour demarrer votre projet." });
      }
    } catch {
      toast({ title: "Erreur", description: "Une erreur est survenue. Veuillez reessayer.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: Zap, text: "Site livre en 7 jours" },
    { icon: Star, text: "Design 100% personnalise" },
    { icon: Phone, text: "Support dedie inclus" },
    { icon: Check, text: "Hebergement 1 an offert" },
  ];

  const included = [
    "Site vitrine responsive (mobile + desktop)",
    "Jusqu'a 5 pages",
    "Formulaire de contact",
    "Optimisation SEO de base",
    "Certificat SSL (HTTPS)",
    "Hebergement 1 an inclus",
    "Formation a la gestion du site",
    "Support technique 30 jours",
  ];

  const testimonials = [
    { stars: 5, text: "Un site livre super vite, tres pro. Resultat : plus de demandes que jamais.", author: "Sarah", role: "Coach bien-etre" },
    { stars: 5, text: "J'avais un petit budget, et pourtant le site est digne d'une vraie agence.", author: "Julien", role: "Artisan plombier" },
    { stars: 5, text: "Mon business avait besoin d'un site moderne : excellent travail.", author: "Melissa", role: "Entrepreneure" },
  ];

  const badges = [
    { icon: Award, text: "+150 sites crees", color: "text-purple-400" },
    { icon: Star, text: "4,9/5 satisfaction client", color: "text-yellow-400" },
    { icon: TrendingUp, text: "+80 petites entreprises", color: "text-green-400" },
  ];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Site Web Professionnel - Offre Speciale",
    description: "Site web moderne et responsive avec design personnalise, livre en 7 jours. Hebergement 1 an inclus, support 30 jours.",
    offers: {
      "@type": "Offer",
      price: "300",
      priceCurrency: "EUR",
      availability: "https://schema.org/LimitedAvailability",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-lg sm:text-xl">Converti<span className="text-purple-400">Lab</span></Link>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-red-500/20 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-red-500/30">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
            <span className="text-red-400 font-bold text-xs sm:text-base">{spotsRemaining} places</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-gray-400 hover:text-white">Accueil</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-600" />
              <BreadcrumbItem><BreadcrumbPage className="text-white">Offre Speciale</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-yellow-500/20 text-yellow-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-yellow-500/30">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">OFFRE LIMITEE – </span>{spotsRemaining} PLACES
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Site web pro pour{" "}<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">300eur</span>
              </h1>
              <p className="text-base sm:text-xl text-gray-300 mb-3 sm:mb-4 leading-relaxed">Un site moderne, rapide et optimise pour convertir vos visiteurs en clients.</p>
              <p className="text-sm sm:text-lg text-green-400 font-semibold mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /><span>Paiement uniquement apres validation.</span>
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                    <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg flex-shrink-0"><feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" /></div>
                    <span className="text-xs sm:text-base">{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="hidden lg:block bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
                <div className="flex items-center justify-between">
                  <div><p className="text-gray-400 text-sm">Prix habituel</p><p className="text-2xl text-gray-500 line-through">890eur</p></div>
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                  <div><p className="text-purple-400 text-sm font-medium">Prix offre speciale</p><p className="text-4xl font-bold text-white">300eur</p></div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">-66%</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
                {!isReserved ? (
                  <>
                    <div className="text-center mb-4 sm:mb-8">
                      <div className="flex justify-center gap-1 sm:gap-2 mb-3 sm:mb-4 flex-wrap">
                        {[...Array(TOTAL_SPOTS)].map((_, i) => (
                          <div key={i} className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all ${i < (TOTAL_SPOTS - spotsRemaining) ? "bg-red-500/30 text-red-400 border border-red-500/50" : "bg-green-500/30 text-green-400 border border-green-500/50"}`}>
                            {i < (TOTAL_SPOTS - spotsRemaining) ? "✓" : i + 1}
                          </div>
                        ))}
                      </div>
                      <p className="text-white font-semibold text-sm sm:text-base"><span className="text-green-400">{spotsRemaining}</span> places disponibles sur {TOTAL_SPOTS}</p>
                    </div>
                    <h2 className="text-lg sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">Reservez votre place maintenant</h2>
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                      <div><Label htmlFor="name" className="text-gray-300 text-sm sm:text-base">Nom complet *</Label><Input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-sm sm:text-base h-10 sm:h-11" placeholder="Jean Dupont" /></div>
                      <div><Label htmlFor="email" className="text-gray-300 text-sm sm:text-base">Email *</Label><Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-sm sm:text-base h-10 sm:h-11" placeholder="jean@exemple.com" /></div>
                      <div><Label htmlFor="phone" className="text-gray-300 text-sm sm:text-base">Telephone *</Label><Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-sm sm:text-base h-10 sm:h-11" placeholder="06 12 34 56 78" /></div>
                      <div><Label htmlFor="company" className="text-gray-300 text-sm sm:text-base">Entreprise</Label><Input id="company" type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-sm sm:text-base h-10 sm:h-11" placeholder="Nom de votre entreprise" /></div>
                      <Button type="submit" disabled={isSubmitting || spotsRemaining <= 0} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 sm:py-6 text-sm sm:text-lg font-bold rounded-xl transition-all transform hover:scale-[1.02]">
                        {isSubmitting ? "Reservation..." : spotsRemaining <= 0 ? "Offre epuisee" : "Reserver ma place a 300eur"}
                      </Button>
                      <p className="text-center text-green-400 text-xs sm:text-sm font-medium flex items-center justify-center gap-1 sm:gap-2"><Shield className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /><span>Paiement apres validation du projet.</span></p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"><Check className="w-10 h-10 text-green-400" /></div>
                    <h2 className="text-2xl font-bold text-white mb-4">Place reservee !</h2>
                    <p className="text-gray-300 mb-6">Merci {formData.name} ! Nous vous contacterons sous 24h pour discuter de votre projet.</p>
                    <Link href="/"><Button variant="outline" className="border-white/20 text-white hover:bg-white/10">Retour a l&apos;accueil</Button></Link>
                  </div>
                )}
              </Card>
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 text-yellow-400">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" /><span className="text-xs sm:text-sm">Offre jusqu&apos;a epuisement des places</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 sm:py-16 px-3 sm:px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4">Ils nous font confiance</h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">Decouvrez ce que nos clients disent de notre travail</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">{[...Array(testimonial.stars)].map((_, i) => (<Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />))}</div>
                <p className="text-gray-300 mb-3 sm:mb-4 italic text-sm sm:text-base">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">{testimonial.author[0]}</div>
                  <div><p className="text-white font-semibold text-sm sm:text-base">{testimonial.author}</p><p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 bg-white/5 px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10">
                <badge.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${badge.color}`} /><span className="text-white font-semibold text-xs sm:text-base">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">Ce qui est inclus</h2>
          <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                <div className="p-0.5 sm:p-1 bg-green-500/20 rounded-full flex-shrink-0"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" /></div>
                <span className="text-gray-200 text-xs sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Questions frequentes</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              { q: "Pourquoi ce prix si bas ?", a: "C'est une offre de lancement limitee pour constituer notre portfolio. Une fois les 10 places prises, le prix reviendra a 890eur." },
              { q: "Quel type de site puis-je avoir ?", a: "Un site vitrine de 1 a 5 pages. Parfait pour artisans, freelances, PME." },
              { q: "Combien de temps pour avoir mon site ?", a: "Votre site sera livre en 7 jours ouvres apres validation de la maquette." },
              { q: "Y a-t-il des frais caches ?", a: "Non. Le prix de 300eur inclut tout : design, developpement, hebergement 1 an, et certificat SSL." },
              { q: "Quand dois-je payer ?", a: "Aucun paiement a la reservation ! Vous ne payez qu'apres validation du projet final." },
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10">
                <h3 className="text-sm sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-xs sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-8 sm:py-12 px-3 sm:px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Ne manquez pas cette opportunite !</h2>
          <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">Seulement <strong>{spotsRemaining} places</strong> restantes</p>
          <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-bold">Reserver ma place</Button>
          <p className="text-white/60 text-xs sm:text-sm mt-3 sm:mt-4">Paiement apres validation</p>
        </div>
      </section>

      <footer className="py-6 sm:py-8 px-3 sm:px-4 bg-gray-900 border-t border-white/10">
        <div className="container mx-auto text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2024 ConvertiLab. Tous droits reserves.</p>
          <Link href="/" className="text-purple-400 hover:underline mt-2 inline-block">Retour au site principal</Link>
        </div>
      </footer>
    </div>
  );
}
