type RelationshipProps = {
  dict: any
}

export default function Relationship({ dict }: RelationshipProps) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#001F5C] mb-8">
          {dict.relationship.title}
        </h2>

        <div className="space-y-6 text-gray-800">
          <p className="whitespace-pre-line leading-relaxed">
            {dict.relationship.paragraph1}
          </p>

          <p className="whitespace-pre-line leading-relaxed">
            {dict.relationship.paragraph2}
          </p>

          <div className="mt-8 space-y-2">
            <p className="text-lg font-semibold text-[#001F5C]">
              {dict.relationship.tagline1}
            </p>
            <p className="text-lg font-semibold text-[#001F5C]">
              {dict.relationship.tagline2}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
