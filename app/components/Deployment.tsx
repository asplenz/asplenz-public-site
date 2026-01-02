type DeploymentProps = {
  dict: any
}

export default function Deployment({ dict }: DeploymentProps) {
  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#001F5C] mb-8">
          {dict.deployment.title}
        </h2>

        <div className="space-y-6 text-gray-800">
          <p className="whitespace-pre-line leading-relaxed">
            {dict.deployment.paragraph1}
          </p>

          <ul className="list-disc list-inside space-y-2 pl-4">
            {dict.deployment.list.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <p className="whitespace-pre-line leading-relaxed">
            {dict.deployment.paragraph2}
          </p>

          <p className="whitespace-pre-line leading-relaxed">
            {dict.deployment.paragraph3}
          </p>
        </div>
      </div>
    </section>
  )
}
