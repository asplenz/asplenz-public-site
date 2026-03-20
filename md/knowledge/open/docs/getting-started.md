<!-- lang: en -->

# Getting Started with Knowledge

Get up and running in under 10 minutes. By the end of this guide, you'll have:
- Your scopes and first entries created
- An AI agent connected via MCP
- Rules extracted from your existing docs and code

---

## 1. Create Your Account

Sign up at [asplenz.com/signup](/signup). Once your workspace is ready, you'll receive:
- Your **API base URL**: `https://api.asplenz.com`
- An **admin API key**: `kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

**Save the API key** — it is shown only once. You can generate additional keys from the dashboard.

---

## 2. Explore the Dashboard

Log into the [dashboard](https://app.asplenz.com). From there you can:
- **Create scopes** to organize your knowledge (e.g. Engineering, Operations, Product)
- **Add entries** — decisions, invariants, and rules — manually or via extraction
- **Search** across all entries with full-text filtering
- **Check compliance** by testing an intended action against your constraints

---

## 3. Your First API Calls

All API calls require the `Authorization` header with your API key. Copy the scope ID from the dashboard — it's shown on each scope page.

### List your scopes

```bash
curl https://api.asplenz.com/knowledge/v1/scopes \
  -H "Authorization: Bearer kn_xxxxxxxx"
```

### Record a decision

```bash
curl -X POST https://api.asplenz.com/knowledge/v1/scopes/scp-XXXX/decisions \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "decision": "Use Docker Compose for local development",
    "context": "Developers waste time setting up services manually",
    "author": "your-name",
    "author_type": "human",
    "tags": ["infrastructure", "dx"]
  }'
```

### Check compliance

```bash
curl -X POST https://api.asplenz.com/knowledge/v1/check \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "scope_id": "scp-XXXX",
    "intended_action": "Deploy on Friday evening without review"
  }'
```

The response shows any conflicting invariants or rules — with IDs, severity, and whether approval can unlock the action.

---

## 4. Connect an AI Agent (MCP)

Knowledge provides a hosted MCP server that lets Claude Code, Cursor, and other AI tools query the registry in real time. No installation required.

### Configure Claude Code

Create or update `.mcp.json` in your project root:

```json
{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com",
      "headers": {
        "Authorization": "Bearer kn_xxxxxxxx"
      }
    }
  }
}
```

### Try it

Launch Claude Code from your project directory and try:
- *"What invariants does Engineering have?"*
- *"Can I push directly to main without a PR review?"*
- *"Record a decision: we chose Playwright for E2E testing"*

Claude queries Knowledge in real time, respects constraints, and records decisions on your behalf.

---

## 5. Extract Rules from Existing Docs and Code

Knowledge can scan your existing documentation and source code to extract implicit rules, decisions, and constraints automatically. Since your AI agent already has access to Knowledge via MCP, just ask it:

### Extract from your docs

```
> "Extract rules from ./docs and ./CLAUDE.md for the Engineering scope"
```

### Extract from your codebase

Knowledge also analyzes source code, configuration files, and infrastructure definitions to surface implicit rules that are not documented anywhere:

```
> "Extract rules from ./src for the Engineering scope, focus on TypeScript, Python, and YAML files"
```

The agent reads your local files, sends them to Knowledge for analysis, and reports the results:

```
Scanning 23 files...
  47 chunks analyzed
  12 drafts generated (4 invariants, 5 rules, 3 decisions)
  2 duplicates skipped
```

### Review in the dashboard

Open the dashboard and navigate to the extraction page. Each draft shows:
- **Type**: invariant, rule, or decision
- **Content**: the extracted constraint or directive
- **Source**: the file and excerpt that motivated the extraction
- **Confidence**: confidence level (0.6 – 1.0)

Approve to publish to the registry. Reject to discard. Edit before approving if needed.

---

## 6. Add the CI Verifier (Optional)

The Verifier runs in your CI pipeline and checks that PRs comply with your Knowledge entries.

### Install

```bash
pip install knowledge-verifier
```

### Configure

Create `.knowledge-verifier.yml` in your repository root:

```yaml
knowledge_api:
  url: https://api.asplenz.com
  # API key via KNOWLEDGE_API_KEY env var

verification:
  mode: report-only
  report_path: .knowledge/report.md
  scope_mapping:
    "src/payments/**": "Engineering/payments"
    "src/auth/**": "Engineering/auth"
    "infrastructure/**": "Operations"
    "**": "Engineering"
