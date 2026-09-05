"use client";

/**
 * Avis clients, à l'identité visuelle Trustpilot.
 *
 * Les témoignages sont ceux des études de cas : des clients réels, nommés, dont
 * le site est consultable. La section qu'elle remplace en montrait neuf inventés
 * (« Marie Dubois », « Thomas Laurent »…), ce qui n'a rien à faire sur un site
 * commercial.
 *
 * Hiérarchie assumée : le meilleur avis occupe une carte double, les suivants
 * une grille compacte. Le classement suit FEATURED_ORDER (l'ordre de mise en
 * avant déjà défini dans case-studies), puis les clients dont le site est en
 * ligne — un avis qu'on peut vérifier en un clic vaut plus qu'un avis isolé.
 *
 * ⚠️ Aucune note chiffrée : le site annonce 4,9/5 alors que Trustpilot affiche
 * 4,4/5 sur 12 avis (relevé le 05/09/2026). Tant que les deux divergent, on ne
 * répète pas le chiffre ici, sous peine de l'afficher deux fois différemment sur
 * la même page. Le mot « Excellent » est en revanche celui que Trustpilot
 * attribue lui-même à cette note.
 *
 * Pour basculer sur les vrais avis Trustpilot, renseigner
 * `trustpilotBusinessUnitId: "67495e05214c57486a2ded18"` dans constants.ts :
 * le composant charge alors le widget officiel.
 */

import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { caseStudies, LIVE_SITES, FEATURED_ORDER } from "@/data/case-studies";
import { SITE } from "@/lib/constants";

const VERT = "#00B67A";

/** Étoile Trustpilot : carré vert plein, étoile blanche évidée. */
function Etoile({ taille = 20 }: { taille?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[2px]"
      style={{ width: taille, height: taille, background: VERT }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" width={taille * 0.78} height={taille * 0.78} fill="#fff">
        <path d="M12 2.6l2.6 6.3 6.8.5-5.2 4.4 1.6 6.6L12 16.9 6.2 20.4l1.6-6.6L2.6 9.4l6.8-.5L12 2.6z" />
      </svg>
    </span>
  );
}

function Etoiles({ taille = 18 }: { taille?: number }) {
  return (
    <div className="flex gap-[3px]" role="img" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Etoile key={i} taille={taille} />
      ))}
    </div>
  );
}

/** Widget officiel, utilisé dès qu'un identifiant est renseigné. */
function TrustBox({ businessUnitId }: { businessUnitId: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const id = "trustpilot-widget-script";
    const monter = () => {
      const w = (window as unknown as {
        Trustpilot?: { loadFromElement: (el: HTMLElement, b: boolean) => void };
      }).Trustpilot;
      if (w && ref.current) w.loadFromElement(ref.current, true);
    };
    if (document.getElementById(id)) return monter();
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    s.async = true;
    s.onload = monter;
    document.head.appendChild(s);
  }, []);
  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale="fr-FR"
      data-template-id="53aa8912dec7e10d38f59f36"
      data-businessunit-id={businessUnitId}
      data-style-height="140px"
      data-style-width="100%"
      data-theme="dark"
    >
      <a href={SITE.trustpilot} target="_blank" rel="noopener noreferrer">
        Voir nos avis sur Trustpilot
      </a>
    </div>
  );
}

type Avis = {
  texte: string;
  auteur: string;
  client: string;
  secteur: string;
  lien?: string;
};

