import { PageProps } from 'types'
import { Box } from '@chakra-ui/react'
import { AnimateIn } from '@components/atoms/animations/AnimateIn'
import { Footer } from '@components/organisms/Footer'
import { Header } from '@components/organisms/Header/Header'
import { SharedHead } from '@components/organisms/SharedHead'


export function Layout({
  disableLayout = false,
  children,
}: PageProps) {

  return disableLayout ? <>children</>
    : <>
      <SharedHead />
      <Box
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(static/abstract-galaxy-no-text.svg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >

        <Header />

        <AnimateIn>
          <main>
            {children}
          </main>
        </AnimateIn>
    
        <AnimateIn>
          <Footer />
        </AnimateIn>
      </Box>
    </>
}
