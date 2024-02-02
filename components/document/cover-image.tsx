'use client'

import { useMutation } from 'convex/react'
import { ImageIcon, X } from 'lucide-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { useEdgeStore } from '@/lib/edgestore'

import CoverImageModal from '@/components/modals/image-upload-modal'
import { Button } from '@/components/ui/button'

import { api } from '@/convex/_generated/api'
import { type Id } from '@/convex/_generated/dataModel'

interface CoverImageProps {
  id: Id<'documents'>
  imgUrl: string
  preview?: boolean
}

export default function CoverImage({ id, imgUrl, preview }: CoverImageProps) {
  const params = useParams()
  const { edgestore } = useEdgeStore()
  const [imageLoaded, setImageLoaded] = useState(false)
  const removeCoverImage = useMutation(api.documents.removeCoverImage)

  const workspaceId = params?.workspaceId as Id<'workspaces'>

  const handleRemoveCoverImage = async () => {
    if (imgUrl) {
      await edgestore.publicFiles.delete({
        url: imgUrl,
      })
    }
    const promise = removeCoverImage({
      id,
      workspaceId,
    })

    toast.promise(promise, {
      loading: 'Removing...',
      success: 'Cover image removed',
      error: 'Failed to remove cover image',
    })
  }

  return (
    <div className="group relative h-[35vh] w-full">
      {!!imgUrl && (
        <Image
          priority
          src={imgUrl}
          fill
          alt="Cover-Image"
          className={`object-cover transition-opacity duration-700 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
      )}
      {!!imgUrl && !preview && (
        <div className="absolute bottom-5 right-5 flex items-center gap-x-2 opacity-0 group-hover:opacity-100">
          <CoverImageModal id={id} workspaceId={workspaceId} imgUrl={imgUrl}>
            <Button className="text-xs" variant="outline" size="sm">
              <ImageIcon className="mr-2 h-4 w-4" />
              Change cover
            </Button>
          </CoverImageModal>
          <Button
            onClick={handleRemoveCoverImage}
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
