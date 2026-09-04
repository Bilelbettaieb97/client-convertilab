"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, CheckCircle2, Sparkles, Star, ShieldCheck, Store, ShoppingBag, MousePointerClick, HelpCircle } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import QualificationStep from "../_components/QualificationStep";

const siteTypes = [
  { value: "site-vitrine", label: "Site vitrine", icon: Store },
  { value: "site-ecommerce", label: "Boutique en ligne", icon: ShoppingBag },
  { value: "landing-page", label: "Landing page", icon: MousePointerClick },
  { value: "je-ne-sais-pas", label: "Je ne sais pas", icon: HelpCircle },
];

const perks = ["Réponse sous 24h", "Sans engagement", "100% gratuit"];

/* ─── Téléphone ─── */

/** Met en forme au fil de la saisie : "0612345678" → "06 12 34 56 78". */
function formatPhone(raw: string): string {
  let v = raw.replace(/[^\d+]/g, "");
  if (v.startsWith("+33")) v = "0" + v.slice(3);
  else if (v.startsWith("0033")) v = "0" + v.slice(4);
  v = v.replace(/\D/g, "").slice(0, 10);
  return v.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
}

/** Numéro français valide : 10 chiffres commençant par 0, puis 1 à 9. */
function validatePhone(value: string): string | null {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "Merci d'indiquer votre téléphone.";
  if (digits.length < 10) return "Le numéro doit contenir 10 chiffres.";
  if (!/^0[1-9]\d{8}$/.test(digits)) return "Numéro invalide (ex. 06 12 34 56 78).";
  return null;
}

/* ─── Email ─── */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

/** Fautes de frappe fréquentes sur les domaines : un email erroné = un lead perdu. */
const DOMAINES_CORRIGES: Record<string, string> = {
  "gmail.fr": "gmail.com",
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gnail.com": "gmail.com",
  "hotmial.com": "hotmail.com",
  "hotmail.co": "hotmail.com",
  "hotmai.fr": "hotmail.fr",
  "outlok.com": "outlook.com",
  "outlook.fr": "outlook.com",
  "orang.fr": "orange.fr",
  "oranger.fr": "orange.fr",
  "wanadoo.com": "wanadoo.fr",
  "yaho.fr": "yahoo.fr",
  "yahoo.f": "yahoo.fr",
  "free.com": "free.fr",
  "laposte.com": "laposte.net",
};

function suggestEmail(value: string): string | null {
  const at = value.lastIndexOf("@");
  if (at === -1) return null;
  const domaine = value.slice(at + 1).toLowerCase();
  const corrige = DOMAINES_CORRIGES[domaine];
  return corrige ? `${value.slice(0, at)}@${corrige}` : null;
}

function validateEmail(value: string): string | null {
  const v = value.trim();
  if (!v) return "Merci d'indiquer votre email.";
  if (!EMAIL_RE.test(v)) return "Email invalide (ex. prenom@entreprise.fr).";
  if (v.includes("..")) return "Email invalide (deux points consécutifs).";
  return null;
}

interface AdsLeadFormProps {
  /** Si défini (ex. "Restaurant"), le formulaire est dédié à un métier :
   *  le choix du type de site est masqué et le métier est remonté au CRM. */
  metier?: string;
  sourceKey?: string;
  title?: string;
  subtitle?: string;
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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const emailSuggestion = suggestEmail(email);

