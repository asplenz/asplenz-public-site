import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'Engagement & Contact',
    intro: {
      title: 'Comment l\'adoption d\'Horizon commence',
      description: 'Horizon est une infrastructure qui s\'intègre dans des systèmes réels et durables. Son adoption n\'est ni automatique, ni implicite. Elle commence par une discussion structurée, destinée à établir clairement ce qui est pertinent, ce qui ne l\'est pas, et si Horizon a sa place dans votre environnement.',
    },
    acceptability: {
      badge: '1. Entretien d\'acceptabilité',
      subtitle: 'Point d\'entrée principal',
      description: 'C\'est le point d\'entrée standard pour toute adoption d\'Horizon. Cet entretien vise à évaluer si — et dans quelles conditions — une **Decision Snapshot Infrastructure** est techniquement, organisationnellement et institutionnellement acceptable dans votre contexte.',
      coverTitle: 'Ce que nous abordons :',
      coverPoints: [
        'Panorama des systèmes de décision automatisée existants.',
        'Réalités d\'exécution (production, pré-prod, sandbox, démonstration).',
        'Contraintes d\'architecture et d\'évolution.',
        'Posture de gouvernance et de risque.',
        'Périmètres pertinents et non-objectifs explicites.',
      ],
      outcomeTitle: 'Résultat attendu :',
      outcomePoints: [
        'Une décision claire : go / no-go.',
        'Si applicable, un périmètre d\'adoption identifié.',
        'Aucune obligation d\'adoption ultérieure.',
      ],
      quote: 'Cette discussion n\'engage pas à adopter Horizon. Elle engage à clarifier si son adoption a du sens.',
    },
    audit: {
      badge: '2. Audit Readiness & Post-mortem',
      subtitle: 'Engagement transitoire et contextuel',
      contextTitle: 'Contexte',
      contextDescription: 'Dans de nombreux environnements, les décisions passées n\'ont pas été capturées au moment de leur exécution. Les organisations sont alors contraintes de reconstruire les faits a posteriori à partir de sources fragmentées.',
      purposeTitle: 'Objectif',
      purposeDescription: 'Dans ces situations spécifiques, Asplenz peut accompagner les équipes afin de :',
      purposePoints: [
        'Distinguer clairement **faits** et **reconstructions**.',
        'Structurer des dossiers factuels défendables.',
        'Articuler une posture institutionnelle cohérente lors d\'audits, enquêtes ou incidents complexes.',
      ],
      quote: 'Cet engagement existe pour traiter le coût de l\'absence d\'Horizon. Il ne constitue pas un substitut à l\'infrastructure. Il est par nature transitoire.',
    },
    contact: {
      title: 'Contact',
      intro: 'Pour initier une discussion d\'engagement :',
      name: 'Ahmed Mohamed Ali',
      role: 'Founder & CEO — Asplenz',
      email: 'amohamedali@asplenz.com',
      phone: '+33 6 84 97 15 84',
      linkedin: 'linkedin.com/in/ahmohamedali',
      linkedinUrl: 'https://linkedin.com/in/ahmohamedali',
    },
  },
  en: {
    title: 'Engagement & Contact',
    intro: {
      title: 'How Horizon adoption starts',
      description: 'Horizon is an infrastructure designed to integrate into real, long-lived systems. Its adoption is neither automatic nor implicit. It starts with a structured discussion, meant to establish clearly what is relevant, what is not, and whether Horizon belongs in your environment.',
    },
    acceptability: {
      badge: '1. Acceptability Discussion',
      subtitle: 'Primary entry point',
      description: 'This is the standard entry point for Horizon adoption. The purpose of this discussion is to assess whether — and under which conditions — a **Decision Snapshot Infrastructure** can be technically, organizationally, and institutionally adopted in your context.',
      coverTitle: 'What we cover:',
      coverPoints: [
        'Overview of existing automated decision systems.',
        'Execution realities (production, pre-prod, sandbox, demo).',
        'Architectural constraints and evolution paths.',
        'Governance and risk posture.',
        'Explicit scopes and non-goals.',
      ],
      outcomeTitle: 'Expected outcome:',
      outcomePoints: [
        'A clear go / no-go decision.',
        'If applicable, an identified adoption scope.',
        'No obligation to proceed further.',
      ],
      quote: 'This discussion does not commit you to adoption. It commits both sides to clarity.',
    },
    audit: {
      badge: '2. Audit Readiness & Post-mortem',
      subtitle: 'Transitional and contextual engagement',
      contextTitle: 'Context',
      contextDescription: 'In many environments, past decisions were not captured at execution time. Organizations are therefore forced to reconstruct reality after the fact, using partial sources.',
      purposeTitle: 'Purpose',
      purposeDescription: 'In these specific situations, Asplenz can support teams in:',
      purposePoints: [
        'Separating **factual records** from **reconstructions**.',
        'Structuring defensible evidence files.',
        'Articulating a coherent institutional position during audits, inquiries, or complex incidents.',
      ],
      quote: 'This engagement exists to address the cost of not having Horizon in place. It is not a substitute for the infrastructure. It is inherently transitional.',
    },
    contact: {
      title: 'Contact',
      intro: 'To initiate an engagement discussion:',
      name: 'Ahmed Mohamed Ali',
      role: 'Founder & CEO — Asplenz',
      email: 'amohamedali@asplenz.com',
      phone: '+33 6 84 97 15 84',
      linkedin: 'linkedin.com/in/ahmohamedali',
      linkedinUrl: 'https://linkedin.com/in/ahmohamedali',
    },
  },
};

