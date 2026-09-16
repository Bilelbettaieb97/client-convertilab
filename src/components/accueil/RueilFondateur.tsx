import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeEuro, Layers, UserRound, type LucideIcon } from "lucide-react";
import { SectionSombre } from "@/components/pole";
import { CardBody, CardContainer, CardItem } from "@/components/motion/3d-card";
import { Reveal } from "@/components/motion/reveal";
import { Grain } from "@/components/motion/ff/b-grain";
import { PastillePulsee } from "@/components/motion/ff/b-pastille-pulsee";
import { BoutonCercle } from "@/components/motion/ff/b-bouton-cercle";

/** Seule occurrence du prénom sur l'accueil : la légende sous la photo. */
const LIGNE_NOM = "Bilel Bettaieb, fondateur";

const TEXTE = [
  "J'ai créé ConvertiLab pour les artisans, commerçants et indépendants qui n'ont pas le temps de gérer une agence. Je fais moi-même le diagnostic, le devis, la réalisation et le suivi, depuis Rueil-Malmaison.",
  "Je teste chaque méthode sur ma propre entreprise : mes relances, ma facturation, mon outil d'avis MerciAvis et mes campagnes tournent avec les outils que je vous installe.",
];

const ARGUMENTS: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: UserRound,
    titre: "Un seul interlocuteur",
    texte: "La personne qui vous répond au téléphone est celle qui réalise votre site, vos campagnes ou votre CRM.",
  },
  {
    icon: Layers,
    titre: "Les quatre leviers au même endroit",
    texte: "Site, publicité, SEO et CRM pensés ensemble : votre campagne mène à un site rapide, votre site nourrit votre fiche Google, chaque demande est relancée.",
  },
  {
    icon: BadgeEuro,
    titre: "Un prix fixe, écrit avant de commencer",
    texte: "Le devis indique le prix et le délai. Le paiement peut être étalé, pas d'abonnement.",
  },
];

/** Pages ville reliées depuis l'accueil : maillage vers les zones d'intervention. */
const ZONES = [
  { href: "/agence-web/rueil-malmaison", label: "Rueil-Malmaison (92)" },
  { href: "/agence-web/paris", label: "Paris" },
  { href: "/agence-web/la-defense-puteaux", label: "La Défense et Puteaux" },
];

/**
 * « Pourquoi Rueil-Malmaison » et « Le fondateur » réunis en une seule
 * section sombre : la photo du fondateur en perspective légère (3d-card,
 * statique au toucher et avec animations réduites), le texte en « je » sans
 * prénom, les trois arguments et les zones d'intervention. Le nom n'apparaît
 * qu'une fois, sous la photo. Un grain statique (seul grain de la page) texture
 * le fond sombre ; la pastille pulsée devant les zones est le seul mouvement
 * permanent de cet écran.
 */
export default function RueilFondateur() {
  return (
    <SectionSombre
      id="fondateur"
      surtitre="Rueil-Malmaison (92), Paris, Île-de-France"
      titre="Une agence marketing digital à Rueil-Malmaison, et un fondateur qui fait le travail"
      intro="Nous sommes installés à Rueil-Malmaison, dans les Hauts-de-Seine, près de La Défense. Nous intervenons à Paris et en Île-de-France, sur place ou en visio, et nous travaillons à distance avec des clients partout en France."
    >
      {/* Grain statique : -z-10 sous le contenu, au-dessus du halo violet (SectionSombre est relative isolate). */}
      <Grain />
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Photo en perspective, nom en légende */}
        <div className="lg:col-span-5">
          <CardContainer intensite={45} containerClassName="w-full">
            <CardBody className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <figure className="mx-auto">
                <CardItem translateZ={40} className="w-full">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
                    <Image
                      src="/images/fondateur.webp"
                      alt="Le fondateur de ConvertiLab, dans son studio à Rueil-Malmaison"
                      width={840}
                      height={1040}
                      sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 80vw"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </CardItem>
                <CardItem translateZ={60} as="figcaption" className="mx-auto mt-4 w-fit">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/85 px-4 py-2 text-sm font-medium text-slate-100">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" aria-hidden="true" />
                    {LIGNE_NOM}
                  </span>
                </CardItem>
              </figure>
            </CardBody>
          </CardContainer>
        </div>

        {/* Texte, arguments, zones */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="space-y-4 text-lg leading-relaxed text-slate-200">
              {TEXTE.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {ARGUMENTS.map((a, i) => {
              const Icon = a.icon;
              return (
                <li key={a.titre}>
                  <Reveal delay={0.1 + i * 0.08}>
                    <div className="relative flex gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent hover:border-purple-400/40 hover:bg-white/[0.07] motion-reduce:transition-none">
                      <span
                        className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/15 text-purple-200"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <h3 className="font-semibold text-white">{a.titre}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-300">{a.texte}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-col gap-6">
            <nav aria-label="Zones d'intervention">
              <p className="inline-flex items-center gap-2.5 text-sm text-slate-400">
                <PastillePulsee />
                Nos zones d&apos;intervention
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {ZONES.map((z) => (
                  <li key={z.href}>
                    <Link
                      href={z.href}
                      className="group inline-flex min-h-11 items-center gap-1.5 rounded-full border border-white/15 px-4 text-sm font-medium text-slate-100 transition-colors duration-300 hover:border-purple-300/60 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
                    >
                      {z.label}
                      <ArrowRight
                        className="h-3.5 w-3.5 text-purple-300 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <BoutonCercle
              href="/a-propos"
              label="Découvrir l'agence et son fondateur"
              tonalite="sombre"
              className="self-start"
            />
          </div>
        </div>
      </div>
    </SectionSombre>
  );
}
