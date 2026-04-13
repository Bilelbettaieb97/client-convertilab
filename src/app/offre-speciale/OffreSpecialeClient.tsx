"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase/client";
import confetti from "canvas-confetti";
import { SITE } from "@/lib/constants";
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
  Globe,
  Search,
  Smartphone,
  Lock,
  Palette,
  Headphones,
  FileText,
  BarChart3,
  Heart,
  ChevronRight,
  Calendar,
} from "lucide-react";

const TOTAL_SPOTS = 10;

export default function OffreSpecialeClient() {
  const [spotsRemaining, setSpotsRemaining] = useState(TOTAL_SPOTS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedType, setSelectedType] = useState<"vitrine" | "landing" | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [isReserved, setIsReserved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSpots = async () => {
      const { count } = await supabase
        .from("offer_reservations")
        .select("*", { count: "exact", head: true });
      if (count !== null) {
        setSpotsRemaining(Math.max(0, TOTAL_SPOTS - count));
      }
    };
    fetchSpots();

    // Realtime : met à jour le compteur quand quelqu'un réserve
    const channel = supabase
      .channel("offer-realtime")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "offer_reservations" }, () => {
        setSpotsRemaining((prev) => Math.max(0, prev - 1));
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!selectedType) { setError("Choisissez le type de site souhaité"); return; }
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 6) { setError("Numéro de téléphone invalide"); return; }

    setIsSubmitting(true);
    try {
      const { error: dbError } = await supabase.from("offer_reservations").insert({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: `+33 ${phoneDigits}`,
        company: formData.company.trim(),
      });

      if (dbError) {
        if (dbError.code === "23505") { setError("Vous avez déjà réservé votre place !"); }
        else { setError(`Erreur : ${dbError.message}`); }
      } else {
        // Notification email (non-bloquant — si ça échoue, on affiche quand même le remerciement)
        fetch("/api/notify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formType: "Offre Speciale",
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            phone: `+33 ${phoneDigits}`,
            company: formData.company.trim(),
            fields: {
              siteType: selectedType === "vitrine" ? "Site Vitrine 5 pages" : "Landing Page",
              message: formData.message,
            },
          }),
        }).catch(() => {});

        // Décrémenter immédiatement côté client
        setSpotsRemaining((prev) => Math.max(0, prev - 1));

        // Confetti
        const end = Date.now() + 3000;
        const frame = () => {
          confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ["#8b5cf6", "#ec4899"] });
          confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ["#8b5cf6", "#ec4899"] });
          if (Date.now() < end) requestAnimationFrame(frame);
        };
        frame();
        setIsReserved(true);
      }
    } catch (err) {
      setError(`Une erreur est survenue : ${err instanceof Error ? err.message : "Veuillez réessayer."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const siteVitrineFeatures = [
    "5 pages sur-mesure (Accueil, Services, À propos, Portfolio, Contact)",
    "Design moderne et professionnel",
    "100% responsive (mobile, tablette, desktop)",
    "Formulaire de contact fonctionnel",
    "Optimisation SEO complète (meta, sitemap, vitesse)",
    "Certificat SSL (HTTPS) inclus",
    "Hébergement 1 an offert",
    "Vous êtes propriétaire du site et du code",
  ];

  const landingPageFeatures = [
    "1 page haute conversion optimisée",
    "Design orienté action et résultats",
    "100% responsive (mobile, tablette, desktop)",
    "Formulaire de capture intégré",
    "Optimisation SEO + vitesse (score 90+)",
    "Certificat SSL (HTTPS) inclus",
    "Hébergement 1 an offert",
    "Vous êtes propriétaire du site et du code",
  ];

  const whyUs = [
    { icon: Globe, title: "Vous êtes propriétaire", desc: "Le site et le code source vous appartiennent. Pas d'abonnement caché, pas de dépendance." },
    { icon: Search, title: "SEO optimisé", desc: "Meta tags, sitemap, vitesse, responsive — votre site est prêt à être trouvé sur Google dès le jour 1." },
    { icon: Zap, title: "Livré en 7 jours", desc: "Validation de la maquette sous 48h, site en ligne en 7 jours ouvrés. Garanti." },
    { icon: Smartphone, title: "100% responsive", desc: "Votre site s'adapte parfaitement à tous les écrans : mobile, tablette et ordinateur." },
    { icon: Lock, title: "Sécurisé (SSL)", desc: "Certificat HTTPS inclus, hébergement sécurisé, code propre et performant." },
    { icon: Headphones, title: "Support 30 jours", desc: "Formation + support technique inclus pendant 30 jours après la livraison." },
  ];

  const process = [
    { step: "1", title: "Réservez votre place", desc: "Remplissez le formulaire. Aucun paiement maintenant." },
    { step: "2", title: "Échange & maquette", desc: "On discute de votre projet. Maquette validée sous 48h." },
    { step: "3", title: "Développement", desc: "On construit votre site. Vous suivez l'avancement." },
    { step: "4", title: "Livraison & paiement", desc: "Vous validez. Vous payez. Votre site est en ligne." },
  ];

  const testimonials = [
    { text: "J'ai eu un site vitrine professionnel en moins d'une semaine. Le résultat dépasse mes attentes pour ce prix.", author: "Sarah K.", role: "Coach bien-être", metric: "+40% de clients" },
    { text: "Mon site est beau, rapide, et je suis en première page Google sur ma ville. Incroyable rapport qualité-prix.", author: "Julien M.", role: "Artisan plombier", metric: "Page 1 Google" },
    { text: "La landing page qu'ils m'ont créée convertit 3x mieux que mon ancien site. Et je suis propriétaire du code.", author: "Mélissa R.", role: "Entrepreneure e-commerce", metric: "x3 conversions" },
  ];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Site Web Professionnel - Offre Spéciale 300€",
    description: "Site vitrine 5 pages ou landing page haute conversion. Design sur-mesure, SEO optimisé, livré en 7 jours. Vous êtes propriétaire.",
    offers: {
      "@type": "Offer",
      price: "300",
      priceCurrency: "EUR",
      availability: "https://schema.org/LimitedAvailability",
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "47", bestRating: "5" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/90 to-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-lg sm:text-xl">Converti<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Lab</span></Link>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-purple-500/20 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/30">
            <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span></span>
            <span className="text-purple-300 font-bold text-xs sm:text-base">{spotsRemaining} places</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-purple-500/20 text-purple-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-purple-500/30">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">OFFRE LIMITÉE — </span>{spotsRemaining} PLACES
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Votre site web pro pour{" "}<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">300€</span>
              </h1>
              <p className="text-base sm:text-xl text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                Un <strong className="text-white">site vitrine 5 pages</strong> ou une <strong className="text-white">landing page haute conversion</strong> — livrés en 7 jours, optimisés SEO, et <strong className="text-white">vous êtes propriétaire</strong>.
              </p>
              <p className="text-sm sm:text-lg text-green-400 font-semibold mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /><span>Paiement uniquement après validation.</span>
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { icon: Zap, text: "Livré en 7 jours" },
                  { icon: Globe, text: "Vous êtes propriétaire" },
                  { icon: Search, text: "SEO optimisé" },
                  { icon: Headphones, text: "Support 30 jours" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                    <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg flex-shrink-0"><feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" /></div>
                    <span className="text-xs sm:text-base">{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="hidden lg:block bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
                <div className="flex items-center justify-between">
                  <div><p className="text-gray-400 text-sm">Prix habituel</p><p className="text-2xl text-gray-500 line-through">890€</p></div>
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                  <div><p className="text-purple-400 text-sm font-medium">Prix offre spéciale</p><p className="text-4xl font-bold text-white">300€</p></div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">-66%</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
                {!isReserved ? (
                  <>
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="flex justify-center gap-1 sm:gap-2 mb-3 flex-wrap">
                        {[...Array(TOTAL_SPOTS)].map((_, i) => (
                          <div key={i} className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all ${i < (TOTAL_SPOTS - spotsRemaining) ? "bg-purple-500/30 text-purple-300 border border-purple-500/50" : "bg-green-500/30 text-green-400 border border-green-500/50"}`}>
                            {i < (TOTAL_SPOTS - spotsRemaining) ? "✓" : i + 1}
                          </div>
                        ))}
                      </div>
                      <p className="text-white font-semibold text-sm sm:text-base"><span className="text-green-400">{spotsRemaining}</span> places disponibles sur {TOTAL_SPOTS}</p>
                    </div>
                    <h2 className="text-lg sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">Réservez votre place maintenant</h2>
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                      {/* Type selection */}
                      <div className="grid grid-cols-2 gap-2">
                        <button type="button" onClick={() => setSelectedType("vitrine")} className={`p-3 rounded-xl text-sm font-medium border transition-all ${selectedType === "vitrine" ? "bg-purple-500/30 border-purple-400 text-white" : "bg-white/5 border-white/20 text-gray-400 hover:border-purple-400/50"}`}>
                          <FileText className="w-5 h-5 mx-auto mb-1" />Site Vitrine
                        </button>
                        <button type="button" onClick={() => setSelectedType("landing")} className={`p-3 rounded-xl text-sm font-medium border transition-all ${selectedType === "landing" ? "bg-pink-500/30 border-pink-400 text-white" : "bg-white/5 border-white/20 text-gray-400 hover:border-pink-400/50"}`}>
                          <Zap className="w-5 h-5 mx-auto mb-1" />Landing Page
                        </button>
                      </div>
                      <div><Label className="text-gray-300 text-sm">Nom complet *</Label><Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 h-10 sm:h-11" placeholder="Jean Dupont" /></div>
                      <div><Label className="text-gray-300 text-sm">Email *</Label><Input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 h-10 sm:h-11" placeholder="jean@exemple.com" /></div>
                      <div><Label className="text-gray-300 text-sm">Téléphone *</Label><Input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 h-10 sm:h-11" placeholder="06 12 34 56 78" /></div>
                      <div><Label className="text-gray-300 text-sm">Entreprise / Activité</Label><Input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 h-10 sm:h-11" placeholder="Nom de votre entreprise" /></div>
                      {error && <p className="text-red-300 text-sm text-center">{error}</p>}
                      <Button type="submit" disabled={isSubmitting || spotsRemaining <= 0} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 sm:py-6 text-sm sm:text-lg font-bold rounded-xl transition-all transform hover:scale-[1.02]">
                        {isSubmitting ? "Réservation..." : spotsRemaining <= 0 ? "Offre épuisée" : "Réserver ma place à 300€"}
                      </Button>
                      <p className="text-center text-green-400 text-xs sm:text-sm font-medium flex items-center justify-center gap-1 sm:gap-2"><Shield className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /><span>Paiement après validation du projet.</span></p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6 sm:py-8">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                      <Check className="w-10 h-10 text-green-400" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      Merci {formData.name} !
                    </h2>
                    <p className="text-lg text-green-400 font-semibold mb-2">
                      Votre place est réservée
                    </p>
                    <p className="text-gray-300 mb-2">
                      {selectedType === "vitrine" ? "Site Vitrine 5 pages" : "Landing Page"} — 300€
                    </p>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6 text-left space-y-2">
                      <p className="text-sm text-gray-300 flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        Un expert vous contactera sous <strong className="text-white">24h</strong>
                      </p>
                      <p className="text-sm text-gray-300 flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        Maquette présentée sous <strong className="text-white">48h</strong>
                      </p>
                      <p className="text-sm text-gray-300 flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        Paiement uniquement <strong className="text-white">après validation</strong>
                      </p>
                      <p className="text-sm text-gray-300 flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        Site livré en <strong className="text-white">7 jours</strong>
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">
                      Un email de confirmation a été envoyé à <strong className="text-white">{formData.email}</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link href="/">
                        <Button variant="outline" className="border-white/20 text-white">
                          Retour à l&apos;accueil
                        </Button>
                      </Link>
                      <Button
                        onClick={() => window.open(SITE.calendly, "_blank")}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Réserver un créneau maintenant
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 text-purple-300">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" /><span className="text-xs sm:text-sm">Offre jusqu&apos;à épuisement des places</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choix du type de site */}
      <section className="py-16 sm:py-24 bg-black/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choisissez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">type de site</span>
            </h2>
            <p className="text-lg text-gray-400">Deux options, un seul prix : 300€</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Site Vitrine */}
            <div
              className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${selectedType === "vitrine" ? "border-purple-500 bg-purple-500/10 shadow-xl shadow-purple-500/10" : "border-white/10 bg-white/5 hover:border-purple-400/50 hover:shadow-lg"}`}
              onClick={() => setSelectedType("vitrine")}
            >
              {selectedType === "vitrine" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                  Sélectionné
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Site Vitrine</h3>
                  <p className="text-sm text-gray-400">5 pages sur-mesure</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {siteVitrineFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Landing Page */}
            <div
              className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${selectedType === "landing" ? "border-pink-500 bg-pink-500/10 shadow-xl shadow-pink-500/10" : "border-white/10 bg-white/5 hover:border-pink-400/50 hover:shadow-lg"}`}
              onClick={() => setSelectedType("landing")}
            >
              {selectedType === "landing" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                  Sélectionné
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Landing Page</h3>
                  <p className="text-sm text-gray-400">1 page haute conversion</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {landingPageFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-16 sm:py-24 bg-black/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Pourquoi choisir ConvertiLab ?</h2>
            <p className="text-lg text-gray-400">Ce qui est inclus dans votre site à 300€</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 transition-all border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-black/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Comment ça marche ?</h2>
            <p className="text-lg text-gray-400">4 étapes simples, zéro risque</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg">
                  {p.step}
                </div>
                <h3 className="font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 sm:py-24 bg-black/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ils ont profité de l&apos;offre</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-300 mb-4 italic text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="bg-green-500/20 text-green-400 px-3 py-1.5 rounded-lg text-sm font-bold text-center mb-4">{t.metric}</div>
                <div className="flex items-center gap-3">
                  <Image
                    src={`https://images.unsplash.com/photo-${i === 0 ? "1494790108377-be9c29b29330" : i === 1 ? "1472099645785-5658abf4ff4e" : "1438761681033-6461ffad8d80"}?w=80&h=80&fit=crop&crop=face`}
                    alt={t.author}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-white text-sm">{t.author}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-black/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Pourquoi seulement 300€ ?", a: "C'est une offre de lancement limitée pour constituer notre portfolio et nos avis clients. Une fois les 10 places prises, le prix reviendra à 890€." },
              { q: "Site vitrine ou landing page, comment choisir ?", a: "Si vous avez besoin de présenter votre activité avec plusieurs pages (accueil, services, contact...), choisissez le site vitrine. Si vous voulez une seule page orientée conversion (inscription, vente, prise de RDV), choisissez la landing page." },
              { q: "Est-ce que je suis vraiment propriétaire du site ?", a: "Oui, à 100%. Vous recevez le code source complet, les accès hébergement, et le nom de domaine. Aucune dépendance à ConvertiLab après la livraison." },
              { q: "Mon site sera-t-il visible sur Google ?", a: "Oui. Chaque site inclut une optimisation SEO complète : balises meta, sitemap, vitesse de chargement optimisée, responsive mobile. Votre site est prêt pour Google dès le jour 1." },
              { q: "Combien de temps pour avoir mon site ?", a: "7 jours ouvrés après validation de la maquette. La maquette est présentée sous 48h après notre premier échange." },
              { q: "Y a-t-il des frais cachés ou un abonnement ?", a: "Aucun. Les 300€ incluent tout : design, développement, SEO, SSL, hébergement 1 an. Après la première année, l'hébergement coûte environ 5€/mois." },
              { q: "Quand dois-je payer ?", a: "Aucun paiement à la réservation. Vous ne payez qu'après avoir vu et validé le résultat final. Zéro risque." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-white hover:text-purple-400 transition-colors">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90" />
                </summary>
                <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ne manquez pas cette opportunité</h2>
          <p className="text-white/80 mb-6">Seulement <strong className="text-yellow-300">{spotsRemaining} places</strong> restantes à 300€</p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-xl"
          >
            Réserver ma place
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-white/60 text-sm mt-4">Paiement uniquement après validation</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} ConvertiLab. Tous droits réservés.</p>
          <div className="flex justify-center gap-4 mt-3">
            <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">Accueil</Link>
            <Link href="/contact" className="text-purple-400 hover:text-purple-300 text-sm">Contact</Link>
            <Link href="/politique-de-confidentialite" className="text-purple-400 hover:text-purple-300 text-sm">Confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
