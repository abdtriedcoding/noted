import Heroes from './_components/heroes'
import Heading from './_components/heading'
import Features from './_components/features'
import OpenSource from './_components/open-source'
import Testimonials from './_components/testimonials'

export default function MarketingPage() {
  return (
    <>
      <Heading />
      <Heroes />
      <Features />
      <Testimonials />
      <OpenSource />
    </>
  )
}
