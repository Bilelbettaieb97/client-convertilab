import { Check, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { getRessource } from "@/lib/lead-magnets/ressources";
import { FORMAT_LIBELLES } from "@/lib/lead-magnets/types";
import { Reveal } from "@/components/motion/reveal";
import { Conteneur } from "./pole-ui";
import LeadMagnetForm from "./LeadMagnetForm";

export interface LeadMagnetProps {
  /** Slug de la ressource (src/lib/lead-magnets/ressources). */
  slug: string;
  /** Page qui propose la ressource (chemin), pour le suivi. */
  page: string;
  /** Ancre de la section (par défaut « ressource »). */
  id?: string;
  /** Libellé du bouton, ex. « Recevoir la checklist » (par défaut d'après le format). */
  boutonLabel?: string;
  /** Fond de la section : blanc par défaut, gris pour alterner. */
  fond?: "blanc" | "gris";
  className?: string;
}

/**
 * Section « lead magnet » posée juste après le hero d'une page de service :
 * à gauche la ressource (format, titre, accroche, ce que l'on reçoit), à
 * droite une carte avec l'aperçu de la couverture du PDF et le formulaire
 * (prénom facultatif, email, consentement). Le contenu vient d'une seule
 * source, src/lib/lead-magnets : la page, le PDF et l'email restent alignés.
 * Composant serveur, hors le formulaire.
 */
export default function LeadMagnet({ slug, page, id = "ressource", boutonLabel, fond = "blanc", className }: LeadMagnetProps) {
  const r = getRessource(slug);
  if (!r) {
    if (process.env.NODE_ENV !== "production") throw new Error(`Ressource inconnue : ${slug}`);
    return null;
  }
  const format = FORMAT_LIBELLES[r.format];
  const label = boutonLabel ?? `Recevoir ${articleFormat(r.format)} par email`;

  return (
    <section id={id} className={cn("scroll-mt-24 py-14 sm:py-20", fond === "gris" ? "bg-muted/30" : "bg-background", className)}>
      <Conteneur>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-texte">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              {format} gratuite · PDF
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">{r.titre}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{r.accroche}</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary-texte">Ce que vous recevez</p>
            <ul className="mt-3 space-y-2">
              {r.apercu.map((p) => (
                <li key={p} className="flex items-start gap-3 text-foreground">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary-texte" aria-hidden="true">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:grid-cols-5 sm:p-8">
              <ApercuCouverture titre={r.titre} format={format} nbSections={r.sections.length} className="sm:col-span-2" />
              <div className="sm:col-span-3">
                <p className="text-lg font-semibold text-foreground">Recevez-la maintenant</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {r.sections.length} parties, à lire en quinze minutes, à garder sous la main.
                </p>
                <LeadMagnetForm ressource={r.slug} page={page} boutonLabel={label} className="mt-4" />
              </div>
            </div>
          </Reveal>
        </div>
      </Conteneur>
    </section>
  );
}

function articleFormat(format: keyof typeof FORMAT_LIBELLES): string {
  switch (format) {
    case "checklist":
      return "la checklist";
    case "guide":
      return "le guide";
    case "modele":
      return "le modèle";
    case "plan":
      return "le plan d'action";
  }
}

/**
 * Couverture du PDF en CSS : une page inclinée sur une seconde page, badge,
 * titre, lignes grises. Décorative (aria-hidden), générée depuis les données.
 */
function ApercuCouverture({ titre, format, nbSections, className }: { titre: string; format: string; nbSections: number; className?: string }) {
  return (
    <div className={cn("relative mx-auto aspect-[3/4] w-40 sm:w-full", className)} aria-hidden="true">
      <div className="absolute inset-0 translate-x-2 translate-y-2 rotate-3 rounded-lg border border-border bg-muted" />
      <div className="absolute inset-0 -rotate-2 rounded-lg border border-border bg-white p-4 shadow-[0_20px_40px_-24px_hsl(270_70%_45%_/_0.45)]">
        <span className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
          {format}
        </span>
        <p className="mt-3 line-clamp-4 text-[13px] font-bold leading-snug text-foreground">{titre}</p>
        <div className="mt-3 space-y-1.5">
          {Array.from({ length: Math.min(4, Math.max(2, nbSections)) }).map((_, i) => (
            <span key={i} className="block h-1.5 rounded-full bg-muted" style={{ width: `${88 - i * 14}%` }} />
          ))}
        </div>
        <span className="absolute bottom-3 left-4 text-[9px] font-semibold text-muted-foreground">ConvertiLab</span>
      </div>
    </div>
  );
}
