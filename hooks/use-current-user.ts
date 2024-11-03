import { useQuery } from 'convex/react'

import { api } from '@/convex/_generated/api'

export function useCurrentUser() {
  const user = useQuery(api.user.currentUser)
  const isLoading = user === undefined
  return { user, isLoading }
}
