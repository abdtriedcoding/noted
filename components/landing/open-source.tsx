import { Star } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import Section from '@/components/landing/section'
import { buttonVariants } from '@/components/ui/button'

export default function OpenSource() {
  return (
    <Section
      id="cta"
      title="Proudly Open Source"
      subtitle="Noted is an open source software.The
         code is available on github."
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col items-center justify-center pt-4">
        <Link
          href="https://github.com/abdtriedcoding/noted"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'text-background flex gap-2 group'
          )}
        >
          <Star className="h-5 w-5 transition-all duration-300 group-hover:text-yellow-300 group-hover:fill-yellow-300" />
          Star us on GitHub
        </Link>
      </div>
    </Section>
  )
}
