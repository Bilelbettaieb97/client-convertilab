"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

interface Question {
  /** Libellé remonté dans la note Pipedrive. */
  key: string;
  label: string;
  options: string[];
}

/** Question commune à tous les contextes : le délai pilote ton planning. */
const DELAI: Question = {
  key: "Délai souhaité",
  label: "Quand souhaitez-vous être en ligne ?",
  options: ["Dès que possible", "Sous 1 mois", "Sous 3 mois", "Pas pressé"],
};

/** Jeux de questions par type de site (landing générique). */
const PAR_TYPE_DE_SITE: Record<string, Question[]> = {
  "site-vitrine": [
    { key: "Nombre de pages", label: "Combien de pages environ ?", options: ["1 à 5", "5 à 10", "Plus de 10", "Je ne sais pas"] },
    { key: "Contenu disponible", label: "Avez-vous déjà vos textes et photos ?", options: ["Oui, tout est prêt", "En partie", "Non, à créer"] },
  ],
  "site-ecommerce": [
    { key: "Nombre de produits", label: "Combien de produits environ ?", options: ["Moins de 20", "20 à 100", "Plus de 100", "Je ne sais pas"] },
    { key: "Fiches produits", label: "Avez-vous vos fiches produits (photos, descriptions) ?", options: ["Oui, tout est prêt", "En partie", "Non, à créer"] },
  ],
  "landing-page": [
    { key: "Objectif de la page", label: "Quel est l'objectif principal de la page ?", options: ["Recevoir des demandes", "Vendre un produit", "Inscriptions à un événement", "Autre"] },
    { key: "Contenu disponible", label: "Avez-vous déjà vos textes et visuels ?", options: ["Oui, tout est prêt", "En partie", "Non, à créer"] },
  ],
  "je-ne-sais-pas": [
    { key: "Priorité du site", label: "Que doit faire votre site en priorité ?", options: ["Présenter mon activité", "Recevoir des demandes de devis", "Vendre en ligne", "Prendre des rendez-vous"] },
    { key: "Site actuel", label: "Avez-vous déjà un site aujourd'hui ?", options: ["Non, aucun", "Oui, à refaire"] },
  ],
};

/** Jeux de questions par métier (landings restaurant / artisan). */
const PAR_METIER: Record<string, Question[]> = {
  Restaurant: [
    { key: "Priorité", label: "Que voulez-vous en priorité ?", options: ["Recevoir des réservations", "Afficher ma carte en ligne", "Être visible sur Google", "Commande à emporter"] },
    { key: "Photos des plats", label: "Avez-vous des photos de vos plats ?", options: ["Oui, professionnelles", "Quelques-unes", "Non, aucune"] },
  ],
  Artisan: [
    { key: "Métier", label: "Quel est votre métier exactement ?", options: ["Plombier", "Électricien", "Menuisier", "Maçon", "Couvreur", "Autre"] },
    { key: "Photos de chantiers", label: "Avez-vous des photos de vos réalisations ?", options: ["Oui, beaucoup", "Quelques-unes", "Non, aucune"] },
  ],
};

function getQuestions(metier?: string, siteType?: string): Question[] {
  if (metier && PAR_METIER[metier]) return [...PAR_METIER[metier], DELAI];
  if (siteType && PAR_TYPE_DE_SITE[siteType]) return [...PAR_TYPE_DE_SITE[siteType], DELAI];
  return [...PAR_TYPE_DE_SITE["je-ne-sais-pas"], DELAI];
}

interface QualificationStepProps {
  email: string;
  metier?: string;
  siteType?: string;
  /** Classe du dégradé d'accent, pour coller au mood de la landing. */
  accentClass?: string;
}

/**
 * Questions bonus affichées APRÈS l'envoi du formulaire. Le lead est déjà
 * capturé : ces réponses sont facultatives et servent à préparer le devis
 * avant même l'appel. Elles sont rattachées au deal Pipedrive existant.
 */
export default function QualificationStep({
  email,
  metier,
  siteType,
  accentClass = "from-purple-600 to-pink-600",
}: QualificationStepProps) {
  const questions = getQuestions(metier, siteType);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const answeredCount = Object.values(answers).filter(Boolean).length;

  const handleSubmit = async () => {
    if (answeredCount === 0) return;
    setIsSending(true);
    try {
      await fetch("/api/lead-qualification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          answers,
          context: metier || siteType,
          formType: "Site Internet (Google Ads)",
        }),
      });
    } catch (err) {
      console.error("[qualification] envoi échoué:", err);
    } finally {
      // Le lead est déjà capté : on remercie quoi qu'il arrive.
      setIsSent(true);
      setIsSending(false);
    }
  };

  if (isSent) {
    return (
      <div className="mt-6 pt-6 border-t border-gray-100 text-center">
        <CheckCircle2 className="w-7 h-7 text-emerald-500 mx-auto mb-2" />
        <p className="text-[15px] font-semibold text-gray-800">Merci, c&apos;est noté !</p>
        <p className="text-sm text-gray-500 mt-1">
          Ces précisions nous permettent de préparer votre devis avant l&apos;appel.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 pt-6 border-t border-gray-100 text-left">
      <p className="text-[15px] font-bold text-gray-900 mb-1">
        Gagnez du temps sur votre devis
      </p>
      <p className="text-sm text-gray-500 mb-5">
        3 questions rapides (facultatif) pour préparer votre devis avant notre appel.
      </p>

      <div className="space-y-5">
        {questions.map((q) => (
          <div key={q.key}>
            <p className="text-sm font-semibold text-gray-700 mb-2">{q.label}</p>
            <div className="flex flex-wrap gap-2">
              {q.options.map((opt) => {
                const selected = answers[q.key] === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [q.key]: selected ? "" : opt }))
                    }
                    className={`px-3.5 py-2 rounded-xl text-[13px] font-medium border transition-all ${
                      selected
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={answeredCount === 0 || isSending}
        className={`mt-6 w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-[15px] bg-gradient-to-r ${accentClass} shadow-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all`}
      >
        {isSending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Envoi...
          </>
        ) : (
          <>
            Envoyer ces précisions
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}
