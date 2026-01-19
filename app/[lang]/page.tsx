import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    nav: {
      howItWorks: 'Comment ça marche',
      useCases: 'Cas d\'usage',
      requestDemo: 'Demander un briefing',
    },
    hero: {
      tagline: 'Preuve décisionnelle • Infrastructures régulées',
      title: 'Quand une décision devient contestée, vos logs ne suffisent plus.',
      description: '<strong>Horizon</strong> capture les faits décisionnels <strong>au moment de l\'exécution</strong> et les rend <strong>immutables</strong>, <strong>vérifiables</strong> et <strong>auditables</strong>, indépendamment des systèmes sources.',
      industries: ['Banques systémiques', 'PSP & paiements', 'Trading venues / Exchanges', 'Clearing houses / CCP'],
      ctaPrimary: 'Voir quand Horizon est pertinent',
      ctaSecondary: 'Lire la FAQ',
      disclaimer: 'Horizon ne décide pas à votre place. Il enregistre ce qui a été décidé, quand, sur quelles bases, de manière opposable selon vos exigences internes et juridiques.',
    },
    // Définition canonique
    definition: {
      term: 'Infrastructure d\'Instantanés Décisionnels',
      text: 'Une infrastructure dédiée à la création de faits décisionnels vérifiables, au moment même de l\'exécution.',
    },
    demo: {
      title: 'Demander un briefing technique (15-30 min)',
      description: 'On qualifie rapidement : <strong>quelle décision critique</strong> ? <strong>quelle pression</strong> (audit, incident, remediation) ? Et si Horizon peut réduire votre risque.',
      contactIntro: 'Contactez-nous :',
      contactEmail: 'contact@asplenz.com',
      orSchedule: 'Ou planifiez directement :',
      scheduleLink: 'Réserver un créneau',
    },
    problem: {
      title: 'Le problème',
      intro: 'Dans les infrastructures régulées, une décision automatisée peut déclencher un effet systémique : rejet d\'un paiement, appel de marge, suspension de participant, blocage AML, activation d\'un coupe-circuit, etc.',
      cards: [
        {
          title: 'Reconstruction fragile',
          points: ['logs dispersés / formats hétérogènes', 'états de règles & modèles qui évoluent', 'données sources expirées / purgées'],
        },
        {
          title: 'Réponse lente',
          points: ['plusieurs équipes mobilisées', 'jours ou semaines pour "expliquer"', 'mais difficile de "prouver"'],
        },
        {
          title: 'Risque juridique',
          points: ['contentieux, sanctions, réputation', 'récits contradictoires', 'preuves dépendantes des SI métiers'],
        },
      ],
    },
    whatItDoes: {
      title: 'Ce que fait Horizon',
      intro: 'Horizon transforme une décision éphémère en <strong>fait durable</strong> : un enregistrement horodaté, normalisé et vérifiable, qui décrit la décision et son contexte essentiel.',
      captures: {
        title: 'Horizon capture',
        points: [
          'la décision (résultat, action, statut)',
          'les entrées pertinentes (features / signaux / seuils)',
          'la provenance (système, version, acteur)',
          'l\'horodatage & l\'intégrité (hashing, append-only)',
        ],
      },
      enables: {
        title: 'Horizon permet',
        points: [
          'audit & inspection sans dépendre du SI source',
          'remediation plus rapide et défendable',
          'cohérence cross-systèmes (règles, modèles, humain)',
          'réduction du risque probatoire',
        ],
      },
    },
    whatItIsNot: {
      title: 'Ce que Horizon n\'est pas',
      cards: [
        { title: 'Pas un moteur de décision', description: 'Horizon n\'exécute aucune règle et ne "prend" aucune décision.' },
        { title: 'Pas une plateforme de gouvernance', description: 'Il ne remplace ni GRC, ni SIEM, ni data lake, ni observability stack.' },
        { title: 'Pas un outil d\'explicabilité', description: 'Il ne "rationalise" pas : il conserve le fait et son contexte.' },
      ],
    },
    useCases: {
      title: 'Cas d\'usage où Horizon est immédiatement pertinent',
      intro: 'Horizon est plus efficace quand il est déployé sur <strong>1 à 3 classes de décisions critiques</strong>.',
      cards: [
        {
          title: 'PSP / Paiements',
          points: ['rejets & retours (raison, seuil, signal)', 'blocages AML / sanctions / fraud', 'résolution de contestations clients / marchands'],
        },
        {
          title: 'Trading venue / Exchange',
          points: ['suspension instrument / participant', 'circuit breakers & garde-fous microstructure', 'enquêtes post-incident & reporting'],
        },
        {
          title: 'Clearing house / CCP',
          points: ['appels de marge & intraday risk', 'haircuts / stress triggers', 'disputes de contreparties & evidence packs'],
        },
        {
          title: 'Banque systémique',
          points: ['scoring / refus / conditions', 'limites, overrides, exceptions', 'défense en inspection & litige'],
        },
      ],
    },
    howItWorks: {
      title: 'Comment ça marche',
      steps: [
        { title: '1) Instrumenter le point de décision', description: 'Un hook au moment où la décision est rendue (service, rule engine, workflow humain).' },
        { title: '2) Normaliser le fait', description: 'Schéma décisionnel stable : décision, contexte, provenance, versions, horodatage.' },
        { title: '3) Préserver et rendre vérifiable', description: 'Stockage append-only + contrôles d\'intégrité + export "evidence pack" pour audit/litige.' },
      ],
      result: {
        title: 'Résultat : une source de vérité "preuve"',
        description: 'Vous pouvez répondre à : "Qu\'a-t-on décidé ? Quand ? Sur quelles bases ? Quelle version ? Qui/quel système ?" Sans reconstruction fragile, et sans dépendre du SI opérationnel.',
      },
    },
    outcomes: {
      title: 'Résultats attendus',
      cards: [
        { title: 'Audit plus rapide', description: 'Moins de semaines d\'enquête, plus de faits vérifiables.' },
        { title: 'Réduction du risque probatoire', description: 'Mitigation du risque juridique "impossible à prouver".' },
        { title: 'Remediation efficace', description: 'Evidence packs réutilisables, cohérents et opposables.' },
      ],
    },
    security: {
      title: 'Sécurité & déploiement',
      deployment: {
        title: 'Déploiement',
        points: ['on-prem / cloud privé (selon contraintes)', 'intégration progressive par use case', 'contrôles d\'accès & séparation des rôles'],
      },
      governance: {
        title: 'Gouvernance des données',
        points: ['minimisation : garder l\'essentiel probatoire', 'rétention configurable', 'chiffrement & traçabilité des accès'],
      },
    },
    finalCta: {
      title: 'La question n\'est pas "pourquoi Horizon". C\'est "quelle décision critique voulez-vous pouvoir prouver ?"',
      description: 'Si vous avez déjà vécu un audit difficile, un incident, ou un remediation plan, Horizon peut devenir votre couche de preuve. On commence par un use case, pas par une plateforme.',
      ctaPrimary: 'Demander un briefing technique',
      ctaSecondary: 'Voir les questions fréquentes',
    },
    faq: {
      title: 'FAQ',
      items: [
        { question: 'Pourquoi ne pas faire ça avec des logs ?', answer: 'Les logs sont utiles, mais souvent dispersés, reconstitués, et dépendants du SI source. Horizon vise une preuve décisionnelle autonome, stable et exploitable.' },
        { question: 'Horizon stocke-t-il des données sensibles ?', answer: 'Horizon n\'ingère pas les flux de données opérationnels. Il préserve les faits décisionnels déclarés au moment de l\'exécution, selon des schémas et périmètres définis par l\'institution. La minimisation des données, la rétention et la classification de sensibilité restent entièrement sous contrôle institutionnel.' },
        { question: 'Est-ce un projet lourd ?', answer: 'La bonne approche est ciblée : 1 use case critique, instrumentation au point de décision, puis extension. Éviter "capturer tout".' },
        { question: 'Qui est sponsor interne ?', answer: 'Souvent une coalition Legal/Compliance/Risk/Audit. IT exécute, mais le besoin est probatoire et réglementaire.' },
      ],
    },
    footer: '© Asplenz. Horizon, Decision Evidence.',
  },
  en: {
    nav: {
      howItWorks: 'How it works',
      useCases: 'Use cases',
      requestDemo: 'Request a briefing',
    },
    hero: {
      tagline: 'Decision evidence • Regulated infrastructure',
      title: 'When a decision is challenged, your logs are no longer enough.',
      description: '<strong>Horizon</strong> captures decision facts <strong>at execution time</strong> and makes them <strong>immutable</strong>, <strong>verifiable</strong> and <strong>auditable</strong>, independently of source systems.',
      industries: ['Systemic banks', 'PSP & payments', 'Trading venues / Exchanges', 'Clearing houses / CCP'],
      ctaPrimary: 'See when Horizon is relevant',
      ctaSecondary: 'Read the FAQ',
      disclaimer: 'Horizon does not decide for you. It records what was decided, when, on what basis, in an opposable manner according to your internal and legal requirements.',
    },
    // Canonical definition
    definition: {
      term: 'Decision Snapshot Infrastructure',
      text: 'An infrastructure dedicated to the creation of verifiable decision facts at the very moment of execution.',
    },
    demo: {
      title: 'Request a technical briefing (15-30 min)',
      description: 'We quickly qualify: <strong>which critical decision</strong>? <strong>which pressure</strong> (audit, incident, remediation)? And whether Horizon can reduce your risk.',
      contactIntro: 'Contact us:',
      contactEmail: 'contact@asplenz.com',
      orSchedule: 'Or schedule directly:',
      scheduleLink: 'Book a slot',
    },
    problem: {
      title: 'The problem',
      intro: 'In regulated infrastructures, an automated decision can trigger a systemic effect: payment rejection, margin call, participant suspension, AML block, circuit breaker activation, etc.',
      cards: [
        {
          title: 'Fragile reconstruction',
          points: ['scattered logs / heterogeneous formats', 'rule & model states that evolve', 'expired / purged source data'],
        },
        {
          title: 'Slow response',
          points: ['multiple teams mobilized', 'days or weeks to "explain"', 'but difficult to "prove"'],
        },
        {
          title: 'Legal risk',
          points: ['litigation, sanctions, reputation', 'contradictory narratives', 'evidence dependent on business IS'],
        },
      ],
    },
    whatItDoes: {
      title: 'What Horizon does',
      intro: 'Horizon transforms an ephemeral decision into a <strong>durable fact</strong>: a timestamped, normalized and verifiable record that describes the decision and its essential context.',
      captures: {
        title: 'Horizon captures',
        points: [
          'the decision (result, action, status)',
          'relevant inputs (features / signals / thresholds)',
          'provenance (system, version, actor)',
          'timestamp & integrity (hashing, append-only)',
        ],
      },
      enables: {
        title: 'Horizon enables',
        points: [
          'audit & inspection without depending on source IS',
          'faster and defensible remediation',
          'cross-system consistency (rules, models, human)',
          'reduction of evidentiary risk',
        ],
      },
    },
    whatItIsNot: {
      title: 'What Horizon is not',
      cards: [
        { title: 'Not a decision engine', description: 'Horizon does not execute any rules and does not "make" any decisions.' },
        { title: 'Not a governance platform', description: 'It does not replace GRC, SIEM, data lake, or observability stack.' },
        { title: 'Not an explainability tool', description: 'It does not "rationalize": it preserves the fact and its context.' },
      ],
    },
    useCases: {
      title: 'Use cases where Horizon is immediately relevant',
      intro: 'Horizon is most effective when deployed on <strong>1 to 3 classes of critical decisions</strong>.',
      cards: [
        {
          title: 'PSP / Payments',
          points: ['rejections & returns (reason, threshold, signal)', 'AML / sanctions / fraud blocks', 'customer / merchant dispute resolution'],
        },
        {
          title: 'Trading venue / Exchange',
          points: ['instrument / participant suspension', 'circuit breakers & microstructure safeguards', 'post-incident investigations & reporting'],
        },
        {
          title: 'Clearing house / CCP',
          points: ['margin calls & intraday risk', 'haircuts / stress triggers', 'counterparty disputes & evidence packs'],
        },
        {
          title: 'Systemic bank',
          points: ['scoring / rejection / conditions', 'limits, overrides, exceptions', 'defense in inspection & litigation'],
        },
      ],
    },
    howItWorks: {
      title: 'How it works',
      steps: [
        { title: '1) Instrument the decision point', description: 'A hook at the moment the decision is rendered (service, rule engine, human workflow).' },
        { title: '2) Normalize the fact', description: 'Stable decision schema: decision, context, provenance, versions, timestamp.' },
        { title: '3) Preserve and make verifiable', description: 'Append-only storage + integrity controls + "evidence pack" export for audit/litigation.' },
      ],
      result: {
        title: 'Result: a "proof" source of truth',
        description: 'You can answer: "What was decided? When? On what basis? What version? Who/what system?" Without fragile reconstruction, and without depending on the operational IS.',
      },
    },
    outcomes: {
      title: 'Expected outcomes',
      cards: [
        { title: 'Faster audit', description: 'Fewer weeks of investigation, more verifiable facts.' },
        { title: 'Reduced evidentiary risk', description: 'Mitigation of "impossible to prove" legal risk.' },
        { title: 'Effective remediation', description: 'Reusable, consistent and opposable evidence packs.' },
      ],
    },
    security: {
      title: 'Security & deployment',
      deployment: {
        title: 'Deployment',
        points: ['on-prem / private cloud (depending on constraints)', 'progressive integration by use case', 'access controls & role separation'],
      },
      governance: {
        title: 'Data governance',
        points: ['minimization: keep the evidentiary essentials', 'configurable retention', 'encryption & access traceability'],
      },
    },
    finalCta: {
      title: 'The question is not "why Horizon". It\'s "which critical decision do you want to be able to prove?"',
      description: 'If you have already experienced a difficult audit, an incident, or a remediation plan, Horizon can become your proof layer. We start with a use case, not a platform.',
      ctaPrimary: 'Request a technical briefing',
      ctaSecondary: 'See frequently asked questions',
    },
    faq: {
      title: 'FAQ',
      items: [
        { question: 'Why not do this with logs?', answer: 'Logs are useful, but often scattered, reconstructed, and dependent on source IS. Horizon aims for autonomous, stable and usable decision evidence.' },
        { question: 'Does Horizon store sensitive data?', answer: 'Horizon does not ingest operational data flows. It preserves declared decision facts at execution time, according to schemas and boundaries defined by the institution. Data minimization, retention, and sensitivity classification remain fully under institutional control.' },
        { question: 'Is this a heavy project?', answer: 'The right approach is targeted: 1 critical use case, instrumentation at the decision point, then extension. Avoid "capture everything".' },
        { question: 'Who is the internal sponsor?', answer: 'Often a Legal/Compliance/Risk/Audit coalition. IT executes, but the need is evidentiary and regulatory.' },
      ],
    },
    footer: '© Asplenz. Horizon, Decision Evidence.',
  },
};

