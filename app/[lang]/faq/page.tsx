import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'Questions fréquentes',
    subtitle: 'Tout ce que vous devez savoir sur Horizon',
    backToHome: '← Retour à l\'accueil',
    categories: [
      {
        name: 'Terminologie',
        items: [
          {
            question: 'Qu\'est-ce qu\'un Decision Snapshot ?',
            answer: 'Un Decision Snapshot est l\'enregistrement vérifiable de ce qui a été décidé au moment de l\'exécution. C\'est la preuve — le fait décisionnel tel qu\'il est établi.',
          },
          {
            question: 'Qu\'est-ce qu\'un Decision Snapshot Artifact ?',
            answer: 'Un Decision Snapshot Artifact est la matérialisation technique du Decision Snapshot : un objet signé, immuable et auto-contenu, préservé indépendamment des systèmes sources.',
          },
        ],
      },
      {
        name: 'Général',
        items: [
          {
            question: 'Pourquoi ne pas faire ça avec des logs ?',
            answer: 'Les logs sont utiles, mais souvent dispersés, reconstitués, et dépendants du SI source. Horizon vise une preuve décisionnelle autonome, stable et exploitable.',
          },
          {
            question: 'Quel périmètre pour commencer ?',
            answer: 'La bonne approche est ciblée : un use case critique, instrumentation au point de décision, puis extension progressive. Éviter "capturer tout".',
          },
        ],
      },
      {
        name: 'Données & Intégration',
        items: [
          {
            question: 'Horizon stocke-t-il des données sensibles ?',
            answer: 'Horizon n\'ingère pas les flux de données opérationnels. Il préserve les faits décisionnels déclarés au moment de l\'exécution, selon des schémas et périmètres définis par l\'institution. La minimisation des données, la rétention et la classification de sensibilité restent entièrement sous contrôle institutionnel.',
          },
          {
            question: 'Comment le contenu d\'un snapshot décisionnel est-il défini ?',
            answer: 'Horizon définit un ensemble de champs standards. Chaque institution définit les champs spécifiques au système et fournit le schéma utilisé pour alimenter le snapshot décisionnel.',
          },
          {
            question: 'Qui décide quelles données sont capturées ?',
            answer: 'Horizon ne décide pas de ce qui est pertinent. Les clients définissent le schéma et les données fournies pour chaque système.',
          },
          {
            question: 'Comment Horizon s\'intègre-t-il aux systèmes existants ?',
            answer: 'Asplenz fournit un SDK léger qui s\'intègre au point de décision de l\'institution. Les détails d\'intégration sont discutés au cas par cas pour refléter les contraintes système, les exigences de sécurité et le contexte institutionnel. La documentation technique est disponible sur demande.',
          },
        ],
      },
      {
        name: 'Positionnement',
        items: [
          {
            question: 'Horizon influence-t-il ou participe-t-il à la prise de décision ?',
            answer: 'Non. Horizon est un composant d\'infrastructure passif. Il observe et enregistre les données d\'exécution des décisions, mais n\'évalue ni ne prend jamais de décision.',
          },
          {
            question: 'Horizon est-il lié à des cadres réglementaires spécifiques ?',
            answer: 'Non. Horizon est une infrastructure technique agnostique aux régimes réglementaires. Il produit des artefacts signés au moment de l\'exécution que les institutions peuvent utiliser dans leurs propres processus réglementaires.',
          },
        ],
      },
    ],
    cta: {
      title: 'Une question spécifique ?',
      description: 'Contactez-nous pour discuter de votre cas d\'usage.',
      contactEmail: 'contact@asplenz.com',
    },
  },
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about Horizon',
    backToHome: '← Back to home',
    categories: [
      {
        name: 'Terminology',
        items: [
          {
            question: 'What is a Decision Snapshot?',
            answer: 'A Decision Snapshot is the verifiable record of what was decided at execution time. It is the evidence — the decision fact as established.',
          },
          {
            question: 'What is a Decision Snapshot Artifact?',
            answer: 'A Decision Snapshot Artifact is the technical materialization of the Decision Snapshot: a signed, immutable, and self-contained object, preserved independently of source systems.',
          },
        ],
      },
      {
        name: 'General',
        items: [
          {
            question: 'Why not do this with logs?',
            answer: 'Logs are useful, but often scattered, reconstructed, and dependent on source IS. Horizon aims for autonomous, stable and usable decision evidence.',
          },
          {
            question: 'What is the recommended scope to start with?',
            answer: 'The right approach is targeted: one critical use case, instrumentation at the decision point, then gradual extension. Avoid "capture everything".',
          },
        ],
      },
      {
        name: 'Data & Integration',
        items: [
          {
            question: 'Does Horizon store sensitive data?',
            answer: 'Horizon does not ingest operational data flows. It preserves declared decision facts at execution time, according to schemas and boundaries defined by the institution. Data minimization, retention, and sensitivity classification remain fully under institutional control.',
          },
          {
            question: 'How is the content of a decision snapshot defined?',
            answer: 'Horizon defines a set of standard fields. Each institution defines system-specific fields and provides the schema used to populate the decision snapshot.',
          },
          {
            question: 'Who decides what data is captured?',
            answer: 'Horizon does not decide what is relevant. Clients define the schema and the data provided for each system.',
          },
          {
            question: 'How does Horizon integrate into existing systems?',
            answer: 'Asplenz provides a lightweight SDK that is integrated at the institution\'s decision point. Integration details are discussed on a case-by-case basis to reflect system constraints, security requirements, and institutional context. Technical documentation is available upon request.',
          },
        ],
      },
      {
        name: 'Positioning',
        items: [
          {
            question: 'Does Horizon influence or participate in decision-making?',
            answer: 'No. Horizon is a passive infrastructure component. It observes and records decision execution data, but never evaluates or makes decisions.',
          },
          {
            question: 'Is Horizon tied to specific regulatory frameworks?',
            answer: 'No. Horizon is a technical infrastructure agnostic to regulatory regimes. It produces signed execution-time artifacts that institutions may use within their own regulatory processes.',
          },
        ],
      },
    ],
    cta: {
      title: 'Have a specific question?',
      description: 'Contact us to discuss your use case.',
      contactEmail: 'contact@asplenz.com',
    },
  },
};

export default function FAQPage({
  params,
}: {
  params: { lang: Language };
}) {
  const c = content[params.lang];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href={`/${params.lang}`}
            className="text-[#005C99] hover:underline text-sm mb-4 inline-block"
          >
            {c.backToHome}
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">{c.title}</h1>
          <p className="text-black/60 text-lg">{c.subtitle}</p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {c.categories.map((category, catIndex) => (
            <section key={catIndex}>
              <h2 className="text-xl font-bold mb-6 text-[#005C99]">{category.name}</h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-zinc-50 border border-black/10 rounded-2xl p-5"
                  >
                    <h3 className="font-bold text-black mb-2">{item.question}</h3>
                    <p className="text-black/60 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#005C99]/5 border border-[#005C99]/20 rounded-2xl p-6">
          <h3 className="font-bold text-lg mb-2">{c.cta.title}</h3>
          <p className="text-black/60 mb-4">{c.cta.description}</p>
          <a
            href={`mailto:${c.cta.contactEmail}`}
            className="text-[#005C99] font-medium hover:underline"
          >
            {c.cta.contactEmail}
          </a>
        </div>
      </div>
    </div>
  );
}
