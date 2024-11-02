import type { Selectable } from 'kysely'
import { db } from '~/server/db'
import type { User } from '~/server/db/types'
import type { RequestContext } from '~/server/types/RequestContext'

type GetUserResult = {
  users: Selectable<User>[]
}

export async function getUsersUseCase(context: RequestContext): Promise<GetUserResult> {
  const users = await db.selectFrom('public.users').selectAll().execute()

  return { users: users }
}
