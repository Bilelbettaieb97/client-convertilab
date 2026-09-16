"use client";

import { createRef, useRef, type RefObject } from "react";
import { Calendar, FileText, Mail, Sparkles, Star, UserCheck, Users, type LucideIcon } from "lucide-react";
import { AnimatedBeam } from "@/components/motion";
import { cn } from "@/lib/utils";
import { HAUTEUR_SCHEMA } from "./hauteur-schema";

/**
 * Schéma « vos outils reliés par Claude » : cinq outils à gauche (emails,
 * devis, avis Google, agenda, CRM), Claude au centre, votre validation à
 * droite. Mesure le DOM (AnimatedBeam) : chargé sans SSR par
 * OutilsReliesLazy, avec un fallback de même hauteur.
 */
const OUTILS: { icon: LucideIcon; label: string }[] = [
  { icon: Mail, label: "Emails" },
  { icon: FileText, label: "Devis" },
  { icon: Star, label: "Avis Google" },
  { icon: Calendar, label: "Agenda" },
  { icon: Users, label: "CRM" },
];

interface NoeudProps {
  icon: LucideIcon;
  label: string;
  taille?: "sm" | "lg";
  accent?: boolean;
  className?: string;
  /** Ref du cercle (React 19 : `ref` est une prop ordinaire), lu par AnimatedBeam. */
  ref: RefObject<HTMLDivElement | null>;
}

function Noeud({ icon: Icon, label, taille = "sm", accent = false, className, ref }: NoeudProps) {
  return (
    <div className={cn("flex flex-col items-center gap-1.5", className)}>
      <div
        ref={ref}
        className={cn(
          "relative z-10 flex items-center justify-center rounded-full border bg-card shadow-[0_2px_8px_rgba(15,23,42,0.06)]",
          taille === "lg" ? "h-16 w-16 sm:h-[72px] sm:w-[72px]" : "h-11 w-11 sm:h-12 sm:w-12",
          accent
            ? "border-transparent bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-[0_12px_32px_-12px_rgba(124,58,237,0.6)]"
            : "border-border text-foreground"
        )}
      >
        <Icon className={taille === "lg" ? "h-7 w-7" : "h-5 w-5"} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <span className={cn("text-xs font-medium leading-none", accent ? "text-foreground" : "text-muted-foreground")}>
        {label}
      </span>
    </div>
  );
}

export default function OutilsRelies({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const claudeRef = useRef<HTMLDivElement>(null);
  const equipeRef = useRef<HTMLDivElement>(null);
  // Un objet ref stable par outil (createRef), lisible par AnimatedBeam après le montage.
  const outilsRefs = useRef(OUTILS.map(() => createRef<HTMLDivElement>()));

  return (
    <div
      ref={containerRef}
      className={cn("relative mx-auto w-full max-w-md overflow-hidden px-2 py-4", HAUTEUR_SCHEMA, className)}
      role="img"
      aria-label="Schéma : vos emails, devis, avis Google, agenda et CRM sont reliés par Claude, puis validés par votre équipe."
    >
      <div className="flex h-full items-center justify-between">
        <div className="flex h-full flex-col justify-between py-1">
          {OUTILS.map((o, i) => (
            <Noeud
              key={o.label}
              icon={o.icon}
              label={o.label}
              ref={outilsRefs.current[i]}
            />
          ))}
        </div>
        <Noeud ref={claudeRef} icon={Sparkles} label="Claude" taille="lg" accent />
        <Noeud ref={equipeRef} icon={UserCheck} label="Vous validez" />
      </div>

      {OUTILS.map((o, i) => (
        <AnimatedBeam
          key={o.label}
          containerRef={containerRef}
          fromRef={outilsRefs.current[i]}
          toRef={claudeRef}
          curvature={(2 - i) * 18}
          duration={4.5 + i * 0.4}
          delay={i * 0.35}
          pathWidth={1.5}
        />
      ))}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={claudeRef}
        toRef={equipeRef}
        duration={4}
        delay={1.2}
        pathWidth={1.5}
      />
    </div>
  );
}
