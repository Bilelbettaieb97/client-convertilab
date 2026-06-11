import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// IPs bloquées — séparées par virgule dans BLOCKED_IPS ou listées ici
const BLOCKED_IPS: string[] = (process.env.BLOCKED_IPS || "").split(",").filter(Boolean);

function getIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    ""
  );
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get("host") || "";

  // Bloquer les IPs indésirables
  if (BLOCKED_IPS.length > 0) {
    const ip = getIp(request);
    if (ip && BLOCKED_IPS.includes(ip)) {
      return new Response(null, { status: 404 });
    }
  }

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
