import { pwa } from './app/config/pwa'
import { appCreator, appDescription, appName } from './app/constants/index'

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt', '@vite-pwa/nuxt', '@nuxt/eslint', '@nuxt/image', '@nuxtjs/device', 'nuxt-headlessui', '@nuxt/scripts', '@nuxtjs/sitemap', '@nuxt/content', 'nuxt-time'],

  $production: {
    routeRules: {
      '/blog': { redirect: '/' },
      '/blog/**': { redirect: '/' },
    },
    experimental: {
      noVueServer: true,
    },
  },

  devtools: {
    enabled: true,
  },

  app: {
    pageTransition: false,
    layoutTransition: false,
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'canonical', href: import.meta.env.NUXT_APP_PUBLIC_URL },
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/vscode.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'alternate', type: 'application/rss+xml', href: '/rss.xml' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'creator', content: appCreator },
        { name: 'author', content: appCreator },
        { name: 'keywords', content: 'Islom Murodov, islomurodov, islomurodov.uz, islom.dev, vscode, visual studio code, best portfolio website, islom.pro, murodov.uz, murodov.pro, murodov.dev, islom.uz, Islom, Murodov, developer, portfolio, web developer, frontend developer, backend developer' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'twitter:site', content: '@islomurodov' },
        { name: 'twitter:title', content: appName },
        { name: 'twitter:description', content: appDescription },
        { name: 'twitter:creator', content: appCreator },
        {
          name: 'twitter:image',
          content: '/og-image.webp',
        },
        { property: 'og:title', content: appName },
        { property: 'og:url', content: import.meta.env.NUXT_APP_PUBLIC_URL },
        { property: 'og:description', content: appDescription },
        { property: 'og:image', content: '/og-image.webp' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '600' },
        { property: 'og:site:name', content: appName },
        { property: 'og:locale', content: 'en_US' },
      ],
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/main.css',
  ],

  site: {
    url: import.meta.env.NUXT_APP_PUBLIC_URL,
  },

  content: {
    watch: false,
    highlight: {
      langs: ['js', 'ts', 'json', 'vue'],
      theme: 'one-dark-pro',
    },
  },

  runtimeConfig: {
    PUBLIC_URL: import.meta.env.NUXT_APP_PUBLIC_URL,
    GITHUB_API_URL: import.meta.env.NUXT_APP_GITHUB_API_URL,
    BOT_TOKEN: import.meta.env.NUXT_APP_BOT_TOKEN,
    CHAT_ID: import.meta.env.NUXT_APP_CHAT_ID,
  },

  routeRules: {
    '/feed.xml': { redirect: '/rss.xml' },
  },

  sourcemap: { client: true, server: false },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
    buildCache: false,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/projects', '/github', '/contact', '/about', '/rss.xml'],
    },
  },

  vite: {
    vue: {
      features: {
        optionsAPI: false,
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  headlessui: {
    prefix: 'Headless',
  },

  image: {
    format: ['webp'],
  },

  pwa,
})
