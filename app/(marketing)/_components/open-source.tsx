import { Star } from 'lucide-react'
import { ShinnyLinkButton } from '@/components/button'

export default function OpenSource() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-muted py-8 text-center md:py-12 xl:py-16">
      <h2
        className="animate-fade-up text-3xl font-semibold opacity-0 drop-shadow-xl dark:bg-gradient-to-br dark:from-neutral-200 dark:to-neutral-600 dark:bg-clip-text dark:text-transparent sm:text-3xl md:text-6xl"
        style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
      >
        Proudly Open Source
      </h2>
      <p
        className="max-w-[85%] animate-fade-up text-muted-foreground opacity-0 sm:text-lg"
        style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
      >
        Noted is open source and powered by open source software. <br /> The
        code is available on{' '}
        <a
          href="https://github.com/abdtriedcoding/noted"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 duration-200 hover:text-foreground"
        >
          GitHub
        </a>
        .
      </p>
      <ShinnyLinkButton
        label="Star us on GitHub"
        href="https://github.com/abdtriedcoding/noted"
        shiny
        size={'lg'}
        IconLeft={Star}
        className="animate-fade-up rounded-lg opacity-0"
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
      />
    </section>
  )
}
