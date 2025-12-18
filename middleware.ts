import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Enforce HTTPS (except on localhost) and attach security headers.
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.nextUrl.hostname;

  // Determine protocol (x-forwarded-proto for proxies like Vercel)
  const protoHeader = req.headers.get("x-forwarded-proto");
  const proto =
    protoHeader ||
    (req.nextUrl.protocol ? req.nextUrl.protocol.replace(":", "") : null);

  // Redirect to HTTPS in production-ish environments
  if (proto === "http" && hostname !== "localhost") {
    url.protocol = "https";
    return NextResponse.redirect(url);
  }

  const res = NextResponse.next();

  // Response-level headers (redundant with next.config.js, but ensures edge-level coverage)
  const headers = res.headers;
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  headers.set("Cross-Origin-Resource-Policy", "same-origin");

  // Minimal CSP here — primary CSP should be the one in next.config.js.
  const csp =
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-ancestors 'none'; form-action 'self'; base-uri 'self';";
  headers.set("Content-Security-Policy", csp);

  return res;
}

export const config = {
  matcher: "/:path*",
};
