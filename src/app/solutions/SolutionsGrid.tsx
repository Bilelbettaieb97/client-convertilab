"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SectorItem {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  features: string[];
}

export default function SolutionsGrid({ sectors }: { sectors: SectorItem[] }) {
  const [search, setSearch] = useState("");

  const filtered = sectors.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Barre de recherche */}
      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Rechercher votre secteur..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 pr-4 py-6 text-base rounded-xl border-gray-200 shadow-sm focus:border-purple-400 focus:ring-purple-400"
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-3">
          {filtered.length} secteur{filtered.length > 1 ? "s" : ""} disponible{filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Grille */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((sector) => (
            <Link
              key={sector.slug}
              href={`/solutions/${sector.slug}`}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:border-purple-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{sector.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                Site Web {sector.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{sector.description}</p>
              <ul className="space-y-1.5 mb-6">
                {sector.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 group-hover:gap-2 transition-all">
                Découvrir <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">Aucun secteur trouvé pour &ldquo;{search}&rdquo;</p>
          <p className="text-gray-400 text-sm">Essayez un autre terme ou <Link href="/contact" className="text-purple-600 underline">contactez-nous</Link> pour un devis personnalisé.</p>
        </div>
      )}
    </>
  );
}
