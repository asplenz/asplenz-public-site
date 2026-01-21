'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function IllustrativeScenarioPage() {
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

  const content = t.illustrativeScenario

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/foundations/operational-reality"
            className="inline-flex items-center gap-2 text-[#1A5187] hover:underline mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {content.backToHub}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {content.title}
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            {content.subtitle}
          </p>

          {/* Intro Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.intro.title}
            </h2>
            <div className="text-gray-700 mb-6">
              {content.intro.content.split('\n\n').map((p, i) => (
                <p key={i} className="mb-4">{renderMarkdown(p)}</p>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {content.intro.worlds.map((world, idx) => (
                <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-[#1A5187] mb-2">{world.name}</h3>
                  <p className="text-gray-700 text-sm">{world.description}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 font-medium">
              {renderMarkdown(content.intro.conclusion)}
            </p>
          </section>

          {/* Purpose Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.purpose.title}
            </h2>
            <div className="text-gray-700">
              {content.purpose.content.split('\n\n').map((p, i) => (
                <p key={i} className="mb-4">{p}</p>
              ))}
            </div>
          </section>

          {/* Situation Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.situation.title}
            </h2>
            <div className="text-gray-700 mb-4">
              {content.situation.content.split('\n\n').map((p, i) => (
                <p key={i} className="mb-4">{p}</p>
              ))}
            </div>
            <ul className="space-y-1 mb-6">
              {content.situation.executionTypes.map((type, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#1A5187] mt-1">•</span>
                  {type}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mb-2">{content.situation.outcomeIntro}</p>
            <ul className="space-y-1 mb-4">
              {content.situation.outcomeTypes.map((type, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#1A5187] mt-1">•</span>
                  {type}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 italic">{content.situation.conclusion}</p>
          </section>

          {/* Later Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.later.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {renderMarkdown(content.later.content)}
            </p>
            <ul className="space-y-1 mb-4">
              {content.later.questions.map((question, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#1A5187] mt-1">•</span>
                  {question}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 italic">{content.later.conclusion}</p>
          </section>

          {/* Two Worlds Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.twoWorlds.title}
            </h2>
            <p className="text-gray-700 mb-6">{content.twoWorlds.intro}</p>

            {/* World A */}
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-4">
                {content.twoWorlds.worldA.title}
              </h3>
              <div className="text-gray-700 mb-4">
                {content.twoWorlds.worldA.content.split('\n\n').map((p, i) => (
                  <p key={i} className="mb-2">{p}</p>
                ))}
              </div>
              <ul className="space-y-1 mb-4">
                {content.twoWorlds.worldA.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-600 mt-1">•</span>
                    {step}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 mb-2">{content.twoWorlds.worldA.assessment}</p>
              <ul className="space-y-1 mb-4">
                {content.twoWorlds.worldA.characteristics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-600 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-red-800 font-semibold">
                {renderMarkdown(content.twoWorlds.worldA.conclusion)}
              </p>
            </div>

            {/* World B */}
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {content.twoWorlds.worldB.title}
              </h3>
              <div className="text-gray-700 mb-4">
                {content.twoWorlds.worldB.content.split('\n\n').map((p, i) => (
                  <p key={i} className="mb-2">{p}</p>
                ))}
              </div>
              <ul className="space-y-1 mb-4">
                {content.twoWorlds.worldB.facts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 mt-1">•</span>
                    {fact}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 mb-2">{content.twoWorlds.worldB.examination}</p>
              <ul className="space-y-1 mb-4">
                {content.twoWorlds.worldB.factProperties.map((prop, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 mt-1">•</span>
                    {prop}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 mb-2">{content.twoWorlds.worldB.discussion}</p>
              <ul className="space-y-1 mb-4">
                {content.twoWorlds.worldB.discussionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-green-800 font-semibold">
                {renderMarkdown(content.twoWorlds.worldB.conclusion)}
              </p>
            </div>
          </section>

          {/* What Changes Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.whatChanges.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {renderMarkdown(content.whatChanges.content)}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {content.whatChanges.comparison.map((item, idx) => (
                <div key={idx} className={`p-4 rounded-lg ${idx === 0 ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
                  <p className={`font-semibold ${idx === 0 ? 'text-red-800' : 'text-green-800'}`}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mb-2">{content.whatChanges.impacts}</p>
            <ul className="space-y-1">
              {content.whatChanges.impactList.map((impact, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#1A5187] mt-1">•</span>
                  {impact}
                </li>
              ))}
            </ul>
          </section>

          {/* Not About Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.notAbout.title}
            </h2>
            <p className="text-gray-700 mb-4">{content.notAbout.content}</p>
            <ul className="space-y-1 mb-4">
              {content.notAbout.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#1A5187] mt-1">•</span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 font-medium">
              {renderMarkdown(content.notAbout.conclusion)}
            </p>
          </section>

          {/* Why Matters Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.whyMatters.title}
            </h2>
            <div className="p-6 bg-[#1A5187]/10 border border-[#1A5187]/30 rounded-lg">
              <p className="text-gray-800">
                {renderMarkdown(content.whyMatters.content)}
              </p>
            </div>
          </section>

          {/* Relation to Horizon Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.relationToHorizon.title}
            </h2>
            <p className="text-gray-700">
              {renderMarkdown(content.relationToHorizon.content)}
            </p>
          </section>

          {/* Closing Note Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.closingNote.title}
            </h2>
            <p className="text-gray-700 mb-4">{content.closingNote.content}</p>
            <ul className="space-y-1 mb-4">
              {content.closingNote.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#1A5187] mt-1">•</span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 font-medium">
              {renderMarkdown(content.closingNote.conclusion)}
            </p>
          </section>

          {/* Dual CTA for different audiences */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#1A5187]/5 border border-[#1A5187]/20 rounded-lg">
              <p className="text-gray-600 mb-3">{content.cta?.forCRO?.text}</p>
              <Link
                href={content.cta?.forCRO?.href || '/executive-briefing'}
                className="inline-flex items-center gap-2 text-[#1A5187] font-semibold hover:underline"
              >
                {content.cta?.forCRO?.linkText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gray-600 mb-3">{content.cta?.forCTO?.text}</p>
              <Link
                href={content.cta?.forCTO?.href || '/foundations/snapshot'}
                className="inline-flex items-center gap-2 text-[#1A5187] font-semibold hover:underline"
              >
                {content.cta?.forCTO?.linkText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
            <Link
              href="/foundations/operational-reality"
              className="inline-flex items-center gap-2 text-[#1A5187] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {lang === 'en' ? 'Back to Operational Reality' : 'Retour à la Réalité Opérationnelle'}
            </Link>
            <Link
              href="/foundations"
              className="inline-flex items-center gap-2 text-[#1A5187] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {lang === 'en' ? 'Back to documentation hub' : 'Retour au hub de documentation'}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
