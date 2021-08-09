import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'


export function DarkModeToggleButton() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      colorScheme='teal'
      variant='solid'
      borderRadius='full'
      aria-label='Color mode switcher'
      onClick={toggleColorMode}
    />
  )
}
