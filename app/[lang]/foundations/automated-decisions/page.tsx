import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'Décisions Automatisées',
    subtitle: 'Comprendre la nature du processus décisionnel automatisé',
    intro: 'Les décisions automatisées sont de plus en plus intégrées aux systèmes opérationnels. Elles déterminent des résultats qui peuvent avoir des effets durables sur les individus, les organisations et les institutions.',
    introP2: 'Une décision automatisée n\'est pas un simple résultat en sortie. C\'est le produit d\'une exécution concrète qui survient à un instant précis, dans des conditions spécifiques. Comprendre la nature d\'une décision automatisée est un prérequis pour comprendre pourquoi son état factuel ne peut être reconstruit de manière fiable a posteriori.',
    componentsTitle: 'Les composantes d\'une décision automatisée',
    componentsP1: 'Une décision automatisée est composée de plusieurs éléments qui déterminent conjointement son résultat.',
    inputTitle: 'Les données d\'entrée',
    inputP1: 'Elles consistent en l\'information disponible pour le système au moment de l\'exécution. Cela peut inclure :',
    inputPoints: [
      'des données fournies par l\'utilisateur,',
      'des signaux contextuels,',
      'des sources de données externes,',
      'des variables dérivées ou calculées.',
    ],
    inputConclusion: 'Ces entrées ne sont pas statiques. Elles évoluent continuellement et peuvent ne plus exister sous la même forme après l\'exécution.',
    logicTitle: 'La logique de décision',
    logicP1: 'Elle définit la manière dont les entrées sont traitées. Elle peut prendre la forme de :',
    logicPoints: [
      'règles déterministes,',
      'modèles statistiques,',
      'modèles d\'apprentissage automatique (Machine Learning),',
      'systèmes hybrides combinant plusieurs approches.',
    ],
    logicConclusion: 'Cette logique est elle-même versionnée, configurée et sujette à modification dans le temps.',
    contextTitle: 'Le contexte d\'exécution',
    contextP1: 'Il inclut :',
    contextPoints: [
      'l\'identité du système,',
      'les paramètres de configuration,',
      'les seuils actifs,',
      'l\'environnement d\'exécution,',
      'les dépendances actives au moment de l\'exécution.',
    ],
    contextConclusion: 'Ce contexte est rarement capturé dans son intégralité par les mécanismes de journalisation (logs) conventionnels, alors qu\'il affecte matériellement la décision.',
    outputTitle: 'Le résultat (Output)',
    outputP1: 'C\'est le produit du système au moment de l\'exécution. Il peut être binaire ou continu, final ou intermédiaire. C\'est souvent le seul élément conservé durablement. À lui seul, le résultat ne décrit ni comment, ni pourquoi il a été produit.',
    factTitle: 'La décision automatisée comme fait d\'exécution',
    factP1: 'Une décision automatisée est un fait d\'exécution. Elle existe à un instant précis, lorsque :',
    factSteps: [
      'des données spécifiques ont été consommées,',
      'une logique spécifique a été appliquée,',
      'dans un contexte spécifique,',
      'pour produire un résultat spécifique.',
    ],
    factConclusion: 'Une fois ce moment passé, l\'état d\'exécution original n\'existe plus dans le système global. Ce qu\'il en reste sont des traces.',
    fragileTitle: 'Pourquoi la reconstruction est structurellement fragile',
    fragileP1: 'Parce que les décisions automatisées dépendent de multiples composantes volatiles, les reconstruire a posteriori est structurellement fragile. En pratique :',
    fragilePoints: [
      'les données d\'entrée peuvent avoir changé ou disparu,',
      'les modèles peuvent avoir été ré-entraînés,',
      'les configurations peuvent avoir évolué,',
      'les environnements d\'exécution peuvent ne plus exister.',
    ],
    fragileConclusion: 'Les logs et les traces capturent des fragments d\'activité, pas l\'état d\'exécution complet. La reconstruction nécessite donc : de l\'inférence, de l\'interprétation et des hypothèses formulées avec la connaissance du résultat final. Ce n\'est pas un défaut d\'implémentation, c\'est une limite structurelle de la reconstruction a posteriori.',
    logsTitle: 'Les logs ne sont pas des preuves d\'exécution',
    logsP1: 'Les journaux traditionnels (logs) sont conçus pour l\'observabilité et le débogage. Ils :',
    logsPoints: [
      'sont distribués entre plusieurs systèmes,',
      'ne sont pas garantis complets,',
      'sont souvent soumis à rotation ou échantillonnage,',
      'ne sont pas liés cryptographiquement au moment de l\'exécution.',
    ],
    logsConclusion: 'Par conséquent, les logs peuvent soutenir une investigation, mais ils ne peuvent établir de manière fiable l\'état factuel d\'une décision au moment exact où elle a été exécutée. La preuve d\'exécution nécessite une approche différente.',
    captureTitle: 'La nécessité d\'une capture au moment de l\'exécution',
    captureP1: 'Si une décision automatisée est un fait d\'exécution, alors préserver ce fait exige de le capturer au moment où il survient, et non de le reconstruire plus tard. Cela implique :',
    capturePoints: [
      'de capturer toutes les composantes pertinentes simultanément,',
      'de les lier à un instant précis dans le temps,',
      'de les préserver indépendamment de l\'évolution future du système.',
    ],
    captureConclusion: 'C\'est le rôle d\'une Infrastructure de Snapshot Décisionnel.',
    independenceTitle: 'Indépendance vis-à-vis du système source',
    independenceP1: 'Pour qu\'une preuve d\'exécution reste exploitable dans le temps, elle ne doit pas dépendre de la survie ou de la stabilité du système source. Les faits d\'exécution doivent rester accessibles même si :',
    independencePoints: [
      'le système de décision est modifié,',
      'l\'architecture est refondue,',
      'le modèle est remplacé,',
      'ou le système est décommissionné.',
    ],
    independenceConclusion: 'Cette indépendance ne peut être atteinte par la reconstruction. Elle nécessite des enregistrements factuels auto-contenus.',
    controlTitle: 'Un contrôle institutionnel inchangé',
    controlP1: 'La capture de preuves au moment de l\'exécution ne change pas qui décide, interprète ou communique. L\'institution conserve l\'entière maîtrise de :',
    controlPoints: [
      'quelles décisions sont examinées,',
      'comment les faits sont interprétés,',
      'quelles conclusions en sont tirées,',
      'et ce qui est divulgué.',
    ],
    controlConclusion: 'La preuve d\'exécution n\'impose pas de récit. Elle fournit une base factuelle stable sur laquelle le jugement institutionnel peut s\'exercer.',
    implicationsTitle: 'Implications opérationnelles',
    implicationsP1: 'La complexité des décisions automatisées ne crée pas seulement un risque conceptuel. Elle crée un coût opérationnel. Lorsque les faits ne sont pas capturés à l\'exécution :',
    implicationsPoints: [
      'les investigations durent plus longtemps,',
      'plusieurs équipes doivent se coordonner,',
      'les systèmes hérités (legacy) doivent être consultés,',
      'et l\'incertitude s\'accumule.',
    ],
    implicationsConclusion: 'Capturer la preuve à l\'exécution réduit l\'effort requis pour établir l\'état factuel lorsqu\'il est nécessaire. Ce qui change n\'est pas le contenu du dossier, c\'est le coût pour l\'assembler, le conserver et y accéder.',
    summaryTitle: 'Résumé',
    summaryP1: 'Les décisions automatisées sont des événements d\'exécution complexes composés d\'éléments volatils. Une fois exécutées, leur état factuel d\'origine ne peut être reconstruit de manière fiable à partir des seules traces. Préserver cet état nécessite de le capturer au moment de l\'exécution, sous une forme qui survit à l\'évolution du système.',
    summaryConclusion: 'C\'est pourquoi les décisions automatisées requièrent une Infrastructure de Snapshot Décisionnel.',
  },
  en: {
    title: 'Automated Decisions',
    subtitle: 'Understanding the nature of automated decision-making',
    intro: 'Automated decisions are increasingly embedded in operational systems. They determine outcomes that can have durable effects on individuals, organizations, and institutions.',
    introP2: 'An automated decision is not a single output. It is the result of a concrete execution that occurs at a specific moment in time, under specific conditions. Understanding what an automated decision is is a prerequisite to understanding why its factual state cannot be reliably reconstructed after the fact.',
    componentsTitle: 'The components of an automated decision',
    componentsP1: 'An automated decision is composed of multiple elements that jointly determine its outcome.',
    inputTitle: 'Input data',
    inputP1: 'Input data consists of the information available to the system at execution time. This may include:',
    inputPoints: [
      'user-provided data,',
      'contextual signals,',
      'external data sources,',
      'derived or computed variables.',
    ],
    inputConclusion: 'These inputs are not static. They evolve continuously and may not exist in the same form after execution.',
    logicTitle: 'Decision logic',
    logicP1: 'The decision logic defines how inputs are processed. It may take the form of:',
    logicPoints: [
      'deterministic rules,',
      'statistical models,',
      'machine learning models,',
      'hybrid systems combining several approaches.',
    ],
    logicConclusion: 'This logic is itself versioned, configured, and subject to change over time.',
    contextTitle: 'Execution context',
    contextP1: 'The execution context includes:',
    contextPoints: [
      'the system identity,',
      'configuration parameters,',
      'thresholds,',
      'runtime environment,',
      'dependencies active at execution time.',
    ],
    contextConclusion: 'This context is rarely captured in full by conventional logging mechanisms, yet it materially affects the decision.',
    outputTitle: 'Output',
    outputP1: 'The output is the result produced by the system at execution time. It may be binary or continuous, final or intermediate, and is often the only element that is durably retained. On its own, the output does not describe how or why it was produced.',
    factTitle: 'Automated decisions as execution-time facts',
    factP1: 'An automated decision is a fact of execution. It exists at a precise moment, when:',
    factSteps: [
      'specific data was consumed,',
      'specific logic was applied,',
      'under a specific context,',
      'to produce a specific outcome.',
    ],
    factConclusion: 'Once this moment has passed, the original execution state no longer exists in the system as a whole. What remains are traces.',
    fragileTitle: 'Why reconstruction is structurally fragile',
    fragileP1: 'Because automated decisions depend on multiple volatile components, reconstructing them after the fact is structurally fragile. In practice:',
    fragilePoints: [
      'input data may have changed or disappeared,',
      'models may have been retrained,',
      'configurations may have evolved,',
      'execution environments may no longer exist.',
    ],
    fragileConclusion: 'Logs and traces capture fragments of activity, not the full execution state. Reconstruction therefore requires: inference, interpretation, and assumptions made with knowledge of the outcome. This is not a failure of implementation. It is a structural limitation of post-hoc reconstruction.',
    logsTitle: 'Logs are not execution-time evidence',
    logsP1: 'Traditional logs are designed for observability and debugging. They:',
    logsPoints: [
      'are distributed across systems,',
      'are not guaranteed to be complete,',
      'are often rotated or sampled,',
      'and are not cryptographically bound to execution time.',
    ],
    logsConclusion: 'As a result, logs can support investigation, but they cannot reliably establish the factual state of a decision at the moment it was executed. Execution-time evidence requires a different approach.',
    captureTitle: 'The need for execution-time capture',
    captureP1: 'If an automated decision is a fact of execution, then preserving that fact requires capturing it when it occurs, not reconstructing it later. This implies:',
    capturePoints: [
      'capturing all relevant components together,',
      'binding them to a precise moment in time,',
      'preserving them independently of future system evolution.',
    ],
    captureConclusion: 'This is the role of a Decision Snapshot Infrastructure.',
    independenceTitle: 'Independence from the source system',
    independenceP1: 'For execution-time evidence to remain usable over time, it must not depend on the continued existence or stability of the source system. Execution-time facts must remain accessible even if:',
    independencePoints: [
      'the decision system is modified,',
      'the architecture is refactored,',
      'the model is replaced,',
      'or the system is decommissioned.',
    ],
    independenceConclusion: 'This independence cannot be achieved through reconstruction. It requires self-contained factual records.',
    controlTitle: 'Institutional control remains unchanged',
    controlP1: 'Capturing execution-time evidence does not change who decides, interprets, or communicates. The institution retains full control over:',
    controlPoints: [
      'which decisions are examined,',
      'how facts are interpreted,',
      'what conclusions are drawn,',
      'and what is disclosed.',
    ],
    controlConclusion: 'Execution-time evidence does not impose a narrative. It provides a stable factual base upon which institutional judgment can be exercised.',
    implicationsTitle: 'Operational implications',
    implicationsP1: 'The complexity of automated decisions does not only create conceptual risk. It creates operational cost. When facts are not captured at execution time:',
    implicationsPoints: [
      'investigations take longer,',
      'multiple teams must coordinate,',
      'legacy systems must be consulted,',
      'and uncertainty accumulates.',
    ],
    implicationsConclusion: 'Capturing execution-time evidence reduces the effort required to establish factual state when it is needed. What changes is not the content of the record. It is the cost of assembling, retaining, and accessing it.',
    summaryTitle: 'Summary',
    summaryP1: 'Automated decisions are complex, execution-time events composed of volatile elements. Once executed, their original factual state cannot be reliably reconstructed from traces alone. Preserving that state requires capturing it at execution time, in a form that survives system evolution.',
    summaryConclusion: 'This is why automated decisions require a Decision Snapshot Infrastructure.',
  },
};

function renderMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

export default function AutomatedDecisionsPage({ params }: { params: { lang: Language } }) {
  const c = content[params.lang];

  return (
    <article className="max-w-3xl">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-black mb-4">{c.title}</h1>
      <h2 className="text-xl text-black/70 mb-8">{c.subtitle}</h2>

      {/* Intro */}
      <p className="text-lg text-black/80 mb-4">{c.intro}</p>
      <p className="text-lg text-black/80 mb-8">{c.introP2}</p>

      {/* Components of an automated decision */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.componentsTitle}</h3>
        <p className="text-lg text-black/80 mb-6">{c.componentsP1}</p>

        {/* Input data */}
        <h4 className="text-xl font-semibold text-black mb-3">{c.inputTitle}</h4>
        <p className="text-lg text-black/80 mb-4">{c.inputP1}</p>
        <ul className="space-y-2 mb-4">
          {c.inputPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80 mb-6">{c.inputConclusion}</p>

        {/* Decision logic */}
        <h4 className="text-xl font-semibold text-black mb-3">{c.logicTitle}</h4>
        <p className="text-lg text-black/80 mb-4">{c.logicP1}</p>
        <ul className="space-y-2 mb-4">
          {c.logicPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80 mb-6">{c.logicConclusion}</p>

        {/* Execution context */}
        <h4 className="text-xl font-semibold text-black mb-3">{c.contextTitle}</h4>
        <p className="text-lg text-black/80 mb-4">{c.contextP1}</p>
        <ul className="space-y-2 mb-4">
          {c.contextPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80 mb-6">{c.contextConclusion}</p>

        {/* Output */}
        <h4 className="text-xl font-semibold text-black mb-3">{c.outputTitle}</h4>
        <p className="text-lg text-black/80">{c.outputP1}</p>
      </section>

      {/* Automated decisions as execution-time facts */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.factTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.factP1}</p>
        <ol className="space-y-2 mb-6">
          {c.factSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] font-semibold">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-lg text-black/80">{c.factConclusion}</p>
      </section>

      {/* Why reconstruction is structurally fragile */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.fragileTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.fragileP1}</p>
        <ul className="space-y-2 mb-6">
          {c.fragilePoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium">{c.fragileConclusion}</p>
        </div>
      </section>

      {/* Logs are not execution-time evidence */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.logsTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.logsP1}</p>
        <ul className="space-y-2 mb-6">
          {c.logsPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.logsConclusion}</p>
      </section>

      {/* The need for execution-time capture */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.captureTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.captureP1}</p>
        <ul className="space-y-2 mb-6">
          {c.capturePoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium">{c.captureConclusion}</p>
        </div>
      </section>

      {/* Independence from the source system */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.independenceTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.independenceP1}</p>
        <ul className="space-y-2 mb-6">
          {c.independencePoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.independenceConclusion}</p>
      </section>

      {/* Institutional control remains unchanged */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.controlTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.controlP1}</p>
        <ul className="space-y-2 mb-6">
          {c.controlPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.controlConclusion}</p>
      </section>

      {/* Operational implications */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.implicationsTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.implicationsP1}</p>
        <ul className="space-y-2 mb-6">
          {c.implicationsPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.implicationsConclusion}</p>
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

      <ReadingPath currentSlug="automated-decisions" lang={params.lang} />
    </article>
  );
}
