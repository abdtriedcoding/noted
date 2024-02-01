'use client'

// import dynamic from 'next/dynamic'
import { useQuery } from 'convex/react'
import Spinner from '@/components/spinner'
import Toolbar from '@/components/toolbar'
import { useParams } from 'next/navigation'
import { api } from '@/convex/_generated/api'
import CoverImage from '@/components/cover-image'
import { type Id } from '@/convex/_generated/dataModel'
// const Editor = dynamic(() => import('@/components/editor'), { ssr: false })

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
        {/* TODO: Editor component needs to be changed not supporting nextjs15 */}
        {/* <Editor
          id={document._id}
          initialContent={document.content}
          editable={false}
        /> */}
      </div>
    </>
  )
}
