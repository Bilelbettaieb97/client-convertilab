"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops !</h1>
          <p className="text-gray-600 mb-6">{error.message || "Une erreur inattendue est survenue."}</p>
          <button onClick={reset} className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
