import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import WhatHorizonRecords from './components/WhatHorizonRecords'
import Problem from './components/Problem'
import HorizonDoesNot from './components/HorizonDoesNot'
import WhatThisEnables from './components/WhatThisEnables'
import Foundations from './components/Foundations'
import ContactCTA from './components/ContactCTA'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <WhatHorizonRecords />
        <Problem />
        <HorizonDoesNot />
        <WhatThisEnables />
        <Foundations />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  )
}
