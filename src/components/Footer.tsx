import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  const locale = router.locale === 'fr' ? 'fr' : 'en';
  const year = new Date().getFullYear();
  const localePrefix = locale === 'fr' ? '/fr' : '';

  const copy = {
    en: {
      tagline: 'The governed policy layer for your applications, workflows and AI agents.',
      contactLabel: 'Contact',
      copyright: `© ${year} Asplenz. All rights reserved.`,
      resourcesLabel: 'Resources',
      links: [
        { href: '/vs', label: 'Compare' },
        { href: '/governance', label: 'Governance' },
        { href: '/security', label: 'Security' },
        { href: '/developers', label: 'Developers' },
      ],
    },
    fr: {
      tagline: 'La couche de policy gouvernée pour vos applications, workflows et agents IA.',
      contactLabel: 'Contact',
      copyright: `© ${year} Asplenz. Tous droits réservés.`,
      resourcesLabel: 'Ressources',
      links: [
        { href: '/vs', label: 'Comparer' },
        { href: '/governance', label: 'Gouvernance' },
        { href: '/security', label: 'Security' },
        { href: '/developers', label: 'Developers' },
      ],
    },
  }[locale];

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-md">
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {copy.tagline}
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
            {copy.copyright}
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-3 text-sm">
          <div className="flex items-center gap-4">
            <span style={{ color: 'var(--text-muted)' }}>{copy.resourcesLabel}</span>
            {copy.links.map((l) => (
              <Link
                key={l.href}
                href={`${localePrefix}${l.href}`}
                className="font-medium"
                style={{ color: 'var(--accent)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)' }}>{copy.contactLabel} : </span>
            <a
              href="mailto:contact@asplenz.com"
              className="font-medium"
              style={{ color: 'var(--accent)' }}
            >
              contact@asplenz.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
