'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

const PersonaIcons = [
  // Engineering / CTO - code
  <svg key="eng" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  // Risk - scale/balance
  <svg key="risk" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>,
  // Legal - document/gavel
  <svg key="legal" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
]

export default function WhoElse() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.whoElse

  if (!content) return null

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {content.title}
        </h2>

        <p className="text-xl text-gray-600 mb-12">
          {content.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {content.personas.map((persona: { name: string; description: string }, idx: number) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
              <span className="text-[#1A5187] mb-4 block">
                {PersonaIcons[idx]}
              </span>
              <h3 className="font-semibold text-gray-900 mb-2">{persona.name}</h3>
              <p className="text-gray-600 text-sm">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
