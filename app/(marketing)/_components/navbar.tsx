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
        'fixed inset-x-0 top-0 z-50 flex h-16 w-full items-center bg-background/60 px-4 backdrop-blur-xl transition-all',
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
