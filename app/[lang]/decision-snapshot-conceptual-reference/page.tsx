import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    badge: 'Référence Conceptuelle',
    title: 'Infrastructure de Snapshot Décisionnel',
    intro: `Ce document fournit une définition formelle et explicite de l'Infrastructure de Snapshot Décisionnel.

Il est destiné aux institutions, aux équipes juridiques, aux auditeurs et aux architectes de systèmes qui exigent des limites ontologiques précises, des définitions invariantes et un usage non ambigu des termes liés à la preuve à l'exécution.

Ce document n'est pas une introduction. Il ne vise ni la concision ni la promotion.`,
    principle: {
      title: 'La preuve avant les questions',
      content: `L'**Infrastructure de Snapshot Décisionnel** établit une couche de preuve à l'exécution pour les systèmes de décision automatisés et semi-automatisés opérant dans des contextes institutionnels. Son objectif est unique : préserver des états factuels immuables au moment exact où les décisions deviennent irréversibles, indépendamment de l'évolution ultérieure du système.

Cette infrastructure n'explique, ne justifie, ni n'évalue les décisions. Elle préserve ce qui a été exécuté.`
    },
    sections: [
      {
        id: 'resume',
        title: 'Résumé opérationnel',
        content: `Les organisations s'appuient de plus en plus sur des systèmes de décision dont les résultats entraînent des conséquences opérationnelles, juridiques, financières et réputationnelles durables. Ces systèmes évoluent continuellement : les modèles sont ré-entraînés, les règles ajustées, les sources de données modifiées, les infrastructures refondues et les équipes renouvelées. Pourtant, les décisions produites restent souvent examinables bien après que les conditions techniques ayant présidé à leur création ont disparu.

Dans la plupart des organisations, l'état factuel des décisions passées n'est pas préservé au moment de l'exécution. Lorsque des questions surgissent, les institutions tentent de reconstruire ce qui s'est passé à l'aide de logs, de traces, de référentiels de configuration, de tableaux de bord et de souvenirs humains. Ce processus est intrinsèquement fragile, coûteux et incertain. Il produit des récits plutôt que des faits.

L'Infrastructure de Snapshot Décisionnel comble cette lacune structurelle. Elle introduit une couche de preuve à l'exécution dont le seul but est de capturer, au point de non-retour, l'état factuel complet d'une décision et de le préserver sous la forme d'un artefact immuable et auto-contenu. Cet artefact existe indépendamment de l'évolution future du système qui l'a produit.`
      },
      {
        id: 'probleme',
        title: 'Énoncé du problème',
        subtitle: 'Absence structurelle de faits à l\'exécution',
        content: `Les systèmes de décision automatisés ne préservent généralement pas leur propre réalité au moment de l'exécution. À l'instant où une décision devient irréversible, le système consomme des entrées, applique une logique, opère sous une configuration concrète et produit un résultat. Cet état composite n'existe que de manière transitoire.

Après l'exécution, le système conserve des traces : logs, métriques, alertes, référentiels de configuration, états de base de données. Ces traces n'ont pas été conçues pour constituer un enregistrement factuel complet et durable de l'exécution. Elles sont partielles, distribuées et dépendantes de la survie et de la stabilité de systèmes en constante évolution.

Lorsque les institutions doivent plus tard établir ce qui s'est produit, elles doivent reconstruire cet état a posteriori. Cette exigence ne découle pas d'une mauvaise discipline technique ou d'une défaillance organisationnelle. Elle provient d'une inadéquation structurelle entre ce qui est nécessaire pour établir les faits et ce que les systèmes d'exécution sont conçus pour conserver.`,
        conclusion: 'La reconstruction échoue donc de manière structurelle, et non contingente.'
      },
      {
        id: 'principe',
        title: 'Principe central',
        subtitle: 'Capturer au point de non-retour',
        content: 'Une décision devient un fait lorsqu\'elle est exécutée. À cet instant :',
        bullets: [
          'des entrées spécifiques sont consommées,',
          'une logique spécifique est appliquée,',
          'dans un contexte d\'exécution spécifique,',
          'produisant un résultat spécifique.'
        ],
        conclusion: 'Une fois ce moment passé, l\'état factuel d\'origine ne peut plus être reconstitué avec certitude. La preuve doit donc être produite au moment de l\'exécution, et non déduite plus tard.'
      },
      {
        id: 'artefact',
        title: 'Artefact de Snapshot Décisionnel',
        subtitle: 'Objet canonique',
        content: `L'**Artefact de Snapshot Décisionnel** est le seul objet probant à l'exécution défini dans ce document. Toutes les références aux faits ou à la preuve se rapportent exclusivement aux propriétés de cet artefact.

L'artefact est produit par le système décisionnel lui-même au moment où la décision devient irréversible. Il n'est pas dérivé de logs ou d'observations externes.`,
        subsection: {
          title: 'Propriétés invariantes',
          intro: 'Un Artefact de Snapshot Décisionnel garantit les invariants suivants, qui ne peuvent être modifiés après création :',
          bullets: [
            '**Complétude** – toutes les entrées, l\'état de la logique, le contexte d\'exécution et les résultats présents à l\'exécution sont intégrés.',
            '**Intégrité temporelle** – l\'horodatage de l\'exécution est lié cryptographiquement à l\'artefact.',
            '**Immuabilité** – l\'artefact ne peut être ni modifié, ni amendé, ni supprimé.',
            '**Ordonnancement** – la position de l\'artefact dans la séquence d\'exécution est explicite et vérifiable.',
            '**Authenticité** – l\'origine et l\'intégrité de l\'artefact sont prouvables par cryptographie.'
          ],
          conclusion: 'Tout enregistrement nécessitant des systèmes externes pour établir les faits d\'exécution n\'est pas un Artefact de Snapshot Décisionnel et ne constitue pas une preuve à l\'exécution.'
        }
      },
      {
        id: 'preuve-vs-reconstruction',
        title: 'Preuve vs Reconstruction',
        subtitle: 'Distinction ontologique',
        content: `Dans ce document, la **preuve** désigne exclusivement les faits d'exécution incarnés dans un Artefact de Snapshot Décisionnel. La preuve n'existe que si elle a été produite au moment de l'exécution.

La **reconstruction** désigne tout processus a posteriori qui tente de déduire les états d'exécution passés en utilisant des traces survivantes, de l'interprétation ou des connaissances rétrospectives. Ces deux notions ne sont pas interchangeables.`,
        subsection: {
          title: 'Limites structurelles de la reconstruction',
          intro: 'La reconstruction dépend nécessairement d\'éléments qui évoluent ou disparaissent :',
          bullets: [
            'configurations mutables,',
            'modèles ré-entraînés,',
            'sources de données modifiées,',
            'rotation des logs,',
            'souvenirs humains.'
          ],
          conclusion: 'L\'Infrastructure de Snapshot Décisionnel n\'améliore pas la reconstruction. Elle la rend superflue dans son périmètre.'
        },
        isTable: true,
        tableData: {
          headers: ['Reconstruction', 'Preuve à l\'exécution'],
          rows: [
            ['Récit assemblé après le résultat', 'Fait déclaré avant l\'examen'],
            ['Dépend de traces survivantes', 'Artefact auto-contenu'],
            ['Soumise au biais de rétrospective', 'Préserve la connaissance au temps T'],
            ['Coût croissant avec le temps', 'Coût fixe à l\'exécution']
          ]
        }
      },
      {
        id: 'separation',
        title: 'Séparation de l\'Exécution et de l\'Évaluation',
        content: 'L\'Infrastructure de Snapshot Décisionnel distingue :',
        bullets: [
          '**Les Exécutions** – faits immuables déclarés au temps T.',
          '**Les Évaluations** – appréciations humaines ou institutionnelles produites ultérieurement, explicitement datées et liées.'
        ],
        conclusion: 'Cette séparation élimine structurellement le biais de rétrospective en empêchant les connaissances ultérieures de contaminer les faits d\'exécution.'
      },
      {
        id: 'principes-limites',
        title: 'Principes et Limites',
        content: '**Principe : les faits n\'existent qu\'en tant qu\'artefacts**\n\nDans cette infrastructure, un fait n\'est pas une notion abstraite. Un fait n\'existe qu\'en tant qu\'il est incarné dans un Artefact de Snapshot Décisionnel. Les affirmations sur la réalité de l\'exécution sont des affirmations sur le contenu de l\'artefact.\n\n**Limite : non-revendications**\n\nCette infrastructure ne prétend explicitement pas :',
        bullets: [
          'expliquer les décisions ou leur logique,',
          'évaluer la justesse ou la conformité,',
          'attribuer une responsabilité ou une faute,',
          'remplacer les processus d\'audit ou de gouvernance.'
        ],
        conclusion: 'Elle préserve les faits d\'exécution, et rien d\'autre.'
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: `La reconstruction a posteriori est structurellement incapable de fournir une certitude factuelle durable. Elle assemble des récits une fois les résultats connus, en utilisant des traces qui n'ont jamais été conçues pour servir de preuve. L'Infrastructure de Snapshot Décisionnel restaure la continuité factuelle en garantissant que la preuve existe avant que les questions ne surgissent.

Elle ne dicte ni l'interprétation, ni le jugement. Elle préserve le terrain factuel sur lequel s'exerce la discrétion institutionnelle. La preuve n'existe qu'au moment de l'exécution. Sa préservation n'est pas un choix méthodologique, c'est une nécessité structurelle.`
      }
    ],
    backLink: 'Retour aux Fondements'
  },
  en: {
    badge: 'Conceptual Reference',
    title: 'Decision Snapshot Infrastructure',
    intro: `This document provides a formal, explicit definition of Decision Snapshot Infrastructure.

It is intended for institutions, legal teams, auditors, and system architects who require precise ontological boundaries, invariant definitions, and non-ambiguous use of terms related to execution-time evidence.

This document is not an introduction. It does not aim to be concise or promotional.`,
    principle: {
      title: 'Evidence before questions',
      content: `**Decision Snapshot Infrastructure** establishes an execution-time evidence layer for automated and semi-automated decision systems operating in institutional contexts. Its purpose is singular: preserve immutable factual states at the exact moment decisions become irreversible, independently of subsequent system evolution.

This infrastructure does not explain, justify, or evaluate decisions. It preserves what was executed.`
    },
    sections: [
      {
        id: 'summary',
        title: 'Executive Summary',
        content: `Organizations increasingly rely on automated and semi-automated decision systems whose outputs carry durable operational, legal, financial, and reputational consequences. These systems evolve continuously: models are retrained, rules are adjusted, data sources change, infrastructures are refactored, and teams rotate. Yet the decisions produced by these systems often remain examinable long after the technical conditions that produced them have disappeared.

In most organizations, the factual state of past decisions is not preserved at execution time. When questions arise, institutions attempt to reconstruct what happened using logs, traces, configuration repositories, dashboards, tickets, and human recollection. This process is inherently fragile, costly, and uncertain. It produces narratives rather than facts.

Decision Snapshot Infrastructure addresses this structural gap. It introduces an execution-time evidence layer whose sole purpose is to capture, at the point of no return, the complete factual state of a decision and preserve it as an immutable, self-contained artifact. This artifact exists independently of the future evolution of the system that produced it.`
      },
      {
        id: 'problem',
        title: 'Problem Statement',
        subtitle: 'Structural absence of execution-time facts',
        content: `Automated decision systems generally do not preserve their own execution-time reality. At the moment a decision becomes irreversible, the system consumes inputs, applies logic, operates under a concrete configuration, and produces an outcome. This composite state exists only transiently.

After execution, the system retains traces: logs, metrics, alerts, configuration repositories, database states. These traces were not designed to constitute a complete, durable factual record of execution. They are partial, distributed, and dependent on the continued existence and stability of evolving systems.

When institutions are later required to establish what occurred, they must reconstruct this state after the fact. This requirement does not arise from poor engineering discipline or organizational failure. It arises from a structural mismatch between what is needed to establish facts and what execution systems are designed to retain.`,
        conclusion: 'Reconstruction therefore fails structurally, not contingently.'
      },
      {
        id: 'principle',
        title: 'Core Principle',
        subtitle: 'Capture at the point of no return',
        content: 'A decision becomes a fact when it is executed. At that moment:',
        bullets: [
          'specific inputs are consumed,',
          'specific logic is applied,',
          'under a specific execution context,',
          'producing a specific outcome.'
        ],
        conclusion: 'Once this moment passes, the original factual state cannot be reconstituted with certainty. Evidence must therefore be produced at execution time, not inferred later.'
      },
      {
        id: 'artifact',
        title: 'Decision Snapshot Artifact',
        subtitle: 'Canonical object',
        content: `The **Decision Snapshot Artifact** is the sole execution-time evidentiary object defined in this document. All references to facts, evidence, or execution-time state refer exclusively to properties of this artifact.

The artifact is produced by the decision-making system itself at the moment the decision becomes irreversible. It is not derived from logs, traces, or external observation.`,
        subsection: {
          title: 'Invariant properties',
          intro: 'A Decision Snapshot Artifact guarantees the following invariants, which cannot be altered after creation:',
          bullets: [
            '**Completeness** - all inputs, logic state, execution context, and outputs present at execution time are embedded.',
            '**Temporal integrity** - the execution timestamp is cryptographically bound to the artifact.',
            '**Immutability** - the artifact cannot be modified, amended, or deleted.',
            '**Ordering** - the artifact\'s position within the execution sequence is explicit and verifiable.',
            '**Authenticity** - the origin and integrity of the artifact are cryptographically provable.'
          ],
          conclusion: 'Any record that requires external systems to establish execution-time facts is not a Decision Snapshot Artifact and does not constitute execution-time evidence.'
        }
      },
      {
        id: 'evidence-vs-reconstruction',
        title: 'Evidence vs Reconstruction',
        subtitle: 'Ontological distinction',
        content: `In this document, **evidence** refers exclusively to execution-time facts embodied in a Decision Snapshot Artifact. Evidence exists only if it was produced at execution time.

**Reconstruction** refers to any post-hoc process that attempts to infer past execution states using surviving traces, interpretation, or retrospective knowledge.

These two notions are not interchangeable.`,
        subsection: {
          title: 'Structural limits of reconstruction',
          intro: 'Reconstruction necessarily depends on elements that evolve or disappear over time:',
          bullets: [
            'mutable configurations,',
            'retrained models,',
            'altered data sources,',
            'rotated logs,',
            'human recollection.'
          ],
          conclusion: 'Because these elements do not preserve their past states exhaustively or immutably, reconstruction cannot reliably re-establish the factual state that existed at execution time. Where Decision Snapshot Artifact exist, reconstruction is not required to establish facts.'
        },
        isTable: true,
        tableData: {
          headers: ['Reconstruction', 'Execution-time Evidence'],
          rows: [
            ['Narrative assembled after outcome', 'Fact declared before examination'],
            ['Depends on surviving traces', 'Self-contained artifact'],
            ['Subject to hindsight bias', 'Preserves knowledge at Time T'],
            ['Cost increases over time', 'Cost fixed at execution']
          ]
        }
      },
      {
        id: 'separation',
        title: 'Separation of Execution and Evaluation',
        content: 'Decision Snapshot Infrastructure distinguishes:',
        bullets: [
          '**Executions** - immutable facts declared at Time T.',
          '**Evaluations** - human or institutional assessments produced later, explicitly timestamped and linked.'
        ],
        conclusion: 'This separation structurally eliminates hindsight bias by preventing later knowledge from contaminating execution-time facts.'
      },
      {
        id: 'principles-boundaries',
        title: 'Principles and Boundaries',
        content: '**Principle: facts exist only as artifacts**\n\nIn this infrastructure, a fact is not an abstract notion. A fact exists only insofar as it is embodied in a Decision Snapshot Artifact. Statements about execution-time reality are therefore statements about artifact content.\n\n**Principle: separation of execution and interpretation**\n\nDecision Snapshot Infrastructure records executions. Interpretation, evaluation, judgment, and communication occur after execution and remain institutional responsibilities.\n\n**Boundary: non-claims**\n\nThis infrastructure explicitly does not:',
        bullets: [
          'explain decisions or their rationale,',
          'evaluate correctness or compliance,',
          'assign responsibility or liability,',
          'replace audit, governance, or legal processes.'
        ],
        conclusion: 'It preserves execution-time facts and nothing else.'
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: `Automated decision systems do not fail because institutions are unable to act. They fail when, over time, institutions can no longer establish with certainty what was actually executed, under which conditions, and with what information.

Post-hoc reconstruction is structurally incapable of providing this certainty. It assembles narratives after outcomes are known, using traces that were never designed to serve as durable evidence. As systems evolve, the cost and fragility of reconstruction increase.

Decision Snapshot Infrastructure restores factual continuity by ensuring that execution-time evidence exists before questions arise. It replaces reliance on reconstruction with immutable facts, preserved independently of system lifecycle and organizational change.

Evidence exists only at execution time. Preserving it is not a methodological choice. It is a structural necessity.`
      }
    ],
    backLink: 'Back to Foundations'
  }
};

