import { z } from 'zod'

export const UserSchema = z.object({
  id: z.number().positive(),
  email: z.string(),
  name: z.string().nullable(),
})

export const PostSchema = z.object({
  id: z.number().positive(),
  title: z.string(),
  content: z.string().nullable(),
  published: z.string().datetime(),
  authorId: UserSchema.shape.id,
  author: UserSchema,
})
