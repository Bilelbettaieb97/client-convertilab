# Composants UI - ConvertiLab

## Composants Shadcn/ui

Tous les composants sont situes dans `src/components/ui/` et sont bases sur Radix UI + Tailwind CSS.

| Composant | Fichier | Usage principal |
|-----------|---------|----------------|
| **Accordion** | `accordion.tsx` | FAQ, sections depliables |
| **Aspect Ratio** | `aspect-ratio.tsx` | Images, videos, embeds |
| **Badge** | `badge.tsx` | Tags, categories, statuts |
| **Breadcrumb** | `breadcrumb.tsx` | Navigation hierarchique (SEO) |
| **Button** | `button.tsx` | CTA, actions, liens |
| **Card** | `card.tsx` | Services, temoignages, portfolio |
| **Carousel** | `carousel.tsx` | Galeries, temoignages defilants |
| **Dialog** | `dialog.tsx` | Modales, popups |
| **Input** | `input.tsx` | Champs de formulaire texte |
| **Label** | `label.tsx` | Labels de formulaire |
| **Navigation Menu** | `navigation-menu.tsx` | Menu principal desktop |
| **Select** | `select.tsx` | Listes deroulantes |
| **Separator** | `separator.tsx` | Separateurs visuels |
| **Sonner** | `sonner.tsx` | Notifications toast |
| **Tabs** | `tabs.tsx` | Navigation par onglets |
| **Textarea** | `textarea.tsx` | Champs de texte multiligne |

## Composants de Layout

Situes dans `src/components/layout/` :

| Composant | Description |
|-----------|-------------|
| **Navigation** | Navbar responsive avec menu hamburger sur mobile, mega-menu services sur desktop |
| **Footer** | Pied de page complet avec liens, reseaux sociaux, formulaire newsletter |

## Composants de Conversion

Situes dans `src/components/conversion/` :

| Composant | Description |
|-----------|-------------|
| **ExitIntentPopup** | Popup declenchee quand le visiteur s'apprete a quitter la page (mouvement souris vers le haut). Offre speciale ou capture d'email |
| **SocialProofToast** | Notifications de type "Marie de Paris vient de demander un devis" qui apparaissent periodiquement pour creer de l'urgence sociale |
| **StickyMobileCTA** | Barre fixe en bas de l'ecran sur mobile avec un CTA direct (appel ou devis). Visible uniquement sur petits ecrans |
| **PromoBanner** | Bandeau promotionnel en haut du site (offre speciale, reduction limitee). Peut etre ferme par le visiteur |

## Composants de Maillage Interne

Situes dans `src/components/internal-links/` :

| Composant | Description |
|-----------|-------------|
| **RelatedServicesSection** | Section de services lies en bas des pages pour favoriser le maillage interne et le SEO |
| **SuggestedArticles** | Articles de blog suggeres en bas des pages pour augmenter le temps de session |

## Patterns de Design Recurrents

### CTA Gradient Violet-Rose

Le pattern signature de ConvertiLab : bouton avec gradient `--gradient-primary` (violet vers rose a 135 degres).

```
background: linear-gradient(135deg, hsl(270 70% 60%), hsl(330 70% 60%))
```

Utilise pour :
- Les boutons d'action principale ("Devis gratuit", "Reserver un appel")
- Les liens CTA dans les sections Hero
- Les boutons de soumission de formulaire

### Glass Cards

Cartes avec effet glassmorphism :
- Fond semi-transparent (`rgba(255,255,255,0.7)`)
- Blur backdrop de 10px
- Bordure blanche subtile (18% opacite)
- Utilise pour les cartes de services, temoignages, features

### Badges Colores

Badges avec fond `secondary` ou colore pour :
- Categories de blog
- Tags de services
- Statuts (nouveau, populaire, recommande)
- Secteurs d'activite dans le portfolio

### Animated Sections

Chaque section utilise des classes d'animation au scroll :
- `animate-fade-in` : apparition progressive
- `animate-slide-up` : glissement vers le haut
- `animate-slide-in-left` / `animate-slide-in-right` : entrees laterales
- `animate-scale-in` : zoom progressif

### Breadcrumbs SEO

Fil d'Ariane present sur toutes les pages internes, avec :
- Composant shadcn `Breadcrumb`
- Schema JSON-LD `BreadcrumbList` associe
- Navigation hierarchique : Accueil > Services > Categorie > Page

### Scrollbar Personnalisee

```css
::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #8b5cf6, #ec4899);
  border-radius: 4px;
}
```
