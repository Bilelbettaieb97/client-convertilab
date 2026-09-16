"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SITE } from "@/lib/constants";
import { User, Mail, Building2, Phone, ArrowRight, ArrowLeft, CheckCircle2, Send, Globe, ShoppingCart, FileText, Search, Calendar, Megaphone, Bot, RefreshCw, MapPin, Sparkles, HelpCircle, BellRing, Users, type LucideIcon } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  project: string;

  main_challenge: string;
  timeline: string;
  message: string;
  urgency: string;
}

const STORAGE_KEY = "convertilab_contact_form";

interface Choix {
  value: string;
  label: string;
  icon: LucideIcon;
  desc: string;
}

/**
 * Étape 1 : les quatre pôles de l'agence (même ordre que src/data/poles.ts).
 * La valeur part dans `project` (colonne texte libre de contact_submissions
 * et champ `fields.project` de /api/notify).
 */
const projectTypes: Choix[] = [
  { value: "site", label: "Un site internet", icon: Globe, desc: "Vitrine, e-commerce, landing, refonte" },
  { value: "publicite", label: "De la publicité", icon: Megaphone, desc: "Google, Meta, TikTok, Pinterest, LinkedIn" },
  { value: "seo-ia", label: "Être trouvé sur Google et dans les IA", icon: Search, desc: "SEO, fiche Google, ChatGPT" },
  { value: "crm", label: "Un CRM et des relances", icon: Users, desc: "HubSpot, Salesforce, Pipedrive, IA" },
];

/**
 * Étape 2 : une précision adaptée au besoin choisi. La valeur part dans
 * `main_challenge` (colonne texte existante, auparavant figée à « non_specifie »).
 */
const precisions: Record<string, { question: string; options: Choix[] }> = {
  site: {
    question: "Quel type de site ?",
    options: [
      { value: "site-vitrine", label: "Site vitrine", icon: Globe, desc: "Présenter votre activité" },
      { value: "site-ecommerce", label: "E-commerce", icon: ShoppingCart, desc: "Vendre en ligne" },
      { value: "landing-page", label: "Landing page", icon: FileText, desc: "Une page qui convertit" },
      { value: "refonte", label: "Refonte", icon: RefreshCw, desc: "Moderniser un site existant" },
    ],
  },
  publicite: {
    question: "Sur quelle plateforme ?",
    options: [
      { value: "google-ads", label: "Google Ads", icon: Search, desc: "Être vu dès la recherche" },
      { value: "meta-ads", label: "Meta Ads", icon: Megaphone, desc: "Facebook et Instagram" },
      { value: "social-ads", label: "TikTok, Pinterest, LinkedIn", icon: Sparkles, desc: "Autres réseaux" },
      { value: "a-definir", label: "Je ne sais pas encore", icon: HelpCircle, desc: "Nous vous conseillons" },
    ],
  },
  "seo-ia": {
    question: "Quel est votre objectif ?",
    options: [
      { value: "seo-local", label: "Fiche Google et avis", icon: MapPin, desc: "Être trouvé près de chez vous" },
      { value: "referencement", label: "Référencement naturel", icon: Search, desc: "Monter dans Google" },
      { value: "visibilite-ia", label: "Visibilité dans les IA", icon: Sparkles, desc: "ChatGPT, Perplexity, AI Overviews" },
      { value: "audit-seo", label: "Audit SEO", icon: FileText, desc: "Savoir d'où vous partez" },
    ],
  },
  crm: {
    question: "Par quoi commencer ?",
    options: [
      { value: "mise-en-place-crm", label: "Mettre en place un CRM", icon: Users, desc: "HubSpot, Salesforce, Pipedrive ou un autre" },
      { value: "relances-rdv", label: "Relances automatiques", icon: BellRing, desc: "Devis, rendez-vous, sans y penser" },
      { value: "devis-emails", label: "IA sur les devis et avis", icon: Bot, desc: "Répondre même la nuit" },
      { value: "a-definir", label: "Je ne sais pas encore", icon: HelpCircle, desc: "Nous vous conseillons" },
    ],
  },
};

const trouverBesoin = (value: string) => projectTypes.find((p) => p.value === value);
const trouverPrecision = (besoin: string, value: string) =>
  precisions[besoin]?.options.find((o) => o.value === value);

/** Valeurs de l'étape 1 (`projectTypes`), réutilisables par les pages pôles. */
export type BesoinInitial = "site" | "publicite" | "seo-ia" | "crm";

