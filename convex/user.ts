import { getAuthUserId } from '@convex-dev/auth/server'

import { query } from './_generated/server'

export const currentUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)
    return userId !== null ? ctx.db.get(userId) : null
  },
})
