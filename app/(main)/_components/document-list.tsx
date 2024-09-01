'use client'

import { useQuery } from 'convex/react'
import DocumentItem from './document-item'
import { api } from '@/convex/_generated/api'
import { Skeleton } from '@/components/ui/skeleton'

export default function DocumentList() {
  const documents = useQuery(api.documents.getUserDocuments)

  if (documents === undefined) {
    return (
      <div className="mr-2 mt-4 space-y-2 p-2">
        <Skeleton className="w-full px-4 py-4" />
        <Skeleton className="w-full px-4 py-4" />
        <Skeleton className="w-full px-4 py-4" />
      </div>
    )
  }

  return (
    <div className="mr-2 space-y-2 p-2">
      {documents.map((document) => (
        <DocumentItem
          key={document._id}
          id={document._id}
          label={document.title}
          documentIcon={document.icon}
        />
      ))}
    </div>
  )
}
