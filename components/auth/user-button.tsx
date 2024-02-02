'use client'

import { useAuthActions } from '@convex-dev/auth/react'
import { useQuery } from 'convex/react'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { api } from '@/convex/_generated/api'
import { type Doc } from '@/convex/_generated/dataModel'

export default function UserButton({ user }: { user: Doc<'users'> }) {
  const { signOut } = useAuthActions()
  const workspaces = useQuery(api.documents.getWorkspaces)

  let url = '/workspace'

  if (workspaces !== undefined && workspaces.length > 0) {
    url = `/workspace/${workspaces[0]?._id}`
  }

  const { name, image } = user

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar className="size-10 hover:opacity-75 transition">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-sky-500 text-white">
              {name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem
            onClick={() => signOut()}
            className="h-8 cursor-pointer"
          >
            <LogOut className="size-4 mr-2" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="secondary" size="sm" asChild>
        <Link href={url}>Enter Noted</Link>
      </Button>
    </div>
  )
}
