'use client'

import Image from 'next/image'
import { toast } from 'sonner'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    toast.error(error.message)
  }, [error])

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
        Something went wrong!
      </h2>
      <Button
        className="animate-fade-up opacity-0"
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}
