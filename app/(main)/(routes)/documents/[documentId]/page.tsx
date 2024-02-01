'use client'

import Title from './_components/title'
import { useQuery } from 'convex/react'
import Banner from './_components/banner'
import Editor from '@/components/editor'
import Toolbar from '@/components/toolbar'
import Spinner from '@/components/spinner'
import { useParams } from 'next/navigation'
import { api } from '@/convex/_generated/api'
import CoverImage from '@/components/cover-image'
import { type Id } from '@/convex/_generated/dataModel'

export default function DocumentPage() {
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
      {document.isArchived && <Banner id={document._id} />}
      {document.coverImage && (
        <CoverImage id={document._id} imgUrl={document.coverImage} />
      )}
      <div className="p-4">
        <Title
          id={document._id}
          title={document.title}
          icon={document.icon}
          isPublished={document.isPublished}
        />
        <Toolbar document={document} />
        <Editor id={document._id} initialContent={document.content} editable />
      </div>
    </>
  )
}
