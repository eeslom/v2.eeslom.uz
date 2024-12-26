import type { GithubApiResponse } from '~/types/GithubApi'
import { githubUsername } from '~/constants'

export default defineEventHandler(async () => {
  const { GITHUB_API_URL } = useRuntimeConfig()

  const data = await $fetch<Promise<GithubApiResponse>>(`${GITHUB_API_URL}/users/${githubUsername}`)

  return data
})
