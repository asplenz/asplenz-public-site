type ConsequenceProps = {
  dict: any
}

export default function Consequence({ dict }: ConsequenceProps) {
  return (
    <section className="py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#001F5C] mb-8">
          {dict.consequence.title}
        </h2>

        <div className="space-y-6 text-gray-800">
          <p className="leading-relaxed">{dict.consequence.paragraph1}</p>

          <ul className="list-disc list-inside space-y-2 pl-4">
            {dict.consequence.list.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <p className="whitespace-pre-line leading-relaxed">
            {dict.consequence.paragraph2}
          </p>
        </div>
      </div>
    </section>
  )
}