export default function LandingPage({
  params,
}: {
  params: { lang: Language };
}) {
  const c = content[params.lang];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* NAV */}
        <div className="flex justify-between items-center gap-4 flex-wrap mb-12">
          <div className="font-bold tracking-wide text-[#005C99]">ASPLENZ <span className="text-black/40">/ Horizon</span></div>
          <div className="flex gap-3 flex-wrap">
            <a className="inline-block px-4 py-2.5 border border-black/10 rounded-xl text-[#005C99] hover:bg-black/5 transition-colors" href="#how">{c.nav.howItWorks}</a>
            <a className="inline-block px-4 py-2.5 border border-black/10 rounded-xl text-[#005C99] hover:bg-black/5 transition-colors" href="#usecases">{c.nav.useCases}</a>
          </div>
        </div>

        {/* HERO */}
        <section className="pb-8 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div>
            <div className="text-black/50 text-sm uppercase tracking-widest mb-3">{c.hero.tagline}</div>
            <h1 className="mb-4 text-3xl lg:text-[40px] leading-tight font-bold">{c.hero.title}</h1>
            <p className="text-black/60 text-lg leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: c.hero.description }} />

            {/* Définition canonique */}
            <blockquote className="border-l-4 border-[#005C99] pl-4 mb-5">
              <p className="font-medium text-[#005C99]">{c.definition.term}</p>
              <p className="text-black/60 text-sm">{c.definition.text}</p>
            </blockquote>

            <div className="flex gap-2.5 flex-wrap mb-4">
              {c.hero.industries.map((industry, i) => (
                <span key={i} className="inline-flex gap-2 items-center px-3 py-1.5 border border-black/10 rounded-full text-sm text-black/60">{industry}</span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap mb-4">
              <Link className="inline-block px-4 py-2.5 bg-[#005C99] text-white rounded-xl font-medium hover:bg-[#005C99]/90 transition-colors" href={`/${params.lang}/cost-of-reconstruction`}>{c.hero.ctaPrimary}</Link>
              <a className="inline-block px-4 py-2.5 border border-black/10 rounded-xl text-[#005C99] hover:bg-black/5 transition-colors" href="#faq">{c.hero.ctaSecondary}</a>
            </div>

            <p className="text-sm text-black/50 leading-snug">
              {c.hero.disclaimer}
            </p>
          </div>

          {/* SIDE CTA */}
          <div className="bg-zinc-50 border border-black/10 rounded-2xl p-5 lg:sticky lg:top-24">
            <h3 className="mb-2 text-base font-bold">{c.demo.title}</h3>
            <p className="mb-4 text-black/60 text-sm leading-snug" dangerouslySetInnerHTML={{ __html: c.demo.description }} />

            <div className="space-y-3">
              <p className="text-sm text-black/70">
                {c.demo.contactIntro} <a href={`mailto:${c.demo.contactEmail}`} className="text-[#005C99] font-medium">{c.demo.contactEmail}</a>
              </p>
              <p className="text-sm text-black/70">
                {c.demo.orSchedule}
              </p>
              <a
                href="https://app.cal.eu/asplenz/institutional-acceptability?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2.5 bg-[#005C99] text-white rounded-xl font-medium hover:bg-[#005C99]/90 transition-colors"
              >
                {c.demo.scheduleLink}
              </a>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-10">
          <h2 className="mb-3 text-2xl font-bold">{c.problem.title}</h2>
          <p className="text-black/60 mb-6">{c.problem.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.problem.cards.map((card, i) => (
              <div key={i} className="bg-zinc-50 border border-black/10 rounded-2xl p-5">
                <strong className="text-black">{card.title}</strong>
                <ul className="mt-3 pl-4 text-black/60 leading-relaxed list-disc">
                  {card.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT IT DOES */}
        <section className="py-10">
          <h2 className="mb-3 text-2xl font-bold">{c.whatItDoes.title}</h2>
          <div className="bg-zinc-50 border border-black/10 rounded-2xl p-5">
            <p className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: c.whatItDoes.intro }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <strong className="text-[#005C99]">{c.whatItDoes.captures.title}</strong>
                <ul className="mt-3 pl-4 text-black/60 leading-relaxed list-disc">
                  {c.whatItDoes.captures.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong className="text-[#005C99]">{c.whatItDoes.enables.title}</strong>
                <ul className="mt-3 pl-4 text-black/60 leading-relaxed list-disc">
                  {c.whatItDoes.enables.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IT IS NOT */}
        <section className="py-10">
          <h2 className="mb-3 text-2xl font-bold">{c.whatItIsNot.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.whatItIsNot.cards.map((card, i) => (
              <div key={i} className="bg-zinc-50 border border-black/10 rounded-2xl p-5">
                <strong className="text-black">{card.title}</strong>
                <p className="text-black/60 mt-2">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* USE CASES */}
        <section id="usecases" className="py-10 scroll-mt-20">
          <h2 className="mb-3 text-2xl font-bold">{c.useCases.title}</h2>
          <p className="text-black/60 mb-6" dangerouslySetInnerHTML={{ __html: c.useCases.intro }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.useCases.cards.map((card, i) => (
              <div key={i} className="bg-zinc-50 border border-black/10 rounded-2xl p-5">
                <strong className="text-black">{card.title}</strong>
                <ul className="mt-3 pl-4 text-black/60 leading-relaxed list-disc">
                  {card.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-10 scroll-mt-20">
          <h2 className="mb-3 text-2xl font-bold">{c.howItWorks.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {c.howItWorks.steps.map((step, i) => (
              <div key={i} className="bg-zinc-50 border border-black/10 rounded-2xl p-5">
                <strong className="text-black">{step.title}</strong>
                <p className="text-black/60 mt-2">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#005C99]/5 border border-[#005C99]/20 rounded-2xl p-5">
            <strong className="text-[#005C99]">{c.howItWorks.result.title}</strong>
            <p className="text-black/60 mt-2">{c.howItWorks.result.description}</p>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="py-10">
          <h2 className="mb-3 text-2xl font-bold">{c.outcomes.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.outcomes.cards.map((card, i) => (
              <div key={i} className="bg-zinc-50 border border-black/10 rounded-2xl p-5">
                <strong className="text-black">{card.title}</strong>
                <p className="text-black/60 mt-2">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECURITY & DEPLOYMENT */}
        <section className="py-10">
          <h2 className="mb-3 text-2xl font-bold">{c.security.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-50 border border-black/10 rounded-2xl p-5">
              <strong className="text-black">{c.security.deployment.title}</strong>
              <ul className="mt-3 pl-4 text-black/60 leading-relaxed list-disc">
                {c.security.deployment.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-50 border border-black/10 rounded-2xl p-5">
              <strong className="text-black">{c.security.governance.title}</strong>
              <ul className="mt-3 pl-4 text-black/60 leading-relaxed list-disc">
                {c.security.governance.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="h-px bg-black/10 my-6"></div>

        {/* FINAL CTA */}
        <section className="py-10 scroll-mt-20" id="contact">
          <h2 className="mb-3 text-2xl font-bold">{c.finalCta.title}</h2>
          <div className="bg-[#005C99]/5 border border-[#005C99]/20 rounded-2xl p-5 mb-6">
            <p className="text-black/60 mb-4">{c.finalCta.description}</p>
            <div className="flex gap-3 flex-wrap">
              <a className="inline-block px-4 py-2.5 border border-[#005C99]/30 rounded-xl text-[#005C99] hover:bg-[#005C99]/10 transition-colors" href="#faq">{c.finalCta.ctaSecondary}</a>
            </div>
          </div>

          {/* Contact block */}
          <div className="bg-zinc-50 border border-black/10 rounded-2xl p-5">
            <h3 className="mb-2 text-base font-bold">{c.demo.title}</h3>
            <p className="mb-4 text-black/60 text-sm leading-snug" dangerouslySetInnerHTML={{ __html: c.demo.description }} />

            <div className="space-y-3">
              <p className="text-sm text-black/70">
                {c.demo.contactIntro} <a href={`mailto:${c.demo.contactEmail}`} className="text-[#005C99] font-medium">{c.demo.contactEmail}</a>
              </p>
              <p className="text-sm text-black/70">
                {c.demo.orSchedule}
              </p>
              <a
                href="https://app.cal.eu/asplenz/institutional-acceptability?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2.5 bg-[#005C99] text-white rounded-xl font-medium hover:bg-[#005C99]/90 transition-colors"
              >
                {c.demo.scheduleLink}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-10 scroll-mt-20">
          <h2 className="mb-3 text-2xl font-bold">{c.faq.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.faq.items.map((item, i) => (
              <div key={i} className="bg-zinc-50 border border-black/10 rounded-2xl p-5">
                <strong className="text-black">{item.question}</strong>
                <p className="text-black/60 mt-2">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RESOURCES */}
        <section className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href={`/${params.lang}/foundations`} className="bg-zinc-50 border border-black/10 rounded-2xl p-5 hover:bg-zinc-100 transition-colors block">
              <strong className="text-[#005C99]">{params.lang === 'fr' ? 'Fondements' : 'Foundations'}</strong>
              <p className="text-black/60 mt-2 text-sm">{params.lang === 'fr' ? 'Le document Foundational Brief présente les fondations opérationnelles de la preuve à l\'exécution.' : 'The Foundational Brief presents the operational foundations of execution-time evidence.'}</p>
            </Link>
            <Link href={`/${params.lang}/cost-of-reconstruction`} className="bg-zinc-50 border border-black/10 rounded-2xl p-5 hover:bg-zinc-100 transition-colors block">
              <strong className="text-[#005C99]">{params.lang === 'fr' ? 'Analyse des coûts' : 'Cost analysis'}</strong>
              <p className="text-black/60 mt-2 text-sm">{params.lang === 'fr' ? 'Ce document analyse pourquoi le coût de la reconstruction est systématiquement sous-estimé.' : 'This document analyzes why the cost of reconstruction is systematically underestimated.'}</p>
            </Link>
          </div>
        </section>

        <p className="py-6 text-sm text-black/40">
          {c.footer}
        </p>
      </div>
    </div>
  );
}
