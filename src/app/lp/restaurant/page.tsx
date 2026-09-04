import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import {
  Star,
  Crown,
  Ban,
  Search,
  Users,
  CalendarCheck,
  ArrowRight,
  UtensilsCrossed,
  Image as ImageIcon,
  MapPin,
  Clock,
  MessageSquareQuote,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import AdsLeadForm from "../site-internet/AdsLeadForm";
import Reveal from "../site-internet/Reveal";
import StatsBand from "../_components/StatsBand";
import { avis } from "../_components/avis";

const ACCENT = "from-orange-500 via-rose-500 to-red-500";
const ACCENT_BTN = "from-orange-500 to-rose-600";

export const metadata: Metadata = {
  title: { absolute: "Création de site internet pour restaurant | ConvertiLab" },
  description:
    "Un site de restaurant qui remplit vos tables : menu en ligne, réservation, avis et Google Maps. On s'occupe de tout, vous êtes propriétaire. Devis gratuit sous 24h.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE.url}/lp/restaurant` },
};

const reassurance = [
  { icon: Crown, title: "Vous êtes propriétaire", desc: "Votre site est à vous, payé une seule fois." },
  { icon: Ban, title: "Zéro commission", desc: "Vos réservations, sans commission comme sur les plateformes." },
  { icon: MapPin, title: "Trouvé sur Google", desc: "Visible sur Google et Maps quand on cherche où manger." },
];

const steps = [
  { icon: BookOpen, step: "01", title: "On comprend votre restaurant", desc: "Un échange court sur votre carte, votre ambiance et vos clients." },
  { icon: UtensilsCrossed, step: "02", title: "On crée votre site", desc: "Menu, réservation, photos : un design appétissant que vous validez." },
  { icon: CalendarCheck, step: "03", title: "En ligne en 14 jours", desc: "Votre site est livré, optimisé pour Google et prêt à remplir vos tables." },
];

const features = [
  { icon: BookOpen, title: "Menu digital", desc: "Votre carte consultable sur mobile, mise à jour en un clic." },
  { icon: CalendarCheck, title: "Réservation en ligne", desc: "Les clients réservent une table directement, jour et nuit." },
  { icon: ImageIcon, title: "Galerie de vos plats", desc: "De belles photos qui donnent envie de venir manger." },
  { icon: MapPin, title: "Google Maps intégré", desc: "Itinéraire, horaires et adresse pour qu'on vous trouve." },
  { icon: Clock, title: "Horaires & coordonnées", desc: "Toujours à jour, plus d'appels pour demander si c'est ouvert." },
  { icon: Search, title: "SEO local restaurant", desc: "Bien placé quand on cherche « restaurant + votre ville »." },
];

const painPoints = [
  "Vous êtes peu visible sur Google et Google Maps",
  "Votre menu n'est pas consultable en ligne",
  "Aucun moyen de réserver une table sur internet",
  "Vos bons avis clients ne sont pas mis en avant",
];

const stats = [
  { value: "72%", label: "des clients cherchent un restaurant sur Google avant d'y aller" },
  { value: "3x", label: "plus de réservations avec un site optimisé pour le mobile" },
  { value: "88%", label: "consultent les avis en ligne avant de choisir un restaurant" },
];

const caseResults = [
  "+65% de réservations en ligne en 3 mois",
  "1ère page Google sur « restaurant italien Paris 11 »",
  "+40% de couverts le midi en semaine",
  "120 avis Google collectés en 6 mois",
];

export default function LandingRestaurant() {
  return (
    <div className="min-h-screen lp-bg text-[#1a1310] antialiased">
      <style>{`
        @keyframes lpRise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .lp-rise { opacity: 0; animation: lpRise .8s cubic-bezier(.16,1,.3,1) forwards; }
        .lp-bg { background-color: #fffaf5; }
        .lp-card-shadow { box-shadow: 0 2px 4px rgba(26,19,16,.03), 0 24px 60px -28px rgba(225,90,50,.30); }
        .lp-soft-shadow { box-shadow: 0 1px 3px rgba(26,19,16,.04), 0 16px 40px -24px rgba(26,19,16,.14); }
        @keyframes lpMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .lp-marquee { animation: lpMarquee 55s linear infinite; }
        .lp-marquee:hover { animation-play-state: paused; }
      `}</style>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-32 right-0 w-[42rem] h-[42rem] rounded-full blur-[130px] opacity-[0.22]"
          style={{ background: "radial-gradient(circle, #fb923c 0%, #f43f5e 45%, transparent 70%)" }} />
        <div aria-hidden className="pointer-events-none absolute top-40 -left-40 w-[30rem] h-[30rem] rounded-full blur-[130px] opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }} />

        <header className="relative z-10 border-b border-black/[0.06]">
          <div className="container mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
            <span className="flex items-center gap-3" aria-label="ConvertiLab">
              <Image src="/images/icon-c.png" alt="Logo ConvertiLab" width={56} height={56} className="h-12 w-12" priority />
              <span className="text-[28px] font-bold tracking-tight">
                <span className="text-[#1a1310]">Converti</span><span className="text-[#EC4899]">Lab</span>
              </span>
            </span>
            <a href={`tel:${SITE.phone}`} className="text-base font-semibold text-gray-500 hover:text-[#1a1310] transition-colors">
              {SITE.phoneDisplay}
            </a>
          </div>
        </header>

        <div className="relative z-10 container mx-auto px-5 sm:px-8 pt-10 pb-16 lg:pt-14 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center max-w-6xl mx-auto">
            <div>
              <div className="lp-rise inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.06] lp-soft-shadow text-sm font-semibold text-gray-600 mb-7" style={{ animationDelay: "40ms" }}>
                <UtensilsCrossed className="w-4 h-4 text-rose-500" />
                Site pour restaurant · Livré en 14 jours
              </div>

              <h1 className="lp-rise text-[2.35rem] sm:text-[2.9rem] lg:text-[3.5rem] font-black leading-[1.05] tracking-[-0.02em] text-[#1a1310] mb-5" style={{ animationDelay: "120ms" }}>
                Un site de restaurant qui{" "}
                <span className={`bg-gradient-to-r ${ACCENT} bg-clip-text text-transparent`}>
                  remplit vos tables
                </span>
              </h1>

              <p className="lp-rise text-lg text-gray-500 max-w-md mb-8 leading-relaxed" style={{ animationDelay: "200ms" }}>
                Menu en ligne, réservation, photos et Google Maps. On s&apos;occupe de tout, vous validez. Livré en 14 jours.
              </p>

              <div className="lp-rise grid gap-3 mb-9" style={{ animationDelay: "280ms" }}>
                {reassurance.map((r) => (
                  <div key={r.title} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-rose-100 lp-soft-shadow flex items-center justify-center">
                      <r.icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <div className="text-base">
                      <span className="font-bold text-[#1a1310]">{r.title}</span>
                      <span className="text-gray-400">{"  ·  "}{r.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lp-rise flex flex-wrap items-center gap-x-6 gap-y-3" style={{ animationDelay: "360ms" }}>
                <span className="inline-flex items-center gap-2 font-semibold text-[#1a1310]">
                  <Users className="w-[18px] h-[18px] text-rose-500" />
                  +150 entreprises accompagnées
                </span>
                <span className="inline-flex items-center gap-1.5 text-gray-500">
                  <span className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />)}
                  </span>
                  4,4/5 sur Trustpilot
                </span>
              </div>
            </div>

            <div className="lp-rise lg:justify-self-end w-full max-w-lg" style={{ animationDelay: "220ms" }}>
              <AdsLeadForm
                metier="Restaurant"
                sourceKey="google-ads-lp-restaurant"
                title="Recevez le devis de votre site"
                subtitle="On vous rappelle sous 24h. Sans engagement, sans carte bancaire."
                accentClass={ACCENT_BTN}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="bg-white py-16 sm:py-20 border-y border-black/[0.05]">
        <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
          <Reveal className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">Le digital décide où l&apos;on mange</span>
            <h2 className="text-3xl sm:text-[2.4rem] font-black text-[#1a1310] mt-3 tracking-[-0.02em]">
              Vos futurs clients sont déjà sur Google
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <StatsBand stats={stats} gradientClass={ACCENT} />
          </Reveal>
        </div>
      </section>

      {/* ============ PAIN POINTS ============ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-[2.5rem] font-black text-[#1a1310] tracking-[-0.02em]">Ça vous parle ?</h2>
            <p className="text-gray-500 mt-3 text-lg">Si vous cochez une de ces cases, vous perdez des couverts chaque semaine.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((p, i) => (
              <Reveal key={p} delay={i * 90} className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-black/[0.05] lp-soft-shadow">
                <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm font-bold">✕</span>
                <span className="text-[15px] text-gray-700 font-medium">{p}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="bg-white py-16 sm:py-24 border-y border-black/[0.05]">
        <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
          <Reveal className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">Pensé pour la restauration</span>
            <h2 className="text-3xl sm:text-[2.7rem] font-black text-[#1a1310] mt-3 tracking-[-0.02em]">
              Tout ce qu&apos;un site de restaurant doit faire
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 90} className="group p-7 rounded-3xl bg-[#fffaf5] border border-black/[0.05] hover:border-rose-200 hover:lp-card-shadow transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-500/20 mb-5">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-[#1a1310] text-lg mb-2">{f.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXEMPLE + ÉTUDE DE CAS ============ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Exemple de site (browser frame) */}
            <Reveal>
              <div className="rounded-2xl overflow-hidden border border-black/[0.08] lp-card-shadow bg-white">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-[#fdf3ec] border-b border-black/[0.05]">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs text-gray-400 truncate">votre-restaurant.fr</span>
                </div>
                <div className="relative aspect-[4/3] bg-gray-50">
                  <Image src="/images/portfolio/example-site-restaurant.jpg" alt="Exemple de site internet de restaurant créé par ConvertiLab" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              </div>
            </Reveal>

            {/* Étude de cas */}
            <Reveal delay={140}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">Cas client</span>
              <h2 className="text-3xl sm:text-[2.4rem] font-black text-[#1a1310] mt-3 mb-5 tracking-[-0.02em] leading-tight">
                La Table de Marco remplit son midi
              </h2>
              <blockquote className="relative pl-5 border-l-2 border-rose-300 text-lg text-gray-600 italic leading-relaxed mb-6">
                <MessageSquareQuote aria-hidden className="absolute -left-3 -top-2 w-6 h-6 text-rose-200" />
                « Depuis que j&apos;ai mon site, je reçois des réservations tous les jours sans rien faire. Le midi, c&apos;est plein maintenant. »
                <footer className="mt-3 not-italic text-sm font-semibold text-[#1a1310]">Marco Benedetti · Gérant, La Table de Marco</footer>
              </blockquote>
              <div className="grid sm:grid-cols-2 gap-3">
                {caseResults.map((r) => (
                  <div key={r} className="flex items-start gap-2.5 p-4 rounded-2xl bg-white border border-black/[0.05] lp-soft-shadow">
                    <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-emerald-500 mt-0.5" />
                    <span className="text-sm font-medium text-gray-700">{r}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 3 ÉTAPES ============ */}
      <section className="bg-white py-16 sm:py-24 border-y border-black/[0.05]">
        <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
          <Reveal className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">Simple et sans effort</span>
            <h2 className="text-3xl sm:text-[2.7rem] font-black text-[#1a1310] mt-3 tracking-[-0.02em]">
              Votre site en 3 étapes
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-lg">Vous cuisinez, on s&apos;occupe du digital. De A à Z.</p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 120} className="group relative p-7 rounded-3xl bg-[#fffaf5] border border-black/[0.05] hover:border-rose-200 hover:lp-card-shadow transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-500/20">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-5xl font-black text-black/[0.06] group-hover:text-rose-100 transition-colors">{s.step}</span>
                </div>
                <h3 className="font-bold text-[#1a1310] text-lg mb-2">{s.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUSTPILOT ============ */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: "#f7fbf9" }}>
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-[#00b67a] fill-[#00b67a]" />
              <span className="text-xl font-bold text-[#1a1310] tracking-tight">Trustpilot</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="w-8 h-8 bg-[#00b67a] flex items-center justify-center rounded-[4px]">
                  <Star className="w-5 h-5 text-white fill-white" />
                </span>
              ))}
            </div>
            <p className="text-[#1a1310] text-lg font-medium">
              <strong>Excellent</strong> · Note de <strong>4,4/5</strong> sur la base de{" "}
              <a href="https://fr.trustpilot.com/review/convertilab.com" target="_blank" rel="noopener noreferrer" className="text-[#00b67a] font-semibold hover:underline">12 avis</a>
            </p>
          </Reveal>
        </div>
        <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)" }}>
          <div className="lp-marquee flex gap-5 w-max px-2.5">
            {[...avis, ...avis].map((a, i) => (
              <figure key={i} className="w-[330px] flex-shrink-0 p-6 rounded-2xl bg-white border border-[#00b67a]/15 shadow-[0_10px_30px_-18px_rgba(0,182,122,0.4)] flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-[3px]">
                      <Star className="w-3 h-3 text-white fill-white" />
                    </span>
                  ))}
                </div>
                <figcaption className="font-bold text-[#1a1310] mb-1.5">{a.title}</figcaption>
                <blockquote className="text-sm text-gray-600 leading-relaxed flex-grow">{a.text}</blockquote>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00b67a]" />
                  <span className="font-semibold text-[#1a1310]">{a.author}</span>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="bg-white py-16 sm:py-24 border-t border-black/[0.05]">
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
          <Reveal className="relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 sm:py-16 text-center bg-[#fffaf5] border border-black/[0.05] lp-card-shadow">
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full blur-[130px] opacity-[0.16]"
              style={{ background: "radial-gradient(circle, #fb923c 0%, #f43f5e 50%, transparent 70%)" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] lp-soft-shadow text-xs font-bold text-rose-600 mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-500" />
                Consultation gratuite (0€)
              </div>
              <h2 className="text-3xl sm:text-[2.9rem] font-black tracking-[-0.02em] text-[#1a1310] mb-4 leading-tight">
                Parlons de votre restaurant.{" "}
                <span className={`bg-gradient-to-r ${ACCENT} bg-clip-text text-transparent`}>Devis en 24h.</span>
              </h2>
              <p className="text-lg text-gray-500 mb-9 max-w-lg mx-auto">
                Une réponse personnalisée et un devis détaillé, sans engagement.
              </p>
              <a
                href="https://calendly.com/convertilab-5bsc/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r ${ACCENT_BTN} text-white font-bold text-lg shadow-xl shadow-rose-500/25 hover:shadow-2xl hover:shadow-rose-500/40 hover:scale-[1.02] transition-all`}
              >
                <CalendarCheck className="w-5 h-5" />
                Prendre un rendez-vous
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="lp-bg text-gray-400 py-8 border-t border-black/[0.06]">
        <div className="container mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span>© {SITE.name} · Rueil-Malmaison (92)</span>
          <div className="flex items-center gap-5">
            <Link href="/politique-de-confidentialite" className="hover:text-[#1a1310] transition-colors">Confidentialité</Link>
            <a href={`tel:${SITE.phone}`} className="hover:text-[#1a1310] transition-colors">{SITE.phoneDisplay}</a>
          </div>
        </div>
      </footer>

      {/* ============ CTA STICKY MOBILE ============ */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white/95 backdrop-blur border-t border-black/[0.08] p-3 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <a href="#devis" className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r ${ACCENT_BTN} text-white font-bold shadow-lg`}>
          Recevez votre devis gratuit
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
