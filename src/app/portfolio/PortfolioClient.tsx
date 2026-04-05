"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Portfolio from "@/components/sections/Portfolio";
import {
  ArrowRight,
  Star,
  Users,
  Search,
  Globe,
  ShoppingCart,
  Rocket,
  Camera,
  LayoutGrid,
} from "lucide-react";

const categories = [
  { id: "all", label: "Tous les projets", icon: LayoutGrid },
  { id: "site-vitrine", label: "Sites Vitrine", icon: Globe },
  { id: "e-commerce", label: "E-commerce", icon: ShoppingCart },
  { id: "landing-page", label: "Landing Pages", icon: Rocket },
  { id: "portfolio", label: "Portfolios", icon: Camera },
];

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      {/* Category Filter Hero */}
      <section className="py-10 sm:py-14 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-5">
              <Search className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">
                Explorez nos realisations
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Trouvez l&apos;inspiration par{" "}
              <span className="text-primary">categorie</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              +50 projets realises. Filtrez par type de projet pour decouvrir nos
              realisations et resultats concrets.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                      : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground hover:shadow-md"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="font-medium text-foreground">4.9/5</span>
              <span>de satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>
                <strong className="text-foreground">+50</strong> clients
                accompagnes
              </span>
            </div>
          </div>
        </div>
      </section>

      <Portfolio activeCategory={activeCategory} />

      {/* Bottom service CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-4">
            Vous avez un projet en tete ?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/contact">
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Decouvrir nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
