'use client'

import Image from 'next/image'
import { toast } from 'sonner'
import { useState } from 'react'
import { useMutation } from 'convex/react'
import { ImageIcon, X } from 'lucide-react'
import { api } from '@/convex/_generated/api'
import { useEdgeStore } from '@/lib/edgestore'
import { Button } from '@/components/ui/button'
import { type Id } from '@/convex/_generated/dataModel'
import CoverImageModal from '@/components/modals/cover-image-upload'

interface CoverImageProps {
  id: Id<'documents'>
  imgUrl: string
  preview?: boolean
}

export default function CoverImage({ id, imgUrl, preview }: CoverImageProps) {
  const { edgestore } = useEdgeStore()
  const [imageLoaded, setImageLoaded] = useState(false)
  const removeCoverImage = useMutation(api.documents.removeCoverImage)

  const onRemove = async () => {
    if (imgUrl) {
      await edgestore.publicFiles.delete({
        url: imgUrl,
      })
    }
    removeCoverImage({
      id,
    }).catch(() => toast.error('Failed to remove cover image'))
  }

  return (
    <div className="group relative h-[35vh] w-full">
      {!!imgUrl && (
        <Image
          src={imgUrl}
          fill
          alt="Cover-Image"
          className={`object-cover transition-opacity duration-700 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadingComplete={() => setImageLoaded(true)}
        />
      )}
      {imgUrl && !preview && (
        <div className="absolute bottom-5 right-5 flex items-center gap-x-2 opacity-0 group-hover:opacity-100">
          <CoverImageModal id={id} imgUrl={imgUrl}>
            <Button className="text-xs" variant="outline" size="sm">
              <ImageIcon className="mr-2 h-4 w-4" />
              Change cover
            </Button>
          </CoverImageModal>
          <Button
            onClick={onRemove}
            className="text-xs"
            variant="outline"
            size="sm"
          >
            <X className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      )}
    </div>
  )
}
