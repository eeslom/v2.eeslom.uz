import { inject } from '@vercel/analytics'

export default defineNuxtPlugin((nuxtApp) => {
  inject()
  nuxtApp.hook('app:mounted', () => {
    console.log(
      `%c
      CONTACT ME
     ----------------------------------------
          \\   ^__^
           \\  (oo)\\_______
              (__)\\       )\\/\\
                  ||----w |
                  ||     ||

    And dont forget to shoot me an email at hi@islomurodov.uz if you need me to come do awesome work at your company :)`,
      'font-family:inherit',
    )
  })
})
