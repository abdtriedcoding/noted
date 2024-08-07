'use client'

import { useQuery } from 'convex/react'
import Editor from '@/components/editor'
import Spinner from '@/components/spinner'
import Toolbar from '@/components/toolbar'
import { useParams } from 'next/navigation'
import { api } from '@/convex/_generated/api'
import CoverImage from '@/components/cover-image'
import { type Id } from '@/convex/_generated/dataModel'

export default function PreviewPage() {
  const params = useParams()
  const document = useQuery(api.documents.getDocumentById, {
    documentId: params.documentId as Id<'documents'>,
  })

  if (document === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner size={'lg'} />
      </div>
    )
  }

  return (
    <>
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
    </>
  )
}
