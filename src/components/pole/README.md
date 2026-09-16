# Composants de pôle (`src/components/pole/`)

Briques partagées par les quatre pages pôles (`/services/sites-web`, `/services/sea`, `/services/seo`, `/services/crm (sous-page /services/integration-ia)`) et réutilisables sur l'accueil. Aucun composant n'embarque de chiffre ni de texte marketing : tout vient des props, sauf `Fondateur` (titre « Le fondateur » et ligne « Bilel Bettaieb, fondateur »). Tout est rendu côté serveur (le texte est dans le HTML, y compris la FAQ), sauf deux composants de conversion `"use client"` : `StickyCtaBar` et `FormulaireFinal`. Les animations d'apparition viennent de `src/components/motion/` (`Reveal`, `BorderBeam`...), voir son README.

Données associées :

- `src/data/poles.ts` : `POLES`, `getPole(slug)`, `autresPoles(slug)`, `ETAPES_COMMUNES`, types `Pole`, `PoleSlug`, `PoleLien`.
- `src/lib/faq-schema.ts` : `FaqItem`, `faqPageSchema(items)`.
- `filArianeSchema(elements, urlCourante)` exporté depuis `FilAriane.tsx`.

Import groupé : `import { PoleHero, PoleSection, ... } from "@/components/pole";`

## Règles à respecter dans les pages

- Un seul H1 : celui de `PoleHero`. Les sections autonomes (`PolePreuve`, `PolePrix`, `PoleFAQ`, `PoleAutresPoles`, `PoleCTA`, `Fondateur`, `PoleSection`) rendent leur propre H2 : ne pas les imbriquer dans un `PoleSection`.
- `PoleOffres`, `PoleEtapes`, `PoleLivrables` sont des grilles sans titre : les placer comme `children` d'un `PoleSection`.
- Vouvoiement, « nous », jamais de tiret long, prix depuis `PRICING` (`src/lib/constants.ts`) ou `poles.ts`, un seul chiffre de clients (« 150+ clients accompagnés »), aucune garantie, aucune fausse rareté.
- Les liens externes (`external: true`) s'ouvrent dans un nouvel onglet avec `rel="noopener noreferrer"` et une mention lecteur d'écran.
- Alterner les fonds : `PoleSection fond="gris"` ou blanc ; `PolePreuve`, `PoleFAQ`, `PainPoints`, `Comparatif` et `FormulaireFinal` sont gris par défaut, `PolePrix`, `PoleAutresPoles`, `Fondateur`, `Engagements`, `PourQui` blancs, `PoleHero` et `PoleCTA` portent le seul dégradé de fond léger, `SectionSombre` le bloc sombre (un ou deux par page).
- Ordre de conversion recommandé : hero → `PainPoints` (le constat) → offres → méthode (`Timeline`) → preuve → `CtaIntermediaire` → `Comparatif` / `PourQui` / `Engagements` → prix → FAQ → autres pôles → `FormulaireFinal` (id `formulaire`) → `PoleCTA`, avec `StickyCtaBar` montée une fois sur la page. Les CTA de la page pointent vers `#formulaire`.

## Type partagé

```ts
type PoleLienProps = { href: string; label: string; external?: boolean };
```

## Composants

### `FilAriane`

| Prop | Type | Obligatoire |
|---|---|---|
| `elements` | `{ label: string; href?: string }[]` (le dernier sans `href`) | oui |
| `className` | `string` (par défaut `py-4`) | non |

`filArianeSchema(elements, "/services/seo")` renvoie le JSON-LD `BreadcrumbList` depuis la même liste.

### `PoleHero`

| Prop | Type | Obligatoire |
|---|---|---|
| `surtitre` | `string` | oui |
| `titre` | `string` (H1) | oui |
| `texte` | `string \| string[]` | oui |
| `boutonPrimaire` | `PoleLienProps` | oui |
| `boutonSecondaire` | `PoleLienProps` | oui |
| `chiffres` | `{ valeur: string; libelle: string }[]` (trois) | oui |

### `PoleSection`

| Prop | Type | Obligatoire |
|---|---|---|
| `id` | `string` | non |
| `surtitre` | `string` | non |
| `titre` | `string` (H2) | oui |
| `intro` | `string \| string[]` | non |
| `fond` | `"blanc" \| "gris"` (blanc) | non |
| `alignement` | `"centre" \| "gauche"` (centre) | non |
| `className` | `string` | non |
| `children` | `ReactNode` | non |

