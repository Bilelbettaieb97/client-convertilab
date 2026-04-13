"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-cinematic {
      background-size: 60px 60px;
      background-image:
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .text-3d-matte-cl {
      color: #fff;
      text-shadow:
          0 10px 30px rgba(168, 85, 247, 0.4),
          0 2px 4px rgba(0,0,0,0.5);
  }

  .text-purple-matte-cl {
      background: linear-gradient(180deg, #f0abfc 0%, #a855f7 50%, #ec4899 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 10px 20px rgba(168, 85, 247, 0.4))
          drop-shadow(0px 2px 4px rgba(236, 72, 153, 0.3));
  }

  .text-card-purple-matte-cl {
      background: linear-gradient(180deg, #FFFFFF 0%, #f0abfc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8))
          drop-shadow(0px 4px 8px rgba(168, 85, 247, 0.4));
  }

  .premium-depth-card-cl {
      background: linear-gradient(145deg, #2e1065 0%, #0a0a14 100%);
      box-shadow:
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(168, 85, 247, 0.3),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(168, 85, 247, 0.15);
      position: relative;
  }

  .card-sheen-cl {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(236, 72, 153, 0.12) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .iphone-bezel-cl {
      background-color: #111;
      box-shadow:
          inset 0 0 0 2px #52525B,
          inset 0 0 0 7px #000,
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(168, 85, 247, 0.4);
      transform-style: preserve-3d;
  }

  .hardware-btn-cl {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow:
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }

  .screen-glare-cl {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth-cl {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow:
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge-cl {
      background: linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(236, 72, 153, 0.04) 100%);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow:
          0 0 0 1px rgba(168, 85, 247, 0.2),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .btn-cl-primary, .btn-cl-secondary {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-cl-primary {
      background: linear-gradient(180deg, #a855f7 0%, #ec4899 100%);
      color: #fff;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 2px 4px rgba(168,85,247,0.4), 0 12px 24px -4px rgba(168,85,247,0.5), inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(0,0,0,0.2);
  }
  .btn-cl-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 6px 12px -2px rgba(168,85,247,0.5), 0 20px 32px -6px rgba(236,72,153,0.6), inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(0,0,0,0.2);
  }
  .btn-cl-secondary {
      background: linear-gradient(180deg, #27272A 0%, #18181B 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.6), 0 12px 24px -4px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-cl-secondary:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #3F3F46 0%, #27272A 100%);
  }

  .progress-ring-cl {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  metricValue?: number;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function CinematicHero({
  brandName = "MOBILE",
  tagline1 = "Vos clients sont",
  tagline2 = "sur mobile.",
  cardHeading = "100% responsive, 100% rapide.",
  cardDescription = (
    <>
      <span className="text-white font-semibold">ConvertiLab</span> crée des sites mobile-first qui s&apos;adaptent à tous les écrans. Score Lighthouse 100, chargement instantané, expérience tactile parfaite.
    </>
  ),
  metricValue = 100,
  metricLabel = "Score Mobile",
  ctaHeading = "Lancez votre site mobile.",
  ctaDescription = "Rejoignez les 150+ marques qui ont transformé leur trafic mobile en clients grâce à ConvertiLab.",
  className,
  ...props
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 4) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".text-track-cl", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days-cl", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card-cl", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-left-text-cl", ".card-right-text-cl", ".mockup-scroll-wrapper-cl", ".floating-badge-cl", ".phone-widget-cl"], { autoAlpha: 0 });
      gsap.set(".cta-wrapper-cl", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track-cl", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days-cl", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=6500",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      scrollTl
        // Hold the hero text visible for a while so users can read it
        .to({}, { duration: 3 })
        .to([".hero-text-wrapper-cl", ".bg-grid-cinematic"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 })
        .to(".main-card-cl", { y: 0, ease: "power3.inOut", duration: 2 }, "<")
        .to(".main-card-cl", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(
          ".mockup-scroll-wrapper-cl",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 },
          "-=0.8"
        )
        .fromTo(".phone-widget-cl", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
        .to(".progress-ring-cl", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val-cl", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
        .fromTo(".floating-badge-cl", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
        .fromTo(".card-left-text-cl", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".card-right-text-cl", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        .to({}, { duration: 2.5 })
        .set(".hero-text-wrapper-cl", { autoAlpha: 0 })
        .set(".cta-wrapper-cl", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        .to([".mockup-scroll-wrapper-cl", ".floating-badge-cl", ".card-left-text-cl", ".card-right-text-cl"], {
          scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
        })
        .to(
          ".main-card-cl",
          {
            width: isMobile ? "92vw" : "85vw",
            height: isMobile ? "92vh" : "85vh",
            borderRadius: isMobile ? "32px" : "40px",
            ease: "expo.inOut",
            duration: 1.8,
          },
          "pullback"
        )
        .to(".cta-wrapper-cl", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
        .to(".main-card-cl", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });
    }, containerRef);

    return () => ctx.revert();
  }, [metricValue]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-screen h-screen overflow-hidden flex items-center justify-center bg-black text-white font-sans antialiased", className)}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-cinematic absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_70%)] pointer-events-none" />

      <div className="hero-text-wrapper-cl absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform">
        <h1 className="text-track-cl gsap-reveal text-3d-matte-cl text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2">
          {tagline1}
        </h1>
        <h1 className="text-days-cl gsap-reveal text-purple-matte-cl text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter">
          {tagline2}
        </h1>
      </div>

      <div className="cta-wrapper-cl absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 gsap-reveal pointer-events-auto will-change-transform">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-purple-matte-cl">
          {ctaHeading}
        </h2>
        <p className="text-white/60 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
          {ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="/contact" className="btn-cl-primary flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] focus:outline-none">
            <div className="text-left">
              <div className="text-[10px] font-bold tracking-wider text-white/70 uppercase mb-[-2px]">Démarrer</div>
              <div className="text-xl font-bold leading-none tracking-tight">Mon site mobile</div>
            </div>
          </a>
          <a href="/portfolio" className="btn-cl-secondary flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] focus:outline-none">
            <div className="text-left">
              <div className="text-[10px] font-bold tracking-wider text-white/60 uppercase mb-[-2px]">Voir nos</div>
              <div className="text-xl font-bold leading-none tracking-tight">Réalisations</div>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card-cl premium-depth-card-cl relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen-cl" aria-hidden="true" />

          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">
            <div className="card-right-text-cl gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 className="text-6xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter text-card-purple-matte-cl">
                {brandName}
              </h2>
            </div>

            <div className="mockup-scroll-wrapper-cl order-2 lg:order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10" style={{ perspective: "1000px" }}>
              <div className="relative w-full h-full flex items-center justify-center transform scale-[0.65] md:scale-85 lg:scale-100">
                <div
                  ref={mockupRef}
                  className="relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel-cl flex flex-col will-change-transform transform-style-3d"
                >
                  <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn-cl rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn-cl rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn-cl rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn-cl rounded-r-md z-0 scale-x-[-1]" aria-hidden="true" />

                  <div className="absolute inset-[7px] bg-[#0a0114] rounded-[2.5rem] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,1)] text-white z-10">
                    <div className="absolute inset-0 screen-glare-cl z-40 pointer-events-none" aria-hidden="true" />
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse" />
                    </div>

                    <div className="relative w-full h-full pt-12 px-5 pb-8 flex flex-col">
                      <div className="phone-widget-cl flex justify-between items-center mb-8">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-purple-300/60 uppercase tracking-widest font-bold mb-1">ConvertiLab</span>
                          <span className="text-xl font-bold tracking-tight text-white drop-shadow-md">Mobile First</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 text-white flex items-center justify-center font-bold text-sm border border-purple-400/30 shadow-lg shadow-purple-500/30">CL</div>
                      </div>

                      <div className="phone-widget-cl relative w-44 h-44 mx-auto flex items-center justify-center mb-8 drop-shadow-[0_15px_25px_rgba(168,85,247,0.4)]">
                        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                          <defs>
                            <linearGradient id="ringGradientCL" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#a855f7" />
                              <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                          </defs>
                          <circle cx="88" cy="88" r="64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                          <circle className="progress-ring-cl" cx="88" cy="88" r="64" fill="none" stroke="url(#ringGradientCL)" strokeWidth="12" />
                        </svg>
                        <div className="text-center z-10 flex flex-col items-center">
                          <span className="counter-val-cl text-4xl font-extrabold tracking-tighter text-white">0</span>
                          <span className="text-[8px] text-purple-200/60 uppercase tracking-[0.1em] font-bold mt-0.5">{metricLabel}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="phone-widget-cl widget-depth-cl rounded-2xl p-3 flex items-center">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 flex items-center justify-center mr-3 border border-purple-400/20 shadow-inner">
                            <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-20 bg-purple-300/60 rounded-full mb-2 shadow-inner" />
                            <div className="h-1.5 w-12 bg-purple-600/40 rounded-full shadow-inner" />
                          </div>
                        </div>
                        <div className="phone-widget-cl widget-depth-cl rounded-2xl p-3 flex items-center">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/5 flex items-center justify-center mr-3 border border-pink-400/20 shadow-inner">
                            <svg className="w-4 h-4 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-16 bg-pink-300/60 rounded-full mb-2 shadow-inner" />
                            <div className="h-1.5 w-24 bg-pink-600/40 rounded-full shadow-inner" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/20 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                    </div>
                  </div>
                </div>

                <div className="floating-badge-cl absolute flex top-6 lg:top-12 left-[-15px] lg:left-[-80px] floating-ui-badge-cl rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-purple-500/30 to-purple-900/10 flex items-center justify-center border border-purple-400/30 shadow-inner">
                    <span className="text-base lg:text-xl drop-shadow-lg" aria-hidden="true">⚡</span>
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">Score 100/100</p>
                    <p className="text-purple-200/60 text-[10px] lg:text-xs font-medium">Lighthouse Mobile</p>
                  </div>
                </div>

                <div className="floating-badge-cl absolute flex bottom-12 lg:bottom-20 right-[-15px] lg:right-[-80px] floating-ui-badge-cl rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-pink-500/30 to-pink-900/10 flex items-center justify-center border border-pink-400/30 shadow-inner">
                    <span className="text-base lg:text-lg drop-shadow-lg" aria-hidden="true">📱</span>
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">Mobile First</p>
                    <p className="text-pink-200/60 text-[10px] lg:text-xs font-medium">Tactile parfait</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-left-text-cl gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full lg:max-w-none px-4 lg:px-0">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight">
                {cardHeading}
              </h3>
              <p className="hidden md:block text-purple-100/70 text-sm md:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none">
                {cardDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
