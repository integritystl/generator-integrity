import { Item } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function getItems(): Promise<Item[]> {
  return prisma.item.findMany();
}
