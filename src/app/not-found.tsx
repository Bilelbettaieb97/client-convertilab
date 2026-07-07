import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "Cette page n'existe pas. Retournez à l'accueil pour découvrir nos services de création web et marketing digital.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Page introuvable</p>
        <Link
          href="/"
          className="text-primary hover:text-primary/80 underline"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
