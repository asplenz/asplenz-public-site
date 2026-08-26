---
title: TypeScript SDK
description: Parité fonctionnelle avec le SDK Python, planifié pour Q4-2026.
locale: fr
kicker: Docs / SDK reference - Roadmap
---

Le SDK TypeScript est sur la roadmap pour Q4-2026. Il shipera la parité fonctionnelle avec le package Python `knowledge-runtime`.

## Scope

- `KnowledgeClient` - transport, retries, scoping tenant.
- `verifyVerdict` - vérification low-level de signature + binding.
- `governedTool` - équivalent du décorateur (via TC39 stage-3 decorators ou une fonction wrapper).
- `resolveWithFetchers` - la boucle `/resolve`.
- `JwksCache` - cache in-memory 5-minutes par défaut, pluggable.
- `SpentStore` - interface + implémentations Redis + in-memory.

## Runtimes cibles

- Node.js 20+
- Deno 1.40+
- Bun 1.0+
- Browser (verification-only ; pas d'exposition de client secret)

## Alternatives aujourd'hui

**N'importe quel langage, immédiat** : appelez l'API REST directement. `/v1/check`, `/v1/resolve`, `/v1/jwks` sont stables, versionnés, et documentés à [API reference](/docs/api-reference/authentication). Vérifier le JWS en TypeScript prend ~20 lignes avec `jose` (npm) :

```typescript
import { jwtVerify, createRemoteJWKSet } from 'jose';

const JWKS = createRemoteJWKSet(
  new URL('https://knowledge.asplenz.com/tnt-acme/v1/jwks')
);

async function verifyKnowledgeVerdict(signedVerdict: string, expected: {
  actor: string; action: string; resource: string; bindings: Record<string, unknown>;
}) {
  const { payload } = await jwtVerify(signedVerdict, JWKS, {
    typ: 'governed+jws',
  });
  const auth = payload.authorization as any;
  if (auth.actor !== expected.actor) throw new Error('actor_mismatch');
  if (auth.action !== expected.action) throw new Error('action_mismatch');
  if (auth.resource !== expected.resource) throw new Error('resource_mismatch');
  for (const [k, v] of Object.entries(expected.bindings)) {
    if (auth.parameters[k] !== v) throw new Error(`binding_mismatch:${k}`);
  }
  return payload;
}
```

C'est suffisant pour un PEP production en TypeScript aujourd'hui. Le SDK ajoutera de l'ergonomie : sucre décorateur, guard-rails à la construction, gestion de cache JWKS, et test doubles d'intégration.

## Contribuer

Si la couverture TypeScript compte pour votre intégration et vous voulez shaper l'ergonomie, [contactez-nous](/contact) - l'input design-partner drive ce qui ship dans la première release.

## Related

- [`knowledge-runtime` Python](/docs/sdk-reference/knowledge-runtime-python) - le SDK de référence aujourd'hui.
- [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) - ce que tout SDK vérifie.
