"use client";

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award, Shield, Clock, CheckCircle, TrendingUp } from "lucide-react";
import Services from "@/components/sections/Services";

export default function ServicesPageContent() {
  return (
    <main className="pt-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/">Accueil</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-accent">Creneaux limites -- reservez votre place</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight max-w-4xl mx-auto">
            Des Solutions Digitales Qui <span className="text-primary">Generent des Resultats</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sites web, SEO, publicite, social media : un accompagnement 360 pour accelerer votre croissance. <strong className="text-foreground">+280% de CA moyen</strong> pour nos clients.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg">
              <Link href="/contact">
                Obtenir mon devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/portfolio">Voir nos resultats</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-medium text-foreground">4.9/5</span>
              <span>sur 47 avis</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span><strong className="text-foreground">+50</strong> clients accompagnes</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span><strong className="text-foreground">+280%</strong> de CA moyen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "Des 500€", label: "Sites web" },
              { value: "Page 1", label: "Objectif Google" },
              { value: "x4.8", label: "ROAS moyen Ads" },
              { value: "24h", label: "Delai de reponse" },
            ].map((m, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-black text-primary-foreground">{m.value}</p>
                <p className="text-sm text-primary-foreground/70 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services component (tabs) */}
      <Services />

      {/* Guarantees */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-300">Zero risque</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Pourquoi nous choisir ?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <CheckCircle className="w-5 h-5" />, title: "Prix fixes garantis", desc: "Le devis signe est le prix final. Aucun cout cache." },
              { icon: <Clock className="w-5 h-5" />, title: "Delais respectes", desc: "Engagement contractuel sur les delais. 10% de remise si retard." },
              { icon: <Shield className="w-5 h-5" />, title: "Satisfait ou retravaille", desc: "On retravaille gratuitement si le resultat ne correspond pas." },
              { icon: <Award className="w-5 h-5" />, title: "Resultats mesurables", desc: "Reporting transparent. Chaque euro investi est tracke." },
            ].map((g, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-border bg-card">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4 text-green-600">
                  {g.icon}
                </div>
                <h3 className="font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Pret a accelerer votre croissance ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
            Audit gratuit + plan d&apos;action personnalise sous 24h. Sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6">
              <Link href="/contact">
                Demander mon audit gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
              <Link href="/portfolio">Voir nos resultats</Link>
            </Button>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-6">
            Reponse sous 24h - Devis gratuit - Paiement en 3x sans frais
          </p>
        </div>
      </section>
    </main>
  );
}