  const setError = (field: string, message: string | null) =>
    setErrors((prev) => {
      const next = { ...prev };
      if (message) next[field] = message;
      else delete next[field];
      return next;
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = "Merci d'indiquer votre prénom.";
    const phoneError = validatePhone(phone);
    if (phoneError) nextErrors.phone = phoneError;
    const emailError = validateEmail(email);
    if (emailError) nextErrors.email = emailError;
    if (!metier && !siteType) nextErrors.siteType = "Choisissez le type de site souhaité.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      // Table dédiée au trafic payant : mélangés à contact_submissions, ces leads
      // devenaient indistinguables du formulaire de contact dans le dashboard, et
      // le rattrapage automatique les étiquetait « Contact » (mauvais pipeline).
      const { error: dbError } = await supabase
        .from("google_ads_leads")
        .insert([{
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          company: "",
          site_type: metier ? null : siteType,
          metier: metier || null,
          landing: sourceKey || (metier
            ? `google-ads-lp-${metier.toLowerCase()}`
            : "google-ads-lp-site-internet"),
          message: metier
            ? `Demande via landing Google Ads (site ${metier})`
            : "Demande via landing Google Ads (création site internet)",
        }]);
      // Non-bloquant : Pipedrive est la source de vérité pour le lead. Une panne
      // d'enregistrement en base ne doit pas faire perdre la demande.
      if (dbError) console.error("[supabase] google_ads_leads:", dbError.message);

      // keepalive : la requête survit à la fermeture de l'onglet, sinon le
      // lead peut n'arriver que dans Supabase et jamais dans le CRM.
      fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
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
      setError("global", "Une erreur est survenue. Merci de réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition text-gray-900 placeholder:text-gray-400 disabled:opacity-50 text-[15px] ${
      errors[field]
        ? "border-red-300 focus:ring-red-400"
        : "border-gray-200 focus:ring-purple-500"
    }`;

  if (isSuccess) {
    return (
      <div className="relative bg-white rounded-[1.75rem] shadow-2xl ring-1 ring-black/5 p-8 sm:p-10 overflow-hidden">
        <div aria-hidden className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${accentClass}`} />
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/30 mx-auto">
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

        {/* Questions bonus : le lead est déjà capté, ces réponses servent à
            préparer le devis avant l'appel. */}
        <QualificationStep
          email={email.trim().toLowerCase()}
          metier={metier}
          siteType={siteType}
          accentClass={accentClass}
        />
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

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Type de site : choix direct en un clic, en tête de formulaire */}
        {!metier && (
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2.5">
              Quel type de site souhaitez-vous ?
            </p>
            <div className="grid grid-cols-2 gap-2">
              {siteTypes.map((t) => {
                const selected = siteType === t.value;
                return (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => {
                      setSiteType(t.value);
                      setError("siteType", null);
                    }}
                    aria-pressed={selected}
                    className={`flex items-center gap-2 px-3 py-3 rounded-xl border text-[13px] font-semibold text-left transition-all ${
                      selected
                        ? "border-purple-500 bg-purple-50 text-purple-700 ring-1 ring-purple-500"
                        : errors.siteType
                          ? "border-red-300 text-gray-600 hover:border-gray-400"
                          : "border-gray-200 text-gray-600 hover:border-purple-300 hover:bg-purple-50/40"
                    }`}
                  >
                    <t.icon className={`w-4 h-4 flex-shrink-0 ${selected ? "text-purple-600" : "text-gray-400"}`} />
                    {t.label}
                  </button>
                );
              })}
            </div>
            {errors.siteType && <p className="mt-1.5 text-[13px] text-red-600">{errors.siteType}</p>}
          </div>
        )}

        {/* Prénom */}
        <div>
          <input
            type="text"
            placeholder="Votre prénom"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setError("name", null);
            }}
            disabled={isSubmitting}
            className={inputClass("name")}
          />
          {errors.name && <p className="mt-1.5 text-[13px] text-red-600">{errors.name}</p>}
        </div>

        {/* Téléphone */}
        <div>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            value={phone}
            onChange={(e) => {
              setPhone(formatPhone(e.target.value));
              if (errors.phone) setError("phone", null);
            }}
            onBlur={() => setError("phone", phone ? validatePhone(phone) : null)}
            disabled={isSubmitting}
            className={inputClass("phone")}
          />
          {errors.phone && <p className="mt-1.5 text-[13px] text-red-600">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="prenom@entreprise.fr"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setError("email", null);
            }}
            onBlur={() => setError("email", email ? validateEmail(email) : null)}
            disabled={isSubmitting}
            className={inputClass("email")}
          />
          {errors.email && <p className="mt-1.5 text-[13px] text-red-600">{errors.email}</p>}
          {!errors.email && emailSuggestion && (
            <p className="mt-1.5 text-[13px] text-gray-500">
              Vouliez-vous dire{" "}
              <button
                type="button"
                onClick={() => setEmail(emailSuggestion)}
                className="font-semibold text-purple-600 hover:underline"
              >
                {emailSuggestion}
              </button>{" "}
              ?
            </p>
          )}
        </div>

        {errors.global && <p className="text-sm text-red-600">{errors.global}</p>}

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

      {/* Bandeau de confiance */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-5">
        {perks.map((p) => (
          <span key={p} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            {p}
          </span>
        ))}
      </div>

      {/* Preuve sociale + sécurité */}
      <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between gap-3">
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
