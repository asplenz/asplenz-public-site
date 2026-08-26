---
title: Trust model deep dive
description: La chaîne complète de confiance à quatre acteurs, ce que Knowledge garantit, ce que votre architecture garantit, et où sont les arêtes load-bearing.
locale: fr
kicker: Docs / Security & compliance - Stable
---

Le modèle de confiance à quatre acteurs est le compte honnête que Knowledge fait de ce qu'un verdict signé prouve et ne prouve pas. C'est le document de référence pour les security reviews.

## La chaîne

```
Human Principal (Marie)
     |  E1 : délégation
     v
Agent Principal (RM Copilot)
     |  E2 : authentification
     v
Knowledge (PDP)
     |  E3 : signature
     v
PEP (frontière du tool)
     |  E4 : binding + gate
     v
API métier
```

Quatre arêtes. Deux sont la responsabilité de Knowledge (E2, E3). Deux dépendent de votre architecture (E1, E4).

## Arête 1 : Human -> Agent (authenticité de délégation)

**Menace** : un agent claim d'agir pour un humain qui ne l'a pas réellement autorisé.

**Rôle de Knowledge** : accepte `on_behalf_of` sur les requêtes, le copie dans l'enveloppe signée, et le stamp avec `on_behalf_of_authenticated: true|false`.

**Votre rôle** : fournir à Knowledge l'identity binding (token de délégation, chaîne OAuth, trust de fédération SSO) qui laisse Knowledge distinguer une délégation authentifiée d'une caller-asserted. Sans identity binding déclaré sur le record principal de l'agent, `on_behalf_of_authenticated` est `false` et le PEP DOIT traiter le champ comme metadata non fiable.

**Failure mode si cette arête est faible** : un agent compromis peut impersonner n'importe quel humain, et la reconstruction forensique ne peut pas distinguer qui a réellement agi.

## Arête 2 : Agent -> Knowledge (authentification)

**Menace** : un attaquant impersonne l'agent pour déclencher des verdicts favorables.

**Rôle de Knowledge** : authentifie chaque appel API via `X-API-Key` (M2M) ou cookie de session. Le principal authentifié est ce qui apparaît dans `authorization.actor` sur l'enveloppe signée, jamais une valeur fournie dans le body de requête.

**Votre rôle** : protéger les clés API (env vars, secret managers, pas de commits de code), rotate sur planning et sur compromission suspectée. Une clé par principal agent ; jamais partagée.

**Failure mode si cette arête est faible** : un attaquant avec une clé volée peut produire des verdicts signés authentiques. Détection via patterns inhabituels de `caller_principal_id` dans les consultations.

## Arête 3 : Knowledge -> PEP (intégrité de signature)

**Menace** : un attaquant tamper avec un verdict entre Knowledge et le PEP.

**Rôle de Knowledge** : signe chaque verdict avec la clé privée ES256 du tenant. La signature couvre le protected header JWS et les claims. Toute modification l'invalide.

**Votre rôle** : le PEP vérifie la signature contre le JWKS sur chaque appel, sans exception. `knowledge-runtime` et `knowledge-mcp-proxy` gèrent ça par défaut ; les PEPs custom doivent l'implémenter.

**Failure mode si cette arête est faible** : des attaquants network-level peuvent forger des verdicts favorables. Détection impossible sans vérification de signature ; l'audit montrerait le verdict comme légitime.

## Arête 4 : PEP -> API métier (binding + gate)

**Menace** : le PEP vérifie la signature mais ne checke pas que l'opération réelle matche l'opération que le verdict a autorisée.

**Rôle de Knowledge** : encode `authorization.{actor, action, resource, parameters}` dans les claims signés. Fournit `knowledge-runtime` (Python) et `knowledge-mcp-proxy` comme PEPs de référence qui implémentent le check.

**Votre rôle** :

- Si vous utilisez les SDKs de référence : déclarez `bind=[...]` correctement ; le SDK fait le check.
- Si vous écrivez un PEP custom : implémentez chaque check documenté dans [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep).
- **Assurez-vous que chaque chemin atteignable vers l'API métier traverse le PEP.** Isolation réseau + IAM empêchent les chemins alternatifs. Si un agent peut appeler l'API métier directement (bypass PEP), aucun verdict signé n'aide.

**Failure mode si cette arête est faible** :

- Binding faible : le verdict autorise `amount=40`, l'appel réel envoie `amount=4000`, le PEP ne checke pas, l'API métier tourne. C'est du théâtre d'enforcement.
- Chemin d'atteinte alternatif : le PEP est correctement wiré, mais l'agent a un accès réseau direct à l'API métier. Même résultat.

## Ce que Knowledge ne garantit PAS (résumé)

| Non garanti | Owner |
|---|---|
| Chaque chemin vers l'API métier traverse un PEP | Votre réseau / IAM |
| L'humain délégant authentifie sa délégation | Votre intégration identity provider |
| Les facts caller-asserted dans `context` sont vrais | Votre système de provenance de facts (orthogonal) |
| Les verdicts signés ne peuvent pas être rejoués dans le TTL | PEP + store spent-verdicts (les deux fournis comme implémentations de référence) |
| Un principal agent compromis est détecté | Votre monitoring + détection d'anomalie IAM |

## Ce que Knowledge garantit

| Garanti | Mécanisme |
|---|---|
| Verdict déterministe depuis la policy encodée | Moteur + RuleVersion immuable |
| Intégrité de signature de l'enveloppe | ES256 avec kid per-tenant |
| Non-répudiation de la décision | Enveloppe signée + JWKS archivé |
| Gel du contexte de décision | Record Consultation + normative_hash |
| Reconstruction historique depuis cold storage | Consultation immuable + JWKS archivé |
| Identité d'actor liée au principal authentifié | `authorization.actor` de l'authentification propre de Knowledge, pas du body de requête |

## Exercice de threat modelling

Pour votre déploiement spécifique :

1. **Draw le graphe.** Chaque chemin d'un agent à n'importe quelle API métier. Quels chemins traversent un PEP ? Lesquels non ?
2. **Check E4.** Pour chaque PEP, tous les parameters discriminants sont-ils dans `bind=[...]` ?
3. **Check E1.** Pour chaque principal agent, y a-t-il un identity binding déclaré pour `on_behalf_of` authentifié ? Sinon, les PEPs downstream traitent-ils le champ comme untrusted ?
4. **Check E2.** Où vivent les clés API ? Qui a accès ? Quel est le planning de rotation ?

## Related

- [Modèle de confiance à quatre acteurs](/docs/concepts/four-actor-trust-model) - overview concept plus court.
- [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) - format d'enveloppe + contrat PEP.
- [Keys inventory](/docs/security-compliance/keys-inventory) - les quatre clés dans le déploiement.
- [Deployment shapes](/docs/security-compliance/deployment-shapes) - topologies SaaS, VPC, on-prem.