```

### Add to your CI pipeline

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance Check
  run: |
    pip install knowledge-verifier
    knowledge-verifier --config .knowledge-verifier.yml
  env:
    KNOWLEDGE_API_URL: ${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
```

Start in `report-only` mode to see results without blocking PRs, then promote to `fail-on-blocking` when the team is ready.

See [CI Verifier →](/product/ci-verifier) for details on gating modes and implementation reports.

---

## What's Next

| Goal | Read |
|------|------|
| Extract rules from existing docs | [Automatic Extraction](/docs/extraction) |
| Understand the data model | [Concepts: Decisions](/docs/concepts/decisions) |
| Define constraints for your team | [Concepts: Invariants](/docs/concepts/invariants) |
| Set up CI compliance checks | [Integrations: CI/CD](/docs/integrations/ci-cd) |
| Connect AI agents | [Integrations: Claude MCP](/docs/integrations/claude-mcp) |
| Explore the full API | [API Reference](/docs/integrations/api-reference) |
| See pricing and plans | [Pricing](/pricing) |

---

## Common Issues

| Problem | Fix |
|---------|-----|
| `401 Unauthorized` | Check your API key in the `Authorization` header |
| `Invalid or expired API key` | Generate a new key from the dashboard |
| MCP tools not showing in Claude | Launch Claude from the directory containing `.mcp.json` |
| Verifier reports no constraints | Check your `scope_mapping` patterns in `.knowledge-verifier.yml` |

---
---

<!-- lang: fr -->

# Démarrer avec Knowledge

Soyez opérationnel en moins de 10 minutes. À la fin de ce guide, vous aurez :
- Vos scopes et premières entrées créés
- Un agent IA connecté via MCP
- Des règles extraites de votre documentation et de votre code existants

---

## 1. Créez votre compte

Inscrivez-vous sur [asplenz.com/signup](/signup). Une fois votre workspace prêt, vous recevrez :
- Votre **URL de base API** : `https://api.asplenz.com`
- Une **clé API admin** : `kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

**Conservez la clé API** — elle n'est affichée qu'une seule fois. Vous pouvez générer des clés supplémentaires depuis le dashboard.

---

## 2. Explorez le dashboard

Connectez-vous au [dashboard](https://app.asplenz.com). Depuis celui-ci vous pouvez :
- **Créer des scopes** pour organiser vos connaissances (ex. Engineering, Operations, Product)
- **Ajouter des entrées** — decisions, invariants et rules — manuellement ou via extraction
- **Rechercher** dans toutes les entrées avec filtrage full-text
- **Vérifier la conformité** en testant une action envisagée contre vos contraintes

---

## 3. Vos premiers appels API

Tous les appels API nécessitent le header `Authorization` avec votre clé API. Copiez le scope ID depuis le dashboard — il est affiché sur chaque page de scope.

### Lister vos scopes

```bash
curl https://api.asplenz.com/knowledge/v1/scopes \
  -H "Authorization: Bearer kn_xxxxxxxx"
```

### Enregistrer une décision

```bash
curl -X POST https://api.asplenz.com/knowledge/v1/scopes/scp-XXXX/decisions \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "decision": "Use Docker Compose for local development",
    "context": "Developers waste time setting up services manually",
    "author": "your-name",
    "author_type": "human",
    "tags": ["infrastructure", "dx"]
  }'
```

### Vérifier la conformité

```bash
curl -X POST https://api.asplenz.com/knowledge/v1/check \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "scope_id": "scp-XXXX",
    "intended_action": "Deploy on Friday evening without review"
  }'
