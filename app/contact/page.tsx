'use client'

import { useLang } from '@/lib/LangContext'
import PageLayout from '@/app/components/PageLayout'

export default function ContactPage() {
  const { lang } = useLang()

  const content = {
    en: {
      title: 'Contact & Strategic Briefing',
      subtitle: 'Discuss your use case',
      intro: 'This briefing is intended for leaders responsible for **Security (CISO)**, **Risk**, **Compliance**, and **Risk Technology** in regulated environments.',
      purpose: 'The purpose is to discuss **evidence requirements**, **post-incident scrutiny**, and **integration constraints**, *not* to sell a workflow or a tool.',
      option1: {
        title: 'Option 1: Schedule a Strategic Briefing',
        description: 'Book a **30-minute technical or risk briefing** with the Asplenz team to discuss the anchoring of your critical facts.',
        scope: { label: 'Scope', value: 'Decision evidence, post-incident proof, and audit verification.' },
        audience: { label: 'Audience', value: 'CISO, Risk, Legal, or CTO.' },
        format: { label: 'Format', value: 'Technical, factual, and strictly non-commercial.' },
        cta: 'Schedule a briefing',
        ctaUrl: 'https://app.cal.eu/asplenz/institutional-acceptability'
      },
      option2: {
        title: 'Option 2: General Inquiries',
        description: 'For administrative questions, partnership requests, or if you prefer written communication.',
        email: 'contact@asplenz.com',
        entity: 'Asplenz (Paris, France)'
      },
      sovereignty: {
        title: 'Sovereignty & Privacy by Design',
        intro: 'Horizon is built on a **Zero-Knowledge** factual architecture:',
        items: [
          { label: 'Opaque Payloads', description: 'Asplenz never has access to the content of your facts; only their cryptographic hashes and timestamps are stored in the immutable ledger.' },
          { label: 'Tenant Isolation', description: 'Your data remains strictly scoped to your organization, ensuring that evidence is siloed and protected.' },
          { label: 'Independent Verification', description: 'You can verify the integrity of your facts using your own public keys, without depending on Asplenz\'s internal systems.' }
        ]
      }
    },
    fr: {
      title: 'Contact & Briefing Stratégique',
      subtitle: 'Échanger sur un cas d\'usage',
      intro: 'Ce briefing est destiné aux responsables de la **Sécurité (RSSI)**, des **Risques**, de la **Conformité** et des **Technologies de Risque** en environnements réglementés.',
      purpose: 'L\'objectif est d\'aborder les **exigences de preuve**, les **audits post-incident** et les **contraintes d\'intégration**, *non* de vendre un workflow ou un outil.',
      option1: {
        title: 'Option 1 : Programmer un Briefing Stratégique',
        description: 'Réservez un **briefing technique ou de risque de 30 minutes** avec l\'équipe Asplenz pour discuter de l\'ancrage de vos faits critiques.',
        scope: { label: 'Périmètre', value: 'Preuve de décision, intégrité post-incident, audit et vérification.' },
        audience: { label: 'Audience', value: 'RSSI, Risk Managers, Juridique ou CTO.' },
        format: { label: 'Format', value: 'Technique, factuel et strictement non-commercial.' },
        cta: 'Programmer un briefing',
        ctaUrl: 'https://app.cal.eu/asplenz/institutional-acceptability'
      },
      option2: {
        title: 'Option 2 : Demandes Générales',
        description: 'Pour toute question administrative, demande de partenariat ou si vous préférez une communication écrite.',
        email: 'contact@asplenz.com',
        entity: 'Asplenz (Paris, France)'
      },
      sovereignty: {
        title: 'Souveraineté et Confidentialité par Construction',
        intro: 'Horizon repose sur une architecture factuelle **Zero-Knowledge** :',
        items: [
          { label: 'Payloads Opaques', description: 'Asplenz n\'a jamais accès au contenu de vos faits ; seuls leurs hachages cryptographiques et leurs horodatages sont stockés dans le registre immuable.' },
          { label: 'Isolation des Tenants', description: 'Vos données restent strictement cantonnées à votre organisation, garantissant que les preuves sont cloisonnées et protégées.' },
          { label: 'Vérification Indépendante', description: 'Vous pouvez vérifier l\'intégrité de vos faits à l\'aide de vos propres clés publiques, sans dépendre des systèmes internes d\'Asplenz.' }
        ]
      }
    }
  }

  const t = content[lang]

  const renderMarkdown = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-[var(--text-primary)]">{part.slice(2, -2)}</strong>
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i}>{part.slice(1, -1)}</em>
      }
      return part
    })
  }

  return (
    <PageLayout>
      <article className="max-w-4xl">
        {/* Header */}
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">{t.title}</h1>
        <h2 className="text-xl text-[var(--accent)] mb-6">{t.subtitle}</h2>

        <p className="text-lg text-[var(--text-secondary)] mb-4">{renderMarkdown(t.intro)}</p>
        <p className="text-[var(--text-muted)] mb-12">{renderMarkdown(t.purpose)}</p>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Option 1 - Schedule */}
          <div className="p-6 bg-[var(--bg-card)] rounded-lg border border-[var(--border)]">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{t.option1.title}</h3>
            <p className="text-[var(--text-secondary)] mb-6">{renderMarkdown(t.option1.description)}</p>

            <ul className="space-y-3 mb-6">
              <li className="text-[var(--text-secondary)]">
                <span className="text-[var(--accent)] font-medium">{t.option1.scope.label}:</span> {t.option1.scope.value}
              </li>
              <li className="text-[var(--text-secondary)]">
                <span className="text-[var(--accent)] font-medium">{t.option1.audience.label}:</span> {t.option1.audience.value}
              </li>
              <li className="text-[var(--text-secondary)]">
                <span className="text-[var(--accent)] font-medium">{t.option1.format.label}:</span> {t.option1.format.value}
              </li>
            </ul>

            <a
              href={t.option1.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t.option1.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Option 2 - Email */}
          <div className="p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)]">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{t.option2.title}</h3>
            <p className="text-[var(--text-secondary)] mb-6">{t.option2.description}</p>

            <div className="space-y-3">
              <a
                href={`mailto:${t.option2.email}`}
                className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:text-[var(--accent-hover)] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.option2.email}
              </a>
              <p className="text-[var(--text-muted)] text-sm">{t.option2.entity}</p>
            </div>
          </div>
        </div>

        {/* Sovereignty Section */}
        <div className="border-t border-[var(--border)] pt-12">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{t.sovereignty.title}</h3>
          <p className="text-[var(--text-secondary)] mb-6">{renderMarkdown(t.sovereignty.intro)}</p>

          <ul className="space-y-4">
            {t.sovereignty.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <div>
                  <span className="text-[var(--text-primary)] font-medium">{item.label}:</span>{' '}
                  <span className="text-[var(--text-secondary)]">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </PageLayout>
  )
}
