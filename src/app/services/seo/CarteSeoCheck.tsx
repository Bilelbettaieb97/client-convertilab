import SeoCheckForm from "@/components/seo-check/SeoCheckForm";

/**
 * L'audit SEO réel d'une URL (SeoCheckForm, conçu sur fond sombre) posé dans
 * une SectionOutil « large » d'une page du pôle SEO : la carte reprend l'écrin
 * de /seo-check pour que le formulaire reste lisible sur une page claire.
 * Composant serveur ; le formulaire est client.
 */
export default function CarteSeoCheck() {
  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a1a] p-6 shadow-[0_24px_48px_-24px_rgba(15,23,42,0.45)] sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,92,231,0.18),transparent_60%)]" aria-hidden="true" />
      <div className="relative">
        <SeoCheckForm />
      </div>
    </div>
  );
}
