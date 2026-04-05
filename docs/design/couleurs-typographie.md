# Couleurs & Typographie - ConvertiLab

## Palette de Couleurs (Light Mode)

### Couleurs principales

| Token | HSL | Hex approx. | Usage |
|-------|-----|-------------|-------|
| `--primary` | `hsl(270 70% 60%)` | `#8B5CF6` | Boutons, liens, elements cles |
| `--primary-foreground` | `hsl(0 0% 100%)` | `#FFFFFF` | Texte sur fond primary |
| `--accent` | `hsl(330 70% 60%)` | `#EC4899` | CTA secondaires, highlights |
| `--accent-foreground` | `hsl(0 0% 100%)` | `#FFFFFF` | Texte sur fond accent |

### Couleurs de surface

| Token | HSL | Hex approx. | Usage |
|-------|-----|-------------|-------|
| `--background` | `hsl(0 0% 100%)` | `#FFFFFF` | Fond de page |
| `--foreground` | `hsl(222.2 84% 4.9%)` | `#0A0F1E` | Texte principal |
| `--card` | `hsl(0 0% 100%)` | `#FFFFFF` | Fond des cartes |
| `--card-foreground` | `hsl(222.2 84% 4.9%)` | `#0A0F1E` | Texte des cartes |
| `--popover` | `hsl(0 0% 100%)` | `#FFFFFF` | Fond des popovers |
| `--popover-foreground` | `hsl(222.2 84% 4.9%)` | `#0A0F1E` | Texte des popovers |

### Couleurs utilitaires

| Token | HSL | Hex approx. | Usage |
|-------|-----|-------------|-------|
| `--secondary` | `hsl(210 40% 96.1%)` | `#F1F5F9` | Fond secondaire, badges |
| `--secondary-foreground` | `hsl(222.2 47.4% 11.2%)` | `#1E293B` | Texte sur fond secondary |
| `--muted` | `hsl(210 40% 96.1%)` | `#F1F5F9` | Fond attenue |
| `--muted-foreground` | `hsl(215.4 16.3% 46.9%)` | `#64748B` | Texte attenue, labels |
| `--destructive` | `hsl(0 84.2% 60.2%)` | `#EF4444` | Erreurs, suppressions |
| `--border` | `hsl(214.3 31.8% 91.4%)` | `#E2E8F0` | Bordures |
| `--input` | `hsl(214.3 31.8% 91.4%)` | `#E2E8F0` | Bordures de champs |
| `--ring` | `hsl(270 70% 60%)` | `#8B5CF6` | Focus ring |

### Couleurs de graphiques (charts)

| Token | HSL | Hex approx. | Usage |
|-------|-----|-------------|-------|
| `--chart-1` | `hsl(270 70% 60%)` | `#8B5CF6` | Serie 1 (violet) |
| `--chart-2` | `hsl(330 70% 60%)` | `#EC4899` | Serie 2 (rose) |
| `--chart-3` | `hsl(210 100% 60%)` | `#3B82F6` | Serie 3 (bleu) |
| `--chart-4` | `hsl(30 100% 60%)` | `#F97316` | Serie 4 (orange) |
| `--chart-5` | `hsl(150 70% 50%)` | `#22C55E` | Serie 5 (vert) |

## Gradients

| Token | Valeur | Usage |
|-------|--------|-------|
| `--gradient-primary` | `linear-gradient(135deg, hsl(270 70% 60%), hsl(330 70% 60%))` | CTA principaux, headers, elements signature |
| `--gradient-secondary` | `linear-gradient(135deg, hsl(210 100% 60%), hsl(180 100% 60%))` | Elements secondaires, badges tech |
| `--gradient-accent` | `linear-gradient(135deg, hsl(30 100% 60%), hsl(350 100% 60%))` | Offres speciales, urgence, promos |

### Gradient utilitaire

```css
.gradient-hover {
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}
```

## Glassmorphism

| Token | Valeur | Description |
|-------|--------|-------------|
| `--glass-bg` | `rgba(255, 255, 255, 0.7)` | Fond semi-transparent |
| `--glass-border` | `rgba(255, 255, 255, 0.18)` | Bordure subtile |

```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
}
```

## Shadows

| Token | Valeur | Usage |
|-------|--------|-------|
| `--shadow-glow` | `0 0 40px rgba(139, 92, 246, 0.3)` | Effet de lueur violet sur hover/focus |
| `--shadow-elegant` | `0 20px 60px -10px rgba(139, 92, 246, 0.3)` | Ombre elevee pour les cartes importantes |

## Typographie

### Polices

| Variable | Police | Usage |
|----------|--------|-------|
| `--font-sans` | **Geist Sans** | Corps de texte, titres, UI |
| `--font-geist-mono` | **Geist Mono** | Code, donnees techniques |
| `--font-heading` | `var(--font-sans)` | Titres (meme police que le corps) |

Les polices sont chargees via `next/font/google` avec le subset `latin`, ce qui assure un chargement optimise sans FOUT (Flash of Unstyled Text).

### Rendu
- `antialiased` applique sur le body pour un rendu lisse
- `scroll-behavior: smooth` sur le html

## Border Radius

| Token | Valeur | Calcul |
|-------|--------|--------|
| `--radius` | `0.75rem` (12px) | Base |
| `--radius-sm` | `0.45rem` (7.2px) | `base * 0.6` |
| `--radius-md` | `0.6rem` (9.6px) | `base * 0.8` |
| `--radius-lg` | `0.75rem` (12px) | `base * 1.0` |
| `--radius-xl` | `1.05rem` (16.8px) | `base * 1.4` |
| `--radius-2xl` | `1.35rem` (21.6px) | `base * 1.8` |
| `--radius-3xl` | `1.65rem` (26.4px) | `base * 2.2` |
| `--radius-4xl` | `1.95rem` (31.2px) | `base * 2.6` |

## Dark Mode

Le dark mode est supporte via la classe `.dark` sur le HTML. Les principales differences :

| Token | Light | Dark |
|-------|-------|------|
| `--background` | `hsl(0 0% 100%)` | `hsl(222.2 84% 4.9%)` |
| `--foreground` | `hsl(222.2 84% 4.9%)` | `hsl(210 40% 98%)` |
| `--primary` | `hsl(270 70% 60%)` | `hsl(210 40% 98%)` |
| `--secondary` | `hsl(210 40% 96.1%)` | `hsl(217.2 32.6% 17.5%)` |
| `--border` | `hsl(214.3 31.8% 91.4%)` | `hsl(217.2 32.6% 17.5%)` |

## Theme Color

- `meta theme-color` : `#9333ea` (violet 600)
- `msapplication-TileColor` : `#9333ea`
