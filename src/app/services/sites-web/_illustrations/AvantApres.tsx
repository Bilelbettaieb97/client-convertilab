import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CadreNavigateur } from "@/components/motion/ff/a-cadre-navigateur";
import { cn } from "@/lib/utils";

/**
 * Avant / après d'une refonte : à gauche, un site vieillissant simulé en CSS
 * (mise en page en tableau, police à empattements, liens bleus soulignés),
 * clairement marqué « exemple » ; à droite, une vraie capture d'un site livré
 * par l'agence, dans un cadre de navigateur avec son domaine réel. Composant
 * serveur, aucune donnée chiffrée.
 */
export interface AvantApresProps {
  /** Version réduite pour une miniature (sans légendes hors des cadres). */
  compact?: boolean;
  className?: string;
}

const APRES = {
  domaine: "ahstudiocaen.fr",
  src: "/images/portfolio/portfolio-ahstudio-hero.webp",
  alt: "Page d'accueil du nouveau site d'AH Studio, photographe à Caen, livré par l'agence",
  width: 600,
  height: 351,
};

/** Site « avant » : simulation sobre d'un site des années 2010, sans nom d'entreprise. */
function SiteAvant({ compact }: { compact?: boolean }) {
  const t = compact ? "text-[6px] leading-tight" : "text-[8px] leading-snug sm:text-[9px]";
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-white" aria-hidden="true">
      <div className={cn("flex items-center gap-2 border-b border-border/60 bg-slate-100", compact ? "px-2 py-1" : "px-3 py-2")}>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </span>
        <span className={cn("flex-1 rounded-sm bg-white ring-1 ring-border/60", compact ? "h-3" : "h-4")} />
      </div>
      <div className={cn("flex-1 bg-[#e9e6dc] font-serif text-slate-800", t, compact ? "p-1.5" : "p-2.5")}>
        <div className="border border-slate-400 bg-[#f7f5ee]">
          <div className={cn("border-b border-slate-400 bg-[#c9c3ad] text-center font-bold", compact ? "py-1" : "py-2")}>
            Bienvenue sur notre site !
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <ul className={cn("space-y-1 border-r border-slate-400 bg-[#dfdbcd] text-blue-800 underline", compact ? "p-1" : "p-2")}>
              <li>Accueil</li>
              <li>Nos prestations</li>
              <li>Galerie photos</li>
              <li>Livre d&apos;or</li>
              <li>Contact</li>
            </ul>
            <div className={cn("space-y-1.5", compact ? "p-1" : "p-2")}>
              <p className="font-bold text-red-700">Nouveau ! Consultez nos tarifs 2014.</p>
              <p>
                Notre studio vous accueille du lundi au vendredi. Cliquez <span className="text-blue-800 underline">ici</span> pour voir nos photos.
              </p>
              <div className={cn("flex items-center justify-center border border-dashed border-slate-500 bg-white text-slate-400", compact ? "h-5" : "h-9")}>
                photo_studio.jpg
              </div>
              {!compact && <p className="text-slate-500">Dernière mise à jour : mars 2014. Site optimisé pour un écran 1024 × 768.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AvantApres({ compact = false, className }: AvantApresProps) {
  const etiquette = compact ? "text-[9px]" : "text-xs";
  return (
    <figure className={cn("w-full", className)}>
      <div className={cn("grid items-stretch", compact ? "grid-cols-2 gap-2" : "gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-3")}>
        <div className="flex min-w-0 flex-col">
          <p className={cn("mb-1.5 flex items-center gap-1.5 font-semibold text-slate-600", etiquette)}>
            <span className="rounded-full border border-border bg-white px-2 py-0.5 uppercase tracking-wide">Avant</span>
            <span className="truncate font-normal text-muted-foreground">exemple daté</span>
          </p>
          <div className={cn("w-full", compact ? "aspect-[16/11]" : "aspect-[16/12]")}>
            <SiteAvant compact={compact} />
          </div>
        </div>

        {!compact && (
          <div className="hidden items-center justify-center sm:flex" aria-hidden="true">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </div>
        )}

        <div className="flex min-w-0 flex-col">
          <p className={cn("mb-1.5 flex items-center gap-1.5 font-semibold text-slate-900", etiquette)}>
            <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-2 py-0.5 uppercase tracking-wide text-white">Après</span>
            <span className="truncate font-normal text-muted-foreground">{APRES.domaine}</span>
          </p>
          <div className={cn("w-full", compact ? "aspect-[16/11]" : "aspect-[16/12]")}>
            <CadreNavigateur domaine={APRES.domaine} className="h-full">
              <Image
                src={APRES.src}
                alt={APRES.alt}
                width={APRES.width}
                height={APRES.height}
                sizes={compact ? "200px" : "(min-width: 1024px) 240px, 50vw"}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </CadreNavigateur>
          </div>
        </div>
      </div>
      {!compact && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          À gauche, un exemple de site daté reconstitué ; à droite, un site réellement livré, consultable en ligne.
        </figcaption>
      )}
    </figure>
  );
}

export default AvantApres;
