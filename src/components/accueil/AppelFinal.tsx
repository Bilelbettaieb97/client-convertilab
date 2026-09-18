import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, MessageSquareText, Phone, type LucideIcon } from "lucide-react";
import { SITE } from "@/lib/constants";
import { LABEL_CALENDLY } from "@/data/poles";
import { BoutonLien, Conteneur, Surtitre } from "@/components/pole/pole-ui";
import { Reveal } from "@/components/motion/reveal";
import { HeroMesh } from "@/components/motion/hero-mesh";

/**
 * Dernier appel de l'accueil : trois portes (rendez-vous, formulaire, appel),
 * chacune en carte, avec la photo du fondateur pour rappeler qui répond. Aucun
 * chiffre, aucune rareté ; le seul dégradé fort de l'écran est le bouton
 * principal. Le mesh de fond est le même que celui du hero, en plus léger :
 * la page se referme sur la note sur laquelle elle s'est ouverte.
 */
const PORTES: { icon: LucideIcon; titre: string; texte: string; href: string; label: string; external?: boolean }[] = [
  {
    icon: CalendarCheck,
    titre: "Réserver 30 minutes",
    texte: "Un créneau à votre convenance, en visio ou par téléphone. Vous repartez avec des réponses claires, que nous travaillions ensemble ensuite ou non.",
    href: SITE.calendly,
    label: LABEL_CALENDLY,
    external: true,
  },
  {
    icon: MessageSquareText,
    titre: "Décrire votre projet",
    texte: "Deux étapes, deux minutes, aucune coordonnée à la première. Une première recommandation et un prix sous 24 h.",
    href: "#formulaire",
    label: "Décrire mon projet",
  },
  {
    icon: Phone,
    titre: "Appeler directement",
    texte: "Du lundi au vendredi. Si nous sommes en rendez-vous, nous vous rappelons dans la journée.",
    href: `tel:${SITE.phone}`,
    label: SITE.phoneDisplay,
  },
];

const REASSURANCE = ["Réponse sous 24 h", "Sans engagement", "Vous parlez au fondateur", "Prix fixe écrit avant de commencer"];

export default function AppelFinal() {
  return (
    <section id="rendez-vous" className="relative isolate overflow-hidden bg-background py-16 sm:py-24">
      <HeroMesh intensite={0.6} />
      <Conteneur>
        <div className="mx-auto max-w-3xl text-center">
          <Surtitre>Parlons de votre projet</Surtitre>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Un projet, une question ? Trois façons de nous joindre, une seule personne au bout
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Choisissez la porte qui vous convient. Dans les trois cas, c&apos;est le fondateur qui vous répond, pas un
            commercial.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {PORTES.map((p, i) => {
            const Icon = p.icon;
            const principal = i === 0;
            const contenu = (
              <>
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-texte transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="mt-5 text-lg font-semibold text-foreground">{p.titre}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.texte}</span>
                <span className="mt-6">
                  {principal ? (
                    <BoutonLien href={p.href} label={p.label} external variante="primaire" className="w-full sm:w-auto" />
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-semibold text-primary-texte">
                      {p.label}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </span>
                  )}
                </span>
              </>
            );
            const classes =
              "group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_hsl(270_70%_45%_/_0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0";
            return (
              <li key={p.titre} className="h-full">
                <Reveal delay={i * 0.08} className="h-full">
                  {principal ? (
                    <div className={classes}>{contenu}</div>
                  ) : p.href.startsWith("#") || p.href.startsWith("tel:") ? (
                    <a href={p.href} className={classes}>
                      {contenu}
                    </a>
                  ) : (
                    <Link href={p.href} className={classes}>
                      {contenu}
                    </Link>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* Réassurance + rappel de qui répond (photo sans nom : le nom n'apparaît qu'une fois sur la page) */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-border bg-white/70 px-5 py-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/fondateur-carre.webp"
              alt="Le fondateur de ConvertiLab"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border border-border object-cover"
            />
            <p className="text-sm text-foreground">
              <span className="font-semibold">Le fondateur vous répond lui-même.</span>{" "}
              <span className="text-muted-foreground">Agence installée à Rueil-Malmaison (92).</span>
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            {REASSURANCE.map((r) => (
              <li key={r} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </Conteneur>
    </section>
  );
}
