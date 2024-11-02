import { userFactory } from '~/server/factories/user.factory'
import { getUsersUseCase } from '~/server/use-cases/user/get-users.use-case'

export default defineEventHandler(async (event) => {
  const { users } = await getUsersUseCase(event.context)

  const response = userFactory.toFullResponses(users)

  return response
})
