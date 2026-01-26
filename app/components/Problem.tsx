'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

const DuringIncidentIcons = [
  // decisions are urgent
  <svg key="urgent" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // channels are informal
  <svg key="informal" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>,
  // approvals are verbal
  <svg key="verbal" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>,
  // actions before documentation
  <svg key="actions" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
]

const QuestionsIcons = [
  // Who knew what
  <svg key="who" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // What was declared
  <svg key="declared" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  // Which decisions under pressure
  <svg key="pressure" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>,
  // What evidence exists
  <svg key="evidence" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
]

export default function Problem() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          {t.problem.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* Left - During incident */}
          <div>
            <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {t.problem.intro}
            </p>
            <ul className="space-y-3">
              {t.problem.bullets.map((bullet: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-amber-500 flex-shrink-0 mt-0.5">
                    {DuringIncidentIcons[idx]}
                  </span>
                  <span className="text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Questions later */}
          <div>
            <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {t.problem.questions_intro}
            </p>
            <ul className="space-y-3">
              {t.problem.questions.map((question: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">
                    {QuestionsIcons[idx]}
                  </span>
                  <span className="text-gray-600 italic">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4">
            {t.problem.reconstruction}
          </p>

          <p className="text-xl font-bold text-gray-900">
            {t.problem.conclusion}
          </p>
        </div>
      </div>
    </section>
  )
}
