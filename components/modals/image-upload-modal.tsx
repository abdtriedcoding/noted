'use client'

import { useMutation } from 'convex/react'
import { useState } from 'react'

import { useEdgeStore } from '@/lib/edgestore'

import { SingleImageDropzone } from '@/components/single-image-dropzone'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { api } from '@/convex/_generated/api'
import { type Id } from '@/convex/_generated/dataModel'

interface CoverImageModalProps {
  children: React.ReactNode
  id: Id<'documents'>
  workspaceId: Id<'workspaces'>
  imgUrl?: string
}

export default function CoverImageModal({
  children,
  id,
  workspaceId,
  imgUrl,
}: CoverImageModalProps) {
  const { edgestore } = useEdgeStore()

  const [file, setFile] = useState<File>()
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateDocument = useMutation(api.documents.updateDocument)

  const handelImageUpload = async (file?: File) => {
    if (!file) return
    setIsSubmitting(true)
    setFile(file)

    const res = await edgestore.publicFiles.upload({
      file,
      options: {
        replaceTargetUrl: imgUrl,
      },
    })
    await updateDocument({
      id: id,
      workspaceId,
      coverImage: res.url,
    })
    setDialogOpen(false)
    setFile(undefined)
    setIsSubmitting(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle className="hidden" />
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <SingleImageDropzone
          className="w-full outline-none"
          disabled={isSubmitting}
          value={file}
          onChange={handelImageUpload}
        />
      </DialogContent>
    </Dialog>
  )
}
