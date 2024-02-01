import { toast } from 'sonner'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'
import { type Id } from '@/convex/_generated/dataModel'
import ConfirmModal from '@/components/modals/confirm-modal'

export default function Banner({ id }: { id: Id<'documents'> }) {
  const router = useRouter()

  const removeDocument = useMutation(api.documents.removeDocument)
  const restoreDocument = useMutation(api.documents.restoreDocument)

  const onRemoveNote = () => {
    const promise = removeDocument({ id })

    toast.promise(promise, {
      loading: 'Deleting note...',
      success: 'Note deleted!',
      error: ' Failed to delete note.',
    })
    router.push('/documents')
  }

  const onRestoreNote = () => {
    const promise = restoreDocument({ id })

    toast.promise(promise, {
      loading: 'Restoring note...',
      success: 'Note restored!',
      error: ' Failed to restore note.',
    })
  }

  return (
    <div className="flex w-full items-center justify-center gap-x-2 bg-rose-500 p-2 text-center text-white">
      <p className="hidden md:block">This page is in the Trash.</p>
      <Button size="sm" onClick={onRestoreNote}>
        Restore page
      </Button>
      <ConfirmModal onConfirm={onRemoveNote}>
        <Button size="sm">Delete forever</Button>
      </ConfirmModal>
    </div>
  )
}