function formatText(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export default function ConceptualReferencePage({
  params,
}: {
  params: { lang: Language };
}) {
  const lang = params.lang;
  const c = content[lang];

  return (
    <div className="min-h-screen">
      {/* Back Link */}
      <section className="pt-8 pb-4">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href={`/${lang}/foundations`}
            className="text-[#005C99] hover:underline text-sm"
          >
            ← {c.backLink}
          </Link>
        </div>
      </section>

      {/* Header Section */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-4">{c.badge}</p>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-6 leading-tight">
            {c.title}
          </h1>
          <p className="text-black/70 whitespace-pre-line mb-8">{c.intro}</p>

          {/* Principle Box */}
          <div className="bg-[#005C99] text-white p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">{c.principle.title}</h2>
            <div
              className="text-lg opacity-90 whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: formatText(c.principle.content) }}
            />
          </div>
        </div>
      </section>

      {/* Sections */}
      {c.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={index % 2 === 0 ? 'py-8 bg-zinc-50' : 'py-8'}
        >
          <div className="max-w-4xl mx-auto px-6">
            {section.subtitle ? (
              <>
                <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-2">{section.title}</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{section.subtitle}</h2>
              </>
            ) : (
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{section.title}</h2>
            )}

            {section.content && (
              <div
                className="text-black/70 mb-6 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: formatText(section.content) }}
              />
            )}

            {section.bullets && (
              <ul className="space-y-2 mb-6">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: formatText(bullet) }} />
                  </li>
                ))}
              </ul>
            )}

            {section.subsection && (
              <div className="mt-6">
                <h3 className="font-bold text-black mb-4">{section.subsection.title}</h3>
                {section.subsection.intro && (
                  <p className="text-black/70 mb-4">{section.subsection.intro}</p>
                )}
                {section.subsection.bullets && (
                  <ul className="space-y-2 mb-6">
                    {section.subsection.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-black/70">
                        <span className="text-[#005C99] mt-1">•</span>
                        <span dangerouslySetInnerHTML={{ __html: formatText(bullet) }} />
                      </li>
                    ))}
                  </ul>
                )}
                {section.subsection.conclusion && (
                  <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
                    {section.subsection.conclusion}
                  </blockquote>
                )}
              </div>
            )}

            {section.isTable && section.tableData && (
              <div className="overflow-x-auto mb-6 mt-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 bg-zinc-100 font-bold text-black border-b-2 border-[#005C99]">
                        {section.tableData.headers[0]}
                      </th>
                      <th className="text-left py-3 px-4 bg-[#005C99] font-bold text-white">
                        {section.tableData.headers[1]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.tableData.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}>
                        <td className="py-3 px-4 text-black/70">{row[0]}</td>
                        <td className="py-3 px-4 text-[#005C99] font-medium">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.conclusion && (
              <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
                {section.conclusion}
              </blockquote>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
