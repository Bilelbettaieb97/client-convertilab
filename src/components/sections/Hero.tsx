"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Shield, Calendar, CheckCircle, Users, Flame } from "lucide-react";
import { lazy, Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const ContactForm = lazy(() => import("@/components/contact/ContactForm"));

const rotatingWords = ["Business", "Boutique", "Projet", "Marque"];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = rotatingWords[wordIndex];

    if (!isDeleting && displayedText === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      return;
    }

    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentWord.substring(0, displayedText.length - 1)
          : currentWord.substring(0, displayedText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  const openCalendly = () => {
    window.open(SITE.calendly, "_blank");
  };

  return (
    <main className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center overflow-hidden min-h-[600px] lg:min-h-[700px]">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-20 animate-float" style={{ animationDelay: "0.5s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-4 sm:pt-8 pb-4 sm:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="text-center lg:text-left">

            {/* Badge urgence */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs sm:text-sm xl:px-5 xl:py-2.5 xl:mb-6 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 text-red-800 rounded-full animate-fade-in shadow-lg">
              <Flame className="w-4 h-4 text-red-600 animate-pulse" />
              <span className="font-bold">3 places restantes</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline font-semibold">Devis gratuit ce mois-ci</span>
              <span className="sm:hidden font-semibold">ce mois</span>
            </div>

            {/* Titre — 2 lignes fixes */}
            <h1 className="mb-4 sm:mb-6 xl:mb-8 2xl:mb-10 animate-slide-up-lcp font-black text-gray-900 leading-snug tracking-tight">

              {/* Texte propre pour Google et les lecteurs d'écran : le rendu
                  serveur de l'animation donnait "créevotre | en 7 jours"
                  (mots collés + curseur + mot rotatif vide). */}
              <span className="sr-only">
                Votre agence web crée votre site internet en 7 jours
              </span>

              <span aria-hidden="true">
                {/* Ligne 1 */}
                <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] xl:leading-[1.18] 2xl:text-[52px]">
                  Votre agence web crée
                </span>

                {/* Ligne 2 — "votre [Mot] en 7 jours" */}
                <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] xl:leading-[1.18] 2xl:text-[52px]">
                  votre{" "}
                  <span className="relative inline-block">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded"
                    />
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      {displayedText}
                      <span className="animate-pulse font-thin text-purple-600">|</span>
                    </span>
                  </span>
                  {" "}en 7 jours
                </span>
              </span>

            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl xl:text-[22px] 2xl:text-2xl text-gray-600 mb-6 sm:mb-8 xl:mb-10 2xl:mb-12 leading-relaxed animate-fade-in">
              Vous perdez des clients chaque jour sans site web professionnel. Nous créons des{" "}
              <strong className="text-purple-700">sites sur-mesure qui convertissent</strong>,
              design premium, SEO optimisé, livrés en express.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 xl:gap-5 mb-6 sm:mb-8 xl:mb-10 2xl:mb-12 animate-scale-in">
              <div className="group text-center p-3 sm:p-4 xl:p-5 2xl:p-7 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">+280%</div>
                <div className="text-xs sm:text-sm xl:text-base text-gray-700 font-semibold">CA moyen</div>
                <div className="text-[11px] sm:text-xs xl:text-sm text-gray-500 mt-0.5">Moyenne clients 2025</div>
              </div>
              <div className="group text-center p-3 sm:p-4 xl:p-5 2xl:p-7 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">150+</div>
                <div className="text-xs sm:text-sm xl:text-base text-gray-700 font-semibold">Sites Livrés</div>
                <div className="text-[11px] sm:text-xs xl:text-sm text-gray-500 mt-0.5">Depuis 2024</div>
              </div>
              <div className="group text-center p-3 sm:p-4 xl:p-5 2xl:p-7 glass rounded-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-1">4.9&#9733;</div>
                <div className="text-xs sm:text-sm xl:text-base text-gray-700 font-semibold">Avis Clients</div>
                <div className="text-[11px] sm:text-xs xl:text-sm text-gray-500 mt-0.5">15 avis vérifiés</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start flex-wrap gap-3 sm:gap-4 mb-6 xl:mb-8 animate-slide-up">
              <Button
                asChild
                size="lg"
                className="group h-auto w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 lg:px-5 py-3 sm:py-4 text-base sm:text-lg lg:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Link href="/demande-maquette">
                  <Rocket className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Ma maquette gratuite en 48h
                  <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </Button>
              <Button
                onClick={openCalendly}
                variant="outline"
                size="lg"
                className="group h-auto w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 sm:px-8 lg:px-5 py-3 sm:py-4 text-base sm:text-lg lg:text-base font-semibold transition-all duration-300 hover:scale-105 glass shadow-xl"
              >
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Réserver un créneau
              </Button>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm text-gray-600 animate-fade-in">
              <div className="glass px-3 py-1.5 sm:px-4 sm:py-2 xl:px-3.5 xl:py-2.5 rounded-full border border-green-200 flex items-center gap-2 shadow-lg">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="font-semibold text-green-700">Garantie satisfait</span>
              </div>
              <div className="glass px-3 py-1.5 sm:px-4 sm:py-2 xl:px-3.5 xl:py-2.5 rounded-full border border-purple-200 flex items-center gap-2 shadow-lg">
                <CheckCircle className="w-4 h-4 text-purple-600" />
                <span className="font-semibold text-purple-700">Aucun abonnement</span>
              </div>
              <div className="glass px-3 py-1.5 sm:px-4 sm:py-2 xl:px-3.5 xl:py-2.5 rounded-full border border-blue-200 flex items-center gap-2 shadow-lg">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="font-semibold text-blue-700">Paris et Île-de-France</span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="animate-fade-in">
            <Suspense fallback={
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-6 min-h-[440px] sm:min-h-[480px] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <ArrowRight className="w-6 h-6 text-purple-400 rotate-90" />
      </div>
    </main>
  );
};

export default Hero;
