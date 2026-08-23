---
title: Référence développeur
description: L'essentiel pour appeler Knowledge depuis une application, un workflow ou un agent IA. Authentification, /resolve, formes de requête et réponse, erreurs, récupération de consultation.
locale: fr
kicker: Pour les équipes engineering
ctaLabel: Devenir design partner
ctaHref: /pilot
---

Knowledge expose une surface REST restreinte. La plupart des intégrations démarrent avec un seul endpoint : `/v1/resolve`. Cette page couvre ce dont vous avez besoin pour faire ce premier appel et lire son résultat.

## Base URL et versioning

L'API est servie sous un chemin versionné :

```
POST https://<votre-deployment>/knowledge/v1/resolve
```

Le préfixe `v1` est stable. Les changements breaking sortent sous un nouveau préfixe major-version ; les changements additifs restent sous `v1`.

## Authentification

Chaque requête doit porter une API key dans le header `X-API-Key` :

```
X-API-Key: ak-<hex>
```

Les clés sont créées par principal dans l'UI back-office ou via l'admin API. Les clés sont hashées au repos et affichées une seule fois à la création. Rotationnez-les à la fréquence que votre déploiement exige.

Voir [Security](/security) pour le modèle complet d'authentification et d'autorisation.

## POST /v1/resolve

Envoyez le contexte courant ; recevez soit le verdict, soit le contexte additionnel encore requis.

**Body de requête :**

```
{
  "action_type": "sp_offer_eligibility",
  "context": {
    "product.complexity": { "value": "highly_complex", "source": "product_master" },
    "client.classification": { "value": "retail", "source": "CRM" }
  },
  "correlation": {
    "conversation_id": "conv-...",
    "agent_run_id": "run-..."
  }
}
```

- `action_type` — l'opération évaluée (définit quelles règles de target s'appliquent).
- `context` — un dict de field names en dot-path vers des objets `Fact`. Les champs que l'appelant ne connaît pas encore sont simplement omis.
- `correlation` — optionnel. IDs opaques que l'appelant passe pour qu'une Consultation puisse être tracée à une interaction externe ; Knowledge les stocke mais ne les interprète jamais.

**Réponse — INCOMPLETE :**

```
{
  "operation_status": "incomplete",
  "required_context": [
    {
      "field": "client.knowledge_experience",
      "reason": "required by rul-sp-elig-complex-professional-ke",
      "type": "enum",
      "allowed_values": ["insufficient", "sufficient"]
    }
  ]
}
```

L'appelant obtient chaque champ requis (depuis un système, un vendor, une extraction, ou l'utilisateur) et rappelle `/resolve` avec le contexte enrichi. Aucune Consultation n'est écrite pour les réponses INCOMPLETE.

**Réponse - COMPLETE :**

```
{
  "operation_status": "complete",
  "verdict": "blocked",
  "cited_rules": ["rul-sp-elig-highly-complex-retail-block"],
  "cited_rule_versions": ["rv-..."],
  "dominating_rule_id": "rul-sp-elig-highly-complex-retail-block",
  "consultation_id": "cns-abc123",
  "normative_hash": "sha256:...",
  "signed_verdict": "eyJhbGciOiJFUzI1NiIsImtpZCI6..."
}
```

`verdict` est le résultat métier. Selon les règles applicables il peut être `allowed`, `blocked`, `approval_required`, `observe`, ou toute valeur définie par la policy. `approval_required` est un verdict, pas un état de réponse séparé ; quand il est retourné, un objet `approver` optionnel identifie qui peut décider.

`signed_verdict` est une enveloppe JWS (ES256) embarquant l'opération que le verdict permet, le résultat, l'état normatif, et une expiry. Les frontières d'enforcement en aval la vérifient contre le JWKS de Knowledge avant d'exécuter l'action sous-jacente. Voir [Enforcement](/enforcement) pour le modèle complet.

## La forme Fact

Chaque valeur dans `context` est un `Fact` — valeur plus provenance :

| Champ | Requis | Signification |
|---|---|---|
| `value` | oui | La valeur du champ (tout type JSON-sérialisable) |
| `source` | oui | Identifiant de source défini par l'appelant (`CRM`, `IDV_vendor`, `user_input`, ...) |
| `verification_status` | non | `unverified` (défaut) ou `verified`. Les règles peuvent exiger `verified` via `source_requirement` |
| `confidence` | non | `0.0-1.0`, pour les sources probabilistes comme l'extraction LLM |

## La forme Requirement

Chaque entrée de `required_context` porte ce dont l'appelant a besoin pour construire une requête de suivi :

| Champ | Signification |
|---|---|
| `field` | Nom canonique du champ, dot notation supportée pour les chemins nested |
| `reason` | Justification lisible, idéalement citant la règle qui exige le champ |
| `type` | Type schema (`string`, `number`, `enum`, `boolean`, `date`, ...) |
| `allowed_values` | Pour les champs enum, les valeurs acceptables |
| `min` / `max` | Pour les champs numériques |
| `format` | Hint de format (`iso-date`, `iso-country`, ...) |
| `source_requirement` | `verified` si le fact doit porter `verification_status: verified` |
| `acceptable_sources` | Whitelist d'identifiants de source plus étroite que `source_requirement` |
| `confidence_threshold` | Confiance minimale pour les sources probabilistes |

## Vérification du verdict signé

Chaque réponse COMPLETE porte un `signed_verdict` (JWS ES256). Un Policy Enforcement Point en aval vérifie signature, expiry et bindings avant d'exécuter l'action métier sous-jacente.

