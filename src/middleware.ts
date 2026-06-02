import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get("host") || "";

  // 301 propre sans header Refresh (Response brute, pas NextResponse.redirect)
  if (host === "convertilab.com") {
    return new Response(null, {
      status: 301,
      headers: { Location: `https://www.convertilab.com${pathname}${search}` },
    });
  }

  if (host === "convertilab.fr") {
    return new Response(null, {
      status: 301,
      headers: { Location: `https://www.convertilab.fr${pathname}${search}` },
    });
  }

  // Redirect /case-study/:slug → /etude-de-cas/:slug
  if (pathname.startsWith("/case-study/")) {
    const slug = pathname.replace("/case-study/", "");
    return NextResponse.redirect(
      new URL(`/etude-de-cas/${slug}`, request.url),
      301
    );
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, sitemap.xml
     * - public files with extensions
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)",
  ],
};
