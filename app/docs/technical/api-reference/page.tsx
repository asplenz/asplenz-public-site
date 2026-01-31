'use client'

import { useLang } from '@/lib/LangContext'

export default function ApiReferencePage() {
  const { lang } = useLang()

  const endpoints = [
    { endpoint: '/streams/{stream_id}/facts', method: 'POST', desc: lang === 'en' ? 'Seal a new fact' : 'Sceller un nouveau fait' },
    { endpoint: '/streams/{stream_id}/facts', method: 'GET', desc: lang === 'en' ? 'List facts in a stream' : 'Lister les faits d\'un stream' },
    { endpoint: '/streams/{stream_id}/bundles', method: 'POST', desc: lang === 'en' ? 'Create proof bundle' : 'Créer un bundle de preuve' },
    { endpoint: '/streams/{stream_id}/bundles', method: 'GET', desc: lang === 'en' ? 'List bundles for a stream' : 'Lister les bundles d\'un stream' },
    { endpoint: '/streams/{stream_id}/verify', method: 'POST', desc: lang === 'en' ? 'Verify chain integrity' : 'Vérifier l\'intégrité de la chaîne' },
    { endpoint: '/facts/{fact_id}', method: 'GET', desc: lang === 'en' ? 'Get a single fact' : 'Obtenir un fait' },
    { endpoint: '/bundles/{bundle_id}', method: 'GET', desc: lang === 'en' ? 'Get a single bundle' : 'Obtenir un bundle' },
    { endpoint: '/tenants/{tenant_id}/streams', method: 'GET', desc: lang === 'en' ? 'List streams for a tenant' : 'Lister les streams d\'un tenant' },
    { endpoint: '/health', method: 'GET', desc: lang === 'en' ? 'Health check' : 'Vérification de santé' },
  ]

  const sealFactRequest = `{
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "custom_payload": {
    "decision": "Approve emergency maintenance",
    "justification": "Memory leak confirmed",
    "affected_systems": ["api-server-01", "api-server-02"]
  },
  "client_ref": "incident-2024-01-26-approval-001"
}`

  const sealFactResponse = `{
  "fact_id": "fact-01HRX7G2NB",
  "stream_id": "incident-2024-01-26",
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "sealed_at_ms": 1706284801000,
  "sealed_at_iso": "2024-01-26T12:00:01.000Z",
  "custom_payload": {
    "decision": "Approve emergency maintenance",
    "justification": "Memory leak confirmed",
    "affected_systems": ["api-server-01", "api-server-02"]
  },
  "fact_hash": "a1b2c3d4e5f6...",
  "prev_hash": "9f8e7d6c5b4a...",
  "parent_fact_id": "fact-01HRX7F1MA"
}`

  const listFactsResponse = `{
  "facts": [
    {
      "fact_id": "fact-01HRX7F1MA",
      "sealed_at_ms": 1706284800000,
      "sealed_at_iso": "2024-01-26T12:00:00.000Z",
      "actor": "system:monitoring",
      "custom_payload": { "alert": "Memory usage at 95%" }
    },
    {
      "fact_id": "fact-01HRX7G2NB",
      "sealed_at_ms": 1706284801000,
      "sealed_at_iso": "2024-01-26T12:00:01.000Z",
      "actor": "ops-lead@acme-corp.com",
      "custom_payload": { "decision": "Approve emergency maintenance" }
    }
  ],
  "count": 2
}`

  const createBundleResponse = `{
  "bundle_id": "bundle-01HRX8ABC",
  "stream_id": "incident-2024-01-26",
  "bundle_version": 1,
  "head_fact_id": "fact-01HRX7G2NB",
  "head_hash": "a1b2c3d4e5f6...",
  "facts_manifest": ["fact-01HRX7F1MA", "fact-01HRX7G2NB"],
  "created_at_ms": 1706284900000,
  "created_at_iso": "2024-01-26T12:01:40.000Z",
  "signature": "base64-encoded-signature...",
  "signature_alg": "ed25519",
  "key_id": "horizon-key-001"
}`

  const verifyValidResponse = `{
  "valid": true,
  "facts_verified": 47
}`

  const verifyInvalidResponse = `{
  "valid": false,
  "facts_verified": 23,
  "error": "Hash chain broken at fact-01HRX8XYZ"
}`

  const errorCodes = [
    { code: 'VALIDATION_ERROR', status: '400', desc: lang === 'en' ? 'Invalid request payload' : 'Payload de requête invalide' },
    { code: 'NOT_FOUND', status: '404', desc: lang === 'en' ? 'Resource not found' : 'Ressource non trouvée' },
    { code: 'UNAUTHORIZED', status: '401', desc: lang === 'en' ? 'Missing or invalid API key' : 'Clé API manquante ou invalide' },
    { code: 'INTERNAL_ERROR', status: '500', desc: lang === 'en' ? 'Server error' : 'Erreur serveur' },
  ]

  return (
    <article className="prose">
      <h1>API Reference</h1>
      <p className="text-[var(--text-muted)] -mt-4 mb-8">
        Base URL: <code className="text-[var(--accent)]">https://api.horizon.example.com</code>
      </p>

      <p className="text-[var(--text-secondary)] mb-8">
        {lang === 'en'
          ? 'All requests use JSON. All timestamps are in milliseconds (Unix epoch) with ISO 8601 representation.'
          : 'Toutes les requêtes utilisent JSON. Tous les timestamps sont en millisecondes (epoch Unix) avec représentation ISO 8601.'}
      </p>

      {/* Authentication */}
      <section className="mb-10">
        <h2>Authentication</h2>
        <p className="text-[var(--text-secondary)] mb-4">
          {lang === 'en'
            ? 'Include your API key in the X-API-Key header:'
            : 'Incluez votre clé API dans le header X-API-Key :'}
        </p>
        <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto text-sm">
          <code>X-API-Key: your-api-key-here</code>
        </pre>
      </section>

      {/* Endpoints Overview */}
      <section className="mb-10">
        <h2>{lang === 'en' ? 'Endpoints Overview' : 'Aperçu des Endpoints'}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-[var(--border)] rounded-lg overflow-hidden text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-[var(--text-primary)]">Endpoint</th>
                <th className="px-4 py-3 text-left font-semibold text-[var(--text-primary)]">Method</th>
                <th className="px-4 py-3 text-left font-semibold text-[var(--text-primary)]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {endpoints.map((ep, idx) => (
                <tr key={idx} className="bg-[var(--bg-secondary)]">
                  <td className="px-4 py-2 font-mono text-[var(--accent)] text-xs">{ep.endpoint}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-0.5 text-xs font-mono rounded ${
                      ep.method === 'POST' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {ep.method}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-[var(--text-muted)]">{ep.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Seal a Fact */}
      <section className="mb-10">
        <h2>{lang === 'en' ? 'Seal a Fact' : 'Sceller un Fait'}</h2>
        <p className="text-[var(--text-secondary)] mb-4">
          {lang === 'en'
            ? "Creates a new fact in a stream. If the stream doesn't exist, it is created automatically."
            : "Crée un nouveau fait dans un stream. Si le stream n'existe pas, il est créé automatiquement."}
        </p>
        <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto text-sm mb-4">
          <code><span className="text-green-400">POST</span> /streams/{'{stream_id}'}/facts</code>
        </pre>

        <h4 className="text-[var(--text-primary)] font-semibold mb-2">{lang === 'en' ? 'Request Body' : 'Corps de la Requête'}</h4>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border border-[var(--border)] rounded-lg overflow-hidden text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="px-3 py-2 text-left font-semibold text-[var(--text-primary)]">Field</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--text-primary)]">Type</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--text-primary)]">Required</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--text-primary)]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr className="bg-[var(--bg-secondary)]">
                <td className="px-3 py-2 font-mono text-[var(--accent)] text-xs">tenant_id</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">string</td>
                <td className="px-3 py-2 text-green-400">Yes</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">{lang === 'en' ? 'Your tenant identifier' : 'Votre identifiant tenant'}</td>
              </tr>
              <tr className="bg-[var(--bg-secondary)]">
                <td className="px-3 py-2 font-mono text-[var(--accent)] text-xs">actor</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">string</td>
                <td className="px-3 py-2 text-green-400">Yes</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">{lang === 'en' ? 'Who is making this declaration' : 'Qui fait cette déclaration'}</td>
              </tr>
              <tr className="bg-[var(--bg-secondary)]">
                <td className="px-3 py-2 font-mono text-[var(--accent)] text-xs">custom_payload</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">object</td>
                <td className="px-3 py-2 text-green-400">Yes</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">{lang === 'en' ? 'Your business data (opaque to Horizon)' : 'Vos données métier (opaque pour Horizon)'}</td>
              </tr>
              <tr className="bg-[var(--bg-secondary)]">
                <td className="px-3 py-2 font-mono text-[var(--accent)] text-xs">client_ref</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">string</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">No</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">{lang === 'en' ? 'Idempotency key (prevents duplicates)' : 'Clé d\'idempotence (évite les doublons)'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-[var(--text-primary)] font-semibold mb-2">{lang === 'en' ? 'Example Request' : 'Exemple de Requête'}</h4>
        <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto text-sm mb-4">
          <code>{sealFactRequest}</code>
        </pre>

        <h4 className="text-[var(--text-primary)] font-semibold mb-2">{lang === 'en' ? 'Example Response' : 'Exemple de Réponse'}</h4>
        <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto text-sm mb-4">
          <code>{sealFactResponse}</code>
        </pre>

        <h4 className="text-[var(--text-primary)] font-semibold mb-2">{lang === 'en' ? 'Idempotency' : 'Idempotence'}</h4>
        <p className="text-[var(--text-secondary)]">
          {lang === 'en'
            ? 'If you provide client_ref, Horizon ensures exactly-once sealing. First request: fact is created. Subsequent requests with same client_ref: original fact is returned. This is safe for retries in unreliable network conditions.'
            : 'Si vous fournissez client_ref, Horizon garantit un scellement unique. Première requête : le fait est créé. Requêtes suivantes avec le même client_ref : le fait original est retourné. Sûr pour les retry en conditions réseau instables.'}
        </p>
      </section>

      {/* List Facts */}
      <section className="mb-10">
        <h2>{lang === 'en' ? 'List Facts (Timeline)' : 'Lister les Faits (Timeline)'}</h2>
        <p className="text-[var(--text-secondary)] mb-4">
          {lang === 'en'
            ? 'Returns all facts in a stream, in chain order.'
            : 'Retourne tous les faits d\'un stream, dans l\'ordre de la chaîne.'}
        </p>
        <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto text-sm mb-4">
          <code><span className="text-blue-400">GET</span> /streams/{'{stream_id}'}/facts?limit=100&offset=0</code>
        </pre>
        <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto text-sm">
          <code>{listFactsResponse}</code>
        </pre>
      </section>

      {/* Create Bundle */}
      <section className="mb-10">
        <h2>{lang === 'en' ? 'Create Proof Bundle' : 'Créer un Bundle de Preuve'}</h2>
        <p className="text-[var(--text-secondary)] mb-4">
          {lang === 'en'
            ? 'Creates a signed, exportable snapshot of the stream.'
            : 'Crée un snapshot signé et exportable du stream.'}
        </p>
        <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto text-sm mb-4">
          <code><span className="text-green-400">POST</span> /streams/{'{stream_id}'}/bundles</code>
        </pre>
        <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto text-sm">
          <code>{createBundleResponse}</code>
        </pre>
      </section>

      {/* Verify Chain */}
      <section className="mb-10">
        <h2>{lang === 'en' ? 'Verify Chain Integrity' : 'Vérifier l\'Intégrité de la Chaîne'}</h2>
        <p className="text-[var(--text-secondary)] mb-4">
          {lang === 'en'
            ? 'Verifies that the hash chain is intact.'
            : 'Vérifie que la chaîne de hachage est intacte.'}
        </p>
        <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto text-sm mb-4">
          <code><span className="text-green-400">POST</span> /streams/{'{stream_id}'}/verify</code>
        </pre>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-green-400 text-sm font-semibold mb-2">{lang === 'en' ? 'Valid Response' : 'Réponse Valide'}</h4>
            <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto text-sm">
              <code>{verifyValidResponse}</code>
            </pre>
          </div>
          <div>
            <h4 className="text-red-400 text-sm font-semibold mb-2">{lang === 'en' ? 'Tampered Response' : 'Réponse Altérée'}</h4>
            <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto text-sm">
              <code>{verifyInvalidResponse}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Error Codes */}
      <section className="mb-10">
        <h2>{lang === 'en' ? 'Error Codes' : 'Codes d\'Erreur'}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-[var(--border)] rounded-lg overflow-hidden text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-[var(--text-primary)]">Code</th>
                <th className="px-4 py-3 text-left font-semibold text-[var(--text-primary)]">HTTP Status</th>
                <th className="px-4 py-3 text-left font-semibold text-[var(--text-primary)]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {errorCodes.map((err, idx) => (
                <tr key={idx} className="bg-[var(--bg-secondary)]">
                  <td className="px-4 py-2 font-mono text-red-400 text-xs">{err.code}</td>
                  <td className="px-4 py-2 text-[var(--text-muted)]">{err.status}</td>
                  <td className="px-4 py-2 text-[var(--text-muted)]">{err.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="mb-10">
        <h2>Rate Limits</h2>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border border-[var(--border)] rounded-lg overflow-hidden text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-[var(--text-primary)]">Tier</th>
                <th className="px-4 py-3 text-left font-semibold text-[var(--text-primary)]">{lang === 'en' ? 'Requests/minute' : 'Requêtes/minute'}</th>
                <th className="px-4 py-3 text-left font-semibold text-[var(--text-primary)]">Burst</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr className="bg-[var(--bg-secondary)]">
                <td className="px-4 py-2 text-[var(--text-primary)]">Standard</td>
                <td className="px-4 py-2 text-[var(--text-muted)]">1,000</td>
                <td className="px-4 py-2 text-[var(--text-muted)]">100</td>
              </tr>
              <tr className="bg-[var(--bg-secondary)]">
                <td className="px-4 py-2 text-[var(--text-primary)]">Enterprise</td>
                <td className="px-4 py-2 text-[var(--text-muted)]">Custom</td>
                <td className="px-4 py-2 text-[var(--text-muted)]">Custom</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[var(--text-muted)] text-sm">
          {lang === 'en'
            ? 'Rate limit headers are included in all responses: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset'
            : 'Les headers de rate limit sont inclus dans toutes les réponses : X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset'}
        </p>
      </section>
    </article>
  )
}
