"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion-safe";
import { cn } from "@/lib/utils";

/**
 * Carte en perspective légère qui suit la souris (cartes d'offres, photo du
 * fondateur). Source : Aceternity `3d-card`, adapté : typage strict (plus de
 * `any`), pas de padding imposé, inclinaison réglable (`intensite`), aucun
 * mouvement avec prefers-reduced-motion ou sur écran tactile (pas de souris).
 *
 * Usage :
 * <CardContainer><CardBody className="..."><CardItem translateZ={30}>...</CardItem></CardBody></CardContainer>
 */

const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(
  undefined
);

export interface CardContainerProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  /** Diviseur de l'inclinaison : plus il est grand, plus le mouvement est discret (25 = original, 40 = léger). */
  intensite?: number;
}

export const CardContainer = ({ children, className, containerClassName, intensite = 40 }: CardContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const reduced = useReducedMotionSafe();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / intensite;
    const y = (e.clientY - top - height / 2) / intensite;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => {
    if (reduced) return;
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div className={cn("flex items-center justify-center", containerClassName)} style={{ perspective: "1000px" }}>
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative flex items-center justify-center transition-transform duration-200 ease-linear motion-reduce:transition-none",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}>{children}</div>
  );
};

type Numerique = number | string;

export interface CardItemProps extends Omit<React.HTMLAttributes<HTMLElement>, "translate"> {
  /** Balise rendue (div par défaut, ou "p", "h3", "a"...). */
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  translateX?: Numerique;
  translateY?: Numerique;
  translateZ?: Numerique;
  rotateX?: Numerique;
  rotateY?: Numerique;
  rotateZ?: Numerique;
}

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.transform = isMouseEntered
      ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  // Typage : une balise dynamique perd l'inférence de ses props, on passe par createElement.
  return React.createElement(
    Tag,
    { ref, className: cn("w-fit transition duration-200 ease-linear motion-reduce:transition-none", className), ...rest },
    children
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter doit être utilisé dans un CardContainer");
  }
  return context;
};
