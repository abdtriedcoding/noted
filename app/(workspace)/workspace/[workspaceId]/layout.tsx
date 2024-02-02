import DocumentSidebar from '@/components/document/sidebar/document-sidebar'
import MobileSidebar from '@/components/document/sidebar/mobile-sidebar'
import WorkspaceSidebar from '@/components/workspace/workspace-sidebar'

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="w-[72px] min-h-screen hidden md:flex fixed inset-y-0 z-40">
        <WorkspaceSidebar />
      </div>
      <div className="w-72 min-h-screen hidden md:flex fixed inset-y-0 z-30 pl-[72px]">
        <DocumentSidebar />
      </div>
      <main className="md:pl-[288px] min-h-screen bg-white dark:bg-[#36393f]">
        <MobileSidebar />
        {children}
      </main>
    </div>
  )
}
