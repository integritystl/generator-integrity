import { PrismaClient } from "@prisma/client";

const { NODE_ENV, DATABASE_URL } = process.env;

if (!DATABASE_URL || !NODE_ENV) {
  throw new Error("DATABASE_URL or NODE environment variables not set");
}
// Cast globalThis to the extended type to access prismaClient
const globalPrisma = globalThis as typeof globalThis & {
  prismaClient?: PrismaClient;
};

const prisma =
  globalPrisma.prismaClient ??
  new PrismaClient({
    datasources: { db: { url: DATABASE_URL } },
    errorFormat: "pretty",
  });

if (NODE_ENV !== "production") {
  globalPrisma.prismaClient = prisma;
}

export default prisma;
