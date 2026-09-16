"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {
  Calendar, FileText, BookOpen, Globe, Palette, Search, Target,
  ChevronDown, ChevronRight, Rocket, Code, TrendingUp, BarChart3, Zap,
  GitCompare, ArrowRight, type LucideIcon
} from "lucide-react";
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";
import { POLES, type PoleSlug } from "@/data/poles";
import { Hamburger } from "@/components/motion/ff/c-hamburger";
import { SOULIGNEMENT_MENU, SOULIGNEMENT_MENU_ACTIF } from "@/components/motion/ff/c-soulignement-centre";
import { OMBRE_BOUTON_PRIMAIRE, REFLET_BOUTON } from "@/components/motion/ff/c-bouton-reflet";

/**
 * Bouton Calendly de l'en-tête : seul dégradé de l'en-tête, même motif que
 * BoutonLien primaire (reflet en biais au survol / focus, un passage) et même
 * ombre violette de survol ; plus de `scale-105`.
 */
const CLASSES_CALENDLY = cn(
  "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-[box-shadow,scale] duration-300 motion-reduce:transition-none",
  OMBRE_BOUTON_PRIMAIRE,
  REFLET_BOUTON
);

interface SubService { name: string; href: string; }
interface ServiceCategory { slug: PoleSlug; numero: string; label: string; href: string; ancre: string; icon: LucideIcon; description: string; subServices: SubService[]; }

/**
 * Menu Services = les quatre pôles de poles.ts et leurs sous-pages.
 * Design et Social Media ne sont plus dans le menu (ils restent en pied de page).
 * Un pôle sans sous-page afficherait ses outils ; aujourd'hui les quatre en ont, dont l'intégration IA sous le pôle CRM.
 */
