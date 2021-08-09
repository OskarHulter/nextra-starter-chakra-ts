import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { SharedHead } from '@components/organisms/SharedHead'
import { theme } from '@constants'


export default class MyDocument extends NextDocument {

  render() {
    return (
      <Html lang="en">
        <Head>
          <SharedHead />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}