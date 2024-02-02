import { useMutation } from 'convex/react'
import { MoreHorizontal, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { api } from '@/convex/_generated/api'
import { type Id } from '@/convex/_generated/dataModel'
import { useCurrentUser } from '@/hooks/use-current-user'

export default function MenuButton({
  id,
  workspaceId,
}: {
  id: Id<'documents'>
  workspaceId: Id<'workspaces'>
}) {
  const router = useRouter()
  const { user } = useCurrentUser()

  const archiveDocument = useMutation(api.documents.archiveDocument)

  const handleArchiveNote = () => {
    const promise = archiveDocument({ id, workspaceId })

    toast.promise(promise, {
      loading: 'Moving to trash...',
      success: 'Document moved to trash',
      error: 'Failed to archive document',
    })
    router.push(`/workspace/${workspaceId}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="secondary">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        align="end"
        alignOffset={8}
        forceMount
      >
        <DropdownMenuItem onClick={handleArchiveNote}>
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="p-2 text-xs">Last edited by: {user?.name}</div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
