'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src="/not-found.png"
        height="500"
        width="500"
        alt="Error"
        className="animate-fade-up opacity-0"
        style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
      />
      <h2
        className="animate-fade-up text-xl font-medium opacity-0 pb-2"
        style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
      >
        Page not found!!
      </h2>
      <Button
        className="animate-fade-up opacity-0"
        asChild
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
      >
        <Link href="/">Go back</Link>
      </Button>
    </div>
  )
}
