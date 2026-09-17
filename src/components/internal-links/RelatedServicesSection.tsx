import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Search,
  Megaphone,
  FileText,
  ShoppingCart,
  Rocket,
  RefreshCw,
  ClipboardCheck,
  MapPin,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

export type PoleCle = "site" | "publicite" | "seo" | "crm";

interface ServiceLink {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  pole: PoleCle;
}

/**
 * Pages de service proposées en bas des pages villes, secteurs, glossaire et
 * guides : les quatre pôles, avec les prix et délais écrits sur les pages
 * elles-mêmes. Aucune promesse de position Google.
 */
const allServices: ServiceLink[] = [
  { pole: "site", icon: <FileText className="w-5 h-5" />, title: "Site vitrine", description: "Site professionnel 890 €, maquette gratuite sous 48 h, livré en 2 semaines", href: "/services/sites-web/site-vitrine" },
  { pole: "site", icon: <Rocket className="w-5 h-5" />, title: "Landing page", description: "Une page, un objectif, 490 €, livrée en 5 à 7 jours", href: "/services/sites-web/landing-page" },
  { pole: "site", icon: <ShoppingCart className="w-5 h-5" />, title: "Site e-commerce", description: "Boutique en ligne à partir de 1 490 €, paiement Stripe ou PayPal", href: "/services/sites-web/site-ecommerce" },
  { pole: "site", icon: <RefreshCw className="w-5 h-5" />, title: "Refonte de site", description: "Site moderne, redirections posées pour garder vos pages Google, 690 €", href: "/services/sites-web/refonte-site" },
  { pole: "site", icon: <Workflow className="w-5 h-5" />, title: "Application web sur mesure", description: "Portail client, devis en ligne, outil métier, prix fixe sur devis", href: "/services/sites-web/application-web" },
  { pole: "seo", icon: <MapPin className="w-5 h-5" />, title: "Référencement local", description: "Fiche Google, avis clients, citations locales, pages villes", href: "/services/seo/seo-local" },
  { pole: "seo", icon: <Search className="w-5 h-5" />, title: "Référencement naturel", description: "Forfait SEO dès 500 €/mois, effets en 3 à 6 mois", href: "/services/seo/referencement" },
  { pole: "seo", icon: <ClipboardCheck className="w-5 h-5" />, title: "Audit SEO", description: "Ce qui bloque votre site et par quoi commencer, plan d'action écrit", href: "/services/seo/audit" },
  { pole: "seo", icon: <Sparkles className="w-5 h-5" />, title: "Visibilité IA", description: "Être cité par ChatGPT, Perplexity et Google AI Overviews", href: "/services/seo/visibilite-ia" },
  { pole: "publicite", icon: <Megaphone className="w-5 h-5" />, title: "Google Ads", description: "Search et Shopping pilotés au coût par demande, compte à votre nom", href: "/services/sea/google-ads" },
  { pole: "publicite", icon: <Globe className="w-5 h-5" />, title: "Meta Ads", description: "Publicités Facebook et Instagram, pixel à votre nom", href: "/services/sea/meta-ads" },
  { pole: "publicite", icon: <Users className="w-5 h-5" />, title: "LinkedIn Ads", description: "Ciblage par poste, secteur et taille d'entreprise", href: "/services/sea/linkedin-ads" },
  { pole: "crm", icon: <Users className="w-5 h-5" />, title: "CRM et relances automatiques", description: "HubSpot, Salesforce, Pipedrive ou le vôtre, devis relancés par email", href: "/services/crm" },
  { pole: "crm", icon: <Workflow className="w-5 h-5" />, title: "Création de CRM", description: "Pipeline en place, contacts importés, site et campagnes reliés", href: "/services/crm/creation-crm" },
];

interface RelatedServicesSectionProps {
  exclude?: string[];
  max?: number;
  title?: string;
  /** Pôles à mettre en avant, dans l'ordre : le premier service de chaque pôle passe devant. */
  poles?: PoleCle[];
}

const RelatedServicesSection = ({ exclude = [], max = 4, title = "Services connexes", poles }: RelatedServicesSectionProps) => {
  const candidats = allServices.filter((s) => !exclude.includes(s.href));
  let choisis: ServiceLink[];
  if (poles && poles.length > 0) {
    // Un service par pôle demandé d'abord (dans l'ordre), puis le reste des pôles demandés.
    const premiers = poles.map((p) => candidats.find((s) => s.pole === p)).filter((s): s is ServiceLink => Boolean(s));
    const suite = candidats.filter((s) => poles.includes(s.pole) && !premiers.includes(s));
    const autres = candidats.filter((s) => !poles.includes(s.pole));
    choisis = [...premiers, ...suite, ...autres].slice(0, max);
  } else {
    choisis = candidats.slice(0, max);
  }

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {choisis.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {service.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 flex-grow">{service.description}</p>
              <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                En savoir plus <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
            Voir nos quatre pôles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesSection;
