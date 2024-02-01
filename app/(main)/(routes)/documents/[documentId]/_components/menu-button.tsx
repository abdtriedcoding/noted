'use client'

import { toast } from 'sonner'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'
import { MoreHorizontal, Trash } from 'lucide-react'
import { type Id } from '@/convex/_generated/dataModel'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

export default function MenuButton({ id }: { id: Id<'documents'> }) {
  const { user } = useUser()
  const router = useRouter()

  const archiveDocument = useMutation(api.documents.archiveDocument)

  const onArchiveNote = () => {
    const promise = archiveDocument({ id }).then(() =>
      router.push('/documents')
    )

    toast.promise(promise, {
      loading: 'Moving to trash...',
      success: 'Note moved to trash!',
      error: 'Failed to archive note.',
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        align="end"
        alignOffset={8}
        forceMount
      >
        <DropdownMenuItem onClick={onArchiveNote}>
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="p-2 text-xs">Last edited by: {user?.fullName}</div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
