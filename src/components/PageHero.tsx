import Link from 'next/link';
import { useRouter } from 'next/router';

interface PageHeroProps {
  kicker?: string;
  title: string;
  sub?: string;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  contactEmail?: string | null;
}

/**
 * Hero used at the top of every non-home page. Single-column, left-aligned,
 * max-w-3xl to align with the prose column that follows below.
 */
export default function PageHero({ kicker, title, sub, ctaLabel, ctaHref, contactEmail }: PageHeroProps) {
  const router = useRouter();
  const locale = router.locale === 'fr' ? 'fr' : 'en';
  const localePrefix = locale === 'fr' ? '/fr' : '';

  const href = ctaHref
    ? ctaHref.startsWith('/')
      ? `${localePrefix}${ctaHref}`
      : ctaHref
    : null;

  return (
    <section className="pt-6 md:pt-10 pb-2">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        {kicker && (
          <p
            className="font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-3"
            style={{ color: 'var(--accent)' }}
          >
            <span
              className="w-8 h-px inline-block"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            {kicker}
          </p>
        )}
        <h1
          className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h1>
        {sub && (
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {sub}
          </p>
        )}
        {ctaLabel && href && (
          <div className="mt-8">
            <Link
              href={href}
              className="inline-block px-6 py-3 font-medium rounded-lg transition-colors"
              style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
            >
              {ctaLabel}
            </Link>
            {contactEmail && (
              <p
                className="mt-3 text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                email :{' '}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  {contactEmail}
                </a>
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
