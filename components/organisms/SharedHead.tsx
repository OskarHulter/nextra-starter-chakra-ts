import { siteConfig } from '../../siteconfig'


export function SharedHead() {
  return <>
    <meta property="og:title" content={siteConfig.title} />
    <meta property="og:site_name" content="Oskar Hulter's blog" />
    <meta property="og:description" content={siteConfig.description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@OskarHulter" />
    <meta property="og:image" content={siteConfig.url} /> {/* TODO: Change this URL */}
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="theme-color" content={siteConfig.themeColor} />
    <meta name="msapplication-TileColor" content={siteConfig.themeColor} />

    {/*<link rel="manifest" href="/manifest.json" />*/}

    <meta content="/mstile-70x70.png" name="msapplication-square70x70" />
    <meta content="/mstile-144x144.png" name="msapplication-square144x144" />
    <meta content="/mstile-150x150.png" name="msapplication-square150x150" />
    <meta content="/mstile-310x150.png" name="msapplication-wide310x150" />
    <meta content="/mstile-310x310.png" name="msapplication-square310x310" />
    <link href="/apple-touch-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
    <link href="/apple-touch-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
    <link href="/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
    <link href="/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
    <link href="/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
    <link href="/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
    <link href="/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
    <link href="/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
    <link href="/apple-touch-icon-167x167.png" rel="apple-touch-icon" sizes="167x167" />
    <link href="/apple-touch-icon-180x180.png" rel="icon" sizes="180x180" type="image/png" />
    <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
    <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
  </>
}