'use client'

import { useUser } from '@clerk/nextjs'
import { useQuery } from 'convex/react'
import { useRouter } from 'next/navigation'
import { File, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { api } from '@/convex/_generated/api'
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
      <div
        role="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/5"
      >
        <Search className="mr-2 h-[18px] w-[18px] shrink-0" />
        <span className="truncate">Search</span>
        <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
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
