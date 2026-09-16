// Palette de mouvement (phase Fondations 2). Tous les composants sont "use client"
// et respectent prefers-reduced-motion. Le globe n'est PAS exporté ici :
// l'importer via `GlobeLazy` (next/dynamic ssr:false) uniquement.
export { Marquee, type MarqueeProps } from "./marquee";
export { NumberTicker, type NumberTickerProps } from "./number-ticker";
export { BorderBeam, type BorderBeamProps } from "./border-beam";
export { AnimatedBeam, type AnimatedBeamProps } from "./animated-beam";
export { OrbitingCircles, type OrbitingCirclesProps } from "./orbiting-circles";
export { BentoGrid, BentoCard, type BentoGridProps, type BentoCardProps } from "./bento-grid";
export { CardContainer, CardBody, CardItem, type CardContainerProps, type CardItemProps } from "./3d-card";
export { GlobeLazy, GlobeFallback } from "./globe-lazy";
export { Reveal, type RevealProps } from "./reveal";
export { HeroMesh, type HeroMeshProps } from "./hero-mesh";
export { Spotlight, type SpotlightProps } from "./spotlight";
export { LazyProche, type LazyProcheProps } from "./lazy-proche";
export { useReducedMotionSafe } from "./use-reduced-motion-safe";
