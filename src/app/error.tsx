"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Une erreur est survenue</h1>
        <p className="text-gray-600 mb-6">{error.message || "Quelque chose s'est mal passé. Veuillez réessayer."}</p>
        <div className="flex gap-3 justify-center">
          <Button onClick={reset} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            Réessayer
          </Button>
          <Button variant="outline" onClick={() => window.location.href = "/"}>
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </div>
  );
}
