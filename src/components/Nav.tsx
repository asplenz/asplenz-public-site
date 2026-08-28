import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// ---------------------------------------------------------------------------
// Nav model : leaf links and dropdown groups.
//
// Product and Use cases are the two dropdown groups. Each child carries a
// short one-liner description surfaced in the mega-menu, so the menu itself
// qualifies the reader before the click.
// ---------------------------------------------------------------------------

interface NavLeaf {
  slug: string;
  labelEn: string;
  labelFr: string;
}

interface NavGroupChild {
  slug: string;
  labelEn: string;
  labelFr: string;
  descEn: string;
  descFr: string;
  // Rendered as a highlighted card at the top of the dropdown when true.
  // Use for the "hub" entry a group hangs off (e.g. /product for the
  // whole decision-loop overview above the individual capabilities).
  featured?: boolean;
}

interface NavGroup {
  groupKey: string;
  groupLabelEn: string;
  groupLabelFr: string;
  children: NavGroupChild[];
}

type NavItem = NavLeaf | NavGroup;

function isGroup(item: NavItem): item is NavGroup {
  return 'children' in item;
}

// 2026-08-28 : nav aligned with horizontal-product positioning.
// Five top-level items (Product / Use cases / Developers / Pricing / Contact).
// Use cases dropdown = the horizontal AI-powered-agents entry + concrete
// applications (Wealth suitability, KYC/KYB admission, Healthcare
// authorization). Team-persona pages (AI & Automation, Compliance & Risk,
// Security & Platform) live on /solutions and are surfaced in-content
// rather than in the primary nav — they are perspectives inside the ICP,
// not four separate ICPs. Legacy leaf slugs still resolve at their old
// URLs but are no longer in the nav ; redirects handled at next.config.js.
const NAV_ITEMS: NavItem[] = [
  {
    groupKey: 'product',
    groupLabelEn: 'Product',
    groupLabelFr: 'Produit',
    children: [
      {
        slug: 'product',
        labelEn: 'How Knowledge works',
        labelFr: 'Comment fonctionne Knowledge',
        descEn: 'The decision loop for rule-governed AI agents. Start here.',
        descFr: "La boucle de décision pour agents IA rule-governed. Démarrez ici.",
        featured: true,
      },
      {
        slug: 'product/enforcement',
        labelEn: 'Enforcement',
        labelFr: 'Enforcement',
        descEn: 'Signed authorization the tool boundary can enforce.',
        descFr: 'Autorisation signée que la frontière du tool peut faire respecter.',
      },
      {
        slug: 'product/auditability',
        labelEn: 'Auditability',
        labelFr: 'Auditability',
        descEn: 'Reconstruct the exact policy state behind a historical decision.',
        descFr: "Reconstruisez l'état policy exact derrière une décision historique.",
      },
      {
        slug: 'product/progressive-context',
        labelEn: 'Progressive context',
        labelFr: 'Progressive context',
        descEn: 'Knowledge tells the caller what fields are still needed.',
        descFr: 'Knowledge dit au caller quels champs sont encore nécessaires.',
      },
      {
        slug: 'product/integrations',
        labelEn: 'Integrations',
        labelFr: 'Integrations',
        descEn: 'MCP, Python SDK, JWKS, and how Knowledge plugs into your stack.',
        descFr: "MCP, SDK Python, JWKS, et comment Knowledge s'insère dans votre stack.",
      },
    ],
  },
  {
    groupKey: 'use-cases',
    groupLabelEn: 'Use cases',
    groupLabelFr: 'Use cases',
    children: [
      // The horizontal use case, featured first.
      {
        slug: 'solutions/build-rule-governed-agents',
        labelEn: 'AI-powered applications & agents',
        labelFr: 'Applications et agents IA',
        descEn: 'The horizontal use case : agents and AI-powered workflows that make rule-driven decisions with Knowledge as the policy authority.',
        descFr: "Le use case horizontal : agents et workflows IA qui prennent des décisions rule-driven avec Knowledge comme autorité policy.",
        featured: true,
      },
      // Knowledge in practice — concrete applications, moteur is generic.
      // Team personas (AI/Automation, Compliance/Risk, Security/Platform) live
      // on /solutions and are surfaced in-content, not in the primary nav.
      {
        slug: 'wealth',
        labelEn: 'Wealth suitability',
        labelFr: 'Wealth suitability',
        descEn: 'Reference implementation — structured-product distribution decisions.',
        descFr: 'Reference implementation — décisions de distribution de produits structurés.',
      },
      {
        slug: 'kyc',
        labelEn: 'KYC / KYB admission',
        labelFr: 'KYC / KYB admission',
        descEn: 'Example application — composite onboarding and admission decisions.',
        descFr: "Example application — décisions composites d'onboarding et d'admission.",
      },
      {
        slug: 'healthcare',
        labelEn: 'Healthcare authorization',
        labelFr: 'Healthcare authorization',
        descEn: 'Example application — coverage, authorization and administrative decisions.',
        descFr: "Example application — décisions de couverture, d'autorisation et administratives.",
      },
    ],
  },
  { slug: 'docs', labelEn: 'Developers', labelFr: 'Developers' },
  { slug: 'pricing', labelEn: 'Pricing', labelFr: 'Pricing' },
  { slug: 'contact', labelEn: 'Contact', labelFr: 'Contact' },
];

