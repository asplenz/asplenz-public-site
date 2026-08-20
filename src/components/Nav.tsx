import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItem {
  slug: string;
  labelEn: string;
  labelFr: string;
}

const NAV_ITEMS: NavItem[] = [
  { slug: 'wealth', labelEn: 'Wealth', labelFr: 'Wealth' },
  { slug: 'kyc', labelEn: 'KYC / KYB', labelFr: 'KYC / KYB' },
  { slug: 'how-it-works', labelEn: 'How it works', labelFr: 'Comment ça marche' },
  { slug: 'vs', labelEn: 'Compare', labelFr: 'Comparer' },
  { slug: 'governance', labelEn: 'Governance', labelFr: 'Gouvernance' },
  { slug: 'ai-agents', labelEn: 'AI agents', labelFr: 'Agents IA' },
  { slug: 'stack', labelEn: 'Your stack', labelFr: 'Votre stack' },
  { slug: 'pilot', labelEn: 'Design partner', labelFr: 'Design partner' },
];

export default function Nav() {
  const router = useRouter();
  const locale = (router.locale === 'fr' ? 'fr' : 'en') as 'en' | 'fr';
  const [open, setOpen] = useState(false);

  const label = (item: NavItem) => (locale === 'fr' ? item.labelFr : item.labelEn);
  const home = locale === 'fr' ? '/fr' : '/';

  const currentPath = router.asPath === '/' ? '' : router.asPath;
  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const otherLocaleHref = otherLocale === 'fr' ? `/fr${currentPath}` : currentPath || '/';

  const isActive = (slug: string) => {
    if (router.pathname === `/${slug}`) return true;
    if (router.pathname === '/[slug]' && router.query.slug === slug) return true;
    return false;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 border-b z-50"
      style={{
        backgroundColor: 'rgba(245, 242, 236, 0.95)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + brand */}
        <Link href={home} className="flex items-center gap-3 group" aria-label="Asplenz home">
          <img
            src="/images/log2_normal.png"
            alt="Asplenz"
            className="h-7 w-auto opacity-90"
          />
          <span
            className="font-semibold text-sm uppercase tracking-widest"
            style={{ color: 'var(--text-primary)' }}
          >
            Asplenz
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              locale={locale}
              className={`text-sm font-medium transition-colors ${
                isActive(item.slug) ? '' : 'hover:text-[var(--accent)]'
              }`}
              style={{
                color: isActive(item.slug) ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >
              {label(item)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language toggle - always visible (desktop and mobile) */}
          <Link
            href={otherLocaleHref}
            locale={otherLocale}
            className="inline-block px-3 py-1.5 text-sm font-medium border rounded transition-all uppercase tracking-wide"
            style={{
              color: 'var(--text-muted)',
              borderColor: 'var(--border-light)',
            }}
            aria-label={otherLocale === 'fr' ? 'Passer en français' : 'Switch to English'}
          >
            {otherLocale}
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded"
            style={{ color: 'var(--text-secondary)' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border)',
          }}
        >
          <nav className="max-w-6xl mx-auto px-6 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                locale={locale}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium transition-colors"
                style={{
                  color: isActive(item.slug) ? 'var(--accent)' : 'var(--text-secondary)',
                }}
              >
                {label(item)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
