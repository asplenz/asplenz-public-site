import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Impact from './components/Impact'
import Safeguards from './components/Safeguards'
import FAQTeaser from './components/FAQTeaser'
import CTA from './components/CTA'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Impact />
        <Safeguards />
        <FAQTeaser />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
