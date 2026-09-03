import type { Metadata } from "next";
import dynamic from "next/dynamic";
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
  Paintbrush,
  Rocket,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import AdsLeadForm from "./AdsLeadForm";
import Reveal from "./Reveal";

const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));

export const metadata: Metadata = {
  title: { absolute: "Création de site internet professionnel | ConvertiLab" },
  description:
    "Créez un site internet professionnel pour développer votre activité. Livré en 14 jours, vous êtes propriétaire de votre site, SEO inclus. Devis gratuit sous 24h.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE.url}/lp/site-internet` },
};

const reassurance = [
  { icon: Crown, title: "Vous êtes propriétaire", desc: "Payé une fois, votre site est à vous pour toujours." },
  { icon: Ban, title: "Pas d'abonnement", desc: "Aucune location à vie comme sur les plateformes." },
  { icon: Search, title: "SEO inclus", desc: "Trouvable sur Google dès la mise en ligne." },
];

const steps = [
  { icon: Search, step: "01", title: "On comprend votre activité", desc: "Un échange court pour cerner votre métier, vos clients et vos objectifs." },
  { icon: Paintbrush, step: "02", title: "On crée votre site", desc: "Un design sur-mesure que vous validez avant la mise en ligne. Vous ne touchez à rien." },
  { icon: Rocket, step: "03", title: "En ligne en 14 jours", desc: "Votre site professionnel est livré, optimisé et prêt à convertir." },
];

const avis = [
  { author: "Vaquier de labaume", title: "Bilel est un pro qui comprend votre projet", text: "Il a réalisé mon projet en 24 heures, correspondant à 100% à mes attentes. Réactif et de bon conseil." },
  { author: "Conseils en Bâtiment", title: "Je viens de faire appel à Convertilab", text: "C'est impressionnant, la réactivité et la compréhension de mes besoins. Le site a été créé dans la journée." },
  { author: "Mahdi Ghazouani", title: "Je suis très satisfait du travail", text: "Un site web moderne, rapide et parfaitement adapté à mon activité. Je recommande." },
  { author: "Muriel Urbain", title: "Travail de professionnel, aucun regret", text: "Il a rendu mon ancien site plus professionnel et m'offre une grande autonomie au quotidien." },
  { author: "Natacha Metellus", title: "Super pro", text: "Super pro, gentil, réactif, très beau résultat. Merci beaucoup !" },
  { author: "Alix Hardali", title: "Gain de temps", text: "Disponible et accessible en cas de besoin. Je recommande pour sa proximité avec le client." },
  { author: "FUNESTORE", title: "Réactivité, compétence, flexibilité", text: "Bilel a pris le temps de bien comprendre notre écosystème et de proposer un site à la hauteur." },
  { author: "blayac", title: "Travail de Pro", text: "Sérieux et toujours à l'écoute du début à la fin du projet." },
  { author: "Bahri Alaeddine", title: "Très bien", text: "Excellent travail, je recommande les yeux fermés." },
  { author: "Hamza Bettaieb", title: "Une équipe à l'écoute", text: "L'équipe a été à l'écoute de mes besoins, réactive et professionnelle." },
];

