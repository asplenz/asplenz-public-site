---
title: Bring your own tools to MCP proxy
description: Enregistrer des fetchers et mapper les arguments de tool pour que les tools de votre serveur MCP marchent end-to-end à travers le proxy.
locale: fr
kicker: Docs / Guides - Stable
---

Le proxy MCP a besoin de deux choses pour enforcer les tools d'un serveur MCP vendor : un **policy mapping** (quel tool appelle quelle action Knowledge) et des **fetchers** (comment populate les champs `required_context` quand Knowledge en demande).

Ce guide parcourt le wiring d'un serveur MCP vendor hypothétique qui expose `search_kb`, `create_ticket`, et `close_ticket`.

## Étape 1 : audit les tools du vendor

```
knowledge-mcp-proxy inspect \
  --transport stdio \
  --command "npx -y @vendor/some-mcp-server" \
  --tools-list
```

Output :

```json
{
  "tools": [
    { "name": "search_kb",     "inputSchema": { "properties": { "query": { "type": "string" } } } },
    { "name": "create_ticket", "inputSchema": { "properties": { "title": {...}, "priority": {...}, "assignee": {...} } } },
    { "name": "close_ticket",  "inputSchema": { "properties": { "ticket_id": {...} } } }
  ]
}
```

## Étape 2 : mapper chaque tool à une action Knowledge

`proxy.yaml` :

```yaml
policy_mapping:
  "search_kb":
    action: kb.search
    resource: "{query}"
    bind: []

  "create_ticket":
    action: ticket.create
    resource: "{title}"
    bind: [priority, assignee]

  "close_ticket":
    action: ticket.close
    resource: "{ticket_id}"
    bind: []
```

Guidance :

- **`action`** : nom hiérarchique. Réutilisez la même action à travers des tools qui veulent dire la même chose (un `close_ticket` dans Zendesk et un `close_ticket` dans ServiceNow peuvent partager `ticket.close` si les policies sont les mêmes).
- **`resource`** : identifie ce sur quoi on agit. Interpolez depuis les args de tool avec `{arg_name}`. Matchez à ce que le scope de la rule référence.
- **`bind`** : noms d'args dont les valeurs deviennent partie de l'enveloppe signée. **Toute opération dont la valeur d'arg bound diffère sera refusée par le PEP.** Bindez les champs sur lesquels vos rules discriminent.

## Étape 3 : écrire les rules Knowledge

Dans l'UI back-office (ou via seed file), créez des rules qui citent les actions et champs de scope de votre mapping :

```yaml
- id: rul-tickets-critical-restricted
  policy: pol-ticketing
  statement: "Seuls les agents support 'senior' peuvent créer des tickets critical."
  severity: hard_block
  rows:
    - scope: { action: ticket.create }
      condition:
        parameters.priority: { eq: critical }
        caller.seniority: { neq: senior }
```

## Étape 4 : enregistrer les fetchers pour required_context

Si une rule référence un champ non présent dans l'appel de tool (ex. `caller.seniority` ci-dessus), Knowledge retourne `required_context`. Le proxy a besoin d'un fetcher.

Créez `my_org/fetchers.py` :

```python
def get_caller_seniority(context: dict) -> dict:
    caller_id = context["caller"]["id"]["value"]
    seniority = hr.lookup(caller_id).level
    return {"value": seniority, "source": "hr_system"}

def get_client_verified_flag(context: dict) -> dict:
    kyc_id = context["client"]["kyc_id"]["value"]
    return {"value": kyc.is_verified(kyc_id), "source": "kyc_vendor"}
```

Wire-les dans `proxy.yaml` :

```yaml
fetchers:
  module: my_org.fetchers
  registry:
    "caller.seniority": get_caller_seniority
    "client.verified_flag": get_client_verified_flag
```

## Étape 5 : vérifier end-to-end

**Happy path** :

```
appel: create_ticket(title="Login broken", priority=low, assignee=hum-bob)
proxy: consulte Knowledge -> allowed -> forward vers upstream -> ticket créé
```

**Chemin refusé (bind mismatch)** :

Le tool vendor retourne une erreur aval en essayant d'élever `priority` de `low` à `critical` post-facto. Le PEP refuse avec `binding_mismatch` : l'enveloppe signée a autorisé `priority=low`, pas `critical`.

**Chemin progressive context** :

```
appel: create_ticket(title="Server down", priority=critical, assignee=hum-alice)
proxy: /resolve -> required_context: [caller.seniority]
proxy: fetcher get_caller_seniority(ctx) -> {value: "junior", source: "hr_system"}
proxy: /resolve à nouveau -> blocked, cited_rules: [rul-tickets-critical-restricted]
client: voit une erreur MCP typée
```

## Pitfalls communs

- **Oublier de bind un champ discriminant.** Si `priority` est un discriminant de rule mais pas dans `bind`, le PEP n'a pas de commitment de signature dessus - un attaquant (ou un upstream misbehavior) pourrait le changer. Bindez toujours les champs que vos rules lisent.
- **`allow_unmapped: true` (défaut) cache les nouveaux tools.** Si le vendor ajoute un nouveau tool dans un update, il passe ungoverned. Set à `false` dans les déploiements compliance-critical.
- **Fetchers qui bloquent sur des APIs lentes.** Les fetchers tournent dans le request path du proxy ; gardez-les rapides ou cachez agressivement. Si un fetch prend légitimement des minutes, utilisez un background job + `approval_required`.

## Related

- [Setup](/docs/mcp-proxy/setup) - install + premier run.
- [Config reference](/docs/mcp-proxy/config-reference) - chaque knob.
- [Progressive context](/docs/concepts/progressive-context-resolution) - la boucle que les fetchers alimentent.
