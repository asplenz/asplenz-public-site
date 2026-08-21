import Link from 'next/link';
import { useRouter } from 'next/router';

export interface HomeSections {
  hero: {
    kicker: string;
    headline: string;
    headlineItalic: string;
    sub: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
  };
  problem: {
    kicker: string;
    title: string;
    items: { kicker: string; body: string }[];
  };
  solutions?: {
    kicker: string;
    title: string;
    cards: { title: string; desc: string; ctaLabel: string; ctaHref: string }[];
  };
  transition?: {
    text: string;
  };
  change: {
    kicker: string;
    title: string;
    sub: string;
    cards: { title: string; desc: string }[];
    ctaLabel: string;
    ctaHref: string;
  };
  stack: {
    kicker: string;
    title: string;
    sub: string;
    cards: { question: string; mode: string; desc: string }[];
    ctaLabel: string;
    ctaHref: string;
  };
  proof: {
    kicker: string;
    title: string;
    cards: { name: string; subtitle: string; desc: string; ctaLabel: string; ctaHref: string }[];
  };
  pilot: {
    kicker: string;
    title: string;
    desc: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

interface Props {
  sections: HomeSections;
}

export default function HomeLayout({ sections }: Props) {
  const router = useRouter();
  const locale = router.locale === 'fr' ? 'fr' : 'en';
  const localePrefix = locale === 'fr' ? '/fr' : '';
  const link = (href: string) => `${localePrefix}${href}`;

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="pt-6 md:pt-10 pb-16 md:pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-3" style={{ color: 'var(--accent)' }}>
                <span className="w-8 h-px inline-block" style={{ backgroundColor: 'var(--accent)' }} />
                {sections.hero.kicker}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
                {sections.hero.headline}{' '}
                <em>{sections.hero.headlineItalic}</em>
              </h1>
              <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
                {sections.hero.sub}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href={link(sections.hero.ctaPrimaryHref)}
                  className="px-6 py-3 font-medium rounded-lg transition-colors"
                  style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
                >
                  {sections.hero.ctaPrimary}
                </Link>
                <Link
                  href={link(sections.hero.ctaSecondaryHref)}
                  className="px-6 py-3 font-medium flex items-center gap-2 transition-colors"
                  style={{ color: 'var(--accent)' }}
                >
                  {sections.hero.ctaSecondary} →
                </Link>
              </div>
            </div>

            {/* Right visual : illustrated /resolve interaction */}
            <div className="animate-float">
              <div
                className="rounded-xl overflow-hidden shadow-lg"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f87171' }} />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fbbf24' }} />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#34d399' }} />
                  <span className="ml-3 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                    POST /knowledge/v1/resolve
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <StepRow
                    label="STEP 1"
                    text="Caller sends context"
                    badge="context"
                    badgeColor="blue"
                    delay={0}
                  />
                  <StepRow
                    label="STEP 2"
                    text="Knowledge evaluates applicable rules"
                    badge="deterministic"
                    badgeColor="orange"
                    delay={0.4}
                  />
                  <StepRow
                    label="STEP 3"
                    text="Returns verdict + cited rules + normative_hash"
                    badge="verdict: blocked"
                    badgeColor="green"
                    delay={0.8}
                  />
                  <StepRow
                    label="STEP 4"
                    text="Every call recorded for audit reconstruction"
                    badge="audit"
                    badgeColor="blue"
                    delay={1.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM (warm taupe band, softer contrast) ═══ */}
      <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          {sections.problem.kicker && (
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
              {sections.problem.kicker}
            </p>
          )}
          <h2 className="font-serif text-2xl md:text-4xl mb-10 leading-tight" style={{ color: 'var(--text-primary)' }}>
            {sections.problem.title}
          </h2>
          <div className="max-w-3xl space-y-8">
            {sections.problem.items.map((item, i) => (
              <div key={i}>
                <p
                  className="font-mono text-xs uppercase tracking-widest mb-2"
                  style={{ color: 'var(--accent)' }}
                >
                  {item.kicker}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTIONS (self-qualification by problem) ═══ */}
      {sections.solutions && (
        <section className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
              {sections.solutions.kicker}
            </p>
            <h2 className="font-serif text-2xl md:text-4xl mb-12 leading-tight" style={{ color: 'var(--text-primary)' }}>
              {sections.solutions.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              {sections.solutions.cards.map((card, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl flex flex-col"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <h3 className="font-serif text-xl mb-3 leading-tight" style={{ color: 'var(--text-primary)' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {card.desc}
                  </p>
                  <Link
                    href={link(card.ctaHref)}
                    className="inline-flex items-center gap-2 text-sm font-medium"
                    style={{ color: 'var(--accent)' }}
                  >
                    {card.ctaLabel} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ TRANSITION (bridge from pains to solution) ═══ */}
      {sections.transition && (
        <section className="py-14 px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <p
              className="font-serif text-xl md:text-2xl leading-snug text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              {sections.transition.text}
            </p>
          </div>
        </section>
      )}

      {/* ═══ WHAT KNOWLEDGE CHANGES (concept cards) ═══ */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
            {sections.change.kicker}
          </p>
          <h2 className="font-serif text-2xl md:text-4xl mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
            {sections.change.title}
          </h2>
          <p className="max-w-2xl mb-12" style={{ color: 'var(--text-secondary)' }}>
            {sections.change.sub}
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {sections.change.cards.map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-xl transition-colors"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--text-primary)' }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <Link
            href={link(sections.change.ctaHref)}
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: 'var(--accent)' }}
          >
            {sections.change.ctaLabel} →
          </Link>
        </div>
      </section>

      {/* ═══ WORKS WITH YOUR STACK (secondary bg, question cards) ═══ */}
      <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
            {sections.stack.kicker}
          </p>
          <h2 className="font-serif text-2xl md:text-4xl mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
            {sections.stack.title}
          </h2>
          <p className="max-w-2xl mb-12" style={{ color: 'var(--text-secondary)' }}>
            {sections.stack.sub}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {sections.stack.cards.map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <p className="text-sm mb-3 italic" style={{ color: 'var(--text-muted)' }}>
                  {card.question}
                </p>
                <div
                  className="inline-block font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded mb-3"
                  style={{
                    backgroundColor: 'var(--accent-light)',
                    color: 'var(--accent)',
                  }}
                >
                  {card.mode}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <Link
            href={link(sections.stack.ctaHref)}
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: 'var(--accent)' }}
          >
            {sections.stack.ctaLabel} →
          </Link>
        </div>
      </section>

      {/* ═══ VERTICAL PROOF (2 large cards) ═══ */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
            {sections.proof.kicker}
          </p>
          <h2 className="font-serif text-2xl md:text-4xl mb-12 leading-tight" style={{ color: 'var(--text-primary)' }}>
            {sections.proof.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {sections.proof.cards.map((card, i) => (
              <div
                key={i}
                className="p-8 rounded-xl flex flex-col"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
                  {card.name}
                </p>
                <h3 className="font-serif text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
                  {card.subtitle}
                </h3>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                  {card.desc}
                </p>
                <Link
                  href={link(card.ctaHref)}
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  {card.ctaLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PILOT CTA BAND ═══ */}
      <section className="py-16 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
            {sections.pilot.kicker}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
            {sections.pilot.title}
          </h2>
          <p className="max-w-2xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
            {sections.pilot.desc}
          </p>
          <Link
            href={link(sections.pilot.ctaHref)}
            className="inline-block px-6 py-3 font-medium rounded-lg transition-colors"
            style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
          >
            {sections.pilot.ctaLabel} →
          </Link>
        </div>
      </section>
    </>
  );
}

function StepRow({
  label,
  text,
  badge,
  badgeColor,
  delay,
}: {
  label: string;
  text: string;
  badge: string;
  badgeColor: 'blue' | 'green' | 'orange';
  delay: number;
}) {
  const badgeStyle = {
    blue: { bg: 'var(--accent-light)', fg: 'var(--accent)' },
    green: { bg: 'var(--green-light)', fg: 'var(--green)' },
    orange: { bg: 'var(--orange-light)', fg: 'var(--orange)' },
  }[badgeColor];

  return (
    <div
      className="flex items-start gap-3 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      <span
        className="font-mono text-xs font-medium shrink-0 mt-0.5"
        style={{ color: 'var(--accent)' }}
      >
        {label}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span
            className="text-xs px-2 py-0.5 rounded font-mono"
            style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.fg }}
          >
            {badge}
          </span>
        </div>
        <p className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
          {text}
        </p>
      </div>
    </div>
  );
}
