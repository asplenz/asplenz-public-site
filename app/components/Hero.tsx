type HeroProps = {
  dict: any
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="pt-16 md:pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#001F5C] mb-3 leading-snug">
          {dict.hero.headline}
          <span className="block mt-2 text-xl md:text-2xl font-normal">
            {dict.hero.subheadline}
          </span>
        </h1>


        <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-6 mt-8">
          {dict.hero.description}
        </p>

        <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 mb-4">
          {dict.hero.clarifier}
        </div>

        <p className="text-sm text-gray-600 italic mb-10">
          {dict.hero.microLine}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-[#001F5C] text-white font-medium rounded hover:bg-opacity-90 transition-all"
          >
            {dict.hero.primaryCTA}
          </a>
          <a
            href="#philosophy"
            className="px-8 py-3.5 border-2 border-[#001F5C] text-[#001F5C] font-medium rounded hover:bg-[#001F5C] hover:text-white transition-all"
          >
            {dict.hero.secondaryCTA}
          </a>
        </div>
      </div>
    </section>
  )
}
