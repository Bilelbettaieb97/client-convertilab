"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { z } from "zod";
import { supabase } from "@/lib/supabase/client";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  Smartphone,
  Hammer,
  Target,
  ShoppingBag,
  Briefcase,
  Rocket,
  PartyPopper,
  Mail,
  AlertCircle,
  Star,
  ShieldCheck,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

type Step = 1 | 2 | 3 | "recap" | "success";

// ── Données ───────────────────────────────────────────────────────────────────

const SITUATIONS = [
  { id: "zero",        label: "Je pars de zéro",                   Icon: Sparkles   },
  { id: "site_mauvais",label: "J'ai un site qui ne convertit pas", Icon: RefreshCw  },
  { id: "reseaux",     label: "J'ai juste les réseaux sociaux",    Icon: Smartphone },
  { id: "bloque",      label: "J'ai commencé mais bloqué",         Icon: Hammer     },
] as const;

const OBJECTIFS = [
  { id: "leads",   label: "Attirer des clients",   desc: "Génération de leads", Icon: Target      },
  { id: "vendre",  label: "Vendre en ligne",        desc: "E-commerce",          Icon: ShoppingBag },
  { id: "vitrine", label: "Présenter mon activité", desc: "Vitrine pro",         Icon: Briefcase   },
  { id: "lancer",  label: "Lancer un produit",      desc: "Landing page",        Icon: Rocket      },
] as const;

// ── Validation Zod ────────────────────────────────────────────────────────────

const coordsSchema = z.object({
  prenom:     z.string().trim().min(2, "Prénom requis (2 caractères min)").max(100, "Trop long"),
  email:      z.string().trim().email("Email invalide, vérifiez le format").max(255, "Trop long"),
  telephone:  z.string().trim()
                .regex(/^\+33[0-9]{9,10}$/, "Entrez les chiffres de votre numéro après +33"),
  entreprise: z.string().trim().max(200, "Trop long").optional(),
});

type Coords = z.infer<typeof coordsSchema>;

// ── Utilitaires ───────────────────────────────────────────────────────────────

const haptic = (ms = 8) => {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    try { navigator.vibrate(ms); } catch { /* ignore */ }
  }
};

const genId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;