### `PoleOffres`

| Prop | Type | Obligatoire |
|---|---|---|
| `offres` | `PoleOffre[]` | oui |
| `colonnes` | `2 \| 3` (3) | non |

`PoleOffre = { titre; description; prix?; prixDetail?; points: string[]; lien?: PoleLienProps; miseEnAvant?: boolean }`

### `PoleEtapes`

| Prop | Type | Obligatoire |
|---|---|---|
| `etapes` | `{ titre: string; texte: string; repere?: string }[]` | oui |

Numérotation automatique (01, 02, ...), liste ordonnée.

### `PoleLivrables`

| Prop | Type | Obligatoire |
|---|---|---|
| `livrables` | `{ icon: LucideIcon; titre: string; texte?: string }[]` | oui |
| `colonnes` | `2 \| 3` (3) : 2 pour quatre livrables, afin de ne pas laisser une case vide en desktop | non |

### `PolePreuve`

| Prop | Type | Obligatoire |
|---|---|---|
| `id`, `surtitre` | `string` | non |
| `titre` | `string` (H2) | oui |
| `texte` | `string \| string[]` | oui |
| `cas` | `PoleCas[]` | non |
| `lien` | `PoleLienProps` | non |
| `note` | `string` (précision honnête en petit) | non |
| `aside` | `ReactNode` (colonne de droite en desktop : carte « ce que vous pouvez vérifier », tableau de bord d'exemple) | non |

`PoleCas = { nom; prestation; fait; href?; siteHref?; ancre? }`. Source des cas : `src/data/case-studies.ts` uniquement. La grille s'adapte au nombre de cas : un seul cas = carte en vedette sur toute la largeur, deux = deux colonnes, trois et plus = trois colonnes (aucune case vide). Sans `cas` ni `aside`, le texte est centré (`mx-auto text-center`) pour ne pas laisser la moitié droite de l'écran vide.

### `PolePrix`

| Prop | Type | Obligatoire |
|---|---|---|
| `id`, `surtitre` | `string` | non |
| `titre` | `string` (H2) | oui |
| `intro` | `string \| string[]` | non |
| `lignes` | `{ libelle: string; valeur: string; detail?: string }[]` | oui |
| `engagementsTitre` | `string` | non |
| `engagements` | `string[]` | non |
| `lien` | `PoleLienProps` | non |
| `note` | `string` | non |

### `PoleFAQ`

| Prop | Type | Obligatoire |
|---|---|---|
| `id`, `surtitre` | `string` | non |
| `titre` | `string` (H2) | oui |
| `intro` | `string \| string[]` | non |
| `items` | `FaqItem[]` | oui |
| `lien` | `PoleLienProps` (vrai lien, ex. `/contact`) | non |

Accordéon `<details>/<summary>` natif : les réponses sont dans le HTML. Le JSON-LD n'est pas injecté par le composant, il se génère dans `page.tsx` avec `faqPageSchema(items)` depuis la même liste.

### `PoleAutresPoles`

| Prop | Type | Obligatoire |
|---|---|---|
| `id`, `surtitre` | `string` | non |
| `slug` | `PoleSlug` (pôle courant, exclu) | oui |
| `titre` | `string` (H2) | oui |
| `intro` | `string \| string[]` | non |

### `PoleCTA`

| Prop | Type | Obligatoire |
|---|---|---|
| `id` | `string` | non |
| `titre` | `string` (H2) | oui |
| `texte` | `string \| string[]` | non |
| `calendlyLabel` | `string` (lien vers `SITE.calendly`, nouvel onglet) | oui |
| `contactLabel` | `string` | oui |
| `contactHref` | `string` (`/contact`) | non |
| `afficherTelephone` | `boolean` (false) | non |

### `Fondateur`

| Prop | Type | Obligatoire |
|---|---|---|
| `id`, `surtitre` | `string` | non |
| `texte` | `string \| string[]` en « je », sans prénom | oui |
| `arguments` | `{ titre: string; texte?: string }[]` (trois) | oui |
| `lien` | `PoleLienProps` (vers `/a-propos`) | oui |
| `priorite` | `boolean` (false) | non |
| `alt` | `string` (« Le fondateur de ConvertiLab ») | non |

Photo `/images/fondateur.webp` (840×1040) via `next/image`. Le nom n'apparaît qu'en légende sous la photo.

## Composants de conversion (phase Fondations 2)

### `StickyCtaBar` (client)

Barre collante en bas d'écran, mobile et desktop : bouton principal + bouton téléphone (`tel:` `SITE.phone`) + croix. Apparaît une fois le hero passé (`seuil` hauteurs d'écran, 1 par défaut : le bouton principal du hero a été vu avant qu'elle n'arrive). Se cache : quand l'élément `#formulaireId` est visible **ou dépassé** (son haut au-dessus de 85 % de l'écran, tant que l'on n'est pas remonté au-dessus, pour ne pas empiler trois couches fixes sur le dernier appel et le pied de page), quand le pied de page (`#pied-de-page`, posé par `Footer`) est visible, tant que le bandeau cookies n'a pas reçu de réponse (`getStoredConsent()` + événement `consent-updated`), ou après fermeture. Tout est mesuré dans un seul écouteur de défilement passif (`getBoundingClientRect`), pas d'IntersectionObserver : un saut direct en bas de page ne franchit aucun seuil d'intersection. Pose la variable CSS `--barre-cta` (sa hauteur) sur `<html>` quand elle est visible ; `ChatWidget` remonte sa bulle d'autant par un `transform` (pas de `bottom` animé : aucun CLS) et `ChatWindow` par `bottom-[calc(6rem+var(--barre-cta,0px))]`. z-40 : sous la bulle de chat (z-50) et le bandeau cookies (z-90). Remplace `StickyMobileCTA` sur les pages refondues (ne pas monter les deux).

