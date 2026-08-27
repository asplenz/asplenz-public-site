---
title: Wrapper votre propre serveur MCP avec enforcement
description: Ajouter l'enforcement d'un signed verdict à votre propre serveur MCP en checkant chaque tool call contre Knowledge avant de l'exécuter. Pattern + exemple de référence.
locale: fr
kicker: Docs / Guides - Stable
---

Si votre agent utilise un serveur MCP avec des tools que vous possédez (refund customer, cancel order, ticket creation, ...), vous pouvez ajouter l'enforcement de policy devant ces tools sans changer la façon dont l'agent interagit avec eux : le tool schema reste identique, l'agent appelle les mêmes noms, mais chaque invocation est gatée par un check `verify_verdict` contre une décision signée de Knowledge.

Ce guide décrit le pattern. Asplenz ne ship pas de composant proxy supporté - les transports MCP, versions de frameworks, et modèles d'auth varient trop pour une solution one-size. Une implémentation de référence fonctionnelle vit dans le monorepo à `src/knowledge-mcp-proxy/` ; traitez-la comme un point de départ à copier et adapter à votre stack.

## Le pattern

Pour chaque invocation de tool par l'agent :

1. **Extraire l'action envisagée** depuis le nom du tool et les arguments (ex. `refund_customer(tx="TX-456", amount=40)` → `action="refund.execute"`, `resource="TX-456"`, `parameters={"amount_eur": 40}`).
2. **Consulter Knowledge** avec `POST /knowledge/v1/resolve` en utilisant ces bindings comme `action_type` + `context`. Extraire `signed_verdict` de la réponse.
3. **Vérifier** le signed verdict avec `verify_verdict()` depuis `knowledge-runtime`, en passant les mêmes bindings comme `expected_bindings`. Tout mismatch est refusé.
4. **Exécuter** le tool sous-jacent uniquement si la vérification passe. Sinon retourner une erreur MCP structurée portant le code de refus.

## Exemple minimal

Supposez que vous avez déjà un serveur MCP dont le handler dispatch sur tool name. Ajoutez un intercepteur qui tourne avant le handler :

```python
from knowledge_runtime import verify_verdict, VerdictVerificationError
import httpx, os

KNOWLEDGE_URL = os.environ["KNOWLEDGE_URL"]
TENANT_SLUG = os.environ["TENANT_SLUG"]
API_KEY = os.environ["AGENT_API_KEY"]
JWKS_URL = f"{KNOWLEDGE_URL}/knowledge/v1/tenants/{TENANT_SLUG}/jwks"

# Mapper chaque tool MCP à une action Knowledge + quels args bind.
TOOL_POLICY = {
    "refund_customer": {
        "action": "refund.execute",
        "resource_arg": "tx",
        "bind_args": ["amount"],
    },
    "cancel_order": {
        "action": "order.cancel",
        "resource_arg": "order_id",
        "bind_args": [],
    },
    # Les tools non listés ici passent through sans check (read-only, non-governed).
}

async def intercept(tool_name: str, args: dict, run_underlying):
    policy = TOOL_POLICY.get(tool_name)
    if policy is None:
        return await run_underlying(tool_name, args)

    # 1. Extraire les bindings.
    action = policy["action"]
    resource = args.get(policy["resource_arg"]) if policy["resource_arg"] else None
    parameters = {b: args[b] for b in policy["bind_args"] if b in args}

    # 2. Consulter Knowledge.
    async with httpx.AsyncClient(timeout=10.0) as client:
        resp = await client.post(
            f"{KNOWLEDGE_URL}/knowledge/v1/resolve",
            headers={"X-API-Key": API_KEY},
            json={
                "action_type": action,
                "context": {
                    "scope": {policy["resource_arg"]: resource} if resource else {},
                    "metrics": parameters,
                },
            },
        )
    if resp.status_code != 200:
        return mcp_error("knowledge_unreachable", resp.text[:200])
    signed = (resp.json() or {}).get("signed_verdict")
    if not signed:
        return mcp_error("unsigned_verdict", "advisory-only deployment")

    # 3. Vérifier contre les args qu'on est sur le point d'exécuter avec.
    expected = {"action": action}
    if resource is not None:
        expected["resource"] = str(resource)
    for b in policy["bind_args"]:
        expected[f"parameters.{b}"] = args[b]

    try:
        verify_verdict(token=signed, jwks_url=JWKS_URL, expected_bindings=expected)
    except VerdictVerificationError as e:
        return mcp_error(e.code, str(e))

    # 4. Exécuter le vrai tool.
    return await run_underlying(tool_name, args)
```

`mcp_error` retourne ce que votre framework MCP attend pour une erreur de tool call - typiquement un content block `isError: true` avec un message typé.

## Ce contre quoi Knowledge protège

- **L'agent skip Knowledge** - l'agent tente d'invoquer le tool sans passer par `/resolve`. Impossible parce que l'intercepteur est sur le seul chemin exposé.
- **L'agent tamper les args entre consult et execute** - `verify_verdict` compare les claims `authorization.parameters.*` du token contre les vrais args d'appel. Mismatch → `binding_mismatch`.
- **L'agent replay un verdict expiré** - code `expired`.
- **L'agent forge un verdict** - échec de vérif de signature (`bad_signature`) ou lookup JWKS (`unknown_kid`).

Ce contre quoi Knowledge ne protège PAS : un tool compromis qui envoie des args différents à Knowledge de ceux qu'il exécute ensuite. L'intercepteur et l'executor partagent le même process ; si le process est complètement compromis, la trust boundary est cassée.

## Implémentation de référence

Le répertoire `src/knowledge-mcp-proxy/` dans le monorepo a une version fonctionnelle de ce pattern, incluant :

- Config YAML avec mapping `tools:` (nom → `action` + `resource` + `bind`).
- Gestion des deux transports MCP `stdio` et `streamable-http`.
- Mode pass-through pour tools non-governed.
- Suite de tests couvrant le happy path et les cas de refus.

Copiez-le, jetez les parties inutiles, adaptez la forme de config et le format d'erreur à votre framework MCP existant. Ce n'est pas un composant supporté Asplenz ; c'est un point de départ.

## Ce qui vit dans Knowledge, ce qui vit dans votre code

| Concern | Owner |
|---|---|
| Authoring de rules, computation de verdict, signature | Knowledge |
| Distribution JWKS | Knowledge |
| Primitive `verify_verdict()` (check signature + bindings + expiry) | SDK `knowledge-runtime` |
| Handling du transport MCP, tool schema, config mapping, format d'erreur | Votre intercepteur |
| Exécution du tool sous-jacent | Votre code |

Gardez la glue MCP mince. Le travail security-critical est l'appel `verify_verdict` ; tout le reste est du wiring de transport que vous pouvez shaper à votre stack.

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) | L'enveloppe JWS, quels claims elle porte, pourquoi les bindings marchent |
| [Modèle de confiance à quatre acteurs](/docs/concepts/four-actor-trust-model) | Où l'intercepteur sit dans la chaîne de confiance |
| [Quickstart : governed tool en Python](/docs/quickstart-governed-tool) | Le pattern équivalent pour les tools Python non-MCP |
