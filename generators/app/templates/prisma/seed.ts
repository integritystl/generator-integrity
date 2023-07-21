import data from './data'
import { Prisma, PrismaClient } from '@prisma/client'
const { SEED_ITEMS } = data
const prisma = new PrismaClient()

export async function recreateInitialData(prismaInstance?: PrismaClient): Promise<void> {
  const p = prismaInstance || prisma

  let transactionList = []

  for (const item of SEED_ITEMS) {
    transactionList.push(
      p.item.upsert({
        where: { id: item.id },
        update: item,
        create: item,
      }),
    )
  }

  await p.$transaction(transactionList, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable })
}

async function seed() {
  return recreateInitialData()
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
