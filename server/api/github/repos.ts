import type { GithubApiRepoResponse } from '~/types/GithubApi'
import { githubUsername } from '~/constants/index'

export default defineEventHandler(async (event) => {
  const { GITHUB_API_URL } = useRuntimeConfig(event)

  const data = await $fetch<Promise<GithubApiRepoResponse[]>>(`${GITHUB_API_URL}/users/${githubUsername}/repos`)

  return data
})
