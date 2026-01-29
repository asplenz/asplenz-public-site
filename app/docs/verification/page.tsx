'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageNav from '../../components/PageNav'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function VerificationPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.verification

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
          <p className="text-sm text-gray-500 mb-2">{content.audience}</p>
          <p className="text-sm text-gray-500 mb-12">{content.appliesTo}</p>

          {content.sections.map((section: any, idx: number) => (
            <section key={idx} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>

              {section.content && (
                <p className="text-gray-700 mb-4">{section.content}</p>
              )}

              {section.defines && (
                <>
                  <p className="text-gray-700 mb-2">{section.defines}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.definesList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.packagesList && !section.defines && (
                <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                  {section.packagesList.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.intro && !section.subsections && (
                <p className="text-gray-700 mb-4">{section.intro}</p>
              )}

              {section.minimumList && (
                <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                  {section.minimumList.map((item: string, i: number) => (
                    <li key={i}><code className="bg-gray-100 px-1 rounded text-sm">{item}</code></li>
                  ))}
                </ul>
              )}

              {section.optional && (
                <>
                  <p className="text-gray-700 mb-2">{section.optional}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.optionalList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.subsections && (
                <>
                  <p className="text-gray-700 mb-6">{section.intro}</p>
                  {section.subsections.map((sub: any, subIdx: number) => (
                    <div key={subIdx} className="mb-6 pl-4 border-l-2 border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{sub.title}</h3>

                      {sub.content && (
                        <p className="text-gray-700 mb-2">{sub.content}</p>
                      )}

                      {sub.intro && (
                        <p className="text-gray-700 mb-2">{sub.intro}</p>
                      )}

                      {sub.steps && (
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-2">
                          {sub.steps.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}

                      {sub.establishes && (
                        <>
                          <p className="text-gray-700 mb-2">{sub.establishes}</p>
                          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-2">
                            {sub.establishesList?.map((item: string, i: number) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {sub.confirms && (
                        <>
                          <p className="text-gray-700 mb-2">{sub.confirms}</p>
                          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-2">
                            {sub.confirmsList?.map((item: string, i: number) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {sub.checksList && (
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-2">
                          {sub.checksList.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}

                      {sub.conclusion && (
                        <p className="text-gray-700 italic">{sub.conclusion}</p>
                      )}
                    </div>
                  ))}
                </>
              )}

              {section.provesList && (
                <>
                  {section.intro && !section.subsections && (
                    <p className="text-gray-700 mb-2">{section.intro}</p>
                  )}
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.provesList.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.doesNotProveList && (
                <>
                  {section.intro && !section.provesList && (
                    <p className="text-gray-700 mb-2">{section.intro}</p>
                  )}
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.doesNotProveList.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.performedBy && (
                <>
                  {section.intro && !section.provesList && !section.doesNotProveList && (
                    <p className="text-gray-700 mb-2">{section.intro}</p>
                  )}
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.performedBy.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.noAccess && (
                <>
                  <p className="text-gray-700 mb-2">{section.noAccess}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.noAccessList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.absence && (
                <>
                  {section.intro && !section.performedBy && (
                    <p className="text-gray-700 mb-2">{section.intro}</p>
                  )}
                  <p className="text-gray-700 mb-2">{section.absence}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.absenceList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.assumes && (
                <>
                  <p className="text-gray-700 mb-2">{section.assumes}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.assumesList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.doesNot && (
                <>
                  <p className="text-gray-700 mb-2">{section.doesNot}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.doesNotList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.bundleIs && (
                <>
                  {section.intro && !section.assumes && (
                    <p className="text-gray-700 mb-2">{section.intro}</p>
                  )}
                  <p className="text-gray-700 mb-2">{section.bundleIs}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                    {section.bundleIsList?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {section.conclusion && (
                <p className="text-gray-700 font-medium">{section.conclusion}</p>
              )}

              {idx < content.sections.length - 1 && (
                <hr className="border-gray-200 mt-8" />
              )}
            </section>
          ))}

          <PageNav current="/docs/verification" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
