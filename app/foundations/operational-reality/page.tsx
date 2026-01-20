'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../../components/Header'

export default function OperationalRealityPage() {
  const { lang } = useLang()
  const t = getContent(lang)

  const renderMarkdown = (text: string) => {
    return text
      .split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g)
      .map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-[#1A5187]">{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i}>{part.slice(1, -1)}</em>
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={i} className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-[#1A5187]">{part.slice(1, -1)}</code>
        }
        return part
      })
  }

  const content = t.operationalReality

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/foundations"
            className="inline-flex items-center gap-2 text-[#1A5187] hover:underline mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {content.backToHub}
          </Link>

          <p className="text-sm font-semibold text-[#1A5187] uppercase tracking-wider mb-2">
            {content.docType}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h1>

          <p className="text-xl text-gray-600 mb-12">
            {content.subtitle}
          </p>

          {/* Positioning Statement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.positioningStatement.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {renderMarkdown(content.positioningStatement.content)}
            </p>
            <ul className="space-y-2 mb-4">
              {content.positioningStatement.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#1A5187] mt-1">•</span>
                  {renderMarkdown(point)}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm italic">
              {renderMarkdown(content.positioningStatement.note)}
            </p>
          </section>

          {/* Numbered Sections */}
          <div className="space-y-12">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {content.sections.map((section: any, idx: number) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>

                {section.content && (
                  <div className="text-gray-700 mb-4">
                    {section.content.split('\n\n').map((paragraph: string, pIdx: number) => (
                      <p key={pIdx} className="mb-4">
                        {renderMarkdown(paragraph)}
                      </p>
                    ))}
                  </div>
                )}

                {section.triggers && (
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2">{section.triggersIntro}</p>
                    <ul className="space-y-1">
                      {section.triggers.map((trigger: string, tIdx: number) => (
                        <li key={tIdx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#1A5187] mt-1">•</span>
                          {trigger}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.conclusion && (
                  <p className="text-gray-700 font-medium">
                    {renderMarkdown(section.conclusion)}
                  </p>
                )}

                {section.systems && (
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2">{section.systemsIntro}</p>
                    <ul className="space-y-1">
                      {section.systems.map((system: string, sIdx: number) => (
                        <li key={sIdx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#1A5187] mt-1">•</span>
                          {system}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.process && (
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2">{section.processIntro}</p>
                    <ul className="space-y-1">
                      {section.process.map((step: string, stepIdx: number) => (
                        <li key={stepIdx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#1A5187] mt-1">•</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.logProperties && (
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2">{section.logPropertiesIntro}</p>
                    <ul className="space-y-1">
                      {section.logProperties.map((prop: string, propIdx: number) => (
                        <li key={propIdx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#1A5187] mt-1">•</span>
                          {prop}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.distribution && (
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2">{section.distributionIntro}</p>
                    <ul className="space-y-1">
                      {section.distribution.map((item: string, itemIdx: number) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#1A5187] mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.factors && (
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2">{section.factorsIntro}</p>
                    <ul className="space-y-1">
                      {section.factors.map((factor: string, fIdx: number) => (
                        <li key={fIdx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#1A5187] mt-1">•</span>
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.dependencies && (
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2">{section.dependenciesIntro}</p>
                    <ul className="space-y-1">
                      {section.dependencies.map((dep: string, dIdx: number) => (
                        <li key={dIdx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#1A5187] mt-1">•</span>
                          {dep}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Scenarios */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.scenarios.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {content.scenarios.intro}
            </p>
            <div className="space-y-6">
              {content.scenarios.items.map((scenario, idx) => (
                <div key={idx} className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#1A5187] mb-4">
                    {scenario.name}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-900">{lang === 'en' ? 'Characteristics:' : 'Caractéristiques :'}</span>
                      <p className="text-gray-700">{scenario.characteristics}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">{lang === 'en' ? 'Observed behavior:' : 'Comportement observé :'}</span>
                      <p className="text-gray-700">{scenario.behavior}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">{lang === 'en' ? 'Burden profile:' : 'Profil de charge :'}</span>
                      <p className="text-gray-700">{scenario.profile}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Divergence */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.divergence.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {content.divergence.content}
            </p>
            <ul className="space-y-2 mb-4">
              {content.divergence.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#1A5187] mt-1">•</span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 font-medium">
              {renderMarkdown(content.divergence.conclusion)}
            </p>
          </section>

          {/* Self-Assessment */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.selfAssessment.title}
            </h2>
            <div className="space-y-6">
              {content.selfAssessment.categories.map((category, idx) => (
                <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-[#1A5187] mb-3">
                    {category.name}
                  </h3>
                  <ul className="space-y-2">
                    {category.questions.map((question, qIdx) => (
                      <li key={qIdx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-[#1A5187] mt-1">?</span>
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-700 italic">
              {renderMarkdown(content.selfAssessment.conclusion)}
            </p>
          </section>

          {/* Key Takeaway */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.keyTakeaway.title}
            </h2>
            <div className="p-6 bg-[#1A5187]/10 border border-[#1A5187]/30 rounded-lg">
              <p className="text-gray-800">
                {renderMarkdown(content.keyTakeaway.content)}
              </p>
            </div>
          </section>

          {/* Closing Note */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.closingNote.title}
            </h2>
            <p className="text-gray-700">
              {content.closingNote.content}
            </p>
          </section>

          {/* Link to Illustrative Scenario */}
          <section className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {content.illustrativeScenarioLink.title}
            </h3>
            <p className="text-gray-700 mb-4">
              {content.illustrativeScenarioLink.text}
            </p>
            <Link
              href={content.illustrativeScenarioLink.href}
              className="inline-flex items-center gap-2 text-[#1A5187] font-medium hover:underline"
            >
              {content.illustrativeScenarioLink.linkText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </section>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/foundations"
              className="inline-flex items-center gap-2 text-[#1A5187] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {content.backToHub}
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <p>&copy; 2025 Horizon by Asplenz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
