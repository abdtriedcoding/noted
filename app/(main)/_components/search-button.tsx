'use client'

import { useUser } from '@clerk/nextjs'
import { useQuery } from 'convex/react'
import { useRouter } from 'next/navigation'
import { File, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

export default function SearchButton() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { isLoaded, isSignedIn, user } = useUser()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const documents = useQuery(api.documents.getUserDocuments)

  if (documents === undefined) {
    return <Skeleton className="w-full px-4 py-4" />
  }

  const onSelect = (id: string) => {
    router.push(`/documents/${id}`)
    setOpen(false)
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant={'ghost'}
        size={'sm'}
        className="w-full justify-start"
      >
        <Search className="mr-2 h-5 w-5" />
        Search
        <kbd className="ml-auto rounded bg-slate-100 px-1 dark:bg-slate-600">
          <span className="text-xs">⌘</span> K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        {isLoaded && isSignedIn && user && (
          <CommandInput placeholder={`Search ${user.fullName}'s Noted...`} />
        )}
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documents">
            {documents?.map((document) => (
              <CommandItem
                key={document._id}
                value={`${document._id}-${document.title}`}
                title={document.title}
                onSelect={() => onSelect(document._id)}
              >
                {document.icon ? (
                  <p className="mr-2 text-[18px]">{document.icon}</p>
                ) : (
                  <File className="mr-2 h-4 w-4" />
                )}
                <span>{document.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
