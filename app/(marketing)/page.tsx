import Companies from '@/components/landing/companies'
import Hero from '@/components/landing/hero'
import HowItWorks from '@/components/landing/how-it-works'
import Navbar from '@/components/landing/navbar'
import OpenSource from '@/components/landing/open-source'
import Problems from '@/components/landing/problems'
import Solution from '@/components/landing/solution'
import Testimonials from '@/components/landing/testimonials'
import GridPattern from '@/components/ui/grid-pattern'

export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className="opacity-30 dark:opacity-10 [mask-image:linear-gradient(to bottom right, rgba(255,255,255,1), rgba(255,255,255,0.5), transparent)]"
      />
      <Navbar />
      <Hero />
      <Companies />
      <Problems />
      <Solution />
      <HowItWorks />
      <Testimonials />
      <OpenSource />
    </main>
  )
}
