import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /case-study/:slug → /etude-de-cas/:slug (301 permanent)
  if (pathname.startsWith("/case-study/")) {
    const slug = pathname.replace("/case-study/", "");
    return NextResponse.redirect(
      new URL(`/etude-de-cas/${slug}`, request.url),
      301
    );
  }
}

export const config = {
  matcher: ["/case-study/:path*"],
};
