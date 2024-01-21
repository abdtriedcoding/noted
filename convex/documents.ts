import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const create = mutation({
  args: {
    title: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    if (!args.userId) {
      throw new Error("Not authenticated");
    }

    const userId = args.userId;

    const document = await ctx.db.insert("documents", {
      title: args.title,
      userId,
      isArchived: false,
      isPublished: false,
    });

    return document;
  },
});
