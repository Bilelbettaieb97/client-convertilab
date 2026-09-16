"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LeadMagnetFormProps {
  /** Slug de la ressource (src/lib/lead-magnets/ressources) ou du diagnostic, selon `endpoint`. */
  ressource: string;
  /** Page qui propose la ressource (pour le suivi). */
  page: string;
  /** Libellé du bouton, ex. « Recevoir la checklist ». */
  boutonLabel: string;
  /** Route appelée : /api/lead-magnet (défaut) ou /api/diagnostic. */
  endpoint?: string;
  /** Champs supplémentaires envoyés avec le formulaire (réponses d'un diagnostic, résumé d'un calcul). */
  donnees?: Record<string, unknown>;
  /** Texte de confirmation, facultatif. */
  succesTexte?: string;
  className?: string;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Formulaire d'un lead magnet : prénom facultatif, email, case RGPD non
 * pré-cochée, pot de miel invisible. Envoi vers /api/lead-magnet, qui
 * génère le PDF et l'envoie par email. Aucune redirection : la confirmation
 * s'affiche à la place du formulaire.
 */
export default function LeadMagnetForm({
  ressource,
  page,
  boutonLabel,
  endpoint = "/api/lead-magnet",
  donnees,
  succesTexte,
  className,
}: LeadMagnetFormProps) {
  const uid = useId();
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [rgpd, setRgpd] = useState(false);
  const [pot, setPot] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [envoi, setEnvoi] = useState(false);
  const [envoye, setEnvoye] = useState(false);

  const soumettre = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!EMAIL.test(email.trim())) return setErreur("Indiquez une adresse email valide.");
    if (!rgpd) return setErreur("Cochez la case pour recevoir la ressource.");
    setErreur(null);
    if (pot) return setEnvoye(true);
    setEnvoi(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          prenom: prenom.trim(),
          ressource,
          slug: ressource,
          page,
          rgpd: true,
          site_web: pot,
          ...(donnees ?? {}),
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || `envoi ${res.status}`);
      const w = window as Window & { trackFormConversion?: () => void };
      if (typeof w.trackFormConversion === "function") w.trackFormConversion();
      setEnvoye(true);
    } catch (err) {
      setErreur(err instanceof Error && err.message && !err.message.startsWith("envoi ") ? err.message : "L'envoi a échoué. Réessayez dans un instant.");
    } finally {
      setEnvoi(false);
    }
  };

  if (envoye) {
    return (
      <div className={cn("text-center", className)} role="status" aria-live="polite">
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100" aria-hidden="true">
          <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <p className="mt-4 text-lg font-bold text-foreground">C&apos;est envoyé.</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {succesTexte ?? "Le PDF arrive dans votre boîte mail dans la minute. S'il n'y est pas, regardez dans les spams ou les promotions."}
        </p>
      </div>
    );
  }

  const champ =
    "block w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <form onSubmit={soumettre} noValidate className={cn("relative", className)}>
      <div className="grid gap-3">
        <div>
          <label htmlFor={`${uid}-prenom`} className="sr-only">
            Prénom (facultatif)
          </label>
          <input
            id={`${uid}-prenom`}
            name="prenom"
            type="text"
            autoComplete="given-name"
            placeholder="Prénom (facultatif)"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className={champ}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className="sr-only">
            Email
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={champ}
            aria-invalid={erreur ? true : undefined}
            required
          />
        </div>
      </div>

      {/* Pot de miel : invisible pour les personnes, rempli par les robots. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${uid}-site`}>Votre site web</label>
        <input id={`${uid}-site`} name="site_web" type="text" tabIndex={-1} autoComplete="off" value={pot} onChange={(e) => setPot(e.target.value)} />
      </div>

      <label className="mt-3 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-muted-foreground">
        <input
          type="checkbox"
          name="rgpd"
          checked={rgpd}
          onChange={(e) => setRgpd(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          required
        />
        <span>
          J&apos;accepte de recevoir cette ressource et, de temps en temps, un conseil de ConvertiLab. Désinscription en un clic.{" "}
          <Link href="/politique-de-confidentialite" className="underline underline-offset-4 hover:text-foreground">
            Politique de confidentialité
          </Link>
        </span>
      </label>

      {erreur && (
        <p role="alert" className="mt-3 text-sm text-red-600">
          {erreur}
        </p>
      )}

      <button
        type="submit"
        disabled={envoi}
        className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 text-sm font-semibold text-white shadow-md transition-colors hover:from-purple-700 hover:to-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60"
      >
        {envoi ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
        {boutonLabel}
        {!envoi && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">Gratuit, envoyé par email en une minute. Aucune carte, aucun appel non sollicité.</p>
    </form>
  );
}
