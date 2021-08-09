import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { SEO, siteConfig } from 'siteconfig'
import { Store } from '@components/Store/Store'


export default function Nextra({ Component, pageProps, router }: AppProps){

  return (
    <Store>
      <DefaultSeo {...SEO} canonical={`${siteConfig.url}${router.asPath || ''}`}/>
      <SocialProfileJsonLd
        type="person"
        name={siteConfig.title}
        url={siteConfig.url}
        sameAs={Object.values(siteConfig.socials)}
      />
      <Component {...pageProps} />
    </Store>
  )
}
  
// modified version - allows for custom pageProps type, falling back to 'any'
// eslint-disable-next-line @typescript-eslint/no-explicit-any

/*
AppProps<CustomPageProps>
type CustomPageProps = {

}

type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, 'pageProps'>

*/