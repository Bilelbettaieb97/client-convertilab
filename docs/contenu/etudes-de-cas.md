# Etudes de Cas

> 18 etudes de cas dans `src/data/case-studies.ts`, dont 3 avec pages detaillees.

---

## Liste complete des etudes de cas

| # | Slug | Client | Secteur | Categorie |
|---|------|--------|---------|-----------|
| 1 | `monsieur-arancini` | Monsieur Arancini | Restauration | site-vitrine |
| 2 | `funestore` | Funestore | E-commerce B2B | e-commerce |
| 3 | `papapret` | PapaPret | Formation / Infoproduit | landing-page |
| 4 | `acb-renovation` | ACB Renovation | BTP / Renovation | site-vitrine |
| 5 | `eleva-conciergerie` | Eleva Conciergerie | Conciergerie / Immobilier | site-vitrine |
| 6 | `adsb-wissembourg` | ADSB Wissembourg | Association | site-vitrine |
| 7 | `alliance-securite-incendie` | Alliance Securite Incendie | Securite Incendie | site-vitrine |
| 8 | `trievent` | Tri Event | Recyclage / Evenementiel | site-vitrine |
| 9 | `temple-zen` | Le Temple de l'Energie | Bien-etre / Massage | site-vitrine |
| 10 | `institut-nomad` | Institut Nomad | Education / Pedagogie | site-vitrine |
| 11 | `ah-studio` | AH Studio Caen | Photographie / Branding | portfolio |
| 12 | `vinoboat` | Vinoboat Prestige | Tourisme de Luxe | landing-page |
| 13 | `couleur-sable` | Couleur Sable by K | Coiffure / Beaute | site-vitrine |
| 14 | `filmreel-gallery` | FilmReel Gallery | Production Video | portfolio |
| 15 | `art-des-roses` | Art des Roses | E-commerce / Art | e-commerce |
| 16 | `segermes` | Segermes | E-commerce Premium | e-commerce |
| 17 | `spectacle` | Spectacle | Evenementiel / Spectacle | landing-page |
| 18 | `ecrin-de-seoul` | L'Ecrin de Seoul | Cosmetique / K-Beauty | e-commerce |

---

## Categories

| Categorie | Nombre | Icone |
|-----------|--------|-------|
| Sites Vitrine | 9 | Globe |
| E-commerce | 4 | ShoppingCart |
| Landing Pages | 3 | Rocket |
| Portfolios | 2 | Camera |

---

## Etudes de cas detaillees (fullCaseStudies)

3 etudes disposent d'une page complete avec galerie, graphiques et timeline :

### monsieur-arancini

- **Client** : Monsieur Arancini (artisan arancini siciliens)
- **Challenge** : aucune presence en ligne, besoin d'image de marque premium
- **Solution** : site vitrine premium, design UI/UX, structuration offre produit
- **Timeline** : 7 semaines (strategie, design, dev, lancement)
- **Galerie** : 2 captures pleine page

### funestore

- **Client** : Funestore (articles funeraires B2B)
- **Challenge** : zero presence digitale, vente B2B traditionnelle
- **Solution** : plateforme e-commerce B2B, espace pro, catalogue 24/7
- **Timeline** : 11 semaines (analyse, design, dev, lancement)
- **Galerie** : 1 capture pleine page

### papapret

- **Client** : PapaPret (formation futurs papas)
- **Challenge** : manque de support digital pour convertir les visiteurs
- **Solution** : landing page haute conversion, copywriting, preuves sociales
- **Timeline** : 3 jours + optimisation continue
- **Galerie** : 1 capture pleine page

---

## Structure d'une etude de cas

### Fiche standard (CaseStudy)

```typescript
interface CaseStudy {
  icon: string;           // Icone Lucide
  iconColor: string;      // Classe Tailwind couleur
  sector: string;         // Secteur d'activite
  client: string;         // Nom du client
  title: string;          // Titre de l'etude
  description: string;    // Description courte
  image: string;          // Image hero (chemin /images/portfolio/)
  metrics: CaseStudyMetric[]; // 3 metriques cles
  technologies: string[]; // Technologies/competences
  results: string;        // Resultat principal
  testimonial: string;    // Citation client
  author: string;         // Auteur du temoignage
  slug: string;           // Slug URL
  category: "site-vitrine" | "landing-page" | "e-commerce" | "portfolio";
}
```

### Fiche detaillee (FullCaseStudy)

Etend la fiche standard avec :

```typescript
interface FullCaseStudy {
  // ... champs de base
  subtitle: string;       // Sous-titre
  gallery: Array<{ src: string; alt: string; caption: string }>;
  chartData: Array<{ name: string; before: number; after: number }>;
  challenge: string;      // Description du defi
  solution: string;       // Description de la solution
  metrics: Array<{ label: string; value: string; description: string }>;
  timeline: Array<{ phase: string; duration: string; description: string }>;
  results: string;        // Resultats detailles
  testimonial: string;    // Citation complete
  author: string;
  role: string;           // Role de l'auteur
}
```

---

## Comment ajouter une nouvelle etude de cas

### Etude de cas standard

1. Ouvrir `src/data/case-studies.ts`
2. Ajouter une image dans `/public/images/portfolio/portfolio-[slug]-hero.webp`
3. Ajouter un objet dans le tableau `caseStudies` :

```typescript
{
  icon: "Sparkles",
  iconColor: "text-blue-600",
  sector: "Secteur",
  client: "Nom du Client",
  title: "Titre de l'etude",
  description: "Description courte.",
  image: "/images/portfolio/portfolio-[slug]-hero.webp",
  metrics: [
    { label: "Metrique", value: "Valeur", icon: "Star" },
  ],
  technologies: ["Tech1", "Tech2"],
  results: "Resultat principal",
  testimonial: "Citation du client...",
  author: "Nom du Client",
  slug: "mon-slug",
  category: "site-vitrine",
},
```

### Etude de cas detaillee

1. Ajouter la fiche standard (ci-dessus)
2. Ajouter les images de galerie dans `/public/images/gallery/`
3. Ajouter une entree dans `fullCaseStudies` :

```typescript
"mon-slug": buildFullStudy(getSimple("mon-slug"), {
  subtitle: "Sous-titre...",
  image: "/images/portfolio/portfolio-[slug]-hero.webp",
  gallery: [{ src: "/images/gallery/gallery-[slug]-fullpage-1.webp", alt: "...", caption: "..." }],
  chartData: [{ name: "Metrique", before: 10, after: 90 }],
  challenge: "Description du defi...",
  solution: "Description de la solution...",
  metrics: [{ label: "Label", value: "Valeur", description: "Detail" }],
  timeline: [{ phase: "Phase", duration: "X semaines", description: "Detail" }],
  results: "Resultats detailles...",
  testimonial: "Citation complete...",
  author: "Nom",
  role: "Role",
}),
```

4. Ajouter le slug dans `projectOrder` si necessaire
