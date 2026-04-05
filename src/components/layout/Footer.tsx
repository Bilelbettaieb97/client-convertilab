"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Code, Smartphone, ShoppingCart, Star, ArrowRight, Target, Search, Share2, BarChart3 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { SITE } from "@/lib/constants";

const Footer = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { name: "Création de Sites Web", href: "/services/sites-web" },
    { name: "Landing Page", href: "/services/sites-web/landing-page" },
    { name: "Site Vitrine", href: "/services/sites-web/site-vitrine" },
    { name: "Site E-commerce", href: "/services/sites-web/site-ecommerce" },
    { name: "SEO & Référencement", href: "/services/seo" },
    { name: "Audit SEO", href: "/services/seo/audit" },
    { name: "Google Ads", href: "/services/sea/google-ads" },
    { name: "Meta Ads (Facebook/Instagram)", href: "/services/sea/meta-ads" },
    { name: "Design UI/UX", href: "/services/design/ui-ux" },
    { name: "Identité Visuelle & Logo", href: "/services/design/identite-visuelle" }
  ];

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "Tous nos services", href: "/services" },
    { name: "Portfolio & Réalisations", href: "/portfolio" },
    { name: "À propos de ConvertiLab", href: "/a-propos" },
    { name: "Blog Marketing Digital", href: "/blog" },
    { name: "Contact & Devis Gratuit", href: "/contact" },
    { name: "Offre Spéciale", href: "/offre-speciale" }
  ];

  const sectors = [
    { name: "E-commerce & Retail", icon: ShoppingCart },
    { name: "SaaS & Tech", icon: Code },
    { name: "Services B2B", icon: Target },
    { name: "Immobilier", icon: Globe },
    { name: "Santé & Bien-être", icon: Star },
    { name: "Restauration & Hôtellerie", icon: Smartphone }
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      router.push(href);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail.trim()) {
      toast({ title: "Erreur", description: "Veuillez entrer votre email", variant: "destructive" });
      return;
    }
    if (!emailRegex.test(newsletterEmail)) {
      toast({ title: "Erreur", description: "Veuillez entrer un email valide", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('newsletter_subscriptions').insert([{ email: newsletterEmail.trim() }]);
      if (error) {
        if ((error as any).code === '23505') {
          setNewsletterEmail("");
          router.push("/newsletter-confirmation");
          return;
        }
        console.error('Newsletter submission error:', error);
        toast({ title: "Erreur", description: "Une erreur s'est produite. Veuillez réessayer.", variant: "destructive" });
      } else {
        setNewsletterEmail("");
        router.push("/newsletter-confirmation");
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      toast({ title: "Erreur", description: "Une erreur s'est produite. Veuillez réessayer.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 sm:pt-20 pb-8 sm:pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">

          {/* Brand & Description */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              ConvertiLab
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Agence de marketing digital spécialisée dans l&apos;acquisition client, le SEO, la publicité en ligne et la création de sites web performants.
            </p>

            <div className="flex space-x-3 pt-2">
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors duration-300">
                <svg className="w-5 h-5 text-purple-400 hover:text-purple-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors duration-300">
                <svg className="w-5 h-5 text-purple-400 hover:text-purple-300" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>

            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-4 border border-purple-500/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-purple-400">150+</div>
                  <div className="text-xs text-gray-400">Clients accompagnés</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-green-400">+300%</div>
                  <div className="text-xs text-gray-400">ROI moyen</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-purple-400" />
              Nos Services
            </h4>
            <ul className="space-y-1">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center group py-2"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center">
              <ArrowRight className="w-5 h-5 mr-2 text-purple-400" />
              Liens rapides
            </h4>
            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center group py-2"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secteurs */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-purple-400" />
              Secteurs d&apos;expertise
            </h4>
            <div className="space-y-1">
              {sectors.map((sector, index) => (
                <div key={index} className="flex items-center text-gray-300 hover:text-purple-400 transition-colors text-sm group cursor-pointer py-2">
                  <sector.icon className="w-4 h-4 mr-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  {sector.name}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <a href={`mailto:${SITE.email}`} className="flex items-center hover:text-purple-400 transition-colors group cursor-pointer">
                <div className="p-2 bg-purple-600/20 rounded-lg mr-3 group-hover:bg-purple-600/30 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-xs">{SITE.email}</div>
                </div>
              </a>
              <a href={`tel:${SITE.phone}`} className="flex items-center hover:text-purple-400 transition-colors group cursor-pointer">
                <div className="p-2 bg-purple-600/20 rounded-lg mr-3 group-hover:bg-purple-600/30 transition-colors">
                  <Phone className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Téléphone</div>
                  <div className="text-xs">{SITE.phoneDisplay}</div>
                </div>
              </a>
              <a href="https://maps.google.com/?q=1+Rue+du+4+Septembre+92500+Rueil-Malmaison" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-purple-400 transition-colors group">
                <div className="p-2 bg-purple-600/20 rounded-lg mr-3 group-hover:bg-purple-600/30 transition-colors">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Adresse</div>
                  <div className="text-xs">1 Rue du 4 Septembre</div>
                  <div className="text-xs">92500 Rueil-Malmaison, France</div>
                </div>
              </a>
            </div>

            <div className="pt-4">
              <Link href="/contact">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  Audit Gratuit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-8 sm:p-10 mb-8 sm:mb-12 backdrop-blur-sm border border-purple-500/20">
          <div className="text-center max-w-3xl mx-auto">
            <h4 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Conseils marketing digital gratuits
            </h4>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Recevez nos meilleures stratégies SEO, Ads et social media pour booster votre croissance digitale
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Votre email professionnel..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-purple-400/50 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all disabled:opacity-50"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Envoi..." : "S'abonner"}
              </Button>
            </form>
            <div className="text-xs text-gray-400 mt-3">
              Pas de spam - Contenu premium - Désabonnement simple
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} ConvertiLab — Agence marketing digital Paris & Île-de-France. Tous droits réservés.</p>
            <div className="flex flex-wrap gap-2 sm:gap-6 mt-4 sm:mt-0">
              <Link
                href="/politique-de-confidentialite"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors py-2 px-1"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
