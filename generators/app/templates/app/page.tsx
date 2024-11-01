import { Item } from '@prisma/client'
import { getItems } from '@/database/items'
import Footer from '@/components/Footer'

export default async function Index() {
  const allItems: Item[] = await getItems()

  return (
    <div className="flex h-screen w-screen flex-col overflow-auto text-gray-700">
      <main className="flex-start minimum-body-content-width flex w-full grow flex-col items-center">
        {allItems.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </main>
      <Footer />
    </div>
  )
}
