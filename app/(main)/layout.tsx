import Sidebar from './_components/sidebar'
import NavigationMenu from './_components/navigation-menu'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="fixed left-0 top-0 hidden h-[100vh] w-72 border-r-2 md:block">
        <Sidebar />
      </aside>

      <main className="flex-1 overflow-y-auto md:ml-72">
        <NavigationMenu />
        {children}
      </main>
    </div>
  )
}
