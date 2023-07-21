import type { AppProps } from 'next/app'
import { Provider as RWBProvider } from 'react-wrap-balancer'

import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RWBProvider>
      <main className="h-full">
        <Component {...pageProps} />
      </main>
    </RWBProvider>
  )
}
