export const siteConfig = {
  title: 'Oskar Hulter next-ts blog starte',
  description: 'This is a simple blog built with Next, easily deployable to Netlify!',
  blogDescription: 'Fullstack Web dev blog covering topics like JS, react, architecture, api-design and awesome packages.',
  url: 'https://www.oskarhulter.com',
  twitterUsername: '@OskarHulter',
  email: 'oskarhulter@gmail.com',
  socials: {
    GitHub: 'https://github.com/OskarHulter/',
    Twitter: 'https://twitter.com/OskarHulter',
  },
  bgColor: '#1A202C',
  themeColor: '#46c0aE',
}

// TODO: fill SEO defaults
export const SEO = {
  titleTemplate:`%s · ${siteConfig.title}`,
  description:siteConfig.description,
  canonical:siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: siteConfig.url,
    title: siteConfig.title,
    site_name: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/social.png`,
        width: 1024,
        height: 512,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    handle: siteConfig.twitterUsername,
    site: siteConfig.socials.Twitter,
    cardType: 'summary_large_image',
  },
}