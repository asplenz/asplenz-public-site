'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

const timelineData = {
  stream_id: 'HZN-034',
  facts: [
    {
      fact_id: 'fact-01HRX7F1MA',
      sealed_at_ms: 1706269800000,
      actor: 'monitoring@acme-corp.com',
      custom_payload: {
        metric: 'memory_usage',
        threshold: '95%',
        observed_value: '98.2%',
        source: 'prometheus',
      },
      fact_hash: 'a1b2c3...d4e5f6',
    },
    {
      fact_id: 'fact-01HRX7G2NB',
      sealed_at_ms: 1706269920000,
      actor: 'ops-lead@acme-corp.com',
      custom_payload: {
        action: 'stop_service',
        target: 'payment-gateway-eu-west-1',
        context: 'Memory leak confirmed',
        channel: 'slack_oncall',
      },
      fact_hash: 'b2c3d4...e5f6a7',
    },
    {
      fact_id: 'fact-01HRX7H3PC',
      sealed_at_ms: 1706269980000,
      actor: 'cto@acme-corp.com',
      custom_payload: {
        message: 'Proceed with controlled shutdown.',
        channel: 'email',
        ref: 'INC-2024-00742',
      },
      fact_hash: 'c3d4e5...f6a7b8',
    },
    {
      fact_id: 'fact-01HRX7J4QD',
      sealed_at_ms: 1706270102000,
      actor: 'ops-lead@acme-corp.com',
      custom_payload: {
        method: 'kubectl_drain',
        target: 'payment-gateway-eu-west-1',
        result: 'service_stopped',
      },
      fact_hash: 'd4e5f6...a7b8c9',
    },
    {
      fact_id: 'fact-01HRX7K5RE',
      sealed_at_ms: 1706270400000,
      actor: 'monitoring@acme-corp.com',
      custom_payload: {
        observation: 'service_stopped',
        traffic_redirected: true,
        error_rate: '0%',
      },
      fact_hash: 'e5f6a7...b8c9d0',
    },
  ],
  bundle: {
    bundle_id: 'bundle-01HRX9P7TG',
    bundle_version: 1,
    facts_count: 5,
    head_hash: 'e5f6a7...b8c9d0',
    signature: 'MEUCIQC8xK2v...F6gH7iJ=',
    key_id: 'horizon-prod-2024',
  },
}

function formatTime(ms: number): string {
  const date = new Date(ms)
  return date.toISOString().slice(11, 19)
}

function formatActor(actor: string): string {
  return actor.split('@')[0] + '@'
}

function formatPayload(payload: Record<string, unknown>): string {
  const entries = Object.entries(payload).slice(0, 2)
  return entries.map(([k, v]) => `${k}=${v}`).join(', ')
}

export default function PostIncidentTimeline() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.postIncidentTimeline

  if (!content) return null

  return (
    <section id="post-incident-timeline" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {content.title}
        </h2>

        <p className="text-gray-400 mb-8">
          {content.subtitle}
        </p>

        {/* Timeline Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm font-mono">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">{content.columns[0]}</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">{content.columns[1]}</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">{content.columns[2]}</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">{content.columns[3]}</th>
              </tr>
            </thead>
            <tbody>
              {timelineData.facts.map((fact, idx) => (
                <tr key={idx} className="border-b border-gray-800">
                  <td className="py-3 px-4 text-gray-300">{formatTime(fact.sealed_at_ms)}</td>
                  <td className="py-3 px-4 text-gray-300">{formatActor(fact.actor)}</td>
                  <td className="py-3 px-4 text-gray-300">{formatPayload(fact.custom_payload)}</td>
                  <td className="py-3 px-4 text-green-400">✓ {fact.fact_hash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Proof Bundle */}
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span className="font-mono text-sm">
            {content.bundleLabel} · {timelineData.bundle.facts_count} {content.bundleFacts} · {content.bundleSigned}
          </span>
        </div>

        {/* Closing */}
        <p className="text-center text-gray-400 text-lg">
          {content.closing}
        </p>
      </div>
    </section>
  )
}
