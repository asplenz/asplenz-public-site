import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'Clarifications',
    subtitle: 'Lever les malentendus courants sur la preuve à l\'exécution',
    intro: 'Cette section clarifie les points de confusion récurrents qui surviennent lors des discussions sur la preuve à l\'exécution et l\'infrastructure de snapshot décisionnel. Ces clarifications n\'introduisent pas de nouveaux principes. Elles garantissent que les concepts précédemment énoncés sont interprétés correctement et appliqués dans leur périmètre prévu.',
    clarification1Title: 'Clarification 1 - Preuve versus explication',
    clarification1P1: 'La preuve à l\'exécution établit les faits, pas les explications. Un Snapshot Décisionnel :',
    clarification1PointsYes: [
      'déclare ce qui a été exécuté,',
      'avec quelles données,',
      'dans quelles conditions,',
      'et avec quel résultat.',
    ],
    clarification1P2: 'Il ne cherche pas à :',
    clarification1PointsNo: [
      'expliquer pourquoi une décision a été prise,',
      'justifier sa justesse,',
      'ou attribuer une responsabilité.',
    ],
    clarification1Conclusion: 'L\'explication, l\'interprétation et le jugement restent des activités humaines et institutionnelles.',
    clarification2Title: 'Clarification 2 - La reconstruction n\'est pas une preuve',
    clarification2P1: 'La reconstruction assemble des récits après l\'exécution en utilisant : des journaux (logs), des traces, des référentiels de configuration, la mémoire humaine et une interprétation rétrospective. La reconstruction peut soutenir l\'apprentissage et l\'analyse. Elle ne préserve pas l\'état factuel qui existait au moment de l\'exécution.',
    clarification2Conclusion: 'Cette limite est structurelle, et non méthodologique. Là où une certitude factuelle est requise, la reconstruction ne peut servir de preuve.',
    clarification3Title: 'Clarification 3 - Simulation versus capture à l\'exécution',
    clarification3P1: 'La preuve à l\'exécution ne peut être simulée rétroactivement. Si aucune preuve n\'a été capturée au moment où une décision a été exécutée, elle ne peut être recréée plus tard sans interprétation.',
    clarification3P2: 'Cela ne signifie pas que Horizon ne peut pas être démontré. La capture Horizon peut être démontrée sur n\'importe quel système actif, incluant :',
    clarification3Points: [
      'des environnements de test,',
      'des systèmes sandbox,',
      'et des configurations de démonstration.',
    ],
    clarification3Conclusion: 'Dans ces cas, Horizon capture l\'état factuel de cette exécution spécifique. Ce qui ne peut être simulé, c\'est la capture d\'exécutions passées qui n\'ont jamais produit de preuve au moment où elles ont eu lieu.',
    clarification4Title: 'Clarification 4 - Horizon ne remplace pas entièrement la reconstruction',
    clarification4P1: 'Horizon ne vise pas à éliminer la pratique analytique de la reconstruction. La reconstruction reste utile pour : comprendre le comportement du système, explorer des explications alternatives ou apprendre des incidents.',
    clarification4Conclusion: 'Ce que Horizon supprime, c\'est la nécessité de s\'appuyer sur la reconstruction comme source de faits. La reconstruction peut éclairer l\'interprétation ; elle n\'établit pas la certitude factuelle.',
    clarification5Title: 'Clarification 5 - Le contrôle institutionnel reste inchangé',
    clarification5P1: 'La capture de preuves à l\'exécution ne centralise pas l\'autorité et n\'impose pas d\'interprétation. L\'institution conserve l\'entière maîtrise de :',
    clarification5Points: [
      'quelles décisions sont examinées,',
      'comment les faits sont interprétés,',
      'quelles conclusions en sont tirées,',
      'et ce qui est communiqué en interne ou en externe.',
    ],
    clarification5Conclusion: 'Horizon enregistre l\'état factuel. Le pouvoir discrétionnaire de l\'institution gouverne son utilisation.',
    clarification6Title: 'Clarification 6 - Pourquoi ces distinctions importent opérationnellement',
    clarification6P1: 'Ces distinctions ne sont pas purement conceptuelles. Lorsque la preuve à l\'exécution n\'existe pas :',
    clarification6Points: [
      'établir l\'état factuel nécessite une coordination entre les équipes,',
      'les systèmes hérités (legacy) doivent être accédés ou réactivés,',
      'des hypothèses doivent être négociées,',
      'et l\'effort augmente avec le temps.',
    ],
    clarification6Conclusion: 'La preuve à l\'exécution réduit l\'effort requis pour établir l\'état factuel, soutenir l\'examen institutionnel et répondre aux questions sur les décisions passées. Ce qui change n\'est pas le contenu du dossier, c\'est le coût pour l\'assembler, le conserver et y accéder.',
    clarification7Title: 'Clarification 7 - Horizon est une infrastructure, pas une méthode',
    clarification7P1: 'Horizon n\'est ni une méthodologie, ni un cadre de travail, ni une prescription de gouvernance. Il opère comme une couche d\'infrastructure qui :',
    clarification7Points: [
      'capture les faits à l\'exécution,',
      'les préserve indépendamment de l\'évolution du système,',
      'sans interférer avec la logique de décision ou les processus institutionnels.',
    ],
    clarification7Conclusion: 'L\'infrastructure permet la durabilité factuelle. Elle ne définit ni l\'intention, ni la politique.',
    summaryTitle: 'Résumé',
    summaryP1: 'La preuve à l\'exécution n\'existe que lorsqu\'elle est produite au moment de l\'exécution. Elle établit les faits sans explication, survit à l\'évolution du système et réduit la dépendance à la reconstruction comme source de vérité.',
    summaryConclusion: 'Horizon capture ces faits. Les institutions conservent le plein contrôle sur leur interprétation et leur usage.',
  },
  en: {
    title: 'Clarifications',
    subtitle: 'Addressing common misunderstandings about execution-time evidence',
    intro: 'This section clarifies recurring points of confusion that arise when discussing execution-time evidence and Decision Snapshot Infrastructure. These clarifications do not introduce new principles. They ensure that previously stated concepts are interpreted correctly and applied within their intended scope.',
    clarification1Title: 'Clarification 1 - Evidence versus explanation',
    clarification1P1: 'Execution-time evidence establishes facts, not explanations. A Decision Snapshot:',
    clarification1PointsYes: [
      'declares what was executed,',
      'with what data,',
      'under which conditions,',
      'and with what outcome.',
    ],
    clarification1P2: 'It does not:',
    clarification1PointsNo: [
      'explain why a decision was made,',
      'justify its correctness,',
      'or assign responsibility.',
    ],
    clarification1Conclusion: 'Explanation, interpretation, and judgment remain human and institutional activities.',
    clarification2Title: 'Clarification 2 - Reconstruction is not evidence',
    clarification2P1: 'Reconstruction assembles narratives after execution using: logs, traces, configuration repositories, human recollection, and retrospective interpretation. Reconstruction may support learning and analysis. It does not preserve the factual state that existed at execution time.',
    clarification2Conclusion: 'This limitation is structural, not methodological. Where factual certainty is required, reconstruction cannot serve as evidence.',
    clarification3Title: 'Clarification 3 - Simulation versus execution-time capture',
    clarification3P1: 'Execution-time evidence cannot be simulated retroactively. If no evidence was captured when a decision was executed, it cannot be recreated later without interpretation.',
    clarification3P2: 'This does not mean that Horizon cannot be demonstrated. Horizon capture can be demonstrated on any live system, including:',
    clarification3Points: [
      'test environments,',
      'sandbox systems,',
      'and demonstration setups.',
    ],
    clarification3Conclusion: 'In those cases, Horizon captures the factual state of that execution. What cannot be simulated is the capture of past executions that never produced evidence at the time they occurred.',
    clarification4Title: 'Clarification 4 - Horizon does not replace reconstruction entirely',
    clarification4P1: 'Horizon does not aim to eliminate reconstruction as an analytical practice. Reconstruction remains useful for: understanding system behavior, exploring alternative explanations, or learning from incidents.',
    clarification4Conclusion: 'What Horizon removes is the need to rely on reconstruction as a source of facts. Reconstruction may inform interpretation; it does not establish factual certainty.',
    clarification5Title: 'Clarification 5 - Institutional control remains unchanged',
    clarification5P1: 'Capturing execution-time evidence does not centralize authority or impose interpretation. The institution retains full control over:',
    clarification5Points: [
      'which decisions are examined,',
      'how facts are interpreted,',
      'what conclusions are drawn,',
      'and what is communicated internally or externally.',
    ],
    clarification5Conclusion: 'Horizon records factual state. Institutional discretion governs its use.',
    clarification6Title: 'Clarification 6 - Why these distinctions matter operationally',
    clarification6P1: 'These distinctions are not purely conceptual. When execution-time evidence does not exist:',
    clarification6Points: [
      'establishing factual state requires coordination across teams,',
      'legacy systems must be accessed or revived,',
      'assumptions must be negotiated,',
      'and effort increases over time.',
    ],
    clarification6Conclusion: 'Execution-time evidence reduces the effort required to establish factual state, support institutional review, and answer questions about past decisions. What changes is not the content of the record. It is the cost of assembling, retaining, and accessing it.',
    clarification7Title: 'Clarification 7 - Horizon is infrastructure, not a method',
    clarification7P1: 'Horizon is not a methodology, framework, or governance prescription. It operates as an infrastructure layer:',
    clarification7Points: [
      'capturing execution-time facts,',
      'preserving them independently of system evolution,',
      'without interfering with decision logic or institutional processes.',
    ],
    clarification7Conclusion: 'The infrastructure enables factual durability. It does not define intent or policy.',
    summaryTitle: 'Summary',
    summaryP1: 'Execution-time evidence exists only when it is produced at execution time. It establishes facts without explanation, survives system evolution, and reduces reliance on reconstruction as a source of truth.',
    summaryConclusion: 'Horizon captures these facts. Institutions retain full control over their interpretation and use.',
  },
};

