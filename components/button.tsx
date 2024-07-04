import Link from 'next/link'
import { cn } from '@/lib/utils'
import { type CSSProperties } from 'react'
import { type LucideIcon } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'relative duration-1000 gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary-dark',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive-dark',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-dark',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline cursor-pointer',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ShinyLinkButtonProps extends VariantProps<typeof buttonVariants> {
  label: string
  href: string
  IconLeft?: LucideIcon
  IconRight?: LucideIcon
  shiny?: boolean
  className?: string
  style?: CSSProperties
}

const ShinnyLinkButton: React.FC<ShinyLinkButtonProps> = ({
  label,
  href,
  IconLeft,
  IconRight,
  shiny,
  style,
  className,
  variant,
  size,
}) => {
  const buttonClass = buttonVariants({ variant, size, className })

  return (
    <Link
      href={href}
      style={style}
      className={cn('group relative', buttonClass, className)}
    >
      <div
        aria-hidden
        className="absolute inset-0.5 rounded-lg bg-white opacity-0 blur-2xl transition duration-300 group-hover:opacity-30"
      />
      {IconLeft && <IconLeft className="h-4 w-4" />}
      {label}
      {IconRight && <IconRight className="h-4 w-4" />}
      {shiny && (
        <div
          aria-hidden
          className="group-hover:animation-delay-[.2s] pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.7),75%,transparent)] bg-[length:200%_100%] opacity-0 group-hover:animate-button-shine"
        />
      )}
    </Link>
  )
}

ShinnyLinkButton.displayName = 'ShinnyButton'

export { ShinnyLinkButton }
