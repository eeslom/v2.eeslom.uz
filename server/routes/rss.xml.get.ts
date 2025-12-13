import { Feed } from 'feed'
import { appCreator, appDescription, appName } from '~/constants'

export default defineEventHandler(async (event) => {
  if (!import.meta.dev && !import.meta.prerender)
    return

  const runtimeConfig = useRuntimeConfig(event)

  const feed = new Feed({
    title: appName,
    description: appDescription,
    feed: `${runtimeConfig.PUBLIC_URL}/rss.xml`,
    id: `${runtimeConfig.PUBLIC_URL}/`,
    link: runtimeConfig.PUBLIC_URL,
    language: 'en',
    image: `${runtimeConfig.PUBLIC_URL}/og-image.webp`,
    favicon: `${runtimeConfig.PUBLIC_URL}/favicon.ico`,
    copyright: `© 2014-${new Date().getFullYear()} ${appCreator}. All rights reserved.`,
    author: {
      name: appCreator,
      email: 'hi@eeslom.uz',
      link: `${runtimeConfig.PUBLIC_URL}/`,
    },
  })

  return feed.rss2()
})
