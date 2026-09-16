"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion-safe";
import { ArrowLeft, ArrowRight, CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/motion/border-beam";
import { Reveal } from "@/components/motion/reveal";
import { MotsClesVague } from "@/components/motion/mots-cles-vague";
import { Conteneur, Surtitre } from "./pole-ui";

export interface FormulaireOption {
  /** Valeur envoyée dans `fields.reponse_etape_1`. */
  value: string;
  label: string;
  /** Icône rendue, ex. `<Globe className="h-5 w-5" />` (nœud React : ce composant est client, la page est serveur). */
  icon?: React.ReactNode;
  desc?: string;
}

export interface FormulaireQuestion {
  /** Ex. « Quel est votre besoin ? », « Quel budget média mensuel ? ». */
  libelle: string;
  /** Précision facultative sous la question, ex. « Aucune coordonnée demandée à cette étape ». */
  aide?: string;
  options: FormulaireOption[];
}

export interface FormulaireFinalProps {
  /** Ancre des CTA et de la barre collante. */
  id?: string;
  /** Valeur envoyée dans `fields.pole` (« site », « publicite », « seo », « ia », « accueil »). */
  pole: string;
  /** Chemin envoyé dans `fields.page` (par défaut : le chemin courant). */
  page?: string;
  surtitre?: string;
  /** H2 du formulaire. */
  titre: string;
  intro?: string | string[];
  question: FormulaireQuestion;
  /** Titre de l'étape 2, ex. « Où vous répondre ? ». */
  titreEtape2: string;
  /** Libellé du bouton d'envoi, ex. « Recevoir ma réponse sous 24 h ». */
  boutonLabel: string;
  /** Libellé du lien Calendly (alternative), ex. « ou réservez 30 min avec le fondateur ». */
  calendlyLabel: string;
  /** Écran de confirmation. */
  confirmation: { titre: string; texte: string };
  /**
   * Fond de la section. « sombre » : pièce maîtresse de la page, fond
   * slate-950 avec halos violet et rose animés, points en filigrane, carte
   * blanche flottante parcourue d'un faisceau lumineux.
   */
  fond?: "blanc" | "gris" | "sombre";
  /** Mots du titre à colorer avec le dégradé qui défile (même effet que le H1 de l'accueil), ex. ["24 h"]. */
  motsCles?: string[];
  className?: string;
}
/**
 * Valeur `fields.project` lue par la série email « Contact »
 * (src/lib/email-series.ts, PROJET_LABELS) : sans elle, l'accusé parlerait
 * d'« un site web » à un prospect venu pour la publicité, le SEO ou l'IA.
 * Sur l'accueil et le hub /services, la réponse de l'étape 1 porte déjà ces
 * valeurs (BESOINS_QUATRE_POLES) : tout pôle absent de cette table les utilise.
 */
const PROJET_PAR_POLE: Record<string, string> = {
  site: "site",
  publicite: "publicite",
  seo: "seo-ia",
  crm: "crm",
  ia: "integration-ia",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEPHONE = /^[\d\s+().-]{10,}$/;

type Etape = 1 | 2 | 3;

/**
 * Formulaire final à deux étapes : une question sans coordonnées (boutons),
 * puis prénom, email, téléphone, message facultatif, case RGPD non
 * pré-cochée. Envoi `POST /api/notify` avec formType « Contact » (Pipedrive
 * étape 12 + accusé de réception + série existants). Honeypot invisible.
 */
export default function FormulaireFinal({
  id = "formulaire",
  pole,
  page,
  surtitre,
  titre,
  intro,
  question,
  titreEtape2,
  boutonLabel,
  calendlyLabel,
  confirmation,
  fond = "gris",
  motsCles,
  className,
}: FormulaireFinalProps) {
  const sombre = fond === "sombre";
  const pathname = usePathname();
  const reduced = useReducedMotionSafe();
  const uid = useId();

  const [etape, setEtape] = useState<Etape>(1);
  const [reponse, setReponse] = useState<FormulaireOption | null>(null);
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [rgpd, setRgpd] = useState(false);
  const [pot, setPot] = useState("");
  const [erreurs, setErreurs] = useState<Record<string, string>>({});
  const [envoi, setEnvoi] = useState(false);
  const [erreurEnvoi, setErreurEnvoi] = useState(false);

  const prenomRef = useRef<HTMLInputElement>(null);
  const premiereOptionRef = useRef<HTMLButtonElement>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);

  const paragraphes = intro ? (Array.isArray(intro) ? intro : [intro]) : [];

  const choisir = (option: FormulaireOption) => {
    setReponse(option);
    setEtape(2);
  };

  // Le bouton cliqué à l'étape 1 est démonté : sans cela, le focus retombe
  // sur <body>. On le place sur le premier champ (étape 2), sur la
  // confirmation (étape 3) ou sur la première option (retour à l'étape 1).
  useEffect(() => {
    const t = setTimeout(() => {
      if (etape === 2) prenomRef.current?.focus();
      else if (etape === 3) confirmationRef.current?.focus();
      else if (reponse) premiereOptionRef.current?.focus();
    }, reduced ? 0 : 320);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [etape]);

  const valider = () => {
    const e: Record<string, string> = {};
    if (prenom.trim().length < 2) e.prenom = "Indiquez votre prénom.";
    if (!EMAIL.test(email.trim())) e.email = "Indiquez une adresse email valide.";
    if (!TELEPHONE.test(telephone.trim())) e.telephone = "Indiquez un numéro de téléphone (10 chiffres minimum).";
    if (!rgpd) e.rgpd = "Cochez la case pour que nous puissions vous répondre.";
    setErreurs(e);
    return Object.keys(e).length === 0;
  };

  const envoyer = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!valider()) return;

    // Honeypot rempli : un robot. On affiche la confirmation sans rien envoyer.
    if (pot) {
      setEtape(3);
      return;
    }

    setEnvoi(true);
    setErreurEnvoi(false);
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Contact",
          name: prenom.trim(),
          email: email.trim(),
          phone: telephone.trim(),
          fields: {
            pole,
            project: PROJET_PAR_POLE[pole] ?? reponse?.value ?? "",
            besoin: reponse?.label ?? "",
            reponse_etape_1: reponse?.label ?? "",
            message: message.trim(),
            page: page ?? pathname ?? "",
          },
        }),
      });
      if (!res.ok) throw new Error(`notify ${res.status}`);

      const w = window as Window & { trackFormConversion?: () => void };
      if (typeof w.trackFormConversion === "function") w.trackFormConversion();

      setEtape(3);
    } catch (err) {
      console.error("[FormulaireFinal] envoi :", err);
      setErreurEnvoi(true);
    } finally {
      setEnvoi(false);
    }
  };

  const anim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -12 },
        transition: { duration: 0.3 },
      };

  const champ =
    "block w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[invalid=true]:border-red-500";
  const etiquette = "block text-sm font-medium text-foreground";
  const erreur = "mt-1 text-sm text-red-600";

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16 sm:py-20",
        sombre
          ? "relative isolate overflow-hidden bg-slate-950 text-white sm:py-28"
          : fond === "gris"
            ? "bg-muted/30"
            : "bg-background",
        className
      )}
    >
      {sombre && (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          {/* Trois halos qui dérivent lentement (keyframes motion-mesh, figés sous lg et en animations réduites). */}
          {/* Halo violet centré derrière la carte : elle flotte sur une lueur. */}
          <div
            className="absolute left-1/2 top-[22%] h-[75vh] w-[80vw] max-w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,hsl(270_70%_60%_/_0.5),transparent_62%)] blur-3xl will-change-transform animate-motion-mesh"
            style={{ "--duration": "24s", "--mesh-x": "4%", "--mesh-y": "-3%" } as React.CSSProperties}
          />
          <div
            className="absolute -top-[10%] -right-[12%] h-[60vh] w-[50vw] max-w-[680px] rounded-full bg-[radial-gradient(circle,hsl(330_70%_60%_/_0.4),transparent_65%)] blur-2xl will-change-transform animate-motion-mesh"
            style={{ "--duration": "28s", "--mesh-x": "-5%", "--mesh-y": "5%" } as React.CSSProperties}
          />
          <div
            className="absolute -bottom-[30%] -left-[10%] h-[55vh] w-[45vw] max-w-[600px] rounded-full bg-[radial-gradient(circle,hsl(250_70%_58%_/_0.35),transparent_65%)] blur-2xl will-change-transform animate-motion-mesh"
            style={{ "--duration": "32s", "--mesh-x": "5%", "--mesh-y": "-6%" } as React.CSSProperties}
          />
          {/* Points en filigrane, fondus vers les bords : la texture d'un plan de travail. */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,black,transparent)]" />
          {/* Voile bas : la section se fond vers la suivante sans arête dure. */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>
      )}
      <Conteneur>
        <Reveal className="mx-auto max-w-3xl text-center">
          {surtitre && <Surtitre className={sombre ? "text-purple-300" : undefined}>{surtitre}</Surtitre>}
          <h2
            className={cn(
              "font-bold leading-tight tracking-tight",
              sombre ? "text-3xl text-white sm:text-4xl lg:text-5xl" : "text-2xl text-foreground sm:text-3xl"
            )}
          >
            {motsCles && motsCles.length > 0 ? <MotsClesVague texte={titre} mots={motsCles} /> : titre}
          </h2>
          {paragraphes.length > 0 && (
            <div className={cn("mt-4 space-y-3 text-lg", sombre && "sm:text-xl")}>
              {paragraphes.map((p, i) => (
                <p key={i} className={cn("leading-relaxed", sombre ? "text-slate-300" : "text-muted-foreground")}>
                  {p}
                </p>
              ))}
            </div>
          )}
        </Reveal>

        <Reveal
          delay={0.1}
          className={cn("relative mx-auto mt-10 rounded-3xl", sombre && "mt-12", question.options.length > 4 ? "max-w-3xl" : "max-w-2xl")}
        >
        <div
          className={cn(
            "overflow-hidden rounded-3xl border bg-card text-foreground",
            sombre
              ? "border-white/10 shadow-[0_40px_120px_-30px_hsl(270_70%_60%_/_0.55),0_1px_0_rgba(255,255,255,0.06)_inset]"
              : "border-border shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)]"
          )}
        >
          {/* Barre de progression : deux étapes (la troisième vue est la confirmation, la barre disparaît). */}
          {etape <= 2 && (
            <div className="flex items-center gap-2 border-b border-border px-6 py-4 sm:px-8" aria-hidden="true">
              {[1, 2].map((s) => (
                <span
                  key={s}
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-colors duration-300",
                    s <= etape ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-muted"
                  )}
                />
              ))}
              <span className="ml-2 text-xs font-medium text-muted-foreground">{etape}/2</span>
            </div>
          )}

          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait" initial={false}>
              {etape === 1 && (
                <motion.div key="etape1" {...anim}>
                  <p className="text-lg font-semibold text-foreground">{question.libelle}</p>
                  {question.aide && <p className="mt-1 text-sm text-muted-foreground">{question.aide}</p>}
                  {/* Deux colonnes dès sm, trois seulement en lg avec plus de 4 options (carte élargie) : les libellés ne se cassent plus mot à mot. */}
                  <div
                    className={cn("mt-5 grid gap-3 sm:grid-cols-2", question.options.length > 4 && "lg:grid-cols-3")}
                    role="group"
                    aria-label={question.libelle}
                  >
                    {question.options.map((option, i) => {
                      return (
                        <button
                          key={option.value}
                          ref={i === 0 ? premiereOptionRef : undefined}
                          type="button"
                          onClick={() => choisir(option)}
                          className="group flex min-h-14 items-center gap-3 rounded-2xl border border-border bg-background px-3.5 py-2.5 text-left break-normal hyphens-none transition-[border-color,box-shadow,translate] duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_hsl(270_70%_45%_/_0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                        >
                          {option.icon && (
                            <span
                              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-texte transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none [&>svg]:h-5 [&>svg]:w-5"
                              aria-hidden="true"
                            >
                              {option.icon}
                            </span>
                          )}
                          <span className="min-w-0">
                            <span className="block font-semibold text-foreground">{option.label}</span>
                            {option.desc && <span className="block text-xs text-muted-foreground">{option.desc}</span>}
                          </span>
                          <ArrowRight
                            className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                            aria-hidden="true"
                          />
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {etape === 2 && (
                <motion.form key="etape2" {...anim} onSubmit={envoyer} noValidate className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-lg font-semibold text-foreground">{titreEtape2}</p>
                    {reponse && (
                      <button
                        type="button"
                        onClick={() => setEtape(1)}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 text-xs font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                        {reponse.label}
                      </button>
                    )}
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`${uid}-prenom`} className={etiquette}>
                        Prénom
                      </label>
                      <input
                        ref={prenomRef}
                        id={`${uid}-prenom`}
                        name="prenom"
                        type="text"
                        autoComplete="given-name"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        className={cn(champ, "mt-1.5")}
                        aria-invalid={erreurs.prenom ? true : undefined}
                        aria-describedby={erreurs.prenom ? `${uid}-prenom-err` : undefined}
                        required
                      />
                      {erreurs.prenom && (
                        <p id={`${uid}-prenom-err`} className={erreur}>
                          {erreurs.prenom}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor={`${uid}-telephone`} className={etiquette}>
                        Téléphone
                      </label>
                      <input
                        id={`${uid}-telephone`}
                        name="telephone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        className={cn(champ, "mt-1.5")}
                        aria-invalid={erreurs.telephone ? true : undefined}
                        aria-describedby={erreurs.telephone ? `${uid}-telephone-err` : undefined}
                        required
                      />
                      {erreurs.telephone && (
                        <p id={`${uid}-telephone-err`} className={erreur}>
                          {erreurs.telephone}
                        </p>
                      )}
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor={`${uid}-email`} className={etiquette}>
                        Email
                      </label>
                      <input
                        id={`${uid}-email`}
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={cn(champ, "mt-1.5")}
                        aria-invalid={erreurs.email ? true : undefined}
                        aria-describedby={erreurs.email ? `${uid}-email-err` : undefined}
                        required
                      />
                      {erreurs.email && (
                        <p id={`${uid}-email-err`} className={erreur}>
                          {erreurs.email}
                        </p>
                      )}
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor={`${uid}-message`} className={etiquette}>
                        Message <span className="font-normal text-muted-foreground">(facultatif)</span>
                      </label>
                      <textarea
                        id={`${uid}-message`}
                        name="message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={cn(champ, "mt-1.5 resize-y")}
                      />
                    </div>
                  </div>

                  {/* Honeypot : invisible pour les personnes, rempli par les robots. */}
                  <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor={`${uid}-site`}>Votre site web</label>
                    <input
                      id={`${uid}-site`}
                      name="site_web"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={pot}
                      onChange={(e) => setPot(e.target.value)}
                    />
                  </div>

                  <div className="mt-5">
                    <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
                      <input
                        type="checkbox"
                        name="rgpd"
                        checked={rgpd}
                        onChange={(e) => setRgpd(e.target.checked)}
                        className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-invalid={erreurs.rgpd ? true : undefined}
                        aria-describedby={erreurs.rgpd ? `${uid}-rgpd-err` : undefined}
                        required
                      />
                      <span>
                        J&apos;accepte que ConvertiLab utilise ces informations pour me répondre.{" "}
                        <Link href="/politique-de-confidentialite" className="underline underline-offset-4 hover:text-foreground">
                          Politique de confidentialité
                        </Link>
                      </span>
                    </label>
                    {erreurs.rgpd && (
                      <p id={`${uid}-rgpd-err`} className={erreur}>
                        {erreurs.rgpd}
                      </p>
                    )}
                  </div>

                  {erreurEnvoi && (
                    <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      L&apos;envoi a échoué. Réessayez dans un instant ou appelez-nous au{" "}
                      <a href={`tel:${SITE.phone}`} className="font-semibold underline underline-offset-4">
                        {SITE.phoneDisplay}
                      </a>
                      .
                    </p>
                  )}

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={envoi}
                      className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 text-sm font-semibold text-white shadow-md transition-colors hover:from-purple-700 hover:to-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60"
                    >
                      {envoi ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
                      {boutonLabel}
                      {!envoi && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                    </button>
                    <a
                      href={SITE.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-3 text-sm font-medium text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                      {calendlyLabel}
                      <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
                    </a>
                  </div>
                </motion.form>
              )}

              {etape === 3 && (
                <motion.div
                  key="etape3"
                  ref={confirmationRef}
                  tabIndex={-1}
                  {...anim}
                  className="py-4 text-center focus-visible:outline-none"
                  role="status"
                  aria-live="polite"
                >
                  <span
                    className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100"
                    aria-hidden="true"
                  >
                    <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 text-xl font-bold text-foreground">{confirmation.titre}</p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{confirmation.texte}</p>
                  <a
                    href={SITE.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-semibold text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <CalendarCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                    {calendlyLabel}
                    <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
          {/* Faisceau qui parcourt le contour de la carte (rien en animations réduites). */}
          {sombre && <BorderBeam size={140} duration={11} borderWidth={2} />}
        </Reveal>
        {sombre && (
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-400">
            Vos informations servent uniquement à vous répondre. Aucune revente, aucune newsletter imposée.
          </p>
        )}
      </Conteneur>
    </section>
  );
}
