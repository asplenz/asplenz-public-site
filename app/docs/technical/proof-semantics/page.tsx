'use client'

import { useLang } from '@/lib/LangContext'

export default function ProofSemanticsPage() {
  const { lang } = useLang()

  const content = {
    en: {
      title: 'Proof Semantics',
      subtitle: 'What Sealed Facts Prove and Don\'t Prove',
      audience: 'Risk Managers / RSSI / Legal / Compliance',
      intro: 'Understanding the semantic boundaries of Horizon\'s proof model is essential for correct interpretation.',
      sections: [
        {
          title: 'What a Sealed Fact Proves',
          items: [
            'A specific actor declared specific content at a specific time',
            'The declaration was received by Horizon and sealed with an authoritative timestamp',
            'The declaration has not been modified since sealing',
            'The declaration\'s position in the timeline is authentic',
          ]
        },
        {
          title: 'What a Sealed Fact Does NOT Prove',
          items: [
            'That the declaration is true',
            'That the actor actually performed the described action',
            'That the decision was correct or appropriate',
            'That external events actually occurred as described',
            'That the actor had authority to make the decision',
          ]
        },
        {
          title: 'The Declaration Boundary',
          content: 'Horizon seals declarations, not reality. The fact that someone declared "I approved the emergency shutdown" does not prove the shutdown occurred or was appropriate. It proves that person declared it at that moment.'
        },
        {
          title: 'Evidentiary Value',
          content: 'Sealed facts establish a reliable factual foundation for further investigation. They answer "what was declared and when" with mathematical certainty. The question "was it true" requires additional context outside Horizon\'s scope.'
        },
        {
          title: 'Audit Implications',
          content: 'Auditors should treat sealed facts as authoritative records of declarations, not as proof of underlying events. The chain integrity proves the timeline is authentic; the declarations require independent corroboration.'
        },
      ],
      quote: 'Horizon is a witness to declarations, not to reality.'
    },
    fr: {
      title: 'Sémantique de Preuve',
      subtitle: 'Ce que les Faits Scellés Prouvent et Ne Prouvent Pas',
      audience: 'Responsables Risques / RSSI / Juridique / Conformité',
      intro: 'Comprendre les limites sémantiques du modèle de preuve d\'Horizon est essentiel pour une interprétation correcte.',
      sections: [
        {
          title: 'Ce qu\'un Fait Scellé Prouve',
          items: [
            'Un acteur spécifique a déclaré un contenu spécifique à un moment spécifique',
            'La déclaration a été reçue par Horizon et scellée avec un horodatage faisant autorité',
            'La déclaration n\'a pas été modifiée depuis le scellement',
            'La position de la déclaration dans la timeline est authentique',
          ]
        },
        {
          title: 'Ce qu\'un Fait Scellé NE Prouve PAS',
          items: [
            'Que la déclaration est vraie',
            'Que l\'acteur a réellement effectué l\'action décrite',
            'Que la décision était correcte ou appropriée',
            'Que les événements externes se sont réellement produits comme décrit',
            'Que l\'acteur avait l\'autorité pour prendre la décision',
          ]
        },
        {
          title: 'La Frontière de la Déclaration',
          content: 'Horizon scelle des déclarations, pas la réalité. Le fait que quelqu\'un ait déclaré "J\'ai approuvé l\'arrêt d\'urgence" ne prouve pas que l\'arrêt a eu lieu ou était approprié. Cela prouve que cette personne l\'a déclaré à ce moment.'
        },
        {
          title: 'Valeur Probatoire',
          content: 'Les faits scellés établissent une base factuelle fiable pour une investigation plus approfondie. Ils répondent à "qu\'est-ce qui a été déclaré et quand" avec une certitude mathématique. La question "était-ce vrai" nécessite un contexte supplémentaire hors du périmètre d\'Horizon.'
        },
        {
          title: 'Implications pour l\'Audit',
          content: 'Les auditeurs doivent traiter les faits scellés comme des enregistrements autoritaires de déclarations, pas comme des preuves d\'événements sous-jacents. L\'intégrité de la chaîne prouve que la timeline est authentique ; les déclarations nécessitent une corroboration indépendante.'
        },
      ],
      quote: 'Horizon est un témoin des déclarations, pas de la réalité.'
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

          {section.items && (
            <ul className="space-y-2">
              {section.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <span className={section.title.includes('NOT') || section.title.includes('NE') ? 'text-red-400' : 'text-green-400'}>
                    {section.title.includes('NOT') || section.title.includes('NE') ? '×' : '✓'}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {section.content && (
            <p className="text-[var(--text-secondary)]">{section.content}</p>
          )}
        </section>
      ))}

      <section className="mt-12 p-6 border border-[var(--accent)]/30 rounded-lg bg-[var(--accent)]/5">
        <p className="text-[var(--text-primary)] font-medium italic text-center">
          "{t.quote}"
        </p>
      </section>
    </article>
  )
}