**Endpoint JWKS** (public, sans auth) :

```
GET /knowledge/v1/jwks
```

Retourne les clés publiques de vérification du tenant en format JWKS. Cache local (TTL recommandé 5 min) et re-fetch sur miss de `kid`.

**Shape du payload décodé** :

```
{
  "consultation_id": "cns-...",
  "issued_at": 1787500000,
  "expires_at": 1787500060,
  "kid": "tenant-acme-verdict-2026-08",
  "authorization": {
    "action": "refund_execute",
    "actor": "principal:agent:support-agent-17",
    "on_behalf_of": "principal:human:marie@acme.com",
    "on_behalf_of_authenticated": true,
    "resource": "TX-456",
    "parameters": { "amount_eur": 40 }
  },
  "decision": {
    "outcome": "allowed",
    "dominating_rule_id": "rul-refund-under-100",
    "cited_rule_version_ids": ["rv-r1", "rv-r2"],
    "normative_hash": "sha256:9f2a..."
  },
  "context_hash": "sha256:f4c1..."
}
```

**Vérification minimale** (Python, avec `asplenz-knowledge-runtime-python`) :

```python
from asplenz_knowledge import verify_verdict, VerdictVerificationError

try:
    claims = verify_verdict(
        token=request.headers["X-Knowledge-Verdict"],
        jwks_url="https://<your-deployment>/knowledge/v1/jwks",
        expected_bindings={
            "action": "refund_execute",
            "resource": request.body["transaction_id"],
            "parameters.amount_eur": request.body["amount"],
            "actor": current_principal_id,
        },
    )
    # Signature, expiry, outcome et bindings tous vérifiés
except VerdictVerificationError as e:
    return {"error": e.code}, 401

# Appel de l'API métier sous-jacente
refund_api(request.body["transaction_id"], request.body["amount"])
```

## Chemins d'adoption

Trois patterns pour câbler un Policy Enforcement Point dans votre stack. Choisissez celui qui rentre dans votre infrastructure existante.

**Décorateur SDK (backends Python ou TypeScript)** :

```python
from asplenz_knowledge import governed_tool

@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["tx", "amount"],
)
def refund_customer(tx, amount):
    # Le runtime consulte Knowledge, vérifie la signature, contrôle
    # les bindings, puis invoque ce corps seulement en cas de succès.
    ...
```

Enregistré une fois à l'import. Le runtime effectue le flow PEP complet (resolve, verify, check bindings, execute). Pas de wrappers écrits à la main.

**MCP proxy (stacks agentiques utilisant MCP)** :

Insérer le proxy MCP Asplenz entre votre host MCP (Claude Desktop, Cursor, plugins IDE) et votre serveur MCP existant. Le proxy lit une config déclarant quels tools sont gouvernés et leurs bindings. Votre serveur MCP, vos implémentations de tools, et votre client host restent inchangés. L'enforcement est ajouté par insertion du proxy.

**PEP custom** :

N'importe quel langage, n'importe quel framework. Vérifier l'enveloppe JWS contre `/v1/jwks` et comparer les bindings avant d'exécuter. L'exemple Python minimal ci-dessus se généralise à Go, Java, Node.js, Rust avec la librairie JWS équivalente.

## Récupération de Consultation

Chaque réponse COMPLETE retourne un `consultation_id`. Récupérez la record complète :

```
GET /knowledge/v1/consultations/<consultation_id>
```

La record capture le contexte envoyé, les versions de règles citées, la règle dominante, la trace de précédence, les targets résolues, le scope utilisé, et le normative hash. C'est la surface que `/explain` et l'UI d'audit lisent. Voir [Gouvernance](/governance) pour la sémantique.

## Erreurs

Codes HTTP standards :

| Code | Signification |
|---|---|
| `400` | Body ou contexte de requête mal formé |
| `401` | API key manquante ou invalide |
| `403` | L'API key n'a pas la permission requise |
| `404` | action_type, consultation_id ou ressource associée inconnue |
| `409` | Conflit avec l'état courant (ex. création dupliquée) |
| `422` | Requête acceptée, mais validation d'une structure nested échouée |
| `500` | Erreur non gérée |

Chaque réponse d'erreur porte un body JSON avec `code`, `message` et optionnellement `details`.

## Exemple curl

```
curl -X POST https://<votre-deployment>/knowledge/v1/resolve \
  -H "X-API-Key: ak-..." \
  -H "Content-Type: application/json" \
  -d '{
    "action_type": "sp_offer_eligibility",
    "context": {
      "product.complexity": { "value": "highly_complex", "source": "product_master" }
    }
  }'
```

## Intégration de référence

Le pack Wealth livre un script opérationnel qui appelle `/resolve` pour les quatre décisions modélisées de distribution de produits structurés, montrant la boucle incomplete-to-complete de bout en bout. Voir [Wealth](/wealth) pour le walkthrough.

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Comment fonctionne Knowledge](/how-it-works) | Le modèle mental derrière `/resolve`, complete/incomplete et normative state |
| [Enforcement](/enforcement) | Verdicts signés, modèle de confiance à quatre acteurs, chemins d'adoption en profondeur |
| [Gouvernance](/governance) | Ce que la consultation capture et comment le replay reconstruit une décision historique |
| [Security](/security) | Le modèle d'authentification, d'autorisation, de clés de signature et d'isolation de tenant que l'API applique |
| [Design partner](/pilot) | Trois places founding, une décision production, pricing founding-customer |
