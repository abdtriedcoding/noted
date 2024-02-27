import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  documents: defineTable({
    userId: v.string(),
    title: v.string(),
    isArchived: v.boolean(),
    isPublished: v.boolean(),
    icon: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    content: v.optional(v.string()),
  })
  .index("by_user", ["userId"])
});
