import { BaseProps } from 'types'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@constants'


export function ThemeProvider({ children }:BaseProps) {

  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  )
}
