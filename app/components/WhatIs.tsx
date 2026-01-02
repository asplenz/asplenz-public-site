type WhatIsProps = {
  dict: any
}

export default function WhatIs({ dict }: WhatIsProps) {
  return (
    <section className="py-6 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#001F5C] mb-8">
          {dict.whatIs.title}
        </h2>

        <div className="space-y-6 text-gray-800">
          <p className="whitespace-pre-line leading-relaxed">
            {dict.whatIs.paragraph1}
          </p>

          <p className="whitespace-pre-line leading-relaxed">
            {dict.whatIs.paragraph2}
          </p>
        </div>
      </div>
    </section>
  )
}
