import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Impact from './components/Impact'
import Bridge from './components/Bridge'
import FAQ from './components/FAQ'
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
        <Bridge />
        <FAQ />
        <CTA />
      </main>

      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <p>&copy; 2025 Horizon by Asplenz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
