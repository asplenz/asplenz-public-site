import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    factsOverInterpretation: {
      title: 'Le fait avant l\'interprétation.',
      subtitle: 'Cette infrastructure n\'explique pas les décisions. Elle les préserve.',
    },
    hero: {
      title: 'Figer chaque décision automatisée telle qu\'elle a réellement eu lieu',
      subtitle: 'Chaque décision produite par un système automatisé génère un **snapshot auto-contenu**, capturé **au moment exact de l\'exécution**, puis **signé et vérifiable**.',
      points: [
        'Aucune reconstitution.',
        'Aucune simulation.',
        'Aucune dépendance au système source.',
      ],
      ctaArtifact: 'Demander un exemple d\'artefact',
      ctaDemo: 'Demander une démo',
    },
    problem: {
      title: 'Le constat',
      subtitle: 'Une décision automatisée disparaît au moment où elle est prise',
      intro: 'Dans la majorité des systèmes :',
      points: [
        'les données évoluent',
        'les règles changent',
        'les modèles sont mis à jour',
        'les contextes d\'exécution ne sont pas figés',
      ],
      conclusion: 'Une fois la décision produite, **son état réel n\'existe plus**.',
      result: 'Il ne reste que des reconstructions partielles.',
    },
    principle: {
      title: 'Notre principe',
      subtitle: 'Capturer l\'instant d\'exécution, pas l\'expliquer après coup',
      intro: 'Nous produisons, pour chaque décision automatisée, un **artefact factuel** qui capture :',
      points: [
        'ce qui a été exécuté',
        'avec quelles données',
        'dans quel contexte',
        'et quel résultat a été produit',
      ],
      conclusion: 'Cet artefact est généré **en ligne**, **sans dépendre du futur état du système**.',
    },
    artifact: {
      title: 'Contenu de l\'artefact décisionnel',
      intro: 'Chaque snapshot est un objet complet qui contient cinq couches de données :',
      sections: [
        {
          title: 'Métadonnées d\'exécution (EXECUTION RECORD)',
          items: [
            '**Identifiant unique** de l\'exécution et **horodatage UTC** précis.',
            'Identité du système source et version exacte de l\'acteur (système expert, IA).',
          ],
        },
        {
          title: 'Snapshot des données (SNAPSHOT DATA)',
          items: [
            '**Données brutes telles que vues par le système à l\'instant T0.**',
            'Toutes les variables d\'entrée ayant servi au calcul (revenus, dette, âge, etc.).',
            '*C\'est ce qui permet de s\'affranchir de l\'historisation des bases de données.*',
          ],
        },
        {
          title: 'État du modèle et de la logique (MODEL STATE)',
          items: [
            'Empreinte numérique (**hash**) du modèle et version de la configuration.',
            'Paramètres et seuils (thresholds) actifs au moment précis de la décision.',
          ],
        },
        {
          title: 'Résultat de la décision (OUTPUT)',
          items: [
            'Résultat final (Accordé / Refusé) et scores de confiance.',
            '**Codes de motifs (reason codes)** expliquant factuellement la sortie du système.',
          ],
        },
        {
          title: 'Intégrité & Chaîne de confiance (INTEGRITY)',
          items: [
            '**Signature cryptographique Ed25519** garantissant la non-altération.',
            'Chaînage séquentiel (**hash précédent**) rendant toute suppression détectable.',
          ],
        },
      ],
      conclusion: '**L\'artefact est auto-contenu : il contient la preuve et les données nécessaires à sa propre vérification.**',
      formalDefinitionLink: '→ Lire la définition formelle de l\'Artefact de Persistance Décisionnelle',
    },
    proof: {
      title: 'Une preuve technique, pas une interprétation',
      points: [
        'aucune hypothèse a posteriori',
        'aucune simulation',
        'aucune approximation',
      ],
      content: 'L\'artefact ne **raconte pas pourquoi**. Il **atteste de ce qui s\'est réellement produit**.',
      conclusion: 'L\'artefact est auto-contenu, signé et vérifiable. **Il peut être consulté et interprété sans connaissance du système ayant produit la décision.**',
    },
    afterDecision: {
      title: 'Après la décision',
      intro: 'Une fois capturé, le snapshot peut être :',
      actions: ['conservé', 'transmis', 'vérifié', 'relu', 'analysé'],
      points: [
        'Sans accès au système d\'origine',
        'Sans dépendre de versions futures',
        'Sans rejouer l\'exécution',
      ],
    },
    infrastructure: {
      title: 'Pensé comme une infrastructure',
      points: [
        's\'intègre aux systèmes existants',
        'compatible règles, scoring, IA',
        'capture synchrone ou asynchrone',
        'gouvernance des durées de conservation',
        'contrôle d\'accès et sécurité intégrés',
      ],
    },
    comparison: {
      title: 'Ce que cela change fondamentalement',
      items: [
        { before: 'Décision éphémère', after: 'Décision figée' },
        { before: 'Traces partielles', after: 'Artefact complet' },
        { before: 'Reconstitution', after: 'Attestation' },
        { before: 'Dépendance au système', after: 'Indépendance' },
        { before: 'Incertitude', after: 'Intégrité' },
      ],
    },
    quote: '« Nous ne reconstruisons pas les décisions automatisées. Nous conservons l\'instant exact où elles ont été prises. »',
    cta: {
      title: 'Rendre chaque décision automatisée vérifiable par défaut',
      points: [
        'consulter un artefact réel',
        'tester sur un flux existant',
        'évaluer l\'impact technique',
      ],
      ctaArtifact: 'Demander un exemple d\'artefact',
      ctaDemo: 'Demander une démo',
    },
    faq: {
      title: 'Mini-FAQ',
      items: [
        { q: 'Est-ce un système d\'audit ?', a: 'Non. C\'est une capture factuelle de l\'exécution.' },
        { q: 'Est-ce une explication ?', a: 'Non. C\'est une attestation.' },
        { q: 'Est-ce dépendant du système source ?', a: 'Non. L\'artefact est autonome.' },
      ],
    },
    whitePaper: {
      title: 'Comprendre en profondeur',
      content: 'Le White Paper détaille les principes de la preuve d\'exécution, l\'architecture de Horizon, et les implications institutionnelles, juridiques et techniques.',
      linkText: 'Lire le White Paper',
    },
  },
  en: {
    factsOverInterpretation: {
      title: 'Facts over Interpretation.',
      subtitle: 'This infrastructure does not explain decisions. It preserves them.',
    },
    hero: {
      title: 'Freeze every automated decision exactly as it occurred',
      subtitle: 'Every decision produced by an automated system generates a **self-contained snapshot**, captured at the **exact moment of execution**, then **signed and verifiable**.',
      points: [
        'No reconstruction.',
        'No simulation.',
        'No dependency on the source system.',
      ],
      ctaArtifact: 'Request an artifact sample',
      ctaDemo: 'Request a demo',
    },
    problem: {
      title: 'The Problem',
      subtitle: 'An automated decision vanishes the moment it is made',
      intro: 'In most systems:',
      points: [
        'data evolves',
        'rules change',
        'models are updated',
        'execution contexts are not frozen',
      ],
      conclusion: 'Once a decision is produced, **its real state no longer exists**.',
      result: 'All that remains are partial reconstructions.',
    },
    principle: {
      title: 'Our Principle',
      subtitle: 'Capture the moment of execution, don\'t explain it after the fact',
      intro: 'For every automated decision, we produce a **factual artifact** that captures:',
      points: [
        'what was executed',
        'with which data',
        'in what context',
        'and what result was produced',
      ],
      conclusion: 'This artifact is generated **inline**, **without depending on the future state of the system**.',
    },
    artifact: {
      title: 'Decision Artifact Content',
      intro: 'Each snapshot is a complete object containing five layers of data:',
      sections: [
        {
          title: 'Execution Metadata (EXECUTION RECORD)',
          items: [
            'Unique execution **ID** and precise **UTC timestamp**.',
            'System identity and exact actor version (expert system, AI).',
          ],
        },
        {
          title: 'Snapshot Data (Inputs at T0)',
          items: [
            '**Raw data seen by the system at the exact moment of decision.**',
            'All input variables used for the calculation (income, debt, age, etc.).',
          ],
        },
        {
          title: 'Model & Logic State (MODEL STATE)',
          items: [
            'Model **hash** and configuration version.',
            'Active thresholds and parameters at the precise moment of decision.',
          ],
        },
        {
          title: 'Decision Output (OUTPUT)',
          items: [
            'Final result (Approved / Denied) and confidence scores.',
            '**Actionable reason codes** explaining the system output.',
          ],
        },
        {
          title: 'Integrity & Chain of Trust (INTEGRITY)',
          items: [
            '**Ed25519 cryptographic signature** ensuring non-alteration.',
            'Sequential chaining (**prev_hash**) making any deletion detectable.',
          ],
        },
      ],
      conclusion: '**The artifact is self-contained: it holds the proof and the data needed for its own verification.**',
      formalDefinitionLink: '→ Read the formal definition of the Decision Snapshot Artifact',
    },
    proof: {
      title: 'Technical proof, not interpretation',
      points: [
        'no post-hoc assumptions',
        'no simulation',
        'no approximation',
      ],
      content: 'The artifact **does not tell "why"**. It **attests to what actually happened**.',
      conclusion: 'The artifact is self-contained, signed, and verifiable. **It can be consulted and interpreted without any knowledge of the system that produced the decision.**',
    },
    afterDecision: {
      title: 'After the Decision',
      intro: 'Once captured, the snapshot can be:',
      actions: ['preserved', 'transmitted', 'verified', 'reviewed', 'analyzed'],
      points: [
        'Without access to the original system',
        'Without depending on future versions',
        'Without replaying the execution',
      ],
    },
    infrastructure: {
      title: 'Built as Infrastructure',
      points: [
        'integrates with existing systems',
        'compatible with rules, scoring, and AI',
        'synchronous or asynchronous capture',
        'retention policy governance',
        'integrated access control and security',
      ],
    },
    comparison: {
      title: 'The Fundamental Shift',
      items: [
        { before: 'Ephemeral decision', after: 'Frozen decision' },
        { before: 'Partial traces', after: 'Complete artifact' },
        { before: 'Reconstruction', after: 'Attestation' },
        { before: 'System dependency', after: 'Independence' },
        { before: 'Uncertainty', after: 'Integrity' },
      ],
    },
    quote: '"We do not reconstruct automated decisions. We preserve the exact moment they were taken."',
    cta: {
      title: 'Make every automated decision verifiable by default',
      points: [
        'view a real artifact',
        'test on an existing flow',
        'assess technical impact',
      ],
      ctaArtifact: 'Request an artifact sample',
      ctaDemo: 'Request a demo',
    },
    faq: {
      title: 'Mini-FAQ',
      items: [
        { q: 'Is this an audit system?', a: 'No. It is a factual capture of the execution.' },
        { q: 'Is this an explanation?', a: 'No. It is an attestation.' },
        { q: 'Is it dependent on the source system?', a: 'No. The artifact is autonomous.' },
      ],
    },
    whitePaper: {
      title: 'Understand in depth',
      content: 'The White Paper details execution-time evidence principles, Horizon\'s architecture, and institutional, legal, and technical implications.',
      linkText: 'Read the White Paper',
    },
  },
};

