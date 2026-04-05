"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Pencil,
  Trash2,
  LogOut,
  FileText,
  Loader2,
} from "lucide-react";

interface ArticleRow {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  published_at: string | null;
  category: string | null;
  created_at: string;
}

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const [articles, setArticles] = useState<ArticleRow[]>([]);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      setLoading(false);
    });
  }, []);

  const fetchArticles = useCallback(async () => {
    const { data } = await supabase
      .from("blog_articles")
      .select("id, title, slug, published, published_at, category, created_at")
      .order("created_at", { ascending: false });
    if (data) setArticles(data);
  }, []);

  useEffect(() => {
    if (user) fetchArticles();
  }, [user, fetchArticles]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setAuthError(error.message);
    } else {
      const { data } = await supabase.auth.getUser();
      setUser(data.user ?? null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setArticles([]);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cet article ?")) return;
    setDeleting(id);
    await supabase.from("blog_articles").delete().eq("id", id);
    setArticles((prev) => prev.filter((a) => a.id !== id));
    setDeleting(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Login form
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <Card className="w-full max-w-md">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-t-lg">
            <h1 className="text-2xl font-bold text-white text-center">
              Admin ConvertiLab
            </h1>
            <p className="text-white/70 text-center text-sm mt-1">
              Connectez-vous pour gerer le blog
            </p>
          </div>
          <CardContent className="p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@convertilab.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Mot de passe
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Votre mot de passe"
                  required
                />
              </div>
              {authError && (
                <p className="text-sm text-red-500">{authError}</p>
              )}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
              >
                Se connecter
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6" />
            <h1 className="text-xl font-bold">Admin Blog</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/70 hidden sm:inline">
              {user.email}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-white hover:bg-white/20"
            >
              <LogOut className="w-4 h-4 mr-1" />
              Deconnexion
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Actions */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Articles</h2>
            <p className="text-muted-foreground text-sm">
              {articles.length} article{articles.length !== 1 ? "s" : ""}
            </p>
          </div>
          <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90">
            <Link href="/admin/articles/new">
              <Plus className="w-4 h-4 mr-2" />
              Nouvel article
            </Link>
          </Button>
        </div>

        {/* Articles list */}
        {articles.length === 0 ? (
          <Card className="p-12 text-center">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Aucun article pour le moment.</p>
            <Button asChild className="mt-4">
              <Link href="/admin/articles/new">Creer le premier article</Link>
            </Button>
          </Card>
        ) : (
          <div className="space-y-3">
            {articles.map((article) => (
              <Card key={article.id} className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground truncate">
                        {article.title}
                      </h3>
                      <Badge
                        variant={article.published ? "default" : "secondary"}
                        className={
                          article.published
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-0"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-0"
                        }
                      >
                        {article.published ? "Publie" : "Brouillon"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      {article.category && (
                        <span>{article.category}</span>
                      )}
                      <span>
                        {new Date(
                          article.published_at || article.created_at
                        ).toLocaleDateString("fr-FR")}
                      </span>
                      <span className="text-xs text-muted-foreground/50">
                        /{article.slug}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/articles/${article.id}/edit`}>
                        <Pencil className="w-4 h-4 mr-1" />
                        Editer
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(article.id)}
                      disabled={deleting === article.id}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                    >
                      {deleting === article.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <Trash2 className="w-4 h-4 mr-1" />
                          Supprimer
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
