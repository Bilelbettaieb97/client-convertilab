# Palette de mouvement (`src/components/motion/`)

Composants d'animation pour l'accueil et les pages pôles. Sources : registries Magic UI (`marquee`, `number-ticker`, `border-beam`, `animated-beam`, `orbiting-circles`, `bento-grid`, `globe`) et Aceternity (`3d-card`), plus trois composants maison (`Reveal`, `HeroMesh`, `Spotlight`) et les finitions Frontend Forever du dossier `ff/` (voir la section dédiée plus bas). Adaptations communes :

- imports `motion/react` remplacés par `framer-motion` (déjà installé, même API) ; seule dépendance ajoutée : `cobe` (globe) ;
- `@radix-ui/react-icons` remplacé par `lucide-react`, `Button` de shadcn remplacé par `next/link` (bento) ;
- chaque composant est `"use client"`, typé, et lit `useReducedMotionSafe()` (`use-reduced-motion-safe.ts`, `useSyncExternalStore` avec snapshot serveur `false`) et non `useReducedMotion()` de framer-motion, qui lit la media query de façon synchrone au premier rendu client et provoquait une erreur d'hydratation (#418) quand la préférence est active. Si l'utilisateur a réduit les animations, le rendu est statique (aucun mouvement, aucun `null` qui ferait disparaître du contenu, sauf `BorderBeam` qui est purement décoratif). `HeroMesh`, `Marquee` et `OrbitingCircles` n'ont aucune branche JS : la règle `@media (prefers-reduced-motion: reduce)` de `globals.css` coupe leurs keyframes (DOM identique serveur / client) ;
- couleurs par défaut = charte (violet `hsl(270 70% 60%)`, rose `hsl(330 70% 60%)`, tokens `border`, `card`, `primary`, `muted-foreground`) ;
- aucun texte en dur : tout vient des props ou des `children` ;
- keyframes CSS namespacés `motion-marquee`, `motion-marquee-vertical`, `motion-orbit`, `motion-mesh` déclarés dans `src/app/globals.css` (bloc `@theme`), pour ne pas toucher à `.animate-marquee` utilisé par `TrustBar`.

Import groupé : `import { Reveal, NumberTicker, ... } from "@/components/motion";`

## Règles d'usage

1. **Le H1 et le texte du hero restent rendus côté serveur et visibles immédiatement.** Ne pas les envelopper dans `Reveal`. `HeroMesh` et `Spotlight` sont des fonds : ils se placent à côté du texte, pas autour.
2. **Un ou deux moments forts par page** (hero, bloc pôles). Pas de mouvement permanent sous un texte à lire : `Marquee` et `OrbitingCircles` uniquement sur des logos, noms ou icônes.
3. **Composants lourds en `next/dynamic` sans SSR** : `Globe` (cobe, WebGL) via `GlobeLazy` fourni (qui ne monte le chunk qu'à l'approche du viewport grâce à `LazyProche`, 600 px avant) ; `AnimatedBeam` (mesure le DOM) dans un composant client chargé en `dynamic({ ssr: false })` avec un fallback de même taille. Les composants purement CSS (`OrbitingCircles`, `Marquee`, `HeroMesh`) s'importent en statique : rendu serveur, pas de chunk supplémentaire. Toujours réserver la hauteur du conteneur pour éviter tout décalage de mise en page. `LazyProche` (`fallback`, `marge`) est réutilisable pour toute section lourde placée bas dans la page.
4. `Globe` uniquement sur l'accueil (un seul contexte WebGL par page).
5. Vérifier en 390 px qu'aucun composant ne déborde (`overflow-hidden` sur les parents de `Marquee`, `OrbitingCircles`, `HeroMesh`, `Spotlight`).

## Composants

### `Reveal`

