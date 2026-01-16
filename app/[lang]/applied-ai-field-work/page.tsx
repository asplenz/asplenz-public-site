import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'IA Appliquée : Diagnostic Décision & Responsabilité',
    subtitle: 'Comprendre où l\'IA génère de la responsabilité avant que cela ne devienne un problème.',
    why: {
      title: 'Pourquoi ce diagnostic existe',
      intro: 'Les organisations intègrent rapidement l\'IA et l\'automatisation dans leur travail quotidien. Ce qui change en premier, ce n\'est pas la productivité : c\'est la manière dont les décisions sont prises.',
      points: [
        'partiellement automatisées,',
        'assistées par l\'IA,',
        'ou indirectement influencées par des systèmes opaques.',
      ],
      questions: [
        'Quelles décisions sont déléguées à l\'IA ou à l\'automatisation ?',
        'Qui en est responsable (accountable) ?',
        'Quelles preuves attestent de la manière dont elles ont été prises ?',
        'Ces décisions seraient-elles défendables lors d\'un audit, d\'un litige ou d\'un contrôle réglementaire ?',
      ],
      blindSpot: 'Pour les directions, cela crée un angle mort : une exposition croissante au risque de responsabilité sans vision claire de l\'endroit où il se situe.',
      conclusion: 'Ce travail de terrain existe pour rendre ces questions explicites avant qu\'elles ne se transforment en passifs opérationnels, juridiques ou réputationnels.',
    },
    objective: {
      title: 'Objectif de l\'intervention',
      intro: 'Aider les équipes à identifier où l\'IA et l\'automatisation introduisent des décisions à impact réel, et évaluer si ces décisions sont actuellement :',
      points: ['gouvernables,', 'auditables,', 'et prouvables dans le temps.'],
      notAbout: 'Cette mission n\'a pas pour but de déployer plus d\'IA. Elle vise à être en mesure d\'assumer la responsabilité des décisions assistées par l\'IA.',
      outcomes: [
        'une cartographie des décisions influencées par l\'IA,',
        'une vision claire des écarts de responsabilité associés,',
        'l\'identification des décisions qui seraient fragiles en cas de contestation,',
        'une compréhension explicite des points où des preuves plus solides sont requises.',
      ],
    },
    work: {
      title: 'Ce sur quoi nous travaillons concrètement',
      mapping: {
        title: 'Cartographie des décisions (cœur de mission)',
        intro: 'Nous partons du travail réel, pas de la technologie.',
        identify: [
          'automatisées,',
          'assistées par l\'IA,',
          'ou influencées indirectement par des outils d\'IA.',
        ],
        understand: [
          'qui la déclenche,',
          'quels systèmes et données sont impliqués,',
          'quelles traces existent (ou non),',
          'comment la responsabilité est actuellement perçue.',
        ],
        conclusion: 'Cette phase révèle souvent des angles morts dont les équipes n\'avaient pas conscience.',
      },
      analysis: {
        title: 'Analyse des preuves et des écarts de responsabilité',
        intro: 'Pour les décisions identifiées, nous évaluons :',
        points: [
          'si la décision peut être reconstruite a posteriori,',
          's\'il existe des preuves fiables des données d\'entrée, du contexte, du raisonnement et de l\'exécution,',
          'où la responsabilité est claire et où elle est fragmentée.',
        ],
        fragile: [
          'd\'audits,',
          'de contrôles réglementaires,',
          'de litiges,',
          'ou de processus internes de reddition de comptes.',
        ],
        conclusion: 'C\'est ici que le risque futur devient visible.',
      },
      adjustment: {
        title: 'Ajustement des usages et des pratiques',
        intro: 'Ce n\'est qu\'une fois la responsabilité comprise que nous abordons l\'usage.',
        points: [
          'Ajuster l\'utilisation de l\'IA pour réduire l\'opacité décisionnelle.',
          'Recommander des pratiques qui améliorent la traçabilité, réduisent la délégation incontrôlée et clarifient la responsabilité.',
          'Lorsque les écarts de responsabilité ne peuvent être comblés par la seule pratique : recommander des outils ou configurations existants, identifier les garde-fous structurels manquants.',
        ],
        conclusion: 'L\'objectif n\'est pas l\'optimisation : c\'est la gouvernabilité.',
      },
    },
    isAndIsNot: {
      title: 'Ce que cette intervention est, et ce qu\'elle n\'est pas',
      is: [
        'Un travail de terrain ancré dans les opérations réelles.',
        'Une mission courte, ciblée et délimitée dans le temps.',
        'Orienté vers la responsabilité future.',
        'Particulièrement pertinent pour les environnements réglementés.',
      ],
      isNot: [
        'Une offre de conseil en IA générique.',
        'Un programme d\'optimisation de la productivité.',
        'Du développement de modèles sur mesure.',
        'Un projet de transformation à long terme.',
      ],
    },
    teams: {
      title: 'Équipes types concernées',
      list: [
        'Produit et Ingénierie',
        'Opérations et Back-office',
        'Marketing et Ventes (là où l\'IA influence les décisions)',
        'Risques, Conformité et Gouvernance',
        'Directions cherchant à clarifier leur exposition aux risques IA',
      ],
    },
    connection: {
      title: 'Le lien avec Asplenz',
      intro: 'Ce travail de terrain n\'est pas une activité séparée. Il permet à Asplenz de :',
      points: [
        'observer comment les décisions influencées par l\'IA sont réellement prises,',
        'identifier les lacunes récurrentes en matière de responsabilité,',
        'ancrer le développement de nos produits dans la réalité opérationnelle,',
        'garantir qu\'Asplenz répond à des problèmes de responsabilité réels et non théoriques.',
      ],
      conclusion: 'C\'est notre manière de rester connectés à la réalité opérationnelle.',
    },
    format: {
      title: 'Format de l\'intervention',
      points: [
        'Missions courtes (généralement 2 à 4 semaines).',
        'Périmètre clair et limité.',
        'Sans engagement de durée.',
        'Conçu pour éclairer des décisions, pas pour vendre de la technologie.',
      ],
    },
    quote: 'Les organisations ne seront pas jugées sur leur utilisation de l\'IA, mais sur leur capacité à en assumer la responsabilité.',
    cta: {
      intro: 'Si vous souhaitez comprendre comment l\'IA et l\'automatisation façonnent déjà les décisions au sein de votre organisation et si vous êtes prêt à en assumer la responsabilité :',
      linkText: 'Contactez-nous',
    },
  },
  en: {
    title: 'Applied AI — Decision & Responsibility Field Work',
    subtitle: 'Understanding where AI creates responsibility — before it becomes a problem.',
    why: {
      title: 'Why this exists',
      intro: 'Organizations are rapidly introducing AI and automation into everyday work. What changes first is not productivity — it is how decisions are made.',
      points: [
        'partially automated,',
        'assisted by AI,',
        'or indirectly influenced by opaque systems.',
      ],
      questions: [
        'Which decisions are delegated to AI or automation?',
        'Who is accountable for them?',
        'What evidence exists of how they were made?',
        'Would these decisions be defensible in an audit, a dispute, or a regulatory review?',
      ],
      blindSpot: 'For leadership teams, this creates a blind spot: a growing exposure to accountability risk without a clear view of where it sits.',
      conclusion: 'This field work exists to make these questions explicit — before they turn into operational, legal, or reputational liabilities.',
    },
    objective: {
      title: 'Objective of the engagement',
      intro: 'Help teams identify where AI and automation introduce decisions with real impact, and assess whether these decisions are currently:',
      points: ['governable,', 'auditable,', 'and provable over time.'],
      notAbout: 'This engagement is not about doing more AI. It is about being able to assume responsibility for AI-assisted decisions.',
      outcomes: [
        'a mapped set of AI-influenced decisions,',
        'a clear view of associated responsibility gaps,',
        'identification of decisions that would be fragile if challenged,',
        'an explicit understanding of where stronger proof would be required.',
      ],
    },
    work: {
      title: 'What we actually work on',
      mapping: {
        title: 'Decision mapping (core work)',
        intro: 'We start from real work, not technology.',
        identify: [
          'automated,',
          'AI-assisted,',
          'or indirectly influenced by AI tools.',
        ],
        understand: [
          'who triggers it,',
          'what data and systems are involved,',
          'what traces exist (or do not),',
          'how responsibility is currently perceived.',
        ],
        conclusion: 'This phase often reveals blind spots teams were not aware of.',
      },
      analysis: {
        title: 'Proof and responsibility gap analysis',
        intro: 'For the identified decisions, we assess:',
        points: [
          'whether the decision can be reconstructed ex post,',
          'whether reliable evidence exists of inputs, context, rationale, execution,',
          'where accountability is clear — and where it is fragmented.',
        ],
        fragile: [
          'audits,',
          'regulatory reviews,',
          'disputes,',
          'or internal accountability processes.',
        ],
        conclusion: 'This is where future risk becomes visible.',
      },
      adjustment: {
        title: 'Usage and practice adjustment',
        intro: 'Only once responsibility is understood do we address usage.',
        points: [
          'Adjust AI usage to reduce decision opacity.',
          'Recommend practices that improve traceability, reduce uncontrolled delegation, clarify accountability.',
          'When responsibility gaps cannot be addressed through practice alone: recommend existing tools or configurations, identify where structural guardrails are missing.',
        ],
        conclusion: 'The goal is not optimization — it is governability.',
      },
    },
    isAndIsNot: {
      title: 'What this engagement is — and is not',
      is: [
        'Field work grounded in real operations',
        'Short, focused, and intentionally time-boxed',
        'Oriented toward future accountability',
        'Particularly relevant in regulated or high-responsibility environments',
      ],
      isNot: [
        'A generic AI consulting offer',
        'A productivity optimization program',
        'Custom AI or model development',
        'A long-term transformation project',
      ],
    },
    teams: {
      title: 'Typical teams involved',
      list: [
        'Product and engineering',
        'Operations and back-office',
        'Marketing and sales (where AI influences decisions)',
        'Risk, compliance, and governance',
        'Leadership teams seeking clarity on AI exposure',
      ],
    },
    connection: {
      title: 'How this connects to Asplenz',
      intro: 'This field work is not a separate business. It allows Asplenz to:',
      points: [
        'observe how AI-influenced decisions are actually made,',
        'identify recurring responsibility gaps,',
        'ground product work in operational reality,',
        'ensure Asplenz addresses real, not theoretical, accountability problems.',
      ],
      conclusion: 'Applied AI — Decision & Responsibility Field Work is how we stay connected to reality.',
    },
    format: {
      title: 'Engagement format',
      points: [
        'Short engagements (typically 2–4 weeks)',
        'Clear and limited scope',
        'No lock-in',
        'Designed to inform decisions, not to sell technology',
      ],
    },
    quote: 'Organizations will not be judged on whether they used AI, but on whether they were able to assume responsibility for it.',
    cta: {
      intro: 'If you want to understand where AI and automation are already shaping decisions in your organization — and whether you are prepared to assume responsibility for them:',
      linkText: 'Get in touch',
    },
  },
};

