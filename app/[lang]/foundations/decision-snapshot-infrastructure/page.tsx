import Link from 'next/link';
import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'L\'Infrastructure de Snapshot Décisionnel',
    intro: 'Les systèmes de décision automatisés produisent des résultats aux conséquences durables. Pourtant, l\'état factuel ayant conduit à ces décisions survit rarement à l\'évolution des systèmes qui les ont produites.',
    introP2: 'Au fil du temps, les modèles sont ré-entraînés, les règles sont mises à jour, les sources de données changent et les architectures sont remplacées. Lorsque des décisions passées doivent être comprises, les organisations sont contraintes de **reconstruire la réalité a posteriori**, à partir de sources partielles et hétérogènes.',
    introP3: 'Cette reconstruction est, par nature, fragile.',
    evidenceTitle: 'Preuve vs Reconstruction',
    evidenceP1: 'Dans la plupart des systèmes automatisés, la preuve factuelle n\'est pas produite au moment de l\'exécution. Au lieu de cela, le passé est déduit plus tard à partir de logs, de bases de données, de configurations et de souvenirs humains.',
    evidenceP2: 'À mesure que les systèmes évoluent, cette « mémoire » devient distribuée, incomplète et contestée. Différentes équipes reconstruisent des versions divergentes de ce qui s\'est passé, souvent sans socle factuel commun.',
    evidenceQuote: 'La reconstruction n\'est pas une preuve. C\'est une approximation construite sous des contraintes qui n\'existaient pas au moment de l\'exécution.',
    principleTitle: 'Le principe central : Capturer au Point de Non-Retour',
    principleStatement: 'La preuve doit être créée au point de non-retour - le moment où la décision devient irréversible.',
    principleIntro: 'À cet instant précis, le système :',
    principlePoints: [
      'a consommé des entrées spécifiques,',
      'a appliqué une logique ou un modèle spécifique,',
      'a opéré sous une configuration spécifique,',
      'et a produit un résultat concret.',
    ],
    principleConclusion: 'Une fois ce moment passé, l\'état factuel d\'origine ne peut plus être recréé avec certitude.',
    principleEnd: 'Une Infrastructure de Snapshot Décisionnel existe pour capturer cet état **une fois**, **tel qu\'il était**, **au moment où il s\'est produit**.',
    factTitle: 'Ce qu\'est un fait (dans ce contexte)',
    factP1: 'Dans ce contexte, un *fait* n\'est ni une interprétation, ni une justification, ni une explication.',
    factP2: 'Un fait est un **acte d\'exécution signé et enregistré**, capturé à l\'instant exact où la décision est produite.',
    factIncludes: 'Il inclut :',
    factPoints: [
      'les données réellement consommées,',
      'la version de la logique ou du modèle appliquée,',
      'le contexte d\'exécution exact,',
      'le résultat généré.',
    ],
    factConclusion: 'Les faits sont déclarés ; ils ne sont pas déduits.',
    scenarioTitle: 'Scénario illustratif',
    scenarioP1: 'Considérons une décision d\'octroi de prêt produite par un système automatisé.',
    scenarioP2: 'À l\'exécution, le système reçoit un ensemble spécifique de données du demandeur, applique une version et une configuration de modèle données, et émet une décision d\'approbation. Cette décision peut plus tard être remise en question, révisée ou même jugée incorrecte d\'un point de vue métier ou politique.',
    scenarioQuote: 'Cela ne change pas le fait de ce qui a été exécuté.',
    scenarioConclusion: 'Un Snapshot Décisionnel ne légitime ni ne justifie le résultat. Il n\'affirme pas que la décision était correcte. Il établit une seule chose : **ce que le système a réellement fait, avec ce qu\'il avait, à cet instant précis.**',
    infraTitle: 'Du principe à l\'infrastructure',
    infraP1: 'Une Infrastructure de Snapshot Décisionnel n\'est **ni un outil d\'audit**, **ni une plateforme d\'analyse**, **ni un processus de gouvernance**.',
    infraP2: 'C\'est une **couche technique fondamentale** dont le seul rôle est de garantir que les états factuels d\'exécution existent indépendamment de l\'évolution des systèmes.',
    infraIntro: 'Elle :',
    infraPoints: [
      's\'intègre aux côtés des systèmes de décision existants,',
      'capture les états d\'exécution sans interférer avec la logique de décision,',
      'produit des enregistrements immuables et auto-contenus,',
      'reste neutre quant à la manière dont ces enregistrements sont ultérieurement utilisés.',
    ],
    infraConclusion: 'L\'infrastructure ne décide pas de ce qui importe. Elle garantit que les faits sont disponibles quand ils importent.',
    contextTitle: 'Contextes institutionnels',
    contextIntro: 'Les organisations exercent déjà leur pouvoir discrétionnaire sur :',
    contextPoints: [
      'ce qui entre dans un dossier officiel,',
      'comment les faits sont interprétés,',
      'ce qui est communiqué en interne ou en externe.',
    ],
    contextP1: 'Une Infrastructure de Snapshot Décisionnel **ne modifie pas ce contrôle**.',
    contextConclusion: 'Ce qu\'elle change, c\'est la **charge opérationnelle** liée à l\'établissement des faits lorsqu\'ils sont nécessaires. La latitude institutionnelle reste la même ; l\'effort requis pour la soutenir est réduit.',
    opsTitle: 'Implications opérationnelles',
    opsP1: 'L\'impact principal d\'une Infrastructure de Snapshot Décisionnel est opérationnel. Elle ne crée pas de nouvelles obligations, elle supprime les coûts récurrents associés à la reconstruction du passé.',
    opsIntro: 'Concrètement, elle réduit :',
    opsPoints: [
      'l\'effort requis pour établir l\'état factuel après l\'exécution,',
      'la coordination entre équipes lors de révisions, d\'incidents ou d\'enquêtes,',
      'la dépendance vis-à-vis des systèmes hérités, des configurations passées et des anciennes équipes.',
    ],
    opsQuote1: 'Le contenu du dossier ne change pas.',
    opsQuote2: 'Le coût pour l\'assembler, le conserver et y accéder change.',
    boundariesTitle: 'Principes et limites',
    boundariesP1: 'Une Infrastructure de Snapshot Décisionnel est intentionnellement délimitée.',
    boundariesIntro: 'Elle :',
    boundariesPoints: [
      'n\'explique pas les décisions,',
      'n\'automatise pas l\'interprétation,',
      'n\'impose pas de règles de gouvernance,',
      'ne remplace pas le jugement humain.',
    ],
    boundariesConclusion: 'Sa responsabilité s\'arrête là où l\'interprétation commence.',
    availabilityTitle: 'Disponibilité dans le temps',
    availabilityP1: 'Les systèmes changent. Les organisations évoluent. Les équipes se renouvellent.',
    availabilityP2: 'Les Snapshots Décisionnels sont conçus pour survivre aux systèmes qui les ont produits. Ils restent :',
    availabilityPoints: [
      'lisibles,',
      'vérifiables,',
      'et indépendants de la survie du système source.',
    ],
    dialogueTitle: 'Dialogue d\'acceptabilité',
    dialogueP1: 'Parce que cette infrastructure touche à la réalité de l\'exécution, son adoption ne peut être abstraite. L\'acceptabilité doit être évaluée en contexte : technique, organisationnel et institutionnel.',
    dialogueP2: 'C\'est pourquoi l\'adoption commence par un **dialogue d\'acceptabilité**, et non par une démonstration générique ou une approbation théorique.',
    dialogueCta: 'Initier un dialogue d\'acceptabilité',
  },
  en: {
    title: 'Decision Snapshot Infrastructure',
    intro: 'Automated decision systems produce outcomes that have lasting consequences. Yet the factual state that led to those decisions rarely survives the evolution of the systems that produced them.',
    introP2: 'Over time, models are retrained, rules are updated, data sources change, and architectures are replaced. When past decisions must be understood, organizations are forced to **reconstruct reality after the fact**, using partial and heterogeneous sources.',
    introP3: 'This reconstruction is fragile by nature.',
    evidenceTitle: 'Evidence vs Reconstruction',
    evidenceP1: 'In most automated systems, factual evidence is not produced at execution time. Instead, the past is inferred later from logs, databases, configurations, and human recollections.',
    evidenceP2: 'As systems evolve, this "memory" becomes distributed, incomplete, and contested. Different teams reconstruct different versions of what happened, often with no shared factual baseline.',
    evidenceQuote: 'Reconstruction is not evidence. It is an approximation built under constraints that did not exist at execution time.',
    principleTitle: 'The Core Principle: Capture at the Point of No Return',
    principleStatement: 'Evidence should be created at the point of no return - when the decision becomes irreversible.',
    principleIntro: 'At that moment, the system:',
    principlePoints: [
      'has consumed specific inputs,',
      'applied a specific logic or model,',
      'operated under a specific configuration,',
      'and produced a concrete outcome.',
    ],
    principleConclusion: 'Once that moment has passed, the original factual state cannot be recreated with certainty.',
    principleEnd: 'A Decision Snapshot Infrastructure exists to capture that state **once**, **as it was**, **when it occurred**.',
    factTitle: 'What Is a Fact (in this context)',
    factP1: 'In this context, a *fact* is not an interpretation, a justification, or an explanation.',
    factP2: 'A fact is a **signed and recorded act of execution**, captured at the exact moment the decision is produced.',
    factIncludes: 'It includes:',
    factPoints: [
      'what data was actually consumed,',
      'which logic or model version was applied,',
      'under which execution context,',
      'and what output was generated.',
    ],
    factConclusion: 'Facts are declared, not inferred.',
    scenarioTitle: 'Illustrative Scenario',
    scenarioP1: 'Consider a loan approval decision produced by an automated system.',
    scenarioP2: 'At execution time, the system receives a specific set of applicant data, applies a given model version and configuration, and outputs an approval decision. That decision may later be questioned, revised, or even deemed incorrect from a business or policy perspective.',
    scenarioQuote: 'This does not change the fact of what was executed.',
    scenarioConclusion: 'A Decision Snapshot does **not** legitimize or justify the outcome. It does **not** assert that the decision was correct. It establishes only one thing: **what the system actually did, with what it had, at that moment.**',
    infraTitle: 'From Principle to Infrastructure',
    infraP1: 'A Decision Snapshot Infrastructure is **not an audit tool**, **not an analytics platform**, and **not a governance process**.',
    infraP2: 'It is a **foundational technical layer** whose sole role is to ensure that factual execution states exist independently of system evolution.',
    infraIntro: 'It:',
    infraPoints: [
      'integrates alongside existing decision systems,',
      'captures execution states without interfering with decision logic,',
      'produces immutable, self-contained records,',
      'and remains neutral to how those records are later interpreted or used.',
    ],
    infraConclusion: 'The infrastructure does not decide what matters. It ensures that facts are available when they do.',
    contextTitle: 'Institutional Contexts',
    contextIntro: 'Organizations already exercise discretion over:',
    contextPoints: [
      'what enters an official record,',
      'how facts are interpreted,',
      'what is communicated internally or externally.',
    ],
    contextP1: 'A Decision Snapshot Infrastructure **does not change this control**.',
    contextConclusion: 'What it changes is the **operational burden** of establishing facts when they are needed. The institutional latitude remains the same. The effort required to support it is reduced.',
    opsTitle: 'Operational Implications',
    opsP1: 'The primary impact of a Decision Snapshot Infrastructure is operational. It does not create new obligations. It removes recurring costs associated with reconstructing the past.',
    opsIntro: 'Concretely, it reduces:',
    opsPoints: [
      'the effort required to establish factual state post-execution,',
      'cross-team coordination during reviews, incidents, or inquiries,',
      'dependency on legacy systems, configurations, and former teams.',
    ],
    opsQuote1: 'The content of the record does not change.',
    opsQuote2: 'The cost of assembling, retaining, and accessing it does.',
    boundariesTitle: 'Principles & Boundaries',
    boundariesP1: 'A Decision Snapshot Infrastructure is intentionally bounded.',
    boundariesIntro: 'It:',
    boundariesPoints: [
      'does not explain decisions,',
      'does not automate interpretation,',
      'does not enforce governance rules,',
      'does not replace human judgment.',
    ],
    boundariesConclusion: 'Its responsibility ends where interpretation begins.',
    availabilityTitle: 'Availability Over Time',
    availabilityP1: 'Systems change. Organizations evolve. Teams move on.',
    availabilityP2: 'Decision Snapshots are designed to outlive the systems that produced them. They remain:',
    availabilityPoints: [
      'readable,',
      'verifiable,',
      'and independent of the continued existence of the source system.',
    ],
    dialogueTitle: 'Acceptability Dialogue',
    dialogueP1: 'Because this infrastructure touches execution reality, its adoption cannot be abstract. Acceptability must be assessed in context: technical, organizational, and institutional.',
    dialogueP2: 'This is why adoption begins with an **acceptability dialogue**, not with a generic demonstration or theoretical endorsement.',
    dialogueCta: 'Initiate an acceptability dialogue',
  },
};

function renderMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

export default function DecisionSnapshotInfrastructurePage({ params }: { params: { lang: Language } }) {
  const c = content[params.lang];

  return (
    <article className="max-w-3xl">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-black mb-8">{c.title}</h1>

      {/* Intro */}
      <p className="text-lg text-black/80 mb-4">{c.intro}</p>
      <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.introP2) }} />
      <p className="text-lg text-black/80 mb-8">{c.introP3}</p>

      {/* Evidence vs Reconstruction */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h2 className="text-2xl font-semibold text-black mb-4">{c.evidenceTitle}</h2>
        <p className="text-lg text-black/80 mb-4">{c.evidenceP1}</p>
        <p className="text-lg text-black/80 mb-6">{c.evidenceP2}</p>
        <div className="bg-[#005C99] text-white p-6 mb-4">
          <p className="text-lg font-medium">👉 {c.evidenceQuote}</p>
        </div>
      </section>

      {/* Core Principle */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h2 className="text-2xl font-semibold text-black mb-4">{c.principleTitle}</h2>
        <p className="text-lg font-semibold text-black mb-4">{c.principleStatement}</p>
        <p className="text-lg text-black/80 mb-4">{c.principleIntro}</p>
        <ul className="space-y-2 mb-6">
          {c.principlePoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80 mb-4">{c.principleConclusion}</p>
        <p className="text-lg text-black/80" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.principleEnd) }} />
      </section>

      {/* What Is a Fact */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h2 className="text-2xl font-semibold text-black mb-4">{c.factTitle}</h2>
        <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.factP1) }} />
        <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.factP2) }} />
        <p className="text-lg text-black/80 mb-4">{c.factIncludes}</p>
        <ul className="space-y-2 mb-6">
          {c.factPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80 font-medium">{c.factConclusion}</p>
      </section>

      {/* Illustrative Scenario */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h2 className="text-2xl font-semibold text-black mb-4">{c.scenarioTitle}</h2>
        <p className="text-lg text-black/80 mb-4">{c.scenarioP1}</p>
        <p className="text-lg text-black/80 mb-6">{c.scenarioP2}</p>
        <div className="bg-[#005C99] text-white p-6 mb-6">
          <p className="text-lg font-medium">👉 {c.scenarioQuote}</p>
        </div>
        <p className="text-lg text-black/80" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.scenarioConclusion) }} />
      </section>

      {/* From Principle to Infrastructure */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h2 className="text-2xl font-semibold text-black mb-4">{c.infraTitle}</h2>
        <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.infraP1) }} />
        <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.infraP2) }} />
        <p className="text-lg text-black/80 mb-4">{c.infraIntro}</p>
        <ul className="space-y-2 mb-6">
          {c.infraPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.infraConclusion}</p>
      </section>

      {/* Institutional Contexts */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h2 className="text-2xl font-semibold text-black mb-4">{c.contextTitle}</h2>
        <p className="text-lg text-black/80 mb-4">{c.contextIntro}</p>
        <ul className="space-y-2 mb-6">
          {c.contextPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.contextP1) }} />
        <p className="text-lg text-black/80" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.contextConclusion) }} />
      </section>

      {/* Operational Implications */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h2 className="text-2xl font-semibold text-black mb-4">{c.opsTitle}</h2>
        <p className="text-lg text-black/80 mb-4">{c.opsP1}</p>
        <p className="text-lg text-black/80 mb-4">{c.opsIntro}</p>
        <ul className="space-y-2 mb-6">
          {c.opsPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="space-y-2">
          <p className="text-[#005C99] font-medium">👉 {c.opsQuote1}</p>
          <p className="text-[#005C99] font-medium">👉 {c.opsQuote2}</p>
        </div>
      </section>

      {/* Principles & Boundaries */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h2 className="text-2xl font-semibold text-black mb-4">{c.boundariesTitle}</h2>
        <p className="text-lg text-black/80 mb-4">{c.boundariesP1}</p>
        <p className="text-lg text-black/80 mb-4">{c.boundariesIntro}</p>
        <ul className="space-y-2 mb-6">
          {c.boundariesPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.boundariesConclusion}</p>
      </section>

      {/* Availability Over Time */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h2 className="text-2xl font-semibold text-black mb-4">{c.availabilityTitle}</h2>
        <p className="text-lg text-black/80 mb-4">{c.availabilityP1}</p>
        <p className="text-lg text-black/80 mb-4">{c.availabilityP2}</p>
        <ul className="space-y-2 mb-6">
          {c.availabilityPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Acceptability Dialogue */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h2 className="text-2xl font-semibold text-black mb-4">{c.dialogueTitle}</h2>
        <p className="text-lg text-black/80 mb-4">{c.dialogueP1}</p>
        <p className="text-lg text-black/80 mb-6" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.dialogueP2) }} />
        <Link
          href={`/${params.lang}/engagement`}
          className="inline-flex items-center gap-2 bg-[#005C99] text-white px-6 py-3 font-medium hover:bg-[#005C99]/90 transition-colors"
        >
          {c.dialogueCta} <span>→</span>
        </Link>
      </section>

      <ReadingPath currentSlug="decision-snapshot-infrastructure" lang={params.lang} />
    </article>
  );
}
