import Balancer from 'react-wrap-balancer'
import Globe from '@/components/ui/globe'

export default function GlobeSection() {
  return (
    <section>
      <h2
        className="animate-fade-up text-center text-3xl font-extrabold tracking-tight opacity-0 sm:text-4xl md:text-5xl lg:text-6xl"
        style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
      >
        <Balancer>
          Noted is use{' '}
          <span className="relative bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text font-extrabold text-transparent">
            worldwide
          </span>
        </Balancer>
      </h2>
      <p
        className="animate-fade-up pt-4 text-center leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
        style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
      >
        <Balancer>
          Noted is all in one workspace application that allows for note making,
          project management, collaboration of teams and more :)
        </Balancer>
      </p>
      <Globe className="relative" />
    </section>
  )
}
