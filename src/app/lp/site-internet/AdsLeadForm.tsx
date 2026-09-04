"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, CheckCircle2, Sparkles, Star, ShieldCheck } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

const siteTypes = [
  { value: "site-vitrine", label: "Site vitrine" },
  { value: "site-ecommerce", label: "Boutique en ligne (e-commerce)" },
  { value: "landing-page", label: "Landing page" },
  { value: "je-ne-sais-pas", label: "Je ne sais pas encore" },
];

const perks = ["Réponse sous 24h", "Sans engagement", "100% gratuit"];

interface AdsLeadFormProps {
  /** Si défini (ex. "Restaurant"), le formulaire est dédié à un métier :
   *  le menu "type de site" est masqué (3 champs = plus de leads) et le
   *  métier est remonté dans le deal Pipedrive. */
  metier?: string;
  /** Clé de source pour le suivi (ex. "google-ads-lp-restaurant"). */
  sourceKey?: string;
  /** Titre du bloc formulaire (override). */
  title?: string;
  /** Sous-titre du bloc formulaire (override). */
  subtitle?: string;
  /** Couleur d'accent (dégradé) pour adapter le mood par métier. */
  accentClass?: string;
}

export default function AdsLeadForm({
  metier,
  sourceKey,
  title,
  subtitle,
  accentClass = "from-purple-600 to-pink-600",
}: AdsLeadFormProps = {}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [siteType, setSiteType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim() || !phone.trim() || !email.trim() || (!metier && !siteType)) {
      setError("Merci de remplir tous les champs.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Votre email semble invalide.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert([{
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          project: metier ? `site-${metier.toLowerCase()}` : siteType,
          message: metier
            ? `Demande via landing Google Ads (site ${metier})`
            : "Demande via landing Google Ads (création site internet)",
          main_challenge: "non_specifie",
          timeline: "",
          company: "",
          urgency: "",
        }]);
      if (dbError) throw dbError;

      fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Site Internet (Google Ads)",
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          fields: metier
            ? { metier, source: sourceKey || `google-ads-lp-${metier.toLowerCase()}` }
            : {
                type_site: siteTypes.find((t) => t.value === siteType)?.label || siteType,
                source: sourceKey || "google-ads-lp-site-internet",
              },
        }),
      }).catch((err) => console.error("[notify] erreur envoi:", err));

      setIsSuccess(true);
      type TrackFn = (u?: { email: string; phone: string }) => void;
      if (typeof window !== "undefined" && (window as unknown as { trackFormConversion?: TrackFn }).trackFormConversion) {
        (window as unknown as { trackFormConversion: TrackFn }).trackFormConversion({
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
        });
      }
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="relative bg-white rounded-[1.75rem] shadow-2xl ring-1 ring-black/5 p-8 sm:p-10 min-h-[520px] flex flex-col items-center justify-center text-center overflow-hidden">
        <div aria-hidden className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${accentClass}`} />
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/30">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-2">Merci {name} !</h3>
        <p className="text-gray-600 mb-3 leading-relaxed">
          Votre demande est bien reçue. Nous vous rappelons sous <strong>24h</strong> pour votre devis gratuit.
        </p>
        <p className="text-sm text-gray-500">
          Vous préférez en parler tout de suite ?{" "}
          <a href="https://calendly.com/convertilab-5bsc/30min" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-semibold hover:underline">
            Réservez un rendez-vous
          </a>.
        </p>
      </div>
    );
  }

  return (
    <div id="devis" className="relative bg-white rounded-[1.75rem] shadow-2xl ring-1 ring-black/5 p-7 sm:p-9 scroll-mt-24 overflow-hidden">
      <div aria-hidden className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${accentClass}`} />

      {/* En-tête */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-bold rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Devis gratuit en 2 minutes
        </div>
        <h2 className="text-[1.7rem] font-black text-gray-900 tracking-tight leading-tight mb-1.5">
          {title || "Recevez votre devis gratuit"}
        </h2>
        <p className="text-[15px] text-gray-500">
          {subtitle || "On vous rappelle sous 24h. Aucun engagement, aucune carte bancaire."}
        </p>
      </div>

      {/* Bandeau de confiance */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-6">
        {perks.map((p) => (
          <span key={p} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            {p}
          </span>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <input
          type="text"
          placeholder="Votre prénom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-gray-900 placeholder:text-gray-400 disabled:opacity-50 text-[15px]"
        />
        <input
          type="tel"
          placeholder="Votre téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={isSubmitting}
          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-gray-900 placeholder:text-gray-400 disabled:opacity-50 text-[15px]"
        />
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-gray-900 placeholder:text-gray-400 disabled:opacity-50 text-[15px]"
        />
        {!metier && (
          <select
            value={siteType}
            onChange={(e) => setSiteType(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-gray-900 disabled:opacity-50 bg-white text-[15px]"
          >
            <option value="">Quel type de site souhaitez-vous ?</option>
            {siteTypes.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        )}

        {error && <p className="text-sm text-red-600">{error}</p>}

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className={`w-full bg-gradient-to-r ${accentClass} hover:opacity-95 text-white font-bold py-7 text-base shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 transition-all`}
        >
          {isSubmitting ? (
            <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Envoi...</>
          ) : (
            <>Recevez mon devis gratuit<ArrowRight className="ml-2 w-5 h-5" /></>
          )}
        </Button>
      </form>

      {/* Preuve sociale + sécurité */}
      <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#00b67a] fill-[#00b67a]" />)}
          </div>
          <span className="text-[13px] text-gray-500">
            <strong className="text-gray-800">+150</strong> entreprises accompagnées
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-[12px] text-gray-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          Sécurisé
        </span>
      </div>
    </div>
  );
}
