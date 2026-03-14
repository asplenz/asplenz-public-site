# Site Restructure — asplenz.com = Knowledge

Tu dois restructurer le site Next.js dans c:\dev\projects\asplenz-public-site pour que asplenz.com soit directement le site Knowledge (pas /knowledge/* mais les routes racines).

## Contexte

Le contenu markdown est dans `md/knowledge/`. Chaque fichier md correspond à une page du site. Le site est bilingue (EN/FR) via `lib/content.ts` et `lib/LangContext.tsx` — ne touche PAS à content.ts ni à lib/knowledge-docs.ts.

## Structure cible des routes

### Depuis md/knowledge/open/

| Fichier source | Route cible |
|---|---|
| landing.md | `/` (remplace la home actuelle) |
| pricing.md | `/pricing` |
| product/how-it-works.md | `/product/how-it-works` |
| product/extraction.md | `/product/extraction` |
| product/ai-agents.md | `/product/ai-agents` |
| product/ci-verifier.md | `/product/ci-verifier` |
| docs/getting-started.md | `/docs/getting-started` |
| docs/extraction.md | `/docs/extraction` |
| docs/concepts/decisions.md | `/docs/concepts/decisions` |
| docs/concepts/invariants.md | `/docs/concepts/invariants` |
| docs/concepts/rules.md | `/docs/concepts/rules` |
| docs/concepts/overrides.md | `/docs/concepts/overrides` |
| docs/concepts/scopes.md | `/docs/concepts/scopes` |
| blog/why-adrs-fail.md | `/blog/why-adrs-fail` |
| blog/governing-ai-agents.md | `/blog/governing-ai-agents` |
| use-cases/engineering.md | `/use-cases/engineering` |
| use-cases/finance.md | `/use-cases/finance` |
| use-cases/legal.md | `/use-cases/legal` |
| use-cases/healthcare.md | `/use-cases/healthcare` |
| compliance/ai-act.md | `/compliance/ai-act` |
| evidence/landing.md | `/evidence` |
| company/about.md | `/company/about` |
| company/contact.md | `/company/contact` |
| company/legal.md | `/company/legal` |

### Depuis md/knowledge/gated/

| Fichier source | Route cible |
|---|---|
| product/changelog.md | `/changelog` |
| docs/integrations/api-reference.md | `/docs/integrations/api-reference` |
| docs/integrations/ci-cd.md | `/docs/integrations/ci-verifier` |
| docs/integrations/claude-mcp.md | `/docs/integrations/claude-mcp` |

## Header

```
[Logo Asplenz]  Product ▼ | Docs ▼ | Pricing | Blog | Sign in
```

Dropdowns :

**Product**
- How it works → /product/how-it-works
- Automatic Extraction → /product/extraction
- AI Agents → /product/ai-agents
- CI Verifier → /product/ci-verifier

**Docs**
- Getting Started → /docs/getting-started
- Concepts → /docs/concepts/decisions (entry point)
- Integrations → /docs/integrations/claude-mcp (entry point)
- API Reference → /docs/integrations/api-reference

## Sidebar Docs (pour toutes les pages /docs/*)

```
Getting Started
Concepts
  Decisions
  Invariants
  Rules
  Overrides
  Scopes & Namespaces
Extraction
Integrations
  Claude MCP
  CI Verifier
  API Reference
```

## Footer

```
Product              Docs                  Company          Also by Asplenz
How it works         Getting Started       About            Evidence →
Extraction           Concepts              Contact
AI Agents            Integrations          Legal
CI Verifier          API Reference         Privacy
Pricing              Changelog
```

"Evidence →" pointe vers /evidence.

## Travaux à effectuer

### 1. Charger le contenu markdown

Créer un fichier `lib/knowledge-pages.ts` qui :
- Importe chaque fichier md depuis `md/knowledge/`
- Exporte un objet `pages: Record<string, { title: string, content: string }>` avec une clé par route
- Clés : `'landing'`, `'pricing'`, `'product/how-it-works'`, `'product/extraction'`, `'product/ai-agents'`, `'product/ci-verifier'`, `'docs/getting-started'`, `'docs/extraction'`, `'docs/concepts/decisions'`, etc.

### 2. Créer les pages Next.js (app router)

Supprimer ou remplacer les dossiers suivants :
- `app/knowledge/` → tout supprimer (contenu déplacé vers racine)
- `app/evidence/` → tout supprimer sauf recréer `app/evidence/page.tsx` (version courte)
- `app/foundations/` → supprimer
- `app/platform/` → supprimer
- `app/horizon/` → supprimer
- `app/perspectives/` → supprimer
- `app/docs/` (ancien) → supprimer et recréer

Créer les nouvelles pages :
```
app/
├── page.tsx                              # Landing Knowledge
├── pricing/page.tsx
├── changelog/page.tsx
├── product/
│   ├── how-it-works/page.tsx
│   ├── extraction/page.tsx
│   ├── ai-agents/page.tsx
│   └── ci-verifier/page.tsx
├── docs/
│   ├── layout.tsx                        # Sidebar Docs (voir structure ci-dessus)
│   ├── getting-started/page.tsx
│   ├── extraction/page.tsx
│   ├── concepts/
│   │   ├── decisions/page.tsx
│   │   ├── invariants/page.tsx
│   │   ├── rules/page.tsx
│   │   ├── overrides/page.tsx
│   │   └── scopes/page.tsx
│   └── integrations/
│       ├── api-reference/page.tsx
│       ├── ci-verifier/page.tsx
│       └── claude-mcp/page.tsx
├── blog/
│   ├── why-adrs-fail/page.tsx
│   └── governing-ai-agents/page.tsx
├── use-cases/
│   ├── engineering/page.tsx
│   ├── finance/page.tsx
│   ├── legal/page.tsx
│   └── healthcare/page.tsx
├── compliance/
│   └── ai-act/page.tsx
├── evidence/
│   └── page.tsx                          # Version courte, CTA only
├── company/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── legal/page.tsx
```

Chaque page charge le contenu depuis `knowledge-pages.ts` et le rend via le composant `MarkdownDoc` existant.

### 3. Modifier Header.tsx

Remplacer la navigation actuelle (Knowledge / Evidence dropdown / Company dropdown) par :
- Product dropdown (4 items)
- Docs dropdown (4 items)
- Pricing (lien direct)
- Blog (lien direct)
- Sign in (CTA)

Conserver le système bilingue (EN/FR toggle) et le responsive mobile.

### 4. Modifier le Footer

Remplacer le footer existant par la structure 4 colonnes ci-dessus. "Evidence →" en dernière colonne.

### 5. Créer app/docs/layout.tsx

Layout avec sidebar pour toutes les pages /docs/*. Utiliser le composant DocsLayout existant avec la structure de navigation Docs décrite ci-dessus.

### 6. Nettoyage

- Supprimer tout fichier orphelin lié aux anciennes routes (/knowledge/*, /evidence/* complet, /foundations/*, /platform/*, /horizon/*, /perspectives/*)
- Vérifier qu'aucun import ne référence les fichiers supprimés
- La home `app/page.tsx` doit rendre le contenu de landing.md, PAS l'ancienne page corporate

## Règles

- Conserver le système bilingue (LangContext, useLang, content.ts pour les labels UI)
- Ne PAS modifier content.ts ni knowledge-docs.ts
- Conserver le composant MarkdownDoc pour le rendu markdown
- Conserver DocsLayout pour le sidebar
- Knowledge n'est PAS open source — ne jamais le mentionner
- Ne PAS mentionner "Distill" — utiliser "Automatic Extraction" et CLI `knowledge extract`
- Texte : toujours text-gray-900, jamais text-gray-700 ou plus clair
- Inputs : toujours bg-white text-gray-900
