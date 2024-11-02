import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: 'test@test.com',
        name: 'John Doe',
      },
      {
        email: 'test2@test.com',
        name: 'Jane Doe',
      },
    ],
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
