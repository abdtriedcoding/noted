import { useMutation } from 'convex/react'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'sonner'

import ConfirmModal from '@/components/modals/confirm-modal'
import { Button } from '@/components/ui/button'

import { api } from '@/convex/_generated/api'
import { type Id } from '@/convex/_generated/dataModel'

export default function Banner({ id }: { id: Id<'documents'> }) {
  const router = useRouter()
  const params = useParams()
  const workspaceId = params?.workspaceId as Id<'workspaces'>

  const removeDocument = useMutation(api.documents.removeDocument)
  const restoreDocument = useMutation(api.documents.restoreDocument)

  const handleRemoveDocument = () => {
    const promise = removeDocument({ id, workspaceId })

    toast.promise(promise, {
      loading: 'Deleting document...',
      success: 'Document deleted',
      error: ' Failed to delete document',
    })
    router.push(`/workspace/${workspaceId}`)
  }

  const handleRestoreDocument = () => {
    const promise = restoreDocument({ id, workspaceId })

    toast.promise(promise, {
      loading: 'Restoring document...',
      success: 'Document restored',
      error: ' Failed to restore document',
    })
  }

  return (
    <div className="flex w-full flex-col items-center gap-2 bg-rose-500 p-2 md:flex-row">
      <p>This page is in the Trash.</p>
      <div className="space-x-2 md:ml-auto">
        <Button size="sm" onClick={handleRestoreDocument}>
          Restore page
        </Button>
        <ConfirmModal onConfirm={handleRemoveDocument}>
          <Button size="sm">Delete forever</Button>
        </ConfirmModal>
      </div>
    </div>
  )
}
