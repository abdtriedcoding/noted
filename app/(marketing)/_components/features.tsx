import Balancer from 'react-wrap-balancer'
import FeatureCardGrid from './feature-card-grid'

export default function Features() {
  return (
    <section className="w-full space-y-6 py-10">
      <h1
        className="animate-fade-up text-center text-3xl font-extrabold tracking-tight opacity-0 sm:text-4xl md:text-5xl lg:text-6xl"
        style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
      >
        <Balancer>
          Keep track of your{' '}
          <span className="relative bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text font-extrabold text-transparent">
            meetings all in one place
          </span>
        </Balancer>
      </h1>
      <p
        className="animate-fade-up text-center leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
        style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
      >
        <Balancer>
          Capture your ideas, thoughts, and meeting notes in a structured and
          organized manner.
        </Balancer>
      </p>
      <div
        className="animate-fade-up opacity-0"
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
      >
        <FeatureCardGrid />
      </div>
    </section>
  )
}
