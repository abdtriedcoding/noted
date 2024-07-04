import Image from 'next/image'
import { BorderBeam } from '@/components/ui/border-beam'

export default function Heroes() {
  return (
    <div className="relative w-full rounded-xl border-2 p-2">
      <Image
        width={1400}
        height={720}
        src="/herosection-image.png"
        priority
        fetchPriority="high"
        loading="eager"
        alt="Hero Image"
        draggable={false}
        className="animate-fade-up rounded-xl object-contain opacity-0 dark:hidden"
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
      />
      <Image
        width={1400}
        height={720}
        src="/herosection-dark-image.png"
        priority
        fetchPriority="high"
        loading="eager"
        alt="Hero Image"
        draggable={false}
        className="hidden animate-fade-up rounded-xl object-contain opacity-0 dark:block"
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
      />

      <BorderBeam size={150} duration={12} delay={9} borderWidth={2} />
    </div>
  )
}
