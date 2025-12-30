type PhilosophyProps = {
  dict: any
}

export default function Philosophy({ dict }: PhilosophyProps) {
  return (
    <section id="philosophy" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#001F5C] mb-8">
          {dict.philosophy.title}
        </h2>

        <div className="space-y-8 text-gray-800">
          <p className="leading-relaxed">{dict.philosophy.paragraph1}</p>

          <div className="py-10 text-center">
            <p className="text-3xl font-bold text-[#001F5C] italic">
              {dict.philosophy.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
