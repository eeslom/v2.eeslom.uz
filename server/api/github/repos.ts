import type { GithubApiRepoResponse } from '~/types/GithubApi'
import { githubUsername } from '~/constants/index'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)

  try {
    const data = await $fetch<Promise<GithubApiRepoResponse[]>>(`${runtimeConfig.github.API_URL}/users/${githubUsername}/repos`, {
      headers: {
        'Authorization': `Bearer: ${runtimeConfig.github.TOKEN}`,
        'Cache-Control': 's-maxage=3600',
      },
    })

    return data
  }
  catch (error) { return error }
})
