'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'

const docs = [
  { slug: 'getting-started', en: 'Getting Started', fr: 'D\u00e9marrage rapide', descEn: 'What is Knowledge, core problem, concept overview, quickstart, example workflow', descFr: 'Qu\'est-ce que Knowledge, probl\u00e8me fondamental, aper\u00e7u des concepts, d\u00e9marrage rapide, workflow exemple' },
  { slug: 'core-concepts', en: 'Core Concepts', fr: 'Concepts fondamentaux', descEn: 'Decisions, Invariants, Rules, Overrides, Approvals, References', descFr: 'D\u00e9cisions, Invariants, R\u00e8gles, D\u00e9rogations, Approbations, R\u00e9f\u00e9rences' },
  { slug: 'evaluation-model', en: 'Evaluation Model', fr: 'Mod\u00e8le d\'\u00e9valuation', descEn: 'Normative state, scope resolution, determinism, override mechanics, 3 outcomes', descFr: '\u00c9tat normatif, r\u00e9solution de scope, d\u00e9terminisme, m\u00e9canique des d\u00e9rogations, 3 r\u00e9sultats' },
  { slug: 'ci-integration', en: 'CI/CD Integration', fr: 'Int\u00e9gration CI/CD', descEn: 'Verifier concept, gating modes, Implementation Report, compliance report', descFr: 'Concept du Verifier, modes de contr\u00f4le, Implementation Report, rapport de conformit\u00e9' },
  { slug: 'agent-integration', en: 'Agent Integration', fr: 'Int\u00e9gration agents', descEn: 'Agent flow, best practices, tool summary', descFr: 'Flux agent, bonnes pratiques, r\u00e9sum\u00e9 des outils' },
  { slug: 'security-and-permissions', en: 'Security & Permissions', fr: 'S\u00e9curit\u00e9 & Permissions', descEn: 'API auth, scope isolation, role model, approval authority, auditability', descFr: 'Authentification API, isolation de scope, mod\u00e8le de r\u00f4les, autorit\u00e9 d\'approbation, auditabilit\u00e9' },
  { slug: 'faq', en: 'FAQ', fr: 'FAQ', descEn: 'Frequently asked questions', descFr: 'Questions fr\u00e9quentes' },
]

export default function KnowledgeDocsPage() {
  const { lang } = useLang()

  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
        {lang === 'en' ? 'Knowledge Documentation' : 'Documentation Knowledge'}
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        {lang === 'en'
          ? 'Everything you need to understand, integrate, and operate Asplenz Knowledge.'
          : 'Tout ce dont vous avez besoin pour comprendre, int\u00e9grer et op\u00e9rer Asplenz Knowledge.'}
      </p>
      <div className="not-prose grid gap-3">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            href={`/knowledge/docs/${doc.slug}`}
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
