import type { GithubApiResponse } from '~/types/GithubApi'
import { githubUsername } from '~/constants'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)

  try {
    const data = await $fetch<Promise<GithubApiResponse>>(`${runtimeConfig.github.API_URL}/users/${githubUsername}`, {
      headers: {
        Authorization: `Bearer: ${runtimeConfig.github.TOKEN}`,
        'Cache-Control': 's-maxage=3600'
      },
    })

    return data
  }
  catch (error) {return error}
})
