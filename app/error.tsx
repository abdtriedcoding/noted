'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    toast.error('Something went wrong')
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-2">
      <h2
        className="animate-fade-up text-xl font-medium opacity-0"
        style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
      >
        Something went wrong!
      </h2>
      <Button
        className="animate-fade-up opacity-0"
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        onClick={() => reset()}
      >
        Try again
      </Button>
    </div>
  )
}
