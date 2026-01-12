import ReadingPath from '@/components/ReadingPath';
import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const readingPathItems = {
  en: [
    { href: '/en/evidence-infrastructure', title: 'Evidence Infrastructure', desc: 'What is this infrastructure and why does it exist?' },
    { href: '/en/evidence-vs-reconstruction', title: 'Evidence vs Reconstruction', desc: 'The difference between execution-time evidence and post-hoc reconstruction.' },
    { href: '/en/illustrative-scenario', title: 'Illustrative Scenario', desc: 'Two possible worlds: reconstruction vs examination.' },
    { href: '/en/horizon-technical-capabilities', title: 'Horizon: Technical Capabilities', desc: 'What does it record and how?' },
    { href: '/en/automated-decisions', title: 'Automated Decisions', desc: 'Why automated decisions create a specific evidence problem.' },
    { href: '/en/institutional-contexts', title: 'Institutional Contexts', desc: 'The institutional dimensions of execution evidence.' },
    { href: '/en/principles-boundaries', title: 'Principles & Boundaries', desc: 'Design principles and clear non-goals.' },
    { href: '/en/clarifications', title: 'Clarifications', desc: 'Common questions and precise clarifications.' },
    { href: '/en/horizon-availability', title: 'Horizon Availability', desc: 'Current status and deployment approach.' },
    { href: '/en/contact', title: 'Acceptability Dialogue', desc: 'Two ways to engage.' },
  ],
  fr: [
    { href: '/fr/evidence-infrastructure', title: 'L\'Infrastructure de Preuve', desc: 'Qu\'est-ce que cette infrastructure et pourquoi existe-t-elle ?' },
    { href: '/fr/evidence-vs-reconstruction', title: 'Preuve vs Reconstruction', desc: 'La différence entre preuve d\'exécution et reconstruction a posteriori.' },
    { href: '/fr/illustrative-scenario', title: 'Scénario Illustratif', desc: 'Deux mondes possibles : reconstruction vs examen.' },
    { href: '/fr/horizon-technical-capabilities', title: 'Horizon : Capacités Techniques', desc: 'Que consigne-t-il et par quel moyen ?' },
    { href: '/fr/automated-decisions', title: 'Décisions Automatisées', desc: 'Pourquoi l\'automatisation crée un problème de preuve spécifique.' },
    { href: '/fr/institutional-contexts', title: 'Contextes Institutionnels', desc: 'Les dimensions institutionnelles de la preuve d\'exécution.' },
    { href: '/fr/principles-boundaries', title: 'Principes & Limites', desc: 'Principes de conception et non-objectifs clairs.' },
    { href: '/fr/clarifications', title: 'Clarifications', desc: 'Questions courantes et clarifications précises.' },
    { href: '/fr/horizon-availability', title: 'Disponibilité de Horizon', desc: 'Statut actuel et approche de déploiement.' },
    { href: '/fr/contact', title: 'Dialogue d\'Acceptabilité', desc: 'Deux modes de collaboration.' },
  ],
};

export default function HomePage({
  params,
}: {
  params: { lang: Language };
}) {
  const items = readingPathItems[params.lang];
  const title = params.lang === 'en' ? 'Evidence must exist before questions.' : 'La preuve doit exister avant l\'interrogation.';
  const intro = params.lang === 'en' 
    ? 'A factual evidence layer for regulated institutions. Designed to capture and preserve, at the moment of execution, exactly what systems do and evaluate, without interfering with the operational flow.'
    : 'Une infrastructure de preuve factuelle pour les institutions régulées. Conçue pour capturer et préserver, au moment de l\'exécution, l\'action et l\'évaluation réelles des systèmes, sans interférer avec les flux opérationnels.';
  const pathTitle = params.lang === 'en' ? 'Reading path' : 'Parcours de lecture';

  return (
    <article className="max-w-3xl">
      <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '2.5rem', fontWeight: 700, letterSpacing: '-0.035em', color: '#000' }}>
        {title}
      </h1>
      <p style={{ fontSize: '1.375rem', lineHeight: 1.75, color: '#18181b', marginBottom: '2rem', maxWidth: '38rem' }}>
        {intro}
      </p>
      
      <section style={{ marginTop: '3rem' }}>
        <hr style={{ border: 'none', height: '1px', background: 'linear-gradient(to right, transparent, #e4e4e7 20%, #e4e4e7 80%, transparent)', marginBottom: '2.5rem' }} />
      </section>
      
      <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: '#000', marginBottom: '1.5rem', fontWeight: 600 }}>
        {pathTitle}
      </p>
      
      <ol style={{ 
        listStyle: 'none', 
        counterReset: 'item',
        paddingLeft: '1.5rem', 
        marginLeft: '0.25rem', 
        borderLeft: '2px solid rgba(30, 58, 138, 0.2)', 
        marginBottom: '1.5rem' 
      }}>
        {items.map((item, index) => (
          <li key={index} style={{ 
            fontSize: '1.125rem', 
            lineHeight: 1.75, 
            color: '#18181b', 
            marginBottom: '0.75rem', 
            paddingLeft: '1.25rem',
            counterIncrement: 'item',
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.75rem'
          }}>
            <span style={{ 
              fontFamily: 'monospace',
              fontSize: '0.875rem',
              color: '#a1a1aa',
              minWidth: '2rem'
            }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>
              <Link 
                href={item.href}
                style={{ 
                  color: '#18181b', 
                  textDecoration: 'none', 
                  borderBottom: '1px solid rgba(30, 58, 138, 0.3)',
                  transition: 'border-color 0.2s'
                }}
              >
                <strong>{item.title}</strong>
              </Link>
              {' : '}{item.desc}
            </span>
          </li>
        ))}
      </ol>
      
      <ReadingPath currentSlug="home" lang={params.lang} />
    </article>
  );
}
