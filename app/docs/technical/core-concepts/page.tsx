'use client'

import { useLang } from '@/lib/LangContext'

export default function CoreConceptsPage() {
  const { lang } = useLang()

  const content = {
    en: {
      title: 'Core Concepts',
      subtitle: 'Streams, Facts, and Bundles',
      audience: 'Integration Engineers / Technical Architects',
      intro: 'Understanding Horizon\'s data model is essential for effective integration.',
      concepts: [
        {
          title: 'Streams',
          description: 'A stream is a timeline of related facts. You define the stream_id; Horizon imposes no business semantics.',
          properties: [
            { name: 'stream_id', desc: 'Client-provided identifier (e.g., "incident-2024-01-26")' },
            { name: 'tenant_id', desc: 'Scoping identifier for multi-tenant isolation' },
            { name: 'Created implicitly', desc: 'When first fact is sealed' },
          ]
        },
        {
          title: 'Facts',
          description: 'A fact is an immutable record sealed at a specific moment. Once sealed, it cannot be modified or deleted.',
          properties: [
            { name: 'fact_id', desc: 'Unique identifier assigned by Horizon' },
            { name: 'actor', desc: 'Who declared this fact (your identifier)' },
            { name: 'sealed_at_ms', desc: 'Authoritative timestamp from Horizon' },
            { name: 'custom_payload', desc: 'Your opaque business data' },
            { name: 'fact_hash', desc: 'SHA-256 of canonical representation' },
            { name: 'prev_hash', desc: 'Link to previous fact in chain' },
          ]
        },
        {
          title: 'Bundles',
          description: 'A bundle is an exportable, self-contained proof package. It contains all facts, their hashes, chain linkage, and Horizon\'s signature.',
          properties: [
            { name: 'Self-contained', desc: 'All data needed for verification' },
            { name: 'Signed', desc: 'Ed25519 signature by Horizon' },
            { name: 'Portable', desc: 'Works in any system, any jurisdiction' },
            { name: 'Independent', desc: 'Verifiable without Horizon access' },
          ]
        },
      ],
      principle: 'Horizon records what you declare. The meaning of your declarations is yours to define.'
    },
    fr: {
      title: 'Concepts Fondamentaux',
      subtitle: 'Streams, Facts et Bundles',
      audience: 'Ingénieurs d\'Intégration / Architectes Techniques',
      intro: 'Comprendre le modèle de données d\'Horizon est essentiel pour une intégration efficace.',
      concepts: [
        {
          title: 'Streams',
          description: 'Un stream est une timeline de faits liés. Vous définissez le stream_id ; Horizon n\'impose aucune sémantique métier.',
          properties: [
            { name: 'stream_id', desc: 'Identifiant fourni par le client (ex: "incident-2024-01-26")' },
            { name: 'tenant_id', desc: 'Identifiant de scope pour l\'isolation multi-tenant' },
            { name: 'Créé implicitement', desc: 'Quand le premier fait est scellé' },
          ]
        },
        {
          title: 'Facts',
          description: 'Un fait est un enregistrement immuable scellé à un moment précis. Une fois scellé, il ne peut être modifié ou supprimé.',
          properties: [
            { name: 'fact_id', desc: 'Identifiant unique assigné par Horizon' },
            { name: 'actor', desc: 'Qui a déclaré ce fait (votre identifiant)' },
            { name: 'sealed_at_ms', desc: 'Horodatage faisant autorité d\'Horizon' },
            { name: 'custom_payload', desc: 'Vos données métier opaques' },
            { name: 'fact_hash', desc: 'SHA-256 de la représentation canonique' },
            { name: 'prev_hash', desc: 'Lien vers le fait précédent dans la chaîne' },
          ]
        },
        {
          title: 'Bundles',
          description: 'Un bundle est un package de preuve exportable et autonome. Il contient tous les faits, leurs hachages, le chaînage, et la signature d\'Horizon.',
          properties: [
            { name: 'Autonome', desc: 'Toutes les données nécessaires à la vérification' },
            { name: 'Signé', desc: 'Signature Ed25519 par Horizon' },
            { name: 'Portable', desc: 'Fonctionne dans tout système, toute juridiction' },
            { name: 'Indépendant', desc: 'Vérifiable sans accès à Horizon' },
          ]
        },
      ],
      principle: 'Horizon enregistre ce que vous déclarez. La signification de vos déclarations vous appartient.'
    }
  }

  const t = content[lang]

  return (
    <article className="prose">
      <h1>{t.title}</h1>
      <p className="text-xl text-[var(--text-muted)] -mt-4 mb-2">{t.subtitle}</p>
      <p className="text-sm text-[var(--text-muted)] mb-8">{lang === 'en' ? 'Audience:' : 'Audience :'} {t.audience}</p>
      <p className="text-[var(--text-secondary)] mb-8 italic">{t.intro}</p>

      {t.concepts.map((concept, idx) => (
        <section key={idx} className="mb-10">
          <h2>{concept.title}</h2>
          <p className="text-[var(--text-secondary)] mb-4">{concept.description}</p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-[var(--border)] rounded-lg overflow-hidden">
              <thead className="bg-[var(--bg-card)]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                    {lang === 'en' ? 'Property' : 'Propriété'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                    {lang === 'en' ? 'Description' : 'Description'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {concept.properties.map((prop, pIdx) => (
                  <tr key={pIdx} className="bg-[var(--bg-secondary)]">
                    <td className="px-4 py-3 text-sm font-mono text-[var(--accent)]">{prop.name}</td>
                    <td className="px-4 py-3 text-sm text-[var(--text-muted)]">{prop.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section className="mt-12 p-6 border border-[var(--accent)]/30 rounded-lg bg-[var(--accent)]/5">
        <p className="text-[var(--text-primary)] font-medium italic text-center">
          "{t.principle}"
        </p>
      </section>
    </article>
  )
}
