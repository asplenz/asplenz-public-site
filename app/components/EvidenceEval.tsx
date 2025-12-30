type EvidenceEvalProps = {
  dict: any
}

export default function EvidenceEval({ dict }: EvidenceEvalProps) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#001F5C] mb-8">
          {dict.evidenceEval.title}
        </h2>

        <div className="space-y-6 text-gray-800">
          <p className="leading-relaxed">{dict.evidenceEval.paragraph1}</p>

          <p className="whitespace-pre-line leading-relaxed">
            {dict.evidenceEval.paragraph2}
          </p>

          <p className="whitespace-pre-line leading-relaxed">
            {dict.evidenceEval.paragraph3}
          </p>

          <p className="whitespace-pre-line leading-relaxed">
            {dict.evidenceEval.paragraph4}
          </p>

          <div className="mt-10 pt-8 border-t-2 border-[#001F5C]">
            <p className="text-2xl font-bold text-[#001F5C] text-center italic">
              {dict.evidenceEval.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
