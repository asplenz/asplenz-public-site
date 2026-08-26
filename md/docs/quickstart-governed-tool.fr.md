---
title: Quickstart - governed tool en Python
description: Cinq minutes hands-on. Installer le runtime, décorer une fonction, voir l'enforcement se déclencher sur un appel tampered.
locale: fr
kicker: Docs - Getting started
---

Cinq minutes. Se termine avec une vraie vérification de signed_verdict et un refus `binding_mismatch` qui marche.

## Prérequis

- Un déploiement Knowledge qui tourne (tier design-partner). Si vous n'en avez pas, [contactez-nous](/pilot).
- Une clé API agent pour le tenant que vous voulez consulter. Passée comme env var `AGENT_API_KEY` ci-dessous.
- Python 3.11+ disponible.

## Installation

```bash
pip install fastapi uvicorn                      # pour le service démo
pip install -e path/to/knowledge-runtime         # le SDK Python (editable depuis monorepo)
```

(Publication PyPI de `knowledge-runtime` est un follow-up. Pour l'instant, installer depuis le checkout du monorepo.)

## Configuration

```python
from knowledge_runtime import configure

configure(
    knowledge_url="https://knowledge.your-deployment.com",
    tenant_slug="acme-bank",
    api_key=os.environ["AGENT_API_KEY"],
)
```

## Décorer une fonction

```python
from knowledge_runtime import governed_tool

@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    security_irrelevant=["reason"],
)
def refund_customer(tx: str, amount: int, reason: str = "") -> dict:
    # Appel métier réel - atteint uniquement APRÈS que Knowledge signe
    return call_refund_api(tx, amount)
```

C'est toute l'intégration. Le décorateur :

1. Enregistre le tool dans le runtime à l'import.
2. Wrappe la fonction pour qu'un appel direct déclenche `/resolve` → verify signed_verdict → check bindings → execute.
3. Préserve `__wrapped__` pour que les tool-schema generators (LangChain, LlamaIndex, MCP) voient la signature intentionnelle.

## Essayer le happy path

```python
result = refund_customer(tx="TX-456", amount=40)
# {"tx": "TX-456", "amount": 40, "provider_ref": "re_...", ...}
```

Sous le capot :

1. Le wrapper appelle `/knowledge/v1/resolve` avec `action_type="refund.execute"`, `context.scope={tx: "TX-456"}`, `context.metrics={amount: 40}`.
2. Knowledge retourne un verdict + une enveloppe JWS `signed_verdict`.
3. Le wrapper fetch le JWKS depuis `/knowledge/v1/tenants/acme-bank/jwks` (cached, TTL 5 min).
4. Le wrapper vérifie signature, expiry, outcome, et bindings contre les args réels de l'appel.
5. Tous les checks passent → le corps de fonction s'exécute → l'API refund est appelée.

## Essayer un appel tampered

Le `@governed_tool` vérifie les bindings entre ce que Knowledge a signé et ce que le caller a passé. Pour voir l'enforcement se déclencher, simuler l'attaque *"l'attaquant escalade le montant après avoir consulté"* :

```python
# Consulter Knowledge pour un petit montant (40 EUR)
resolved = client.post("/knowledge/v1/resolve", json={
    "action_type": "refund.execute",
    "context": {"scope": {"tx": "TX-456"}, "metrics": {"amount": 40}},
}).json()

# Tenter d'utiliser le signed_verdict résultant pour un GROS montant (4000 EUR)
# en appelant manuellement le wrapper avec une valeur différente :
try:
    refund_customer(tx="TX-456", amount=4000)  # PAS 40
except VerdictVerificationError as e:
    assert e.code == "binding_mismatch"
    print(f"Refusé : {e}")
```

Le wrapper re-consulte toujours Knowledge avec les args courants, donc ce pattern d'attaque spécifique est symétrique ; la preuve de tampering la plus forte vit dans les tests unitaires du runtime (`test_governed_tool.py::test_decorator_end_to_end_amount_tampered`) qui utilisent un stub Knowledge qui signe délibérément une enveloppe mismatchée.

## Guard-rails

Linting à l'import :

```python
from knowledge_runtime import lint_bindings
for warning in lint_bindings(refund_customer):
    print(warning)
# governed_tool "refund_customer" : arg "reason" is neither in `bind`,
# `resource`, nor `security_irrelevant`. Confirm this argument does not
# affect authorization.
```

Dans votre suite de tests :

```python
from knowledge_runtime import verify_binding_completeness

verify_binding_completeness(
    refund_customer,
    sample_call={"tx": "TX-456", "amount": 40, "reason": "duplicate"},
    variations={"amount": 4000, "tx": "TX-999", "reason": "test"},
    build_resolve_body=<votre body-builder>,
)
```

Asserte que muter un arg bindé change le corps de resolve et muter un arg non-bindé non.

## Et si aucune clé de signature verdict n'est configurée (déploiement advisory-only) ?

Le runtime raise `VerdictVerificationError(code="malformed_token")` au moment de l'appel avec un message qui pointe la config du déploiement. Les déploiements advisory-only ne devraient PAS utiliser `@governed_tool` ; ils devraient appeler `/check` ou `/resolve` directement et agir sur le verdict de façon consultative.

## Suite

- **[Quickstart : MCP proxy en 5 minutes](/docs/quickstart-mcp-proxy)** - même enforcement, transport MCP.
- **[Enforcement](/product/enforcement)** - le modèle complet, la chaîne de confiance à quatre acteurs, chemins d'adoption.
- **[Integrations](/product/integrations)** - matrice de compatibilité framework.
