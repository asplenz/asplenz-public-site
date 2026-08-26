---
title: TypeScript SDK
description: Feature parity with the Python SDK, planned for Q4-2026.
locale: en
kicker: Docs / SDK reference - Roadmap
---

The TypeScript SDK is on the roadmap for Q4-2026. It will ship feature parity with the Python `knowledge-runtime` package.

## Scope

- `KnowledgeClient` - transport, retries, tenant scoping.
- `verifyVerdict` - low-level signature + binding verification.
- `governedTool` - decorator equivalent (via TC39 stage-3 decorators or a wrapper function).
- `resolveWithFetchers` - the `/resolve` loop.
- `JwksCache` - default 5-minute in-memory cache, pluggable.
- `SpentStore` - interface + Redis + in-memory implementations.

## Target runtimes

- Node.js 20+
- Deno 1.40+
- Bun 1.0+
- Browser (verification-only ; no client secret exposure)

## Today's alternatives

**Any language, immediate** : call the REST API directly. `/v1/check`, `/v1/resolve`, `/v1/jwks` are stable, versioned, and documented at [API reference](/docs/api-reference/authentication). Verifying the JWS in TypeScript takes ~20 lines with `jose` (npm) :

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

That is enough for a production PEP in TypeScript today. The SDK will add ergonomics : decorator sugar, guard-rails at construction, JWKS cache management, and integration test doubles.

## Contribute

If TypeScript coverage matters for your integration and you want to shape the ergonomics, [contact us](/contact) - design-partner input drives what ships in the first release.

## Related

- [`knowledge-runtime` Python](/docs/sdk-reference/knowledge-runtime-python) - the reference SDK today.
- [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) - what any SDK verifies.
