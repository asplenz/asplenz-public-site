'use client'

import { useLang } from '@/lib/LangContext'

export default function EmailChannelPage() {
  const { lang } = useLang()

  const content = {
    en: {
      title: 'Email Channel',
      subtitle: 'Seal Facts by Sending Emails',
      status: 'Available',
      useCases: [
        'Mobile decisions captured on-the-go',
        'Urgent captures during incidents',
        'Executive approvals from any device',
        'Low-friction fact sealing',
      ],
      howItWorks: [
        { step: '1', title: 'Send email', desc: 'Send to your stream-specific Horizon address' },
        { step: '2', title: 'Subject becomes declaration', desc: 'Email subject is sealed as the fact declaration' },
        { step: '3', title: 'Body becomes payload', desc: 'Email body is sealed as custom_payload' },
        { step: '4', title: 'Attachments hashed', desc: 'File SHA-256 hashes sealed (content not stored)' },
        { step: '5', title: 'Confirmation sent', desc: 'Receive seal confirmation with fact_id' },
      ],
      security: [
        'Sender verified via DKIM/SPF/DMARC',
        'Actor derived from verified email address',
        'Attachments: only hashes stored, never content',
        'TLS encryption in transit',
      ],
      note: 'Email channel provides identical cryptographic guarantees as API channel.'
    },
    fr: {
      title: 'Canal Email',
      subtitle: 'Sceller des Faits par Email',
      status: 'Disponible',
      useCases: [
        'Décisions mobiles capturées en déplacement',
        'Captures urgentes pendant les incidents',
        'Approbations exécutives depuis tout appareil',
        'Scellement de faits à faible friction',
      ],
      howItWorks: [
        { step: '1', title: 'Envoyer l\'email', desc: 'Envoyer à votre adresse Horizon spécifique au stream' },
        { step: '2', title: 'Le sujet devient déclaration', desc: 'Le sujet de l\'email est scellé comme déclaration du fait' },
        { step: '3', title: 'Le corps devient payload', desc: 'Le corps de l\'email est scellé comme custom_payload' },
        { step: '4', title: 'Pièces jointes hachées', desc: 'Hachages SHA-256 des fichiers scellés (contenu non stocké)' },
        { step: '5', title: 'Confirmation envoyée', desc: 'Recevoir la confirmation de scellement avec fact_id' },
      ],
      security: [
        'Expéditeur vérifié via DKIM/SPF/DMARC',
        'Acteur dérivé de l\'adresse email vérifiée',
        'Pièces jointes : seuls les hachages sont stockés, jamais le contenu',
        'Chiffrement TLS en transit',
      ],
      note: 'Le canal email fournit des garanties cryptographiques identiques au canal API.'
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
        <h2>{lang === 'en' ? 'How It Works' : 'Comment ça Marche'}</h2>
        <div className="space-y-4">
          {t.howItWorks.map((step, idx) => (
            <div key={idx} className="flex gap-4 p-4 border border-[var(--border)] rounded-lg bg-[var(--bg-card)]">
              <span className="text-[var(--accent)] font-mono text-lg font-bold">{step.step}</span>
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-1">{step.title}</h4>
                <p className="text-[var(--text-muted)] text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2>{lang === 'en' ? 'Security' : 'Sécurité'}</h2>
        <ul className="space-y-2">
          {t.security.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[var(--text-secondary)]">
              <span className="text-green-400">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <p className="text-[var(--text-muted)] text-sm italic border-l-4 border-[var(--accent)] pl-4">
        {t.note}
      </p>
    </article>
  )
}
