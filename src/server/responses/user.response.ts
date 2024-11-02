import { z } from 'zod'
import { UserSchema } from '../db/schema'

export const ResponseUserFullSchema = z.object({
  id: UserSchema.shape.id,
  name: UserSchema.shape.name,
  email: UserSchema.shape.email,
})

export const ResponseUsersFullSchema = z.array(ResponseUserFullSchema)

export type ResponseUserFull = z.infer<typeof ResponseUserFullSchema>
