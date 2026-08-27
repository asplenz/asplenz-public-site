---
title: Reference des tools MCP Knowledge
description: Chaque tool exposé par le serveur MCP Knowledge, avec paramètres, forme de retour, et usage typique.
locale: fr
kicker: Docs / MCP server - Stable
---

Le serveur MCP Knowledge expose huit tools. Chacun wrappe un endpoint de l'API Knowledge. Cette page décrit ce que chaque tool fait, les arguments qu'il accepte, et ce qu'il retourne.

Pour wire le serveur dans votre MCP host, voir [Quickstart : Knowledge comme serveur MCP](/docs/quickstart-knowledge-mcp).

---

## `knowledge_query`

Chercher des rules dans le tenant de l'appelant par texte libre.

**Paramètres**

| Nom | Type | Requis | Notes |
|---|---|---|---|
| `query` | string | oui | Termes de recherche libres. |
| `policy_id` | string | non | Restreindre à une seule Policy. |
| `entry_type` | string | non | Seul `"rule"` est significatif aujourd'hui. |

**Retour** - liste formatée de résultats avec entry type, titre, snippet, auteur, date. String vide si aucun résultat.

**Usage typique** - l'agent demande "que sait le tenant sur les limites de refund ?" avant de proposer une action.

---

## `knowledge_check`

Verdict sur une action envisagée contre les targets autorisés de l'appelant.

**Paramètres**

| Nom | Type | Requis | Notes |
|---|---|---|---|
| `intended_action` | string | oui | Description libre de ce que l'appelant veut faire. |
| `scope` | object | non | Dimensions de scope structurées (jurisdiction, asset_class, client_classification, ...). Les rules dont la scope key ne match pas sont skippées. |
| `metrics` | object | non | Faits runtime que les rules évaluent : nombres (thresholds), booléens (attestations), strings (ids, timestamps). Tout ce sur quoi une rule peut gater qui n'est pas une scope dim va ici. |

**Retour** - bloc verdict :

```
Verdict: BLOCK | ALLOW | REQUIRE_APPROVAL | WARN
Consultation: cns-...

Cited rules (N, winning severity):
  [severity] rule_id
    statement
    Rationale: ...
```

Plus une ligne récap si d'autres rules ont fired à severity plus basse (precedence trace).

**Usage typique** - l'agent demande "j'ai le droit de faire X dans ce scope avec ces metrics ?" et branche sur l'effect retourné.

---

## `knowledge_resolve`

Verdict à deux étages, context-progressive. L'agent envoie ce qu'il sait ; le moteur soit retourne un verdict, soit liste les champs manquants que l'agent doit acquérir avant de re-invoquer.

**Paramètres**

| Nom | Type | Requis | Notes |
|---|---|---|---|
| `action_type` | string | oui | L'opération évaluée (ex. `refund_request`, `trade_execution`). Utilisé pour résoudre le target applicable. |
| `context` | object | non | Faits connus comme `{field_name: value_or_fact}`. Les scalaires nus sont auto-wrappés en user-asserted facts. Les fact dicts complets passent tels quels : `{"value": X, "source": "CRM", "verification_status": "verified"}`. |
| `correlation` | object | non | IDs externes pour corréler cet appel à une conversation, un run d'agent, une interaction. Stocké sur la Consultation, non interprété. |

**Retour** - une des deux formes :

- `INCOMPLETE` : liste des champs requis avec type, reason, `allowed_values` / range / `source_requirement` / acceptable sources.
- `COMPLETE` : verdict + dominating rule + cited rules + `normative_hash` + consultation id.

**Usage typique** - agents conversationnels qui construisent le contexte tour par tour. Voir [Résolution progressive de contexte](/docs/concepts/progressive-context-resolution).

---

## `knowledge_request_approval`

Soumettre une demande d'approbation humaine pour une action qu'un check a flagée.

**Paramètres**

| Nom | Type | Requis | Notes |
|---|---|---|---|
| `intended_action` | string | oui | Résumé natural-language court pour le compliance officer. |
| `justification` | string | oui | La prose que l'officer lit pour décider approve ou refuse. Doit parler spécifiquement aux rules qui bloquent le contexte. |
| `context` | object | oui | Le MÊME `context` (`scope` + `metrics`) qui a produit le verdict block de `knowledge_check`. Le backend re-run le check pour dériver les rules couvertes. |
| `requested_by` | string | non | `principal_id` sous lequel la demande est filée. Fall back au requester par défaut du tenant si omis. |
| `requested_by_type` | string | non | `"human"` / `"agent"` / `"system"`. Défaut : le type configuré du tenant. |

