# Suivi des Conversions

> Comment les conversions sont trackees sur ConvertiLab.

---

## Objectifs de conversion

| Objectif | Formulaire | Evenement GA |
|----------|------------|--------------|
| Soumission formulaire contact | ContactForm | `ads_conversion_Envoi_de_formulaire_pou_1` |
| Reservation offre speciale | OffreSpeciale | `ads_conversion_Envoi_de_formulaire_pou_1` |
| Demande de maquette | DemandeMaquette | _(via notify-contact, pas de tracking GA direct)_ |
| Estimation de prix | EstimationPrix | _(via notify-contact, pas de tracking GA direct)_ |
| Inscription newsletter | Newsletter | `ads_conversion_Envoi_de_formulaire_pou_1` |
| Demande devis mensuel | DevisForm | `ads_conversion_Envoi_de_formulaire_pou_1` |

---

## Fonctions de tracking

### window.trackFormConversion()

Envoie un evenement de conversion Google Ads sans redirection.

```javascript
window.trackFormConversion = function() {
  gtag('event', 'ads_conversion_Envoi_de_formulaire_pou_1', {});
};
```

**Utilisation dans le code** :

```typescript
if (typeof window !== 'undefined' && (window as any).trackFormConversion) {
  (window as any).trackFormConversion();
}
```

Appelee par : ContactForm, Newsletter, OffreSpeciale, DevisForm.

### window.gtagSendEvent(url)

Envoie un evenement de conversion Google Ads avec redirection apres callback.

```javascript
window.gtagSendEvent = function(url) {
  gtag('event', 'ads_conversion_Envoi_de_formulaire_pou_1', {
    'event_callback': function() {
      if (typeof url === 'string') window.location = url;
    },
    'event_timeout': 2000
  });
  return false;
};
```

Utile pour les liens CTA qui doivent tracker avant de rediriger.

---

## Comment ajouter un nouvel evenement de conversion

### Etape 1 : Definir l'evenement dans Analytics.tsx

Dans le composant `GoogleAnalytics`, ajouter une nouvelle fonction globale :

```javascript
window.trackNouvelEvenement = function() {
  gtag('event', 'nom_de_l_evenement', {
    // parametres optionnels
  });
};
```

### Etape 2 : Appeler la fonction dans le composant

```typescript
if (typeof window !== 'undefined' && (window as any).trackNouvelEvenement) {
  (window as any).trackNouvelEvenement();
}
```

### Etape 3 : Configurer dans Google Ads / GA4

1. Aller dans Google Ads > Conversions
2. Creer une nouvelle action de conversion
3. Utiliser le meme nom d'evenement que dans le code
4. Verifier dans GA4 > Events que l'evenement remonte correctement

---

## Meta Pixel

Le Meta Pixel track automatiquement les `PageView`. Pour ajouter des evenements custom :

```javascript
fbq('track', 'Lead');          // Nouveau lead
fbq('track', 'CompleteRegistration'); // Inscription
fbq('track', 'Purchase', { value: 300, currency: 'EUR' }); // Achat
```
