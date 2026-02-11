'use client'

import { useLang } from '@/lib/LangContext'
import PageLayout from '@/app/components/PageLayout'

export default function ContactPage() {
  const { lang } = useLang()

  const content = {
    en: {
      title: 'Contact & Evidence Briefing',
      section1: {
        title: 'Discuss Your Decision Architecture',
        intro: 'This page is intended for leaders who carry accountability, not operational workload:',
        roles: [
          'Chief Information Security Officer',
          'Chief Risk Officer',
          'Head of Compliance',
          'CTO or CIO',
          'Board-level decision owners',
        ],
        purpose: 'The purpose is to examine how decisions are declared, recorded, and defended under scrutiny.',
        conclusion: 'If your organization cannot produce defensible evidence of a critical decision within 48 hours of an incident, audit, or regulatory request, this discussion is relevant.',
      },
      pathTitle: 'Choose Your Path',
      demo: {
        title: 'Book a Product Demonstration',
        description: 'For organizations evaluating Horizon for internal deployment or institutional review.',
        includesIntro: 'This session includes:',
        includes: [
          'a structured walkthrough of the proof architecture',
          'demonstration of decision sealing and artifact generation',
          'explanation of integration model and API structure',
          'discussion of deployment constraints',
        ],
        duration: 'Duration: 30 minutes',
        audience: 'Audience: Risk, Legal, Security, or Technology leadership',
        cta: 'Book a demo',
        ctaUrl: 'https://app.cal.eu/asplenz/institutional-acceptability',
      },
      partner: {
        title: 'Join the Design Partner Programme',
        description: 'For regulated organizations willing to validate decision proof architecture on one critical system over a structured 8-week engagement.',
        scopeIntro: 'Programme scope:',
        scope: [
          'one system',
          'one decision type',
          'one clear proof objective',
          'validation under realistic audit or incident scenario',
        ],
        limited: 'Limited to 2 to 3 organizations.',
        p1: 'This is not a pilot of workflows.',
        p2: 'It is a validation of evidence architecture.',
        cta: 'Join the design partner programme',
        ctaUrl: 'mailto:contact@asplenz.com?subject=Design%20Partner%20Programme',
      },
      written: {
        title: 'Written or Strategic Inquiries',
        description: 'For partnership discussions, regulatory dialogue, institutional exchange, or written communication:',
        email: 'contact@asplenz.com',
        entity: 'Asplenz, Paris, France',
      },
      independence: {
        title: 'Independence by Design',
        intro: 'Horizon is built so that evidence remains defensible even if operational systems fail.',
        items: [
          { label: 'Payload neutrality', description: 'The customer defines and transmits the payload, in encrypted form or in plaintext. Horizon stores the payload as received and does not attempt to access or interpret its content.' },
          { label: 'Cryptographic anchoring', description: 'Hashes, signatures, and timestamps are appended to an immutable proof chain to ensure integrity.' },
          { label: 'Tenant isolation', description: 'Organizational evidence remains strictly segregated within each tenant.' },
          { label: 'Independent verification', description: 'Proof artifacts can be validated cryptographically without reliance on Horizon\'s internal systems.' },
        ],
        conclusion1: 'Evidence must survive scrutiny.',
        conclusion2: 'Infrastructure must survive systems.',
      },
    },
    fr: {
      title: 'Briefing Contact & Preuve',
      section1: {
        title: 'Discutez de votre architecture de décision',
        intro: 'Cette page est destinée aux dirigeants qui portent la responsabilité (accountability), et non la charge opérationnelle :',
        roles: [
          'Responsable de la Sécurité des Systèmes d\'Information (RSSI)',
          'Directeur des Risques (CRO)',
          'Responsable de la Conformité',
          'CTO ou CIO',
          'Détenteurs de décisions au niveau du conseil d\'administration',
        ],
        purpose: 'L\'objectif est d\'examiner comment les décisions sont déclarées, enregistrées et défendues sous observation.',
        conclusion: 'Si votre organisation ne peut pas produire de preuves défendables d\'une décision critique dans les 48 heures suivant un incident, un audit ou une demande réglementaire, cette discussion est pertinente.',
      },
      pathTitle: 'Choisissez votre parcours',
      demo: {
        title: 'Réserver une démonstration du produit',
        description: 'Pour les organisations évaluant Horizon pour un déploiement interne ou un examen institutionnel.',
        includesIntro: 'Cette session comprend :',
        includes: [
          'une présentation structurée de l\'architecture de preuve',
          'une démonstration du scellement des décisions et de la génération d\'artefacts',
          'une explication du modèle d\'intégration et de la structure de l\'API',
          'une discussion sur les contraintes de déploiement',
        ],
        duration: 'Durée : 30 minutes',
        audience: 'Audience : Direction des Risques, Juridique, Sécurité ou Technologie',
        cta: 'Réserver une démo',
        ctaUrl: 'https://app.cal.eu/asplenz/institutional-acceptability',
      },
      partner: {
        title: 'Rejoindre le programme partenaire design (Design Partner Programme)',
        description: 'Pour les organisations réglementées souhaitant valider l\'architecture de preuve de décision sur un système critique au cours d\'un engagement structuré de 8 semaines.',
        scopeIntro: 'Périmètre du programme :',
        scope: [
          'un système',
          'un type de décision',
          'un objectif de preuve clair',
          'une validation dans le cadre d\'un scénario réaliste d\'audit ou d\'incident',
        ],
        limited: 'Limité à 2 ou 3 organisations.',
        p1: 'Il ne s\'agit pas d\'un pilote de workflows.',
        p2: 'C\'est une validation d\'architecture de preuve.',
        cta: 'Rejoindre le programme partenaire design',
        ctaUrl: 'mailto:contact@asplenz.com?subject=Design%20Partner%20Programme',
      },
      written: {
        title: 'Demandes écrites ou stratégiques',
        description: 'Pour les discussions de partenariat, le dialogue réglementaire, les échanges institutionnels ou la communication écrite :',
        email: 'contact@asplenz.com',
        entity: 'Asplenz, Paris, France',
      },
      independence: {
        title: 'L\'indépendance par conception',
        intro: 'Horizon est construit de manière à ce que les preuves restent défendables même en cas de défaillance des systèmes opérationnels.',
        items: [
          { label: 'Neutralité de la charge utile (Payload)', description: 'Le client définit et transmet la charge utile, sous forme chiffrée ou en clair. Horizon stocke la charge utile telle qu\'elle a été reçue et ne tente pas d\'accéder à son contenu ni de l\'interpréter.' },
          { label: 'Ancrage cryptographique', description: 'Les hachages, signatures et horodatages sont ajoutés à une chaîne de preuve immuable pour garantir l\'intégrité.' },
          { label: 'Isolation des tenants', description: 'Les preuves de l\'organisation restent strictement ségréguées au sein de chaque environnement client (tenant).' },
          { label: 'Vérification indépendante', description: 'Les artefacts de preuve peuvent être validés par cryptographie sans dépendre des systèmes internes d\'Horizon.' },
        ],
        conclusion1: 'La preuve doit survivre à l\'examen.',
        conclusion2: 'L\'infrastructure doit survivre aux systèmes.',
      },
    },
  }

  const t = content[lang]

  return (
    <PageLayout>
      <article className="max-w-4xl">
        {/* Title */}
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-12">{t.title}</h1>

        {/* Discuss Your Decision Architecture */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">{t.section1.title}</h2>
          <p className="text-[var(--text-secondary)] mb-4">{t.section1.intro}</p>
          <ul className="space-y-2 mb-6">
            {t.section1.roles.map((role, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                <span className="text-[var(--text-secondary)]">{role}</span>
              </li>
            ))}
          </ul>
          <p className="text-[var(--text-secondary)] mb-4">{t.section1.purpose}</p>
          <p className="text-[var(--text-primary)] font-medium">{t.section1.conclusion}</p>
        </section>

        {/* Choose Your Path */}
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8 border-t border-[var(--border)] pt-12">{t.pathTitle}</h2>

        {/* Book a Product Demonstration */}
        <section className="mb-10 p-6 bg-[var(--bg-card)] rounded-lg border border-[var(--border)]">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">{t.demo.title}</h3>
          <p className="text-[var(--text-secondary)] mb-4">{t.demo.description}</p>
          <p className="text-[var(--text-secondary)] mb-3">{t.demo.includesIntro}</p>
          <ul className="space-y-1.5 mb-6">
            {t.demo.includes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                <span className="text-[var(--text-secondary)] text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[var(--text-muted)] text-sm mb-1">{t.demo.duration}</p>
          <p className="text-[var(--text-muted)] text-sm mb-6">{t.demo.audience}</p>
          <a
            href={t.demo.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
          >
            {t.demo.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </section>

        {/* Join the Design Partner Programme */}
        <section className="mb-10 p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)]">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">{t.partner.title}</h3>
          <p className="text-[var(--text-secondary)] mb-4">{t.partner.description}</p>
          <p className="text-[var(--text-secondary)] mb-3">{t.partner.scopeIntro}</p>
          <ul className="space-y-1.5 mb-6">
            {t.partner.scope.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                <span className="text-[var(--text-secondary)] text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[var(--text-muted)] text-sm mb-1">{t.partner.limited}</p>
          <p className="text-[var(--text-secondary)] mt-4 mb-1">{t.partner.p1}</p>
          <p className="text-[var(--text-primary)] font-medium mb-6">{t.partner.p2}</p>
          <a
            href={t.partner.ctaUrl}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--accent)] text-[var(--accent)] font-medium rounded-lg hover:bg-[var(--accent)]/10 transition-colors"
          >
            {t.partner.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </section>

        {/* Written or Strategic Inquiries */}
        <section className="mb-12 p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)]">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">{t.written.title}</h3>
          <p className="text-[var(--text-secondary)] mb-4">{t.written.description}</p>
          <a
            href={`mailto:${t.written.email}`}
            className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:text-[var(--accent-hover)] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.written.email}
          </a>
          <p className="text-[var(--text-muted)] text-sm mt-2">{t.written.entity}</p>
        </section>

        {/* Independence by Design */}
        <section className="border-t border-[var(--border)] pt-12">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{t.independence.title}</h2>
          <p className="text-[var(--text-secondary)] mb-8">{t.independence.intro}</p>
          <div className="space-y-6 mb-8">
            {t.independence.items.map((item, idx) => (
              <div key={idx}>
                <p className="text-[var(--text-primary)] font-medium mb-1">{item.label}</p>
                <p className="text-[var(--text-secondary)] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--text-primary)] font-medium">{t.independence.conclusion1}</p>
          <p className="text-[var(--text-muted)] font-medium">{t.independence.conclusion2}</p>
        </section>
      </article>
    </PageLayout>
  )
}
