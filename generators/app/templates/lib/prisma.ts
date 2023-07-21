import { PrismaClient } from '@prisma/client'

// Typescript - declare a global variable for prisma
declare global {
  var prismaClient: PrismaClient | undefined
}

const { NODE_ENV, DATABASE_URL } = process.env

let prisma: PrismaClient

// Only create a new prisma client if it doesn't already exist
// Works around issue of re-instantiation of prisma when dev server reloads
// https://github.com/prisma/prisma/issues/5007#issuecomment-618433162

if (NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prismaClient) {
    global.prismaClient = new PrismaClient({
      datasources: { db: { url: DATABASE_URL } },
      errorFormat: 'pretty',
    })
  }
  prisma = global.prismaClient
}

export default prisma
