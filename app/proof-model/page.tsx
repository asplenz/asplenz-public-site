'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function ProofModelPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.proofModel

  if (!content) return null

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {content.title}
          </h1>
          <p className="text-xl text-[#1A5187] font-medium mb-12">
            {content.subtitle}
          </p>

          {/* Section 1: What Horizon Is */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.whatIs.title}</h2>
            <p className="text-gray-700 mb-4 font-semibold">{content.whatIs.definition}</p>
            <p className="text-gray-700 mb-4">{content.whatIs.description}</p>
            <p className="text-gray-700 mb-4">{content.whatIs.purpose}</p>
            <p className="text-gray-700 mb-2">{content.whatIs.designedFor}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {content.whatIs.situations.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Section 2: What Horizon Is Not */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.whatIsNot.title}</h2>
            <p className="text-gray-700 mb-4 font-semibold">{content.whatIsNot.intro}</p>
            <p className="text-gray-700 mb-2">{content.whatIsNot.notLabel}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              {content.whatIsNot.notList.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700 mb-2">{content.whatIsNot.doesNotLabel}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              {content.whatIsNot.doesNotList.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700 italic">{content.whatIsNot.conclusion}</p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Section 3: Append-Only Proof Model */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.proofModelSection.title}</h2>
            <p className="text-gray-700 mb-6">{content.proofModelSection.intro}</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">{content.proofModelSection.stream.title}</h3>
            <p className="text-gray-700 mb-2">{content.proofModelSection.stream.description}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
              {content.proofModelSection.stream.points.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">{content.proofModelSection.fact.title}</h3>
            <p className="text-gray-700 mb-2">{content.proofModelSection.fact.description}</p>
            <p className="text-gray-700 mb-2">{content.proofModelSection.fact.includesLabel}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              {content.proofModelSection.fact.includes.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700 mb-2">{content.proofModelSection.fact.areLabel}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              {content.proofModelSection.fact.are.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700">{content.proofModelSection.fact.conclusion}</p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Section 4: Time Semantics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.timeSemantics.title}</h2>
            <p className="text-gray-700 mb-4">{content.timeSemantics.intro}</p>
            <p className="text-gray-700 mb-2">{content.timeSemantics.representsLabel}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              {content.timeSemantics.represents.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700 mb-2">{content.timeSemantics.doesNotAssertLabel}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              {content.timeSemantics.doesNotAssert.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700 italic">{content.timeSemantics.conclusion}</p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Section 5: Neutrality */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.neutrality.title}</h2>
            <p className="text-gray-700 mb-4">{content.neutrality.intro}</p>
            <p className="text-gray-700 mb-2">{content.neutrality.doesNotInferLabel}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              {content.neutrality.doesNotInfer.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700 mb-4">{content.neutrality.records}</p>
            <p className="text-gray-700 mb-4">{content.neutrality.interpretation}</p>
            <p className="text-gray-700 mb-2">{content.neutrality.ensuresLabel}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {content.neutrality.ensures.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Section 6: What Horizon Proves */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.whatProves.title}</h2>
            <p className="text-gray-700 mb-2">{content.whatProves.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              {content.whatProves.proves.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700 mb-2">{content.whatProves.proofIsLabel}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {content.whatProves.proofIs.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Section 7: What Horizon Never Proves */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.whatNeverProves.title}</h2>
            <p className="text-gray-700 mb-2">{content.whatNeverProves.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              {content.whatNeverProves.neverProves.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700">{content.whatNeverProves.conclusion}</p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Section 8: Positioning Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.positioning.title}</h2>
            <p className="text-gray-700 font-semibold mb-4">{content.positioning.blackBox}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              {content.positioning.doesNot.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700">{content.positioning.guarantee}</p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Canonical Definition */}
          <section className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{content.canonical.title}</h3>
            <blockquote className="border-l-4 border-[#1A5187] pl-4 text-gray-700 italic">
              {content.canonical.definition}
            </blockquote>
          </section>

          {/* Document status */}
          <p className="text-sm text-gray-500 text-center">
            {content.status}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
