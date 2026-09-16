import { POLES } from "@/data/poles";
import { Conteneur, Paragraphes, Surtitre } from "./pole-ui";
import PolesDefilants, { type PanneauPole } from "./PolesDefilants";

/** Titre de la colonne de droite de chaque panneau, selon le pôle. */
const TITRES_ELEMENTS: Record<string, string> = {
  "sites-web": "Cinq façons de commencer",
  publicite: "Cinq plateformes, une seule méthode",
  seo: "Quatre chantiers, du plus urgent au plus durable",
  crm: "Quatre façons de commencer",
};

/**
 * Les quatre pôles sous la forme attendue par PolesDefilants (composant
 * client) : l'icône est rendue ici, côté serveur, et les éléments de droite
 * sont les sous-pages (description et prix d'entrée) puis les cas d'usage
 * (pôle CRM). Source unique : src/data/poles.ts.
 */
export const PANNEAUX_POLES: PanneauPole[] = POLES.map((pole) => {
  const Icon = pole.icon;
  // Dès trois sous-pages, seules les sous-pages (cliquables) sont montrées ; sinon les cas d'usage
  // (sans lien) précèdent les sous-pages.
  const sousPages = pole.sousPages.map((sp) => ({ href: sp.href, label: sp.label, description: sp.description, prix: sp.prix }));
  const elements =
    sousPages.length >= 3
      ? sousPages
      : [...(pole.casUsage ?? []).map((c) => ({ label: c.label, description: c.description })), ...sousPages];
  const outil = pole.outils.find((o) => o.href !== "/contact");
  return {
    numero: pole.numero,
    nomCourt: pole.nomCourt,
    titre: pole.titre,
    lignes: pole.lignes,
    prix: pole.prix,
    prixDetail: pole.prixDetail,
    href: pole.href,
    ancre: pole.ancre,
    icon: <Icon strokeWidth={1.75} aria-hidden="true" />,
    elements,
    titreElements: TITRES_ELEMENTS[pole.slug] ?? "Ce que couvre ce pôle",
    outil: outil ? { href: outil.href, label: outil.label } : undefined,
  };
});

export interface SectionPolesDefilantsProps {
  id?: string;
  surtitre?: string;
  /** H2 de la section (mot-clé de la page). */
  titre: string;
  intro?: string | string[];
}

/**
 * Section « Nos quatre pôles » partagée par l'accueil et le hub /services :
 * en-tête centré, puis les panneaux plein écran empilés au défilement.
 * Composant serveur : titre, intro et tout le texte des panneaux sont dans
 * le HTML.
 */
export default function SectionPolesDefilants({ id = "poles", surtitre = "Nos quatre pôles", titre, intro }: SectionPolesDefilantsProps) {
  return (
    <section id={id} className="bg-muted/30 pt-16 sm:pt-20">
      <Conteneur>
        <div className="mx-auto max-w-3xl text-center">
          {surtitre && <Surtitre>{surtitre}</Surtitre>}
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">{titre}</h2>
          {intro && (
            <div className="mt-4 text-lg">
              <Paragraphes texte={intro} />
            </div>
          )}
        </div>
      </Conteneur>
      <div className="container mx-auto mt-10 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-0 lg:pb-0">
        <PolesDefilants poles={PANNEAUX_POLES} />
      </div>
    </section>
  );
}
