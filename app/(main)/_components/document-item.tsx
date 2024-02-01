import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useParams, useRouter } from 'next/navigation'
import { type Id } from '@/convex/_generated/dataModel'
import { useSidebarStore } from '@/lib/useSidebarStore'
import { File, MoreHorizontal, Trash } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

interface ItemProps {
  id: Id<'documents'>
  label: string
  documentIcon?: string
}

export default function DocumentItem({ id, label, documentIcon }: ItemProps) {
  const { setOpen } = useSidebarStore()
  const { isLoaded, isSignedIn, user } = useUser()

  const router = useRouter()
  const params = useParams()

  const active = params.documentId === id

  const archiveDocument = useMutation(api.documents.archiveDocument)

  const onArchiveNote = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation()
    const promise = archiveDocument({ id }).then(() =>
      router.push('/documents')
    )

    toast.promise(promise, {
      loading: 'Moving to trash...',
      success: 'Note moved to trash!',
      error: 'Failed to archive note.',
    })
  }

  const handleRedirect = () => {
    router.push(`/documents/${id}`)
    setOpen(false)
  }

  return (
    <div
      onClick={handleRedirect}
      role="button"
      className={cn(
        'group flex w-full items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/5',
        active && 'bg-primary/5 text-primary'
      )}
    >
      {documentIcon ? (
        <div className="mr-2 shrink-0 text-[18px]">{documentIcon}</div>
      ) : (
        <File className="mr-2 h-[18px] w-[18px] shrink-0" />
      )}
      <span className="truncate">{label}</span>
      <DropdownMenu>
        <DropdownMenuTrigger onClick={(e) => e.stopPropagation()} asChild>
          <div
            role="button"
            className="ml-auto h-full rounded-sm opacity-0 hover:bg-neutral-300 group-hover:opacity-100 dark:hover:bg-neutral-600"
          >
            <MoreHorizontal className="h-4 w-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-60"
          align="start"
          side="right"
          forceMount
        >
          <DropdownMenuItem onClick={onArchiveNote}>
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {isLoaded && isSignedIn && user && (
            <div className="p-2 text-xs">Last edited by: {user.fullName}</div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
