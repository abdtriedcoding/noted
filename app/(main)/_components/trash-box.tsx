'use client'

import { toast } from 'sonner'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'
import { Search, Trash, Undo } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { useMutation, useQuery } from 'convex/react'
import { useParams, useRouter } from 'next/navigation'
import { type Id } from '@/convex/_generated/dataModel'
import { ScrollArea } from '@/components/ui/scroll-area'
import ConfirmModal from '@/components/modals/confirm-modal'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export default function TrashBox() {
  const router = useRouter()
  const params = useParams()
  const [search, setSearch] = useState('')

  const documents = useQuery(api.documents.getTrashDocuments)
  const removeDocument = useMutation(api.documents.removeDocument)
  const restoreDocument = useMutation(api.documents.restoreDocument)

  const filteredDocuments = documents?.filter((document) =>
    document.title.toLowerCase().includes(search.toLowerCase())
  )

  if (documents === undefined) {
    return <Skeleton className="w-full px-4 py-4" />
  }

  const onRemoveNote = (id: Id<'documents'>) => {
    const promise = removeDocument({ id })

    toast.promise(promise, {
      loading: 'Deleting note...',
      success: 'Note deleted!',
      error: ' Failed to delete note.',
    })

    if (params.documentId === id) {
      router.push('/documents')
    }
  }

  const onRestoreNote = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: Id<'documents'>
  ) => {
    event.stopPropagation()
    const promise = restoreDocument({ id })

    toast.promise(promise, {
      loading: 'Restoring note...',
      success: 'Note restored!',
      error: ' Failed to restore note.',
    })
  }

  return (
    <Popover>
      <PopoverTrigger asChild className="w-full">
        <Button variant={'ghost'} size={'sm'} className="w-full justify-start">
          <Trash className="mr-2 h-5 w-5" />
          Trash
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0">
        <div className="flex items-center gap-x-1 p-2">
          <Search className="h-4 w-4" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-7 bg-secondary px-2 focus-visible:ring-transparent"
            placeholder="Filter by note title..."
          />
        </div>
        <ScrollArea className="h-96">
          <div className="mr-2 space-y-1 p-2">
            <p className="hidden pb-2 text-center text-xs last:block">
              No documents found.
            </p>
            {filteredDocuments?.map((document) => (
              <div
                key={document._id}
                onClick={() => router.push(`/documents/${document._id}`)}
                role="button"
                className="flex w-full items-center justify-between rounded-sm text-sm text-primary hover:bg-primary/5"
              >
                <span className="truncate pl-2">{document.title}</span>
                <div className="flex items-center">
                  <div
                    role="button"
                    onClick={(e) => onRestoreNote(e, document._id)}
                    className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  >
                    <Undo className="h-4 w-4" />
                  </div>
                  <ConfirmModal onConfirm={() => onRemoveNote(document._id)}>
                    <div
                      role="button"
                      className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                    >
                      <Trash className="h-4 w-4" />
                    </div>
                  </ConfirmModal>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}
