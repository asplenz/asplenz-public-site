import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CategoryFraming from './components/CategoryFraming'
import Problem from './components/Problem'
import HowHorizonSeals from './components/HowHorizonSeals'
import PostIncidentTimeline from './components/PostIncidentTimeline'
import HowHorizonWorks from './components/HowHorizonWorks'
import PostIncident from './components/PostIncident'
import WhyCISOs from './components/WhyCISOs'
import WhoElse from './components/WhoElse'
import WhatHorizonIsNot from './components/WhatHorizonIsNot'
import Signature from './components/Signature'
import FinalCTA from './components/FinalCTA'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <CategoryFraming />
        <Problem />
        <HowHorizonSeals />
        <PostIncidentTimeline />
        <HowHorizonWorks />
        <PostIncident />
        <WhyCISOs />
        <WhoElse />
        <WhatHorizonIsNot />
        <Signature />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
