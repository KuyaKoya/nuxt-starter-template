import type { Selectable } from 'kysely'
import type { User } from '../db/types'
import { type ResponseUserFull, ResponseUserFullSchema, ResponseUsersFullSchema } from '../responses/user.response'

function toFullResponse(user: Selectable<User>): ResponseUserFull {
  return ResponseUserFullSchema.parse(user)
}

function toFullResponses(users: Selectable<User>[]): ResponseUserFull[] {
  return ResponseUsersFullSchema.parse(users)
}

export const userFactory = {
  toFullResponse,
  toFullResponses,
}
