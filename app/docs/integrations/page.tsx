'use client'

import { useLang } from '@/lib/LangContext'
import Link from 'next/link'

const content = {
  en: {
    title: 'Integrations',
    intro: 'Knowledge integrates with your AI agents, CI pipelines, and any HTTP client. This page covers the three main integration points: the REST API, the MCP server for AI agents, and the CI Verifier.',
    sections: [
      {
        title: 'API Reference',
        desc: 'REST API for managing decisions, invariants, rules, and the compliance workflow. Covers authentication, all entity endpoints, compliance check, approval workflow, webhooks, and more.',
        tags: ['REST', 'Bearer auth', 'JSON'],
      },
      {
        title: 'Claude MCP',
        desc: 'MCP server that lets AI agents — Claude Code, Cursor, and any MCP-compatible tool — interact with the decision registry using natural language. Includes setup, all 10 tools, and a recommended workflow.',
        tags: ['Python', 'MCP', 'Claude Code', 'Cursor'],
      },
      {
        title: 'CI Verifier',
        desc: 'Runs in your CI pipeline and checks PRs against applicable invariants and rules using a 5-axis analysis: conformity, override validity, citation coverage, semantic analysis (optional), and external checkers. Supports GitHub Actions, GitLab CI, three gating modes.',
        tags: ['GitHub Actions', 'GitLab CI', 'YAML'],
      },
    ],
    gate: {
      label: 'Sign in required',
      body: 'This page is available to registered users. Create a free account to access the full API reference, MCP setup guide, and CI Verifier documentation.',
      cta: 'Create free account',
      ctaHref: '/contact',
      login: 'Already have an account? Sign in',
      loginHref: 'https://app.asplenz.com',
    },
  },
  fr: {
    title: 'Intégrations',
    intro: "Knowledge s'intègre avec vos agents IA, vos pipelines CI, et tout client HTTP. Cette page couvre les trois points d'intégration principaux : l'API REST, le serveur MCP pour les agents IA, et le CI Verifier.",
    sections: [
      {
        title: 'Référence API',
        desc: "API REST pour gérer les decisions, invariants, rules et le workflow de conformité. Couvre l'authentification, tous les endpoints d'entités, le compliance check, le workflow d'approbation, les webhooks, et plus.",
        tags: ['REST', 'Bearer auth', 'JSON'],
      },
      {
        title: 'Claude MCP',
        desc: "Serveur MCP qui permet aux agents IA — Claude Code, Cursor et tout outil compatible MCP — d'interagir avec le registre de décisions en langage naturel. Inclut la configuration, les 10 outils et un workflow recommandé.",
        tags: ['Python', 'MCP', 'Claude Code', 'Cursor'],
      },
      {
        title: 'CI Verifier',
        desc: "S'exécute dans votre pipeline CI et vérifie les PRs contre les invariants et rules applicables via une analyse à 5 axes : conformité, validité des overrides, couverture des citations, analyse sémantique (optionnelle) et external checkers. Supporte GitHub Actions, GitLab CI, trois modes de gating.",
        tags: ['GitHub Actions', 'GitLab CI', 'YAML'],
      },
    ],
    gate: {
      label: 'Connexion requise',
      body: "Cette page est disponible pour les utilisateurs enregistrés. Créez un compte gratuit pour accéder à la référence API complète, au guide de configuration MCP, et à la documentation du CI Verifier.",
      cta: 'Créer un compte gratuit',
      ctaHref: '/contact',
      login: 'Déjà un compte ? Se connecter',
      loginHref: 'https://app.asplenz.com',
    },
  },
}

export default function IntegrationsPage() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <article className="max-w-2xl">
      <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-3">{t.title}</h1>
      <p className="text-[var(--text-secondary)] mb-10 leading-relaxed">{t.intro}</p>

      {/* Section previews */}
      <div className="space-y-4 mb-10">
        {t.sections.map((section) => (
          <div
            key={section.title}
            className="border border-[var(--border)] rounded-lg p-5 bg-[var(--bg-card)]"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="text-base font-semibold text-[var(--text-primary)]">{section.title}</h2>
              <div className="flex gap-1.5 flex-wrap justify-end">
                {section.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-1.5 py-0.5 rounded bg-[var(--accent-light)] text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{section.desc}</p>
          </div>
        ))}
      </div>

      {/* Gate */}
      <div className="border border-[var(--border)] rounded-xl overflow-hidden">
        <div className="bg-[var(--bg-secondary)] px-6 py-4 border-b border-[var(--border)] flex items-center gap-2">
          <svg
            className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span className="text-sm font-medium text-[var(--text-secondary)]">{t.gate.label}</span>
        </div>
        <div className="px-6 py-8 text-center bg-[var(--bg-card)]">
          <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-sm mx-auto leading-relaxed">
            {t.gate.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={t.gate.ctaHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t.gate.cta}
            </Link>
            <a
              href={t.gate.loginHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            >
              {t.gate.login}
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
