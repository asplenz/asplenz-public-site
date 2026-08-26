---
title: Rotate signing keys
description: Rotate la clé ES256 de signing des verdicts avec zéro changement client et zéro downtime.
locale: fr
kicker: Docs / Guides - Stable
---

La clé de signing des verdicts rotate sur un epoch planifié (défaut annuel) ou à la demande. La rotation est graceful : les nouvelles signatures utilisent le nouveau `kid` immédiatement, l'ancien `kid` reste dans le JWKS pour que les verdicts en vol vérifient toujours.

## Quand rotate

- **Planifié** : annuel, ou selon le calendrier de compliance de votre tenant.
- **Urgence** : compromission suspectée de la clé privée.
- **Structurel** : passage de clés deployment-wide à per-tenant (Option B -> Option C).

## Rotation planifiée (pas de compromission)

**Étape 1 - Générer la nouvelle clé.**

```bash
knowledge-admin verdict-signing rotate \
  --tenant tnt-acme \
  --new-epoch 2027-01 \
  --overlap-days 7
```

Comportement :

- Génère une clé privée ES256 fresh.
- L'ajoute au set de clés du tenant avec `not_before = now`.
- Set `not_after = now + overlap_days` sur la clé précédente (elle reste dans le JWKS pour vérification cold-storage mais n'est pas utilisée pour signer les nouveaux verdicts).
- Reload le resolver de clé de signing.

**Étape 2 - Attendre que l'overlap drain.**

Pendant l'overlap, les deux clés sont dans le JWKS. Les nouvelles signatures utilisent la nouvelle clé ; les verdicts émis dans la fenêtre d'overlap sous l'ancienne clé restent vérifiables.

Monitor avec `mcp_proxy_jwks_refreshes_total` ou le dashboard admin Knowledge.

**Étape 3 - Vérifier.**

```bash
curl https://knowledge.asplenz.com/tnt-acme/v1/jwks | jq '.keys[] | {kid, not_before, not_after}'
```

Vous devriez voir les deux clés. Les nouveaux verdicts inspectés avec `jwt-cli` ou le helper runtime devraient porter le nouveau `kid`.

**Étape 4 - Terminé.**

Après la fenêtre d'overlap, l'ancienne clé est dormant (toujours dans le JWKS pour vérification historique). Aucun changement client requis ; les caches JWKS expirent et re-fetch dans les 5 minutes par défaut.

## Rotation d'urgence (compromission suspectée)

**Étape 1 - Rotate maintenant, zéro overlap.**

```bash
knowledge-admin verdict-signing rotate \
  --tenant tnt-acme \
  --new-epoch 2026-08-emergency \
  --overlap-days 0 \
  --reason "suspected private-key compromise, incident IR-2026-08-42"
```

Le `not_after` de la clé précédente est set à `now` immédiatement.

**Étape 2 - Force JWKS refresh à chaque PEP.**

Si vous ne pouvez pas attendre le TTL de cache :

```bash
# Pour proxies sidecar/shared :
curl -X POST http://proxy:9091/admin/jwks/refresh

# Pour proxies stdio : redémarrer le client MCP.
```

**Étape 3 - Rejeter les verdicts en vol sous l'ancienne clé.**

Ajoutez une rule temporaire à la couche PEP :

```python
if payload["signing_kid"].startswith("tnt-acme:2026-01"):
    raise EmergencyRotationRefuse("compromised key ; ignore verdicts")
```

Ou, si vous utilisez `knowledge-runtime`, set le refus dans le client :

```python
client.forbid_kid("tnt-acme:2026-01")
```

**Étape 4 - Post-mortem.**

Les Consultations historiques restent des records d'audit valides même sous une clé compromise : la compromission est un fait opérationnel, pas un fait sur l'état policy gelé. Le champ signed_verdict sur ces Consultations devrait être marqué comme « signé sous clé compromise » dans votre surface d'audit.

## De l'Option B à l'Option C (clés per-tenant)

Clés deployment-wide aujourd'hui ; per-tenant est un upgrade non-cassant. Étapes :

1. Activer la génération de clé per-tenant : `knowledge-admin config set verdict_signing.mode=per_tenant`.
2. Les nouveaux tenants obtiennent leur propre clé ; les tenants existants continuent sur la clé partagée.
3. Optionnellement migrer les tenants existants un à la fois : `knowledge-admin verdict-signing migrate --tenant tnt-acme --generate-per-tenant`.

Le resolver supporte déjà les deux modes ; aucun changement client requis.

## Vérifier zéro downtime

Avant de rotate en production, répétez sur staging avec un load test qui hit `/check` continûment :

```bash
hey -z 60s -c 20 -H "X-API-Key: ak-..." \
  -m POST -T "application/json" \
  -d '{"action":"health.check","resource":"probe","scope":{}}' \
  https://knowledge.staging.asplenz.com/tnt-test/v1/check
```

Pendant que le test tourne, exécutez la rotation. Zéro erreur 5xx attendue.

## Related

- [Keys inventory](/docs/security-compliance/keys-inventory) - les quatre clés Knowledge.
- [/v1/jwks](/docs/api-reference/jwks) - contrat endpoint JWKS.
- [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) - enveloppe + kid.
- [Emergency response](/docs/guides/emergency-response) - playbook incident plus large.
