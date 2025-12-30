type ProblemProps = {
  dict: any
}

export default function Problem({ dict }: ProblemProps) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#001F5C] mb-3">
          {dict.problem.title}
        </h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-8">
          {dict.problem.subtitle}
        </h3>

        <div className="space-y-6 text-gray-800">
          <p className="whitespace-pre-line leading-relaxed">
            {dict.problem.paragraph1}
          </p>

          <p className="whitespace-pre-line leading-relaxed font-medium">
            {dict.problem.paragraph2}
          </p>

          <p className="leading-relaxed">{dict.problem.paragraph3}</p>

          <ul className="list-disc list-inside space-y-2 pl-4">
            {dict.problem.list1.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <p className="whitespace-pre-line leading-relaxed">
            {dict.problem.paragraph4}
          </p>
        </div>
      </div>
    </section>
  )
}
