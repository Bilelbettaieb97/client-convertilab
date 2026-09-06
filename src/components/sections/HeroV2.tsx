"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = lazy(() => import("@/components/contact/ContactForm"));

const sectors = ["artisan", "coach", "restaurant", "boutique", "consultant"];

export default function HeroV2() {
  const [sectorIndex, setSectorIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSectorIndex((i) => (i + 1) % sectors.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f0ff_1px,transparent_1px),linear-gradient(to_bottom,#f3f0ff_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />
      {/* Glow orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-200/40 to-pink-200/40 blur-[100px]" />
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-violet-200/30 to-blue-200/30 blur-[80px]" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT : Copy ── */}
          <div className="flex flex-col gap-6">

            {/* Urgency badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 w-fit"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-semibold text-gray-600">
                3 créneaux disponibles ce mois-ci
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight">
                Un site web qui{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600">
                    ramène des clients
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 10 Q75 2 150 6 Q225 10 298 4"
                      stroke="url(#underline-gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mt-2">
                pour votre{" "}
                <span className="inline-block min-w-[180px] sm:min-w-[220px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={sectorIndex}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                      {sectors[sectorIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Livré en <strong className="text-gray-900">2 semaines chrono</strong>, clé en main, zéro jargon tech.
              Rejoignez les <strong className="text-gray-900">150+ entrepreneurs</strong> qui ont transformé leur présence en ligne.
            </motion.p>

            {/* Micro social proof */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <div className="flex -space-x-2">
                {["🧑‍🍳", "👩‍💼", "🧑‍🔧", "👩‍🏫", "🧑‍💻"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-white flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 font-bold text-gray-900 text-sm">4.9/5</span>
                </div>
                <p className="text-xs text-gray-500">15 avis vérifiés Trustpilot</p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                onClick={() => window.open(SITE.calendly, "_blank")}
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-base font-semibold px-8 py-6 rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/30"
              >
                Réserver mon appel gratuit
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base font-semibold px-8 py-6 rounded-xl border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-700 transition-all duration-200"
              >
                <Link href="#portfolio">Voir nos réalisations</Link>
              </Button>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 text-sm text-gray-500"
            >
              {["Appel 100% gratuit", "Réponse en 24h", "Satisfait ou remboursé"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT : Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="animate-fade-in"
          >
            <Suspense fallback={
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-6 min-h-[440px] sm:min-h-[480px] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <ContactForm />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
