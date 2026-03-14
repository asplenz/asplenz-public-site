# Getting Started with Knowledge

Get a working Knowledge instance in under 10 minutes. By the end of this guide, you'll have:
- A running API with seed data
- A web dashboard to explore decisions, invariants, and rules
- Rules automatically extracted from your existing docs
- An AI agent connected via MCP

---

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Python | 3.11+ |
| Node.js | 18+ |
| Conda | any recent |
| Git | any recent |

---

## 1. Clone and Install

```bash
git clone https://github.com/asplenz/knowledge.git
cd knowledge
```

### Backend (Python)

```bash
conda create -n knowledge python=3.12 -y
conda activate knowledge
cd src/knowledge-api
pip install -r requirements.txt
```

### Frontend (React)

```bash
cd src/knowledge-ui
npm install
```

---

## 2. Seed the Database

Knowledge ships with a seed script that creates a demo tenant, scopes, and sample entries:

```bash
cd src/knowledge-api
python -m src.seed
```

Output:
```
Created tenant: Acme Corp (tnt-...)
Created scope: Engineering (scp-...)
Created scope: Operations (scp-...)
Created scope: Product (scp-...)
Created 9 decisions, 4 invariants, 4 rules, 2 overrides
Admin API key: kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Save the API key** — it is shown only once.

---

## 3. Start the API

```bash
cd src/knowledge-api
uvicorn src.main:app --reload --port 8090
```

Verify it's running:
```bash
curl http://localhost:8090/health
# {"status": "ok"}
```

---

## 4. Start the Dashboard

In a separate terminal:
```bash
cd src/knowledge-ui
npm run dev
```

Open [http://localhost:3002](http://localhost:3002). Paste your API key and click **Connect**.

You'll see:
- **Dashboard** with KPI cards (scopes, decisions, invariants, rules)
- **Scope pages** with tabs for each entry type
- **Search** with full-text filtering
- **Compliance checker** to test actions against constraints

---

## 5. Your First API Call

### Search for a decision

```bash
curl -X POST http://localhost:8090/api/v1/search \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{"query": "FastAPI"}'
```

### Record a new decision

```bash
curl -X POST http://localhost:8090/api/v1/scopes/scp-XXXX/decisions \
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
curl -X POST http://localhost:8090/api/v1/check \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "scope_id": "scp-XXXX",
    "intended_action": "Deploy on Friday evening without review"
  }'
```

Response shows any conflicting invariants or rules — with IDs, severity, and whether approval can unlock the action.

---

## 6. Extract Rules from Existing Docs

Knowledge can scan your existing documentation and extract implicit rules, decisions, and constraints automatically.

### Point at your docs

```bash
knowledge extract --scope Engineering --source ./docs --source ./CLAUDE.md
```

The CLI reads every matching file, analyzes each chunk with an LLM, and creates typed drafts:

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
- **Confidence**: how confident the LLM is (0.6 – 1.0)

Approve to publish to the registry. Reject to discard. Edit before approving if needed.

### Configure patterns

By default, extraction analyzes `**/*.md` files. You can target specific patterns:

```bash
knowledge extract --scope Engineering \
  --source ./docs --pattern "**/*.md" \
  --source ./src --pattern "CLAUDE.md"
```

---

## 7. Connect an AI Agent (MCP)

Knowledge includes an MCP server that lets Claude, Cursor, and other AI tools query the registry using natural language.

### Configure Claude Code

Create or update `.mcp.json` in your project root:

```json
{
  "mcpServers": {
    "knowledge": {
      "command": "python",
      "args": ["src/knowledge-mcp/server.py"],
      "env": {
        "KNOWLEDGE_API_KEY": "kn_xxxxxxxx",
        "KNOWLEDGE_API_URL": "http://localhost:8090"
      }
    }
  }
}
```

### Launch Claude Code

```bash
cd knowledge
claude
```

Try these prompts:
- *"What invariants does Engineering have?"*
- *"Can I push directly to main without a PR review?"*
- *"Record a decision: we chose Playwright for E2E testing"*

Claude queries Knowledge in real-time, respects constraints, and records decisions on your behalf.

---

## 8. Add the CI Verifier (Optional)

The Verifier runs in your CI pipeline and checks that PRs cite applicable Knowledge entries.

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance Check
  run: python -m knowledge_verifier --config .knowledge-verifier.yml
  env:
    KNOWLEDGE_API_URL: ${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
```

Start in `report-only` mode to see results without blocking PRs, then promote to `fail-on-blocking` when the team is ready.

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
| `Connection refused` on port 8090 | Start the API: `uvicorn src.main:app --port 8090` |
| `Invalid or expired API key` | Re-seed: `python -m src.seed` and use the new key |
| Dashboard shows no data | Make sure you seeded the database |
| MCP tools not showing in Claude | Launch Claude from the directory containing `.mcp.json` |
