import Image from "next/image";
import { Check } from "lucide-react";
import { BoutonLien, Conteneur, Paragraphes, Surtitre, type PoleLienProps } from "./pole-ui";

export interface FondateurArgument {
  titre: string;
  texte?: string;
}

export interface FondateurProps {
  id?: string;
  /** Surtitre facultatif (ex. « Votre interlocuteur »). */
  surtitre?: string;
  /** Texte en « je », sans prénom : le nom n'apparaît que sous la photo. */
  texte: string | string[];
  /** Trois arguments (un seul interlocuteur, les quatre leviers, spécialiste des petites structures). */
  arguments: FondateurArgument[];
  /** Lien vers /a-propos avec une ancre descriptive. */
  lien: PoleLienProps;
  /** Charger la photo en priorité si elle est visible dès l'ouverture (rare). */
  priorite?: boolean;
  /** Texte alternatif de la photo, sans prénom. */
  alt?: string;
}

const TITRE = "Le fondateur";
const LIGNE_NOM = "Bilel Bettaieb, fondateur";

export default function Fondateur({
  id,
  surtitre,
  texte,
  arguments: args,
  lien,
  priorite = false,
  alt = "Le fondateur de ConvertiLab",
}: FondateurProps) {
  return (
    <section id={id} className="bg-background py-16 sm:py-20">
      <Conteneur>
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          <figure className="mx-auto w-full max-w-xs lg:col-span-2 lg:max-w-sm">
            <Image
              src="/images/fondateur.webp"
              alt={alt}
              width={840}
              height={1040}
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 80vw"
              priority={priorite}
              className="h-auto w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">{LIGNE_NOM}</figcaption>
          </figure>
          <div className="lg:col-span-3">
            {surtitre && <Surtitre>{surtitre}</Surtitre>}
            <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{TITRE}</h2>
            <div className="mt-4 space-y-3 text-lg">
              <Paragraphes texte={texte} />
            </div>
            {args.length > 0 && (
              <ul className="mt-6 space-y-3">
                {args.map((a) => (
                  <li key={a.titre} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{a.titre}</p>
                      {a.texte && <p className="text-sm leading-relaxed text-muted-foreground">{a.texte}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8">
              <BoutonLien {...lien} variante="secondaire" />
            </div>
          </div>
        </div>
      </Conteneur>
    </section>
  );
}
