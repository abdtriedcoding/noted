import { toast } from 'sonner'
import IconPicker from './icon-picker'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'
import { ImageIcon, Smile, X } from 'lucide-react'
import { type Doc } from '@/convex/_generated/dataModel'
import CoverImageModal from '@/components/modals/cover-image-upload'

interface ItemProps {
  document: Doc<'documents'>
  preview?: boolean
}

export default function Toolbar({ document, preview }: ItemProps) {
  const updateDocument = useMutation(api.documents.updateDocument)
  const removeIcon = useMutation(api.documents.removeIcon)

  const onIconSelect = (icon: string) => {
    updateDocument({
      id: document._id,
      icon,
    }).catch(() => toast.error('Failed to add icon'))
  }

  const onRemoveIcon = () => {
    const promise = removeIcon({
      id: document._id,
    })

    toast.promise(promise, {
      loading: 'Removing icon...',
      success: 'Icon removed',
      error: 'Failed to remove icon',
    })
  }

  return (
    <div className="flex items-center justify-between">
      {!!document.icon && !preview && (
        <div className="relative w-fit py-4">
          <IconPicker onChange={onIconSelect}>
            <p className="text-6xl transition hover:opacity-75">
              {document.icon}
            </p>
          </IconPicker>
          <Button
            onClick={onRemoveIcon}
            className="absolute -right-5 top-3 h-7 w-7 rounded-full text-xs"
            variant="outline"
            size="icon"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      {!!document.icon && preview && (
        <p className="pt-6 text-6xl">{document.icon}</p>
      )}
      {(!document.icon && !preview) || (!document.coverImage && !preview) ? (
        <div className="flex items-center gap-x-1 py-4 opacity-100">
          {!document.icon && !preview && (
            <IconPicker asChild onChange={onIconSelect}>
              <Button className="text-xs" variant="outline" size="sm">
                <Smile className="mr-2 h-4 w-4" />
                Add icon
              </Button>
            </IconPicker>
          )}
          {!document.coverImage && !preview && (
            <CoverImageModal id={document._id}>
              <Button className="text-xs" variant="outline" size="sm">
                <ImageIcon className="mr-2 h-4 w-4" />
                Add cover
              </Button>
            </CoverImageModal>
          )}
        </div>
      ) : null}
    </div>
  )
}
