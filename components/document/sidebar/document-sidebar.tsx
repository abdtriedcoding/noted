'use client'

import { useQuery } from 'convex/react'
import { useParams } from 'next/navigation'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

import DocumentItem from './document-item'
import NewPageButton from './new-page-button'
import SearchButton from './search-button'
import SettingButton from './setting-button'
import TrashBox from './trash-box'
import UserMenu from './user-menu'
import { api } from '@/convex/_generated/api'
import { type Id } from '@/convex/_generated/dataModel'

export default function DocumentSidebar() {
  const params = useParams()
  const workspaceId = params?.workspaceId as Id<'workspaces'>

  const documents = useQuery(api.documents.getDocuments, { workspaceId })

  return (
    <div className="min-h-screen flex flex-col text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
      <UserMenu />
      <div className="p-1">
        <NewPageButton />
        <SettingButton />
        <TrashBox />
        <SearchButton />
      </div>
      <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md w-full" />
      <ScrollArea className="flex-1">
        {documents === undefined ? (
          <div className="space-y-1 p-1 flex flex-col">
            {Array.from({ length: 8 }).map((_, e) => (
              <Skeleton key={e} className="w-full px-4 py-4" />
            ))}
          </div>
        ) : (
          <div className="mr-2 p-1 space-y-1 flex flex-col">
            {documents.map((document) => (
              <DocumentItem
                key={document._id}
                id={document._id}
                label={document.title}
                documentIcon={document.icon}
              />
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
