'use client'

import Sidebar from './sidebar'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSidebarStore } from '@/lib/useSidebarStore'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function NavigationMenu() {
  const { open, setOpen } = useSidebarStore()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="m-2" asChild>
        <Button className="inline-flex md:hidden" size="icon" variant="ghost">
          <Menu className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