export default function HomePage({
  params,
}: {
  params: { lang: Language };
}) {
  const c = content[params.lang];
  const isFr = params.lang === 'fr';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-6 leading-tight">
                {c.hero.title}
              </h1>
              <p className="text-lg text-black/70 mb-6" dangerouslySetInnerHTML={{ __html: c.hero.subtitle.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              <ul className="space-y-2 mb-8">
                {c.hero.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#1e3a8a] font-medium">
                    <span>👉</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${params.lang}/contact`}
                  className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 font-medium hover:bg-[#1e3a8a]/90 transition-colors"
                >
                  {c.hero.ctaArtifact}
                </Link>
                <Link
                  href={`/${params.lang}/contact`}
                  className="inline-flex items-center gap-2 border border-[#1e3a8a] text-[#1e3a8a] px-6 py-3 font-medium hover:bg-[#1e3a8a]/5 transition-colors"
                >
                  {c.hero.ctaDemo}
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero.png"
                alt="Decision snapshot flow"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facts over Interpretation Section */}
      <section className="py-12 bg-[#0d1117]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl lg:text-3xl font-bold text-white mb-3">
            {c.factsOverInterpretation.title}
          </p>
          <p className="text-lg lg:text-xl text-white/80">
            {c.factsOverInterpretation.subtitle}
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#1e3a8a] font-medium mb-2">{c.problem.title}</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.problem.subtitle}</h2>
          <p className="text-black/70 mb-4">{c.problem.intro}</p>
          <ul className="space-y-2 mb-6">
            {c.problem.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-red-500 mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-medium text-black mb-2" dangerouslySetInnerHTML={{ __html: c.problem.conclusion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          <p className="text-[#1e3a8a] font-medium">👉 {c.problem.result}</p>
        </div>
      </section>

      {/* Principle Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#1e3a8a] font-medium mb-2">{c.principle.title}</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.principle.subtitle}</h2>
          <p className="text-black/70 mb-4" dangerouslySetInnerHTML={{ __html: c.principle.intro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          <ul className="space-y-2 mb-6">
            {c.principle.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-medium text-black border-l-4 border-[#1e3a8a] pl-4" dangerouslySetInnerHTML={{ __html: c.principle.conclusion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        </div>
      </section>

      {/* Artifact Content Section */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.artifact.title}</h2>
              <p className="text-black/70 mb-6">{c.artifact.intro}</p>
              <div className="space-y-6">
                {c.artifact.sections.map((section, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-[#1e3a8a] mb-2 flex items-center gap-2">
                      <span className="text-lg">🔹</span>
                      {section.title}
                    </h3>
                    <ul className="space-y-1 pl-6">
                      {section.items.map((item, j) => (
                        <li key={j} className="text-black/70 text-sm" dangerouslySetInnerHTML={{ __html: '• ' + item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[#1e3a8a] font-medium" dangerouslySetInnerHTML={{ __html: '👉 ' + c.artifact.conclusion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              <p className="mt-4">
                <Link
                  href={`/${params.lang}/white-paper/decision-snapshot-artifact`}
                  className="text-black/70 hover:text-[#1e3a8a] transition-colors font-bold underline"
                >
                  {c.artifact.formalDefinitionLink}
                </Link>
              </p>
            </div>
            <div className="lg:sticky lg:top-24">
              <pre className="bg-[#0d1117] text-[#e6edf3] p-4 rounded-lg shadow-lg border border-black/10 text-[10px] sm:text-xs overflow-x-auto font-mono leading-relaxed">
{`┌─────────────────────────────────────────────────────────────────┐
│ EXECUTION RECORD                                                │
├─────────────────────────────────────────────────────────────────┤
│ execution_id:    exec_7f3a9b2c-4d1e-4a8f-b5c6-9e0f1a2b3c4d     │
│ timestamp:       2025-01-16T14:32:07.892Z                       │
│ actor:           system:credit-scoring-v2.3.1                   │
│ action:          LOAN_APPLICATION_DENIED                        │
├─────────────────────────────────────────────────────────────────┤
│ SNAPSHOT DATA (inputs seen at T0)                               │
├─────────────────────────────────────────────────────────────────┤
│ applicant_id:        APP-2025-84729                             │
│ requested_amount:    45,000 EUR                                 │
│ annual_income:       52,000 EUR                                 │
│ debt_ratio:          0.47                                       │
│ employment_months:   8                                          │
│ credit_history:      LIMITED                                    │
│ previous_defaults:   0                                          │
│ age:                 29                                         │
├─────────────────────────────────────────────────────────────────┤
│ MODEL STATE (at T0)                                             │
├─────────────────────────────────────────────────────────────────┤
│ model_hash:          sha256:8f4a2b...c9d1e                      │
│ model_version:       credit-scoring-v2.3.1                      │
│ config_version:      prod-2025-01-15                            │
│ threshold:           0.65                                       │
├─────────────────────────────────────────────────────────────────┤
│ OUTPUT (decision at T0)                                         │
├─────────────────────────────────────────────────────────────────┤
│ score:               0.42                                       │
│ decision:            DENIED                                     │
│ reason_codes:        [DEBT_RATIO_HIGH, EMPLOYMENT_LENGTH_SHORT] │
│ confidence:          0.89                                       │
├─────────────────────────────────────────────────────────────────┤
│ INTEGRITY                                                       │
├─────────────────────────────────────────────────────────────────┤
│ signature:           ed25519:9a8b7c6d5e4f...                    │
│ sequence:            1,847,293                                  │
│ prev_hash:           sha256:2c4e6a...b8d0f                      │
└─────────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Proof Section */}
      <section className="py-16 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">{c.proof.title}</h2>
          <ul className="space-y-2 mb-6">
            {c.proof.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 opacity-90">
                <span className="mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg mb-4 opacity-95" dangerouslySetInnerHTML={{ __html: c.proof.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          <p className="text-base opacity-80 border-t border-white/20 pt-6 mt-6" dangerouslySetInnerHTML={{ __html: c.proof.conclusion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        </div>
      </section>

      {/* After Decision Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.afterDecision.title}</h2>
          <p className="text-black/70 mb-4">{c.afterDecision.intro}</p>
          <div className="flex flex-wrap gap-3 mb-6">
            {c.afterDecision.actions.map((action, i) => (
              <span key={i} className="bg-zinc-100 px-4 py-2 text-black/70 rounded">
                {action}
              </span>
            ))}
          </div>
          <ul className="space-y-2">
            {c.afterDecision.points.map((point, i) => (
              <li key={i} className="flex items-center gap-2 text-[#1e3a8a] font-medium">
                <span>👉</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.infrastructure.title}</h2>
              <ul className="space-y-3">
                {c.infrastructure.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="/images/infra_before_apres.png"
                alt="Infrastructure before and after"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">{c.comparison.title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 bg-zinc-100 font-bold text-black border-b-2 border-[#1e3a8a]">
                    {isFr ? 'Avant' : 'Before'}
                  </th>
                  <th className="text-left py-3 px-4 bg-[#1e3a8a] font-bold text-white">
                    {isFr ? 'Après' : 'After'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.comparison.items.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}>
                    <td className="py-3 px-4 text-black/70">{item.before}</td>
                    <td className="py-3 px-4 text-[#1e3a8a] font-medium">{item.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl lg:text-2xl font-medium italic">
            {c.quote}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="engage" className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.cta.title}</h2>
          <ul className="space-y-2 mb-8 inline-block text-left">
            {c.cta.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${params.lang}/contact`}
              className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 font-medium hover:bg-[#1e3a8a]/90 transition-colors"
            >
              {c.cta.ctaArtifact}
            </Link>
            <Link
              href={`/${params.lang}/contact`}
              className="inline-flex items-center gap-2 border border-[#1e3a8a] text-[#1e3a8a] px-6 py-3 font-medium hover:bg-[#1e3a8a]/5 transition-colors"
            >
              {c.cta.ctaDemo}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-black mb-6">{c.faq.title}</h2>
          <div className="space-y-4">
            {c.faq.items.map((item, i) => (
              <div key={i} className="bg-white p-4 border border-black/5">
                <p className="font-bold text-black mb-1">{item.q}</p>
                <p className="text-black/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Paper CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#1e3a8a]/5 border border-[#1e3a8a]/20 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-black mb-4">{c.whitePaper.title}</h2>
            <p className="text-black/70 mb-6 max-w-2xl">{c.whitePaper.content}</p>
            <Link
              href={`/${params.lang}/white-paper`}
              className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 font-medium hover:bg-[#1e3a8a]/90 transition-colors"
            >
              {c.whitePaper.linkText} <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