export default function EngagementPage({
  params,
}: {
  params: { lang: Language };
}) {
  const c = content[params.lang];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-12 lg:pt-16 pb-4">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-6">
            {c.title}
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">{c.intro.title}</h2>
          <p className="text-lg text-black/70">{c.intro.description}</p>
        </div>
      </section>

      {/* Acceptability Discussion */}
      <section className="pt-0 pb-4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-green-600 text-xl">●</span>
            <p className="text-lg font-bold text-black">{c.acceptability.badge}</p>
          </div>
          <p className="text-sm text-black/60 italic mb-6">{c.acceptability.subtitle}</p>
          <p className="text-black/70 mb-8" dangerouslySetInnerHTML={{ __html: c.acceptability.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="font-bold text-black mb-4">{c.acceptability.coverTitle}</p>
              <ul className="space-y-2">
                {c.acceptability.coverPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-black mb-4">{c.acceptability.outcomeTitle}</p>
              <ul className="space-y-2">
                {c.acceptability.outcomePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#005C99] pl-4 text-black/70 italic">
            {c.acceptability.quote}
          </blockquote>
        </div>
      </section>

      {/* Audit Readiness */}
      <section className="pt-4 pb-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-orange-500 text-xl">●</span>
            <p className="text-lg font-bold text-black">{c.audit.badge}</p>
          </div>
          <p className="text-sm text-black/60 italic mb-6">{c.audit.subtitle}</p>

          <p className="font-bold text-black mb-2">{c.audit.contextTitle}</p>
          <p className="text-black/70 mb-6">{c.audit.contextDescription}</p>

          <p className="font-bold text-black mb-2">{c.audit.purposeTitle}</p>
          <p className="text-black/70 mb-4">{c.audit.purposeDescription}</p>
          <ul className="space-y-2 mb-8">
            {c.audit.purposePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
            ))}
          </ul>

          <blockquote className="border-l-4 border-[#005C99] pl-4 text-black/70 italic">
            {c.audit.quote}
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section className="py-10 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.contact.title}</h2>
          <p className="text-black/70 mb-8">{c.contact.intro}</p>

          <div className="bg-white p-8 border border-black/10">
            <p className="text-xl font-bold text-black mb-1">{c.contact.name}</p>
            <p className="text-black/70 mb-6">{c.contact.role}</p>

            <div className="space-y-3">
              <p className="flex items-center gap-3 text-black/70">
                <span>📧</span>
                <a href={`mailto:${c.contact.email}`} className="text-[#005C99] hover:underline">
                  {c.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-3 text-black/70">
                <span>📞</span>
                <span>{c.contact.phone}</span>
              </p>
              <p className="flex items-center gap-3 text-black/70">
                <span>🔗</span>
                <a href={c.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#005C99] hover:underline">
                  {c.contact.linkedin}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
