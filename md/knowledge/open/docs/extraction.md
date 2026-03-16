<!-- lang: fr -->

# Extraction Automatique

Knowledge peut scanner vos sources existantes et extraire automatiquement les règles, décisions et contraintes implicites. Rien n'est publié sans validation humaine.

---

## Pourquoi l'extraction automatique ?

La plupart des équipes ont déjà des règles — elles ne sont simplement pas structurées. Elles vivent dans des READMEs, des décisions d'architecture, des runbooks, des commentaires de code, des threads Slack et des pages wiki.

Saisir manuellement chaque règle dans un registre prend un temps que la plupart des équipes n'ont pas. L'extraction automatique résout le problème du démarrage à froid : pointez-la vers vos sources et obtenez un registre peuplé en quelques minutes.

Et à mesure que votre documentation évolue, vous pouvez relancer l'extraction régulièrement pour faire émerger les nouvelles règles implicites — votre registre reste à jour sans maintenance manuelle.

---

## Comment ça fonctionne

![Pipeline d'extraction](./knowledge-extraction-pipeline.svg)

### 1. Pointez vers vos sources

```bash
knowledge extract --scope Engineering --source ./docs --source ./CLAUDE.md
```

Ciblez des répertoires et types de fichiers spécifiques :

```bash
knowledge extract --scope Engineering \
  --source ./docs --pattern "**/*.md" \
  --source ./src --pattern "**/README.md" \
  --source . --pattern "CLAUDE.md"
```

### 2. Chaque chunk est analysé

Les fichiers sont découpés en chunks contextuels (~1500 caractères avec 10% de chevauchement). Chaque chunk est analysé avec un prompt d'extraction structuré qui identifie :

- **Candidats invariant** : contraintes absolues (« Tous les endpoints API doivent exiger une authentification »)
- **Candidats rule** : directives actives, mandatory ou advisory (« Utiliser les conventional commits »)
- **Candidats decision** : choix historiques avec contexte (« On a choisi PostgreSQL pour les données transactionnelles »)

Chaque extraction inclut :
- **Score de confiance** (0.0 – 1.0, minimum 0.6 pour être conservé)
- **Extrait source** qui a motivé l'extraction
- **Tags suggérés** et namespace
- **Une explication** de pourquoi cet élément a été identifié

### 3. La déduplication filtre le bruit

Chaque extraction est comparée aux entrées existantes dans le scope cible par similarité sémantique :

| Similarité | Résultat |
|-----------|----------|
| >= 0.92 | Doublon exact — automatiquement filtré et logué dans le rapport d'extraction |
| >= 0.80 | Similaire — draft créé avec une relation `REPLACES` pointant vers l'entrée existante |
| < 0.80 | Nouveau — draft créé sans relations |

### 4. Validation humaine

Rien n'est publié sans validation. Chaque extraction devient un **draft** visible dans le dashboard, montrant :

- L'entrée proposée avec son type détecté (Invariant, Rule ou Decision) et son score de confiance
- L'extrait source qui a motivé l'extraction
- Les relations détectées avec les entrées existantes — doublons, remplacements, tensions
- Une explication de pourquoi cet élément a été identifié

Trois actions :
- **Approuver** : publie le draft comme une entrée Knowledge avec l'attribution `source: auto_extracted`
- **Rejeter** : supprime le draft
- **Éditer** : modifier le contenu, les tags ou le namespace avant d'approuver

---

## Types de sources

### Dépôts Git

Pointez la CLI vers n'importe quel dépôt et filtrez par glob pattern. Knowledge analyse les fichiers source — code, configuration, définitions d'infrastructure — et fait émerger les règles et contraintes implicites qui ne sont documentées nulle part.

```bash
knowledge extract --scope Engineering --source /path/to/repo --pattern "**/*.{ts,py,yaml,md}"
```

### Documents spécifiques

```bash
knowledge extract --scope Engineering \
  --source /path/to/runbook.md \
  --source /path/to/architecture.md
```

### API d'ingestion

Pour les sources qui ne sont pas sur disque, poussez les documents directement via l'API :

```bash
curl -X POST http://localhost:8090/api/v1/extract/stream \
  -H "Authorization: Bearer kn_..." \
  -H "Content-Type: application/json" \
  -d '{
    "scope_id": "scp-...",
    "documents": [
      {
        "content": "Tous les déploiements doivent passer par staging d abord.",
        "metadata": {"author": "ops-team", "source": "runbook-v3"}
      }
    ],
    "auto_run": true
  }'
```

### Connecteurs additionnels

Les connecteurs Slack, Teams, Notion, Confluence et Excel sont disponibles sur les plans Team et Scale.

[Voir les intégrations →](/docs/integrations)

---

## Configuration LLM

L'extraction nécessite un accès LLM. Deux options :

| Option | Description |
|--------|-------------|
| **Géré par Asplenz** | Aucune configuration nécessaire. L'usage LLM est facturé au coût sur votre facture. |
| **Votre propre clé API** | Apportez votre propre clé. Vous contrôlez votre contrat fournisseur et la résidence des données. |

Les organisations avec des exigences strictes de résidence des données ou de Zero Data Retention doivent utiliser leur propre clé API.

---

## Permissions

| Action | Permission requise | Rôle minimum |
|--------|-------------------|-------------|
| Lancer une extraction | `extract_run` | senior-dev |
| Voir les runs et drafts | `extract_read` | developer |
| Approuver / rejeter / éditer les drafts | `extract_review` | tech-lead |
| Pousser via l'API d'ingestion | `extract_stream` | admin |

---

## Configuration

| Paramètre | Défaut | Description |
|-----------|--------|-------------|
| Modèle | Configurable | LLM utilisé pour l'extraction |
| Température | 0.1 | Basse pour une extraction factuelle |
| Confiance minimum | 0.6 | En dessous, les extractions sont supprimées |
| Max extractions par chunk | 5 | Limite le bruit |
| Max drafts par run | 200 | Plafonne la sortie totale |
| Taille des chunks | ~1500 car. | Découpage par paragraphe avec 10% de chevauchement |
| Seuil dedup exact | 0.92 | Au-dessus = doublon |
| Seuil dedup similaire | 0.80 | Au-dessus = relation REPLACES |

---

## Bonnes pratiques

**Commencez large, puis affinez.** Lancez l'extraction sur tout votre répertoire `docs/` d'abord. Reviewez les résultats, puis restreignez vos patterns aux sources les plus productives.

**Re-extrayez régulièrement.** Lancez l'extraction trimestriellement, après une réécriture majeure, ou quand de nouveaux docs apparaissent. La déduplication intelligente garantit que votre registre ne sera pas pollué par des doublons.

**Reviewez par lots.** Reviewez tous les drafts en attente d'un run en une seule session — rejetez le bruit, approuvez les bons.

**Utilisez les tags de manière cohérente.** L'extraction suggère des tags, mais vérifiez-les pour la cohérence. Un système de tags propre rend le registre plus facilement cherchable.

---

## En savoir plus

- [Commencer →](/docs/getting-started)
- [Comment fonctionne Knowledge →](/product/how-it-works)
- [Concepts : Invariants →](/docs/concepts/invariants)
- [Concepts : Rules →](/docs/concepts/rules)
- [Référence API →](/docs/integrations/api-reference)


<!-- lang: en -->

# Automatic Extraction

Knowledge can scan your existing sources and extract implicit rules, decisions, and constraints automatically. Nothing is published without human review.

---

## Why Automatic Extraction?

Most teams already have rules — they're just not structured. They live in READMEs, architecture decisions, runbooks, code comments, Slack threads, and wiki pages.

Manually entering each rule into a registry takes time most teams don't have. Automatic extraction solves the cold-start problem: point it at your sources and get a populated registry in minutes.

And as your documentation evolves, you can re-extract regularly to surface new implicit rules — your registry stays current without manual maintenance.

---

## How It Works

![Extraction pipeline](./knowledge-extraction-pipeline.svg)

### 1. Point at your sources

```bash
knowledge extract --scope Engineering --source ./docs --source ./CLAUDE.md
```

Target specific directories and file types:

```bash
knowledge extract --scope Engineering \
  --source ./docs --pattern "**/*.md" \
  --source ./src --pattern "**/README.md" \
  --source . --pattern "CLAUDE.md"
```

### 2. Each chunk is analyzed

Files are split into contextual chunks (~1500 characters with 10% overlap). Each chunk is analyzed with a structured extraction prompt that identifies:

- **Invariant candidates**: absolute constraints ("All API endpoints must require authentication")
- **Rule candidates**: active directives, mandatory or advisory ("Use conventional commits")
- **Decision candidates**: historical choices with context ("We chose PostgreSQL for transactional data")

Each extraction includes:
- **Confidence score** (0.0 – 1.0, minimum 0.6 to be kept)
- **Source excerpt** that motivated the extraction
- **Suggested tags** and namespace
- **An explanation** of why this was identified

### 3. Deduplication filters noise

Every extraction is compared against existing entries in the target scope using semantic similarity:

| Similarity | Result |
|-----------|--------|
| >= 0.92 | Exact duplicate — automatically filtered out and logged in the extraction report |
| >= 0.80 | Similar — draft created with `REPLACES` relation pointing to the existing entry |
| < 0.80 | New — draft created without relations |

### 4. Human review

Nothing is published without validation. Every extraction becomes a **draft** visible in the dashboard, showing:

- The proposed entry with its detected type (Invariant, Rule, or Decision) and confidence score
- The source excerpt that motivated the extraction
- Detected relations to existing entries — duplicates, replacements, tensions
- An explanation of why this was identified

Three actions:
- **Approve**: publishes the draft as a real Knowledge entry with `source: auto_extracted` attribution
- **Reject**: discards the draft
- **Edit**: modify the content, tags, or namespace before approving

---

## Source Types

### Git Repositories

Point the CLI at any repository and filter by glob pattern. Knowledge analyzes source files — code, configuration, infrastructure definitions — and surfaces implicit rules and constraints that are not documented anywhere.

```bash
knowledge extract --scope Engineering --source /path/to/repo --pattern "**/*.{ts,py,yaml,md}"
```

### Specific Documents

```bash
knowledge extract --scope Engineering \
  --source /path/to/runbook.md \
  --source /path/to/architecture.md
```

### Ingestion API

For sources that don't live on disk, push documents directly via the API:

```bash
curl -X POST http://localhost:8090/api/v1/extract/stream \
  -H "Authorization: Bearer kn_..." \
  -H "Content-Type: application/json" \
  -d '{
    "scope_id": "scp-...",
    "documents": [
      {
        "content": "All deployments must go through staging first.",
        "metadata": {"author": "ops-team", "source": "runbook-v3"}
      }
    ],
    "auto_run": true
  }'
```

### Additional Connectors

Slack, Teams, Notion, Confluence, and Excel connectors are available on Team and Scale plans.

[See integrations →](/docs/integrations)

---

## LLM Configuration

Extraction requires LLM access. Two options:

| Option | Description |
|--------|-------------|
| **Asplenz-managed** | No configuration needed. LLM usage billed at cost on your invoice. |
| **Your own API key** | Bring your own key. You control your provider contract and data residency. |

Organizations with strict data residency or Zero Data Retention requirements should use their own API key.

---

## Permissions

| Action | Required permission | Minimum role |
|--------|-------------------|-------------|
| Launch extraction | `extract_run` | senior-dev |
| View runs and drafts | `extract_read` | developer |
| Approve / reject / edit drafts | `extract_review` | tech-lead |
| Push via Ingestion API | `extract_stream` | admin |

---

## Configuration

| Parameter | Default | Description |
|-----------|---------|-------------|
| Model | Configurable | LLM used for extraction |
| Temperature | 0.1 | Low for factual extraction |
| Min confidence | 0.6 | Below this, extractions are discarded |
| Max extractions per chunk | 5 | Limits noise |
| Max drafts per run | 200 | Caps total output |
| Chunk size | ~1500 chars | Paragraph-based splitting with 10% overlap |
| Dedup exact threshold | 0.92 | Similarity above this = duplicate |
| Dedup similar threshold | 0.80 | Similarity above this = REPLACES relation |

---

## Best Practices

**Start broad, then refine.** Run extraction on your entire `docs/` directory first. Review the results, then narrow your patterns to the most productive sources.

**Re-extract regularly.** Run extraction quarterly, after a major rewrite, or whenever new docs appear. Smart deduplication ensures your registry won't be polluted with duplicates.

**Review in batches.** Review all pending drafts for a run in a single session — reject the noise, approve the good ones.

**Use tags consistently.** The extraction suggests tags, but review them for consistency. A clean tagging system makes the registry more searchable.

---

## Learn More

- [Getting Started →](/docs/getting-started)
- [How Knowledge Works →](/product/how-it-works)
- [Concepts: Invariants →](/docs/concepts/invariants)
- [Concepts: Rules →](/docs/concepts/rules)
- [API Reference →](/docs/integrations/api-reference)
