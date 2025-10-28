import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as parser from 'accept-language-parser';

const locales = ['fr', 'en'] as const;
const defaultLocale = 'fr';

// NEW: regex pour fichiers statiques (public)
const PUBLIC_FILE = /\.(.*)$/;

function getLocale(req: NextRequest) {
  const header = req.headers.get('accept-language') || '';
  const langs = parser.parse(header).map(l => l.code).filter(Boolean) as string[];
  for (const l of langs) if (locales.includes(l as any)) return l;
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Laisser passer API, Next internals, favicon & TOUS les fichiers publics (ex: /logo.jpeg)
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    PUBLIC_FILE.test(pathname) // <= clé du correctif
  ) {
    return NextResponse.next();
  }

  // Si l’URL n’a pas déjà un préfixe de locale, rediriger
  const isLocalePrefixed = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (!isLocalePrefixed) {
    const locale = getLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Option simple : faire matcher toutes les routes (le code ci-dessus filtre déjà les assets)
export const config = {
  matcher: ['/:path*'],
};