export default function LandingSiteInternet() {
  return (
    <div className="min-h-screen lp-bg text-[#14121a] antialiased">
      <style>{`
        @keyframes lpRise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .lp-rise { opacity: 0; animation: lpRise .8s cubic-bezier(.16,1,.3,1) forwards; }
        .lp-bg { background-color: #faf9f7; }
        .lp-card-shadow { box-shadow: 0 2px 4px rgba(20,18,26,.03), 0 24px 60px -28px rgba(120,60,170,.28); }
        .lp-soft-shadow { box-shadow: 0 1px 3px rgba(20,18,26,.04), 0 16px 40px -24px rgba(20,18,26,.14); }
        @keyframes lpMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .lp-marquee { animation: lpMarquee 55s linear infinite; }
        .lp-marquee:hover { animation-play-state: paused; }
      `}</style>

      {/* ============ HERO CLAIR PREMIUM ============ */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-32 right-0 w-[42rem] h-[42rem] rounded-full blur-[130px] opacity-[0.18]"
          style={{ background: "radial-gradient(circle, #a855f7 0%, #ec4899 45%, transparent 70%)" }} />
        <div aria-hidden className="pointer-events-none absolute top-40 -left-40 w-[30rem] h-[30rem] rounded-full blur-[130px] opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }} />

        {/* Header (logo plus grand) */}
        <header className="relative z-10 border-b border-black/[0.06]">
          <div className="container mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
            <span className="flex items-center gap-3" aria-label="ConvertiLab">
              <Image src="/images/icon-c.png" alt="Logo ConvertiLab" width={56} height={56} className="h-12 w-12" priority />
              <span className="text-[28px] font-bold tracking-tight">
                <span className="text-[#14121a]">Converti</span><span className="text-[#EC4899]">Lab</span>
              </span>
            </span>
            <a href={`tel:${SITE.phone}`} className="text-base font-semibold text-gray-500 hover:text-[#14121a] transition-colors">
              {SITE.phoneDisplay}
            </a>
          </div>
        </header>

        {/* Contenu hero (colonnes plus resserrées, typo plus grande) */}
        <div className="relative z-10 container mx-auto px-5 sm:px-8 pt-10 pb-16 lg:pt-14 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center max-w-6xl mx-auto">
            {/* Gauche */}
            <div>
              <div className="lp-rise inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.06] lp-soft-shadow text-sm font-semibold text-gray-600 mb-7" style={{ animationDelay: "40ms" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
                Agence web · Livraison en 14 jours
              </div>

              <h1 className="lp-rise text-[2.35rem] sm:text-[2.9rem] lg:text-[3.5rem] font-black leading-[1.05] tracking-[-0.02em] text-[#14121a] mb-5" style={{ animationDelay: "120ms" }}>
                Créez un site internet professionnel pour{" "}
                <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                  développer votre activité
                </span>
              </h1>

              <p className="lp-rise text-lg text-gray-500 max-w-md mb-8 leading-relaxed" style={{ animationDelay: "200ms" }}>
                Site sur-mesure livré en 14 jours. On s&apos;occupe de tout, vous validez. Satisfait ou remboursé.
              </p>

              <div className="lp-rise grid gap-3 mb-9" style={{ animationDelay: "280ms" }}>
                {reassurance.map((r) => (
                  <div key={r.title} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-purple-100 lp-soft-shadow flex items-center justify-center">
                      <r.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-base">
                      <span className="font-bold text-[#14121a]">{r.title}</span>
                      <span className="text-gray-400">{"  ·  "}{r.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lp-rise flex flex-wrap items-center gap-x-6 gap-y-3" style={{ animationDelay: "360ms" }}>
                <span className="inline-flex items-center gap-2 font-semibold text-[#14121a]">
                  <Users className="w-[18px] h-[18px] text-purple-600" />
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

            {/* Droite : formulaire */}
            <div className="lp-rise lg:justify-self-end w-full max-w-lg" style={{ animationDelay: "220ms" }}>
              <AdsLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3 ÉTAPES ============ */}
      <section className="bg-white py-16 sm:py-24 border-y border-black/[0.05]">
        <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
          <Reveal className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">Simple et sans effort</span>
            <h2 className="text-3xl sm:text-[2.7rem] font-black text-[#14121a] mt-3 tracking-[-0.02em]">
              Votre site professionnel en 3 étapes
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-lg">
              Vous n&apos;avez rien à faire de technique. On s&apos;occupe de tout, de A à Z.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 120} className="group relative p-7 rounded-3xl bg-[#faf9f7] border border-black/[0.05] hover:border-purple-200 hover:lp-card-shadow transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-5xl font-black text-black/[0.06] group-hover:text-purple-100 transition-colors">{s.step}</span>
                </div>
                <h3 className="font-bold text-[#14121a] text-lg mb-2">{s.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RÉSULTATS CLIENTS (section existante) ============ */}
      <Portfolio hideOffer />

      {/* ============ TRUSTPILOT (carrousel, couleurs Trustpilot) ============ */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: "#f7fbf9" }}>
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
          <Reveal className="text-center mb-12">
            {/* Wordmark Trustpilot */}
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-[#00b67a] fill-[#00b67a]" />
              <span className="text-xl font-bold text-[#14121a] tracking-tight">Trustpilot</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="w-8 h-8 bg-[#00b67a] flex items-center justify-center rounded-[4px]">
                  <Star className="w-5 h-5 text-white fill-white" />
                </span>
              ))}
            </div>
            <p className="text-[#14121a] text-lg font-medium">
              <strong>Excellent</strong> · Note de <strong>4,4/5</strong> sur la base de{" "}
              <a href="https://fr.trustpilot.com/review/convertilab.com" target="_blank" rel="noopener noreferrer" className="text-[#00b67a] font-semibold hover:underline">12 avis</a>
            </p>
          </Reveal>
        </div>

        {/* Carrousel défilant (pause au survol) */}
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
                <figcaption className="font-bold text-[#14121a] mb-1.5">{a.title}</figcaption>
                <blockquote className="text-sm text-gray-600 leading-relaxed flex-grow">{a.text}</blockquote>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00b67a]" />
                  <span className="font-semibold text-[#14121a]">{a.author}</span>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL (clair premium) ============ */}
      <section className="bg-white py-16 sm:py-24 border-t border-black/[0.05]">
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
          <Reveal className="relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 sm:py-16 text-center bg-[#faf9f7] border border-black/[0.05] lp-card-shadow">
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full blur-[130px] opacity-[0.14]"
              style={{ background: "radial-gradient(circle, #a855f7 0%, #ec4899 50%, transparent 70%)" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] lp-soft-shadow text-xs font-bold text-purple-700 mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                Consultation gratuite (0€)
              </div>
              <h2 className="text-3xl sm:text-[2.9rem] font-black tracking-[-0.02em] text-[#14121a] mb-4 leading-tight">
                Encore une question ?{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Parlons-en directement.</span>
              </h2>
              <p className="text-lg text-gray-500 mb-9 max-w-lg mx-auto">
                Obtenez une réponse personnalisée et un devis détaillé sous 24h.
              </p>
              <a
                href="https://calendly.com/convertilab-5bsc/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-[1.02] transition-all"
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
            <Link href="/politique-de-confidentialite" className="hover:text-[#14121a] transition-colors">Confidentialité</Link>
            <a href={`tel:${SITE.phone}`} className="hover:text-[#14121a] transition-colors">{SITE.phoneDisplay}</a>
          </div>
        </div>
      </footer>

      {/* ============ CTA STICKY MOBILE ============ */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white/95 backdrop-blur border-t border-black/[0.08] p-3 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <a href="#devis" className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg">
          Recevez votre devis gratuit
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