Apparition au défilement : fondu + translation 20 px, 0,5 s, une seule fois. Le contenu est visible dans le HTML serveur (aucun `opacity:0` avant l'hydratation ni sans JavaScript) : après le montage, un bloc déjà à l'écran reste tel quel, un bloc plus bas est masqué puis animé quand il entre dans le viewport.

| Prop | Type | Défaut |
|---|---|---|
| `delay` | `number` (s) | `0` |
| `y` | `number` (px) | `20` |
| `duration` | `number` (s) | `0.5` |
| `margin` | rootMargin (`"0px 0px -10% 0px"`) | `"0px 0px -10% 0px"` |
| `className` | `string` | |

Autres props de `motion.div` acceptées. Pour décaler des cartes voisines : `delay={i * 0.08}`.

```tsx
<Reveal delay={0.1}><article>...</article></Reveal>
```

### `NumberTicker`

Compteur animé quand il entre dans l'écran. La **valeur finale est dans le HTML** rendu côté serveur (les robots lisent « 150 », pas « 0 ») ; l'animation part de `startValue` au montage.

| Prop | Type | Défaut |
|---|---|---|
| `value` | `number` | requis |
| `startValue` | `number` | `0` |
| `direction` | `"up" \| "down"` | `"up"` |
| `delay` | `number` (s) | `0` |
| `decimalPlaces` | `number` | `0` |
| `locale` | `string` | `"fr-FR"` (« 4,9 ») |

```tsx
<NumberTicker value={150} className="text-4xl font-bold" />+
<NumberTicker value={4.9} decimalPlaces={1} />/5
```

### `Marquee`

Défilement continu des sites clients. Avec animations réduites : une rangée statique qui passe à la ligne (règle de `globals.css` : la rangée prend 100 % de la largeur et peut rétrécir, sinon la page déborde en 390 px). La boucle est mise en pause hors écran (`useInView`, 200 px de marge) et le conteneur est en `contain: paint`.

| Prop | Type | Défaut |
|---|---|---|
| `reverse` | `boolean` | `false` |
| `pauseOnHover` | `boolean` | `false` |
| `vertical` | `boolean` | `false` |
| `repeat` | `number` | `4` |
| `duration` | `number` (s) | `40` |
| `gap` | valeur CSS | `"1.5rem"` |

Les répétitions 2 à n sont `aria-hidden`. Envelopper dans un conteneur `overflow-hidden` avec un masque de fondu sur les bords si besoin (`[mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]`).

### `BorderBeam`

Faisceau lumineux qui parcourt le contour du parent (`relative` + `rounded-*`). Rien n'est rendu avec animations réduites. Réservé à **une** carte mise en avant par écran. L'`offset-distance` est animé en CSS (keyframes `motion-beam` de `globals.css`, variables `--beam-from` / `--beam-to`), pas par framer-motion (propriété non accélérée, recalculée en JavaScript à chaque image) ; l'animation est en pause hors écran (`useInView`).

| Prop | Type | Défaut |
|---|---|---|
| `size` | `number` (px) | `60` |
| `duration` | `number` (s) | `8` |
| `colorFrom` / `colorTo` | `string` | violet / rose de la charte |
| `borderWidth` | `number` | `1.5` |
| `reverse`, `delay`, `initialOffset`, `className`, `style` | | |

```tsx
<div className="relative rounded-2xl border bg-card p-6"><BorderBeam />...</div>
```

### `BentoGrid` / `BentoCard`

Grille des quatre pôles : 1 colonne en mobile, 3 en `lg`. Le lien vers la page pôle est toujours visible (le modèle le masquait jusqu'au survol : quatre cellules sans suite annoncée et un vide en bas de carte) ; au survol, la flèche glisse de 2 px et le bloc texte s'élève de 4 px.

`BentoCard` props : `name` (h3), `description`, `href`, `cta` (ancre descriptive), `icon` (nœud React : `icon={<Globe />}`, jamais le composant lui-même, une page serveur ne peut pas passer une fonction à un composant client), `meta?` (« 01 »), `footer?` (prix d'entrée), `background?` (décor), `children?` (illustration dans le flux, sous le texte), `aside?` (illustration en colonne de droite en `lg`, 48 % de la largeur, alignée en haut : pour un contenu moins haut que le texte, comme `PileNotifications`), `className` (`lg:col-span-2 lg:row-span-2` pour la grande cellule).

### `CardContainer` / `CardBody` / `CardItem` (3d-card)

Perspective légère qui suit la souris. `intensite` (défaut 40, plus grand = plus discret). Aucun mouvement avec animations réduites ni sur écran tactile. `CardItem` accepte `as` (balise), `translateZ`, `rotateX`... en px / degrés.

```tsx
<CardContainer>
  <CardBody className="relative w-full max-w-sm rounded-2xl border bg-card p-6">
    <CardItem translateZ={30} as="h3">Titre</CardItem>
    <CardItem translateZ={20}><Image ... /></CardItem>
  </CardBody>
</CardContainer>
```

### `OrbitingCircles`

Éléments en orbite autour du centre du parent (`relative`, hauteur fixe, `flex items-center justify-center`, `overflow-hidden`). Avec animations réduites, positions figées à angles réguliers.

| Prop | Type | Défaut |
|---|---|---|
| `radius` | `number` (px) | `160` |
| `duration` | `number` (s) | `20` |
| `iconSize` | `number` (px) | `40` |
| `path` | `boolean` | `true` |
| `reverse`, `speed`, `className` | | |

Deux orbites = deux `OrbitingCircles` avec des rayons différents dans le même parent.

### `AnimatedBeam`

Trait entre deux éléments (`fromRef`, `toRef`) dans un conteneur `relative` (`containerRef`), avec un faisceau lumineux qui le parcourt. Avec animations réduites : trait statique seul. Mesure le DOM : à utiliser dans un composant client chargé sans SSR.

```tsx
// src/components/ia/OutilsRelies.tsx ("use client") : refs + AnimatedBeam
// src/components/ia/OutilsReliesLazy.tsx ("use client") :
const OutilsRelies = dynamic(() => import("./OutilsRelies"), {
  ssr: false,
  loading: () => <div className="h-[360px]" aria-hidden="true" />, // même hauteur
});
```

Props : `curvature`, `reverse`, `pathColor`, `pathWidth`, `pathOpacity`, `gradientStartColor`, `gradientStopColor`, `delay`, `duration`, `repeat`, `repeatDelay`, offsets `startXOffset`...

### `GlobeLazy` (globe, cobe)

Globe centré sur la France avec un marqueur sur Rueil-Malmaison. `GlobeLazy` fait le `next/dynamic({ ssr: false })` avec `GlobeFallback` (même taille : carré, `max-w-[600px]`). Utilisable directement depuis une page serveur. Boucle de rendu pilotée par `requestAnimationFrame`, active seulement quand le globe est visible (IntersectionObserver) et quand quelque chose change. Si WebGL est indisponible, le canvas reste transparent et le parent garde sa taille.

| Prop | Type | Défaut |
|---|---|---|
| `focus` | `[lat, lon]` | `[46.6, 2.35]` (France) |
| `theta` | `number` (rad) | déduit de `focus` |
| `markers` | `Marker[]` cobe | Rueil-Malmaison |
| `autoRotate` | `boolean` | `false` (toujours `false` avec animations réduites) |
| `rotationSpeed` | `number` | `0.003` |
| `config` | options cobe (couleurs...) | charte claire |

Exports utiles : `RUEIL_MALMAISON`, `locationToAngles(lat, lon)` depuis `./globe`.

### `HeroMesh`

Fond de hero : dégradé violet très clair et trois halos flous qui dérivent lentement en CSS (aucun WebGL, aucun JS d'animation). Sous `lg`, les halos sont figés par `globals.css` (surfaces floutées de 60 vw trop coûteuses pour le GPU mobile, effet imperceptible à cette taille) ; en desktop, seul le premier halo est en `blur-3xl`, les deux autres en `blur-2xl`. Parent `relative isolate overflow-hidden` (sans `isolate`, le `-z-10` passe sous le fond de page et le mesh disparaît). `intensite` 0,1 à 1.

### `Spotlight`

Halo radial qui apparaît en fondu en haut à gauche du hero, une seule fois. Parent `relative isolate overflow-hidden`. Props : `color`, `size` (`"70vw"`), `delay`.

## Performance

- `Globe` et `AnimatedBeam` : jamais en SSR, toujours avec un fallback de même taille (CLS = 0). Un seul globe par page, sur l'accueil seulement.
- `Marquee`, `OrbitingCircles`, `HeroMesh` : CSS pur (`transform`), pas de re-rendu React. `HeroMesh` : trois halos maximum (un seul en `blur-3xl`), figés sous `lg`, jamais plus d'un mesh par page. `Marquee` : en pause hors écran.
- `BorderBeam` : une seule instance visible par écran ; `offset-distance` animé en CSS, en pause hors écran.
- Pas de `backdrop-filter` au-dessus d'un fond animé (cartes du hero, barre collante) : le flou serait recalculé à chaque image. Un fond blanc à 85 ou 95 % donne le même rendu.
- `NumberTicker` : `useInView` `once`, aucune animation hors écran.
- `Reveal` : `whileInView` `once`, pas d'observateur qui reste actif.
- Toutes les animations continues s'arrêtent avec `prefers-reduced-motion` (hook framer + règle CSS de secours dans `globals.css`).

## Frontend Forever (`ff/`)

Onze finitions adaptées de https://frontendforever.com (licence MIT), toutes des **composants serveur ou de simples chaînes Tailwind** (aucun JavaScript ajouté, aucun `"use client"`). Chaque fichier porte en tête l'URL du modèle, la licence et le détail de l'adaptation ; le préfixe indique le lot (`a-` accueil, `b-` section sombre, `c-` navigation, pied de page, chat, boutons). `a-frise-active.css` est importé par `globals.css` (pas depuis un composant : cela créait une troisième feuille de style bloquante).

| Fichier | Modèle Frontend Forever | Adaptation | Règle d'usage |
|---|---|---|---|
| `a-grille-hero.tsx` (`GrilleHero`) | grid-background-with-radial-fade-mask | Fond CSS pur, traits violets à 6-7 %, masque elliptique centré sur la colonne du H1 (55 % × 60 % en `lg`, s'éteint avant le formulaire). | Hero de l'accueil seulement, entre `HeroMesh` et `Spotlight`. |
| `a-cadre-navigateur.tsx` (`CadreNavigateur`) | minimal-browser-card-with-traffic-light-dots-and-search | Barre d'adresse avec le domaine réel, corps `relative` pour une `<Image fill>`, rayon `xl` dans une carte `2xl`. Seules couleurs hors charte : les trois pastilles macOS. | Uniquement pour montrer un site client réel et consultable. |
| `a-pile-notifications.tsx` (`PileNotifications`) | stacked-glass-notification-cards-with-hover-animation | Cartes opaques, déploiement au survol de la cellule parente (`group`), déployée d'office avec animations réduites, masquée sous `lg`. | Trois éléments maximum, mention « Exemple » obligatoire, aucun chiffre de résultat. |
| `a-frise-active.css` (`.ff-frise`, `.ff-puce`) | css-custom-property-timeline-with-active-highlight | Remplissage piloté par `animation-timeline: view()`, sans JavaScript ; état final statique sans `animation-timeline` ou avec animations réduites. | Frise « Ce que nous faisons » ; ne pas dupliquer les keyframes. |
| `b-grain.tsx` (`Grain`) | animated-noise-and-gradient-mask-overlay-container | SVG `feTurbulence` tuilé, statique, fusion `screen` à 0,045. | **Un seul grain par page**, premier enfant d'une section `relative isolate`. |
| `b-pastille-pulsee.tsx` (`PastillePulsee`) | interactive-location-card-with-pulsing-map-pin | Point violet avec anneau `ping` ralenti à 3 s ; anneau fixe avec animations réduites. | **Une seule par écran**, jamais à côté d'un autre mouvement permanent. |
| `b-bouton-cercle.tsx` (`BoutonCercle`) | smooth-hover-pill-button-with-rotating-arrow-and-color-swap | Disque qui remplit la pilule au survol, deux tonalités de la charte, 44 px. | **Réservé aux liens d'exploration** ; les boutons de conversion gardent `BoutonLien`. |
| `c-bouton-reflet.tsx` (chaînes) | button-with-shimmer-sliding-hover-effect | Reflet blanc en biais, un seul passage au survol, rien au toucher ni avec animations réduites. | Chaînes fusionnées dans `BoutonLien`, `StickyCtaBar` et le bouton Calendly de la navigation : un seul motif de bouton primaire. |
| `c-soulignement-centre.tsx` (chaînes) | smooth-center-expanding-underline-hover-effect | Trait 2 px `scaleX` depuis le centre (GPU), violet uni. | Menu desktop seulement ; les liens texte gardent le filet 1 px `FILET_LIEN_TEXTE`. |
| `c-hamburger.tsx` (`Hamburger`) | hamburger-to-x-menu-with-css-transform-animation | Trois barres en `transform` seul, état piloté par React, `aria-*` portés par le bouton parent. | Bouton du menu mobile de la navigation. |
| `c-bulle-chat.tsx` (chaînes) | sliding-gradient-chat-button-with-tooltip-animation | Fond violet uni au repos, le rose glisse au survol ; étiquette visible sur écrans à survol seulement ; plus de `ping`. | Bulle de `ChatWidget` uniquement. |

