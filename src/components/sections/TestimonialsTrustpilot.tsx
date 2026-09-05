"use client";

/**
 * Avis clients, présentés à l'identité visuelle Trustpilot.
 *
 * Les témoignages affichés sont ceux des études de cas : des clients réels,
 * nommés, dont le site est en ligne. La section qu'elle remplace en montrait
 * neuf inventés (« Marie Dubois », « Thomas Laurent »…), ce qui n'a rien à faire
 * sur un site commercial.
 *
 * ⚠️ Aucune note chiffrée n'est affichée ici. Le site annonce ailleurs 4,9/5,
 * un chiffre invérifiable automatiquement (Trustpilot bloque la lecture
 * robotisée) et démenti par le dernier relevé manuel. Tant qu'il n'est pas
 * confirmé, on montre les avis sans les résumer par une note.
 *
 * Pour afficher les avis directement depuis Trustpilot, il faut le widget
 * officiel : renseigner `SITE.trustpilotBusinessUnitId` (Trustpilot → Intégrations
 * → TrustBox) et le composant bascule automatiquement dessus.
 */

import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { caseStudies } from "@/data/case-studies";
import { SITE } from "@/lib/constants";

const VERT_TRUSTPILOT = "#00B67A";

/** Étoile Trustpilot : carré vert plein, étoile blanche évidée. */
function EtoileTrustpilot({ taille = 22 }: { taille?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[2px]"
      style={{ width: taille, height: taille, background: VERT_TRUSTPILOT }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" width={taille * 0.78} height={taille * 0.78} fill="#fff">
        <path d="M12 2.6l2.6 6.3 6.8.5-5.2 4.4 1.6 6.6L12 16.9 6.2 20.4l1.6-6.6L2.6 9.4l6.8-.5L12 2.6z" />
      </svg>
    </span>
  );
}

function Etoiles({ nombre = 5, taille = 20 }: { nombre?: number; taille?: number }) {
  return (
    <div className="flex gap-[3px]" role="img" aria-label={`${nombre} étoiles sur 5`}>
      {Array.from({ length: nombre }).map((_, i) => (
        <EtoileTrustpilot key={i} taille={taille} />
      ))}
    </div>
  );
}

/** Widget officiel Trustpilot, utilisé dès qu'un identifiant est renseigné. */
function TrustBox({ businessUnitId }: { businessUnitId: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = "trustpilot-widget-script";
    const monter = () => {
      const w = (window as unknown as { Trustpilot?: { loadFromElement: (el: HTMLElement, b: boolean) => void } }).Trustpilot;
      if (w && ref.current) w.loadFromElement(ref.current, true);
    };
    if (document.getElementById(id)) return monter();
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    script.onload = monter;
    document.head.appendChild(script);
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

type Avis = { texte: string; auteur: string; entreprise: string };

export default function TestimonialsTrustpilot() {
  const businessUnitId = (SITE as { trustpilotBusinessUnitId?: string }).trustpilotBusinessUnitId;

  // Uniquement les études de cas qui portent un témoignage réel.
  const avis = useMemo<Avis[]>(
    () =>
      caseStudies
        .filter((c) => c.testimonial && c.testimonial.trim().length > 0)
        .map((c) => ({
          texte: c.testimonial.trim(),
          auteur: (c.author || c.client).trim(),
          entreprise: c.client.trim(),
        })),
    []
  );

  return (
    <section className="relative bg-[#101820] py-20 sm:py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ background: `radial-gradient(60% 50% at 50% 0%, ${VERT_TRUSTPILOT} 0%, transparent 70%)` }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <EtoileTrustpilot taille={26} />
            <span className="text-white text-xl font-bold tracking-tight">Trustpilot</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Ce que nos clients{" "}
            <span style={{ color: VERT_TRUSTPILOT }}>disent vraiment</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Artisans, commerçants, associations et indépendants nous ont confié leur
            site. Chaque avis ci-dessous vient d&apos;un client dont le site est en
            ligne aujourd&apos;hui.
          </p>
        </motion.div>

        {businessUnitId ? (
          <div className="max-w-3xl mx-auto">
            <TrustBox businessUnitId={businessUnitId} />
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {avis.slice(0, 9).map((a, i) => (
              <motion.article
                key={`${a.entreprise}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.05 }}
                className="flex flex-col rounded-lg bg-white p-6 shadow-lg"
              >
                <Etoiles taille={19} />
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#191919]">
                  {a.texte}
                </p>
                <footer className="mt-5 border-t border-gray-200 pt-4">
                  <div className="text-sm font-bold text-[#191919]">{a.auteur}</div>
                  {a.entreprise !== a.auteur && (
                    <div className="text-xs text-gray-500">{a.entreprise}</div>
                  )}
                </footer>
              </motion.article>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href={SITE.trustpilot}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg px-7 py-3.5 text-[15px] font-semibold text-[#191919] transition-transform hover:-translate-y-0.5"
            style={{ background: VERT_TRUSTPILOT }}
          >
            <EtoileTrustpilot taille={18} />
            Lire tous les avis sur Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
}
