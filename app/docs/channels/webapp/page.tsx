'use client'

import { useLang } from '@/lib/LangContext'

export default function WebappChannelPage() {
  const { lang } = useLang()

  const content = {
    en: {
      title: 'Webapp Channel',
      subtitle: 'View and Verify Timelines',
      status: 'Available',
      useCases: [
        'Timeline visualization for audit support',
        'Chain verification interface',
        'Bundle export for evidence packages',
        'Management dashboards',
      ],
      features: [
        { name: 'Timeline View', desc: 'Visual chronological display of sealed facts' },
        { name: 'Chain Verification', desc: 'One-click hash chain integrity check' },
        { name: 'Bundle Export', desc: 'Download signed proof bundles' },
        { name: 'Search & Filter', desc: 'Find facts by actor, date, or payload content' },
        { name: 'Tenant Management', desc: 'Multi-tenant organization support' },
      ],
      note: 'The webapp provides read-only access to sealed facts. Sealing is done via API or Email channels.'
    },
    fr: {
      title: 'Canal Webapp',
      subtitle: 'Visualiser et Vérifier les Timelines',
      status: 'Disponible',
      useCases: [
        'Visualisation de timeline pour support d\'audit',
        'Interface de vérification de chaîne',
        'Export de bundle pour dossiers de preuve',
        'Tableaux de bord de gestion',
      ],
      features: [
        { name: 'Vue Timeline', desc: 'Affichage chronologique visuel des faits scellés' },
        { name: 'Vérification de Chaîne', desc: 'Vérification d\'intégrité de la chaîne de hachage en un clic' },
        { name: 'Export de Bundle', desc: 'Télécharger des bundles de preuve signés' },
        { name: 'Recherche & Filtres', desc: 'Trouver des faits par acteur, date ou contenu payload' },
        { name: 'Gestion des Tenants', desc: 'Support organisation multi-tenant' },
      ],
      note: 'La webapp fournit un accès en lecture seule aux faits scellés. Le scellement se fait via les canaux API ou Email.'
    }
  }

  const t = content[lang]

  return (
    <article className="prose">
      <h1>{t.title}</h1>
      <p className="text-xl text-[var(--text-muted)] -mt-4 mb-2">{t.subtitle}</p>
      <p className="text-sm text-green-400 mb-8">{t.status}</p>

      <section className="mb-10">
        <h2>{lang === 'en' ? 'Use Cases' : 'Cas d\'Usage'}</h2>
        <ul className="space-y-2">
          {t.useCases.map((uc, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[var(--text-secondary)]">
              <span className="text-[var(--accent)]">•</span>
              {uc}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2>{lang === 'en' ? 'Features' : 'Fonctionnalités'}</h2>
        <div className="grid gap-4">
          {t.features.map((f, idx) => (
            <div key={idx} className="p-4 border border-[var(--border)] rounded-lg bg-[var(--bg-card)]">
              <h4 className="font-semibold text-[var(--text-primary)] mb-1">{f.name}</h4>
              <p className="text-[var(--text-muted)] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-[var(--text-muted)] text-sm italic border-l-4 border-[var(--accent)] pl-4">
        {t.note}
      </p>
    </article>
  )
}
