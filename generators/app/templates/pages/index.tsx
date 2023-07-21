import { InferGetStaticPropsType } from 'next'

import { Item } from '@prisma/client'
import { getItems } from '@/database/items'
import { REVALIDATE_TIME } from '@/lib/constants'
import Meta from '@/components/Meta'
import Footer from '@/components/Footer'

export default function Index({ allItems }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex h-screen w-screen flex-col overflow-auto text-gray-700">
      <Meta />
      <main className="flex-start minimum-body-content-width flex w-full grow flex-col items-center">
        {allItems.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const allItems: Item[] = await getItems()
  return {
    props: {
      allItems,
    },
    revalidate: REVALIDATE_TIME,
  }
}
