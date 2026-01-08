import type { GithubApiResponse } from '~/types/GithubApi'
import { githubUsername } from '~/constants'

export default defineEventHandler(async () => {

  const data = await $fetch<Promise<GithubApiResponse>>(`https://api.github.com/users/${githubUsername}`)

  return data
})
