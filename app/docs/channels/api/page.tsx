'use client'

import { useLang } from '@/lib/LangContext'
import Link from 'next/link'

export default function ApiChannelPage() {
  const { lang } = useLang()

  const content = {
    en: {
      title: 'API Channel',
      subtitle: 'Programmatic Integration',
      status: 'Available',
      useCases: [
        'Automated systems and pipelines',
        'AI governance and decision logging',
        'Backend service integrations',
        'High-volume fact sealing',
      ],
      features: [
        { name: 'REST API', desc: 'Standard HTTP/JSON interface' },
        { name: 'Idempotency', desc: 'client_ref prevents duplicate seals' },
        { name: 'Batch support', desc: 'Multiple facts per request (coming soon)' },
        { name: 'Webhooks', desc: 'Event notifications (coming soon)' },
      ],
      example: `curl -X POST https://api.horizon.asplenz.com/streams/my-stream/facts \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tenant_id": "acme-corp",
    "actor": "system@acme-corp.com",
    "custom_payload": {
      "event": "model_prediction",
      "confidence": 0.95
    }
  }'`
    },
    fr: {
      title: 'Canal API',
      subtitle: 'Intégration Programmatique',
      status: 'Disponible',
      useCases: [
        'Systèmes automatisés et pipelines',
        'Gouvernance IA et journalisation des décisions',
        'Intégrations de services backend',
        'Scellement de faits en volume',
      ],
      features: [
        { name: 'API REST', desc: 'Interface HTTP/JSON standard' },
        { name: 'Idempotence', desc: 'client_ref empêche les scellements en double' },
        { name: 'Support batch', desc: 'Plusieurs faits par requête (bientôt)' },
        { name: 'Webhooks', desc: 'Notifications d\'événements (bientôt)' },
      ],
      example: `curl -X POST https://api.horizon.asplenz.com/streams/my-stream/facts \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tenant_id": "acme-corp",
    "actor": "system@acme-corp.com",
    "custom_payload": {
      "event": "model_prediction",
      "confidence": 0.95
    }
  }'`
    }
  }

  const t = content[lang]

  return (
    <article className="prose">
      <h1>{t.title}</h1>
      <p className="text-xl text-[var(--text-muted)] -mt-4 mb-2">{t.subtitle}</p>
      <p className="text-sm text-green-400 mb-8">{t.status}</p>

      <section className="mb-10">
        <h2>{lang === 'en' ? 'Use Cases' : 'Cas d\'Usage'}</h2>
        <ul className="space-y-2">
          {t.useCases.map((uc, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[var(--text-secondary)]">
              <span className="text-[var(--accent)]">•</span>
              {uc}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2>{lang === 'en' ? 'Features' : 'Fonctionnalités'}</h2>
        <div className="grid gap-4">
          {t.features.map((f, idx) => (
            <div key={idx} className="p-4 border border-[var(--border)] rounded-lg bg-[var(--bg-card)]">
              <h4 className="font-semibold text-[var(--text-primary)] mb-1">{f.name}</h4>
              <p className="text-[var(--text-muted)] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2>{lang === 'en' ? 'Example' : 'Exemple'}</h2>
        <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto text-sm">
          <code>{t.example}</code>
        </pre>
      </section>

      <div className="mt-8">
        <Link
          href="/docs/technical/api-reference"
          className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
        >
          {lang === 'en' ? 'See full API Reference →' : 'Voir la Référence API complète →'}
        </Link>
      </div>
    </article>
  )
}
