type CTAProps = {
  dict: any
}

export default function CTA({ dict }: CTAProps) {
  return (
    <section id="contact" className="py-8 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#001F5C] mb-8">
          {dict.cta.title}
        </h2>

        <p className="text-lg text-gray-800 mb-10 leading-relaxed">
          {dict.cta.paragraph1}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@asplenz.com?subject=Requesting a briefing on Horizon"
            className="px-8 py-3.5 bg-[#001F5C] text-white font-medium rounded hover:bg-opacity-90 transition-all"
          >
            {dict.cta.primaryCTA}
          </a>
          <a
            href="mailto:contact@asplenz.com?subject=Audit and Regulatory Use Cases"
            className="px-8 py-3.5 border-2 border-[#001F5C] text-[#001F5C] font-medium rounded hover:bg-[#001F5C] hover:text-white transition-all"
          >
            {dict.cta.secondaryCTA}
          </a>
        </div>
      </div>
    </section>
  )
}
