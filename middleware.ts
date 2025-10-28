import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as parser from 'accept-language-parser';

const locales = ['fr', 'en'] as const;
const defaultLocale = 'fr';

function getLocale(req: NextRequest) {
  const header = req.headers.get('accept-language') || '';
  const langs = parser.parse(header).map(l => l.code).filter(Boolean) as string[];
  for (const l of langs) {
    if (locales.includes(l as any)) return l;
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Skip for API and static files
  if (pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname.startsWith('/favicon')) {
    return NextResponse.next();
  }
  // If missing locale prefix, redirect
  const isLocalePrefixed = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (!isLocalePrefixed) {
    const locale = getLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|static).*)'],
};
