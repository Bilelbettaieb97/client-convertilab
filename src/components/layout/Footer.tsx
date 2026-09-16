"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight, ArrowUp } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { POLES } from "@/data/poles";
import { cn } from "@/lib/utils";
import { FILET_LIEN_TEXTE } from "@/components/motion/ff/c-soulignement-centre";

/** Liens de listes : changement de couleur + soulignement fin, décalé, à 40 % de blanc. */
const LIEN_LISTE =
  "text-sm text-gray-400 hover:text-purple-400 transition-colors hover:underline decoration-1 underline-offset-4 decoration-white/40";

/** Trait vertical entre les liens de la barre du bas (remplace les « • »). */
const Separateur = () => <span aria-hidden="true" className="h-3 w-px bg-white/15" />;

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error">("idle");

  /**
   * Pied de page par pôle : quatre colonnes (source unique : src/data/poles.ts),
   * ancres descriptives, sous-pages et outil gratuit de chaque pôle.
   */
  const colonnesPoles = POLES.map((pole) => ({
    numero: pole.numero,
    titre: pole.nomCourt,
    href: pole.href,
    ancre: pole.ancre,
    liens: [...pole.sousPages, ...pole.outils],
  }));

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "Tous nos services", href: "/services" },
    { name: "Portfolio et études de cas", href: "/portfolio" },
    { name: "À propos du fondateur", href: "/a-propos" },
    { name: "Blog marketing digital", href: "/blog" },
    { name: "Contact et devis", href: "/contact" },
    { name: "Maquette gratuite en 48 h", href: "/demande-maquette" },
    { name: "Site en paiement étalé", href: "/offre-mensuelle" },
    { name: "Nos tarifs", href: "/prix" },
    { name: "Questions fréquentes", href: "/faq" },
    { name: "Glossaire marketing", href: "/glossaire" },
  ];

  const zonesLinks = [
    { name: "Agence web à Rueil-Malmaison", href: "/agence-web/rueil-malmaison" },
    { name: "Agence web à Paris", href: "/agence-web/paris" },
    { name: "Agence web à La Défense et Puteaux", href: "/agence-web/la-defense-puteaux" },
    { name: "Agence web par ville", href: "/agence-web" },
    { name: "Solutions par secteur", href: "/solutions" },
  ];

  const autresServices = [
    { name: "Social media et community management", href: "/services/social-media" },
    { name: "Design UI/UX et identité visuelle", href: "/services/design" },
  ];

  const toolsLinks = [
    { name: "Audit SEO gratuit", href: "/seo-check" },
    { name: "Test de vitesse", href: "/speed-check" },
    { name: "Score design et UX", href: "/design-score" },
    { name: "Estimateur de budget Ads", href: "/estimateur-ads" },
    { name: "Estimation du prix d'un site", href: "/estimation-prix-site-web" },
    { name: "Générateur de mentions légales", href: "/generateur-mentions-legales" },
    { name: "Générateur robots.txt et sitemap", href: "/generateur-robots-sitemap" },
    { name: "Rapport sectoriel", href: "/rapport-sectoriel" },
    { name: "Comparateur de sites", href: "/comparateur-sites" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: SITE.social.linkedin, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { name: "Facebook", href: SITE.social.facebook, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
    { name: "Instagram", href: SITE.social.instagram, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
    { name: "YouTube", href: SITE.social.youtube, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
    { name: "TikTok", href: SITE.social.tiktok, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg> },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail.trim() || !emailRegex.test(newsletterEmail)) return;

    setIsSubmitting(true);
    try {
      const trimmedEmail = newsletterEmail.trim().toLowerCase();
      // Import à la demande : supabase-js (~55 Ko gz) ne pèse pas sur le chargement initial de chaque page,
      // il n'est requis qu'à la soumission de la newsletter (même règle que ContactForm et ChatWidget).
      const { supabase } = await import("@/lib/supabase/client");
      const { error } = await supabase.from("newsletter_subscriptions").insert([{ email: trimmedEmail }]);
      if (error && error.code === "23505") {
        setNewsletterStatus("success");
      } else if (error) {
        setNewsletterStatus("error");
      } else {
        setNewsletterStatus("success");
      }
      setNewsletterEmail("");
    } catch {
      setNewsletterStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="pied-de-page" className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      {/* Newsletter Banner */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Conseils marketing digital gratuits</h3>
              <p className="text-gray-400 text-sm">Nos conseils sur les sites internet, la publicité, le SEO et le CRM, sans jargon</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full sm:w-auto gap-3">
              <input
                type="email"
                placeholder="Votre email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={isSubmitting}
                className="flex-1 sm:w-72 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all disabled:opacity-50 text-sm"
              />
              <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 font-semibold whitespace-nowrap disabled:opacity-50">
                {isSubmitting ? "..." : "S'abonner"}
              </Button>
            </form>
          </div>
          {newsletterStatus === "success" && (
            <p className="text-green-400 text-sm mt-3 text-center lg:text-left">Inscription confirmée !</p>
          )}
          {newsletterStatus === "error" && (
            <p className="text-red-400 text-sm mt-3 text-center lg:text-left">Une erreur est survenue. Réessayez.</p>
          )}
        </div>
      </div>

      {/* Pied de page principal : les quatre pôles, puis l'agence */}
      {/* Mobile et tablette : contact et marque d'abord (order), pôles en deux colonnes ; desktop : pôles puis marque, quatre colonnes. */}
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 py-12 sm:py-16 flex flex-col">
        <nav aria-label="Nos quatre pôles" className="order-2 mt-12 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:order-none lg:mt-0 lg:pt-0 lg:border-t-0">
          {colonnesPoles.map((pole) => (
            <div key={pole.href}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                <span className="text-purple-400 mr-2">{pole.numero}</span>
                <Link href={pole.href} className="hover:text-purple-400 transition-colors" title={pole.ancre}>
                  {pole.titre}
                </Link>
              </h4>
              <ul className="space-y-2.5">
                {pole.liens.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={LIEN_LISTE}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={pole.href} className="group inline-flex items-center gap-1 text-sm font-medium text-purple-300 hover:text-purple-200 transition-colors">
                    {pole.ancre} <ArrowRight className="w-3 h-3 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </nav>

        <div className="order-1 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:order-none lg:mt-12 lg:pt-12 lg:border-t lg:border-white/10">
          {/* Marque et contact : pleine largeur sur mobile, en tête du pied de page. */}
          <div className="space-y-5 col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">
                <span className="text-white">Converti</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Lab</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Agence marketing digital à Rueil-Malmaison (92). Création de sites internet, publicité en ligne, SEO, CRM et relances automatiques pour les entreprises de Paris, d&apos;Île-de-France et de toute la France.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600/30 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact rapide */}
            <div className="space-y-2">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 min-h-11 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" /> {SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 min-h-11 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" /> {SITE.phoneDisplay}
              </a>
              <a href={SITE.googleMaps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 min-h-11 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" /> Rueil-Malmaison (92)
              </a>
              {/* Nom accessible = texte visible (WCAG 2.5.3), précision « nouvel onglet » en sr-only. */}
              <a href={SITE.trustpilot} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-1 min-h-11 px-3 py-1.5 bg-[#00b67a]/10 border border-[#00b67a]/30 rounded-lg hover:bg-[#00b67a]/20 transition-colors">
                <svg className="w-4 h-4 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/></svg>
                <span className="text-xs font-semibold text-[#00b67a]">{SITE.reviews.rating.replace(".", ",")}/5 · {SITE.reviews.count} avis</span>
                <span className="text-xs text-gray-500">Trustpilot</span>
                <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">L&apos;agence</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={LIEN_LISTE}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones et autres services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Où nous intervenons</h4>
            <ul className="space-y-2.5">
              {zonesLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={LIEN_LISTE}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mt-8 mb-4">Autres services</h4>
            <ul className="space-y-2.5">
              {autresServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={LIEN_LISTE}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Outils gratuits */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Outils gratuits</h4>
            <ul className="space-y-2.5">
              {toolsLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={LIEN_LISTE}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <Button asChild size="sm" className="w-full min-h-11 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-xs">
                <Link href="/contact">
                  Demander un devis gratuit <ArrowRight className="ml-1 w-3 h-3" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              &copy; {new Date().getFullYear()} ConvertiLab, agence marketing digital à Rueil-Malmaison (92), Paris et Île-de-France
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-500">
              {/* Retour en haut : un lien (pas de bouton fixe, la barre collante et la bulle
                  occupent déjà le bas). « #top » sans id = haut du document (HTML), défilement
                  doux via scroll-behavior. Filet 1 px qui se dessine sous le texte ; `after:bottom-3`
                  ajuste le filet au text-xs dans la cible de 44 px. */}
              <a
                href="#top"
                className={cn(
                  "group inline-flex min-h-11 items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors",
                  FILET_LIEN_TEXTE,
                  "after:bottom-3"
                )}
              >
                <ArrowUp
                  className="h-3.5 w-3.5 -rotate-12 transition-transform duration-300 group-hover:rotate-0 group-hover:-translate-y-px motion-reduce:transition-none"
                  aria-hidden="true"
                />
                Retour en haut
              </a>
              <Separateur />
              <Link href="/mentions-legales" className="hover:text-purple-400 transition-colors">
                Mentions légales
              </Link>
              <Separateur />
              <Link href="/politique-de-confidentialite" className="hover:text-purple-400 transition-colors">
                Confidentialité
              </Link>
              <Separateur />
              <Link href="/politique-de-cookies" className="hover:text-purple-400 transition-colors">
                Cookies
              </Link>
              <Separateur />
              <Link href="/glossaire" className="hover:text-purple-400 transition-colors">
                Glossaire
              </Link>
              <Separateur />
              <Link href="/sitemap.xml" className="hover:text-purple-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
