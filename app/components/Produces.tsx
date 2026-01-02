type ProducesProps = {
  dict: any
}

export default function Produces({ dict }: ProducesProps) {
  return (
    <section className="py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#001F5C] mb-8">
          {dict.produces.title}
        </h2>

        <div className="space-y-6 text-gray-800">
          <p className="leading-relaxed">{dict.produces.paragraph1}</p>

          <p className="leading-relaxed">{dict.produces.paragraph2}</p>

          <ul className="list-disc list-inside space-y-2 pl-4">
            {dict.produces.list.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <p className="whitespace-pre-line leading-relaxed">
            {dict.produces.paragraph3}
          </p>

          <p className="whitespace-pre-line leading-relaxed">
            {dict.produces.paragraph4}
          </p>

          <p className="whitespace-pre-line leading-relaxed font-medium">
            {dict.produces.paragraph5}
          </p>
        </div>
      </div>
    </section>
  )
}