function CarteAvis({
  avis,
  vedette = false,
  index,
}: {
  avis: Avis;
  vedette?: boolean;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: Math.min(index, 6) * 0.06 }}
      className={[
        "group relative flex flex-col rounded-xl bg-white",
        vedette ? "p-7 sm:p-9 sm:col-span-2 sm:row-span-2" : "p-6",
      ].join(" ")}
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,.16), 0 14px 34px -18px rgba(0,0,0,.5)" }}
    >
      {/* Filet vert en tête : rappelle Trustpilot sans surcharger la carte */}
      <span
        className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl"
        style={{ background: VERT }}
        aria-hidden="true"
      />

      <div className="flex items-center justify-between gap-3">
        <Etoiles taille={vedette ? 22 : 17} />
        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          {avis.secteur}
        </span>
      </div>

      <p
        className={[
          "mt-5 flex-1 text-[#191919]",
          vedette
            ? "text-lg sm:text-[22px] leading-[1.5] font-medium"
            : "text-[15px] leading-relaxed",
        ].join(" ")}
      >
        {avis.texte}
      </p>

      <footer className="mt-6 flex items-end justify-between gap-4 border-t border-gray-100 pt-4">
        <div className="min-w-0">
          <div
            className={[
              "font-bold text-[#191919] truncate",
              vedette ? "text-base" : "text-sm",
            ].join(" ")}
          >
            {avis.auteur}
          </div>
          {avis.client !== avis.auteur && (
            <div className="truncate text-xs text-gray-500">{avis.client}</div>
          )}
        </div>

        {avis.lien && (
          <a
            href={avis.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center gap-1.5 text-xs font-semibold text-gray-500 transition-colors hover:text-[#191919]"
          >
            Voir le site
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </footer>
    </motion.article>
  );
}

export default function TestimonialsTrustpilot() {
  const businessUnitId = (SITE as { trustpilotBusinessUnitId?: string })
    .trustpilotBusinessUnitId;

  const avis = useMemo<Avis[]>(() => {
    const liste = caseStudies
      .filter((c) => c.testimonial && c.testimonial.trim().length > 0)
      .map((c) => ({
        texte: c.testimonial.trim(),
        auteur: (c.author || c.client).trim(),
        client: c.client.trim(),
        secteur: c.sector,
        lien: LIVE_SITES[c.slug],
        rang: FEATURED_ORDER.indexOf(c.slug),
      }));

    // Meilleurs d'abord : ordre de mise en avant, puis site consultable,
    // puis le témoignage le plus substantiel.
    return liste
      .sort((a, b) => {
        const ra = a.rang === -1 ? 99 : a.rang;
        const rb = b.rang === -1 ? 99 : b.rang;
        if (ra !== rb) return ra - rb;
        if (!!a.lien !== !!b.lien) return a.lien ? -1 : 1;
        return b.texte.length - a.texte.length;
      })
      .map(({ rang: _rang, ...reste }) => reste);
  }, []);

  const [vedette, ...suivants] = avis;

  return (
    <section className="relative overflow-hidden bg-[#101820] py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{ background: `radial-gradient(55% 45% at 50% 0%, ${VERT} 0%, transparent 72%)` }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center text-center sm:mb-16"
        >
          <a
            href={SITE.trustpilot}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 transition-colors hover:bg-white/[0.08]"
          >
            <Etoile taille={22} />
            <span className="text-[15px] font-bold tracking-tight text-white">Trustpilot</span>
            <span className="h-4 w-px bg-white/15" aria-hidden="true" />
            <span className="text-[13px] font-semibold" style={{ color: VERT }}>
              Excellent
            </span>
          </a>

          <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ce que nos clients <span style={{ color: VERT }}>disent vraiment</span>
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Artisans, commerçants, associations et indépendants. Chaque avis
            ci-dessous vient d&apos;un client dont vous pouvez ouvrir le site.
          </p>
        </motion.div>

        {businessUnitId ? (
          <div className="mx-auto max-w-3xl">
            <TrustBox businessUnitId={businessUnitId} />
          </div>
        ) : (
          <div className="grid auto-rows-min gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* 8 cartes simples, pas 6 : la vedette occupe 2 colonnes sur 2
                rangées d'une grille de 4, il en reste donc 2 par rangée à ses
                côtés puis 4 en dessous. À 6, la dernière rangée restait trouée. */}
            {vedette && <CarteAvis avis={vedette} vedette index={0} />}
            {suivants.slice(0, 8).map((a, i) => (
              <CarteAvis key={`${a.client}-${i}`} avis={a} index={i + 1} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href={SITE.trustpilot}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg px-7 py-3.5 text-[15px] font-semibold text-[#191919] transition-transform hover:-translate-y-0.5"
            style={{ background: VERT }}
          >
            <Etoile taille={18} />
            Lire tous les avis sur Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
}
