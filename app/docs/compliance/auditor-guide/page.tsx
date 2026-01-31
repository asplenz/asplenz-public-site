'use client'

import { useLang } from '@/lib/LangContext'

export default function AuditorGuidePage() {
  const { lang } = useLang()

  const content = {
    en: {
      title: "Auditor's Guide",
      subtitle: 'Independent Verification Protocol',
      audience: 'External Auditors / Internal Audit / Compliance Officers',
      intro: 'This guide provides step-by-step instructions for independently verifying Horizon proof bundles without access to Horizon systems.',
      sections: [
        {
          title: 'What You Receive',
          content: 'A proof bundle is a self-contained JSON file containing all facts in a timeline, their cryptographic hashes, chain linkage, and Horizon\'s Ed25519 signature.'
        },
        {
          title: 'Verification Steps',
          steps: [
            { num: '1', title: 'Obtain Public Key', desc: 'Obtain Horizon\'s public key from an independent source (not the entity being audited).' },
            { num: '2', title: 'Verify Signature', desc: 'Verify the bundle signature using Ed25519. If invalid, stop: the bundle has been tampered with.' },
            { num: '3', title: 'Verify Hash Chain', desc: 'For each fact, recompute its hash from the canonical JSON representation. Verify prev_hash matches the previous fact\'s hash.' },
            { num: '4', title: 'Verify Timestamps', desc: 'Confirm sealed_at_ms values are monotonically increasing within the stream.' },
            { num: '5', title: 'Review Content', desc: 'Examine custom_payload for each fact. Remember: Horizon attests to when and by whom, not to truth of declarations.' },
          ]
        },
        {
          title: 'What Verification Proves',
          proves: [
            'The bundle has not been modified since signing',
            'The hash chain is intact (no facts inserted, removed, or altered)',
            'The timestamps were assigned by Horizon at seal time',
            'The sequence of facts is authentic',
          ],
          doesNotProve: [
            'The declarations in facts are true',
            'The actor actually performed the action',
            'The decision was correct or appropriate',
            'External events actually occurred',
          ]
        },
        {
          title: 'Independence Guarantee',
          content: 'Verification requires only the bundle and Horizon\'s public key. No network access, no credentials, no access to the audited entity\'s systems. This independence is by design.'
        },
      ]
    },
    fr: {
      title: "Guide de l'Auditeur",
      subtitle: 'Protocole de Vérification Indépendante',
      audience: 'Auditeurs Externes / Audit Interne / Responsables Conformité',
      intro: 'Ce guide fournit des instructions étape par étape pour vérifier indépendamment les bundles de preuve Horizon sans accès aux systèmes Horizon.',
      sections: [
        {
          title: 'Ce que Vous Recevez',
          content: 'Un bundle de preuve est un fichier JSON autonome contenant tous les faits d\'une timeline, leurs hachages cryptographiques, le chaînage, et la signature Ed25519 d\'Horizon.'
        },
        {
          title: 'Étapes de Vérification',
          steps: [
            { num: '1', title: 'Obtenir la Clé Publique', desc: 'Obtenez la clé publique d\'Horizon d\'une source indépendante (pas l\'entité auditée).' },
            { num: '2', title: 'Vérifier la Signature', desc: 'Vérifiez la signature du bundle avec Ed25519. Si invalide, arrêtez : le bundle a été altéré.' },
            { num: '3', title: 'Vérifier la Chaîne de Hachage', desc: 'Pour chaque fait, recalculez son hachage depuis la représentation JSON canonique. Vérifiez que prev_hash correspond au hachage du fait précédent.' },
            { num: '4', title: 'Vérifier les Horodatages', desc: 'Confirmez que les valeurs sealed_at_ms sont monotoniquement croissantes dans le stream.' },
            { num: '5', title: 'Examiner le Contenu', desc: 'Examinez custom_payload pour chaque fait. Rappel : Horizon atteste du quand et par qui, pas de la véracité des déclarations.' },
          ]
        },
        {
          title: 'Ce que la Vérification Prouve',
          proves: [
            'Le bundle n\'a pas été modifié depuis la signature',
            'La chaîne de hachage est intacte (aucun fait inséré, supprimé ou altéré)',
            'Les horodatages ont été assignés par Horizon au moment du scellement',
            'La séquence des faits est authentique',
          ],
          doesNotProve: [
            'Les déclarations dans les faits sont vraies',
            'L\'acteur a réellement effectué l\'action',
            'La décision était correcte ou appropriée',
            'Les événements externes se sont réellement produits',
          ]
        },
        {
          title: 'Garantie d\'Indépendance',
          content: 'La vérification ne nécessite que le bundle et la clé publique d\'Horizon. Aucun accès réseau, aucun credential, aucun accès aux systèmes de l\'entité auditée. Cette indépendance est intentionnelle.'
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

          {section.content && (
            <p className="text-[var(--text-secondary)] mb-4">{section.content}</p>
          )}

          {section.steps && (
            <div className="space-y-4">
              {section.steps.map((step, sIdx) => (
                <div key={sIdx} className="flex gap-4 p-4 border border-[var(--border)] rounded-lg bg-[var(--bg-card)]">
                  <span className="text-[var(--accent)] font-mono text-lg font-bold">{step.num}</span>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">{step.title}</h4>
                    <p className="text-[var(--text-muted)] text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {section.proves && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-3">
                  {lang === 'en' ? 'Proves:' : 'Prouve :'}
                </h4>
                <ul className="space-y-2">
                  {section.proves.map((item, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                      <span className="text-green-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-3">
                  {lang === 'en' ? 'Does Not Prove:' : 'Ne Prouve Pas :'}
                </h4>
                <ul className="space-y-2">
                  {section.doesNotProve.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-[var(--text-muted)] text-sm">
                      <span className="text-red-400">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
      ))}
    </article>
  )
}
