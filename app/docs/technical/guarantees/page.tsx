'use client'

import { useLang } from '@/lib/LangContext'

export default function GuaranteesPage() {
  const { lang } = useLang()

  const content = {
    en: {
      title: 'Guarantees',
      subtitle: 'Cryptographic and Storage Guarantees',
      audience: 'Security Architects / Auditors / Technical Leaders',
      intro: 'Horizon provides specific, verifiable guarantees at the architectural level.',
      sections: [
        {
          title: 'Storage Guarantees',
          table: [
            { property: 'Append-only', guarantee: 'Facts cannot be modified or deleted (no mechanism exists)' },
            { property: 'Hash chain', guarantee: 'Each fact links to previous via prev_hash' },
            { property: 'Tamper detection', guarantee: 'Any modification breaks chain and is detectable' },
            { property: 'Tenant isolation', guarantee: 'Facts scoped by tenant_id at data layer' },
            { property: 'Authoritative timestamps', guarantee: 'sealed_at_ms assigned by Horizon, not client' },
          ]
        },
        {
          title: 'Cryptographic Guarantees',
          table: [
            { property: 'Hash algorithm', guarantee: 'SHA-256 applied to canonical JSON' },
            { property: 'Signature algorithm', guarantee: 'Ed25519 for bundle signatures' },
            { property: 'Deterministic hashing', guarantee: 'Reproducible across implementations' },
            { property: 'Verification independence', guarantee: 'Requires only bundle + public key' },
          ]
        },
        {
          title: 'What Is NOT Guaranteed',
          items: [
            'Truth of declarations (your responsibility)',
            'Actor identity verification (your authentication)',
            'Business logic validation (your process)',
            'Availability (standard SLA applies)',
            'Key security (your operational security)',
          ]
        },
      ]
    },
    fr: {
      title: 'Garanties',
      subtitle: 'Garanties Cryptographiques et de Stockage',
      audience: 'Architectes Sécurité / Auditeurs / Responsables Techniques',
      intro: 'Horizon fournit des garanties spécifiques et vérifiables au niveau architectural.',
      sections: [
        {
          title: 'Garanties de Stockage',
          table: [
            { property: 'Append-only', guarantee: 'Les faits ne peuvent être modifiés ou supprimés (aucun mécanisme n\'existe)' },
            { property: 'Chaîne de hachage', guarantee: 'Chaque fait est lié au précédent via prev_hash' },
            { property: 'Détection d\'altération', guarantee: 'Toute modification brise la chaîne et est détectable' },
            { property: 'Isolation des tenants', guarantee: 'Faits scopés par tenant_id au niveau données' },
            { property: 'Horodatages autoritaires', guarantee: 'sealed_at_ms assigné par Horizon, pas le client' },
          ]
        },
        {
          title: 'Garanties Cryptographiques',
          table: [
            { property: 'Algorithme de hachage', guarantee: 'SHA-256 appliqué au JSON canonique' },
            { property: 'Algorithme de signature', guarantee: 'Ed25519 pour les signatures de bundle' },
            { property: 'Hachage déterministe', guarantee: 'Reproductible à travers les implémentations' },
            { property: 'Indépendance de vérification', guarantee: 'Nécessite seulement bundle + clé publique' },
          ]
        },
        {
          title: 'Ce qui N\'est PAS Garanti',
          items: [
            'Véracité des déclarations (votre responsabilité)',
            'Vérification de l\'identité des acteurs (votre authentification)',
            'Validation de la logique métier (votre processus)',
            'Disponibilité (SLA standard s\'applique)',
            'Sécurité des clés (votre sécurité opérationnelle)',
          ]
        },
      ]
    }
  }

  const t = content[lang]

  return (
    <article className="prose">
      <h1>{t.title}</h1>
      <p className="text-xl text-[var(--text-muted)] -mt-4 mb-2">{t.subtitle}</p>
      <p className="text-sm text-[var(--text-muted)] mb-8">{lang === 'en' ? 'Audience:' : 'Audience :'} {t.audience}</p>
      <p className="text-[var(--text-secondary)] mb-8 italic">{t.intro}</p>

      {t.sections.map((section, idx) => (
        <section key={idx} className="mb-10">
          <h2>{section.title}</h2>

          {section.table && (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-[var(--border)] rounded-lg overflow-hidden">
                <thead className="bg-[var(--bg-card)]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                      {lang === 'en' ? 'Property' : 'Propriété'}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                      {lang === 'en' ? 'Guarantee' : 'Garantie'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {section.table.map((row, rIdx) => (
                    <tr key={rIdx} className="bg-[var(--bg-secondary)]">
                      <td className="px-4 py-3 text-sm font-medium text-[var(--text-primary)]">{row.property}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-muted)]">{row.guarantee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.items && (
            <ul className="space-y-2">
              {section.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-3 text-[var(--text-muted)]">
                  <span className="text-yellow-400">!</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </article>
  )
}
