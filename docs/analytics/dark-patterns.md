# Dark Patterns & Tactiques de Conversion

> Composants d'urgence et de preuve sociale utilises sur le site.
> Repertoire : `src/components/conversion/`

---

## ExitIntentPopup

**Fichier** : `src/components/conversion/ExitIntentPopup.tsx`

### Comportement

- **Desktop uniquement** : desactive sur mobile (`window.innerWidth < 768` ou detection user-agent)
- **Declenchement** : apparait apres **5 secondes** OU quand la souris quitte le viewport par le haut (exit intent)
- **Dismiss** : stocke `exitPopupDismissedAt` dans localStorage, ne reapparait pas pendant **24 heures**
- **Contenu** : offre a 300 EUR au lieu de 990 EUR, "Reservee aux 10 premiers clients"
- **Actions** : redirige vers `/offre-speciale` ou scrolle vers la section contact

### Points a noter

- Le prix barre de 990 EUR est statique (hardcode)
- La mention "PLACES LIMITEES" est statique
- La mention "Pour les 10 premieres personnes" est statique

---

## SocialProofToast

**Fichier** : `src/components/conversion/SocialProofToast.tsx`

### Comportement

- **Apparition** : commence apres **8 secondes**
- **Rotation** : chaque notification est visible **5 secondes**, puis disparait. La suivante apparait apres **25 secondes**
- **Dismiss** : le visiteur peut fermer (icone X, visible au hover). Une fois ferme, ne reapparait plus pendant la session
- **Position** : en bas a gauche de l'ecran

### Fausses notifications

Les donnees sont **entierement fictives et hardcodees** :

| Nom | Action | Ville | Temps |
|-----|--------|-------|-------|
| Sophie M. | a recu son site vitrine | Paris | il y a 2h |
| Thomas L. | a lance sa boutique en ligne | Lyon | il y a 5h |
| Marie D. | a demande un devis | Bordeaux | il y a 12h |
| Alexandre C. | a reserve un appel | Marseille | il y a 1j |
| Julie B. | a recu son landing page | Toulouse | il y a 1j |
| Pierre R. | a double son trafic SEO | Nantes | il y a 2j |

---

## StickyMobileCTA

**Fichier** : `src/components/conversion/StickyMobileCTA.tsx`

### Comportement

- **Apparition** : se fixe en bas de l'ecran apres avoir scrolle 40% de la page
- **Action** : scrolle vers la section `#contact`
- **Dismiss** : le visiteur peut fermer (icone X), disparait pour la session
- **Design** : barre violette avec icone Zap et texte CTA

---

## PromoBanner

**Fichier** : `src/components/conversion/PromoBanner.tsx`

### Comportement

- **Position** : banniere en haut du site, sous la navigation
- **Dismiss** : stocke `promoBannerClosed` dans localStorage, ne reapparait plus apres fermeture
- **Contenu** : promotion en cours avec lien vers l'offre
- **Design** : degrader violet avec animation pulse en fond

---

## Fausse rarete / urgence

Plusieurs elements du site utilisent des mentions de rarete qui sont **hardcodees** et ne refletent pas la realite :

| Element | Mention | Realite |
|---------|---------|---------|
| OffreSpeciale | "2 places restantes" (minimum) | `Math.max(2, TOTAL_SPOTS - count)` : ne descend jamais en dessous de 2 |
| ExitIntentPopup | "Reservee aux 10 premiers clients" | Texte statique |
| ExitIntentPopup | "300 EUR seulement" (barre 990 EUR) | Prix et reduction statiques |
| Divers | "3 creneaux disponibles cette semaine" | Texte statique |
| ContactForm | "On revient vers vous sous 24h" | Engagement reel |

### Recommandation

Si ces elements doivent etre rendus honnetes, il faudrait :
1. Supprimer le `Math.max(2, ...)` dans OffreSpeciale pour afficher le vrai nombre
2. Remplacer les textes statiques par des donnees dynamiques ou les retirer
3. Rendre les notifications de SocialProofToast optionnelles ou basees sur des donnees reelles
