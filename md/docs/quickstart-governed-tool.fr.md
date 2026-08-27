---
title: Quickstart - governed tool en Python
description: Deux patterns pour wrapper un tool Python avec l'enforcement d'un signed verdict. Pattern A vérifie un verdict qu'on vous remet. Pattern B laisse le tool consulter Knowledge lui-même.
locale: fr
kicker: Docs - Getting started
---

Deux patterns, même page. Choisissez celui qui correspond à l'endroit où votre code se trouve dans la chaîne.

| Pattern | Utilisez-le quand |
|---|---|
| **A - `verify_verdict`** | Quelque chose en amont (l'agent, un proxy, un orchestrateur) a déjà consulté Knowledge et remet le verdict signé à votre tool. Votre job : vérifier ce verdict contre ce que l'appelant demande, puis exécuter. |
| **B - `@governed_tool`** | Votre tool possède l'appel à Knowledge. Il re-consulte à chaque invocation. L'agent ne voit jamais de token. |

## Prérequis

- Un déploiement Knowledge actif. [Contactez-nous](/pilot) si vous n'en avez pas.
- Python 3.11+.
- Pattern B a besoin d'une clé API pour le tenant. Pattern A n'en a pas besoin - la vérification n'utilise que le JWKS public.

## Install

```bash
pip install -e path/to/knowledge-runtime
```

Publication PyPI en follow-up.

---

## Pattern A - vérifier un verdict qu'on vous remet

### La primitive

```python
from knowledge_runtime import verify_verdict, VerdictVerificationError

JWKS_URL = "https://knowledge.acme-bank.com/knowledge/v1/tenants/acme-bank/jwks"

def refund_customer(tx: str, amount: int, signed_verdict: str):
    try:
        verify_verdict(
            token=signed_verdict,
            jwks_url=JWKS_URL,
            expected_bindings={
                "action": "refund.execute",
                "resource": tx,
                "parameters.amount_eur": amount,
            },
        )
    except VerdictVerificationError as e:
        raise PermissionError(f"refund refused ({e.code})") from e

    return call_refund_api(tx, amount)
```

`expected_bindings` est construit depuis les vrais args de l'appel. Si le token atteste quelque chose de différent de ce que l'appelant demande, la vérification échoue et le tool ne s'exécute pas.

### Demo 1 - flow normal

L'agent consulte Knowledge pour un remboursement de 40 EUR, puis appelle le tool avec le même montant.

```python
verdict = agent_calls_knowledge(action="refund.execute", tx="TX-456", amount=40)
refund_customer(tx="TX-456", amount=40, signed_verdict=verdict)
# Refund exécuté.
```

### Demo 2 - l'agent skip Knowledge et hallucine un verdict

L'agent bypasse `/resolve` et fabrique un token - par exemple le base64 d'un JSON inventé par l'LLM.

```python
hallucinated = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9..."  # inventé

refund_customer(tx="TX-456", amount=40, signed_verdict=hallucinated)
# PermissionError : refund refused (bad_signature)
```

Selon la distance entre le token bidon et un JWS valide, vous obtenez `malformed_token` ou `bad_signature`. Dans les deux cas le corps du tool ne s'exécute jamais.

### Demo 3 - l'agent consulte pour 40 EUR mais appelle le tool avec 4000 EUR

L'agent obtient un vrai verdict pour 40, puis tente de le réutiliser pour 4000.

```python
verdict_for_40 = agent_calls_knowledge(action="refund.execute", tx="TX-456", amount=40)
refund_customer(tx="TX-456", amount=4000, signed_verdict=verdict_for_40)
# PermissionError : refund refused (binding_mismatch)
```

`expected_bindings["parameters.amount_eur"]` vaut 4000 (construit depuis l'arg réel de l'appel). Le token porte 40. Mismatch, refusé.

---

## Pattern B - décorer un tool et le laisser se consulter tout seul

### Configure

```python
from knowledge_runtime import configure

configure(
    knowledge_url="https://knowledge.acme-bank.com",
    tenant_slug="acme-bank",
    api_key=os.environ["AGENT_API_KEY"],
)
```

### Decorate

```python
from knowledge_runtime import governed_tool

@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
)
def refund_customer(tx: str, amount: int, reason: str = "") -> dict:
    return call_refund_api(tx, amount)
```

### Flow normal

```python
refund_customer(tx="TX-456", amount=40)
```

À chaque appel, le decorator :

1. POST sur `/knowledge/v1/resolve` avec `action_type="refund.execute"`, resource `TX-456`, `parameters.amount=40`.
2. Extrait `signed_verdict` de la réponse.
3. Vérifie signature + expected bindings contre les args d'appel.
4. Sur succès, exécute le corps de la fonction.

Parce que le decorator construit lui-même la requête resolve depuis les args courants, les attaques d'escalade comme Pattern A / Demo 3 ne s'appliquent pas : le verdict est toujours pour les args que vous avez réellement passés. Pattern B protège contre l'exécution du tool sans décision Knowledge. Il ne protège PAS l'appel Knowledge lui-même contre un tool compromis qui enverrait de mauvais args.

---

## Errors

Les deux patterns lèvent `VerdictVerificationError` avec un `.code` machine-readable :

| Code | Cause |
|---|---|
| `malformed_token` | Le JWS n'a pas pu être parsé. Levé aussi en Pattern B si `/resolve` n'a pas retourné de `signed_verdict` (déploiement advisory-only). |
| `unknown_kid` | Le JWKS ne contient pas le `kid` du token même après refresh. |
| `bad_signature` | La signature ne vérifie contre aucune clé connue. |
| `expired` | L'heure actuelle est passée `expires_at`. |
| `outcome_not_allowed` | Le verdict est `blocked` ou `approval_required`, pas `allowed`. |
| `binding_mismatch` | Un binding attendu n'a pas matché le token. `.details` porte la clé qui a échoué. |
| `actor_mismatch` | L'`actor` du token ne match pas le caller principal authentifié. |
| `on_behalf_of_unauthenticated` | Le caller utilise `on_behalf_of` mais le flag dit qu'il n'a pas été authentifié. |
| `jwks_fetch_failed` | Erreur HTTP au fetch du document JWKS. |

## Où est la clé publique

La clé publique de vérification vit dans un document JWKS servi par Knowledge lui-même :

```
GET https://knowledge.<votre-déploiement>/knowledge/v1/tenants/<slug>/jwks
```

Format JWKS standard. La rotation est transparente : quand un token arrive avec un `kid` inconnu, le runtime re-fetch le JWKS une fois et retente.

- **Pattern A** : passez l'URL à `verify_verdict(..., jwks_url=...)`.
- **Pattern B** : `configure()` dérive l'URL depuis `knowledge_url + tenant_slug`. Overridable via `jwks_url=` si le déploiement route JWKS via un autre host.

Le runtime cache le JWKS 5 minutes par défaut.

---

## Suite

- **[Quickstart : MCP proxy en 5 minutes](/docs/quickstart-mcp-proxy)** - même enforcement, transport MCP.
- **[Enforcement](/product/enforcement)** - le modèle complet, la chaîne de confiance à quatre acteurs, chemins d'adoption.
