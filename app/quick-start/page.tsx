'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

const requestExample = `{
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "custom_payload": {
    "action": "stop_service",
    "context": "Memory leak confirmed"
  }
}`

const responseExample = `{
  "fact_id": "fact-01HRX7G2NB",
  "stream_id": "stream-034",
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "sealed_at_ms": 1706284801000,
  "custom_payload": {
    "action": "stop_service",
    "context": "Memory leak confirmed"
  },
  "fact_hash": "a1b2c3d4e5f6...",
  "prev_hash": "9f8e7d6c5b4a...",
  "parent_fact_id": "fact-01HRX7F1MA"
}`

const idempotencyExample = `{
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "client_ref": "incident-2024-01-26-stop-001",
  "custom_payload": { ... }
}`

export default function QuickStartPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.quickStart

  if (!content) return null

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {content.title}
          </h1>
          <p className="text-xl text-[#1A5187] font-medium mb-2">
            {content.subtitle}
          </p>
          <p className="text-gray-600 mb-12">
            {content.audience}
          </p>

          {/* One Endpoint */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.oneEndpoint.title}</h2>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4">
              {content.oneEndpoint.code}
            </pre>
            <p className="text-gray-600 text-sm">{content.oneEndpoint.note}</p>
          </section>

          {/* One Request */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.oneRequest.title}</h2>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4">
              {requestExample}
            </pre>
            <p className="text-gray-600 text-sm">{content.oneRequest.note}</p>
          </section>

          {/* One Response */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.oneResponse.title}</h2>
            <pre className="bg-gray-900 text-blue-400 rounded-lg p-4 overflow-x-auto text-sm font-mono">
              {responseExample}
            </pre>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* What Happened */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.whatHappened.title}</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              {content.whatHappened.steps.map((step: string, idx: number) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
            <p className="text-gray-600 italic">{content.whatHappened.note}</p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Idempotency */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.idempotency.title}</h2>
            <p className="text-gray-700 mb-4">{content.idempotency.intro}</p>
            <pre className="bg-gray-900 text-yellow-400 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4">
              {idempotencyExample}
            </pre>
            <p className="text-gray-700 font-medium">{content.idempotency.result}</p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Storage Guarantees */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.storageGuarantees.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Property</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Guarantee</th>
                  </tr>
                </thead>
                <tbody>
                  {content.storageGuarantees.rows.map((row: { property: string; guarantee: string }, idx: number) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-900 font-medium">{row.property}</td>
                      <td className="py-3 px-4 text-gray-700">{row.guarantee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* What Horizon Does Not Do */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.whatHorizonDoesNot.title}</h2>
            <ul className="space-y-3">
              {content.whatHorizonDoesNot.items.map((item: { label: string; description: string }, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-semibold text-gray-900">{item.label}</span>
                  <span className="text-gray-600">- {item.description}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Verify Chain Integrity */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.verifyChain.title}</h2>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4">
              {content.verifyChain.code}
            </pre>
            <p className="text-gray-700 mb-2">{content.verifyChain.result}</p>
            <p className="text-gray-600 text-sm italic">{content.verifyChain.note}</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
