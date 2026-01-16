import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    hero: {
      title: 'Prouver ce qui s\'est réellement passé',
      subtitle: 'au moment où la décision est prise',
      intro: 'ASPLENZ Horizon est une infrastructure indépendante qui permet aux institutions de conserver une preuve fiable, complète et incontestable de leurs décisions automatisées, exactement au moment où elles deviennent irréversibles.',
      cta: 'Quand une décision peut être contestée, l\'explication après coup ne suffit plus.',
    },
    problem: {
      title: 'Le problème que vous vivez déjà',
      question: 'Que savait réellement le système au moment de la décision ?',
      intro: 'Lorsqu\'une décision automatisée est contestée — audit, incident, litige, régulateur — la question n\'est jamais : « Que dit le système aujourd\'hui ? » mais toujours :',
      points: [
        'les systèmes ont évolué.',
        'les paramètres ont changé.',
        'les modèles ont été mis à jour.',
        'les journaux sont incomplets ou dérivés.',
      ],
      result: 'Résultat : vous devez reconstruire le passé au lieu de pouvoir le prouver.',
    },
    cost: {
      title: 'Le coût réel de la reconstitution',
      intro: 'Chaque fois qu\'une décision est contestée, la reconstitution implique :',
      points: [
        'des équipes mobilisées pendant des jours ou des semaines.',
        'des experts seniors détournés de leurs fonctions critiques.',
        'des systèmes interrogés dans des états qui n\'existent plus.',
        'des hypothèses techniques impossibles à vérifier.',
        'des délais incompatibles avec les exigences réglementaires.',
      ],
      consequences: [
        'coûte cher en ressources humaines.',
        'fragilise juridiquement vos positions.',
        'augmente l\'incertitude lors des audits et litiges.',
        'expose l\'institution à des conclusions contestables.',
      ],
      conclusion: 'La reconstitution n\'est pas seulement imparfaite. Elle est structurellement coûteuse, lente et risquée.',
    },
    risk: {
      title: 'Un risque asymétrique et irréversible',
      intro: 'Tant qu\'aucune décision n\'est contestée, l\'absence de preuve ne se voit pas. Mais le jour où une décision automatisée est remise en cause :',
      points: [
        'la preuve est exigée immédiatement.',
        'le niveau d\'exigence est maximal.',
        'aucune reconstruction ultérieure n\'est suffisante.',
      ],
      conclusion: 'Ce risque n\'est pas progressif. Il se matérialise en une seule fois, au pire moment. Et surtout : il est impossible de le corriger a posteriori.',
    },
    rule: {
      title: 'La règle qui change tout',
      content: 'Si la preuve n\'est pas capturée au moment exact où l\'action devient irréversible, alors ce n\'est plus une preuve.',
      conclusion: 'ASPLENZ Horizon part de cette règle simple et non négociable. La preuve doit exister avant la contestation, pas être produite après.',
    },
    whatHorizonDoes: {
      title: 'Ce que fait Horizon',
      intro: 'Horizon capture, au moment précis où une décision devient irréversible :',
      points: [
        'l\'état réel du système.',
        'les règles et paramètres effectivement appliqués.',
        'le contexte décisionnel disponible.',
        'l\'action exécutée.',
      ],
      proofIs: [
        'indépendante des systèmes qui décident.',
        'figée dans le temps.',
        'exploitable immédiatement ou des années plus tard.',
      ],
      conclusion: 'Vous n\'avez plus à reconstruire. Vous pouvez montrer ce qui s\'est réellement passé.',
    },
    whySeparate: {
      title: 'Pourquoi une infrastructure séparée',
      content: 'Les systèmes qui prennent des décisions évoluent en permanence. Ils ne peuvent pas être une source fiable de leur propre preuve.',
      points: [
        'le système agit.',
        'Horizon conserve la preuve.',
      ],
      conclusion: 'Cette séparation empêche la preuve de dériver avec le système et garantit sa valeur institutionnelle dans le temps.',
    },
    whatHorizonIsNot: {
      title: 'Ce que Horizon n\'est pas',
      points: [
        'ni un outil de monitoring.',
        'ni une solution d\'observabilité.',
        'ni un système d\'explicabilité IA.',
        'ni un moteur de décision.',
      ],
      conclusion: '👉 Horizon témoigne.',
    },
    benefits: {
      title: 'Ce que cela change pour votre organisation',
      items: [
        { title: 'Audits et régulation', desc: 'Vous fournissez des faits vérifiables, pas des reconstructions narratives.' },
        { title: 'Litiges et incidents', desc: 'Vous réduisez l\'incertitude juridique liée aux décisions automatisées.' },
        { title: 'Gouvernance interne', desc: 'Vous établissez une source de vérité stable pour les décisions critiques.' },
        { title: 'Décisions à fort enjeu', desc: 'Vous transformez un risque futur asymétrique en fait prouvable dès aujourd\'hui.' },
      ],
    },
    environments: {
      title: 'Pour quels environnements',
      intro: 'Horizon est conçu pour les organisations où :',
      points: [
        'les décisions sont automatisées.',
        'les impacts sont élevés.',
        'la contestation est possible à court ou long terme.',
        'la preuve doit résister au temps.',
      ],
      conclusion: 'Si une décision peut être remise en cause dans 6 mois ou dans 6 ans, Horizon permet d\'en conserver la réalité factuelle.',
    },
    engage: {
      title: 'Collaborer avec nous',
      intro: 'Les organisations sollicitent Asplenz pour différentes raisons. Toutes les interventions ci-dessous sont des points d\'entrée indépendants.',
      items: [
        {
          title: '1. Discuter d\'Horizon',
          desc: 'Pour les organisations qui reconnaissent déjà le besoin d\'une capacité de preuve d\'exécution.',
          points: [
            'Discuter de l\'adéquation d\'Horizon avec votre contexte.',
            'Clarifier le périmètre et l\'acceptabilité institutionnelle.',
            'Explorer l\'intégration dans votre paysage décisionnel.',
          ],
          link: 'contact',
          linkText: 'Nous contacter',
        },
        {
          title: '2. IA Appliquée : Diagnostic Décision & Responsabilité',
          desc: 'Un travail de terrain court et ciblé pour identifier où l\'IA influence les décisions réelles.',
          points: [
            'Identifier les décisions automatisées ou influencées par l\'IA.',
            'Évaluer les écarts de responsabilité et les zones où la preuve est manquante.',
          ],
          link: 'applied-ai-field-work',
          linkText: 'En savoir plus',
        },
        {
          title: '3. Audit de Conformité & Post-mortem',
          desc: 'Soutien ciblé avant ou après des audits, des contrôles ou des incidents.',
          points: [
            'Établir factuellement ce qui peut être prouvé et ce qui ne peut pas l\'être.',
            'Déterminer précisément où la responsabilité est matériellement exposée.',
          ],
          link: 'audit-readiness-postmortem',
          linkText: 'En savoir plus',
        },
      ],
    },
    whatAsplenzDoes: {
      title: 'Ce qu\'Asplenz fait, et ne fait pas',
      intro: 'Asplenz n\'offre pas de conseil générique en IA, de programmes d\'optimisation de la productivité, ou de développement sur mesure.',
      points: [
        { title: 'Indépendante', desc: 'limitée dans le temps pour garantir une clarté immédiate.' },
        { title: 'Ancrée', desc: 'basée sur des décisions opérationnelles réelles.' },
        { title: 'Stratégique', desc: 'focalisée sur la responsabilité comme socle de la performance.' },
        { title: 'Souveraine', desc: 'conçue pour mettre fin à la dépendance technologique en matière de preuve.' },
      ],
    },
    whitePaper: {
      title: 'Aller plus loin',
      subtitle: 'Lire le White Paper',
      content: 'Le white paper détaille les principes de la preuve d\'exécution, l\'architecture de Horizon, et les implications institutionnelles, juridiques et techniques.',
      cta: 'Pour comprendre le "pourquoi" et le "comment", au-delà de cette page.',
      linkText: 'Lire le White Paper',
    },
    contact: {
      title: 'Parlons-en',
      content: 'Vous gérez des décisions automatisées critiques et souhaitez éliminer un risque irréversible avant qu\'il ne se matérialise ?',
      linkText: 'Contact',
    },
  },
  en: {
    hero: {
      title: 'Prove what actually happened',
      subtitle: 'at the moment of decision',
      intro: 'ASPLENZ Horizon is an independent infrastructure that allows institutions to maintain reliable, complete, and incontestable evidence of their automated decisions, precisely at the moment they become irreversible.',
      cta: 'When a decision can be contested, after-the-fact explanation is no longer enough.',
    },
    problem: {
      title: 'The problem you already face',
      question: 'What did the system actually know at the moment of decision?',
      intro: 'When an automated decision is contested — audit, incident, dispute, regulator — the question is never: "What does the system say today?" but always:',
      points: [
        'systems have evolved.',
        'parameters have changed.',
        'models have been updated.',
        'logs are incomplete or derived.',
      ],
      result: 'Result: you must reconstruct the past instead of being able to prove it.',
    },
    cost: {
      title: 'The real cost of reconstruction',
      intro: 'Every time a decision is contested, reconstruction involves:',
      points: [
        'teams mobilized for days or weeks.',
        'senior experts diverted from their critical functions.',
        'systems queried in states that no longer exist.',
        'technical hypotheses that are impossible to verify.',
        'timelines incompatible with regulatory requirements.',
      ],
      consequences: [
        'is expensive in human resources.',
        'weakens your legal standing.',
        'increases uncertainty during audits and disputes.',
        'exposes the institution to contestable conclusions.',
      ],
      conclusion: 'Reconstruction is not just imperfect. It is structurally costly, slow, and risky.',
    },
    risk: {
      title: 'An asymmetric and irreversible risk',
      intro: 'As long as no decision is contested, the absence of evidence remains invisible. But the day an automated decision is questioned:',
      points: [
        'evidence is required immediately.',
        'the standard of proof is at its maximum.',
        'no later reconstruction is sufficient.',
      ],
      conclusion: 'This risk is not gradual. It materializes all at once, at the worst possible time. And above all: it is impossible to correct after the fact.',
    },
    rule: {
      title: 'The rule that changes everything',
      content: 'If evidence is not captured at the precise moment an action becomes irreversible, then it is no longer evidence.',
      conclusion: 'ASPLENZ Horizon starts from this simple and non-negotiable rule. Evidence must exist before the contestation, not be produced after.',
    },
    whatHorizonDoes: {
      title: 'What Horizon does',
      intro: 'Horizon captures, at the precise moment a decision becomes irreversible:',
      points: [
        'the real state of the system.',
        'the rules and parameters actually applied.',
        'the available decision context.',
        'the action executed.',
      ],
      proofIs: [
        'independent of the deciding systems.',
        'fixed in time.',
        'usable immediately or years later.',
      ],
      conclusion: 'You no longer have to reconstruct. You can show what actually happened.',
    },
    whySeparate: {
      title: 'Why a separate infrastructure',
      content: 'Systems that take decisions evolve constantly. They cannot be a reliable source of their own evidence.',
      points: [
        'the system acts.',
        'Horizon preserves the proof.',
      ],
      conclusion: 'This separation prevents evidence from drifting with the system and guarantees its institutional value over time.',
    },
    whatHorizonIsNot: {
      title: 'What Horizon is not',
      points: [
        'neither a monitoring tool.',
        'neither an observability solution.',
        'neither an AI explainability system.',
        'neither a decision engine.',
      ],
      conclusion: '👉 Horizon bears witness.',
    },
    benefits: {
      title: 'What this changes for your organization',
      items: [
        { title: 'Audits and regulation', desc: 'You provide verifiable facts, not narrative reconstructions.' },
        { title: 'Disputes and incidents', desc: 'You reduce legal uncertainty related to automated decisions.' },
        { title: 'Internal governance', desc: 'You establish a stable source of truth for critical decisions.' },
        { title: 'High-stakes decisions', desc: 'You transform asymmetric future risk into provable facts today.' },
      ],
    },
    environments: {
      title: 'For which environments',
      intro: 'Horizon is designed for organizations where:',
      points: [
        'decisions are automated.',
        'impacts are high.',
        'contestability is possible in the short or long term.',
        'evidence must resist time.',
      ],
      conclusion: 'If a decision can be challenged in 6 months or 6 years, Horizon preserves its factual reality.',
    },
    engage: {
      title: 'Engage with us',
      intro: 'Organizations engage with Asplenz for different reasons. All engagements below are independent entry points.',
      items: [
        {
          title: '1. Discuss Horizon',
          desc: 'For organizations that already recognize the need for a capability of execution evidence.',
          points: [
            'Discuss Horizon\'s fit within your governance, risk, and legal context.',
            'Clarify scope and institutional acceptability.',
            'Explore how execution evidence would integrate into your decision landscape.',
          ],
          link: 'contact',
          linkText: 'Get in touch',
        },
        {
          title: '2. Applied AI — Decision & Responsibility Field Work',
          desc: 'Short, focused field work to identify where AI influences real decisions.',
          points: [
            'Identify automated or AI-assisted decisions.',
            'Assess responsibility gaps and areas where proof is missing.',
          ],
          link: 'applied-ai-field-work',
          linkText: 'Learn more',
        },
        {
          title: '3. Audit Readiness & Post-mortem',
          desc: 'Targeted support before or after audits, reviews, or incidents.',
          points: [
            'Establish factually what can and cannot be proven.',
            'Determine exactly where responsibility is materially exposed.',
          ],
          link: 'audit-readiness-postmortem',
          linkText: 'Learn more',
        },
      ],
    },
    whatAsplenzDoes: {
      title: 'What Asplenz does, and does not do',
      intro: 'Asplenz does not offer generic AI consulting, productivity optimization programs, or custom development.',
      points: [
        { title: 'Independent', desc: 'time-boxed to ensure immediate clarity.' },
        { title: 'Grounded', desc: 'based on real operational decisions.' },
        { title: 'Strategic', desc: 'focused on accountability as the foundation of performance.' },
        { title: 'Sovereign', desc: 'designed to end technological dependency regarding evidence.' },
      ],
    },
    whitePaper: {
      title: 'Go further',
      subtitle: 'Read the White Paper',
      content: 'The white paper details execution-time evidence principles, Horizon\'s architecture, and institutional, legal, and technical implications.',
      cta: 'To understand the "why" and the "how," beyond this page.',
      linkText: 'Read the White Paper',
    },
    contact: {
      title: 'Get in touch',
      content: 'Do you manage critical automated decisions and want to eliminate irreversible risk before it materializes?',
      linkText: 'Contact',
    },
  },
};

