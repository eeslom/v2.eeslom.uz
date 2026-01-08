import { inject } from '@vercel/analytics'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    inject()
  })
})
