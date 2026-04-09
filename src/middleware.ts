import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") || "";

  // 1. Force www.convertilab.com (308 permanent)
  if (host === "convertilab.com") {
    const url = request.nextUrl.clone();
    url.host = "www.convertilab.com";
    return NextResponse.redirect(url, 308);
  }

  // 2. Redirect /case-study/:slug → /etude-de-cas/:slug (301 permanent)
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