| Prop | Type | Obligatoire |
|---|---|---|
| `label` | `string` (ex. « Ma maquette gratuite en 48h ») | oui |
| `href` | `string` (`#formulaire`, page, URL) | oui |
| `external` | `boolean` | non |
| `mentions` | `string[]` (ex. `["Gratuit", "Sans engagement", "Réponse sous 24 h"]`) | oui |
| `formulaireId` | `string` (`formulaire`) | non |
| `seuil` | `number` (1 = une hauteur d'écran) | non |
| `telephoneLabel` | `string` lecteur d'écran (« Appeler l'agence ») | non |

### `PainPoints`

« Le constat » : H2, intro, trois cartes douleur (icône lucide, titre, texte), fond gris très clair.

| Prop | Type | Obligatoire |
|---|---|---|
| `id`, `surtitre` | `string` | non |
| `titre` | `string` (H2) | oui |
| `intro` | `string \| string[]` | non |
| `points` | `{ icon: LucideIcon; titre: string; texte: string }[]` (3, max 4) | oui |
| `fond` | `"gris" \| "blanc"` (gris) | non |

### `Engagements`

Grille de 4 à 6 engagements (icône, titre, une ligne). `variante="clair"` = section autonome avec son H2 ; `variante="sombre"` = rend seulement la grille, à placer comme enfant de `SectionSombre`.

| Prop | Type | Obligatoire |
|---|---|---|
| `id`, `surtitre`, `titre` (H2) | `string` | non (titre requis en variante claire) |
| `intro` | `string \| string[]` | non |
| `items` | `{ icon?: LucideIcon; titre: string; texte: string }[]` | oui |
| `variante` | `"clair" \| "sombre"` (clair) | non |

### `Comparatif`

Deux colonnes « Une agence classique » (croix) / « Avec ConvertiLab » (coches, colonne teintée). Les items se répondent dans l'ordre.

| Prop | Type | Obligatoire |
|---|---|---|
| `id`, `surtitre` | `string` | non |
| `titre` | `string` (H2) | oui |
| `intro` | `string \| string[]` | non |
| `gauche`, `droite` | `{ titre: string; items: string[] }` | oui |
| `note` | `string` (précision honnête) | non |
| `fond` | `"gris" \| "blanc"` (gris) | non |

### `PourQui`

« C'est fait pour vous si... » / « Ce n'est pas pour vous si... » + encadré « Notre engagement, écrit noir sur blanc » (texte en prop : jamais de garantie de remboursement ni de résultat).

| Prop | Type | Obligatoire |
|---|---|---|
| `id`, `surtitre` | `string` | non |
| `titre` | `string` (H2) | oui |
| `intro` | `string \| string[]` | non |
| `pour`, `pasPour` | `{ titre: string; items: string[] }` | oui |
| `engagement` | `{ titre: string; texte: string \| string[] }` | non |
| `fond` | `"blanc" \| "gris"` (blanc) | non |

### `Timeline`

Étapes avec repère temporel (« Jour 1 », « Semaine 1 », « Chaque mois ») : ligne verticale en mobile, horizontale en desktop. Grille sans titre : enfant d'un `PoleSection` ou d'un `SectionSombre` (avec `sombre`).

