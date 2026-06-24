"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, Phone, Sparkles } from "lucide-react";
import { SITE } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ConvertiLab brand-adapted styles (purple/pink palette)
const STYLES = `
.cl-cinematic-footer {
  -webkit-font-smoothing: antialiased;
  --cl-purple: 147 51 234;
  --cl-pink: 236 72 153;
  --cl-orange: 251 146 60;

  --cl-pill-bg-1: rgba(255, 255, 255, 0.04);
  --cl-pill-bg-2: rgba(255, 255, 255, 0.02);
  --cl-pill-shadow: rgba(0, 0, 0, 0.5);
  --cl-pill-highlight: rgba(255, 255, 255, 0.1);
  --cl-pill-inset: rgba(0, 0, 0, 0.6);
  --cl-pill-border: rgba(255, 255, 255, 0.08);

  --cl-pill-bg-1-hover: rgba(147, 51, 234, 0.15);
  --cl-pill-bg-2-hover: rgba(236, 72, 153, 0.08);
  --cl-pill-border-hover: rgba(236, 72, 153, 0.4);
  --cl-pill-shadow-hover: rgba(147, 51, 234, 0.4);
  --cl-pill-highlight-hover: rgba(236, 72, 153, 0.25);
}

@keyframes cl-footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.55; }
  100% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.95; }
}

@keyframes cl-footer-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes cl-footer-heart {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(236, 72, 153, 0.5)); }
  15%, 45% { transform: scale(1.25); filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.9)); }
  30% { transform: scale(1); }
}

.cl-animate-breathe {
  animation: cl-footer-breathe 8s ease-in-out infinite alternate;
}

.cl-animate-marquee {
  animation: cl-footer-marquee 45s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .cl-animate-marquee,
  .cl-animate-breathe,
  .cl-animate-heart { animation: none !important; }
}

.cl-animate-heart {
  animation: cl-footer-heart 2.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

.cl-footer-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.cl-footer-aurora {
  background: radial-gradient(
    ellipse at center,
    rgba(147, 51, 234, 0.35) 0%,
    rgba(236, 72, 153, 0.25) 35%,
    rgba(251, 146, 60, 0.1) 55%,
    transparent 75%
  );
}

.cl-glass-pill {
  background: linear-gradient(145deg, var(--cl-pill-bg-1) 0%, var(--cl-pill-bg-2) 100%);
  box-shadow:
      0 10px 30px -10px var(--cl-pill-shadow),
      inset 0 1px 1px var(--cl-pill-highlight),
      inset 0 -1px 2px var(--cl-pill-inset);
  border: 1px solid var(--cl-pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.cl-glass-pill:hover {
  background: linear-gradient(145deg, var(--cl-pill-bg-1-hover) 0%, var(--cl-pill-bg-2-hover) 100%);
  border-color: var(--cl-pill-border-hover);
  box-shadow:
      0 20px 40px -10px var(--cl-pill-shadow-hover),
      inset 0 1px 1px var(--cl-pill-highlight-hover);
}

.cl-giant-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(236, 72, 153, 0.15);
  background: linear-gradient(180deg, rgba(147, 51, 234, 0.18) 0%, transparent 65%);
  -webkit-background-clip: text;
  background-clip: text;
}

.cl-text-glow {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.45) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 24px rgba(147, 51, 234, 0.35));
}

.cl-gradient-text {
  background: linear-gradient(90deg, #c084fc 0%, #f472b6 50%, #fb923c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
`;

type MagneticProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  type?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const Magnetic = React.forwardRef<HTMLElement, MagneticProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const el = localRef.current;
      if (!el) return;

      const ctx = gsap.context(() => {
        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(el, {
            x: x * 0.35,
            y: y * 0.35,
            rotationX: -y * 0.12,
            rotationY: x * 0.12,
            scale: 1.04,
            ease: "power2.out",
            duration: 0.4,
          });
        };
        const onLeave = () => {
          gsap.to(el, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        return () => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        };
      }, el);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef)
            (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer inline-flex", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Magnetic.displayName = "Magnetic";

// ConvertiLab agency value marquee items
const MarqueeBlock = () => (
  <div className="flex items-center space-x-10 px-4 whitespace-nowrap">
    <span>Sites livrés en 7 jours</span>
    <span className="text-purple-400">✦</span>
    <span>+280% de CA moyen</span>
    <span className="text-pink-400">✦</span>
    <span>SEO premium inclus</span>
    <span className="text-orange-400">✦</span>
    <span>150+ clients accompagnés</span>
    <span className="text-purple-400">✦</span>
    <span>Garantie satisfait remboursé</span>
    <span className="text-pink-400">✦</span>
    <span>Design sur-mesure</span>
    <span className="text-orange-400">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      if (giantTextRef.current) {
        gsap.fromTo(
          giantTextRef.current,
          { y: "8vh", scale: 0.85, opacity: 0 },
          {
            y: "0vh",
            scale: 1,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top 80%",
              end: "bottom bottom",
              scrub: 1,
            },
          }
        );
      }

      const reveals = [headingRef.current, linksRef.current].filter(
        (el): el is HTMLElement => el !== null
      );
      if (reveals.length > 0) {
        gsap.fromTo(
          reveals,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top 60%",
              end: "center center",
              scrub: 1,
            },
          }
        );
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openCalendly = () => {
    window.open(SITE.calendly, "_blank");
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="cl-cinematic-footer fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-gray-950 text-white">
          {/* Aurora ambient glow */}
          <div className="cl-footer-aurora cl-animate-breathe absolute left-1/2 top-1/2 h-[65vh] w-[85vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-[80px] pointer-events-none z-0" />

          {/* Grid background */}
          <div className="cl-footer-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background word */}
          <div
            ref={giantTextRef}
            className="cl-giant-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            CONVERTILAB
          </div>

          {/* Diagonal marquee (agency values) */}
          <div className="absolute top-14 left-0 w-full overflow-hidden border-y border-white/10 bg-black/50 backdrop-blur-md py-4 z-10 -rotate-2 scale-110 shadow-2xl">
            <div className="flex w-max cl-animate-marquee text-xs md:text-sm font-bold tracking-[0.25em] text-white/60 uppercase">
              <MarqueeBlock />
              <MarqueeBlock />
              <MarqueeBlock />
            </div>
          </div>

          {/* Main center content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-24 w-full max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-semibold text-white/80 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              3 places restantes ce mois-ci
            </div>

            <h2
              ref={headingRef}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-center cl-text-glow"
            >
              Prêt à décoller ?
            </h2>
            <p className="text-lg md:text-xl text-white/60 text-center max-w-2xl mb-12">
              Discutons de votre projet en 30 minutes.{" "}
              <span className="cl-gradient-text font-semibold">Gratuit, sans engagement.</span>
            </p>

            {/* Primary CTAs */}
            <div ref={linksRef} className="flex flex-col items-center gap-5 w-full">
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <Magnetic
                  as="a"
                  href="/contact"
                  className="cl-glass-pill px-10 py-5 rounded-full text-white font-bold text-sm md:text-base items-center gap-3 group"
                >
                  <Sparkles className="w-5 h-5 text-pink-300 group-hover:text-white transition-colors" />
                  Obtenir mon devis gratuit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Magnetic>

                <Magnetic
                  as="button"
                  type="button"
                  onClick={openCalendly}
                  className="cl-glass-pill px-10 py-5 rounded-full text-white font-bold text-sm md:text-base items-center gap-3 group"
                >
                  <Calendar className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
                  Réserver un appel
                </Magnetic>
              </div>

              {/* Secondary links */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full mt-2">
                <Magnetic
                  as="a"
                  href="/portfolio"
                  className="cl-glass-pill px-5 py-2.5 rounded-full text-white/70 font-medium text-xs md:text-sm hover:text-white"
                >
                  Voir nos réalisations
                </Magnetic>
                <Magnetic
                  as="a"
                  href="/prix"
                  className="cl-glass-pill px-5 py-2.5 rounded-full text-white/70 font-medium text-xs md:text-sm hover:text-white"
                >
                  Nos tarifs
                </Magnetic>
                <Magnetic
                  as="a"
                  href="/a-propos"
                  className="cl-glass-pill px-5 py-2.5 rounded-full text-white/70 font-medium text-xs md:text-sm hover:text-white"
                >
                  À propos
                </Magnetic>
                <Magnetic
                  as="a"
                  href="/politique-de-confidentialite"
                  className="cl-glass-pill px-5 py-2.5 rounded-full text-white/70 font-medium text-xs md:text-sm hover:text-white"
                >
                  Confidentialité
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white/50 text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              © {new Date().getFullYear()} ConvertiLab, agence web à Rueil-Malmaison
            </div>

            <a
              href={`tel:${SITE.phone}`}
              className="cl-glass-pill px-6 py-3 rounded-full flex items-center gap-2 order-1 md:order-2 border-white/10 group"
            >
              <Phone className="w-3.5 h-3.5 text-pink-300 group-hover:text-white transition-colors" />
              <span className="text-white/70 text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                Conçu avec
              </span>
              <span className="cl-animate-heart text-sm md:text-base text-pink-400">❤</span>
              <span className="text-white/70 text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                à Paris
              </span>
            </a>

            <Magnetic
              as="button"
              type="button"
              onClick={scrollToTop}
              aria-label="Retour en haut"
              className="w-12 h-12 rounded-full cl-glass-pill items-center justify-center text-white/70 hover:text-white group order-3"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </Magnetic>
          </div>
        </div>
      </div>
    </>
  );
}
