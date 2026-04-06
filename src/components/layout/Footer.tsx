"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, ArrowRight, BarChart3 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { SITE } from "@/lib/constants";

const Footer = () => {
  const router = useRouter();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error">("idle");

  const services = [
    { name: "Création de Sites Web", href: "/services/sites-web" },
    { name: "Site Vitrine", href: "/services/sites-web/site-vitrine" },
    { name: "Site E-commerce", href: "/services/sites-web/site-ecommerce" },
    { name: "Landing Page", href: "/services/sites-web/landing-page" },
    { name: "SEO & Référencement", href: "/services/seo" },
    { name: "Google Ads", href: "/services/sea/google-ads" },
    { name: "Meta Ads", href: "/services/sea/meta-ads" },
    { name: "Social Media", href: "/services/social-media" },
    { name: "Design UI/UX", href: "/services/design/ui-ux" },
  ];

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "À propos", href: "/a-propos" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Offre Spéciale", href: "/offre-speciale" },
    { name: "Offre Mensuelle", href: "/offre-mensuelle" },
  ];

  const resources = [
    { name: "Agence Web par ville", href: "/agence-web" },
    { name: "Solutions par secteur", href: "/solutions" },
    { name: "Glossaire Marketing", href: "/glossaire" },
    { name: "Demande de maquette", href: "/demande-maquette" },
    { name: "Estimation de prix", href: "/estimation-prix-site-web" },
    { name: "Politique de confidentialité", href: "/politique-de-confidentialite" },
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
      const { error } = await supabase.from("newsletter_subscriptions").insert([{ email: trimmedEmail }]);
      if (error && (error as any).code === "23505") {
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
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      {/* Newsletter Banner */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Conseils marketing digital gratuits</h3>
              <p className="text-gray-400 text-sm">Recevez nos meilleures stratégies SEO, Ads et social media</p>
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

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1 space-y-5">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">
                <span className="text-white">Converti</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Lab</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Agence de marketing digital à Rueil-Malmaison. Création de sites web, SEO et publicité en ligne.
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
                  className="p-2.5 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600/30 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact rapide */}
            <div className="space-y-2">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" /> {SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" /> {SITE.phoneDisplay}
              </a>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" /> Rueil-Malmaison (92)
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Ressources</h4>
            <ul className="space-y-2.5">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <Button asChild size="sm" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-xs">
                <Link href="/contact">
                  Devis gratuit <ArrowRight className="ml-1 w-3 h-3" />
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
              &copy; {new Date().getFullYear()} ConvertiLab — Agence marketing digital Paris & Île-de-France
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link href="/politique-de-confidentialite" className="hover:text-purple-400 transition-colors">
                Confidentialité
              </Link>
              <span>•</span>
              <Link href="/glossaire" className="hover:text-purple-400 transition-colors">
                Glossaire
              </Link>
              <span>•</span>
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