| Prop | Type | Obligatoire |
|---|---|---|
| `etapes` | `{ repere: string; titre: string; texte: string; icon?: LucideIcon }[]` (3 à 5) | oui |
| `sombre` | `boolean` (false) | non |

### `CtaIntermediaire`

Bandeau à mi-page : titre, texte, bouton principal, alternative téléphone (`alternativeLabel` + `SITE.phoneDisplay` en `tel:`). `niveau="p"` quand la section parente porte déjà le H2.

| Prop | Type | Obligatoire |
|---|---|---|
| `id` | `string` | non |
| `titre` | `string` | oui |
| `texte` | `string \| string[]` | non |
| `bouton` | `PoleLienProps` | oui |
| `alternativeLabel` | `string` (ex. « ou appelez-nous au ») | non |
| `niveau` | `"h2" \| "p"` (h2) | non |

### `DashboardMock`

Carte façon tableau de bord (page Publicité, accueil) avec les indicateurs que le client verra. Le badge `mention` (« Exemple ») est obligatoire et la `note` recommandée : aucune valeur n'est présentée comme un résultat réel. CSS pur, serveur.

| Prop | Type | Obligatoire |
|---|---|---|
| `titre` | `string` | oui |
| `mention` | `string` (badge « Exemple ») | oui |
| `indicateurs` | `{ libelle: string; valeur: string; detail?: string }[]` (4) | oui |
| `ligne` | `{ libelle: string; valeur: string }` (ex. meilleure annonce) | non |
| `serie` | `number[]` (barres décoratives, 0 à 100) | non |
| `note` | `string` (« Exemple de tableau de bord, ce ne sont pas des résultats clients. ») | non |

### `SectionSombre`

Enveloppe à fond sombre profond (`bg-slate-950`, halo violet discret) avec H2, intro et enfants en couleurs claires (`Timeline sombre`, `Engagements variante="sombre"`).

| Prop | Type | Obligatoire |
|---|---|---|
| `id`, `surtitre` | `string` | non |
| `titre` | `string` (H2) | oui |
| `intro` | `string \| string[]` | non |
| `alignement` | `"centre" \| "gauche"` (centre) | non |
| `children` | `ReactNode` | non |

### `FormulaireFinal` (client)

Deux étapes : 1) une question sans coordonnées (boutons, deux colonnes dès `sm`, trois en `lg` seulement au-delà de quatre options), 2) prénom, email, téléphone, message facultatif, case RGPD non pré-cochée (lien vers `/politique-de-confidentialite`), honeypot invisible, validation simple avec messages inline. Envoi `POST /api/notify` : `{ formType: "Contact", name, email, phone, fields: { pole, project, besoin, reponse_etape_1, message, page } }` (formType « Contact » = Pipedrive étape 12 + accusé + série existants). `fields.project` est la valeur lue par la série email « Contact » (`PROJET_LABELS` dans `src/lib/email-series.ts`) : sur l'accueil c'est `reponse.value` (`site`, `publicite`, `seo-ia`, `integration-ia`), sur une page pôle elle est dérivée de `pole` (`site` → `site`, `publicite` → `publicite`, `seo` → `seo-ia`, `ia` → `integration-ia`) ; sans elle l'accusé parlerait d'« un site web » à tout le monde. Le focus suit l'étape (premier champ, confirmation, première option au retour). Écran de confirmation puis lien Calendly (`SITE.calendly`). Id `formulaire` par défaut, ancre des CTA et de `StickyCtaBar`.

