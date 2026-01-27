'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

const sealedFactExample = {
  fact_id: 'fact-01HRX7KQNB4GZJT8WVMC3YP5D2',
  stream_id: 'HZN-034',
  parent_fact_id: 'fact-01HRX7JHMA3FYK9RVNLB2XP4C1',
  actor: 'ops-lead@acme-corp.com',
  sealed_at_ms: 1706270102437,
  custom_payload: {
    action: 'stop_service',
    target: 'payment-gateway-eu-west-1',
    reason: 'memory_leak_detected',
    submitted_at_ms: 1706270100000,
    channel: 'runbook_terminal',
    incident_ref: 'INC-2024-00742',
  },
  attachments_manifest: [],
  prev_hash: '8a3f2b1c9d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a',
  fact_hash: 'c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8',
  signature: 'MEUCIQC8xK2vPzYnRjH4mN5oP6qRsT3uVwX9yZ0aB1cD2eF3gAIgH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4cD5eF6gH7iJ=',
}

export default function HowHorizonSeals() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.howHorizonSeals

  if (!content) return null

  return (
    <section id="how-horizon-seals" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {content.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Steps */}
          <div>
            <ol className="space-y-4">
              {content.steps.map((step: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A5187] text-white flex items-center justify-center text-sm font-mono">
                    {idx + 1}
                  </span>
                  <span className="text-gray-300 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: JSON Example */}
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              {content.exampleTitle}
            </p>
            <pre className="bg-gray-950 rounded-lg p-4 overflow-x-auto text-xs text-gray-300 font-mono leading-relaxed">
              {JSON.stringify(sealedFactExample, null, 2)}
            </pre>
          </div>
        </div>

        {/* Closing statement */}
        <div className="border-t border-gray-700 pt-8">
          {content.closing.map((line: string, idx: number) => (
            <p key={idx} className="text-gray-400 text-lg">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
