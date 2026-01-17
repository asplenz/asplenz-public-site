import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'Horizon : Capacités techniques',
    subtitle: 'Ce qui est capturé, comment, et les propriétés structurelles garantissant l\'exploitabilité dans le temps',
    intro: 'Cette section décrit les capacités techniques fondamentales de Horizon. Elle précise ce qui est capturé, comment, et quelles propriétés structurelles garantissent que les faits restent exploitables dans le temps, indépendamment de l\'évolution des systèmes.',
    capturesTitle: 'Ce que Horizon capture',
    capturesP1: 'Horizon capture des **Decision Snapshot Artifacts** au moment exact où une décision devient irréversible. Chaque snapshot est composé de faits déclarés, produits à l\'exécution, et non reconstruits après coup. Ces faits sont organisés en deux catégories complémentaires :',
    executionsTitle: '1. Les exécutions',
    executionsP1: 'Une exécution est un acte irréversible par lequel un système automatisé produit un résultat. Elle capture notamment :',
    executionsPoints: [
      { title: 'Les données d\'entrée réellement consommées', desc: 'à l\'instant T0.' },
      { title: 'La logique appliquée', desc: '(règles, modèle, configuration).' },
      { title: 'Le contexte d\'exécution', desc: '' },
      { title: 'Le résultat produit', desc: '' },
    ],
    executionsConclusion: 'L\'exécution constitue le fait primaire, figé dans le temps. Une fois déclarée, elle ne peut plus être modifiée ni reconstituée.',
    evaluationsTitle: '2. Les évaluations',
    evaluationsP1: 'Une évaluation est une déclaration produite après l\'exécution (analyse humaine, relecture métier, revue technique). Chaque évaluation est :',
    evaluationsPoints: [
      { title: 'Explicitement datée', desc: '' },
      { title: 'Reliée à une exécution donnée', desc: '' },
      { title: 'Distincte du fait d\'exécution', desc: '' },
    ],
    evaluationsConclusion: 'Cette séparation empêche toute confusion entre ce qui était connu au moment de l\'action et ce qui a été compris ou jugé plus tard. Elle interdit structurellement les **biais de rétrospective**.',
    contextsTitle: 'Contextes d\'application',
    contexts: [
      { title: 'Décisions assistées par l\'IA', desc: 'Horizon capture les données réellement vues par le modèle et la version exacte du modèle à T0, empêchant toute inférence erronée a posteriori.' },
      { title: 'Flux de décisions automatisés', desc: 'Horizon capture chaque point de bascule. Chaque décision devient un fait autonome, traçable sans dépendance à l\'état futur du pipeline.' },
      { title: 'Escalades avec intervention humaine', desc: 'Horizon permet de distinguer clairement la décision automatisée initiale des arbitrages humains ultérieurs.' },
    ],
    propertiesTitle: 'Propriétés techniques fondamentales',
    properties: [
      { title: 'Auto-contenu', desc: 'L\'artefact contient tout le nécessaire à sa compréhension sans dépendre de systèmes externes.' },
      { title: 'Ajout exclusif (Append-only)', desc: 'Les snapshots ne peuvent être ni modifiés ni supprimés.' },
      { title: 'Séquençage explicite', desc: 'L\'ordre des décisions est vérifiable, rendant toute altération détectable.' },
      { title: 'Intégrité cryptographique', desc: 'Chaque artefact est signé, garantissant son authenticité.' },
      { title: 'Non intrusif', desc: 'Horizon n\'interfère pas avec l\'exécution de la décision elle-même.' },
    ],
    durabilityTitle: 'Durabilité et indépendance',
    durabilityP1: 'Les artefacts sont conçus pour survivre aux systèmes qui les ont produits. Même si le modèle est remplacé, l\'architecture refondue ou le système source décommissionné, les faits restent **lisibles, vérifiables et exploitables**.',
    valueTitle: 'Valeur opérationnelle et contrôle',
    valueP1: 'Horizon ne modifie pas ce que l\'organisation choisit de consigner, mais réduit radicalement l\'effort requis pour établir l\'état factuel. Il diminue les coûts d\'établissement des faits et la dépendance aux systèmes legacy.',
    valueP2: '**Horizon n\'impose aucune narration.** Il n\'automatise aucun jugement et ne définit aucune interprétation. L\'organisation conserve l\'entière maîtrise de l\'examen et de la communication. Horizon fournit simplement la **base factuelle stable** nécessaire à l\'exercice du contrôle institutionnel.',
    whyTitle: 'Pourquoi les traces existantes ne suffisent pas',
    whyP1: 'Les logs et métriques classiques sont fragmentés, dépendants de systèmes évolutifs et ne garantissent pas l\'intégrité dans le temps. Ils sont utiles pour l\'observabilité, mais insuffisants pour établir des faits incontestables.',
    whyConclusion: 'Horizon répond à un besoin structurel différent : la **préservation souveraine des faits d\'exécution**.',
  },
  en: {
    title: 'Horizon: Technical Capabilities',
    subtitle: 'What is captured, how, and the structural properties ensuring actionability over time',
    intro: 'This section describes the core technical capabilities of Horizon. It details what is captured, how, and the structural properties that ensure facts remain actionable over time, regardless of system evolution.',
    capturesTitle: 'What Horizon Captures',
    capturesP1: 'Horizon captures **Decision Snapshot Artifacts** at the exact moment a decision becomes irreversible. Each snapshot consists of declared facts produced at execution time, rather than post-hoc reconstructions. These facts are organized into two complementary categories:',
    executionsTitle: '1. Executions',
    executionsP1: 'An execution is an irreversible act by which an automated system produces an outcome. It specifically captures:',
    executionsPoints: [
      { title: 'The data actually consumed', desc: 'at time T0.' },
      { title: 'The applied logic', desc: '(rules, model, configuration).' },
      { title: 'The execution context', desc: '' },
      { title: 'The produced outcome', desc: '' },
    ],
    executionsConclusion: 'The execution constitutes the primary fact, frozen in time. Once declared, it can neither be modified nor reconstituted.',
    evaluationsTitle: '2. Evaluations',
    evaluationsP1: 'An evaluation is a declaration produced after the execution (human analysis, business review, technical audit). Each evaluation is:',
    evaluationsPoints: [
      { title: 'Explicitly timestamped', desc: '' },
      { title: 'Linked to a specific execution', desc: '' },
      { title: 'Distinct from the execution fact', desc: '' },
    ],
    evaluationsConclusion: 'This separation prevents confusion between what was known at the time of action and what was understood or judged later. It structurally eliminates **hindsight bias**.',
    contextsTitle: 'Application Contexts',
    contexts: [
      { title: 'AI-Assisted Decisions', desc: 'Horizon captures the data actually seen by the model and the exact model version at T0, preventing erroneous post-hoc inferences.' },
      { title: 'Automated Decision Flows', desc: 'Horizon captures every pivot point. Each decision becomes an autonomous fact, traceable over time without dependence on the future state of the pipeline.' },
      { title: 'Human-in-the-loop Escalations', desc: 'Horizon clearly distinguishes the initial automated decision from subsequent human interventions and arbitrations.' },
    ],
    propertiesTitle: 'Core Technical Properties',
    properties: [
      { title: 'Self-contained', desc: 'Each artifact contains all elements necessary for its comprehension without relying on external systems.' },
      { title: 'Append-only', desc: 'Snapshots cannot be modified or deleted once created.' },
      { title: 'Explicit Sequencing', desc: 'The order of decisions is verifiable, making any alteration or deletion detectable.' },
      { title: 'Cryptographic Integrity', desc: 'Every artifact is signed, guaranteeing its authenticity and immutability.' },
      { title: 'Non-intrusive', desc: 'Horizon does not interfere with the execution of the decision itself.' },
    ],
    durabilityTitle: 'Durability and Independence',
    durabilityP1: 'Artifacts are designed to outlive the systems that produced them. Even if the model is replaced, the architecture overhauled, or the source system decommissioned, the facts remain **readable, verifiable, and actionable**.',
    valueTitle: 'Operational Value and Control',
    valueP1: 'Horizon does not change what the organization chooses to record; it radically reduces the effort required to establish the factual state. It decreases the cost of fact-finding and the dependency on legacy systems.',
    valueP2: '**Horizon does not impose a narrative.** It does not automate judgment or define interpretations. The organization retains full control over how facts are examined and communicated. Horizon simply provides the **stable factual base** required for institutional discretion.',
    whyTitle: 'Why Existing Traces Are Insufficient',
    whyP1: 'Standard logs and metrics are fragmented, dependent on evolving systems, and do not guarantee integrity over time. They are useful for observability but insufficient for establishing indisputable facts.',
    whyConclusion: 'Horizon addresses a different structural need: the **sovereign preservation of execution facts**.',
  },
};

function renderMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

export default function HorizonTechnicalCapabilitiesPage({ params }: { params: { lang: Language } }) {
  const c = content[params.lang];

  return (
    <article className="max-w-3xl">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-black mb-4">{c.title}</h1>
      <h2 className="text-xl text-black/70 mb-8">{c.subtitle}</h2>

      {/* Intro */}
      <p className="text-lg text-black/80 mb-8">{c.intro}</p>

      {/* What Horizon Captures */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.capturesTitle}</h3>
        <p className="text-lg text-black/80 mb-6" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.capturesP1) }} />

        {/* Executions */}
        <h4 className="text-xl font-semibold text-black mb-4">{c.executionsTitle}</h4>
        <p className="text-lg text-black/80 mb-4">{c.executionsP1}</p>
        <ul className="space-y-3 mb-6">
          {c.executionsPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span><strong>{point.title}</strong> {point.desc}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80 mb-8">{c.executionsConclusion}</p>

        {/* Evaluations */}
        <h4 className="text-xl font-semibold text-black mb-4">{c.evaluationsTitle}</h4>
        <p className="text-lg text-black/80 mb-4">{c.evaluationsP1}</p>
        <ul className="space-y-3 mb-6">
          {c.evaluationsPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span><strong>{point.title}</strong> {point.desc}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.evaluationsConclusion) }} />
        </div>
      </section>

      {/* Application Contexts */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.contextsTitle}</h3>
        <ul className="space-y-4 mb-6">
          {c.contexts.map((context, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span><strong>{context.title} :</strong> {context.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Core Technical Properties */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.propertiesTitle}</h3>
        <ul className="space-y-4 mb-6">
          {c.properties.map((prop, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span><strong>{prop.title} :</strong> {prop.desc}</span>
            </li>
          ))}
        </ul>

        {/* Durability */}
        <h4 className="text-xl font-semibold text-black mb-4">{c.durabilityTitle}</h4>
        <p className="text-lg text-black/80" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.durabilityP1) }} />
      </section>

      {/* Operational Value and Control */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.valueTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.valueP1}</p>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.valueP2) }} />
        </div>
      </section>

      {/* Why Existing Traces Are Insufficient */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.whyTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.whyP1}</p>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.whyConclusion) }} />
        </div>
      </section>

      <ReadingPath currentSlug="horizon-technical-capabilities" lang={params.lang} />
    </article>
  );
}
