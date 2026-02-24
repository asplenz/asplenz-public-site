'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'

const docs = [
  { slug: 'getting-started', en: 'Getting Started', fr: 'D\u00e9marrage rapide', descEn: 'What is Evidence, problem it solves, minimal example, typical use cases', descFr: 'Qu\'est-ce qu\'Evidence, probl\u00e8me r\u00e9solu, exemple minimal, cas d\'usage typiques' },
  { slug: 'core-concepts', en: 'Core Concepts', fr: 'Concepts fondamentaux', descEn: 'Decision artifacts, sealing, proof artifacts, streams, immutability, verification lifecycle', descFr: 'Artefacts de d\u00e9cision, scellement, artefacts de preuve, flux, immutabilit\u00e9, cycle de v\u00e9rification' },
  { slug: 'sealing-process', en: 'Sealing Process', fr: 'Processus de scellement', descEn: 'Canonicalization, hash computation, chain linking, signing, guarantees and limitations', descFr: 'Canonicalisation, calcul de hash, cha\u00eenage, signature, garanties et limites' },
  { slug: 'verification', en: 'Verification', fr: 'V\u00e9rification', descEn: 'How to verify proof artifacts, offline verification, audit scenarios', descFr: 'Comment v\u00e9rifier les artefacts de preuve, v\u00e9rification hors-ligne, sc\u00e9narios d\'audit' },
  { slug: 'security-and-trust-model', en: 'Security & Trust Model', fr: 'S\u00e9curit\u00e9 & Mod\u00e8le de confiance', descEn: 'Trust assumptions, integrity guarantees, key lifecycle, retention', descFr: 'Hypoth\u00e8ses de confiance, garanties d\'int\u00e9grit\u00e9, cycle de vie des cl\u00e9s, r\u00e9tention' },
  { slug: 'integration', en: 'Integration', fr: 'Int\u00e9gration', descEn: 'REST API, web interface, standalone usage, integration patterns', descFr: 'API REST, interface web, usage autonome, patterns d\'int\u00e9gration' },
  { slug: 'governance-and-compliance', en: 'Governance & Compliance', fr: 'Gouvernance & Conformit\u00e9', descEn: 'Audit readiness, DORA, EU AI Act, GDPR, litigation, risk committees', descFr: 'Pr\u00e9paration d\'audit, DORA, AI Act, RGPD, litiges, comit\u00e9s de risque' },
  { slug: 'faq', en: 'FAQ', fr: 'FAQ', descEn: 'Frequently asked questions', descFr: 'Questions fr\u00e9quentes' },
]

export default function EvidenceDocsPage() {
  const { lang } = useLang()

  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
        {lang === 'en' ? 'Evidence Documentation' : 'Documentation Evidence'}
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        {lang === 'en'
          ? 'Everything you need to integrate, verify, and audit Asplenz Evidence.'
          : 'Tout ce dont vous avez besoin pour int\u00e9grer, v\u00e9rifier et auditer Asplenz Evidence.'}
      </p>
      <div className="not-prose grid gap-3">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            href={`/evidence/docs/${doc.slug}`}
            className="block p-4 border border-[var(--border)] rounded-lg bg-[var(--bg-card)] hover:border-[var(--accent)] transition-colors"
          >
            <p className="font-semibold text-[var(--text-primary)] mb-1">
              {lang === 'en' ? doc.en : doc.fr}
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              {lang === 'en' ? doc.descEn : doc.descFr}
            </p>
          </Link>
        ))}
      </div>
    </article>
  )
}
