'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../components/Header'
import Footer from '../components/Footer'

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

export default function UnderstandingProofPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.understandingProof
  const timelineLabels = t.postIncidentTimeline

  if (!content) return null

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {content.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {content.status}
          </p>
          <p className="text-lg text-[#1A5187] dark:text-blue-400 font-medium mb-8">
            {content.purpose}
          </p>

          {/* Intro */}
          <div className="mb-12 space-y-2">
            {content.intro.map((line: string, idx: number) => (
              <p key={idx} className="text-gray-700 dark:text-gray-300">
                {line}
              </p>
            ))}
          </div>

          {/* Chapter 1 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {content.chapter1.title}
            </h2>
            <div className="space-y-4">
              {content.chapter1.paragraphs.map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Chapter 2 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {content.chapter2.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              {content.chapter2.intro}
            </p>

            {/* Timeline */}
            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <p className="text-gray-400 text-sm mb-4">
                {timelineLabels?.subtitle}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-mono">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">{timelineLabels?.columns?.[0]}</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">{timelineLabels?.columns?.[1]}</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">{timelineLabels?.columns?.[2]}</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">{timelineLabels?.columns?.[3]}</th>
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
              <div className="flex items-center justify-center gap-2 text-gray-400 mt-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="font-mono text-sm">
                  {timelineLabels?.bundleLabel} · {timelineData.bundle.facts_count} {timelineLabels?.bundleFacts} · {timelineLabels?.bundleSigned}
                </span>
              </div>
            </div>

            {/* What timeline shows / doesn't show */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {content.chapter2.shows.title}
                </h3>
                <ul className="space-y-2">
                  {content.chapter2.shows.items.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {content.chapter2.doesNotShow.title}
                </h3>
                <ul className="space-y-2">
                  {content.chapter2.doesNotShow.items.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-gray-400 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Conclusion */}
            <div className="space-y-4">
              {content.chapter2.conclusion.map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Relationship to Proof Semantics */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {content.relationToProofSemantics.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {content.relationToProofSemantics.content}
            </p>
            <Link
              href="/proof-semantic"
              className="inline-flex items-center gap-2 text-[#1A5187] dark:text-blue-400 font-medium hover:underline"
            >
              {lang === 'fr' ? 'Lire Proof Semantics' : 'Read Proof Semantics'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </section>

          {/* Summary */}
          <section className="bg-gray-50 dark:bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {content.summary.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.summary.content}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