```

La réponse indique les invariants ou rules en conflit — avec leurs IDs, sévérité, et si une approbation peut débloquer l'action.

---

## 4. Connecter un agent IA (MCP)

Knowledge fournit un serveur MCP hébergé qui permet à Claude Code, Cursor et d'autres outils IA d'interroger le registre en temps réel. Aucune installation requise.

### Configurer Claude Code

Créez ou mettez à jour `.mcp.json` à la racine de votre projet :

```json
{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com",
      "headers": {
        "Authorization": "Bearer kn_xxxxxxxx"
      }
    }
  }
}
```

### Essayez

Lancez Claude Code depuis votre répertoire de projet et essayez :
- *"Quels invariants a le scope Engineering ?"*
- *"Puis-je pusher directement sur main sans code review ?"*
- *"Enregistre une décision : on a choisi Playwright pour les tests E2E"*

Claude interroge Knowledge en temps réel, respecte les contraintes et enregistre les décisions pour vous.

---

## 5. Extraire les règles de vos docs et de votre code

Demandez à votre agent IA (Claude Code, Cursor, etc.) de scanner votre documentation et votre code source. L'agent lit les fichiers localement, les analyse via MCP, et crée des drafts typés dans Knowledge.

### Extraire depuis vos docs

```
> "Extrais les règles depuis ./docs et ./CLAUDE.md pour le scope Engineering"
```

### Extraire depuis votre codebase

L'agent analyse aussi les fichiers source, les configurations et les définitions d'infrastructure pour faire émerger les règles implicites qui ne sont documentées nulle part :

```
> "Scanne ./src pour les fichiers .ts, .py et .yaml dans le scope Engineering"
```

L'agent lit chaque fichier, analyse chaque chunk, et crée des drafts typés :

```
Scanning 23 files...
  47 chunks analyzed
  12 drafts generated (4 invariants, 5 rules, 3 decisions)
  2 duplicates skipped
```

### Reviewer dans le dashboard

Ouvrez le dashboard et naviguez vers la page d'extraction. Chaque draft affiche :
- **Type** : invariant, rule ou decision
- **Contenu** : la contrainte ou directive extraite
- **Source** : le fichier et l'extrait ayant motivé l'extraction
- **Confiance** : niveau de confiance (0.6 – 1.0)

Approuvez pour publier dans le registre. Rejetez pour supprimer. Éditez avant d'approuver si nécessaire.

### Configurer les patterns

Vous pouvez combiner plusieurs sources et patterns en un seul run :

```
> "Extrais les règles depuis ./docs (*.md), ./src (*.ts, *.py, *.yaml) et ./CLAUDE.md pour Engineering"
```

---

## 6. Ajouter le CI Verifier (Optionnel)

Le Verifier s'exécute dans votre pipeline CI et vérifie que les PRs respectent vos entrées Knowledge.

### Installer

```bash
pip install knowledge-verifier
```

### Configurer

Créez `.knowledge-verifier.yml` à la racine de votre dépôt :

```yaml
knowledge_api:
  url: https://api.asplenz.com
  # Clé API via la variable d'environnement KNOWLEDGE_API_KEY

verification:
  mode: report-only
  report_path: .knowledge/report.md
  scope_mapping:
    "src/payments/**": "Engineering/payments"
    "src/auth/**": "Engineering/auth"
    "infrastructure/**": "Operations"
    "**": "Engineering"
```

### Ajouter à votre pipeline CI

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance Check
  run: |
    pip install knowledge-verifier
    knowledge-verifier --config .knowledge-verifier.yml
  env:
    KNOWLEDGE_API_URL: ${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
```

Commencez en mode `report-only` pour voir les résultats sans bloquer les PRs, puis passez en `fail-on-blocking` quand l'équipe est prête.

Voir [CI Verifier →](/product/ci-verifier) pour les détails sur les modes de gating et les implementation reports.

---

## Et ensuite

| Objectif | Lire |
|----------|------|
| Extraire les règles de vos docs | [Extraction automatique](/docs/extraction) |
| Comprendre le modèle de données | [Concepts : Decisions](/docs/concepts/decisions) |
| Définir des contraintes pour votre équipe | [Concepts : Invariants](/docs/concepts/invariants) |
| Configurer les checks CI | [Intégrations : CI/CD](/docs/integrations/ci-cd) |
| Connecter des agents IA | [Intégrations : Claude MCP](/docs/integrations/claude-mcp) |
| Explorer l'API complète | [Référence API](/docs/integrations/api-reference) |
| Voir les tarifs | [Tarifs](/pricing) |

---

## Problèmes courants

| Problème | Solution |
|----------|----------|
| `401 Unauthorized` | Vérifiez votre clé API dans le header `Authorization` |
| `Invalid or expired API key` | Générez une nouvelle clé depuis le dashboard |
| Les outils MCP n'apparaissent pas dans Claude | Lancez Claude depuis le répertoire contenant `.mcp.json` |
| Le Verifier ne trouve aucune contrainte | Vérifiez vos patterns `scope_mapping` dans `.knowledge-verifier.yml` |