const serviceCategories: ServiceCategory[] = POLES.map((pole) => ({
  slug: pole.slug,
  numero: pole.numero,
  label: pole.nomCourt,
  href: pole.href,
  ancre: pole.ancre,
  icon: pole.icon,
  description: pole.descriptionCourte,
  subServices: (pole.sousPages.length > 0 ? pole.sousPages : pole.outils).map((lien) => ({
    name: lien.label,
    href: lien.href,
  })),
}));

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOffresOpen, setIsOffresOpen] = useState(false);
  const [isOutilsOpen, setIsOutilsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  // En-tête qui respire : bordure et ombre seulement après 8 px de défilement.
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const offerItems = [
    { label: "Site dès 39 €/mois", href: "/offre-mensuelle", icon: Rocket, desc: "Paiement étalé sur 24 mois, pas d'abonnement", badge: "Populaire" as const },
    { label: "Demande de maquette", href: "/demande-maquette", icon: Palette, desc: "Maquette gratuite de votre futur site", badge: null },
    { label: "Estimation de prix", href: "/estimation-prix-site-web", icon: BarChart3, desc: "Calculez le prix de votre projet", badge: null },
    { label: "Nos tarifs", href: "/prix", icon: FileText, desc: "Tous nos prix détaillés", badge: null },
  ];

  const toolsItems = [
    { label: "Audit SEO", href: "/seo-check", icon: Search, desc: "60+ points de contrôle SEO", badge: "Populaire" as const },
    { label: "Audit Vitesse", href: "/speed-check", icon: Zap, desc: "Testez la performance de votre site", badge: null },
    { label: "Audit Design & UX", href: "/design-score", icon: Palette, desc: "Évaluez l'expérience utilisateur", badge: null },
    { label: "Estimateur Ads", href: "/estimateur-ads", icon: TrendingUp, desc: "Estimez votre coût par demande", badge: null },
    { label: "Générateur Mentions Légales", href: "/generateur-mentions-legales", icon: FileText, desc: "Générez vos CGU et CGV", badge: null },
    { label: "Robots & Sitemap", href: "/generateur-robots-sitemap", icon: Code, desc: "Créez vos fichiers techniques", badge: null },
    { label: "Rapport Sectoriel", href: "/rapport-sectoriel", icon: BarChart3, desc: "Analysez votre marché", badge: null },
    { label: "Comparateur Sites", href: "/comparateur-sites", icon: GitCompare, desc: "Comparez avec la concurrence", badge: null },
  ];

  const openCalendly = () => { window.open(SITE.calendly, '_blank'); };

  const activeCategory = (hoveredCategory && serviceCategories.find(c => c.label === hoveredCategory)) || serviceCategories[0];
  const estActive = (service: ServiceCategory) => service.label === activeCategory.label;

  const isToolActive = pathname.startsWith('/seo-check') || pathname.startsWith('/speed-check') || pathname.startsWith('/design-score') || pathname.startsWith('/estimateur-ads') || pathname.startsWith('/generateur') || pathname.startsWith('/rapport-sectoriel') || pathname.startsWith('/comparateur-sites');

  return (
    <>
    {isMenuOpen && (
      <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden" onClick={() => setIsMenuOpen(false)} />
    )}
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-[box-shadow,border-color] duration-300 motion-reduce:transition-none",
      scrolled || isMenuOpen ? "border-gray-200 shadow-sm" : "border-transparent shadow-none"
    )}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-11 h-11 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              aria-controls="menu-mobile"
            >
              {/* Trois barres qui deviennent une croix (transform seul), voir motion/ff/c-hamburger. */}
              <Hamburger ouvert={isMenuOpen} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center lg:flex-none absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <Link href="/" className="cursor-pointer flex items-center gap-2">
              <Image src="/images/icon-c.png" alt="Logo ConvertiLab" width={48} height={48} className="h-9 w-9 sm:h-11 sm:w-11 flex-shrink-0" priority />
              <div className="flex flex-col leading-none">
                <span className="text-[20px] sm:text-[26px] font-bold tracking-tight">
                  <span className="text-gray-900">Converti</span><span className="text-[#EC4899]">Lab</span>
                </span>
                <span className="text-[9px] sm:text-[10px] text-gray-600 tracking-[0.1em] font-medium mt-0.5">Agence marketing digital</span>
              </div>
            </Link>
          </div>

          <div className="w-11 lg:hidden" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Services Mega Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "h-auto px-0 py-1 text-sm text-gray-700 hover:text-purple-600 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent font-medium",
                    SOULIGNEMENT_MENU, "data-[state=open]:after:scale-x-100",
                    pathname.startsWith('/services') && cn("text-purple-600", SOULIGNEMENT_MENU_ACTIF)
                  )}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-[700px] bg-white">
                      <ul className="w-[300px] gap-1 p-3 border-r border-gray-100">
                        {serviceCategories.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link href={service.href} onMouseEnter={() => setHoveredCategory(service.label)}
                                className={cn("group flex items-center gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200",
                                  estActive(service) ? "bg-gradient-to-r from-purple-50 to-pink-50 shadow-sm" : "hover:bg-gray-50",
                                  pathname === service.href && "bg-purple-50"
                                )}>
                                <div className={cn("flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200",
                                  estActive(service) ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200"
                                )}>
                                  <service.icon className={cn("h-4 w-4 transition-all duration-200",
                                    estActive(service) ? "text-white" : "text-purple-600"
                                  )} />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-semibold text-gray-800">{service.label}</div>
                                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{service.description}</p>
                                </div>
                                <ChevronRight className={cn("w-4 h-4 transition-all duration-200",
                                  estActive(service) ? "text-purple-500" : "text-gray-300"
                                )} />
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                        <li className="border-t border-purple-100 pt-2 mt-2">
                          <NavigationMenuLink asChild>
                            <Link href="/services" className="group flex items-center justify-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 p-2 rounded-lg hover:bg-purple-50 transition-all duration-200">
                              Tous nos services marketing digital <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                      <div className="flex-1 p-4 bg-gray-50/50">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{activeCategory.label}</h4>
                        <ul className="space-y-1">
                          {activeCategory.subServices.map((sub) => (
                            <li key={sub.name}>
                              <NavigationMenuLink asChild>
                                <Link href={sub.href} className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200">
                                  <ArrowRight className="w-4 h-4 shrink-0 text-purple-500 group-hover:text-purple-600 transition-colors" aria-hidden="true" />
                                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">{sub.name}</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                          <li className="border-t border-gray-200 pt-2 mt-2">
                            <NavigationMenuLink asChild>
                              <Link href={activeCategory.href} className="group flex items-center justify-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 p-2 rounded-lg hover:bg-purple-50 transition-all duration-200">
                                {activeCategory.ancre} <ChevronRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Portfolio : preuve sociale immédiate */}
            <Link href="/portfolio" className={cn(
              "text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer",
              SOULIGNEMENT_MENU,
              pathname === '/portfolio' && cn("text-purple-600", SOULIGNEMENT_MENU_ACTIF)
            )}>
              Portfolio
            </Link>

            {/* Outils Dropdown : lead magnet, capture les non-prêts */}
            <div className="relative group/tools">
              <Link href="/outils" className={cn(
                "text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer flex items-center gap-1",
                SOULIGNEMENT_MENU, "group-hover/tools:after:scale-x-100",
                (isToolActive || pathname === '/outils') && cn("text-purple-600", SOULIGNEMENT_MENU_ACTIF)
              )}>
                Outils <ChevronDown className="w-3 h-3 transition-transform group-hover/tools:rotate-180" />
              </Link>
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover/tools:opacity-100 group-hover/tools:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 w-80">
                  <div className="px-3 py-2 mb-1">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Outils gratuits</p>
                  </div>
                  <div className="grid grid-cols-1 gap-0.5">
                    {toolsItems.map((tool) => (
                      <Link key={tool.href} href={tool.href} className="group flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-green-50 transition-all duration-200">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-100 group-hover:bg-gradient-to-br group-hover:from-green-500 group-hover:to-emerald-500 transition-all duration-200 flex-shrink-0 mt-0.5">
                          <tool.icon className="w-3.5 h-3.5 text-green-600 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-800 group-hover:text-green-700">{tool.label}</span>
                            {tool.badge && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700">{tool.badge}</span>
                            )}
                          </div>
                          <p className="text-[11px] text-gray-500 mt-0.5">{tool.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 mt-1 pt-1 px-3 py-2">
                    <span className="text-[10px] text-gray-400">100% gratuit, sans inscription</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Offres Dropdown : après la confiance (portfolio + outils) */}
            <div className="relative group/offers">
              <button type="button" className={cn(
                "text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer flex items-center gap-1",
                SOULIGNEMENT_MENU, "group-hover/offers:after:scale-x-100",
                (pathname.startsWith('/offre') || pathname.startsWith('/estimation') || pathname.startsWith('/demande') || pathname.startsWith('/prix')) && cn("text-purple-600", SOULIGNEMENT_MENU_ACTIF)
              )}>
                Offres <ChevronDown className="w-3 h-3 transition-transform group-hover/offers:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/offers:opacity-100 group-hover/offers:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 w-72">
                  {offerItems.map((offer) => (
                    <Link key={offer.href} href={offer.href} className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-purple-50 transition-all duration-200">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-purple-100 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-200 flex-shrink-0 mt-0.5">
                        <offer.icon className="w-4 h-4 text-purple-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-800 group-hover:text-purple-700">{offer.label}</span>
                          {offer.badge && (
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${offer.badge === 'Populaire' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                              {offer.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{offer.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog */}
            <Link href="/blog" className={cn(
              "text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer flex items-center gap-1",
              SOULIGNEMENT_MENU,
              pathname.startsWith('/blog') && cn("text-purple-600", SOULIGNEMENT_MENU_ACTIF)
            )}>
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              Blog
            </Link>

            {/* Contact */}
            <Link href="/contact" className={cn(
              "text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium",
              SOULIGNEMENT_MENU,
              pathname === '/contact' && cn("text-purple-600", SOULIGNEMENT_MENU_ACTIF)
            )}>
              Contact
            </Link>
          </div>

          {/* CTA - Desktop : un seul bouton d'en-tête (le seul dégradé de l'en-tête), libellé identique aux pages.
              La vérification SEO gratuite reste accessible dans le menu Outils (« Audit SEO »). */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button onClick={openCalendly} className={cn(CLASSES_CALENDLY, "px-6 py-2")}>
              <Calendar className="mr-2 w-4 h-4" aria-hidden="true" />
              Réserver 30 min avec le fondateur
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="menu-mobile" className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm max-h-[80vh] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Services */}
              <div>
                <button onClick={() => setIsServicesOpen(!isServicesOpen)} className={`flex items-center justify-between w-full px-3 py-3 rounded-xl transition-colors duration-200 font-medium text-base ${pathname.startsWith('/services') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                  <span className="flex items-center gap-2"><Globe className="w-5 h-5" /> Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-1 space-y-0.5">
                    {serviceCategories.map((service) => (
                      <div key={service.href}>
                        <Link href={service.href} onClick={() => setIsMenuOpen(false)} className="flex items-center min-h-11 gap-3 w-full px-3 py-2.5 text-sm font-medium hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">
                          <service.icon className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-700">{service.numero} · {service.label}</span>
                        </Link>
                        <div className="pl-7">
                          {service.subServices.map((sub) => (
                            <Link key={sub.href} href={sub.href} onClick={() => setIsMenuOpen(false)} className="flex items-center min-h-11 px-3 py-2 text-sm text-gray-500 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link href="/services" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 text-sm text-purple-600 font-medium hover:bg-purple-50 rounded-lg">
                      Tous les services <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Portfolio : preuve sociale */}
              <Link href="/portfolio" onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl transition-colors duration-200 font-medium text-base ${pathname === '/portfolio' ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                <Globe className="w-5 h-5" /> Portfolio
              </Link>

              {/* Outils : lead magnet */}
              <div>
                <button onClick={() => setIsOutilsOpen(!isOutilsOpen)} className={`flex items-center justify-between w-full px-3 py-3 rounded-xl transition-colors duration-200 font-medium text-base ${isToolActive ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                  <span className="flex items-center gap-2"><Search className="w-5 h-5" /> Outils gratuits</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isOutilsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOutilsOpen && (
                  <div className="pl-4 mt-1 space-y-0.5">
                    {toolsItems.map((tool) => (
                      <Link key={tool.href} href={tool.href} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between w-full px-3 py-2.5 text-sm hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <span className="flex items-center gap-3">
                          <tool.icon className="w-4 h-4 text-green-400" />
                          <span className="text-gray-600">{tool.label}</span>
                        </span>
                        {tool.badge && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700">{tool.badge}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Offres : après confiance */}
              <div>
                <button onClick={() => setIsOffresOpen(!isOffresOpen)} className={`flex items-center justify-between w-full px-3 py-3 rounded-xl transition-colors duration-200 font-medium text-base ${pathname.startsWith('/offre') || pathname.startsWith('/prix') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                  <span className="flex items-center gap-2"><Zap className="w-5 h-5" /> Offres</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isOffresOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOffresOpen && (
                  <div className="pl-4 mt-1 space-y-0.5">
                    {offerItems.map((offer) => (
                      <Link key={offer.href} href={offer.href} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between w-full px-3 py-2.5 text-sm hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <span className="flex items-center gap-3">
                          <offer.icon className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-600">{offer.label}</span>
                        </span>
                        {offer.badge && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${offer.badge === 'Populaire' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{offer.badge}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Blog + Contact */}
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl transition-colors duration-200 font-medium text-base ${pathname.startsWith('/blog') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                <BookOpen className="w-5 h-5" /> Blog
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl transition-colors duration-200 font-medium text-base ${pathname === '/contact' ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                <Target className="w-5 h-5" /> Contact
              </Link>

              {/* CTA Mobile : un seul bouton, même libellé que les pages. */}
              <div className="pt-3 space-y-2 border-t border-gray-100 mt-2">
                <Button onClick={openCalendly} className={cn(CLASSES_CALENDLY, "w-full min-h-11")}>
                  <Calendar className="mr-2 w-4 h-4" aria-hidden="true" /> Réserver 30 min avec le fondateur
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navigation;
