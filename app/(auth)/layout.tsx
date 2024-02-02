import { Logo } from '@/components/landing/navbar'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex h-16 w-full items-center bg-background/60 px-4 backdrop-blur-xl transition-all border-b shadow-sm">
        <Logo />
      </div>
      <main className="p-4 pt-20 w-full min-h-screen flex items-center justify-center">
        {children}
      </main>
    </>
  )
}
