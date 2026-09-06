import Head from 'next/head';
import { useRouter } from 'next/router';
import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  fullBleedMain?: boolean;
  theme?: string | null;
}

const SITE_ORIGIN = 'https://www.asplenz.com';

/**
 * Build the language-agnostic path from the current asPath.
 * Strips a leading /fr (French locale) and any legacy /en prefix so
 * that we can compose the EN and FR canonical URLs cleanly.
 * Also normalises the empty root to '/'.
 */
function stripLocalePrefix(asPath: string): string {
  // asPath may include a query string ; drop it for canonical.
  const pathOnly = asPath.split('?')[0].split('#')[0];
  if (pathOnly === '/fr' || pathOnly === '/en') return '/';
  if (pathOnly.startsWith('/fr/')) return pathOnly.slice(3);
  if (pathOnly.startsWith('/en/')) return pathOnly.slice(3);
  return pathOnly || '/';
}

export default function Layout({ title, description, children, fullBleedMain = false, theme }: LayoutProps) {
  const router = useRouter();
  const locale = router.locale === 'fr' ? 'fr' : 'en';
  const bare = stripLocalePrefix(router.asPath || '/');
  // English content lives at the root (defaultLocale=en). French
  // content lives under /fr. Never emit /en URLs in canonical or
  // hreflang - /en/* is 301-redirected to /* (see next.config.js).
  const enUrl = `${SITE_ORIGIN}${bare === '/' ? '/' : bare}`;
  const frUrl = `${SITE_ORIGIN}/fr${bare === '/' ? '' : bare}`;
  const canonical = locale === 'fr' ? frUrl : enUrl;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/log2_normal.png" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="fr" href={frUrl} />
        <link rel="alternate" hrefLang="x-default" href={enUrl} />
      </Head>
      <div
        className="min-h-screen"
        data-theme={theme || undefined}
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <Nav />
        <main className={fullBleedMain ? 'pt-14' : 'pt-24 pb-20'}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