| Prop | Type | Obligatoire |
|---|---|---|
| `id` | `string` (`formulaire`) | non |
| `pole` | `string` (« site », « publicite », « seo », « crm », « ia », « accueil », « services ») ; sert aussi à dériver `fields.project` (table PROJET_PAR_POLE, sinon la réponse de l'étape 1) | oui |
| `page` | `string` (chemin courant par défaut) | non |
| `surtitre` | `string` | non |
| `titre` | `string` (H2) | oui |
| `intro` | `string \| string[]` | non |
| `question` | `{ libelle: string; aide?: string; options: { value; label; icon?; desc? }[] }` | oui |
| `titreEtape2` | `string` (ex. « Où vous répondre ? ») | oui |
| `boutonLabel` | `string` (ex. « Recevoir ma réponse sous 24 h ») | oui |
| `calendlyLabel` | `string` | oui |
| `confirmation` | `{ titre: string; texte: string }` | oui |
| `fond` | `"gris" \| "blanc"` (gris) | non |

`ContactForm` (`src/components/contact/ContactForm.tsx`) accepte par ailleurs `besoinInitial` (`"site" | "publicite" | "seo-ia" | "crm"`) pour ouvrir directement l'étape 2 avec le besoin présélectionné, et `SeoCheckForm` lit `?url=` pour pré-remplir le champ (formulaire inline de la page SEO vers `/seo-check?url=`).

## Exemple d'usage (page pôle)

```tsx
// src/app/services/seo/page.tsx
import type { Metadata } from "next";
import { Globe, Search, Star } from "lucide-react";
import { SITE, STRUCTURED_DATA } from "@/lib/constants";
import { faqPageSchema, type FaqItem } from "@/lib/faq-schema";
import { getPole } from "@/data/poles";
import {
  FilAriane,
  filArianeSchema,
  PoleHero,
  PoleSection,
  PoleOffres,
  PoleEtapes,
  PoleLivrables,
  PolePreuve,
  PolePrix,
  PoleFAQ,
  PoleAutresPoles,
  PoleCTA,
} from "@/components/pole";

const pole = getPole("seo");
const URL = pole.href;

const FIL = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt },
];

const FAQ: FaqItem[] = [
  { q: "Combien de temps avant les premiers résultats SEO ?", a: "Comptez trois à six mois ..." },
];

export const metadata: Metadata = {
  title: "Agence SEO à Rueil-Malmaison et Paris : référencement, local, IA",
  description: "...",
  alternates: { canonical: `${SITE.url}${URL}` },
  openGraph: { title: "...", description: "...", url: `${SITE.url}${URL}`, type: "website" },
};

export default function Page() {
  const jsonLd = [
    filArianeSchema(FIL, URL),
    faqPageSchema(FAQ),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: pole.nomCourt,
      url: `${SITE.url}${URL}`,
      provider: { "@id": STRUCTURED_DATA.organization["@id"] },
    },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <FilAriane elements={FIL} />
      <PoleHero
        surtitre="Rueil-Malmaison · Paris · Île-de-France"
        titre="Agence SEO à Rueil-Malmaison et Paris : référencement naturel, local et visibilité IA"
        texte="..."
        boutonPrimaire={{ href: pole.outils[0].href, label: pole.outils[0].label }}
        boutonSecondaire={{ href: SITE.calendly, label: "Réserver 30 min avec le fondateur", external: true }}
        chiffres={[
          { valeur: "150+", libelle: "clients accompagnés" },
          { valeur: `${SITE.reviews.rating.replace(".", ",")}/5`, libelle: `sur ${SITE.reviews.count} avis` },
          { valeur: "2 semaines", libelle: "pour livrer un site" },
        ]}
      />
      <PoleSection titre="Pour qui, pour quel problème ?" intro="...">
        <PoleLivrables livrables={[{ icon: Globe, titre: "...", texte: "..." }]} />
      </PoleSection>
      <PoleSection id="offres" fond="gris" titre="Quelles prestations SEO proposons-nous ?">
        <PoleOffres
          offres={[
            { titre: "Forfait SEO", description: "...", prix: pole.prix, prixDetail: pole.prixDetail, points: ["..."], lien: pole.sousPages[0] },
          ]}
        />
      </PoleSection>
      <PoleSection id="methode" titre="Comment travaillons-nous ?">
        <PoleEtapes etapes={[{ titre: "Audit", texte: "..." }]} />
      </PoleSection>
      <PolePreuve titre="Ce que vous voyez, concrètement" texte="..." lien={{ href: "/seo-check", label: "Vérifier le SEO de votre site" }} />
      <PolePrix titre="Combien coûte le SEO ?" lignes={[{ libelle: "Forfait SEO", valeur: pole.prix, detail: pole.prixDetail }]} engagements={["..."]} />
      <PoleFAQ titre="Vos questions sur le SEO" items={FAQ} lien={{ href: "/contact", label: "Poser une autre question" }} />
      <PoleAutresPoles slug="seo" titre="Nos trois autres pôles" />
      <PoleCTA titre="Un projet, une question ?" calendlyLabel="Réserver 30 min avec le fondateur" contactLabel="Écrire à l'agence" afficherTelephone />
    </>
  );
}
```

Icônes inutilisées dans l'exemple (`Search`, `Star`) à retirer dans une vraie page : eslint signale les imports morts.
