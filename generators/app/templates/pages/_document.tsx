import { Html, Head, Main, NextScript } from 'next/document'

require('dotenv').config({
  path: (): string => {
    if (!process.env.ENV_FILE_EXISTS) {
      throw new Error('No .env file found. Please create one at the root of your project.')
    }
    return '.env'
  },
})

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
