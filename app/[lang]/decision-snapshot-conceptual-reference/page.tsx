import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    badge: 'Reference Conceptuelle',
    title: 'Infrastructure de Snapshot Decisionnel',
    intro: `Ce document fournit une definition formelle et explicite de l'Infrastructure de Snapshot Decisionnel.

Il est destine aux institutions, aux equipes juridiques, aux auditeurs et aux architectes de systemes qui exigent des limites ontologiques precises, des definitions invariantes et un usage non ambigu des termes lies a la preuve a l'execution.

Ce document n'est pas une introduction. Il ne vise ni la concision ni la promotion.`,
    principle: {
      title: 'La preuve avant les questions',
      content: `L'**Infrastructure de Snapshot Decisionnel** etablit une couche de preuve a l'execution pour les systemes de decision automatises et semi-automatises operant dans des contextes institutionnels. Son objectif est unique : preserver des etats factuels immuables au moment exact ou les decisions deviennent irreversibles, independamment de l'evolution ulterieure du systeme.

Cette infrastructure n'explique, ne justifie, ni n'evalue les decisions. Elle preserve ce qui a ete execute.`
    },
    sections: [
      {
        id: 'resume',
        title: 'Resume operationnel',
        content: `Les organisations s'appuient de plus en plus sur des systemes de decision dont les resultats entrainent des consequences operationnelles, juridiques, financieres et reputationnelles durables. Ces systemes evoluent continuellement : les modeles sont re-entraines, les regles ajustees, les sources de donnees modifiees, les infrastructures refondues et les equipes renouvelees. Pourtant, les decisions produites restent souvent examinables bien apres que les conditions techniques ayant preside a leur creation ont disparu.

Dans la plupart des organisations, l'etat factuel des decisions passees n'est pas preserve au moment de l'execution. Lorsque des questions surgissent, les institutions tentent de reconstruire ce qui s'est passe a l'aide de logs, de traces, de referentiels de configuration, de tableaux de bord et de souvenirs humains. Ce processus est intrinsequement fragile, couteux et incertain. Il produit des recits plutot que des faits.

L'Infrastructure de Snapshot Decisionnel comble cette lacune structurelle. Elle introduit une couche de preuve a l'execution dont le seul but est de capturer, au point de non-retour, l'etat factuel complet d'une decision et de le preserver sous la forme d'un artefact immuable et auto-contenu. Cet artefact existe independamment de l'evolution future du systeme qui l'a produit.`
      },
      {
        id: 'probleme',
        title: 'Enonce du probleme',
        subtitle: 'Absence structurelle de faits a l\'execution',
        content: `Les systemes de decision automatises ne preservent generalement pas leur propre realite au moment de l'execution. A l'instant ou une decision devient irreversible, le systeme consomme des entrees, applique une logique, opere sous une configuration concrete et produit un resultat. Cet etat composite n'existe que de maniere transitoire.

Apres l'execution, le systeme conserve des traces : logs, metriques, alertes, referentiels de configuration, etats de base de donnees. Ces traces n'ont pas ete concues pour constituer un enregistrement factuel complet et durable de l'execution. Elles sont partielles, distribuees et dependantes de la survie et de la stabilite de systemes en constante evolution.

Lorsque les institutions doivent plus tard etablir ce qui s'est produit, elles doivent reconstruire cet etat a posteriori. Cette exigence ne decoule pas d'une mauvaise discipline technique ou d'une defaillance organisationnelle. Elle provient d'une inadequation structurelle entre ce qui est necessaire pour etablir les faits et ce que les systemes d'execution sont concus pour conserver.`,
        conclusion: 'La reconstruction echoue donc de maniere structurelle, et non contingente.'
      },
      {
        id: 'principe',
        title: 'Principe central',
        subtitle: 'Capturer au point de non-retour',
        content: 'Une decision devient un fait lorsqu\'elle est executee. A cet instant :',
        bullets: [
          'des entrees specifiques sont consommees,',
          'une logique specifique est appliquee,',
          'dans un contexte d\'execution specifique,',
          'produisant un resultat specifique.'
        ],
        conclusion: 'Une fois ce moment passe, l\'etat factuel d\'origine ne peut plus etre reconstitue avec certitude. La preuve doit donc etre produite au moment de l\'execution, et non deduite plus tard.'
      },
      {
        id: 'artefact',
        title: 'Artefact de Snapshot Decisionnel',
        subtitle: 'Objet canonique',
        content: `L'**Artefact de Snapshot Decisionnel** est le seul objet probant a l'execution defini dans ce document. Toutes les references aux faits ou a la preuve se rapportent exclusivement aux proprietes de cet artefact.

L'artefact est produit par le systeme decisionnel lui-meme au moment ou la decision devient irreversible. Il n'est pas derive de logs ou d'observations externes.`,
        subsection: {
          title: 'Proprietes invariantes',
          intro: 'Un Artefact de Snapshot Decisionnel garantit les invariants suivants, qui ne peuvent etre modifies apres creation :',
          bullets: [
            '**Completude** - toutes les entrees, l\'etat de la logique, le contexte d\'execution et les resultats presents a l\'execution sont integres.',
            '**Integrite temporelle** - l\'horodatage de l\'execution est lie cryptographiquement a l\'artefact.',
            '**Immuabilite** - l\'artefact ne peut etre ni modifie, ni amende, ni supprime.',
            '**Ordonnancement** - la position de l\'artefact dans la sequence d\'execution est explicite et verifiable.',
            '**Authenticite** - l\'origine et l\'integrite de l\'artefact sont prouvables par cryptographie.'
          ],
          conclusion: 'Tout enregistrement necessitant des systemes externes pour etablir les faits d\'execution n\'est pas un Artefact de Snapshot Decisionnel et ne constitue pas une preuve a l\'execution.'
        }
      },
      {
        id: 'preuve-vs-reconstruction',
        title: 'Preuve vs Reconstruction',
        subtitle: 'Distinction ontologique',
        content: `Dans ce document, la **preuve** designe exclusivement les faits d'execution incarnes dans un Artefact de Snapshot Decisionnel. La preuve n'existe que si elle a ete produite au moment de l'execution.

La **reconstruction** designe tout processus a posteriori qui tente de deduire les etats d'execution passes en utilisant des traces survivantes, de l'interpretation ou des connaissances retrospectives. Ces deux notions ne sont pas interchangeables.`,
        subsection: {
          title: 'Limites structurelles de la reconstruction',
          intro: 'La reconstruction depend necessairement d\'elements qui evoluent ou disparaissent :',
          bullets: [
            'configurations mutables,',
            'modeles re-entraines,',
            'sources de donnees modifiees,',
            'rotation des logs,',
            'souvenirs humains.'
          ],
          conclusion: 'L\'Infrastructure de Snapshot Decisionnel n\'ameliore pas la reconstruction. Elle la rend superflue dans son perimetre.'
        },
        isTable: true,
        tableData: {
          headers: ['Reconstruction', 'Preuve a l\'execution'],
          rows: [
            ['Recit assemble apres le resultat', 'Fait declare avant l\'examen'],
            ['Depend de traces survivantes', 'Artefact auto-contenu'],
            ['Soumise au biais de retrospective', 'Preserve la connaissance au temps T'],
            ['Cout croissant avec le temps', 'Cout fixe a l\'execution']
          ]
        }
      },
      {
        id: 'separation',
        title: 'Separation de l\'Execution et de l\'Evaluation',
        content: 'L\'Infrastructure de Snapshot Decisionnel distingue :',
        bullets: [
          '**Les Executions** - faits immuables declares au temps T.',
          '**Les Evaluations** - appreciations humaines ou institutionnelles produites ulterieurement, explicitement datees et liees.'
        ],
        conclusion: 'Cette separation elimine structurellement le biais de retrospective en empechant les connaissances ulterieures de contaminer les faits d\'execution.'
      },
      {
        id: 'principes-limites',
        title: 'Principes et Limites',
        content: '**Principe : les faits n\'existent qu\'en tant qu\'artefacts**\n\nDans cette infrastructure, un fait n\'est pas une notion abstraite. Un fait n\'existe qu\'en tant qu\'il est incarne dans un Artefact de Snapshot Decisionnel. Les affirmations sur la realite de l\'execution sont des affirmations sur le contenu de l\'artefact.\n\n**Limite : non-revendications**\n\nCette infrastructure ne pretend explicitement pas :',
        bullets: [
          'expliquer les decisions ou leur logique,',
          'evaluer la justesse ou la conformite,',
          'attribuer une responsabilite ou une faute,',
          'remplacer les processus d\'audit ou de gouvernance.'
        ],
        conclusion: 'Elle preserve les faits d\'execution, et rien d\'autre.'
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: `La reconstruction a posteriori est structurellement incapable de fournir une certitude factuelle durable. Elle assemble des recits une fois les resultats connus, en utilisant des traces qui n'ont jamais ete concues pour servir de preuve. L'Infrastructure de Snapshot Decisionnel restaure la continuite factuelle en garantissant que la preuve existe avant que les questions ne surgissent.

Elle ne dicte ni l'interpretation, ni le jugement. Elle preserve le terrain factuel sur lequel s'exerce la discretion institutionnelle. La preuve n'existe qu'au moment de l'execution. Sa preservation n'est pas un choix methodologique, c'est une necessite structurelle.`
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
