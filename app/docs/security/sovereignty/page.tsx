'use client'

import { useLang } from '@/lib/LangContext'

export default function SovereigntyPage() {
  const { lang } = useLang()

  const content = {
    en: {
      title: 'Security & Sovereignty',
      subtitle: 'Architecture for Trust',
      audience: 'RSSI / DSI / Security Architects / Compliance Officers',
      intro: 'This document explains how Horizon\'s architecture ensures data integrity, tenant isolation, and supports sovereign deployment requirements.',
      sections: [
        {
          title: 'Append-Only Architecture',
          content: 'The inability to modify or delete sealed facts is not a configuration option or policy decision. It is an architectural constraint enforced at every layer.',
          table: [
            { operation: 'Create fact', behavior: 'Allowed' },
            { operation: 'Read fact', behavior: 'Allowed' },
            { operation: 'Update fact', behavior: 'No mechanism exists' },
            { operation: 'Delete fact', behavior: 'No mechanism exists' },
          ],
          note: 'There is no admin override, no maintenance mode, no "soft delete". The append-only property is intrinsic to the system design.'
        },
        {
          title: 'Hash Chain Enforcement',
          content: 'Every fact is cryptographically linked to its predecessor. Any modification to a fact changes its fact_hash, breaks the prev_hash link from the next fact, and is immediately detectable by chain verification. This creates mathematical proof of integrity, not just access control.'
        },
        {
          title: 'Tenant Isolation',
          content: 'All data is scoped by tenant_id at the architectural level. Tenant A cannot list, read, verify, or access Tenant B\'s streams, facts, chains, or bundles. This isolation is enforced at the data layer, not just the API layer. Each tenant\'s streams maintain independent hash chains.'
        },
        {
          title: 'Privacy by Design',
          content: 'The custom_payload field is opaque to Horizon. Schema is not enforced, validation is not performed, indexing does not occur, and interpretation is not attempted. Horizon stores your payload exactly as provided.'
        },
        {
          title: 'Cryptographic Foundation',
          content: 'Facts are hashed using SHA-256 applied to a canonical JSON representation. Proof bundles are signed using Ed25519 with 256-bit security level. Bundles are self-contained: verification requires only the bundle itself and Horizon\'s public key. No network access to Horizon is required for verification.'
        },
        {
          title: 'Proof Ownership',
          content: 'Once a proof bundle is exported, it becomes your autonomous property. No dependency on Horizon, portable evidence in any jurisdiction, eternal validity even if Horizon ceases to exist, and third-party verifiable by any auditor, court, or regulator.'
        },
        {
          title: 'Deployment Options',
          items: [
            { name: 'SaaS', desc: 'Horizon-managed infrastructure, automatic updates, SOC 2 and GDPR-ready' },
            { name: 'On-Premise', desc: 'Your infrastructure, full control, your jurisdiction' },
            { name: 'Air-Gapped', desc: 'No external connectivity, manual updates, fully offline verification' },
          ]
        },
      ]
    },
    fr: {
      title: 'Sécurité & Souveraineté',
      subtitle: 'Architecture pour la Confiance',
      audience: 'RSSI / DSI / Architectes Sécurité / Responsables Conformité',
      intro: 'Ce document explique comment l\'architecture d\'Horizon garantit l\'intégrité des données, l\'isolation des tenants et supporte les exigences de déploiement souverain.',
      sections: [
        {
          title: 'Architecture Append-Only',
          content: 'L\'impossibilité de modifier ou supprimer des faits scellés n\'est pas une option de configuration ou une décision de politique. C\'est une contrainte architecturale appliquée à chaque niveau.',
          table: [
            { operation: 'Créer un fait', behavior: 'Autorisé' },
            { operation: 'Lire un fait', behavior: 'Autorisé' },
            { operation: 'Modifier un fait', behavior: 'Aucun mécanisme n\'existe' },
            { operation: 'Supprimer un fait', behavior: 'Aucun mécanisme n\'existe' },
          ],
          note: 'Il n\'y a pas de contournement admin, pas de mode maintenance, pas de "soft delete". La propriété append-only est intrinsèque à la conception du système.'
        },
        {
          title: 'Application de la Chaîne de Hachage',
          content: 'Chaque fait est cryptographiquement lié à son prédécesseur. Toute modification d\'un fait change son fact_hash, brise le lien prev_hash du fait suivant, et est immédiatement détectable par vérification de chaîne. Cela crée une preuve mathématique d\'intégrité, pas seulement un contrôle d\'accès.'
        },
        {
          title: 'Isolation des Tenants',
          content: 'Toutes les données sont scopées par tenant_id au niveau architectural. Le Tenant A ne peut pas lister, lire, vérifier ou accéder aux streams, faits, chaînes ou bundles du Tenant B. Cette isolation est appliquée au niveau données, pas seulement au niveau API. Chaque tenant maintient des chaînes de hachage indépendantes.'
        },
        {
          title: 'Privacy by Design',
          content: 'Le champ custom_payload est opaque pour Horizon. Le schéma n\'est pas imposé, la validation n\'est pas effectuée, l\'indexation n\'a pas lieu, et l\'interprétation n\'est pas tentée. Horizon stocke votre payload exactement tel que fourni.'
        },
        {
          title: 'Fondation Cryptographique',
          content: 'Les faits sont hachés avec SHA-256 appliqué à une représentation JSON canonique. Les bundles de preuve sont signés avec Ed25519 avec un niveau de sécurité de 256 bits. Les bundles sont autonomes : la vérification ne nécessite que le bundle lui-même et la clé publique d\'Horizon. Aucun accès réseau à Horizon n\'est requis pour la vérification.'
        },
        {
          title: 'Propriété de la Preuve',
          content: 'Une fois qu\'un bundle de preuve est exporté, il devient votre propriété autonome. Aucune dépendance envers Horizon, preuve portable dans toute juridiction, validité éternelle même si Horizon cesse d\'exister, et vérifiable par tout tiers auditeur, tribunal ou régulateur.'
        },
        {
          title: 'Options de Déploiement',
          items: [
            { name: 'SaaS', desc: 'Infrastructure gérée par Horizon, mises à jour automatiques, SOC 2 et GDPR-ready' },
            { name: 'On-Premise', desc: 'Votre infrastructure, contrôle total, votre juridiction' },
            { name: 'Air-Gapped', desc: 'Aucune connectivité externe, mises à jour manuelles, vérification entièrement hors ligne' },
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
          <p className="text-[var(--text-secondary)] mb-4">{section.content}</p>

          {section.table && (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border border-[var(--border)] rounded-lg overflow-hidden">
                <thead className="bg-[var(--bg-card)]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                      {lang === 'en' ? 'Operation' : 'Opération'}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                      {lang === 'en' ? 'System Behavior' : 'Comportement Système'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {section.table.map((row, rIdx) => (
                    <tr key={rIdx} className="bg-[var(--bg-secondary)]">
                      <td className="px-4 py-3 text-sm text-[var(--text-primary)]">{row.operation}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-muted)]">{row.behavior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.note && (
            <p className="text-[var(--text-muted)] text-sm italic">{section.note}</p>
          )}

          {section.items && (
            <div className="space-y-3">
              {section.items.map((item, iIdx) => (
                <div key={iIdx} className="p-4 border border-[var(--border)] rounded-lg bg-[var(--bg-card)]">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">{item.name}</h4>
                  <p className="text-[var(--text-muted)] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </article>
  )
}
