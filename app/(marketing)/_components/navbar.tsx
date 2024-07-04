'use client'

import Logo from './logo'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/components/theme-toggle'
import { useScrollTop } from '@/hooks/use-scroll-top'
import LoginAndProfileButton from './login&profile-button'

export default function Navbar() {
  const scrolled = useScrollTop()

  return (
    <div
      className={cn(
        'fixed z-50 flex w-full items-center bg-background p-4',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className="ml-auto flex items-center justify-end gap-x-2">
        <LoginAndProfileButton />
        <ThemeToggle />
      </div>
    </div>
  )
}
