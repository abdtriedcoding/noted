import { toast } from 'sonner'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'
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
  const router = useRouter()
  const params = useParams()
  const { setOpen } = useSidebarStore()
  const { isLoaded, isSignedIn, user } = useUser()

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
    <Button
      onClick={handleRedirect}
      variant={active ? 'secondary' : 'ghost'}
      size={'sm'}
      className="group w-full cursor-auto items-center justify-start"
    >
      {documentIcon ? (
        <div className="mr-2 h-5 w-5">{documentIcon}</div>
      ) : (
        <File className="mr-2 h-5 w-5" />
      )}
      {label}
      <DropdownMenu>
        <DropdownMenuTrigger
          className="ml-auto opacity-0 group-hover:opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          <MoreHorizontal className="h-4 w-4" />
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
    </Button>
  )
}
