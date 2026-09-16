"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion-safe";
import { cn } from "@/lib/utils";
import { calculerResultat, type Diagnostic } from "@/lib/diagnostics/types";
import LeadMagnetForm from "./LeadMagnetForm";

export interface DiagnosticInteractifProps {
  diagnostic: Diagnostic;
  /** Page qui propose le diagnostic (chemin), pour le suivi. */
  page: string;
  className?: string;
}

type Etape = "intro" | "questions" | "resultat";

function couleur(score: number) {
  return score >= 70 ? "text-green-600" : score >= 40 ? "text-orange-500" : "text-red-500";
}
function fond(score: number) {
  return score >= 70 ? "bg-green-500" : score >= 40 ? "bg-orange-500" : "bg-red-500";
}

/**
 * Questionnaire en une question par écran, résultat immédiat (score, verdict,
 * score par axe, trois priorités), puis formulaire pour recevoir le rapport
 * complet par email (toutes les priorités, ce qui est en place, la ressource
 * bonus). Le calcul est le même que côté serveur (calculerResultat).
 */
export default function DiagnosticInteractif({ diagnostic, page, className }: DiagnosticInteractifProps) {
  const reduced = useReducedMotionSafe();
  const [etape, setEtape] = useState<Etape>("intro");
  const [index, setIndex] = useState(0);
  const [reponses, setReponses] = useState<Record<string, string>>({});
  const questions = diagnostic.questions;
  const q = questions[index];
  const resultat = useMemo(() => (etape === "resultat" ? calculerResultat(diagnostic, reponses) : null), [etape, diagnostic, reponses]);

  const choisir = (optionId: string) => {
    const suivantes = { ...reponses, [q.id]: optionId };
    setReponses(suivantes);
    if (index + 1 < questions.length) setIndex(index + 1);
    else setEtape("resultat");
  };
  const recommencer = () => {
    setReponses({});
    setIndex(0);
    setEtape("intro");
  };
  const anim = reduced ? {} : { initial: { opacity: 0, x: 16 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -16 }, transition: { duration: 0.25 } };
  const bouton =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 text-sm font-semibold text-white shadow-md transition-colors hover:from-purple-700 hover:to-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <div className={cn("rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-8", className)}>
      <AnimatePresence mode="wait" initial={false}>
        {etape === "intro" && (
          <motion.div key="intro" {...anim}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-texte">Diagnostic gratuit · {questions.length} questions · 2 minutes</p>
            <p className="mt-3 text-xl font-bold text-foreground">Votre résultat s&apos;affiche tout de suite, sans email.</p>
            <ul className="mt-4 space-y-2">
              {diagnostic.obtenez.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary-texte" aria-hidden="true">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => setEtape("questions")} className={cn(bouton, "mt-6 w-full sm:w-auto")}>
              Commencer le diagnostic
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>
        )}

        {etape === "questions" && q && (
          <motion.div key={q.id} {...anim}>
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-texte">
                {diagnostic.axes.find((a) => a.id === q.axe)?.label ?? "Diagnostic"}
              </p>
              <p className="text-xs font-medium text-muted-foreground tabular-nums">
                Question {index + 1} / {questions.length}
              </p>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
              <div className="h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-[width] duration-300" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
            </div>
            <p className="mt-5 text-lg font-semibold leading-snug text-foreground sm:text-xl">{q.texte}</p>
            {q.aide && <p className="mt-1 text-sm text-muted-foreground">{q.aide}</p>}
            <div className="mt-5 grid gap-2.5" role="group" aria-label={q.texte}>
              {q.options.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => choisir(o.id)}
                  aria-pressed={reponses[q.id] === o.id}
                  className={cn(
                    "group flex min-h-12 items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-[border-color,background-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    reponses[q.id] === o.id ? "border-primary bg-primary/5 text-foreground" : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-primary/[0.03]"
                  )}
                >
                  {o.label}
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
              ))}
            </div>
            {index > 0 && (
              <button type="button" onClick={() => setIndex(index - 1)} className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Question précédente
              </button>
            )}
          </motion.div>
        )}

        {etape === "resultat" && resultat && (
          <motion.div key="resultat" {...anim} role="status" aria-live="polite">
            <div className="flex items-center gap-5">
              <div className="relative h-24 w-24 shrink-0" aria-hidden="true">
                <svg viewBox="0 0 36 36" className="h-24 w-24 -rotate-90">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="3" className="text-muted" />
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={couleur(resultat.score)} strokeDasharray={`${(resultat.score / 100) * 97.4} 97.4`} />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold tabular-nums text-foreground">{resultat.score}</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-texte">Votre score sur 100</p>
                <p className="mt-1 text-xl font-bold leading-snug text-foreground">{resultat.verdict.titre}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{resultat.verdict.texte}</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {resultat.axes.map((a) => (
                <li key={a.id}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{a.label}</span>
                    <span className="font-semibold tabular-nums text-foreground">{a.score}</span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted" aria-hidden="true">
                    <div className={cn("h-full rounded-full transition-[width] duration-500", fond(a.score))} style={{ width: `${Math.max(3, a.score)}%` }} />
                  </div>
                </li>
              ))}
            </ul>

            {resultat.conseils.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-texte">Vos trois priorités</p>
                <ol className="mt-3 space-y-3">
                  {resultat.conseils.slice(0, 3).map((c, i) => (
                    <li key={c.titre} className="flex gap-3">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white" aria-hidden="true">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">{c.titre}</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">{c.texte}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-5">
              <p className="text-lg font-semibold text-foreground">Recevoir le rapport complet par email</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {resultat.conseils.length > 3 ? `Les ${resultat.conseils.length} priorités dans l'ordre, ` : "Vos priorités dans l'ordre, "}
                le détail par axe, ce qui est déjà en place{diagnostic.ressource ? ", et la ressource bonus en PDF" : ""}.
              </p>
              <LeadMagnetForm
                ressource={diagnostic.slug}
                page={page}
                endpoint="/api/diagnostic"
                donnees={{ reponses }}
                boutonLabel="Recevoir mon rapport par email"
                succesTexte="Votre rapport arrive dans votre boîte mail dans la minute, avec la ressource bonus. Regardez les spams s'il n'y est pas."
                className="mt-4"
              />
            </div>

            <button type="button" onClick={recommencer} className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Refaire le diagnostic
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
