'use client'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import UserButton from '@/components/auth/user-button'
import Spinner from '@/components/spinner'
import ThemeToggle from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

import { useCurrentUser } from '@/hooks/use-current-user'
import { useScrollTop } from '@/hooks/use-scroll-top'

export default function Navbar() {
  const scrolled = useScrollTop()
  const { user, isLoading } = useCurrentUser()

  return (
    <div
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex h-16 w-full items-center bg-background/60 px-4 backdrop-blur-xl transition-all',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className="ml-auto flex items-center justify-end gap-x-2">
        {isLoading ? (
          <Spinner size="lg" />
        ) : user ? (
          <UserButton user={user} />
        ) : (
          <Button asChild>
            <Link href={'/auth'}>Get Noted Free</Link>
          </Button>
        )}
        <ThemeToggle />
      </div>
    </div>
  )
}

export function Logo() {
  return (
    <Link href={'/'} className="flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        height="30"
        width="30"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        height="30"
        width="30"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className="font-semibold">Noted</p>
    </Link>
  )
}
