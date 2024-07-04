'use client'

import { toast } from 'sonner'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'
import { PlusCircleIcon } from 'lucide-react'
import { api } from '@/convex/_generated/api'

export default function NewPageButton() {
  const router = useRouter()
  const createDocument = useMutation(api.documents.createDocument)

  const onCreateNote = () => {
    const promise = createDocument().then((documentId) =>
      router.push(`/documents/${documentId}`)
    )

    toast.promise(promise, {
      loading: 'Creating a new note...',
      success: 'New note created!',
      error: 'Failed to create a new note.',
    })
  }

  return (
    <div
      onClick={onCreateNote}
      role="button"
      className="flex w-full items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/5"
    >
      <PlusCircleIcon className="mr-2 h-[18px] w-[18px] shrink-0" />
      <span className="truncate">New Page</span>
    </div>
  )
}