export default function ClarificationsPage({ params }: { params: { lang: Language } }) {
  const c = content[params.lang];

  return (
    <article className="max-w-3xl">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-black mb-4">{c.title}</h1>
      <h2 className="text-xl text-black/70 mb-8">{c.subtitle}</h2>

      {/* Intro */}
      <p className="text-lg text-black/80 mb-8">{c.intro}</p>

      {/* Clarification 1 */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.clarification1Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.clarification1P1}</p>
        <ul className="space-y-2 mb-6">
          {c.clarification1PointsYes.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80 mb-4">{c.clarification1P2}</p>
        <ul className="space-y-2 mb-6">
          {c.clarification1PointsNo.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.clarification1Conclusion}</p>
      </section>

      {/* Clarification 2 */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-black mb-4">{c.clarification2Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.clarification2P1}</p>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium">{c.clarification2Conclusion}</p>
        </div>
      </section>

      {/* Clarification 3 */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-black mb-4">{c.clarification3Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.clarification3P1}</p>
        <p className="text-lg text-black/80 mb-4">{c.clarification3P2}</p>
        <ul className="space-y-2 mb-6">
          {c.clarification3Points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.clarification3Conclusion}</p>
      </section>

      {/* Clarification 4 */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-black mb-4">{c.clarification4Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.clarification4P1}</p>
        <p className="text-lg text-black/80">{c.clarification4Conclusion}</p>
      </section>

      {/* Clarification 5 */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.clarification5Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.clarification5P1}</p>
        <ul className="space-y-2 mb-6">
          {c.clarification5Points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.clarification5Conclusion}</p>
      </section>

      {/* Clarification 6 */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.clarification6Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.clarification6P1}</p>
        <ul className="space-y-2 mb-6">
          {c.clarification6Points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.clarification6Conclusion}</p>
      </section>

      {/* Clarification 7 */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-black mb-4">{c.clarification7Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.clarification7P1}</p>
        <ul className="space-y-2 mb-6">
          {c.clarification7Points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.clarification7Conclusion}</p>
      </section>

      {/* Summary */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.summaryTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.summaryP1}</p>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium">{c.summaryConclusion}</p>
        </div>
      </section>

      <ReadingPath currentSlug="clarifications" lang={params.lang} />
    </article>
  );
}
