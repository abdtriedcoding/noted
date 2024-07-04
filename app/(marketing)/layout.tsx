import Navbar from './_components/navbar'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-5xl p-4">{children}</main>
    </>
  )
}
