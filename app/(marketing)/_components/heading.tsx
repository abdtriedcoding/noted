import Link from 'next/link'
import { cn } from '@/lib/utils'
import Balancer from 'react-wrap-balancer'
import { ChevronRight, LogIn } from 'lucide-react'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { Spotlight } from '@/components/ui/spotlight'
import { ShinnyLinkButton } from '@/components/button'
import AnimatedGradientText from '@/components/ui/animated-gradient-text'

export default function Heading() {
  return (
    <div className="relative flex h-[40rem] w-full items-center justify-center overflow-hidden rounded-md antialiased bg-grid-white/[0.02]">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 w-full space-y-6 pt-20 text-center md:pt-0">
        <Link
          href="https://twitter.com/abdtriedcoding"
          className="mx-auto flex w-fit animate-fade-up items-center justify-center opacity-0"
          style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
        >
          <AnimatedGradientText>
            🎉&nbsp;
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text font-semibold text-transparent`
              )}
            >
              Introducing on Twitter
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </Link>
        <h1
          className="animate-fade-up text-4xl font-extrabold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
        >
          <Balancer>
            All-In-One{' '}
            <span className="relative bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text font-extrabold text-transparent">
              Collaboration and Productivity{' '}
            </span>
            Platform
          </Balancer>
        </h1>
        <p
          className="animate-fade-up leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          <Balancer>
            Noted is the connected workspace where better, faster work happens.
            Capture your ideas, thoughts, and meeting notes in a structured and
            organized manner.
          </Balancer>
        </p>
        <SignedOut>
          <ShinnyLinkButton
            label="Get started"
            href="/sign-in"
            shiny
            size={'lg'}
            IconLeft={LogIn}
            className="animate-fade-up rounded-lg opacity-0"
            style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
          />
        </SignedOut>
        <SignedIn>
          <ShinnyLinkButton
            label="Enter Noted"
            href="/documents"
            shiny
            size={'lg'}
            IconRight={ChevronRight}
            className="animate-fade-up rounded-lg opacity-0"
            style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
          />
        </SignedIn>
      </div>
    </div>
  )
}
