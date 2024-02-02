'use client'

import { toast } from 'sonner'
import { PlusCircle } from 'lucide-react'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'

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
    <Button
      onClick={onCreateNote}
      variant={'ghost'}
      size={'sm'}
      className="w-full justify-start"
    >
      <PlusCircle className="mr-2 h-5 w-5" />
      New Page
    </Button>
  )
}
