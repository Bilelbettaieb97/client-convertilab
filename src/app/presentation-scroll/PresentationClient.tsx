"use client";
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { SITE } from "@/lib/constants";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* ─────────────────────────── Helpers ─────────────────────────── */

const GRAD = "linear-gradient(135deg,#8b5cf6,#e04090)";
const gradText =
  "bg-[linear-gradient(135deg,#8b5cf6,#e04090)] bg-clip-text text-transparent";

const fmt = (n: number) => Math.round(n).toLocaleString("fr-FR");

const genId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

const notify = (body: Record<string, unknown>) =>
  fetch("/api/notify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).catch(() => {});

const promoApi = (body: Record<string, unknown>) =>
  fetch("/api/promo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).catch(() => {});

/* Compteur animé au scroll */
function CountUp({ to, suffix = "", dec = 0 }: { to: number; suffix?: string; dec?: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.4 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, to]);
  return (
    <span ref={ref as unknown as RefObject<HTMLSpanElement>}>
      {val.toFixed(dec).replace(".", ",")}
      {suffix}
    </span>
  );
}

/* Titre de section */
function SectionTitle({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <>
      <p className={`text-xs font-bold uppercase tracking-[0.18em] mb-3 ${gradText}`}>{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-6">{children}</h2>
    </>
  );
}

const card = "rounded-2xl border border-white/10 bg-white/[0.03] p-5";

/* ─────────────────────────── Outil : Audit /10 ─────────────────────────── */

const AUDIT_ITEMS = [
  "Il s'affiche en moins de 3 secondes",
  "Il est impeccable sur mobile",
  "On le trouve facilement sur Google",
  "On peut vous contacter / réserver en 1 clic",
  "Son design a moins de 3 ans",
  "Il a une fiche Google Business à jour",
];

function AuditTool() {
  const [checked, setChecked] = useState<boolean[]>(() => AUDIT_ITEMS.map(() => false));
  const n = checked.filter(Boolean).length;
  const score = Math.round((n / AUDIT_ITEMS.length) * 10);
  const verdict =
    n === 0
      ? "Cochez ce que votre site fait déjà…"
      : score <= 3
        ? "🔴 Votre site vous fait perdre des clients chaque jour."
        : score <= 6
          ? "🟠 Correct, mais il laisse filer des opportunités."
          : score <= 8
            ? "🟡 Bon site — on peut le rendre redoutable."
            : "🟢 Excellent ! On optimise les derniers détails.";
  return (
    <div className="grid md:grid-cols-[1.25fr_.75fr] gap-8 items-center">
      <div className="flex flex-col gap-2.5">
        {AUDIT_ITEMS.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setChecked((c) => c.map((v, k) => (k === i ? !v : v)))}
            className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-base transition-all ${
              checked[i] ? "border-emerald-400/40 bg-emerald-400/10" : "border-white/10 bg-white/[0.03] hover:border-violet-400/40"
            }`}
          >
            <span
              className={`grid h-6 w-6 flex-none place-items-center rounded-md border-2 text-sm font-bold ${
                checked[i] ? "border-emerald-400 bg-emerald-400 text-[#0a0a1a]" : "border-white/15 text-transparent"
              }`}
            >
              ✓
            </span>
            {item}
          </button>
        ))}
      </div>
      <div className="text-center">
        <div className={`text-7xl font-black leading-none ${gradText}`}>
          {score}
          <span className="text-3xl text-white/50">/10</span>
        </div>
        <p className="mt-4 text-lg text-white/85">{verdict}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────── Outil : ROI + break-even ─────────────────────────── */

const ROI_PRESETS = [
  { label: "🍽️ Restaurant", panier: 35, clients: 15 },
  { label: "🔨 Artisan", panier: 450, clients: 3 },
  { label: "🧘 Coach", panier: 90, clients: 6 },
  { label: "💼 Consultant", panier: 800, clients: 2 },
];

function RoiTool() {
  const price = 1290;
  const [panier, setPanier] = useState(150);
  const [clients, setClients] = useState(4);
  const [preset, setPreset] = useState<number | null>(null);
  const rev = panier * clients;
  const nCli = Math.max(1, Math.ceil(price / panier));
  const payMonths = rev > 0 ? price / rev : 99;
  const pay =
    payMonths * 30 <= 1 ? "moins d'1 jour" : payMonths < 1 ? `≈ ${Math.round(payMonths * 30)} jours` : `≈ ${payMonths.toFixed(1).replace(".", ",")} mois`;

  // break-even chart
  const ox = 8, oy = 168, plotW = 444, plotH = 154;
  const yMax = Math.max(rev * 12, price) * 1.12 || 1;
  const X = (m: number) => ox + (m / 12) * plotW;
  const Y = (v: number) => oy - (v / yMax) * plotH;
  const pts = Array.from({ length: 13 }, (_, m) => `${X(m).toFixed(1)},${Y(rev * m).toFixed(1)}`).join(" ");
  const areaPts = `${ox},${oy} ${pts} ${ox + plotW},${oy}`;
  const cy = Y(price);
  const mStar = rev > 0 ? price / rev : 99;

  const setP = (p: (typeof ROI_PRESETS)[number], i: number) => {
    setPanier(p.panier);
    setClients(p.clients);
    setPreset(i);
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-2">
          {ROI_PRESETS.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setP(p, i)}
              className={`rounded-full border px-3.5 py-2 text-sm font-semibold transition-all ${
                preset === i ? "border-transparent text-white" : "border-white/10 bg-white/[0.06] text-white/85 hover:border-violet-400/50"
              }`}
              style={preset === i ? { backgroundImage: GRAD } : undefined}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div>
          <label className="block text-base mb-2">
            Ce que vous rapporte <b>un</b> nouveau client : <b className={gradText}>{fmt(panier)} €</b>
          </label>
          <input type="range" min={20} max={2000} step={10} value={panier} onChange={(e) => { setPanier(+e.target.value); setPreset(null); }} className="w-full accent-[#8b5cf6]" />
        </div>
        <div>
          <label className="block text-base mb-2">
            Nouveaux clients / mois grâce au site : <b className={gradText}>{clients}</b>
          </label>
          <input type="range" min={1} max={30} step={1} value={clients} onChange={(e) => { setClients(+e.target.value); setPreset(null); }} className="w-full accent-[#8b5cf6]" />
        </div>
      </div>
      <div className="rounded-2xl border border-violet-400/30 bg-[linear-gradient(180deg,rgba(139,92,246,.12),rgba(224,64,144,.06))] p-6">
        <div className="mb-3 flex gap-4 text-sm text-white/60">
          <span><i className="inline-block h-3 w-3 rounded-sm align-middle mr-1.5" style={{ background: "#8b5cf6" }} />Revenus cumulés</span>
          <span><i className="inline-block h-3 w-3 rounded-sm align-middle mr-1.5" style={{ background: "#e04090" }} />Coût du site</span>
        </div>
        <svg viewBox="0 0 460 190" className="mb-4 block h-[150px] w-full overflow-visible">
          <defs>
            <linearGradient id="revStrokeP" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#8b5cf6" /><stop offset="1" stopColor="#e04090" />
            </linearGradient>
            <linearGradient id="revFillP" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8b5cf6" stopOpacity=".45" /><stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={areaPts} fill="url(#revFillP)" />
          <line x1={ox} y1={cy} x2={ox + plotW} y2={cy} stroke="#e04090" strokeWidth={2} strokeDasharray="5 5" opacity={0.8} />
          <polyline points={pts} fill="none" stroke="url(#revStrokeP)" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
          {mStar <= 12 && <circle cx={X(mStar)} cy={cy} r={6} fill="#fff" stroke="#8b5cf6" strokeWidth={3} />}
        </svg>
        <div className="flex justify-between text-white/60"><span>Votre site rapporte</span><b className={`text-xl ${gradText}`}>{fmt(rev)} €/mois</b></div>
        <div className="mt-2 flex justify-between text-white/60"><span>Remboursé en</span><b className={`text-xl ${gradText}`}>{pay}</b></div>
        <div className="mt-3 border-t border-white/10 pt-3 flex justify-between items-baseline text-white/60"><span>Gain net la 1ʳᵉ année</span><b className={`text-2xl ${gradText}`}>+ {fmt(rev * 12 - price)} €</b></div>
        <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-emerald-100">
          👉 Remboursé dès votre <b>{nCli}{nCli === 1 ? "ᵉʳ" : "ᵉ"} client</b>. Le reste, c'est votre marge.
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── Outil : Simulateur temps ─────────────────────────── */

function SimulateurTool() {
  const [m, setM] = useState(6);
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <div className={`text-5xl font-black mb-3 ${gradText}`}>À {m} mois</div>
        <p className="text-white/60 mb-3">Faites glisser le temps qui passe :</p>
        <input type="range" min={1} max={12} step={1} value={m} onChange={(e) => setM(+e.target.value)} className="w-full accent-[#8b5cf6]" />
      </div>
      <div className="flex flex-col gap-4">
        {[
          { l: "👀 Visiteurs / mois", v: fmt(200 + m * 135) },
          { l: "📩 Demandes de contact / mois", v: fmt(4 + m * 2) },
          { l: "🎉 Nouveaux clients cumulés", v: fmt(Math.round(m * 3.2)) },
        ].map((r, i) => (
          <div key={i} className={`${card} flex items-center justify-between`}>
            <span className="text-white/85">{r.l}</span>
            <span className={`text-2xl font-black ${gradText}`}>{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── Outil : Coût de l'inaction ─────────────────────────── */

function CoutInactionTool() {
  const [m, setM] = useState(6);
  const cli = m * 3;
  const rev = cli * 150;
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-white/60 mb-2">Depuis combien de mois cherchez-vous plus de clients ?</p>
        <div className={`text-5xl font-black mb-3 ${gradText}`}>{m} mois</div>
        <input type="range" min={1} max={24} step={1} value={m} onChange={(e) => setM(+e.target.value)} className="w-full accent-[#8b5cf6]" />
      </div>
      <div>
        <div className={`${card} flex items-center justify-between`}><span className="text-white/85">Clients potentiellement manqués</span><b className={`text-2xl ${gradText}`}>{fmt(cli)}</b></div>
        <div className={`${card} mt-3 flex items-center justify-between`}><span className="text-white/85">Chiffre d'affaires envolé</span><b className={`text-2xl ${gradText}`}>{fmt(rev)} €</b></div>
        <div className="mt-4 rounded-xl border border-[#e04090]/30 bg-[#e04090]/10 p-3 text-pink-100">
          ⏳ En {m} mois, ce sont peut-être <b>{fmt(rev)} €</b> qui vous ont échappé.
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── Outil : Configurateur ─────────────────────────── */

const CONF_MAP = {
  essentiel: ["Essentiel", "690€", "La landing page premium qui transforme vos visiteurs en clients."],
  pro: ["Pro", "1 290€", "Le site vitrine complet, optimisé Google et prêt à convertir."],
  premium: ["Premium", "2 380€", "La boutique / site sur-mesure avec vos outils marketing."],
} as const;

function ConfOpt({ on, onClick, children }: { on: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-4 py-2.5 text-base font-semibold transition-all ${on ? "border-transparent text-white" : "border-white/10 bg-white/[0.06] text-white/85 hover:border-violet-400/50"}`}
      style={on ? { backgroundImage: GRAD } : undefined}
    >
      {children}
    </button>
  );
}

function ConfigurateurTool() {
  const [type, setType] = useState<"landing" | "vitrine" | "ecom">("landing");
  const [admin, setAdmin] = useState(false);
  const tier: keyof typeof CONF_MAP = type === "ecom" ? "premium" : type === "vitrine" || admin ? "pro" : "essentiel";
  const [name, priceLabel, desc] = CONF_MAP[tier];

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-white/60 mb-2">De quoi avez-vous besoin ?</p>
          <div className="flex flex-col gap-2">
            <ConfOpt on={type === "landing"} onClick={() => setType("landing")}>Une page qui convertit</ConfOpt>
            <ConfOpt on={type === "vitrine"} onClick={() => setType("vitrine")}>Un site vitrine complet</ConfOpt>
            <ConfOpt on={type === "ecom"} onClick={() => setType("ecom")}>Vendre en ligne</ConfOpt>
          </div>
        </div>
        <div>
          <p className="text-white/60 mb-2">Gérer votre contenu vous-même ?</p>
          <div className="flex gap-2">
            <ConfOpt on={admin} onClick={() => setAdmin(true)}>Oui</ConfOpt>
            <ConfOpt on={!admin} onClick={() => setAdmin(false)}>Non</ConfOpt>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-violet-400/40 bg-[linear-gradient(180deg,rgba(139,92,246,.14),rgba(224,64,144,.06))] p-8 text-center">
        <p className="text-xs uppercase tracking-widest text-white/60">Notre reco pour vous</p>
        <div className="my-1 text-2xl font-black">{name}</div>
        <div className={`text-4xl font-black ${gradText}`}>{priceLabel}</div>
        <p className="mt-3 text-white/60">{desc}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────── Comparateur ─────────────────────────── */

const CMP_ROWS = [
  { name: "⏱️ Mise en ligne", classic: [30, "2–3 mois"], cl: [92, "2–3 semaines"] },
  { name: "💶 Budget", classic: [28, "3 000 € et +"], cl: [88, "dès 690 € · 39 €/mois"] },
  { name: "🎯 Orienté résultats", classic: [25, "« un joli site »"], cl: [95, "pensé pour convertir"] },
  { name: "🤝 Accompagnement", classic: [40, "hotline anonyme"], cl: [100, "Bilel, en direct"] },
] as const;

function Comparateur() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  return (
    <div ref={ref} className="flex flex-col gap-6">
      {CMP_ROWS.map((r, i) => (
        <div key={i} className="grid md:grid-cols-[190px_1fr] gap-4 md:gap-6 items-center">
          <div className="text-lg font-bold">{r.name}</div>
          <div className="flex flex-col gap-2">
            {([["Classique", r.classic, false], ["ConvertiLab", r.cl, true]] as const).map(([who, val, isCl], k) => (
              <div key={k} className="grid grid-cols-[110px_1fr_150px] gap-3 items-center">
                <span className={`text-sm ${isCl ? "text-white/90 font-semibold" : "text-white/50"}`}>{who}</span>
                <div className="h-3.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-[width] duration-1000 ease-out"
                    style={{ width: isVisible ? `${val[0]}%` : "0%", background: isCl ? GRAD : "rgba(255,255,255,.2)" }}
                  />
                </div>
                <b className={`text-sm text-right ${isCl ? gradText : "text-white/70"}`}>{val[1]}</b>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────── Outils gratuits ─────────────────────────── */

const FREE_TOOLS = [
  { ic: "🔍", name: "Audit SEO", desc: "Votre référencement Google noté", href: "/seo-check" },
  { ic: "⚡", name: "Test de vitesse", desc: "La rapidité de votre site", href: "/speed-check" },
  { ic: "🎨", name: "Score de design", desc: "Votre site est-il pro ?", href: "/design-score" },
  { ic: "📊", name: "Estimateur Ads", desc: "Votre budget pub estimé", href: "/estimateur-ads" },
  { ic: "🆚", name: "Comparateur", desc: "Vous vs un concurrent", href: "/comparateur-sites" },
  { ic: "🤖", name: "Robots & Sitemap", desc: "Générés en 1 clic", href: "/generateur-robots-sitemap" },
  { ic: "📈", name: "Rapport sectoriel", desc: "Les tendances de votre secteur", href: "/rapport-sectoriel" },
  { ic: "⚖️", name: "Mentions légales", desc: "Conformes, en 2 minutes", href: "/generateur-mentions-legales" },
];

/* ─────────────────────────── Calendrier RDV branché ─────────────────────────── */

const WD = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const MO = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"];
const pad = (n: number) => String(n).padStart(2, "0");
const toYMD = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

function getWorkDays(count: number): Date[] {
  const out: Date[] = [];
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  let i = 0;
  while (out.length < count && i < count * 3) {
    const d = new Date(t);
    d.setDate(t.getDate() + i);
    const wd = d.getDay();
    if (wd !== 0 && wd !== 6) out.push(d);
    i++;
  }
  return out;
}

function getSlots(ymd: string): string[] {
  const s: string[] = [];
  for (let h = 9; h < 18; h++) for (const m of [0, 30]) s.push(`${pad(h)}:${pad(m)}`);
  const now = new Date();
  if (ymd === toYMD(now)) {
    const min = now.getTime() + 3600000;
    return s.filter((x) => {
      const [h, m] = x.split(":").map(Number);
      const d = new Date(now);
      d.setHours(h, m, 0, 0);
      return d.getTime() >= min;
    });
  }
  return s;
}

function BookingCalendar() {
  const days = useMemo(() => getWorkDays(10), []);
  const [step, setStep] = useState<"form" | "pick" | "done">("form");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [err, setErr] = useState("");
  const [selDate, setSelDate] = useState(() => toYMD(days[0]));
  const [selSlot, setSelSlot] = useState("");
  const leadIdRef = useRef<string | null>(null);
  const slots = useMemo(() => (selDate ? getSlots(selDate) : []), [selDate]);
  const selD = selDate ? new Date(selDate + "T00:00:00") : null;

  const submitCoords = () => {
    if (prenom.trim().length < 2) { setErr("Merci d'indiquer votre prénom."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { setErr("Email invalide, vérifiez le format."); return; }
    if (tel.replace(/\D/g, "").length < 8) { setErr("Numéro de téléphone invalide."); return; }
    setErr("");
    const id = genId();
    leadIdRef.current = id;
    void supabase
      .rpc("upsert_promo_lead", {
        p_id: id,
        p_email: email.trim(),
        p_prenom: prenom.trim(),
        p_telephone: tel.trim(),
        p_entreprise: null,
        p_situation: "RDV via présentation commerciale",
        p_objectif: "Prise de rendez-vous",
        p_urgence: "Non spécifié",
      })
      .then(({ data }) => {
        if (typeof data === "string" && data && data !== id) leadIdRef.current = data;
      });
    void notify({
      formType: "promo_lead",
      name: prenom.trim(),
      email: email.trim(),
      phone: tel.trim(),
      fields: { source: "Présentation /presentation" },
    });
    setStep("pick");
  };

  const confirmSlot = () => {
    if (!selDate || !selSlot) return;
    const [h, m] = selSlot.split(":").map(Number);
    const [y, mo, d] = selDate.split("-").map(Number);
    const slotAt = new Date(y, mo - 1, d, h, m, 0, 0).toISOString();
    if (leadIdRef.current) void promoApi({ action: "update_slot", id: leadIdRef.current, slot_at: slotAt });
    setStep("done");
  };

  const box = "rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,.5)]";
  const stepLabel = "text-xs uppercase tracking-[0.12em] text-white/50 mb-2";

  if (step === "done") {
    const dd = new Date(selDate + "T" + selSlot + ":00");
    const txt = dd.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }) + " à " + selSlot;
    return (
      <div className={`${box} text-center py-10`}>
        <div className="text-5xl">🎉</div>
        <h3 className="text-2xl font-extrabold">Rendez-vous confirmé !</h3>
        <div className={`text-xl font-extrabold ${gradText}`}>{txt}</div>
        <p className="text-white/60">Vous allez recevoir la confirmation par email.<br />À très vite !</p>
      </div>
    );
  }

  return (
    <div className={box}>
      {step === "form" && (
        <>
          <div className={stepLabel}>Vos coordonnées</div>
          <div className="flex flex-col gap-2.5">
            <input value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Votre prénom" className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 outline-none focus:border-violet-400/60" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Votre email" className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 outline-none focus:border-violet-400/60" />
            <input value={tel} onChange={(e) => setTel(e.target.value)} type="tel" placeholder="Votre téléphone" className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 outline-none focus:border-violet-400/60" />
          </div>
          {err && <p className="text-sm text-pink-300 min-h-[1.1em]">{err}</p>}
          <button type="button" onClick={submitCoords} className="h-12 rounded-xl font-extrabold text-white shadow-[0_10px_30px_-8px_rgba(224,64,144,.7)]" style={{ backgroundImage: GRAD }}>
            Choisir mon créneau →
          </button>
          <p className="text-xs text-white/50 text-center">🔒 Vos informations restent 100% confidentielles</p>
        </>
      )}
      {step === "pick" && (
        <>
          <div>
            <div className={stepLabel}>1. Choisissez un jour</div>
            <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
              {days.map((d) => {
                const ymd = toYMD(d);
                const on = ymd === selDate;
                return (
                  <button
                    key={ymd}
                    type="button"
                    onClick={() => { setSelDate(ymd); setSelSlot(""); }}
                    className={`flex-none w-[62px] py-2 rounded-xl flex flex-col items-center gap-0.5 transition-all ${on ? "text-white scale-105 border border-transparent" : "bg-white/[0.06] text-white/80 border border-white/10 hover:bg-white/10"}`}
                    style={on ? { backgroundImage: GRAD } : undefined}
                  >
                    <span className="text-[10px] uppercase tracking-wider opacity-70">{WD[d.getDay()]}</span>
                    <span className="text-lg font-bold leading-none">{d.getDate()}</span>
                    <span className="text-[10px] opacity-60">{MO[d.getMonth()]}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <div className={stepLabel}>
              2. Choisissez une heure
              {selD && <span className="ml-1 normal-case tracking-normal text-white/40">· {selD.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}</span>}
            </div>
            {slots.length === 0 ? (
              <p className="text-sm text-white/60 text-center py-4">Aucun créneau ce jour — choisissez un autre jour.</p>
            ) : (
              <div className="grid grid-cols-4 gap-2">
                {slots.map((s) => {
                  const on = s === selSlot;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelSlot(s)}
                      className={`h-9 rounded-lg text-sm font-semibold transition-all ${on ? "text-white scale-[1.03] border border-transparent" : "bg-white/[0.06] text-white border border-white/10 hover:bg-white/10"}`}
                      style={on ? { backgroundImage: GRAD } : undefined}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <button
            type="button"
            disabled={!selDate || !selSlot}
            onClick={confirmSlot}
            className="h-12 rounded-xl font-extrabold text-white shadow-[0_10px_30px_-8px_rgba(224,64,144,.7)] disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundImage: GRAD }}
          >
            Confirmer mon RDV →
          </button>
          <p className="text-xs text-white/50 text-center">📞 Rendez-vous téléphonique · Gratuit &amp; sans engagement</p>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────── FAQ ─────────────────────────── */

const FAQS = [
  ["« C'est un budget… est-ce que ça vaut le coup ? »", "Un seul nouveau client gagné grâce au site rembourse souvent l'investissement. Et avec le paiement dès 39€/mois, c'est moins qu'un abonnement pro classique."],
  ["« Je n'y connais rien en technique. »", "C'est justement notre rôle. On gère tout de A à Z : design, textes, mise en ligne, Google. Vous n'avez qu'à valider."],
  ["« J'ai déjà un site, mais il ne marche pas. »", "Parfait, on part de l'existant pour une refonte. On garde ce qui fonctionne et on corrige ce qui vous fait perdre des clients."],
  ["« Combien de temps avant d'être en ligne ? »", "Entre 7 jours (formule Essentiel) et 3 semaines (site complet). Rapide, sans bâcler."],
];

function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-2.5 max-w-3xl">
      {FAQS.map(([q, a], i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-white/[0.025] overflow-hidden">
          <button type="button" onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-semibold">
            {q}
            <span className={`text-2xl text-violet-400 transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
          </button>
          <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <div className="overflow-hidden">
              <p className="px-5 pb-4 text-white/60 leading-relaxed">{a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

const TESTIMONIALS = [
  { txt: "Depuis la mise en ligne, j'ai constaté une nette augmentation du nombre de clients et des demandes de contact. Exactement ce que je voulais !", who: "Les Artisans Luthiers", role: "Artisan · Trustpilot ✓", av: "L" },
  { txt: "Bilel comprend votre projet et le rend moderne et impactant. Projet réalisé en 24 h, conforme à 100 %. Excellent rapport qualité-prix.", who: "Gilles", role: "Vaquier de Labaume · Trustpilot ✓", av: "G" },
  { txt: "Impressionnant, la réactivité et la compréhension de mes besoins. Site créé dans la journée. Déjà 2 collègues vont travailler avec lui.", who: "Conseils en Bâtiment", role: "Consultant · Trustpilot ✓", av: "C" },
];

const PACKAGES = [
  { name: "Essentiel", sub: "La landing page qui convertit", price: "690€", mo: "ou dès 39€/mois", reco: false, feats: ["1 page premium orientée conversion", "Design sur-mesure & mobile", "Formulaire de contact connecté", "Mise en ligne sous 7 jours"] },
  { name: "Pro", sub: "Le site vitrine complet", price: "1 290€", mo: "ou dès 59€/mois", reco: true, feats: ["Site multi-sections (jusqu'à 6)", "Optimisation SEO + Google Business", "Formulaires & prise de RDV", "1 an d'hébergement inclus", "Suivi & optimisation"] },
  { name: "Premium", sub: "La machine à clients complète", price: "2 380€", mo: "ou dès 99€/mois", reco: false, feats: ["E-commerce ou site sur-mesure", "Outils marketing automatisés", "Relances email / SMS / WhatsApp", "Espace admin autonome"] },
];

const Section = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`mx-auto max-w-6xl px-5 py-16 md:py-24 ${className}`}>{children}</section>
);

export default function PresentationClient() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a1a] text-[#f5f5f7]">
      {/* Aurora background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[15vw] -right-[10vw] h-[55vw] w-[55vw] rounded-full opacity-40 blur-[90px]" style={{ background: "#8b5cf6" }} />
        <div className="absolute -bottom-[18vw] -left-[12vw] h-[50vw] w-[50vw] rounded-full opacity-40 blur-[90px]" style={{ background: "#e04090" }} />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <Section className="min-h-[92vh] flex flex-col justify-center">
          <div className="flex items-center gap-2.5 mb-auto pt-6">
            <div className="grid h-11 w-11 place-items-center rounded-xl font-black text-white" style={{ backgroundImage: GRAD }}>C</div>
            <span className="text-xl font-extrabold">ConvertiLab</span>
          </div>
          <AnimatedSection>
            <p className={`text-sm font-bold uppercase tracking-[0.18em] mb-4 ${gradText}`}>Agence web · Île-de-France</p>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.03] tracking-tight">
              Transformons votre site en<br /><span className={gradText}>votre meilleur commercial.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/60">
              Un site qui travaille pour vous 24h/24 : il attire, rassure et convertit vos visiteurs en clients — pendant que vous gérez votre métier.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#rdv" className="inline-flex items-center gap-2 rounded-2xl px-7 py-4 font-bold text-white shadow-[0_12px_40px_rgba(224,64,144,.35)]" style={{ backgroundImage: GRAD }}>
                Réserver mon appel gratuit →
              </a>
              <span className="text-white/60">⭐ {SITE.reviews.rating}/5 · {SITE.reviews.count} avis · 150+ entrepreneurs</span>
            </div>
          </AnimatedSection>
          <div className="mb-6" />
        </Section>

        {/* PROBLÈME */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="Le problème">Ce qui vous fait perdre des clients sans même le voir.</SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
              {[["🐌", "Trop lent", "Les visiteurs partent avant même que la page ne s'affiche."], ["🔍", "Invisible sur Google", "Personne ne le trouve, donc personne ne le visite."], ["📉", "Zéro conversion", "Aucun formulaire, aucune prise de RDV, aucun résultat."]].map((c, i) => (
                <div key={i} className={card}>
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-violet-500/15 text-xl">{c[0]}</div>
                  <h3 className="text-lg font-bold mb-1">{c[1]}</h3>
                  <p className="text-white/60">{c[2]}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Section>

        {/* AUDIT */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="Diagnostic express · 30 secondes">Votre site actuel, il vaut <span className={gradText}>combien sur 10 ?</span></SectionTitle>
            <AuditTool />
          </AnimatedSection>
        </Section>

        {/* COÛT INACTION */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="Le coût d'attendre">Chaque mois sans site qui convertit a un <span className={gradText}>prix.</span></SectionTitle>
            <CoutInactionTool />
          </AnimatedSection>
        </Section>

        {/* SOLUTION */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="Notre solution">Un site pensé pour <span className={gradText}>convertir</span>, pas juste pour décorer.</SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
              {[["🎨", "Design premium sur-mesure", "À votre image, moderne, qui inspire confiance dès la première seconde."], ["🔍", "Le référencement Google", "Structure SEO + fiche Google Business pour être trouvé localement."], ["📱", "100% responsive", "Impeccable sur ordinateur, tablette et mobile, sans effort de votre part."], ["🤝", "Formulaires & RDV connectés", "Chaque demande arrive directement dans votre boîte mail. Zéro perte."]].map((c, i) => (
                <div key={i} className={card}>
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-violet-500/15 text-xl">{c[0]}</div>
                  <h3 className="text-lg font-bold mb-1">{c[1]}</h3>
                  <p className="text-white/60">{c[2]}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Section>

        {/* COMPARATEUR */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="Pourquoi nous">Site classique vs <span className={gradText}>ConvertiLab.</span></SectionTitle>
            <Comparateur />
          </AnimatedSection>
        </Section>

        {/* PREUVE */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="La preuve">150+ entrepreneurs nous font <span className={gradText}>déjà confiance.</span></SectionTitle>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[{ n: 150, s: "+", l: "entrepreneurs accompagnés" }, { n: 4.9, s: "★", l: `note Trustpilot (${SITE.reviews.count} avis)`, dec: 1 }, { n: 100, s: "%", l: "artisans, coachs, restaurants & consultants" }].map((st, i) => (
                <div key={i} className={`${card} text-center`}>
                  <div className={`text-5xl font-black ${gradText}`}><CountUp to={st.n} suffix={st.s} dec={st.dec ?? 0} /></div>
                  <p className="mt-2 text-white/60">{st.l}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className={`${card} flex flex-col gap-4`}>
                  <div className="text-amber-400 tracking-widest">★★★★★</div>
                  <p className="text-white/90 leading-relaxed">« {t.txt} »</p>
                  <div className="mt-auto flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full font-bold text-white" style={{ backgroundImage: GRAD }}>{t.av}</div>
                    <div><b className="block text-sm">{t.who}</b><span className="text-xs text-white/60">{t.role}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Section>

        {/* SIMULATEUR */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="Projection dans le temps">Votre site, <span className={gradText}>mois après mois.</span></SectionTitle>
            <SimulateurTool />
          </AnimatedSection>
        </Section>

        {/* ROI */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="Le calcul qui change tout">En combien de temps votre site est-il <span className={gradText}>rentabilisé ?</span></SectionTitle>
            <RoiTool />
          </AnimatedSection>
        </Section>

        {/* CONFIGURATEUR */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="Trouvons VOTRE formule">Configurez le site qu'il vous faut.</SectionTitle>
            <ConfigurateurTool />
          </AnimatedSection>
        </Section>

        {/* FORMULES */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="Nos formules">Choisissez le niveau qui vous ressemble.</SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
              {PACKAGES.map((p, i) => (
                <div key={i} className={`relative rounded-2xl border p-6 flex flex-col ${p.reco ? "border-violet-400/60 bg-[linear-gradient(180deg,rgba(139,92,246,.14),rgba(224,64,144,.06))]" : "border-white/10 bg-white/[0.03]"}`}>
                  {p.reco && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-extrabold uppercase text-white" style={{ backgroundImage: GRAD }}>★ Le plus choisi</div>}
                  <div className="text-lg font-extrabold">{p.name}</div>
                  <div className="text-sm text-white/60 mb-3">{p.sub}</div>
                  <div className={`text-3xl font-black ${p.reco ? gradText : ""}`}>{p.price}</div>
                  <div className="text-sm text-white/60 mb-4">{p.mo}</div>
                  <ul className="flex flex-col gap-2 text-sm">
                    {p.feats.map((f, k) => (<li key={k} className="flex gap-2 text-white/85"><span className="text-emerald-400 flex-none">✓</span>{f}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Section>

        {/* OUTILS GRATUITS */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="En bonus · 100% gratuit">8 outils offerts pour <span className={gradText}>votre visibilité.</span></SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {FREE_TOOLS.map((t, i) => (
                <Link key={i} href={t.href} className={`${card} block transition-transform hover:-translate-y-1.5 hover:border-violet-400/50`}>
                  <div className="text-2xl mb-2">{t.ic}</div>
                  <h3 className="font-bold mb-0.5">{t.name}</h3>
                  <p className="text-sm text-white/60">{t.desc}</p>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </Section>

        {/* GARANTIES */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="Zéro risque pour vous">On enlève tous les freins.</SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
              {[["👀", "Maquette gratuite avant de payer", "Vous voyez votre site avant de sortir votre carte."], ["💳", "Paiement étalé dès 39€/mois", "Un site pro sans trou dans la trésorerie."], ["🔁", "Satisfait ou on retravaille", "On ajuste jusqu'à ce que vous soyez fier de votre site."], ["🔑", "Vous êtes propriétaire", "Votre site, votre domaine, vos contenus. Rien n'est verrouillé."]].map((g, i) => (
                <div key={i} className="flex gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4">
                  <div className="text-2xl">{g[0]}</div>
                  <div><b className="block mb-0.5">{g[1]}</b><p className="text-sm text-white/60">{g[2]}</p></div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Section>

        {/* FAQ */}
        <Section>
          <AnimatedSection>
            <SectionTitle eyebrow="Vos questions, nos réponses">On lève vos derniers doutes.</SectionTitle>
            <Faq />
          </AnimatedSection>
        </Section>

        {/* RDV */}
        <Section className="scroll-mt-10">
          <div id="rdv" />
          <AnimatedSection>
            <div className="grid md:grid-cols-[.85fr_1.15fr] gap-8 items-center">
              <div>
                <SectionTitle eyebrow="Réservez votre créneau">Choisissez le moment de <span className={gradText}>votre appel offert.</span></SectionTitle>
                <ul className="flex flex-col gap-2.5 text-lg">
                  {["30 min, sans engagement", "Vous repartez avec une maquette gratuite", "Toutes vos questions, une réponse claire"].map((t, i) => (
                    <li key={i} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-400/15 text-sm text-emerald-300">✓</span>{t}</li>
                  ))}
                </ul>
                <p className="mt-6 text-white/60">Ou appelez directement : <a href={`tel:${SITE.phone}`} className="font-bold text-white">{SITE.phoneDisplay}</a></p>
              </div>
              <BookingCalendar />
            </div>
          </AnimatedSection>
        </Section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-10 text-center text-white/50 text-sm">
          <p>ConvertiLab · {SITE.phoneDisplay} · {SITE.email}</p>
          <p className="mt-1">© {new Date().getFullYear()} ConvertiLab — Tous droits réservés</p>
        </footer>
      </div>
    </main>
  );
}
