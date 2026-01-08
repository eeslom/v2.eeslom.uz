import type { GithubApiResponse } from '~/types/GithubApi'
import { githubUsername } from '~/constants'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)

  const data = await $fetch<Promise<GithubApiResponse>>(`https://api.github.com/users/${githubUsername}`, {
    headers: {
      Authorization: `Bearer: ${runtimeConfig.github.TOKEN}`,
    },
  })

  return data
})
