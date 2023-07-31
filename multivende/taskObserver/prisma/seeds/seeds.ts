import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
dotenv.config()

async function main() {
  // device
  await prisma.taskState.createMany({
    data: [
      { name: 'started' },
      { name: 'processing' },
      { name: 'completed' },
      { name: 'completed with errors' },
      { name: 'failed' }
    ]
  })
}

main()
  .catch((e) => {
    console.error(e)
    return
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
