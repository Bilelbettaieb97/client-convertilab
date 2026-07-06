"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

const projectTypes = [
  { value: "site-vitrine", label: "Site vitrine" },
  { value: "site-ecommerce", label: "E-commerce" },
  { value: "landing-page", label: "Landing page" },
  { value: "refonte", label: "Refonte" },
  { value: "autre", label: "Autre" },
];

export default function HeroMiniForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim() || !email.trim() || !project) {
      setError("Tous les champs sont requis");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Email invalide");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert([{
          name: name.trim(),
          email: email.trim().toLowerCase(),
          project,
          message: "Demande via Hero mini-form",
          main_challenge: "non_specifie",
          timeline: "",
          company: "",
          phone: "",
          urgency: "",
        }]);

      if (dbError) throw dbError;

      // Non-bloquant
      fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "HeroMiniForm",
          name,
          email,
          fields: {
            project,
            source: "hero-mini-form",
          },
        }),
      }).catch((err) => console.error("[notify] erreur envoi:", err));

      setIsSuccess(true);
      if (typeof window !== 'undefined' && (window as any).trackFormConversion) {
        (window as any).trackFormConversion();
      }
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-8 min-h-[440px] flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Merci {name} !</h3>
        <p className="text-gray-600 mb-6">
          Votre demande a bien été reçue. Nous vous recontactons sous <strong>24h</strong> par email.
        </p>
        <p className="text-sm text-gray-500">
          En attendant, découvrez nos{" "}
          <a href="/portfolio" className="text-purple-600 font-semibold hover:underline">
            réalisations
          </a>{" "}
          ou consultez nos{" "}
          <a href="/prix" className="text-purple-600 font-semibold hover:underline">
            tarifs
          </a>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-7">
      <div className="mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-bold rounded-full mb-3">
          <Sparkles className="w-3 h-3" />
          Devis gratuit en 2 minutes
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
          Obtenez votre devis sous 24h
        </h3>
        <p className="text-sm text-gray-500">
          Aucune obligation. Réponse garantie.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            placeholder="Votre prénom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-gray-900 placeholder:text-gray-400 disabled:opacity-50"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-gray-900 placeholder:text-gray-400 disabled:opacity-50"
          />
        </div>
        <div>
          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-gray-900 disabled:opacity-50 bg-white"
          >
            <option value="">Type de projet</option>
            {projectTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6 text-base shadow-xl hover:shadow-2xl transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Envoi...
            </>
          ) : (
            <>
              Obtenir mon devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>

        <p className="text-center text-xs text-gray-400 pt-1">
          🔒 Vos données sont sécurisées et ne seront jamais partagées
        </p>
      </form>
    </div>
  );
}
