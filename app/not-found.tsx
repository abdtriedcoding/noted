'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <Image
        src="/error.svg"
        height="300"
        width="300"
        alt="Error"
        className="animate-fade-up opacity-0 dark:invert"
        style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
      />
      <h2
        className="animate-fade-up text-xl font-medium opacity-0"
        style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
      >
        Page not found!!
      </h2>
      <Button
        className="animate-fade-up opacity-0"
        asChild
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
      >
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  )
}
