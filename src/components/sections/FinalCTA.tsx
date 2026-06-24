"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Shield, Clock, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export default function FinalCTA() {
  const openCalendly = () => {
    window.open(SITE.calendly, "_blank");
  };

  return (
    <section className="relative py-20 sm:py-28 bg-gray-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent,rgba(0,0,0,0.5))]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Offre limitée, 3 créneaux disponibles ce mois-ci</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white text-center mb-6 leading-tight">
          Prêt à transformer votre site
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
            en machine à clients ?
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Discutons de votre projet en 30 minutes, gratuitement. Vous repartez avec une stratégie claire, que vous travailliez avec nous ou non.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-7 text-lg font-bold shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105"
          >
            <Link href="/contact">
              Obtenir mon devis gratuit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            onClick={openCalendly}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-7 text-lg font-bold transition-all hover:scale-105"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Réserver un appel découverte
          </Button>
        </div>

        {/* Direct phone */}
        <div className="text-center mb-12">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">Ou appelez-nous directement</span>
            <span className="font-bold text-white">{SITE.phoneDisplay}</span>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-12 border-t border-white/10">
          <div className="flex items-center justify-center gap-3 text-center">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">100% satisfait</div>
              <div className="text-xs text-gray-400">ou remboursé</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-center">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Réponse en 24h</div>
              <div className="text-xs text-gray-400">garanti</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-center">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Sans engagement</div>
              <div className="text-xs text-gray-400">consultation gratuite</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
