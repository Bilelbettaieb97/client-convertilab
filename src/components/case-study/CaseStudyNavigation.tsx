"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface NavigationProject { slug: string; title: string; client: string; image: string; sector: string; }

interface Props { previousProject?: NavigationProject; nextProject?: NavigationProject; }

export default function CaseStudyNavigation({ previousProject, nextProject }: Props) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl font-bold text-center mb-8">Decouvrir d&apos;autres projets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {previousProject && (
              <Link href={`/etude-de-cas/${previousProject.slug}`} className="block group cursor-pointer">
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:scale-[1.02] h-full">
                  <div className="relative aspect-video overflow-hidden"><Image src={previousProject.image} alt={`Projet ${previousProject.client}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /><div className="absolute top-4 left-4"><Button variant="secondary" size="sm" className="pointer-events-none shadow-lg"><ChevronLeft className="w-4 h-4 mr-1" />Precedent</Button></div></div>
                  <div className="p-6"><div className="text-sm text-muted-foreground mb-2">{previousProject.sector}</div><h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{previousProject.title}</h3><p className="text-muted-foreground">{previousProject.client}</p></div>
                </Card>
              </Link>
            )}
            {nextProject && (
              <Link href={`/etude-de-cas/${nextProject.slug}`} className="block group cursor-pointer">
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:scale-[1.02] h-full">
                  <div className="relative aspect-video overflow-hidden"><Image src={nextProject.image} alt={`Projet ${nextProject.client}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /><div className="absolute top-4 right-4"><Button variant="secondary" size="sm" className="pointer-events-none shadow-lg">Suivant<ChevronRight className="w-4 h-4 ml-1" /></Button></div></div>
                  <div className="p-6"><div className="text-sm text-muted-foreground mb-2">{nextProject.sector}</div><h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{nextProject.title}</h3><p className="text-muted-foreground">{nextProject.client}</p></div>
                </Card>
              </Link>
            )}
          </div>
          <div className="mt-8 text-center"><Button asChild variant="outline" size="lg"><Link href="/portfolio">Voir tous les projets</Link></Button></div>
        </div>
      </div>
    </section>
  );
}
