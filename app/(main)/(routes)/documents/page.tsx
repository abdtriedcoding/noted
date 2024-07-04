'use client'

import Image from 'next/image'
import { toast } from 'sonner'
import { useUser } from '@clerk/nextjs'
import { PlusCircle } from 'lucide-react'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export default function MainPage() {
  const router = useRouter()
  const { isLoaded, isSignedIn, user } = useUser()
  const createDocument = useMutation(api.documents.createDocument)

  const onCreateNote = () => {
    const promise = createDocument().then((documentId) =>
      router.push(`/documents/${documentId}`)
    )

    toast.promise(promise, {
      loading: 'Creating a new note...',
      success: 'New note created!',
      error: 'Failed to create a new note.',
    })
  }

  return (
    <div className="flex h-[90vh] flex-col items-center justify-center space-y-4">
      <Image
        src="/welcome-logo.svg"
        priority
        fetchPriority="high"
        loading="eager"
        height="300"
        width="300"
        alt="Empty"
        className="dark:invert"
      />
      {!isLoaded || !isSignedIn ? (
        <SkeltonData />
      ) : (
        <>
          <h2 className="text-lg font-medium">
            Welcome to {user?.firstName}&apos;s Noted
          </h2>
          <Button onClick={onCreateNote}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create a note
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
