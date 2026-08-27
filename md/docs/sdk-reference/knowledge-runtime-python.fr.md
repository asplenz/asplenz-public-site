---
title: knowledge-runtime (Python)
description: Le SDK Policy Enforcement Point de référence - décorateur governed_tool, verify_verdict, cache JWKS, guard-rails.
locale: fr
kicker: Docs / SDK reference - Stable
---

`knowledge-runtime` est le SDK Python qui transforme n'importe quelle fonction en Policy Enforcement Point (PEP). Il gère la vérification de signature, les checks de binding, le caching JWKS, et la boucle /resolve.

## Install

```bash
pip install knowledge-runtime
```

Dépend de `httpx`, `python-jose` (ES256), `pydantic` (v2). Python 3.10+.

## Configure

```python
from knowledge_runtime import KnowledgeClient

client = KnowledgeClient(
    base_url="https://knowledge.asplenz.com/tnt-acme",
    api_key=os.environ["KNOWLEDGE_API_KEY"],
    jwks_cache_ttl_seconds=300,
    default_verdict_ttl_seconds=60,
)
```

Une instance de client par tenant. Thread-safe. Réutilisez à travers le process.

## Le décorateur `@governed_tool`

L'interface primaire.

```python
from knowledge_runtime import governed_tool

@governed_tool(
    action="refund.execute",
    resource="tx",              # nom d'arg qui porte la resource
    bind=["amount"],            # noms d'args qui deviennent bindings de parameters
    client=client,
    on_behalf_of=lambda: current_user_id(),
)
def refund_customer(tx: str, amount: int, reason: str = ""):
    return refund_api.execute(tx, amount, reason=reason)
```

**À chaque appel** :

1. Extract `(tx, amount)` depuis les arguments d'appel.
2. Appelle `client.check(action="refund.execute", resource=tx, parameters={"amount": amount}, on_behalf_of=...)`.
3. Si verdict est `allowed`, vérifie la signature, vérifie que les bindings matchent, puis invoque la fonction wrappée.
4. Si verdict est `blocked`, raise `KnowledgePolicyBlocked(verdict)`.
5. Si verdict est `approval_required`, raise `KnowledgeApprovalRequired(consultation_id, approval_id)`.

La fonction wrappée ne tourne que si l'enforcement l'a autorisée.

## Guard-rails

Le décorateur refuse de démarrer si la configuration est incohérente. Fail-loud, pas fail-silent :

- `bind=["amount"]` mais la fonction n'a pas de paramètre `amount` -> `ConfigurationError` au moment d'import.
- `resource="tx"` mais `tx` n'est pas un arg positional ou keyword -> `ConfigurationError`.
- `client=None` et aucun client par défaut set -> `ConfigurationError`.

## verify_verdict (low-level)

Pour du code PEP custom qui ne fit pas le décorateur :

```python
from knowledge_runtime import verify_verdict

payload = verify_verdict(
    jws=signed_verdict_string,
    jwks_url="https://knowledge.asplenz.com/tnt-acme/v1/jwks",
    expected_actor="agn-rm-copilot",
    expected_action="refund.execute",
    expected_resource="TX-456",
    expected_bindings={"amount": 40},
    max_age_seconds=60,
)
```

Retourne le dict de claims décodé sur succès. Raise des erreurs typées :

- `SignatureInvalid`
- `ExpiredVerdict`
- `BindingMismatch(field, expected, got)`
- `KidNotFound(kid)`

## Boucle /resolve avec fetcher registry

```python
from knowledge_runtime import resolve_with_fetchers

fetchers = {
    "client.classification": crm.get_classification,
    "client.knowledge_experience_level": crm.get_ke_level,
    "solicitation.type": lambda ctx: llm_extract(ctx["conversation"], "solicitation_type"),
}

result = resolve_with_fetchers(
    client=client,
    action="structured_note.propose",
    resource=product_id,
    initial_context={"client.id": {"value": client_id, "source": "crm"}},
    fetchers=fetchers,
    max_rounds=8,
    on_behalf_of=user_id,
)
```

Retourne le résultat final complete (avec signed_verdict) ou raise `TooManyResolveRounds` si `max_rounds` est épuisé.

## Cache JWKS

Automatique. La première vérification par tenant fetche le JWKS, les vérifications suivantes réutilisent les clés cachées jusqu'à expiration TTL. Sur `KidNotFound`, le cache force-refresh une fois avant d'abandonner (gère la rotation).

## Store de spent-verdict (exactly-once)

```python
from knowledge_runtime.spent import RedisSpentStore

store = RedisSpentStore(redis_url="redis://localhost:6379")

@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    client=client,
    spent_store=store,
)
def refund_customer(tx: str, amount: int):
    ...
```

Le store enregistre `{iss, consultation_id}` sur chaque appel autorisé. Un replay dans le TTL est rejeté avec `VerdictAlreadySpent`.

Implémentations de store : `RedisSpentStore`, `InMemorySpentStore` (dev only), ou votre propre implémentation `SpentStore`.

## Helpers de testing

```python
from knowledge_runtime.testing import fake_verdict, InMemoryKnowledgeClient

fake = InMemoryKnowledgeClient(tenant_slug="tnt-test")
fake.set_verdict("refund.execute", "TX-*", verdict="allowed")

@governed_tool(action="refund.execute", resource="tx", bind=["amount"], client=fake)
def refund_customer(tx: str, amount: int):
    return f"refunded {amount} on {tx}"

assert refund_customer("TX-1", amount=40) == "refunded 40 on TX-1"
```

## Pointer repo

Source : `apps/knowledge/src/knowledge-runtime/` dans le monorepo. Suite de tests (24 tests) : `apps/knowledge/src/knowledge-runtime/tests/`.

## Related

- [Quickstart : governed tool](/docs/quickstart-governed-tool) - hands-on de 5 minutes.
- [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) - ce que le SDK vérifie.
- [Wrapper votre propre serveur MCP avec enforcement](/docs/guides/wrap-your-own-mcp-server-with-enforcement) - si votre stack est MCP, appliquez la même primitive `verify_verdict` à l'intercepteur des tool calls.
