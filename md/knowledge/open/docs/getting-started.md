<!-- lang: en -->

# Getting Started with Knowledge

By the end of this guide, you'll be able to:
- Create scopes and record decisions, invariants, and rules
- Connect an AI agent to query and enforce them in real time
- Extract rules from your existing docs and code
- Check compliance in CI

---

## 1. Create Your Account

Sign up at [asplenz.com/signup](/signup). Once your workspace is ready, you'll receive:
- Your **API base URL**: `https://api.asplenz.com/knowledge`
- An **admin API key**: `<api_key>`

**Save the API key** — it is shown only once. You can generate additional keys from the dashboard.

---

## 2. Explore the Dashboard

Log into the [dashboard](https://app.asplenz.com/knowledge). From there you can:
- **Create scopes** to organize your knowledge (e.g. Engineering, Operations, Product)
- **Add entries** — decisions, invariants, and rules — manually or via extraction
- **Search** across all entries with full-text filtering
- **Check compliance** by testing an intended action against your constraints

---

## 3. Your First API Calls

All API calls require the `Authorization` header with your API key. Start by listing your scopes to get the scope ID — you'll use it in the next calls.

### List your scopes

```bash
curl https://api.asplenz.com/knowledge/v1/scopes \
  -H "Authorization: Bearer <api_key>"
```

### Record a decision

```bash
curl -X POST https://api.asplenz.com/knowledge/v1/scopes/<scope_id>/decisions \
  -H "Authorization: Bearer <api_key>" \
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
  -H "Authorization: Bearer <api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "scope_id": "<scope_id>",
    "intended_action": "Deploy on Friday evening without review"
  }'
```

The response shows any conflicting invariants or rules — with IDs, severity, and whether approval can unlock the action.

---

## 4. Connect an AI Agent (MCP)

Knowledge exposes an MCP server. Any MCP-compatible agent — Claude.ai, Claude Code, or any other client — can connect using your API key. No server setup required.

- **MCP server URL**: `https://mcp.asplenz.com/knowledge`

Refer to your agent's documentation to add an MCP server. Use the URL above and set the Authorization header to `Bearer <api_key>`.

### Try it

Once connected, your agent has access to Knowledge tools. Ask it:

```
> "What invariants does Engineering have?"
  → The agent calls the knowledge_list_invariants tool to list invariants in the "Engineering" scope

> "Can I push directly to main without a PR review?"
  → The agent calls the knowledge_check tool to check compliance for the intended action

> "Record a decision: we chose Playwright for E2E testing"
  → The agent calls the knowledge_create_decision tool to save the decision to the registry
```

---

## 5. Extract Rules from Your Documents

Upload your documents (PDF, Word, Markdown) via the dashboard or the ingestion API. Knowledge analyzes them and generates typed drafts — invariants, rules, and decisions — for your review.

```bash
curl -X POST https://api.asplenz.com/knowledge/v1/extract/stream \
  -H "Authorization: Bearer <api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "scope_id": "<scope_id>",
    "documents": [{"content": "..."}],
    "auto_run": true
  }'
```

### Review in the dashboard

Open the dashboard and navigate to the extraction page. Each draft shows:
- **Type**: invariant, rule, or decision
- **Content**: the extracted constraint or directive
- **Source**: the file and excerpt that motivated the extraction
- **Confidence**: confidence level (0.6 – 1.0)

Approve to publish to the registry. Reject to discard. Edit before approving if needed.

---

## For Engineering Teams

Asplenz provides the prompts required to use Knowledge with your AI agent — for extraction, CI checks, and daily development. The following sections assume the Asplenz prompts are in place.

[Get the Asplenz prompts →](/docs/prompts)

### Example: configuring MCP with Claude Code

If you use Claude Code, create or update `.mcp.json` in your project root and launch Claude from that directory:

```json
{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com/knowledge",
      "headers": {
        "Authorization": "Bearer <api_key>"
      }
    }
  }
}
```

---

## 6. Extract Rules from Your Codebase

Your agent reads and analyzes your source files locally and creates typed drafts in Knowledge for your review. Nothing leaves your machine.

```
> "Extract rules from ./docs, ./CLAUDE.md and ./src for the Engineering scope"
  → The agent reads and analyzes the files locally, then creates typed drafts in Knowledge via MCP
```

```
Scanning 23 files...
  47 chunks analyzed
  12 drafts generated (4 invariants, 5 rules, 3 decisions)
  2 duplicates skipped
```

---

## 7. Add Compliance Checks to CI (Optional)

Your AI agent reads the PR diff and checks it against the applicable rules and invariants in Knowledge before the PR is merged.

You can use your local AI agent or Asplenz's hosted agent — both connect to the same Knowledge API.

### With your local AI agent

Your agent reads the PR diff locally and checks it against Knowledge:

```
> "Check the diff of this PR against Knowledge for the Engineering scope"
  → The agent calls knowledge_check for each change and reports any violations
```

### With Asplenz remote agent

Send the PR diff to Knowledge via the API:

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance Check
  run: |
    curl -X POST https://api.asplenz.com/knowledge/v1/verify/diff \
      -H "Authorization: Bearer $KNOWLEDGE_API_KEY" \
      -H "Content-Type: application/json" \
      -d '{
        "scope_id": "<scope_id>",
        "diff": "${{ steps.get_diff.outputs.diff }}"
      }'
  env:
    KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
