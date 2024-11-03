'use client'

import { Menu } from 'lucide-react'

import { useSidebarStore } from '@/lib/use-sidebar-store'

import DocumentSidebar from '@/components/document/sidebar/document-sidebar'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import WorkspaceSidebar from '@/components/workspace/workspace-sidebar'

export default function MobileSidebar() {
  const { open, setOpen } = useSidebarStore()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden m-2">
          <Menu className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
        </Button>
      </SheetTrigger>
      <SheetContent
        onOpenAutoFocus={(event) => event.preventDefault()}
        side={'left'}
        className="p-0 flex gap-0"
      >
        <SheetTitle className="hidden">Menu</SheetTitle>
        <div className="w-[72px]">
          <WorkspaceSidebar />
        </div>
        <DocumentSidebar />
      </SheetContent>
    </Sheet>
  )
}
