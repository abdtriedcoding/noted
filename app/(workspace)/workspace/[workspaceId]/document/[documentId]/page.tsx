'use client'

import { useQuery } from 'convex/react'
import { useParams } from 'next/navigation'

import Banner from '@/components/document/banner'
import CoverImage from '@/components/document/cover-image'
import Editor from '@/components/document/editor'
import Title from '@/components/document/title'
import Toolbar from '@/components/document/toolbar'
import Spinner from '@/components/spinner'

import { api } from '@/convex/_generated/api'
import { type Id } from '@/convex/_generated/dataModel'

export default function DocumentId() {
  const params = useParams()
  const documentId = params?.documentId as Id<'documents'>
  const workspaceId = params?.workspaceId as Id<'workspaces'>

  const document = useQuery(api.documents.getDocumentById, {
    documentId,
    workspaceId,
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
      {!!document.isArchived && <Banner id={document._id} />}
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
