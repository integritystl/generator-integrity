// global.d.ts
import { PrismaClient } from "@prisma/client";

declare global {
  interface GlobalThis {
    prismaClient?: PrismaClient;
  }
}

export {};