const notify = (body: Record<string, unknown>) =>
  fetch("/api/notify", {
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).catch(() => {});

const promoApi = (body: Record<string, unknown>) =>
  fetch("/api/promo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).catch(() => {});

// ── Composant principal ───────────────────────────────────────────────────────

const PIXEL_ID = "1342588771159528";

const PromoSiteWeb = () => {
  const [step, setStep]           = useState<Step>(1);
  const [situation, setSituation] = useState("");
  const [objectif, setObjectif]   = useState("");
  const [coords, setCoords]       = useState<Coords>({ prenom: "", email: "", telephone: "+33", entreprise: "" });
  const [infosSupp, setInfosSupp] = useState("");
  const [leadId, setLeadId]       = useState<string | null>(null);
  const leadIdRef                 = useRef<string | null>(null);
  const sessionIdRef              = useRef<string>("");
  const [errors, setErrors]       = useState<Record<string, string>>({});
  const [touched, setTouched]     = useState<Record<string, boolean>>({});
  const [liveMsg, setLiveMsg]     = useState("");

  // Booking
  const [bookDate, setBookDate] = useState("");
  const [bookSlot, setBookSlot] = useState("");
  const [bookDone, setBookDone] = useState<{ slotAt: string } | null>(null);

  // Newsletter
  const [nlEmail, setNlEmail] = useState("");
  const [nlDone, setNlDone]   = useState(false);

  const FIELD_ORDER: (keyof Coords)[] = ["prenom", "email", "telephone", "entreprise"];
  const fieldRefs  = useRef<Record<string, HTMLInputElement | null>>({});
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const successRef = useRef<HTMLHeadingElement | null>(null);

  const trackEvent = useCallback((stepName: string, meta: Record<string, unknown> = {}, lid?: string | null) => {
    void promoApi({
      action:     "track",
      session_id: sessionIdRef.current,
      step:       stepName,
      lead_id:    lid !== undefined ? lid : leadIdRef.current,
      metadata:   meta,
    });
  }, []);

  // Init session + tracking visite + Meta Pixel
  useEffect(() => {
    const key = "promo_sid";
    let sid = sessionStorage.getItem(key);
    if (!sid) { sid = genId(); sessionStorage.setItem(key, sid); }
    sessionIdRef.current = sid;
    void promoApi({ action: "track", session_id: sid, step: "visit", lead_id: null, metadata: {} });

    const w = window as any;
    if (typeof w.fbq === "function" && !w._fbqInitialized) {
      w._fbqInitialized = true;
      w.fbq("init", PIXEL_ID);
      w.fbq("track", "PageView");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Focus management + annonce live region à chaque changement d'étape
  useEffect(() => {
    if (step === "success") {
      requestAnimationFrame(() => successRef.current?.focus());
      setLiveMsg("Demande envoyée. Choisissez un créneau pour votre rendez-vous.");
    } else if (step === "recap") {
      requestAnimationFrame(() => headingRef.current?.focus());
      setLiveMsg("Récapitulatif de votre demande.");
    } else {
      requestAnimationFrame(() => headingRef.current?.focus());
      setLiveMsg(`Étape ${step} sur 3`);
    }
  }, [step]);

  // Pré-rempli email newsletter depuis le formulaire
  useEffect(() => {
    if (coords.email) setNlEmail(coords.email);
  }, [coords.email]);

  // Navigation clavier dans les radiogroups (flèches, Home, End)
  const handleGroupKey = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.getAttribute("role") !== "radio") return;
    const items = Array.from(
      e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="radio"]')
    );
    const idx = items.indexOf(target as HTMLButtonElement);
    if (idx === -1) return;
    let next = idx;
    if (["ArrowDown", "ArrowRight"].includes(e.key))    next = (idx + 1) % items.length;
    else if (["ArrowUp", "ArrowLeft"].includes(e.key))  next = (idx - 1 + items.length) % items.length;
    else if (e.key === "Home")                          next = 0;
    else if (e.key === "End")                           next = items.length - 1;
    else return;
    e.preventDefault();
    items[next]?.focus();
  }, []);

  // Labels lisibles pour le récap
  const situationLabel = useMemo(() => SITUATIONS.find(s => s.id === situation)?.label ?? "", [situation]);
  const objectifLabel  = useMemo(() => OBJECTIFS.find(o => o.id === objectif)?.label  ?? "", [objectif]);

  // Validation d'un seul champ via Zod
  const validateField = useCallback((name: keyof Coords, value: string) => {
    const result = z.object({ [name]: coordsSchema.shape[name] }).safeParse({ [name]: value });
    if (!result.success) {
      const msg = result.error.issues[0]?.message ?? "Invalide";
      setErrors(p => ({ ...p, [name]: msg }));
      return false;
    }
    setErrors(p => {
      if (!p[name]) return p;
      const next = { ...p };
      delete next[name];
      return next;
    });
    return true;
  }, []);

  const handleChange = useCallback((name: keyof Coords, value: string) => {
    setCoords(p => ({ ...p, [name]: value }));
    if (touched[name] || errors[name]) validateField(name, value);
  }, [touched, errors, validateField]);

  const handleBlur = useCallback((name: keyof Coords, value: string) => {
    setTouched(p => ({ ...p, [name]: true }));
    validateField(name, value);
  }, [validateField]);

  // Étape 1 → 2 : situation choisie (220 ms, haptic 8 ms)
  const handleSituation = useCallback((id: string) => {
    haptic(8);
    setSituation(id);
    trackEvent("situation_selected", { situation: id });
    setTimeout(() => setStep(2), 220);
  }, [trackEvent]);

  // Étape 2 → 3 : objectif choisi (180 ms, haptic 10 ms)
  const handleObjectif = useCallback((id: string) => {
    haptic(10);
    setObjectif(id);
    trackEvent("objectif_selected", { objectif: id });
    setTimeout(() => setStep(3), 180);
  }, [trackEvent]);

  // Soumission du formulaire étape 3 — validation synchrone, capture fire-and-forget
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = coordsSchema.safeParse(coords);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach(i => {
        if (i.path[0]) errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      setTouched(p => {
        const n = { ...p };
        Object.keys(errs).forEach(k => { n[k] = true; });
        return n;
      });
      haptic(30);
      const first = FIELD_ORDER.find(f => errs[f]);
      if (first) requestAnimationFrame(() => {
        const el = fieldRefs.current[first];
        if (el) { el.focus(); el.scrollIntoView({ behavior: "smooth", block: "center" }); }
      });
      return;
    }

    // Générer l'ID localement et avancer immédiatement
    // Guard sur la REF (synchrone) pour éviter le double-submit
    const id = leadIdRef.current ?? genId();
    if (!leadIdRef.current) {
      leadIdRef.current = id;
      setLeadId(id);
      const payload = {
        id,
        situation:  SITUATIONS.find(s => s.id === situation)?.label ?? situation,
        objectif:   OBJECTIFS.find(o => o.id === objectif)?.label   ?? objectif,
        urgence:    "Non spécifié",
        prenom:     parsed.data.prenom,
        email:      parsed.data.email,
        telephone:  parsed.data.telephone,
        entreprise: parsed.data.entreprise || null,
      };
      // Capture 1 — upsert sur email ; notification uniquement si nouvel email
      void supabase.rpc("upsert_promo_lead", {
        p_id:         id,
        p_email:      payload.email,
        p_prenom:     payload.prenom,
        p_telephone:  payload.telephone,
        p_entreprise: payload.entreprise ?? null,
        p_situation:  payload.situation,
        p_objectif:   payload.objectif,
        p_urgence:    payload.urgence,
      }).then(({ data: resolvedId }) => {
        const isNew = !resolvedId || resolvedId === id;
        if (resolvedId && resolvedId !== id) {
          setLeadId(resolvedId);
          leadIdRef.current = resolvedId;
        }
        if (isNew) {
          notify({
            formType: "promo_lead",
            name:     payload.prenom,
            email:    payload.email,
            phone:    payload.telephone,
            company:  payload.entreprise ?? undefined,
            fields:   { situation: payload.situation, objectif: payload.objectif },
          });
        }
      });
      if (typeof window !== "undefined") {
        const w = window as any;
        if (w.dataLayer) w.dataLayer.push({ event: "promo_lead_submit" });
        if (typeof w.fbq === "function" && w._fbqInitialized) {
          w.fbq("track", "Lead", { content_name: "Promo Site Web 300€", currency: "EUR", value: 300 });
        }
      }
      trackEvent("form_submitted", { situation: payload.situation, objectif: payload.objectif }, id);
    }

    haptic(50);
    setStep("recap");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Capture 2 — infos supplémentaires, fire-and-forget
  const handleConfirm = () => {
    const infos = infosSupp.trim().slice(0, 2000);
    if (leadIdRef.current && infos) {
      void promoApi({ action: "update_lead", id: leadIdRef.current, infos_supp: infos });
    }
    trackEvent("infos_confirmed", { has_infos: !!infos });
    haptic(15);
    setStep("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Capture 3 — RDV, fire-and-forget
  const handleBookingConfirm = () => {
    if (!bookDate || !bookSlot) return;
    const [h, m]     = bookSlot.split(":").map(Number);
    const [y, mo, d] = bookDate.split("-").map(Number);
    const slotAt     = new Date(y, mo - 1, d, h, m, 0, 0);
    setBookDone({ slotAt: slotAt.toISOString() });
    setLiveMsg("Rendez-vous confirmé.");
    haptic(20);
    if (leadIdRef.current) {
      void promoApi({ action: "update_slot", id: leadIdRef.current, slot_at: slotAt.toISOString() });
    }
    trackEvent("rdv_booked", { slot_at: slotAt.toISOString() });
  };

  // Capture 4 — newsletter, fire-and-forget
  const handleNewsletter = () => {
    const email = nlEmail.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return;
    setNlDone(true);
    haptic(15);
    void promoApi({ action: "newsletter", email });
    trackEvent("newsletter_subscribed");
    // « Newsletter » avec la majuscule : c'est la clé exacte de EMAIL_SERIES.
    // En minuscules, la recherche échouait en silence et ces inscrits ne
    // recevaient AUCUNE relance, sans la moindre erreur visible.
    notify({ formType: "Newsletter", email });
  };

  const progress = typeof step === "number" ? step : 3;

  return (
    <>
      <style>{`
        @keyframes promo-blob {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          50%      { transform: translate3d(8%,4%,0) scale(1.08); }
        }
        .promo-blob { animation: promo-blob 12s ease-in-out infinite; will-change: transform; }

        @keyframes promo-pop {
          0%   { transform: scale(.85); opacity: 0; }
          60%  { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1);   opacity: 1; }
        }
        .promo-pop { animation: promo-pop .25s cubic-bezier(.34,1.56,.64,1) both; }

        @keyframes promo-slide-up {
          from { transform: translate3d(0,12px,0); opacity: 0; }
          to   { transform: translate3d(0,0,0);    opacity: 1; }
        }
        .promo-slide { animation: promo-slide-up .32s cubic-bezier(.22,.61,.36,1) both; }

        @keyframes promo-shake {
          0%,100% { transform: translateX(0); }
          20%     { transform: translateX(-4px); }
          40%     { transform: translateX(4px); }
          60%     { transform: translateX(-3px); }
          80%     { transform: translateX(2px); }
        }
        .promo-shake { animation: promo-shake .35s ease-in-out both; }

        @keyframes promo-shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        .promo-cta {
          background: linear-gradient(110deg,#a78bfa 0%,#ec4899 45%,#a78bfa 55%,#ec4899 100%);
          background-size: 200% 100%;
          animation: promo-shimmer 3.5s linear infinite;
        }
        .promo-card { contain: layout style paint; }

        @media (prefers-reduced-motion: reduce) {
          .promo-blob, .promo-cta { animation: none !important; }
          .promo-blob { display: none !important; }
          .promo-pop, .promo-slide, .promo-shake { animation-duration: .01ms !important; }
        }
      `}</style>

      <div
        className="min-h-[100dvh] w-full bg-[#0a0a1a] text-white flex items-center justify-center md:p-8 overflow-x-hidden"
        style={{ fontFamily: "system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}
      >
        {/* Skip-link a11y */}
        <a
          href="#promo-form"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-[#0a0a1a] focus:px-3 focus:py-2 focus:rounded-md focus:font-semibold"
        >
          Aller au formulaire
        </a>

        {/* Région live pour lecteurs d'écran */}
        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {liveMsg}
        </div>

        {/* Card principale */}
        <div className="relative w-full overflow-hidden md:max-w-[440px] md:rounded-[2.5rem] md:shadow-[0_30px_120px_-20px_rgba(167,139,250,0.5)] md:border md:border-white/10 md:my-8">

          {/* Gradient blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="promo-blob absolute -top-24 -left-16 w-[340px] h-[340px] rounded-full bg-[#a78bfa] opacity-25 blur-3xl" />
            <div className="promo-blob absolute top-1/3 -right-16 w-[300px] h-[300px] rounded-full bg-[#ec4899] opacity-20 blur-3xl" style={{ animationDelay: "-4s" }} />
          </div>

          {/* Contenu */}
          <div
            id="promo-form"
            className="relative z-10 min-h-[100dvh] md:min-h-[800px] px-5 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-col"
          >

            {/* ── ÉTAPES 1, 2, 3 ── */}
            {(step === 1 || step === 2 || step === 3) && (
              <>
                {/* Hero — étape 1 uniquement */}
                {step === 1 && (
                  <header className="text-center mb-5 promo-slide flex flex-col items-center">
                    {/* Badge pill */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 backdrop-blur-sm mb-2">
                      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#ec4899] opacity-60 animate-ping" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ec4899]" />
                      </span>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#ddd6fe]">
                        Offre exclusive · Paiement en 3×
                      </span>
                    </div>

                    <h1 className="text-[20px] font-bold tracking-tight leading-[1.1]">
                      Votre site web pro
                    </h1>

                    <div
                      className="text-[48px] font-extrabold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#ec4899] py-1 drop-shadow-[0_0_25px_rgba(167,139,250,0.35)]"
                      aria-label="à partir de 300 euros"
                    >
                      à partir de 300€
                    </div>

                    <p className="text-[12px] text-white/70 leading-snug max-w-[300px] mx-auto mt-1">
                      Site vitrine pro livré en{" "}
                      <strong className="text-white font-semibold">2 semaines</strong>.
                      Sans abonnement caché.
                    </p>

                    {/* Preuves sociales */}
                    <div className="flex items-center justify-center gap-2.5 mt-1.5 text-[10px] font-medium text-white/75">
                      <span className="inline-flex items-center gap-1">
                        <Star className="w-3 h-3 text-[#a78bfa] fill-[#a78bfa]" aria-hidden="true" />
                        4,9/5 <span className="text-white/50">(120+ avis)</span>
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/30" aria-hidden="true" />
                      <span className="inline-flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#a78bfa]" aria-hidden="true" />
                        Satisfait ou remboursé
                      </span>
                    </div>
                  </header>
                )}

                {/* Barre de progression */}
                <div
                  className="flex items-center gap-1.5 mb-5"
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={3}
                  aria-valuenow={progress}
                  aria-label={`Progression du formulaire : étape ${progress} sur 3`}
                >
                  {[1, 2, 3].map(n => (
                    <div key={n} aria-hidden="true" className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#a78bfa] to-[#ec4899] transition-all duration-500 ease-out"
                        style={{ width: progress >= n ? "100%" : "0%" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Card formulaire */}
                <div className="promo-card flex-1 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-5 shadow-2xl flex flex-col">

                  {/* ── Étape 1 : Situation ── */}
                  {step === 1 && (
                    <section key="s1" className="promo-slide flex-1 flex flex-col justify-center" aria-labelledby="step1-h">
                      <p className="text-[11px] font-semibold text-[#a78bfa] uppercase tracking-wider mb-1.5">
                        Étape 1 / 3
                      </p>
                      <h2
                        id="step1-h"
                        ref={headingRef}
                        tabIndex={-1}
                        className="text-[18px] font-bold mb-5 leading-tight focus:outline-none"
                      >
                        Où en êtes-vous aujourd&apos;hui ?
                      </h2>

                      <div
                        className="space-y-3"
                        role="radiogroup"
                        aria-labelledby="step1-h"
                        onKeyDown={handleGroupKey}
                      >
                        {SITUATIONS.map(({ id, label, Icon }) => {
                          const active = situation === id;
                          return (
                            <button
                              key={id}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              tabIndex={active || (!situation && id === SITUATIONS[0].id) ? 0 : -1}
                              onClick={() => handleSituation(id)}
                              className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 active:scale-[0.97] touch-manipulation flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec4899] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a1a] ${
                                active
                                  ? "border-[#ec4899] bg-gradient-to-r from-[#a78bfa]/20 to-[#ec4899]/20 shadow-[0_0_20px_-5px_rgba(236,72,153,0.5)]"
                                  : "border-white/10 bg-white/[0.03]"
                              }`}
                            >
                              <div
                                aria-hidden="true"
                                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gradient-to-br from-[#a78bfa] to-[#ec4899] transition-transform ${active ? "scale-110" : ""}`}
                              >
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-[15px] font-semibold flex-1 leading-tight">{label}</span>
                              {active && (
                                <CheckCircle2 className="w-5 h-5 text-[#ec4899] shrink-0 promo-pop" aria-hidden="true" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {/* ── Étape 2 : Objectif ── */}
                  {step === 2 && (
                    <section key="s2" className="promo-slide flex-1 flex flex-col justify-center" aria-labelledby="step2-h">
                      <p className="text-[11px] font-semibold text-[#a78bfa] uppercase tracking-wider mb-1.5">
                        Étape 2 / 3
                      </p>
                      <h2
                        id="step2-h"
                        ref={headingRef}
                        tabIndex={-1}
                        className="text-[18px] font-bold mb-5 leading-tight focus:outline-none"
                      >
                        Quel est l&apos;objectif principal de votre site ?
                      </h2>

                      <div
                        className="space-y-3 mb-6"
                        role="radiogroup"
                        aria-labelledby="step2-h"
                        onKeyDown={handleGroupKey}
                      >
                        {OBJECTIFS.map(({ id, label, desc, Icon }) => {
                          const active = objectif === id;
                          return (
                            <button
                              key={id}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              tabIndex={active || (!objectif && id === OBJECTIFS[0].id) ? 0 : -1}
                              onClick={() => handleObjectif(id)}
                              className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 active:scale-[0.97] touch-manipulation flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec4899] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a1a] ${
                                active
                                  ? "border-[#ec4899] bg-gradient-to-r from-[#a78bfa]/20 to-[#ec4899]/20 shadow-[0_0_20px_-5px_rgba(236,72,153,0.5)]"
                                  : "border-white/10 bg-white/[0.03]"
                              }`}
                            >
                              <div
                                aria-hidden="true"
                                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gradient-to-br from-[#a78bfa] to-[#ec4899] transition-transform ${active ? "scale-110" : ""}`}
                              >
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-[15px] leading-tight">{label}</div>
                                <div className="text-[12px] text-white/50 leading-tight mt-0.5">{desc}</div>
                              </div>
                              {active ? (
                                <CheckCircle2 className="w-5 h-5 text-[#ec4899] shrink-0 promo-pop" aria-hidden="true" />
                              ) : (
                                <ArrowRight className="w-4 h-4 text-white/40 shrink-0" aria-hidden="true" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <button
                        type="button"
                        onClick={() => { haptic(5); setStep(1); }}
                        className="inline-flex items-center gap-1 text-[13px] text-white/60 hover:text-white touch-manipulation min-h-11 px-2 -ml-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec4899]"
                      >
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                        Étape précédente
                      </button>
                    </section>
                  )}

                  {/* ── Étape 3 : Coordonnées ── */}
                  {step === 3 && (
                    <form
                      key="s3"
                      onSubmit={handleSubmit}
                      className="promo-slide flex flex-col"
                      noValidate
                      aria-labelledby="step3-h"
                    >
                      <p className="text-[11px] font-semibold text-[#a78bfa] uppercase tracking-wider mb-1.5">
                        Étape 3 / 3
                      </p>
                      <h2
                        id="step3-h"
                        ref={headingRef}
                        tabIndex={-1}
                        className="text-[18px] font-bold mb-4 leading-tight focus:outline-none"
                      >
                        Dernière étape ✨
                      </h2>

                      {/* Rappel objectif choisi */}
                      <div className="mb-4 p-3.5 rounded-xl bg-gradient-to-r from-[#a78bfa]/10 to-[#ec4899]/10 border border-white/10 text-[13px] text-white/80 leading-relaxed">
                        Parfait, on a noté :{" "}
                        <strong className="text-white">{objectifLabel}</strong> 🎯
                      </div>

                      <div className="space-y-3.5 flex-1">
                        <Field
                          name="prenom"
                          placeholder="Prénom"
                          value={coords.prenom}
                          onChange={v => handleChange("prenom", v)}
                          onBlur={() => handleBlur("prenom", coords.prenom)}
                          error={errors.prenom}
                          touched={touched.prenom}
                          autoComplete="given-name"
                          inputMode="text"
                          inputRef={el => { fieldRefs.current.prenom = el; }}
                        />
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email"
                          value={coords.email}
                          onChange={v => handleChange("email", v)}
                          onBlur={() => handleBlur("email", coords.email)}
                          error={errors.email}
                          touched={touched.email}
                          autoComplete="email"
                          inputMode="email"
                          inputRef={el => { fieldRefs.current.email = el; }}
                        />
                        {/* Téléphone avec préfixe +33 fixe */}
                        <div className={touched.telephone && errors.telephone ? "promo-shake" : undefined}>
                          <label htmlFor="field-telephone" className="sr-only">Téléphone</label>
                          <div className={`flex h-12 rounded-xl bg-white/[0.06] border overflow-hidden transition-colors ${
                            touched.telephone && errors.telephone
                              ? "border-[#ec4899] ring-2 ring-[#ec4899]/25"
                              : "border-white/10 focus-within:border-[#ec4899] focus-within:ring-2 focus-within:ring-[#ec4899]/25"
                          }`}>
                            <span className="flex items-center px-3 text-white/60 text-[15px] border-r border-white/10 bg-white/[0.04] select-none shrink-0">
                              +33
                            </span>
                            <input
                              ref={el => { fieldRefs.current.telephone = el; }}
                              id="field-telephone"
                              name="telephone"
                              type="tel"
                              inputMode="numeric"
                              autoComplete="tel-national"
                              placeholder="6 12 34 56 78"
                              maxLength={10}
                              value={coords.telephone.replace(/^\+33/, "")}
                              onChange={e => {
                                const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                                handleChange("telephone", "+33" + digits);
                              }}
                              onBlur={() => handleBlur("telephone", coords.telephone)}
                              className="flex-1 min-w-0 bg-transparent text-white placeholder:text-white/40 text-[15px] outline-none px-3"
                            />
                          </div>
                          {touched.telephone && errors.telephone && (
                            <p role="alert" className="flex items-start gap-1 text-[11px] text-[#ec4899] mt-1 px-1 promo-pop">
                              <AlertCircle className="w-3 h-3 shrink-0 mt-[1px]" aria-hidden="true" />
                              <span>{errors.telephone}</span>
                            </p>
                          )}
                        </div>
                        <Field
                          name="entreprise"
                          placeholder="Activité (optionnel)"
                          value={coords.entreprise ?? ""}
                          onChange={v => handleChange("entreprise", v)}
                          onBlur={() => handleBlur("entreprise", coords.entreprise ?? "")}
                          error={errors.entreprise}
                          touched={touched.entreprise}
                          autoComplete="organization"
                          inputMode="text"
                          inputRef={el => { fieldRefs.current.entreprise = el; }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="promo-cta w-full mt-5 h-14 rounded-xl text-white font-bold text-[15px] shadow-[0_10px_40px_-10px_rgba(236,72,153,0.7)] active:scale-[0.98] transition-transform touch-manipulation flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a1a]"
                      >
                        <span>
                          Envoyer ma demande{" "}
                          <ArrowRight className="w-4 h-4 inline" aria-hidden="true" />
                        </span>
                      </button>

                      <div className="mt-4 space-y-1.5 text-center">
                        <p className="text-[12px] text-white/60 font-medium">
                          Devis personnalisé sous 24h · Appel de 15 min optionnel
                        </p>
                        <p className="text-[11px] text-white/40">
                          Sans engagement · Pas de carte bancaire requise · Réponse garantie sous 2h
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => { haptic(5); setStep(2); }}
                        className="w-full mt-4 text-[13px] text-white/50 hover:text-white/80 inline-flex items-center justify-center gap-1 touch-manipulation min-h-11 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec4899]"
                      >
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                        Étape précédente
                      </button>

                      <p className="text-[11px] text-white/40 text-center mt-3">
                        🔒 Données confidentielles · aucun spam
                      </p>
                    </form>
                  )}
                </div>
              </>
            )}

            {/* ── RÉCAP ── */}
            {step === "recap" && (
              <div className="promo-slide flex-1 flex flex-col justify-center">
                <div className="text-center mb-4 pt-1">
                  <div
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#ec4899] mb-2 promo-pop shadow-[0_10px_40px_-5px_rgba(236,72,153,0.5)]"
                  >
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h2
                    ref={headingRef}
                    tabIndex={-1}
                    className="text-[18px] font-bold mb-1 focus:outline-none leading-tight"
                  >
                    Merci {coords.prenom}, c&apos;est envoyé !{" "}
                    <span aria-hidden="true">🎉</span>
                  </h2>
                  <p className="text-[12px] text-white/70 px-2">
                    Votre demande nous est bien parvenue. Voulez-vous nous en dire plus sur votre projet ?
                  </p>
                </div>

                {/* Résumé des choix */}
                <div className="rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-3.5 mb-4 space-y-2.5">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#a78bfa] font-semibold mb-0.5">Où vous en êtes</p>
                    <p className="text-[13px] text-white font-medium leading-snug">{situationLabel}</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#a78bfa] font-semibold mb-0.5">Votre objectif</p>
                    <p className="text-[13px] text-white font-medium leading-snug">{objectifLabel}</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="text-[12px] text-white/80 space-y-1">
                    <div>
                      <span className="text-white/50">Email :</span>{" "}
                      <span className="text-white break-all">{coords.email}</span>
                    </div>
                    <div>
                      <span className="text-white/50">Téléphone :</span>{" "}
                      <span className="text-white">{coords.telephone}</span>
                    </div>
                    {coords.entreprise && (
                      <div>
                        <span className="text-white/50">Activité :</span>{" "}
                        <span className="text-white">{coords.entreprise}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Textarea infos supplémentaires */}
                <div className="mb-4">
                  <label htmlFor="infos-supp" className="block text-[12px] font-semibold text-white mb-1">
                    Ajouter des précisions{" "}
                    <span className="text-white/40 font-normal">(optionnel)</span>
                  </label>
                  <p className="text-[11px] text-white/50 mb-1.5 leading-relaxed">
                    Tout détail qui nous aidera à préparer notre échange.
                  </p>
                  <textarea
                    id="infos-supp"
                    value={infosSupp}
                    onChange={e => setInfosSupp(e.target.value.slice(0, 2000))}
                    rows={3}
                    placeholder="Ex : J'aimerais un site avec prise de rendez-vous en ligne, inspiré de…"
                    className="w-full p-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder:text-white/40 text-[13px] outline-none focus:border-[#ec4899] focus:ring-2 focus:ring-[#ec4899]/25 resize-none leading-relaxed"
                    maxLength={2000}
                  />
                  <p className="text-[10px] text-white/40 text-right mt-0.5">{infosSupp.length}/2000</p>
                </div>

                <button
                  type="button"
                  onClick={handleConfirm}
                  className="promo-cta w-full h-12 rounded-xl text-white font-bold text-[14px] shadow-[0_10px_40px_-10px_rgba(236,72,153,0.7)] active:scale-[0.98] transition-transform touch-manipulation flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a1a]"
                >
                  <span>
                    {infosSupp.trim() ? "Ajouter ces infos" : "Continuer"}{" "}
                    <ArrowRight className="w-4 h-4 inline" aria-hidden="true" />
                  </span>
                </button>

                <p className="text-[10px] text-white/40 text-center mt-2">
                  🔒 Données confidentielles · aucun spam
                </p>
              </div>
            )}

            {/* ── SUCCESS ── */}
            {step === "success" && (
              <div className="promo-slide flex-1 flex flex-col justify-start pt-4">
                <div className="text-center mb-4">
                  <div
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#ec4899] mb-2 promo-pop shadow-[0_10px_40px_-5px_rgba(236,72,153,0.7)]"
                  >
                    {bookDone
                      ? <CheckCircle2 className="w-7 h-7 text-white" />
                      : <PartyPopper className="w-7 h-7 text-white" />
                    }
                  </div>
                  <h1
                    ref={successRef}
                    tabIndex={-1}
                    className="text-[22px] font-bold mb-1.5 focus:outline-none"
                  >
                    {bookDone ? `RDV confirmé ${coords.prenom} ✅` : `Bravo ${coords.prenom} 🎉`}
                  </h1>
                  <p className="text-[14px] text-white/80 px-2 leading-snug">
                    {bookDone
                      ? "Vous recevrez un rappel par email. À très vite !"
                      : "Choisissez un créneau (15 min, gratuit) pour qu'on discute de votre projet."}
                  </p>
                </div>

                {bookDone ? (
                  <div className="flex flex-col gap-3">
                    {/* Confirmation RDV */}
                    <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4 text-center">
                      <p className="text-[12px] uppercase tracking-wider text-white/60 mb-1">Votre rendez-vous</p>
                      <p className="text-white font-semibold text-[16px] leading-snug">
                        {new Date(bookDone.slotAt).toLocaleString("fr-FR", {
                          dateStyle: "full",
                          timeStyle: "short",
                        })}
                      </p>
                    </div>

                    {/* Newsletter CTA */}
                    <div className="rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-300/20 p-4 text-center">
                      {nlDone ? (
                        <div className="flex flex-col items-center gap-1.5 promo-pop">
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                          </div>
                          <p className="text-[15px] font-semibold text-white">Bienvenue dans la communauté !</p>
                          <p className="text-[12px] text-white/80">
                            Vous recevrez nos meilleurs conseils directement dans votre boîte mail.
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 mb-2">
                            <Mail className="w-4 h-4 text-purple-300" aria-hidden="true" />
                          </div>
                          <p className="text-[15px] font-semibold text-white mb-0.5">
                            Ne manquez plus aucune astuce
                          </p>
                          <p className="text-[12px] text-white/70 mb-3 leading-snug">
                            Conseils marketing digital, SEO, conversion… directement dans votre boîte.
                          </p>
                          <div className="flex flex-col gap-2">
                            <input
                              type="email"
                              value={nlEmail}
                              onChange={e => setNlEmail(e.target.value)}
                              placeholder="votre@email.com"
                              aria-label="Votre adresse email pour la newsletter"
                              className="w-full h-10 px-3 rounded-xl bg-white/[0.08] border border-white/10 text-white placeholder:text-white/40 text-[14px] outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/25 transition-colors"
                            />
                            <button
                              type="button"
                              onClick={handleNewsletter}
                              className="w-full h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-[14px] shadow-[0_8px_24px_-6px_rgba(236,72,153,0.6)] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                              S&apos;abonner gratuitement
                              <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </button>
                          </div>
                          <p className="text-[11px] text-white/50 mt-2">Aucun spam. Désinscription à tout moment.</p>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <BookingPicker
                    date={bookDate}
                    slot={bookSlot}
                    onDate={d => { setBookDate(d); setBookSlot(""); haptic(8); }}
                    onSlot={s => { setBookSlot(s); haptic(12); }}
                    onConfirm={handleBookingConfirm}
                  />
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

// ── Composant Field ───────────────────────────────────────────────────────────

interface FieldProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  type?: string;
  error?: string;
  touched?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "search" | "url" | "none";
  inputRef?: React.Ref<HTMLInputElement>;
}

const Field = ({
  name, placeholder, value, onChange, onBlur,
  type = "text", error, touched, autoComplete, inputMode, inputRef,
}: FieldProps) => {
  const showError = !!(touched && error);
  const inputId   = `field-${name}`;
  const errorId   = `${name}-error`;

  return (
    <div className={showError ? "promo-shake" : undefined}>
      <label htmlFor={inputId} className="sr-only">{placeholder}</label>
      <input
        ref={inputRef}
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={`w-full h-12 px-4 rounded-xl bg-white/[0.06] border text-white placeholder:text-white/40 text-[15px] outline-none transition-colors focus:outline-none ${
          showError
            ? "border-[#ec4899] focus:border-[#ec4899] focus:ring-2 focus:ring-[#ec4899]/25"
            : "border-white/10 focus:border-[#ec4899] focus:ring-2 focus:ring-[#ec4899]/25"
        }`}
        aria-invalid={showError || undefined}
        aria-errormessage={showError ? errorId : undefined}
        aria-describedby={showError ? errorId : undefined}
      />
      {showError && (
        <p
          id={errorId}
          role="alert"
          className="flex items-start gap-1 text-[11px] text-[#ec4899] mt-1 px-1 promo-pop"
        >
          <AlertCircle className="w-3 h-3 shrink-0 mt-[1px]" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

// ── Helpers BookingPicker ─────────────────────────────────────────────────────

const WEEKDAY_SHORT = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const MONTH_SHORT   = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"];

function toYMD(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getWorkDays(count: number): Date[] {
  const out: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let i = 0;
  while (out.length < count && i < count * 3) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const wd = d.getDay();
    if (wd !== 0 && wd !== 6) out.push(d);
    i++;
  }
  return out;
}

function getSlotsForDate(ymd: string): string[] {
  const slots: string[] = [];
  for (let h = 9; h < 18; h++) {
    for (const m of [0, 30]) {
      slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }
  const now = new Date();
  if (ymd === toYMD(now)) {
    const minMs = now.getTime() + 60 * 60 * 1000;
    return slots.filter(s => {
      const [h, m] = s.split(":").map(Number);
      const d = new Date(now);
      d.setHours(h, m, 0, 0);
      return d.getTime() >= minMs;
    });
  }
  return slots;
}

// ── Composant BookingPicker ───────────────────────────────────────────────────

interface BookingPickerProps {
  date: string;
  slot: string;
  onDate: (d: string) => void;
  onSlot: (s: string) => void;
  onConfirm: () => void;
}

const BookingPicker = ({ date, slot, onDate, onSlot, onConfirm }: BookingPickerProps) => {
  const days  = useMemo(() => getWorkDays(10), []);
  const slots = useMemo(() => (date ? getSlotsForDate(date) : []), [date]);

  // Auto-sélectionner le premier jour disponible
  useEffect(() => {
    if (!date && days[0]) onDate(toYMD(days[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedDate = date ? new Date(date + "T00:00:00") : null;

  return (
    <div className="flex flex-col gap-3">

      {/* Sélecteur de jour */}
      <div>
        <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1.5 px-1">
          1. Choisissez un jour
        </p>
        <div
          className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
          role="group"
          aria-label="Sélecteur de jour"
        >
          {days.map(d => {
            const ymd    = toYMD(d);
            const active = ymd === date;
            return (
              <button
                key={ymd}
                type="button"
                onClick={() => onDate(ymd)}
                aria-pressed={active}
                aria-label={d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                className={`snap-start shrink-0 w-[60px] py-2 rounded-xl flex flex-col items-center gap-0.5 transition-all touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec4899] ${
                  active
                    ? "bg-gradient-to-br from-[#a78bfa] to-[#ec4899] text-white shadow-[0_8px_24px_-6px_rgba(236,72,153,0.6)] scale-105"
                    : "bg-white/[0.06] text-white/80 border border-white/10 hover:bg-white/10"
                }`}
              >
                <span className={`text-[9px] uppercase tracking-wider ${active ? "text-white/90" : "text-white/50"}`}>
                  {WEEKDAY_SHORT[d.getDay()]}
                </span>
                <span className="text-[18px] font-bold leading-none">{d.getDate()}</span>
                <span className={`text-[9px] ${active ? "text-white/80" : "text-white/40"}`}>
                  {MONTH_SHORT[d.getMonth()]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sélecteur de créneau */}
      <div>
        <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1.5 px-1">
          2. Choisissez une heure
          {selectedDate && (
            <span className="text-white/40 normal-case tracking-normal ml-1">
              · {selectedDate.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
            </span>
          )}
        </p>

        {slots.length === 0 ? (
          <p className="text-[12px] text-white/60 text-center py-4 bg-white/[0.04] rounded-xl border border-white/10">
            Aucun créneau disponible ce jour. Choisissez un autre jour.
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-1.5" role="group" aria-label="Sélecteur de créneau">
            {slots.map(s => {
              const active = s === slot;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => onSlot(s)}
                  aria-pressed={active}
                  aria-label={`Créneau ${s}`}
                  className={`h-9 rounded-xl text-[12px] font-semibold transition-all touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec4899] ${
                    active
                      ? "bg-gradient-to-br from-[#a78bfa] to-[#ec4899] text-white shadow-[0_6px_18px_-4px_rgba(236,72,153,0.55)] scale-[1.03]"
                      : "bg-white/[0.06] text-white border border-white/10 hover:bg-white/10 active:scale-95"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Bouton de confirmation */}
      <button
        type="button"
        disabled={!date || !slot}
        onClick={onConfirm}
        className="h-12 rounded-2xl bg-gradient-to-r from-[#a78bfa] to-[#ec4899] text-white font-bold text-[15px] shadow-[0_10px_30px_-8px_rgba(236,72,153,0.7)] disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-[0.98] flex items-center justify-center gap-2 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a1a]"
      >
        Confirmer mon RDV
        <ArrowRight className="w-5 h-5" aria-hidden="true" />
      </button>

      <p className="text-[10px] text-white/50 text-center">
        Rendez-vous téléphonique de 15 min · Gratuit &amp; sans engagement
      </p>
    </div>
  );
};

export default PromoSiteWeb;