export default function AppliedAIFieldWorkPage({
  params,
}: {
  params: { lang: Language };
}) {
  const c = content[params.lang];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-black mb-4">
            {c.title}
          </h1>
          <p className="text-xl lg:text-2xl text-black/60 font-light">
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-6">{c.why.title}</h2>
          <p className="text-black/70 mb-4">{c.why.intro}</p>
          <p className="text-black/70 mb-2">{params.lang === 'fr' ? 'Aujourd\'hui, de nombreuses décisions sont :' : 'Many decisions are now:'}</p>
          <ul className="space-y-1 mb-6">
            {c.why.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-black/70 mb-2">{params.lang === 'fr' ? 'Pourtant, la plupart des organisations ne peuvent pas répondre clairement à ces questions :' : 'Yet most organizations cannot clearly answer:'}</p>
          <ul className="space-y-2 mb-6 bg-white p-4 border border-black/5">
            {c.why.questions.map((q, i) => (
              <li key={i} className="flex items-start gap-3 text-black font-medium">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p className="text-black/70 mb-4">{c.why.blindSpot}</p>
          <p className="text-black/80 font-medium">{c.why.conclusion}</p>
        </div>
      </section>

      {/* Objective */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-6">{c.objective.title}</h2>
          <p className="text-black/70 mb-4">{c.objective.intro}</p>
          <ul className="space-y-1 mb-6">
            {c.objective.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-black border-l-4 border-[#1e3a8a] pl-4 font-medium mb-6">{c.objective.notAbout}</p>
          <p className="text-black/70 mb-2">{params.lang === 'fr' ? 'À l\'issue de l\'intervention, les équipes disposent de :' : 'At the end of the engagement, teams leave with:'}</p>
          <ul className="space-y-1">
            {c.objective.outcomes.map((o, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Work */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-8">{c.work.title}</h2>

          {/* Mapping */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-black mb-4">{c.work.mapping.title}</h3>
            <p className="text-black/70 mb-4">{c.work.mapping.intro}</p>
            <p className="text-black/70 mb-2">{params.lang === 'fr' ? 'Identifier les décisions qui sont :' : 'Identify decisions that are:'}</p>
            <ul className="space-y-1 mb-4">
              {c.work.mapping.identify.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70 ml-4">
                  <span className="text-[#1e3a8a] mt-1">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/70 mb-2">{params.lang === 'fr' ? 'Pour chaque décision, comprendre :' : 'For each decision, understand:'}</p>
            <ul className="space-y-1 mb-4">
              {c.work.mapping.understand.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70 ml-4">
                  <span className="text-[#1e3a8a] mt-1">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/80 italic">{c.work.mapping.conclusion}</p>
          </div>

          {/* Analysis */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-black mb-4">{c.work.analysis.title}</h3>
            <p className="text-black/70 mb-2">{c.work.analysis.intro}</p>
            <ul className="space-y-1 mb-4">
              {c.work.analysis.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70">
                  <span className="text-[#1e3a8a] mt-1">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/70 mb-2">{params.lang === 'fr' ? 'Nous identifions les décisions qui seraient fragiles lors :' : 'We identify which decisions would be fragile in:'}</p>
            <ul className="space-y-1 mb-4">
              {c.work.analysis.fragile.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70 ml-4">
                  <span className="text-[#1e3a8a] mt-1">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-black font-bold text-[#1e3a8a]">{c.work.analysis.conclusion}</p>
          </div>

          {/* Adjustment */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">{c.work.adjustment.title}</h3>
            <p className="text-black/70 mb-4">{c.work.adjustment.intro}</p>
            <ul className="space-y-2 mb-4">
              {c.work.adjustment.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70">
                  <span className="text-[#1e3a8a] mt-1">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-black font-bold">{c.work.adjustment.conclusion}</p>
          </div>
        </div>
      </section>

      {/* Is and Is Not */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-8">{c.isAndIsNot.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-50 p-6">
              <h3 className="font-bold text-black mb-4">{params.lang === 'fr' ? 'C\'est :' : 'This is:'}</h3>
              <ul className="space-y-2">
                {c.isAndIsNot.is.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-50 p-6">
              <h3 className="font-bold text-black mb-4">{params.lang === 'fr' ? 'Ce n\'est pas :' : 'This is not:'}</h3>
              <ul className="space-y-2">
                {c.isAndIsNot.isNot.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/50">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-6">{c.teams.title}</h2>
          <ul className="space-y-2">
            {c.teams.list.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Connection */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-6">{c.connection.title}</h2>
          <p className="text-black/70 mb-4">{c.connection.intro}</p>
          <ul className="space-y-2 mb-6">
            {c.connection.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-black/80 italic">{c.connection.conclusion}</p>
        </div>
      </section>

      {/* Format */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-6">{c.format.title}</h2>
          <ul className="space-y-2">
            {c.format.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-[#1e3a8a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl lg:text-2xl font-medium italic text-white">
            "{c.quote}"
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-black/70 mb-8 max-w-2xl mx-auto">{c.cta.intro}</p>
          <Link
            href={`/${params.lang}/contact`}
            className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 font-medium hover:bg-[#1e3a8a]/90 transition-colors"
          >
            {c.cta.linkText} <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
