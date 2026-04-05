# Tracking & Analytics

> Configuration des outils de tracking du site ConvertiLab.
> Fichier source : `src/components/Analytics.tsx` + `src/lib/constants.ts`

---

## Outils configures

| Outil | Identifiant | Strategy de chargement |
|-------|-------------|----------------------|
| Google Analytics 4 | `G-N9NTVTE0R6` | `lazyOnload` |
| Google Tag Manager | `GTM-5TDHTDHP` | `lazyOnload` |
| Meta Pixel (Facebook) | `1413733970752208` | `lazyOnload` |
| Google AdSense | `ca-pub-5844925774606937` | _(reference dans constants)_ |

---

## Strategy de chargement

Tous les scripts sont charges avec `strategy="lazyOnload"` via le composant `next/script`. Cela signifie qu'ils ne se chargent **qu'apres que la page soit interactive**, pour ne pas impacter les performances (LCP, FCP, etc.).

---

## Google Analytics 4 (GA4)

**Composant** : `GoogleAnalytics`

```typescript
gtag('config', 'G-N9NTVTE0R6');
```

- Configure le dataLayer global
- Expose `window.gtag` pour le tracking personnalise
- Expose `window.gtagSendEvent(url)` pour les conversions avec redirection
- Expose `window.trackFormConversion()` pour les conversions sans redirection

---

## Google Tag Manager (GTM)

**Composant** : `GoogleTagManager` + `GTMNoscript`

- Charge le conteneur GTM `GTM-5TDHTDHP`
- Le fallback `<noscript>` est injecte dans le `<body>` via `GTMNoscript`
- GTM gere les evenements supplementaires et le deploiement de tags tiers

---

## Meta Pixel (Facebook)

**Composant** : `MetaPixel` + `MetaPixelNoscript`

```javascript
fbq('init', '1413733970752208');
fbq('track', 'PageView');
```

- Initialise le pixel Facebook
- Track automatiquement les PageView
- Fallback `<noscript>` avec image 1x1 pour les navigateurs sans JS

---

## Google AdSense

**Identifiant** : `ca-pub-5844925774606937`

Reference dans `SITE.analytics.adsense`. Utilise pour la monetisation potentielle de contenu blog.

---

## Constantes de configuration

Toutes les valeurs sont centralisees dans `src/lib/constants.ts` :

```typescript
analytics: {
  ga: "G-N9NTVTE0R6",
  gtm: "GTM-5TDHTDHP",
  metaPixel: "1413733970752208",
  adsense: "ca-pub-5844925774606937",
}
```

Pour modifier un identifiant de tracking, il suffit de modifier cette constante.
