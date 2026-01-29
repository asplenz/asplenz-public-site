import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Problem from './components/Problem'
import WhatHorizonRecords from './components/WhatHorizonRecords'
import HorizonDoesNot from './components/HorizonDoesNot'
import WhatThisEnables from './components/WhatThisEnables'
import Perspectives from './components/Perspectives'
import Foundations from './components/Foundations'
import ContactCTA from './components/ContactCTA'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <Problem />
        <WhatHorizonRecords />
        <HorizonDoesNot />
        <WhatThisEnables />
        <Perspectives />
        <Foundations />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  )
}
