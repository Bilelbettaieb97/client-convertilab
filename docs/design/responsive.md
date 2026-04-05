# Design Responsive - ConvertiLab

## Breakpoints Tailwind CSS

| Breakpoint | Largeur min. | Usage |
|------------|-------------|-------|
| **default** | 0px | Mobile first (base) |
| **sm** | 640px | Grands mobiles, petites tablettes |
| **md** | 768px | Tablettes portrait |
| **lg** | 1024px | Tablettes paysage, petits laptops |
| **xl** | 1280px | Desktop standard |
| **2xl** | 1400px | Container max-width |

Le site suit une approche **mobile-first** : les styles de base ciblent le mobile, les breakpoints ajoutent les modifications pour les ecrans plus larges.

## Container

```css
@media (max-width: 640px) {
  .container { padding-inline: 1rem (16px); }
}
```

Le container utilise une largeur max de `1400px` (breakpoint 2xl).

## Comportements Cles par Breakpoint

### Mobile (< 640px)

- **Navigation** : menu hamburger, liens en colonne plein ecran
- **StickyMobileCTA** : barre CTA fixe en bas de l'ecran (uniquement visible sur mobile)
- **Grilles** : colonnes empilees (1 colonne)
- **Touch targets** : taille minimum de 44px sur tous les boutons et liens interactifs
- **Container** : padding horizontal de 16px

```css
button:not([class*="accordion"]):not([class*="tabs"]) {
  min-height: 44px;
}
nav a, footer a, footer button {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}
```

### Tablette (md: 768px+)

- **Navigation** : transition vers le menu desktop
- **Grilles** : passage a 2 colonnes pour les cartes de services et temoignages
- **Hero** : texte et image cote a cote
- **Formulaires** : champs sur 2 colonnes

### Desktop (lg: 1024px+)

- **Navigation** : mega-menu complet avec sous-menus au survol
- **Grilles** : 3 ou 4 colonnes pour les services, le portfolio
- **Sections** : animations laterales (slide-in-left, slide-in-right) activees
- **StickyMobileCTA** : masque (desktop uniquement)

### Grand Desktop (xl: 1280px+)

- Espacement plus genereux
- Tailles de police augmentees pour les titres
- Layout a colonnes multiples pour les comparaisons de prix

## Accessibilite

### Focus Visible

```css
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: none;
  ring: 2px solid purple-500;
  ring-offset: 2px;
}
```

Tous les elements interactifs ont un indicateur de focus visible clair (anneau violet).

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-scale-in,
  .animate-slide-up,
  .animate-slide-in-left,
  .animate-slide-in-right,
  .animate-gradient-shift {
    animation: none;
  }
}
```

Les utilisateurs qui preferent un mouvement reduit voient toutes les animations desactivees.

### Transitions globales

Tous les elements interactifs (boutons, liens, inputs, textareas) ont une transition par defaut :

```css
button, a, input, textarea {
  transition: all 300ms ease-out;
}
```

## Checklist Responsive

- [ ] Verifier la navigation hamburger sur mobile (< 640px)
- [ ] Tester les touch targets (44px min) sur tous les boutons mobile
- [ ] Confirmer que StickyMobileCTA n'apparait pas sur desktop
- [ ] Valider les grilles responsive (1 col mobile, 2 col tablette, 3+ col desktop)
- [ ] Tester le formulaire de contact sur mobile (champs pleine largeur)
- [ ] Verifier les images responsive (next/image avec sizes)
- [ ] Tester le carousel au swipe sur mobile
- [ ] Valider le glassmorphism sur les navigateurs mobiles (backdrop-filter)
