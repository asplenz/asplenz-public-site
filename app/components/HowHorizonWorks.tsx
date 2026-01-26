'use client'

import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

const WhenDeclaredIcons = [
  // timestamp
  <svg key="time" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // opaque data
  <svg key="data" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>,
  // crypto link
  <svg key="link" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>,
]

const FactsStreamIcons = [
  // append-only
  <svg key="append" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>,
  // no business state
  <svg key="nostate" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
  </svg>,
  // no opening/closing
  <svg key="noopen" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
  </svg>,
  // no imposed causality
  <svg key="nocause" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
  </svg>,
]

const EvaluationIcons = [
  // records relationship
  <svg key="record" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  // seals
  <svg key="seal" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // does not interpret
  <svg key="nointerpret" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>,
]

export default function HowHorizonWorks() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.howHorizonWorks

  if (!content) return null

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {content.title}
        </h2>

        <p className="text-xl text-gray-700 mb-12">
          {content.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left column: Image */}
          <div className="flex items-start">
            <Image
              src={`/${content.image}`}
              alt={content.title}
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Right column: When declared + Facts Stream */}
          <div className="space-y-8">
            {/* When a fact is declared */}
            <div>
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {content.whenDeclared.intro}
              </p>
              <ul className="space-y-3">
                {content.whenDeclared.bullets.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#1A5187] flex-shrink-0">
                      {WhenDeclaredIcons[idx]}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Facts Stream */}
            <div>
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {content.factsStream.intro}
              </p>
              <ul className="space-y-3">
                {content.factsStream.bullets.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-gray-400 flex-shrink-0">
                      {FactsStreamIcons[idx]}
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Evaluations section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <p className="text-lg text-gray-700 mb-4">
            {content.evaluations.intro}
          </p>
          <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            {content.evaluations.horizonDoes}
          </p>
          <ul className="space-y-3 mb-6">
            {content.evaluations.bullets.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#1A5187] flex-shrink-0">
                  {EvaluationIcons[idx]}
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 italic">
            {content.evaluations.note}
          </p>
        </div>

        {/* Footer */}
        <p className="text-lg text-gray-900 font-semibold italic">
          {content.footer}
        </p>
      </div>
    </section>
  )
}
