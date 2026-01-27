'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import PageNav from '../components/PageNav'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function ProofSemanticPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.proofSemantic

  if (!content) return null

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {content.title}
          </h1>
          <p className="text-xl text-[#1A5187] font-medium mb-4">
            {content.subtitle}
          </p>
          <p className="text-sm text-gray-500 mb-2">{content.status}</p>
          <p className="text-sm text-gray-500 mb-12">{content.appliesTo}</p>

          {content.sections.map((section: any, idx: number) => (
            <section key={idx} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>

              {section.content && (
                <p className="text-gray-700 mb-4">{section.content}</p>
              )}

              {section.existsTo && (
                <>
                  <p className="text-gray-700 mb-2">{section.existsTo}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.purposes?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.nature && (
                <p className="text-gray-700 mb-4">{section.nature}</p>
              )}

              {section.boundary && (
                <>
                  <p className="text-gray-700 mb-2">{section.boundary}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.parties?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.proves && (
                <>
                  <p className="text-gray-700 mb-2">{section.proves}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.provesList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.doesNotProve && typeof section.doesNotProve === 'string' && !section.doesNotProveList && (
                <p className="text-gray-700 mb-4">{section.doesNotProve}</p>
              )}

              {section.proofIs && (
                <>
                  <p className="text-gray-700 mb-2">{section.proofIs}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.proofProperties?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.doesNotProveList && (
                <>
                  {section.doesNotProve && (
                    <p className="text-gray-700 mb-2">{section.doesNotProve}</p>
                  )}
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.doesNotProveList.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.intro && (
                <p className="text-gray-700 mb-4">{section.intro}</p>
              )}

              {section.represents && (
                <>
                  <p className="text-gray-700 mb-2">{section.represents}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.representsList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.doesNotAssert && (
                <>
                  <p className="text-gray-700 mb-2">{section.doesNotAssert}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.doesNotAssertList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.clientTimestamps && (
                <>
                  <p className="text-gray-700 mb-2">{section.clientTimestamps}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.clientTimestampsList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.horizonDoes && (
                <>
                  <p className="text-gray-700 mb-2">{section.horizonDoes}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.horizonDoesList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.responsibility && (
                <p className="text-gray-700 mb-4 italic">{section.responsibility}</p>
              )}

              {section.ifNoFact && (
                <>
                  <p className="text-gray-700 mb-2">{section.ifNoFact}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.ifNoFactList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.usage && (
                <p className="text-gray-700 mb-4">{section.usage}</p>
              )}

              {section.horizonItself && (
                <>
                  <p className="text-gray-700 mb-2">{section.horizonItself}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.horizonItselfList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.doesNotConstitute && (
                <>
                  <p className="text-gray-700 mb-2">{section.doesNotConstitute}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.doesNotConstituteList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.prevents && (
                <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                  {section.prevents.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.conclusion && (
                <p className="text-gray-700 font-medium">{section.conclusion}</p>
              )}

              {idx < content.sections.length - 1 && (
                <hr className="border-gray-200 mt-8" />
              )}
            </section>
          ))}

          {/* Final Note */}
          <div className="bg-gray-50 rounded-lg p-6 mt-8">
            <p className="text-gray-700 italic">
              <strong>Note:</strong> {content.finalNote}
            </p>
          </div>

          <PageNav current="/proof-semantic" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