export default function Nav() {
  const router = useRouter();
  const locale = (router.locale === 'fr' ? 'fr' : 'en') as 'en' | 'fr';
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const groupRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openGroupNow = (key: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenGroup(key);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenGroup(null);
      closeTimer.current = null;
    }, 180);
  };

  const home = locale === 'fr' ? '/fr' : '/';
  const currentPath = router.asPath === '/' ? '' : router.asPath;
  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const otherLocaleHref = otherLocale === 'fr' ? `/fr${currentPath}` : currentPath || '/';

  const leafLabel = (item: NavLeaf) => (locale === 'fr' ? item.labelFr : item.labelEn);
  const groupLabel = (item: NavGroup) =>
    locale === 'fr' ? item.groupLabelFr : item.groupLabelEn;
  const childLabel = (c: NavGroupChild) => (locale === 'fr' ? c.labelFr : c.labelEn);
  const childDesc = (c: NavGroupChild) => (locale === 'fr' ? c.descFr : c.descEn);

  const isActive = (slug: string) => {
    // 2026-08-26 : catch-all route `/[...slug]` uses router.query.slug
    // as an array of segments. Compare joined value.
    if (router.pathname === `/${slug}`) return true;
    if (router.pathname === '/[...slug]') {
      const segments = router.query.slug;
      const joined = Array.isArray(segments) ? segments.join('/') : segments;
      if (joined === slug) return true;
    }
    return false;
  };
  const isGroupActive = (group: NavGroup) => group.children.some((c) => isActive(c.slug));

  // Close the open dropdown on outside click or Escape.
  useEffect(() => {
    if (!openGroup) return;
    const onDown = (e: MouseEvent) => {
      const el = groupRefs.current[openGroup];
      if (el && !el.contains(e.target as Node)) setOpenGroup(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenGroup(null);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [openGroup]);

  const closeAllMobile = () => {
    setDrawerOpen(false);
    setOpenMobileGroup(null);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 border-b z-50"
      style={{
        backgroundColor: 'var(--nav-bg)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + brand */}
        <Link href={home} className="flex items-center gap-3 group" aria-label="Asplenz home">
          <img src="/images/log2_normal.png" alt="Asplenz" className="h-7 w-auto opacity-90" />
          <span
            className="font-semibold text-sm uppercase tracking-widest"
            style={{ color: 'var(--text-primary)' }}
          >
            Asplenz
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            if (isGroup(item)) {
              const active = isGroupActive(item);
              const isOpen = openGroup === item.groupKey;
              return (
                <div
                  key={item.groupKey}
                  ref={(el) => {
                    groupRefs.current[item.groupKey] = el;
                  }}
                  className="relative"
                  onMouseEnter={() => openGroupNow(item.groupKey)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    onClick={() => (isOpen ? setOpenGroup(null) : openGroupNow(item.groupKey))}
                    className="flex items-center gap-1 text-sm font-medium transition-colors"
                    style={{
                      color: active ? 'var(--accent)' : 'var(--text-secondary)',
                    }}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                  >
                    {groupLabel(item)}
                    <svg
                      className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M3 4.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[380px]"
                      onMouseEnter={() => openGroupNow(item.groupKey)}
                      onMouseLeave={scheduleClose}
                    >
                      {/* Invisible bridge : keeps the hover continuous
                          between the trigger and the panel, so mouseleave
                          does not fire while the pointer transits the gap. */}
                      <div className="h-2" aria-hidden="true" />
                      <div
                        className="rounded-lg shadow-lg overflow-hidden"
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <ul className="py-2">
                          {item.children.map((c) => (
                            <li
                              key={c.slug}
                              style={
                                c.featured
                                  ? {
                                      backgroundColor: 'var(--accent-light)',
                                      borderBottom: '1px solid var(--border-light)',
                                    }
                                  : undefined
                              }
                            >
                              <Link
                                href={`/${c.slug}`}
                                locale={locale}
                                className="block px-4 py-3 transition-colors hover:bg-[var(--bg-card-hover)]"
                                onClick={() => setOpenGroup(null)}
                              >
                                <div
                                  className={c.featured ? 'text-sm font-bold' : 'text-sm font-semibold'}
                                  style={{
                                    color: isActive(c.slug)
                                      ? 'var(--accent)'
                                      : c.featured
                                      ? 'var(--accent)'
                                      : 'var(--text-primary)',
                                  }}
                                >
                                  {childLabel(c)}
                                </div>
                                <div
                                  className="text-xs mt-0.5 leading-snug"
                                  style={{
                                    color: c.featured
                                      ? 'var(--text-secondary)'
                                      : 'var(--text-muted)',
                                  }}
                                >
                                  {childDesc(c)}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
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
                {leafLabel(item)}
              </Link>
            );
          })}
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
            onClick={() => setDrawerOpen((o) => !o)}
            className="md:hidden p-2 rounded"
            style={{ color: 'var(--text-secondary)' }}
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {drawerOpen ? (
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
      {drawerOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border)',
          }}
        >
          <nav className="max-w-6xl mx-auto px-6 py-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              if (isGroup(item)) {
                const active = isGroupActive(item);
                const isOpen = openMobileGroup === item.groupKey;
                return (
                  <div key={item.groupKey} className="py-1">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileGroup((cur) => (cur === item.groupKey ? null : item.groupKey))
                      }
                      className="w-full flex items-center justify-between py-2 text-sm font-medium transition-colors"
                      style={{
                        color: active ? 'var(--accent)' : 'var(--text-secondary)',
                      }}
                      aria-expanded={isOpen}
                    >
                      <span>{groupLabel(item)}</span>
                      <svg
                        className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <path d="M3 4.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {isOpen && (
                      <ul className="pl-3 pb-2 space-y-1">
                        {item.children.map((c) => (
                          <li
                            key={c.slug}
                            className={c.featured ? 'rounded-md px-2 -mx-2 mb-1' : ''}
                            style={
                              c.featured
                                ? { backgroundColor: 'var(--accent-light)' }
                                : undefined
                            }
                          >
                            <Link
                              href={`/${c.slug}`}
                              locale={locale}
                              onClick={closeAllMobile}
                              className="block py-2"
                            >
                              <div
                                className={c.featured ? 'text-sm font-bold' : 'text-sm font-semibold'}
                                style={{
                                  color: isActive(c.slug)
                                    ? 'var(--accent)'
                                    : c.featured
                                    ? 'var(--accent)'
                                    : 'var(--text-primary)',
                                }}
                              >
                                {childLabel(c)}
                              </div>
                              <div
                                className="text-xs mt-0.5 leading-snug"
                                style={{
                                  color: c.featured
                                    ? 'var(--text-secondary)'
                                    : 'var(--text-muted)',
                                }}
                              >
                                {childDesc(c)}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  locale={locale}
                  onClick={closeAllMobile}
                  className="block py-2 text-sm font-medium transition-colors"
                  style={{
                    color: isActive(item.slug) ? 'var(--accent)' : 'var(--text-secondary)',
                  }}
                >
                  {leafLabel(item)}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