export default function HomePage({
  params,
}: {
  params: { lang: Language };
}) {
  const c = content[params.lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-black mb-4">
            {c.hero.title}
          </h1>
          <p className="text-2xl lg:text-3xl font-light text-black/60 mb-8">
            {c.hero.subtitle}
          </p>
          <p className="text-lg lg:text-xl leading-relaxed text-black/80 mb-8 max-w-3xl">
            {c.hero.intro}
          </p>
          <p className="text-lg font-medium text-black/90 border-l-4 border-[#1e3a8a] pl-4">
            {c.hero.cta}
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.problem.title}</h2>
          <p className="text-lg text-black/70 mb-4">{c.problem.intro}</p>
          <blockquote className="text-xl font-medium text-black border-l-4 border-[#1e3a8a] pl-4 py-2 my-6 bg-white">
            "{c.problem.question}"
          </blockquote>
          <p className="text-black/70 mb-4">{params.lang === 'fr' ? 'Dans la majorité des organisations, cette réalité n\'existe plus :' : 'In most organizations, this reality no longer exists:'}</p>
          <ul className="space-y-2 mb-6">
            {c.problem.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-medium text-black">{c.problem.result}</p>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.cost.title}</h2>
          <p className="text-black/70 mb-4">{c.cost.intro}</p>
          <ul className="space-y-2 mb-6">
            {c.cost.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-black/70 mb-4">{params.lang === 'fr' ? 'Cette reconstitution :' : 'This reconstruction:'}</p>
          <ul className="space-y-2 mb-6">
            {c.cost.consequences.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span><strong>{point.split(' ')[0]}</strong> {point.split(' ').slice(1).join(' ')}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-medium text-black border-l-4 border-[#1e3a8a] pl-4">{c.cost.conclusion}</p>
        </div>
      </section>

      {/* Risk Section */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.risk.title}</h2>
          <p className="text-black/70 mb-4">{c.risk.intro}</p>
          <ul className="space-y-2 mb-6">
            {c.risk.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-medium text-black border-l-4 border-[#1e3a8a] pl-4">{c.risk.conclusion}</p>
        </div>
      </section>

      {/* Rule Section */}
      <section className="py-16 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">{c.rule.title}</h2>
          <p className="text-xl lg:text-2xl font-medium mb-6 opacity-90">{c.rule.content}</p>
          <p className="text-lg opacity-80">{c.rule.conclusion}</p>
        </div>
      </section>

      {/* What Horizon Does */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.whatHorizonDoes.title}</h2>
          <p className="text-black/70 mb-4">{c.whatHorizonDoes.intro}</p>
          <ul className="space-y-2 mb-6">
            {c.whatHorizonDoes.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-black/70 mb-2">{params.lang === 'fr' ? 'Cette preuve est :' : 'This evidence is:'}</p>
          <ul className="space-y-2 mb-6">
            {c.whatHorizonDoes.proofIs.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-medium text-black border-l-4 border-[#1e3a8a] pl-4">{c.whatHorizonDoes.conclusion}</p>
        </div>
      </section>

      {/* Why Separate */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.whySeparate.title}</h2>
          <p className="text-black/70 mb-4">{c.whySeparate.content}</p>
          <div className="flex gap-8 my-6">
            {c.whySeparate.points.map((point, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center text-sm font-medium">{i + 1}</span>
                <span className="text-black/80 font-medium">{point}</span>
              </div>
            ))}
          </div>
          <p className="text-black/70">{c.whySeparate.conclusion}</p>
        </div>
      </section>

      {/* What Horizon Is Not */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.whatHorizonIsNot.title}</h2>
          <ul className="space-y-2 mb-6">
            {c.whatHorizonIsNot.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/50">
                <span className="mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold text-[#1e3a8a]">{c.whatHorizonIsNot.conclusion}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">{c.benefits.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {c.benefits.items.map((item, i) => (
              <div key={i} className="bg-white p-6 border border-black/5">
                <h3 className="font-bold text-black mb-2">{item.title}</h3>
                <p className="text-black/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environments */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.environments.title}</h2>
          <p className="text-black/70 mb-4">{c.environments.intro}</p>
          <ul className="space-y-2 mb-6">
            {c.environments.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-black/70">{c.environments.conclusion}</p>
        </div>
      </section>

      {/* Engage Section */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">{c.engage.title}</h2>
          <p className="text-black/70 mb-8">{c.engage.intro}</p>
          <div className="space-y-8">
            {c.engage.items.map((item, i) => (
              <div key={i} className="bg-white p-6 border border-black/5">
                <h3 className="font-bold text-black text-lg mb-2">{item.title}</h3>
                <p className="text-black/70 mb-4">{item.desc}</p>
                <ul className="space-y-1 mb-4">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-black/60 text-sm">
                      <span className="text-[#1e3a8a] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${params.lang}/${item.link}`}
                  className="inline-flex items-center gap-2 text-[#1e3a8a] font-medium hover:underline"
                >
                  {item.linkText} <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Asplenz Does */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.whatAsplenzDoes.title}</h2>
          <p className="text-black/70 mb-6">{c.whatAsplenzDoes.intro}</p>
          <p className="text-black/70 mb-4">{params.lang === 'fr' ? 'Chaque intervention est :' : 'Each engagement is:'}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {c.whatAsplenzDoes.points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#1e3a8a] font-bold">•</span>
                <div>
                  <span className="font-bold text-black">{point.title}</span>
                  <span className="text-black/70"> : {point.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Paper CTA */}
      <section className="py-16 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{c.whitePaper.title}</h2>
          <h3 className="text-xl mb-4 opacity-90">{c.whitePaper.subtitle}</h3>
          <p className="opacity-80 mb-6 max-w-2xl mx-auto">{c.whitePaper.content}</p>
          <p className="opacity-70 mb-8 italic">{c.whitePaper.cta}</p>
          <Link
            href={`/${params.lang}/white-paper`}
            className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] px-6 py-3 font-medium hover:bg-white/90 transition-colors"
          >
            {c.whitePaper.linkText} <span>→</span>
          </Link>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">{c.contact.title}</h2>
          <p className="text-black/70 mb-8 max-w-2xl mx-auto">{c.contact.content}</p>
          <Link
            href={`/${params.lang}/contact`}
            className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 font-medium hover:bg-[#1e3a8a]/90 transition-colors"
          >
            {c.contact.linkText} <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
