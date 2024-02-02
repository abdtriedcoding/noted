'use client'

import { useQuery } from 'convex/react'
import { useParams } from 'next/navigation'

import CoverImage from '@/components/document/cover-image'
import Editor from '@/components/document/editor'
import Toolbar from '@/components/document/toolbar'
import Spinner from '@/components/spinner'

import { api } from '@/convex/_generated/api'
import { type Id } from '@/convex/_generated/dataModel'

export default function PreviewPage() {
  const params = useParams()
  const documentId = params?.documentId as Id<'documents'>

  const document = useQuery(api.documents.getPreviewDocumentById, {
    documentId,
  })

  if (document === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner size={'lg'} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#36393f]">
      {document.coverImage && (
        <CoverImage id={document._id} imgUrl={document.coverImage} preview />
      )}
      <div className="p-4">
        <Toolbar document={document} preview />
        <Editor
          id={document._id}
          initialContent={document.content}
          editable={false}
        />
      </div>
    </div>
  )
}
