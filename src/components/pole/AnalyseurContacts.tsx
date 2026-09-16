"use client";

import { useId, useState } from "react";
import { FileText, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import LeadMagnetForm from "./LeadMagnetForm";

export interface AnalyseurContactsProps {
  /** Slug du diagnostic de type « calcul » (src/lib/diagnostics/configs). */
  slug: string;
  page: string;
  className?: string;
}

interface Analyse {
  lignes: number;
  colonnes: string[];
  colEmail: number;
  colTel: number;
  emailsVides: number;
  emailsInvalides: number;
  doublonsEmail: number;
  telsVides: number;
  doublonsTel: number;
  lignesVides: number;
  casseSuspecte: number;
  espaces: number;
  score: number;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function detecterSeparateur(texte: string): string {
  const premiere = texte.split(/\r?\n/)[0] ?? "";
  const candidats = [";", ",", "\t", "|"];
  return candidats.sort((a, b) => premiere.split(b).length - premiere.split(a).length)[0];
}

function decouper(ligne: string, sep: string): string[] {
  const cellules: string[] = [];
  let courant = "";
  let entreGuillemets = false;
  for (const ch of ligne) {
    if (ch === '"') entreGuillemets = !entreGuillemets;
    else if (ch === sep && !entreGuillemets) {
      cellules.push(courant);
      courant = "";
    } else courant += ch;
  }
  cellules.push(courant);
  return cellules.map((c) => c.trim());
}

/** Analyse entièrement dans le navigateur : rien n'est envoyé, seuls les totaux partent avec l'email. */
export function analyserContacts(texte: string): Analyse | null {
  const lignes = texte.split(/\r?\n/).filter((l) => l.trim() !== "");
  if (lignes.length < 2) return null;
  const sep = detecterSeparateur(texte);
  const entete = decouper(lignes[0], sep);
  const corps = lignes.slice(1).map((l) => decouper(l, sep));
  const tetes = entete.map((h) => h.toLowerCase());
  let colEmail = tetes.findIndex((h) => /mail|courriel/.test(h));
  let colTel = tetes.findIndex((h) => /t[ée]l|phone|portable|mobile/.test(h));
  // Sans en-tête parlant : la colonne où l'on trouve le plus d'emails / de numéros.
  if (colEmail === -1) colEmail = indiceMax(corps, (v) => EMAIL.test(v));
  if (colTel === -1) colTel = indiceMax(corps, (v) => /^\+?[\d\s().-]{9,}$/.test(v) && v.replace(/\D/g, "").length >= 9);

  const emails = new Map<string, number>();
  const tels = new Map<string, number>();
  let emailsVides = 0, emailsInvalides = 0, telsVides = 0, lignesVides = 0, casseSuspecte = 0, espaces = 0;
  for (const cellules of corps) {
    if (cellules.every((c) => c === "")) {
      lignesVides++;
      continue;
    }
    if (cellules.some((c) => c !== c.trim() || /\s{2,}/.test(c))) espaces++;
    if (colEmail >= 0) {
      const e = (cellules[colEmail] ?? "").toLowerCase();
      if (!e) emailsVides++;
      else if (!EMAIL.test(e)) emailsInvalides++;
      else emails.set(e, (emails.get(e) ?? 0) + 1);
    }
    if (colTel >= 0) {
      const t = (cellules[colTel] ?? "").replace(/\D/g, "");
      if (!t) telsVides++;
      else tels.set(t.replace(/^33/, "0"), (tels.get(t.replace(/^33/, "0")) ?? 0) + 1);
    }
    for (const [i, c] of cellules.entries()) {
      if (i === colEmail || i === colTel) continue;
      if (c.length > 2 && /^[A-ZÀ-Ý\s-]+$/.test(c) && /[A-ZÀ-Ý]{3,}/.test(c)) {
        casseSuspecte++;
        break;
      }
    }
  }
  const doublonsEmail = [...emails.values()].reduce((s, n) => s + (n > 1 ? n - 1 : 0), 0);
  const doublonsTel = [...tels.values()].reduce((s, n) => s + (n > 1 ? n - 1 : 0), 0);
  const total = corps.length - lignesVides;
  const problemes = doublonsEmail + doublonsTel + emailsInvalides + emailsVides + casseSuspecte + espaces;
  const score = total > 0 ? Math.max(0, Math.min(100, Math.round(100 - (problemes / total) * 100))) : 0;
  return { lignes: total, colonnes: entete, colEmail, colTel, emailsVides, emailsInvalides, doublonsEmail, telsVides, doublonsTel, lignesVides, casseSuspecte, espaces, score };
}

function indiceMax(corps: string[][], test: (v: string) => boolean): number {
  const largeur = Math.max(0, ...corps.map((c) => c.length));
  let meilleur = -1, max = 0;
  for (let i = 0; i < largeur; i++) {
    const n = corps.filter((c) => test(c[i] ?? "")).length;
    if (n > max) {
      max = n;
      meilleur = i;
    }
  }
  return max >= Math.max(2, corps.length * 0.3) ? meilleur : -1;
}

const fr = (n: number) => n.toLocaleString("fr-FR");

/**
 * Analyseur de fichier de contacts : la personne colle ou dépose son export
 * (CSV, tableur enregistré en CSV), tout est analysé dans son navigateur,
 * elle voit doublons, emails invalides, champs vides, casse et espaces, et
 * peut recevoir la procédure de nettoyage par email avec les totaux.
 */
export default function AnalyseurContacts({ slug, page, className }: AnalyseurContactsProps) {
  const uid = useId();
  const [texte, setTexte] = useState("");
  const [analyse, setAnalyse] = useState<Analyse | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);

  const lancer = (t: string) => {
    const a = analyserContacts(t);
    if (!a) return setErreur("Collez au moins une ligne d'en-tête et une ligne de contact, ou déposez un fichier CSV.");
    setErreur(null);
    setAnalyse(a);
  };
  const charger = (f: File | undefined) => {
    if (!f) return;
    if (f.size > 5_000_000) return setErreur("Fichier trop lourd (5 Mo maximum) : exportez une partie de vos contacts.");
    f.text().then((t) => {
      setTexte(t);
      lancer(t);
    });
  };

  const resume = analyse
    ? [
        `${fr(analyse.lignes)} contacts analysés (${analyse.colonnes.length} colonnes${analyse.colEmail >= 0 ? `, colonne email : « ${analyse.colonnes[analyse.colEmail]} »` : ", aucune colonne email reconnue"}).`,
        `${fr(analyse.doublonsEmail)} doublons par email et ${fr(analyse.doublonsTel)} doublons par téléphone à fusionner.`,
        `${fr(analyse.emailsInvalides)} emails invalides à corriger, ${fr(analyse.emailsVides)} contacts sans email, ${fr(analyse.telsVides)} sans téléphone.`,
        `${fr(analyse.casseSuspecte)} contacts avec un nom tout en majuscules, ${fr(analyse.espaces)} avec des espaces en trop, ${fr(analyse.lignesVides)} lignes vides.`,
        `Score de propreté : ${analyse.score} / 100 (part des contacts sans aucun problème détecté).`,
      ]
    : [];

  const constats = analyse
    ? [
        { n: analyse.doublonsEmail + analyse.doublonsTel, l: "doublons à fusionner (email ou téléphone identiques)" },
        { n: analyse.emailsInvalides, l: "emails invalides (faute de frappe, domaine manquant)" },
        { n: analyse.emailsVides + analyse.telsVides, l: "contacts sans email ou sans téléphone" },
        { n: analyse.casseSuspecte + analyse.espaces, l: "noms en majuscules ou espaces en trop" },
      ]
    : [];

  return (
    <div className={cn("rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-8", className)}>
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary-texte">
        <ShieldCheck className="h-4 w-4" aria-hidden="true" />
        Analyse dans votre navigateur, rien n&apos;est envoyé
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Exportez vos contacts en CSV (depuis Excel, Google Sheets ou votre CRM), déposez le fichier ou collez les lignes. Vos données ne quittent pas votre ordinateur : seuls les totaux partent avec votre email si vous demandez la procédure.
      </p>
      <div className="mt-5 grid gap-3">
        <label htmlFor={`${uid}-fichier`} className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/40 bg-primary/[0.03] px-4 py-5 text-sm font-medium text-foreground hover:bg-primary/[0.06]">
          <FileText className="h-4 w-4 text-primary-texte" aria-hidden="true" />
          Déposer un fichier CSV (5 Mo maximum)
          <input id={`${uid}-fichier`} type="file" accept=".csv,.txt,text/csv,text/plain" className="sr-only" onChange={(e) => charger(e.target.files?.[0])} />
        </label>
        <label htmlFor={`${uid}-texte`} className="text-sm font-medium text-foreground">
          Ou collez vos lignes (en-tête compris)
        </label>
        <textarea
          id={`${uid}-texte`}
          rows={5}
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
          placeholder={"Prénom;Nom;Email;Téléphone\nMarie;Dupont;marie.dupont@exemple.fr;06 12 34 56 78"}
          className="block w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {erreur && (
          <p role="alert" className="text-sm text-red-600">
            {erreur}
          </p>
        )}
        <button
          type="button"
          onClick={() => lancer(texte)}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 text-sm font-semibold text-white shadow-md transition-colors hover:from-purple-700 hover:to-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
        >
          Analyser mes contacts
        </button>
      </div>

      {analyse && (
        <div className="mt-6" role="status" aria-live="polite">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-4">
            <p className={cn("text-3xl font-bold tabular-nums", analyse.score >= 70 ? "text-green-600" : analyse.score >= 40 ? "text-orange-500" : "text-red-500")}>
              {analyse.score}
              <span className="text-base text-muted-foreground"> / 100</span>
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Score de propreté sur {fr(analyse.lignes)} contacts : la part des contacts sans aucun problème détecté.
              {analyse.colEmail < 0 && " Aucune colonne email reconnue : nommez-la « Email » pour une analyse complète."}
            </p>
          </div>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {constats.map((c) => (
              <li key={c.l} className="flex items-baseline gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm">
                <span className={cn("text-lg font-bold tabular-nums", c.n > 0 ? "text-foreground" : "text-green-600")}>{fr(c.n)}</span>
                <span className="text-muted-foreground">{c.l}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-5">
            <p className="text-lg font-semibold text-foreground">Recevoir la procédure de nettoyage par email</p>
            <p className="mt-1 text-sm text-muted-foreground">Vos totaux, l&apos;ordre des opérations (doublons, formats, archivage) et les règles à écrire pour que le fichier reste propre, en PDF.</p>
            <LeadMagnetForm ressource={slug} page={page} endpoint="/api/diagnostic" donnees={{ resume, score: analyse.score }} boutonLabel="Recevoir la procédure par email" className="mt-4" />
          </div>
        </div>
      )}
    </div>
  );
}
