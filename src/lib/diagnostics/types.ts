import type { PoleSlug } from "@/data/poles";

/**
 * Diagnostics interactifs : un questionnaire court (ou un calcul fait sur la
 * page) qui rend un résultat personnalisé immédiat, puis un rapport complet
 * par email. Le contenu vit ici (une seule source) : la page, le calcul côté
 * client, le calcul côté serveur et le PDF restent alignés.
 *
 * Règles d'écriture : vouvoiement, sans tiret long, aucun chiffre de résultat
 * inventé ; chaque conseil est une action concrète que la personne peut faire
 * seule, l'agence n'est jamais la seule réponse.
 */

export interface OptionDiagnostic {
  id: string;
  label: string;
  /** Points obtenus (0 = situation à corriger, le maximum de la question = situation saine). */
  points: number;
  /** Conseil déclenché quand cette option est choisie et qu'elle n'est pas la meilleure. */
  conseil?: { titre: string; texte: string };
}

export interface QuestionDiagnostic {
  id: string;
  texte: string;
  /** Précision facultative sous la question. */
  aide?: string;
  /** Axe auquel la question contribue (id d'un axe du diagnostic). */
  axe: string;
  options: OptionDiagnostic[];
}

export interface AxeDiagnostic {
  id: string;
  label: string;
}

/** Verdict global selon le score (0 à 100) : le premier dont `min` est atteint, en partant du plus haut. */
export interface VerdictDiagnostic {
  min: number;
  titre: string;
  texte: string;
}

export interface Diagnostic {
  /** Identifiant stable en kebab-case, préfixé par le pôle. */
  slug: string;
  /** « questionnaire » : questions sur la page ; « calcul » : la page calcule et envoie un résumé (lignes de texte). */
  type: "questionnaire" | "calcul";
  titre: string;
  accroche: string;
  /** Ce que la personne obtient tout de suite, 3 ou 4 puces. */
  obtenez: string[];
  axes: AxeDiagnostic[];
  questions: QuestionDiagnostic[];
  verdicts: VerdictDiagnostic[];
  /** Ressource PDF (src/lib/lead-magnets) jointe au rapport, facultative. */
  ressource?: string;
  pole: PoleSlug;
  page: string;
}

export interface ConseilCalcule {
  titre: string;
  texte: string;
  /** Points perdus sur la question : sert à trier les priorités. */
  poids: number;
  axe: string;
}

export interface ResultatDiagnostic {
  /** 0 à 100. */
  score: number;
  axes: { id: string; label: string; score: number }[];
  verdict: VerdictDiagnostic;
  conseils: ConseilCalcule[];
  /** Options choisies au maximum de points : ce qui est déjà en place. */
  atouts: string[];
  /** Réponses lisibles (question, réponse) pour le rapport. */
  reponses: { question: string; reponse: string }[];
}

/**
 * Calcule le résultat d'un questionnaire. `reponses` associe l'id de chaque
 * question à l'id de l'option choisie ; une question sans réponse est ignorée.
 * Même code côté page (résultat immédiat) et côté serveur (rapport).
 */
export function calculerResultat(d: Diagnostic, reponses: Record<string, string>): ResultatDiagnostic {
  const totaux = new Map<string, { obtenu: number; max: number }>();
  const conseils: ConseilCalcule[] = [];
  const atouts: string[] = [];
  const lisibles: { question: string; reponse: string }[] = [];

  for (const q of d.questions) {
    const choix = q.options.find((o) => o.id === reponses[q.id]);
    if (!choix) continue;
    const max = Math.max(...q.options.map((o) => o.points));
    const t = totaux.get(q.axe) ?? { obtenu: 0, max: 0 };
    t.obtenu += choix.points;
    t.max += max;
    totaux.set(q.axe, t);
    lisibles.push({ question: q.texte, reponse: choix.label });
    if (choix.points >= max) atouts.push(choix.label);
    else if (choix.conseil) conseils.push({ ...choix.conseil, poids: max - choix.points, axe: q.axe });
  }

  const axes = d.axes
    .filter((a) => totaux.has(a.id))
    .map((a) => {
      const t = totaux.get(a.id)!;
      return { id: a.id, label: a.label, score: t.max > 0 ? Math.round((t.obtenu / t.max) * 100) : 0 };
    });
  const score = axes.length ? Math.round(axes.reduce((s, a) => s + a.score, 0) / axes.length) : 0;
  conseils.sort((a, b) => b.poids - a.poids);

  return { score, axes, verdict: verdictPour(d, score), conseils, atouts, reponses: lisibles };
}

export function verdictPour(d: Diagnostic, score: number): VerdictDiagnostic {
  const tries = [...d.verdicts].sort((a, b) => b.min - a.min);
  return tries.find((v) => score >= v.min) ?? tries[tries.length - 1];
}