```

The response includes any conflicting invariants or rules, their severity, and whether an approval can unblock the action.

See [CI Compliance Check →](/product/ci-compliance-check) for details on gating modes.

---
---

<!-- lang: fr -->

# Démarrer avec Knowledge

À la fin de ce guide, vous serez en mesure de :
- Créer des scopes et enregistrer des decisions, invariants et rules
- Connecter un agent IA pour interroger et appliquer les contraintes en temps réel
- Extraire des règles depuis vos docs et votre code existants
- Vérifier la conformité en CI

---

## 1. Créez votre compte

Inscrivez-vous sur [asplenz.com/signup](/signup). Une fois votre workspace prêt, vous recevrez :
- Votre **URL de base API** : `https://api.asplenz.com/knowledge`
- Une **clé API admin** : `<api_key>`

**Conservez la clé API** — elle n'est affichée qu'une seule fois. Vous pouvez générer des clés supplémentaires depuis le dashboard.

---

## 2. Explorez le dashboard

Connectez-vous au [dashboard](https://app.asplenz.com/knowledge). Depuis celui-ci vous pouvez :
- **Créer des scopes** pour organiser vos connaissances (ex. Engineering, Operations, Product)
- **Ajouter des entrées** — decisions, invariants et rules — manuellement ou via extraction
- **Rechercher** dans toutes les entrées avec filtrage full-text
- **Vérifier la conformité** en testant une action envisagée contre vos contraintes

---

## 3. Vos premiers appels API

Tous les appels API nécessitent le header `Authorization` avec votre clé API. Commencez par lister vos scopes pour obtenir le scope ID — vous l'utiliserez dans les appels suivants.

### Lister vos scopes

```bash
curl https://api.asplenz.com/knowledge/v1/scopes \
  -H "Authorization: Bearer <api_key>"
```

### Enregistrer une décision

```bash
curl -X POST https://api.asplenz.com/knowledge/v1/scopes/<scope_id>/decisions \
  -H "Authorization: Bearer <api_key>" \
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
  -H "Authorization: Bearer <api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "scope_id": "<scope_id>",
    "intended_action": "Deploy on Friday evening without review"
  }'
```

La réponse indique les invariants ou rules en conflit — avec leurs IDs, sévérité, et si une approbation peut débloquer l'action.

---

## 4. Connecter un agent IA (MCP)

Knowledge expose un serveur MCP. Tout agent compatible MCP — Claude.ai, Claude Code ou tout autre client — peut s'y connecter avec votre clé API. Aucune installation requise.

- **URL du serveur MCP** : `https://mcp.asplenz.com/knowledge`

Référez-vous à la documentation de votre agent pour ajouter un serveur MCP. Utilisez l'URL ci-dessus et définissez le header Authorization à `Bearer <api_key>`.

### Essayez

Une fois connecté, votre agent a accès aux outils Knowledge. Demandez-lui :

```
> "Quels invariants a le scope Engineering ?"
  → L'agent appelle l'outil knowledge_list_invariants pour lister les invariants du scope "Engineering"

> "Puis-je pusher directement sur main sans code review ?"
  → L'agent appelle l'outil knowledge_check pour vérifier la conformité de l'action

> "Enregistre une décision : on a choisi Playwright pour les tests E2E"
  → L'agent appelle l'outil knowledge_create_decision pour sauvegarder la décision dans le registre
```

---

## 5. Extraire les règles de vos documents

Uploadez vos documents (PDF, Word, Markdown) via le dashboard ou l'API d'ingestion. Knowledge les analyse et génère des drafts typés — invariants, rules et decisions — pour votre revue.

```bash
curl -X POST https://api.asplenz.com/knowledge/v1/extract/stream \
  -H "Authorization: Bearer <api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "scope_id": "<scope_id>",
    "documents": [{"content": "..."}],
    "auto_run": true
  }'
```

### Reviewer dans le dashboard

Ouvrez le dashboard et naviguez vers la page d'extraction. Chaque draft affiche :
- **Type** : invariant, rule ou decision
- **Contenu** : la contrainte ou directive extraite
- **Source** : le fichier et l'extrait ayant motivé l'extraction
- **Confiance** : niveau de confiance (0.6 – 1.0)

Approuvez pour publier dans le registre. Rejetez pour supprimer. Éditez avant d'approuver si nécessaire.

---

## Pour les équipes engineering

Asplenz fournit les prompts nécessaires à l'utilisation de Knowledge avec votre agent IA — pour l'extraction, les checks CI, et le développement quotidien. Les sections suivantes supposent que les prompts Asplenz sont en place.

[Obtenir les prompts Asplenz →](/docs/prompts)

### Exemple : configurer MCP avec Claude Code

Si vous utilisez Claude Code, créez ou mettez à jour `.mcp.json` à la racine de votre projet et lancez Claude depuis ce répertoire :

```json
{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com/knowledge",
      "headers": {
        "Authorization": "Bearer <api_key>"
      }
    }
  }
}
```

---

## 6. Extraire les règles depuis votre codebase

Votre agent lit et analyse vos fichiers source localement et crée des drafts typés dans Knowledge pour votre revue. Rien ne quitte votre machine.

```
> "Extrais les règles depuis ./docs, ./CLAUDE.md et ./src pour le scope Engineering"
  → L'agent lit et analyse les fichiers localement, puis crée des drafts typés dans Knowledge via MCP
```

```
Scanning 23 files...
  47 chunks analyzed
  12 drafts generated (4 invariants, 5 rules, 3 decisions)
  2 duplicates skipped
```

---

## 7. Ajouter des checks de conformité en CI (Optionnel)

Votre agent IA lit le diff de la PR et le vérifie contre les rules et invariants applicables dans Knowledge avant le merge.

Vous pouvez utiliser votre agent IA local ou l'agent hébergé Asplenz — les deux se connectent à la même API Knowledge.

### Avec votre agent IA local

Votre agent lit le diff de la PR localement et le vérifie contre Knowledge :

```
> "Vérifie le diff de cette PR contre Knowledge pour le scope Engineering"
  → L'agent appelle knowledge_check pour chaque changement et rapporte les violations
```

### Avec l'agent Asplenz

Envoyez le diff de la PR à Knowledge via l'API :

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance Check
  run: |
    curl -X POST https://api.asplenz.com/knowledge/v1/verify/diff \
      -H "Authorization: Bearer $KNOWLEDGE_API_KEY" \
      -H "Content-Type: application/json" \
      -d '{
        "scope_id": "<scope_id>",
        "diff": "${{ steps.get_diff.outputs.diff }}"
      }'
  env:
    KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
```

La réponse indique les invariants ou rules en conflit, leur sévérité, et si une approbation peut débloquer l'action.

Voir [Vérification CI →](/product/ci-compliance-check) pour les détails sur les modes de gating.
