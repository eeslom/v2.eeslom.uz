import process from 'node:process'

import { defineNuxtConfig } from 'nuxt/config'
import { useNuxt } from 'nuxt/kit'
import { isTest } from 'std-env'
import { pwa } from './app/config/pwa'
import { appCreator, appDescription, appName } from './app/constants/index'

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt', '@vite-pwa/nuxt', '@nuxt/eslint', '@nuxt/image', '@nuxtjs/device', 'nuxt-headlessui', '@nuxt/scripts', '@nuxtjs/sitemap', '@nuxt/content', 'nuxt-time'],

  $production: {
    routeRules: {
      '/blog': { redirect: '/' },
      '/blog/**': { redirect: '/' },
    },
  },

  $test: {
    experimental: {
      componentIslands: true,
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
        { name: 'keywords', content: 'Islom Murodov, islomurodov, eeslom, eeslom.uz islomurodov.uz, islom.dev, vscode, visual studio code, best portfolio website, islom.pro, murodov.uz, murodov.pro, murodov.dev, islom.uz, Islom, Murodov, developer, portfolio, web developer, frontend developer, backend developer' },
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
    name: appName,
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
    github: {
      API_URL: import.meta.env.NUXT_APP_GITHUB_API_URL,
      TOKEN: import.meta.env.NUXT_APP_GITHUB_TOKEN,
    },
    telegram: {
      BOT_TOKEN: import.meta.env.NUXT_APP_BOT_TOKEN,
      CHAT_ID: import.meta.env.NUXT_APP_CHAT_ID,
    },
    pushover: {
      token: import.meta.env.NUXT_APP_PUSHOVER_TOKEN,
      userKey: import.meta.env.NUXT_APP_PUSHOVER_USER_KEY,
    },
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
    typedPages: true,
    viewTransition: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    experimental: {
      tasks: true,
    },
    replace: {
      'import.meta.test': isTest,
    },
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    future: { nativeSWR: true },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/projects', '/github', '/contact', '/about', '/rss.xml'],
    },
    hooks: {
      'prerender:generate': function (route) {
        if (route.fileName) {
          route.fileName = route.fileName.replace(
            /(\.\w{3})\/index.html$/,
            '$1',
          )
        }

        if (route.error) {
          if (route.route.startsWith('/_ipx')) {
            console.warn('Could not prerender', route.route)
            // ignore IPX rendering errors
            delete route.error
          }
          else {
            console.error(route.route, route.error, route)
            process.exit(1)
          }
        }
      },
    },
  },

  vite: {
    vue: {
      features: {
        optionsAPI: false,
      },
    },
    optimizeDeps: {
      include: [
        'partysocket',
      ],
    },
  },

  hooks: {
    'components:extend': (components) => {
      const nuxt = useNuxt()
      for (const comp of components) {
        if (comp.pascalName === 'StaticMarkdownRender' && nuxt.options.dev) {
          comp.mode = 'all'
        }
      }
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

  scripts: {
    defaultScriptOptions: {
      bundle: true,
    },
  },
})
