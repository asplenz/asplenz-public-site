---
title: Modèle de confiance à quatre acteurs
description: Les quatre principals dans une opération d'agent gouvernée, quelles arêtes Knowledge garantit, et quelles arêtes dépendent de votre architecture.
locale: fr
kicker: Docs / Concepts - Stable
---

Toute opération d'agent gouvernée implique quatre principals distincts. Bien poser les frontières de confiance est la différence entre un verdict signé qui veut dire quelque chose et un verdict signé qui est du théâtre.

## Les quatre acteurs

```
Human Principal (Marie, hum-marie)
     |
     |  délègue
     v
Agent Principal (RM Copilot, agn-rm-copilot)
     |
     |  consulte
     v
Knowledge (PDP - Policy Decision Point)
     |
     |  signe le verdict
     v
PEP (Policy Enforcement Point, wrapper de tool)
     |
     |  invoque
     v
API métier (service refund, admission KYC, ...)
```

Chaque arête est une frontière de confiance. Knowledge en durcit deux ; les autres dépendent de votre architecture.

## Arête 1 : Human -> Agent (délégation)

**Le claim** : l'agent agit on behalf of un humain spécifique qui l'a autorisé.

**Ce que Knowledge accepte** : le champ `on_behalf_of` sur `/check` et `/resolve`. Il est copié dans l'enveloppe signée.

**Ce que Knowledge vérifie** : si la délégation est authentifiée. Deux formes :

- **Authenticated** (`on_behalf_of_authenticated: true`) : un token de délégation, une chaîne OAuth, ou un binding d'identité prouve que l'humain a autorisé l'agent à agir en son nom.
- **Caller-asserted** (`on_behalf_of_authenticated: false`) : l'agent a claim une délégation ; Knowledge a signé le claim comme metadata mais ne l'a pas vérifié.

**Responsabilité PEP** : traiter `on_behalf_of` comme metadata non fiable quand `on_behalf_of_authenticated: false`. Durcir l'autorisation en conséquence (ex. refuser pour les actions high-severity).

## Arête 2 : Agent -> Knowledge (authentification)

**Le claim** : le principal agent appelant `/check` est bien qui il prétend être.

**Ce que Knowledge fait** : authentifie chaque appel via `X-API-Key` (M2M) ou cookie de session (UI browser). L'ID de principal authentifié est ce que Knowledge écrit dans `authorization.actor` dans l'enveloppe signée - **jamais** ce que le caller a passé dans un body de requête.

**Modèle d'attaque** : une clé API compromise permet à un attaquant d'impersonner l'agent. Rotation + scoping de clé sont votre défense. Déploiements multi-tenant : une clé par principal agent, jamais partagée.

## Arête 3 : Knowledge -> PEP (signature)

**Le claim** : le verdict + les bindings d'authorization viennent de Knowledge, non modifiés.

**Ce que Knowledge fait** : signe l'enveloppe avec la clé privée ES256 du tenant.

**Ce que le PEP vérifie** : la signature contre le JWKS du tenant.

**Failure modes** :

- **Signature invalide** : quelqu'un a tampered. Refuse.
- **kid absent du JWKS** : clé de signing rotée ; le PEP devrait refresh JWKS et retry une fois.
- **Verdict expiré** (`exp` dans le passé) : reject comme stale.

## Arête 4 : PEP -> API métier (binding + gate)

**Le claim** : cette opération concrète matche l'opération que le verdict a autorisée.

**Ce que le PEP fait** :

1. Extract `(actor, action, resource, parameters)` de l'appel de tool entrant.
2. Compare contre `authorization` dans l'enveloppe signée.
3. Si chaque binding déclaré matche, invoque l'API métier. Sinon refuse.

**C'est l'arête load-bearing.** Bindings faux et l'enforcement devient du théâtre. Le décorateur `@governed_tool` gère ça correctement en Python ; le proxy MCP gère ça correctement pour les tools MCP ; les PEPs custom doivent l'implémenter correctement.

**Responsabilité coverage** : si un chemin atteignable vers l'API métier skip le PEP, le modèle casse. Isolation réseau + IAM empêchent les chemins alternatifs. C'est votre architecture, pas celle de Knowledge.

## Ce que Knowledge garantit vs ce que votre architecture garantit

| Garantie | Owned by |
|---|---|
| Verdict déterministe depuis la policy encodée | Knowledge |
| Intégrité de signature de l'enveloppe | Knowledge |
| Authentification d'actor | Knowledge |
| Gel du contexte de décision (Consultation) | Knowledge |
| PEP vérifie la signature avant d'exécuter | Vous (via `knowledge-runtime`, `knowledge-mcp-proxy`, ou code custom) |
| Chaque chemin vers l'API métier traverse le PEP | Vous (via isolation réseau + IAM) |
| L'humain délégant est authentifié | Vous (via identity binding que vous fournissez à Knowledge) |
| Les facts assertés par le caller (dans `context`) sont vrais | Vous (l'auth fact-level est orthogonale) |

## La surface d'audit

La chaîne à quatre acteurs est capturée sur chaque Consultation :

- `authorization.actor` - le principal agent authentifié.
- `on_behalf_of` - l'humain claimed (avec flag `_authenticated`).
- `iss` - l'issuer tenant Knowledge.
- `consultation_id` - la clé d'audit.

Six mois plus tard, un auditeur lit la Consultation, vérifie la signature contre le JWKS archivé (via kid + epoch), et reconstruit l'état policy gelé exact. La non-répudiation suit de la signature.

## Related

- [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) - l'enveloppe en profondeur.
- [Page produit Enforcement](/product/enforcement) - la vue story-level.
- [Trust model deep dive](/docs/security-compliance/trust-model) - la narrative security complète.
- [Keys inventory](/docs/security-compliance/keys-inventory) - les quatre clés, stories de rotation.