**Retour** - `approval_request_id`, status, et la liste des `rule_id`s que le backend a attachés comme triggers. Vérifiez que la trigger list match ce que `knowledge_check` a retourné - un mismatch veut dire que le contexte passé ici diffère du contexte checké.

**Usage typique** - l'agent hit `require_approval` sur `knowledge_check`, rédige une justification, soumet, puis polle.

**Pourquoi re-passer context, pas triggers** : un seul code path répond à "qu'est-ce qui bloque ce contexte ?" pour le read (check) et le write (approval). Empêche les blockers "wave 2" cachés derrière la dominating severity de surfacer après approbation.

---

## `knowledge_get_approval_status`

Poll une demande d'approbation.

**Paramètres**

| Nom | Type | Requis | Notes |
|---|---|---|---|
| `approval_request_id` | string | oui | L'id retourné par `knowledge_request_approval`. |

**Retour** - status, requester, action summary, plus décideur + timestamp de décision + `override_id` résultant + commentaire de décision une fois résolu.

**Usage typique** - l'agent polle jusqu'à ce que le status flip de `pending` à `approved` / `refused`, puis procède en conséquence.

---

## `knowledge_create_rule`

Créer une nouvelle Rule sous une Policy existante. Requiert write access sur le tenant.

**Paramètres**

| Nom | Type | Requis | Notes |
|---|---|---|---|
| `policy_id` | string | oui | La Policy à laquelle la rule appartient. |
| `statement` | string | oui | Texte directif - ce que dit la rule. |
| `author` | string | oui | Nom de l'auteur. |
| `severity` | string | non | `absolute_ban` / `hard_block` / `require_approval` / `informative` / `allow`. Défaut `hard_block`. |
| `effect` | string | non | `block` / `allow` / `require_approval` / `warn`. Défaut `block`. |
| `priority` | integer | non | Plus haut gagne les égalités. Défaut 50. |
| `rows` | string (JSON) | non | Body decision-table multi-row. Chaque row : `{"position", "scope", "condition?", "output?"}`. |
| `scope` | string (JSON) | non | Commodité pour rule single-row. Ignoré si `rows` est set. |
| `condition` | string (JSON) | non | Commodité pour rule single-row. Ignoré si `rows` est set. |
| `rationale` | string | non | Motivation plain-text. |
| `derogation_allowed` | boolean | non | Si un Override peut lifter cette rule. Défaut true. |

**Retour** - `rule_id`, severity, récap du nombre de rows, et le statement.

**Usage typique** - flow d'authoring où l'LLM propose une rule et l'humain approuve. Rare depuis un runtime agent.

---

## `knowledge_list_rules`

Énumérer les rules actives d'une Policy.

**Paramètres**

| Nom | Type | Requis | Notes |
|---|---|---|---|
| `policy_id` | string | oui | Policy à lister. |

**Retour** - liste formatée de `rule_id` + severity + statement.

**Usage typique** - l'agent inspecte une Policy existante avant de proposer un amendement.

---

## `knowledge_create_override`

Accorder une exception scope-bounded sur une ou plusieurs Rules pour une audience spécifique.

**Paramètres**

| Nom | Type | Requis | Notes |
|---|---|---|---|
| `targets` | list | oui | Liste d'objets `{"target_id", "target_type"}`. |
| `justification` | string | oui | Audit trail expliquant l'exception. |
| `approved_by` | string | oui | Nom de l'approver. |
| `audience_type` | string | non | `"individual"` (liste de principals) ou `"domain"` (domain entier). Défaut `"individual"`. |
| `audience_principal_ids` | list | non | Principals pour audience individual. |
| `audience_domain_id` | string | non | Domain id pour audience domain. |
| `expires_at` | string | non | Timestamp ISO où l'override cesse de s'appliquer. |
| `conditions` | string | non | Description libre du gate. |

**Retour** - `override_id`, count des targets, audience type.

**Usage typique** - une fois qu'une approval est accordée, l'Override résultant est créé ici (typiquement par le code back-office, pas par l'agent).

---

## Auth et configuration

Le serveur MCP appelle Knowledge avec une clé API service-level positionnée en `KNOWLEDGE_API_KEY` au startup. Chaque tool call passe par cette clé. Pas d'impersonation caller-identity par appel aujourd'hui.

Pour le transport remote (streamable-http), le MCP host s'authentifie au serveur lui-même avec soit un bearer statique (`MCP_ACCESS_TOKEN`), soit OAuth 2.1. Voir [Quickstart : Knowledge comme serveur MCP](/docs/quickstart-knowledge-mcp) pour les détails de wiring.
