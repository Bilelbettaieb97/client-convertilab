"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {
  Menu, X, Calendar, FileText, BookOpen, Globe, Palette, Search, Target,
  ChevronDown, ChevronRight, Rocket, Store, Code, RefreshCw, PenTool, Fingerprint,
  TrendingUp, ClipboardCheck, Share2, BarChart3, Megaphone, Zap,
  GitCompare, type LucideIcon
} from "lucide-react";
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

interface SubService { name: string; icon: LucideIcon; href: string; }
interface ServiceCategory { label: string; href: string; icon: LucideIcon; description: string; subServices: SubService[]; }

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOffresOpen, setIsOffresOpen] = useState(false);
  const [isOutilsOpen, setIsOutilsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const pathname = usePathname();

  const serviceCategories: ServiceCategory[] = [
    { label: "Sites Web", href: "/services/sites-web", icon: Globe, description: "Sites vitrines, e-commerce et applications web", subServices: [
      { name: "Landing Page", icon: Rocket, href: "/services/sites-web/landing-page" },
      { name: "Site Vitrine", icon: FileText, href: "/services/sites-web/site-vitrine" },
      { name: "Site E-commerce", icon: Store, href: "/services/sites-web/site-ecommerce" },
      { name: "Application Web", icon: Code, href: "/services/sites-web/application-web" },
      { name: "Refonte de Site", icon: RefreshCw, href: "/services/sites-web/refonte-site" },
    ]},
    { label: "SEO", href: "/services/seo", icon: Search, description: "Référencement naturel et visibilité Google", subServices: [
      { name: "Référencement SEO", icon: TrendingUp, href: "/services/seo/referencement" },
      { name: "Audit SEO", icon: ClipboardCheck, href: "/services/seo/audit" },
    ]},
    { label: "Publicité", href: "/services/sea", icon: Target, description: "Google Ads, Meta Ads et campagnes payantes", subServices: [
      { name: "Google Ads", icon: Search, href: "/services/sea/google-ads" },
      { name: "Meta Ads", icon: Megaphone, href: "/services/sea/meta-ads" },
    ]},
    { label: "Social Media", href: "/services/social-media", icon: Share2, description: "Gestion et stratégie réseaux sociaux", subServices: [
      { name: "Community Management", icon: Share2, href: "/services/social-media/community-management" },
      { name: "Stratégie Social Media", icon: BarChart3, href: "/services/social-media/strategie" },
    ]},
    { label: "Design", href: "/services/design", icon: Palette, description: "Identité visuelle, UI/UX et branding", subServices: [
      { name: "Design UI/UX", icon: PenTool, href: "/services/design/ui-ux" },
      { name: "Identité Visuelle", icon: Fingerprint, href: "/services/design/identite-visuelle" },
    ]},
  ];

  const navItems = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const offerItems = [
    { label: "Site à 39€/mois", href: "/offre-mensuelle", icon: Rocket, desc: "Votre site web en mensualités", badge: "Populaire" as const },
    { label: "Offre à 300€", href: "/offre-speciale", icon: Zap, desc: "Site professionnel à petit prix", badge: "Limitée" as const },
    { label: "Demande de maquette", href: "/demande-maquette", icon: Palette, desc: "Maquette gratuite de votre futur site", badge: null },
    { label: "Estimation de prix", href: "/estimation-prix-site-web", icon: BarChart3, desc: "Calculez le prix de votre projet", badge: null },
    { label: "Nos tarifs", href: "/prix", icon: FileText, desc: "Tous nos prix détaillés", badge: null },
  ];

  const toolsItems = [
    { label: "Audit SEO", href: "/seo-check", icon: Search, desc: "60+ points de contrôle SEO", badge: "Populaire" as const },
    { label: "Audit Vitesse", href: "/speed-check", icon: Zap, desc: "Testez la performance de votre site", badge: null },
    { label: "Audit Design & UX", href: "/design-score", icon: Palette, desc: "Évaluez l'expérience utilisateur", badge: null },
    { label: "Estimateur Ads", href: "/estimateur-ads", icon: TrendingUp, desc: "Estimez le ROI de vos campagnes", badge: null },
    { label: "Mentions Légales", href: "/generateur-mentions-legales", icon: FileText, desc: "Générez vos CGU et CGV", badge: null },
    { label: "Robots & Sitemap", href: "/generateur-robots-sitemap", icon: Code, desc: "Créez vos fichiers techniques", badge: null },
    { label: "Rapport Sectoriel", href: "/rapport-sectoriel", icon: BarChart3, desc: "Analysez votre marché", badge: null },
    { label: "Comparateur Sites", href: "/comparateur-sites", icon: GitCompare, desc: "Comparez avec la concurrence", badge: null },
  ];

  const openCalendly = () => { window.open(SITE.calendly, '_blank'); };

  const activeCategory = hoveredCategory ? serviceCategories.find(c => c.label === hoveredCategory) : serviceCategories[0];

  const isToolActive = pathname.startsWith('/seo-check') || pathname.startsWith('/speed-check') || pathname.startsWith('/design-score') || pathname.startsWith('/estimateur-ads') || pathname.startsWith('/generateur') || pathname.startsWith('/rapport-sectoriel') || pathname.startsWith('/comparateur-sites');

  return (
    <>
    {isMenuOpen && (
      <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden" onClick={() => setIsMenuOpen(false)} />
    )}
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center justify-center w-11 h-11 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-colors" aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center lg:flex-none absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <Link href="/" className="cursor-pointer flex items-center gap-2" aria-label="ConvertiLab - Accueil">
              <Image src="/images/icon-c.png" alt="" width={48} height={48} className="h-9 w-9 sm:h-11 sm:w-11 flex-shrink-0" priority />
              <div className="flex flex-col leading-none">
                <span className="text-[20px] sm:text-[26px] font-bold tracking-tight">
                  <span className="text-gray-900">Converti</span><span className="text-[#EC4899]">Lab</span>
                </span>
                <span className="text-[7px] sm:text-[9px] text-gray-400 tracking-[0.1em] font-medium mt-0.5">Agence de Marketing Digital</span>
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
                  <NavigationMenuTrigger className={`h-auto px-0 py-1 text-sm text-gray-700 hover:text-purple-600 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent font-medium ${pathname.startsWith('/services') ? 'text-purple-600' : ''}`}>
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
                                  (hoveredCategory === service.label || (!hoveredCategory && service.label === "Sites Web")) ? "bg-gradient-to-r from-purple-50 to-pink-50 shadow-sm" : "hover:bg-gray-50",
                                  pathname === service.href && "bg-purple-50"
                                )}>
                                <div className={cn("flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200",
                                  (hoveredCategory === service.label || (!hoveredCategory && service.label === "Sites Web")) ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200"
                                )}>
                                  <service.icon className={cn("h-4 w-4 transition-all duration-200",
                                    (hoveredCategory === service.label || (!hoveredCategory && service.label === "Sites Web")) ? "text-white" : "text-purple-600"
                                  )} />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-semibold text-gray-800">{service.label}</div>
                                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{service.description}</p>
                                </div>
                                <ChevronRight className={cn("w-4 h-4 transition-all duration-200",
                                  (hoveredCategory === service.label || (!hoveredCategory && service.label === "Sites Web")) ? "text-purple-500" : "text-gray-300"
                                )} />
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                        <li className="border-t border-purple-100 pt-2 mt-2">
                          <NavigationMenuLink asChild>
                            <Link href="/services" className="group flex items-center justify-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 p-2 rounded-lg hover:bg-purple-50 transition-all duration-200">
                              Voir tous les services <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                      <div className="flex-1 p-4 bg-gray-50/50">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{activeCategory?.label} - Nos services</h4>
                        <ul className="space-y-1">
                          {activeCategory?.subServices.map((sub) => (
                            <li key={sub.name}>
                              <NavigationMenuLink asChild>
                                <Link href={sub.href} className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200">
                                  <sub.icon className="w-4 h-4 text-purple-500 group-hover:text-purple-600 transition-colors" />
                                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">{sub.name}</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                          <li className="border-t border-gray-200 pt-2 mt-2">
                            <NavigationMenuLink asChild>
                              <Link href={activeCategory?.href || '/services'} className="group flex items-center justify-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 p-2 rounded-lg hover:bg-purple-50 transition-all duration-200">
                                Voir tous les {activeCategory?.label} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
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

            {/* Portfolio — preuve sociale immédiate */}
            <Link href="/portfolio" className={`text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer relative group ${pathname === '/portfolio' ? 'text-purple-600' : ''}`}>
              Portfolio
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${pathname === '/portfolio' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Outils Dropdown — lead magnet, capture les non-prêts */}
            <div className="relative group/tools">
              <button className={`text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer flex items-center gap-1 ${isToolActive ? 'text-purple-600' : ''}`}>
                Outils <ChevronDown className="w-3 h-3 transition-transform group-hover/tools:rotate-180" />
              </button>
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
                    <span className="text-[10px] text-gray-400">100% gratuit — sans inscription</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Offres Dropdown — après la confiance (portfolio + outils) */}
            <div className="relative group/offers">
              <button className={`text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer flex items-center gap-1 ${pathname.startsWith('/offre') || pathname.startsWith('/estimation') || pathname.startsWith('/demande') || pathname.startsWith('/prix') ? 'text-purple-600' : ''}`}>
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
            <Link href="/blog" className={`text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer relative group flex items-center gap-1 ${pathname.startsWith('/blog') ? 'text-purple-600' : ''}`}>
              <BookOpen className="w-4 h-4" />
              Blog
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${pathname.startsWith('/blog') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Contact */}
            <Link href="/contact" className={`text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium relative group ${pathname === '/contact' ? 'text-purple-600' : ''}`}>
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button asChild variant="outline" className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-5 py-2 font-semibold transition-all duration-300 transform hover:scale-105">
              <Link href="/seo-check">
                <Search className="mr-2 w-4 h-4" />
                Audit SEO Gratuit
              </Link>
            </Button>
            <Button onClick={openCalendly} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Calendar className="mr-2 w-4 h-4" />
              Prendre rendez-vous
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm max-h-[80vh] overflow-y-auto">
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
                      <Link key={service.href} href={service.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 w-full px-3 py-2.5 text-sm hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <service.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-600">{service.label}</span>
                      </Link>
                    ))}
                    <Link href="/services" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 text-sm text-purple-600 font-medium hover:bg-purple-50 rounded-lg">
                      Tous les services <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Portfolio — preuve sociale */}
              <Link href="/portfolio" onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl transition-colors duration-200 font-medium text-base ${pathname === '/portfolio' ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                <Globe className="w-5 h-5" /> Portfolio
              </Link>

              {/* Outils — lead magnet */}
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

              {/* Offres — après confiance */}
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

              {/* CTA Mobile */}
              <div className="pt-3 space-y-2 border-t border-gray-100 mt-2">
                <Button asChild variant="outline" className="w-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold">
                  <Link href="/seo-check" onClick={() => setIsMenuOpen(false)}>
                    <Search className="mr-2 w-4 h-4" /> Audit SEO Gratuit
                  </Link>
                </Button>
                <Button onClick={openCalendly} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
                  <Calendar className="mr-2 w-4 h-4" /> Prendre rendez-vous
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
