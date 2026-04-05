# Stack Technique

## Framework et runtime

| Technologie          | Version   | Role                                                    |
|----------------------|-----------|---------------------------------------------------------|
| **Next.js**          | 16.2.2    | Framework React full-stack avec App Router, SSR, SSG    |
| **React**            | 19.2.4    | Bibliotheque UI, Server Components par defaut           |
| **React DOM**        | 19.2.4    | Rendu DOM pour React                                    |
| **TypeScript**       | ^5        | Typage statique sur tout le projet                      |

---

## Styling et UI

| Technologie                  | Version   | Role                                              |
|------------------------------|-----------|---------------------------------------------------|
| **Tailwind CSS**             | ^4        | Framework CSS utility-first                       |
| **@tailwindcss/postcss**     | ^4        | Integration PostCSS pour Tailwind v4              |
| **@tailwindcss/typography**  | ^0.5.19   | Plugin prose pour le contenu riche (blog)         |
| **tailwind-merge**           | ^3.5.0    | Fusion intelligente de classes Tailwind           |
| **tailwindcss-animate**      | ^1.0.7    | Utilitaires d'animation pour Tailwind             |
| **tw-animate-css**           | ^1.4.0    | Classes d'animation CSS supplementaires           |
| **class-variance-authority** | ^0.7.1    | Gestion de variantes de composants (cva)          |
| **clsx**                     | ^2.1.1    | Concatenation conditionnelle de classes           |

---

## Composants UI (shadcn/ui + Radix)

| Technologie                         | Version   | Role                                     |
|--------------------------------------|-----------|------------------------------------------|
| **shadcn**                           | ^4.1.2    | CLI et systeme de composants shadcn/ui   |
| **@radix-ui/react-accordion**        | ^1.2.12   | Composant accordeon accessible           |
| **@radix-ui/react-aspect-ratio**     | ^1.1.8    | Ratio d'aspect pour images/videos        |
| **@radix-ui/react-dialog**           | ^1.1.15   | Modales et dialogues accessibles         |
| **@radix-ui/react-label**            | ^2.1.8    | Labels accessibles pour formulaires      |
| **@radix-ui/react-navigation-menu**  | ^1.2.14   | Menu de navigation principal             |
| **@radix-ui/react-progress**         | ^1.1.8    | Barre de progression                     |
| **@radix-ui/react-scroll-area**      | ^1.2.10   | Zone de defilement personnalisee         |
| **@radix-ui/react-select**           | ^2.2.6    | Selecteur accessible                     |
| **@radix-ui/react-separator**        | ^1.1.8    | Separateur visuel                        |
| **@radix-ui/react-slot**             | ^1.2.4    | Composition de composants (asChild)      |
| **@radix-ui/react-tabs**             | ^1.1.13   | Onglets accessibles                      |
| **@radix-ui/react-tooltip**          | ^1.2.8    | Info-bulles accessibles                  |
| **@base-ui/react**                   | ^1.3.0    | Composants headless supplementaires      |

---

## Animations

| Technologie        | Version   | Role                                              |
|--------------------|-----------|---------------------------------------------------|
| **Framer Motion**  | ^12.38.0  | Animations declaratives et transitions de page     |

---

## Backend et donnees

| Technologie              | Version   | Role                                          |
|--------------------------|-----------|-----------------------------------------------|
| **@supabase/supabase-js**| ^2.101.1  | Client Supabase (auth, DB, storage)           |
| **@supabase/ssr**        | ^0.10.0   | Integration SSR pour cookies et sessions      |

---

## Formulaires et validation

| Technologie              | Version   | Role                                          |
|--------------------------|-----------|-----------------------------------------------|
| **react-hook-form**      | ^7.72.1   | Gestion performante des formulaires           |
| **@hookform/resolvers**  | ^5.2.2    | Connecteur Zod pour react-hook-form           |
| **zod**                  | ^4.3.6    | Validation de schemas cote client et serveur  |

---

## Icones et visuels

| Technologie        | Version   | Role                                    |
|--------------------|-----------|------------------------------------------|
| **lucide-react**   | ^1.7.0    | Bibliotheque d'icones SVG                |
| **recharts**       | ^3.8.1    | Graphiques et visualisations de donnees  |

---

## UX et conversion

| Technologie          | Version   | Role                                        |
|----------------------|-----------|----------------------------------------------|
| **sonner**           | ^2.0.7    | Notifications toast elegantes                |
| **canvas-confetti**  | ^1.9.4    | Effet confetti pour celebrations (conversion)|
| **next-themes**      | ^0.4.6    | Gestion du theme clair/sombre                |
| **embla-carousel-react** | ^8.6.0 | Carousel performant et accessible          |

---

## Dev dependencies

| Technologie          | Version   | Role                                        |
|----------------------|-----------|----------------------------------------------|
| **eslint**           | ^9        | Linting du code                              |
| **eslint-config-next** | 16.2.2  | Configuration ESLint specifique Next.js      |
| **@types/node**      | ^20       | Types TypeScript pour Node.js                |
| **@types/react**     | ^19       | Types TypeScript pour React 19               |
| **@types/react-dom** | ^19       | Types TypeScript pour React DOM              |
| **@types/canvas-confetti** | ^1.9.0 | Types pour canvas-confetti               |

---

## Analytics et tracking

Configure dans `src/lib/constants.ts` :

| Service             | ID                        |
|---------------------|---------------------------|
| Google Analytics    | G-N9NTVTE0R6              |
| Google Tag Manager  | GTM-5TDHTDHP              |
| Meta Pixel          | 1413733970752208          |
| Google AdSense      | ca-pub-5844925774606937   |
