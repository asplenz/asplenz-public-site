type WhenProps = {
  dict: any
}

export default function When({ dict }: WhenProps) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#001F5C] mb-8">
          {dict.when.title}
        </h2>

        <div className="space-y-6 text-gray-800">
          <p className="whitespace-pre-line leading-relaxed">
            {dict.when.paragraph1}
          </p>

          <p className="leading-relaxed">{dict.when.paragraph2}</p>

          <ul className="list-disc list-inside space-y-2 pl-4">
            {dict.when.list.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <p className="leading-relaxed font-medium">{dict.when.paragraph3}</p>
        </div>
      </div>
    </section>
  )
}
