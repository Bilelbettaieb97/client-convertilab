# Grille Tarifaire

> Tarifs officiels ConvertiLab.
> Source : `src/lib/constants.ts` (constante `PRICING`)

---

## Tarifs de creation

| Service | Prix | Constante |
|---------|------|-----------|
| Landing Page | A partir de 500 EUR | `PRICING.landing.from` |
| Site Vitrine | A partir de 500 EUR | `PRICING.vitrine.from` |
| Site E-commerce | A partir de 800 EUR | `PRICING.ecommerce.from` |
| Application Web | Sur devis | `PRICING.application.label` |
| Refonte de Site | A partir de 400 EUR | `PRICING.refonte.from` |

---

## Offres mensuelles

Presentees sur `/offre-mensuelle` et detaillees dans le formulaire `/offre-mensuelle/devis`.

| Offre | Prix/mois | Inclus |
|-------|-----------|--------|
| **Essentiel** | 39,50 EUR/mois | Site vitrine jusqu'a 3 pages, design responsive, SEO de base, hebergement + domaine, support email |
| **Pro** | 47,50 EUR/mois | Tout Essentiel + jusqu'a 7 pages, SEO avance + Google My Business, blog integre, formulaire avance, support prioritaire |
| **Premium** | 52,50 EUR/mois | Tout Pro + pages illimitees, page admin pour modifier le contenu, maintenance & mises a jour, support prioritaire dedie |

---

## Offre speciale

Presentee sur `/offre-speciale` et dans le popup ExitIntentPopup.

| Element | Valeur |
|---------|--------|
| Prix | 300 EUR |
| Prix barre (affiche) | 990 EUR |
| Inclus | Site vitrine 1-3 pages responsive, design moderne, SEO & mobile optimise, livraison 7 jours |
| Places | 10 maximum (compteur en temps reel) |
| Page | `/offre-speciale` |

---

## Constantes dans le code

```typescript
// src/lib/constants.ts
export const PRICING = {
  vitrine: { from: 500, label: "a partir de 500EUR", monthly: "a partir de 39EUR/mois" },
  landing: { from: 500, label: "a partir de 500EUR", monthly: "a partir de 39EUR/mois" },
  ecommerce: { from: 800, label: "a partir de 800EUR", monthly: "a partir de 59EUR/mois" },
  application: { label: "Sur devis" },
  refonte: { from: 400, label: "a partir de 400EUR" },
} as const;
```

---

## Ou sont affiches les tarifs

- Page d'accueil (section pricing)
- Pages services individuelles
- Page `/offre-mensuelle`
- Formulaire `/offre-mensuelle/devis`
- Page `/offre-speciale`
- Popup ExitIntentPopup
- Estimateur `/estimation-prix-site-web`

---

## Modifier les tarifs

1. Modifier les valeurs dans `src/lib/constants.ts` (constante `PRICING`)
2. Pour les offres mensuelles, modifier aussi `src/app/offre-mensuelle/devis/DevisClient.tsx` (tableau `offers`)
3. Pour l'offre speciale, modifier `src/app/offre-speciale/OffreSpecialeClient.tsx` et `src/components/conversion/ExitIntentPopup.tsx`
4. Committer et pusher : deploiement automatique
