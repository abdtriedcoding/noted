'use client'

import { useMutation, useQuery } from 'convex/react'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

import { api } from '@/convex/_generated/api'
import { type Id } from '@/convex/_generated/dataModel'
import { useCurrentUser } from '@/hooks/use-current-user'

export default function WorkspaceIdPage() {
  const router = useRouter()
  const params = useParams()
  const workspaceId = params?.workspaceId as Id<'workspaces'>

  const { user, isLoading } = useCurrentUser()
  const createDocument = useMutation(api.documents.createDocument)
  const workspace = useQuery(api.documents.getWorkspaceById, {
    workspaceId,
  })

  const handleCreateDocument = () => {
    const promise = createDocument({ workspaceId }).then((documentId) =>
      router.push(`/workspace/${workspaceId}/document/${documentId}`)
    )

    toast.promise(promise, {
      loading: 'Creating a new document...',
      success: 'New document created',
      error: 'Failed to create a new document',
    })
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/document.png"
        priority
        fetchPriority="high"
        loading="eager"
        height="300"
        width="300"
        alt="Empty"
      />
      {workspace === undefined || isLoading ? (
        <SkeltonData />
      ) : (
        <>
          <h2 className="text-lg font-medium pb-2">
            Welcome to {user?.name}&apos;s Noted
          </h2>
          <Button onClick={handleCreateDocument}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create a Document
          </Button>
        </>
      )}
    </div>
  )
}

function SkeltonData() {
  return (
    <div className="flex w-full flex-col items-center space-y-4">
      <Skeleton className="h-6 w-60" />
      <Skeleton className="h-10 w-40" />
    </div>
  )
}
