import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  const locale = router.locale === 'fr' ? 'fr' : 'en';
  const year = new Date().getFullYear();

  const copy = {
    en: {
      tagline: 'The governed policy layer for your applications, workflows and AI agents.',
      contactLabel: 'Contact',
      copyright: `© ${year} Asplenz. All rights reserved.`,
    },
    fr: {
      tagline: 'La couche de policy gouvernée pour vos applications, workflows et agents IA.',
      contactLabel: 'Contact',
      copyright: `© ${year} Asplenz. Tous droits réservés.`,
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
        <div className="text-sm">
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
    </footer>
  );
}
