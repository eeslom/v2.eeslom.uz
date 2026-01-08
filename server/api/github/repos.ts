import type { GithubApiRepoResponse } from '~/types/GithubApi'
import { githubUsername } from '~/constants/index'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)

  const data = await $fetch<Promise<GithubApiRepoResponse[]>>(`https://api.github.com/users/${githubUsername}/repos`, {
    headers: {
      Authorization: `Bearer: ${runtimeConfig.github.TOKEN}`,
    },
  })

  return data
})