interface ContactFormProps {
  /**
   * Présélectionne le besoin (étape 1) et ouvre directement l'étape 2.
   * Utilisé par les pages pôles : le visiteur a déjà choisi son sujet.
   */
  besoinInitial?: BesoinInitial;
  /**
   * Version resserrée pour le hero de l'accueil : ligne « Étape x sur 3 »
   * retirée (les trois pastilles la disent déjà) et cartes de l'étape 1 plus
   * basses, pour que le formulaire fasse la hauteur de la colonne de texte.
   */
  compact?: boolean;
}

const ContactForm = ({ besoinInitial, compact = false }: ContactFormProps = {}) => {
  const [step, setStep] = useState(besoinInitial ? 2 : 1);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    project: besoinInitial ?? "",
    main_challenge: "",
    timeline: "",
    message: "",
    urgency: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const totalSteps = 3;

  // Load saved data from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({
          ...prev,
          name: parsed.name || "",
          email: parsed.email || "",
          company: parsed.company || "",
          phone: parsed.phone || "",
        }));
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Save contact info to localStorage when it changes
  useEffect(() => {
    if (formData.name || formData.email || formData.company || formData.phone) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
      }));
    }
  }, [formData.name, formData.email, formData.company, formData.phone]);

  const validateStep1 = () => {
    if (!formData.project) {
      toast({ title: "Choisissez votre besoin", variant: "destructive" });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    return true;
  };

  const validateStep3 = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s+()-]{10,}$/;

    if (!formData.name.trim()) {
      toast({ title: "Nom requis", variant: "destructive" });
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Email invalide", variant: "destructive" });
      return false;
    }
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      toast({ title: "Téléphone requis (10 chiffres minimum)", variant: "destructive" });
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Import à la demande : supabase-js (~49 Ko gz) ne pèse pas sur le
      // chargement initial de l'accueil, il n'est requis qu'à la soumission.
      const { supabase } = await import("@/lib/supabase/client");
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      // Non-bloquant : Pipedrive est la source de verite pour le lead. Une panne
      // d'enregistrement en base ne doit pas faire perdre la demande.
      if (error) console.error("[supabase] contact_submissions:", error.message);

      // Non-bloquant : si la notification échoue, on continue quand même
      fetch("/api/notify", {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          fields: {
            project: formData.project,
            main_challenge: formData.main_challenge,
            // Libellés lisibles pour la note Pipedrive et l'email interne.
            besoin: trouverBesoin(formData.project)?.label ?? "",
            precision: trouverPrecision(formData.project, formData.main_challenge)?.label ?? "",
            timeline: formData.timeline,
            message: formData.message,
            urgency: formData.urgency,
          },
        }),
      }).catch((err) => console.error("[notify] erreur envoi:", err));

      const w = window as Window & { trackFormConversion?: () => void };
      if (typeof w.trackFormConversion === "function") {
        w.trackFormConversion();
      }

      // Trigger confetti celebration
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        // disableForReducedMotion : aucune animation pour les personnes qui les ont réduites.
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#8b5cf6', '#ec4899', '#a855f7', '#f472b6'],
          disableForReducedMotion: true
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#8b5cf6', '#ec4899', '#a855f7', '#f472b6'],
          disableForReducedMotion: true
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();

      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontactons sous 24 h.",
      });

      setStep(4); // Go to confirmation screen
    } catch {
      toast({
        title: "Erreur",
        description: "Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
      {/* Header */}
      {/* En-tête en violet uni : le dégradé violet → rose est réservé au bouton principal de l'écran. */}
      <div className={`px-4 sm:px-5 py-2.5 sm:py-3 ${step === 4 ? 'bg-green-600' : 'bg-primary'}`}>
        <p className="text-white font-bold text-base sm:text-lg text-center">
          {step === 4 ? 'Demande envoyée !' : 'Estimation en 2 minutes'}
        </p>
        <p className="text-white text-xs text-center mt-0.5">
          {step === 4 ? 'Merci pour votre confiance' : 'Réponse sous 24 h'}
        </p>
      </div>

      {/* Progress Bar - hidden on confirmation */}
      {step <= totalSteps && (
        <div className="px-4 sm:px-5 pt-3 pb-1">
          <div className="relative">
            {/* Background bar */}
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              {/* Animated progress fill */}
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              >
              </div>
            </div>

            {/* Step indicators */}
            <div className="flex justify-between mt-2">
              {[
                { num: 1, label: "Besoin" },
                { num: 2, label: "Précision" },
                { num: 3, label: "Contact" }
              ].map((s) => (
                <div key={s.num} className="flex flex-col items-center">
                   <div className={`
                    w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs
                    transition-all duration-500 ease-out transform
                    ${s.num < step
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-100'
                      : s.num === step
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/40 scale-110 ring-4 ring-purple-200 dark:ring-purple-900'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 scale-95'}
                  `}>
                    {s.num < step ? (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 animate-scale-in" />
                    ) : (
                      <span className={s.num === step ? 'animate-pulse motion-reduce:animate-none' : ''}>{s.num}</span>
                    )}
                  </div>
                  <span className={`mt-1 text-xs font-medium transition-all duration-300 ${
                    s.num < step ? 'text-purple-600' : s.num === step ? 'text-purple-700 font-semibold' : 'text-slate-600'
                  }`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {!compact && (
            <div className="text-center mt-2">
              <span className="text-xs text-slate-500">
                Étape <span className="font-bold text-purple-600">{step}</span> sur <span className="font-bold">{totalSteps}</span>
              </span>
            </div>
          )}
        </div>
      )}

      {/* Reassurance badges - hidden on confirmation */}
      {step <= totalSteps && (
        <div className="px-4 sm:px-5 pb-2">
          <div className="flex flex-wrap justify-center gap-2 text-[10px] sm:text-xs">
            <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">100% gratuit</span>
            <span className="bg-pink-50 text-pink-700 px-2 py-1 rounded-full font-medium">Sans engagement</span>
            <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">Vous parlez au fondateur</span>
          </div>
        </div>
      )}

      <div className="p-4 sm:p-5 pt-1">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Project Type */}
          {step === 1 && (
            <div className="space-y-3 sm:space-y-4 animate-fade-in">
              <div className="text-center mb-3 sm:mb-4">
                {/* role="heading" : titre d'étape pour les lecteurs d'écran, sans H3 avant le premier H2 de la page. */}
                <p role="heading" aria-level={2} className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Votre besoin</p>
                <p className="text-slate-500 text-[10px] sm:text-xs mt-0.5">De quoi avez-vous besoin en premier ?</p>
              </div>

              <div className={`grid grid-cols-2 ${compact ? 'gap-3' : 'gap-3 sm:gap-4'}`}>
                {projectTypes.map((type) => {
                  const IconComponent = type.icon;
                  const isSelected = formData.project === type.value;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, project: type.value, main_challenge: formData.project === type.value ? formData.main_challenge : "" })}
                      aria-pressed={isSelected}
                      className={`${compact ? 'p-4' : 'p-4 sm:p-5'} rounded-xl sm:rounded-2xl text-center transition-all duration-300 border-2 ${
                        isSelected
                          ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 shadow-lg shadow-purple-500/20 scale-[1.02]'
                          : 'border-slate-200 dark:border-slate-700 hover:border-purple-300 bg-white dark:bg-slate-800 hover:shadow-md'
                      }`}
                    >
                      <div className={`${compact ? 'w-10 h-10 mb-2' : 'w-12 h-12 sm:w-14 sm:h-14 mb-3'} rounded-xl mx-auto flex items-center justify-center transition-all ${
                        isSelected ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                      }`}>
                        <IconComponent className={compact ? 'w-5 h-5' : 'w-6 h-6 sm:w-7 sm:h-7'} />
                      </div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{type.label}</p>
                      <p className="text-slate-500 text-[10px] sm:text-xs mt-1">{type.desc}</p>
                    </button>
                  );
                })}
              </div>

              <Button
                type="button"
                onClick={nextStep}
                className={`w-full ${compact ? 'h-12' : 'h-12 sm:h-14'} bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25`}
              >
                Continuer
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          )}

          {/* Step 2: précision adaptée au besoin choisi */}
          {step === 2 && (() => {
            const besoin = trouverBesoin(formData.project);
            const groupe = precisions[formData.project];
            const BesoinIcon = besoin?.icon || Globe;
            return (
            <div className="space-y-4 sm:space-y-5 animate-fade-in">
              <div className="text-center mb-4 sm:mb-6">
                <p role="heading" aria-level={2} className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Une précision</p>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">{groupe?.question ?? "Précisez votre besoin"}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-3 mb-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500 text-white">
                    <BesoinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{besoin?.label || "Votre besoin"}</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs">{besoin?.desc}</p>
                  </div>
                </div>
              </div>

              {groupe && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">{groupe.question}</p>
                    <span className="text-xs text-slate-600">Optionnel</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {groupe.options.map((o) => {
                      const IconComponent = o.icon;
                      const isSelected = formData.main_challenge === o.value;
                      return (
                        <button
                          key={o.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, main_challenge: isSelected ? "" : o.value })}
                          aria-pressed={isSelected}
                          className={`relative min-h-11 p-3 sm:p-4 rounded-xl text-left transition-all duration-300 group ${
                            isSelected
                              ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-[1.02]'
                              : 'bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-300 hover:shadow-md hover:scale-[1.01]'
                          }`}
                        >
                          <div className="flex items-start gap-2 sm:gap-3">
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              isSelected ? 'bg-white/20' : 'bg-pink-100 dark:bg-pink-900/30'
                            }`}>
                              <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${isSelected ? 'text-white' : 'text-pink-600 dark:text-pink-400'}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`font-bold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                {o.label}
                              </p>
                              <p className={`text-xs ${isSelected ? 'text-white' : 'text-slate-500'}`}>
                                {o.desc}
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="text-center py-2">
                <p className="text-xs text-slate-600 italic">
                  Cette précision nous aide à préparer une réponse utile dès le premier échange
                </p>
              </div>

              <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="flex-1 h-12 sm:h-14 rounded-xl border-2 text-sm"
                >
                  <ArrowLeft className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                  Retour
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 h-12 sm:h-14 bg-purple-600 hover:bg-purple-700 rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25 text-sm"
                >
                  Continuer
                  <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>
            );
          })()}

          {/* Step 3: Contact Info & Message */}
          {step === 3 && (
            <div className="space-y-3 sm:space-y-4 animate-fade-in">
              <div className="text-center mb-3 sm:mb-4">
                <p role="heading" aria-level={2} className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Vos coordonnées</p>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">Pour vous recontacter rapidement</p>
              </div>

              {/* Project Summary */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500 text-white">
                    {(() => {
                      const IconComponent = trouverBesoin(formData.project)?.icon || Globe;
                      return <IconComponent className="w-4 h-4" />;
                    })()}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{trouverBesoin(formData.project)?.label}</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs">
                      {trouverPrecision(formData.project, formData.main_challenge)?.label}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Fields */}
              <div className="space-y-2 sm:space-y-3">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                    <Input
                      placeholder="Votre nom *"
                      aria-label="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-9 h-11 sm:h-12 text-sm bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                    <Input
                      type="email"
                      placeholder="votre@email.com *"
                      aria-label="Votre email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-9 h-11 sm:h-12 text-sm bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="relative group">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                    <Input
                      placeholder="Votre entreprise (optionnel)"
                      aria-label="Votre entreprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="pl-9 h-11 sm:h-12 text-sm bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                    <Input
                      type="tel"
                      placeholder="Votre téléphone *"
                      aria-label="Votre téléphone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-9 h-11 sm:h-12 text-sm bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              <Textarea
                placeholder="Décrivez brièvement votre projet (optionnel)"
                aria-label="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={2}
                className="bg-slate-50 dark:bg-slate-800 border-0 rounded-xl text-sm focus:ring-2 focus:ring-purple-500 resize-none"
              />

              <div className="flex gap-2 sm:gap-3">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="flex-1 h-12 sm:h-14 rounded-xl border-2 text-sm"
                >
                  <ArrowLeft className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                  Retour
                </Button>
                <Button
                  type="button"
                  onClick={(e) => {
                    if (validateStep3()) {
                      handleSubmit(e);
                    }
                  }}
                  disabled={isSubmitting}
                  className="flex-1 h-12 sm:h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 text-sm"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Envoi...
                    </span>
                  ) : (
                    <>
                      <Send className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Envoyer
                    </>
                  )}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-500 pt-1 sm:pt-2">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500" />
                  Réponse sous 24 h
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500" />
                  100% gratuit
                </span>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation Screen */}
          {step === 4 && (
            <div className="py-6 sm:py-8 animate-fade-in text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center animate-scale-in">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Merci {formData.name.split(' ')[0]} !
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-6 max-w-sm mx-auto">
                Votre demande a bien été envoyée. Nous vous recontactons sous <span className="font-semibold text-purple-600">24 heures</span>.
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-4 mb-6 text-left">
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-3">Récapitulatif de votre demande :</h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-purple-500" />
                    <span>{trouverBesoin(formData.project)?.label}</span>
                  </div>
                  {formData.main_challenge && (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span>Précision : {trouverPrecision(formData.project, formData.main_challenge)?.label}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-500" />
                    <span>{formData.email}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  type="button"
                  onClick={() => window.open(SITE.calendly, '_blank')}
                  className="w-full h-12 sm:h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 text-sm"
                >
                  <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Réserver un appel maintenant
                </Button>

                <Button
                  type="button"
                  onClick={() => {
                    setFormData({
                      name: "", email: "", company: "", phone: "",
                      project: "", main_challenge: "",
                      timeline: "", message: "", urgency: ""
                    });
                    setStep(1);
                  }}
                  variant="outline"
                  className="w-full h-10 sm:h-12 rounded-xl border-2 text-sm text-slate-600"
                >
                  Nouvelle demande
                </Button>
              </div>

              <p className="text-[10px] sm:text-xs text-slate-400 mt-4">
                Nous vous répondons à {formData.email}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
