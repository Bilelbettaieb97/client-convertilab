"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Zap, X } from "lucide-react";
import { useState, useEffect } from "react";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scrollPosition > windowHeight * 0.4 && !isHidden) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHidden]);

  // Sur l'accueil, le formulaire d'estimation est déjà dans le hero (#hero) :
  // le bandeau y ramène. Ailleurs, il mène à /contact.
  const href = pathname === "/" ? "#hero" : "/contact";

  if (!isVisible) return null;

  // z-50 comme le ChatWidget (monté après dans le DOM, donc au-dessus) et
  // marge droite réservée à sa bulle de 60 px : la croix « Fermer » reste
  // cliquable en 375 px au lieu d'être recouverte.
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pl-4 pr-24 py-3 animate-slide-up">
      <div className="flex items-center gap-2">
        <Button
          asChild
          className="flex-1 h-11 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 text-sm shadow-lg"
        >
          <Link href={href}>
            <Zap className="mr-2 w-4 h-4" />
            Estimation gratuite en 2 min
          </Link>
        </Button>
        <button
          type="button"
          onClick={() => { setIsHidden(true); setIsVisible(false); }}
          className="flex h-11 w-11 shrink-0 items-center justify-center text-gray-600 hover:text-gray-900"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <p className="text-[10px] text-gray-500 text-center mt-1">
        &#10003; Gratuit &bull; &#10003; Sans engagement &bull; &#10003; Réponse sous 24 h
      </p>
    </div>
  );
};

export default StickyMobileCTA;
