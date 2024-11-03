import Image from 'next/image'

import { COMPANIES } from '@/lib/constants'

import Marquee from '@/components/ui/marquee'

export default function Companies() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <h3 className="text-center text-lg font-semibold text-gray-500">
        Empowering productivity and collaboration for everyone—individuals,
        students, and teams alike.
      </h3>
      <div className="relative mt-6">
        <Marquee className="max-w-full [--duration:40s]">
          {COMPANIES.map((logo, idx) => (
            <Image
              key={idx}
              width={112}
              height={40}
              src={`https://cdn.magicui.design/companies/${logo}.svg`}
              className="h-10 w-28 dark:brightness-0 dark:invert grayscale opacity-30"
              alt={logo}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  )
}
