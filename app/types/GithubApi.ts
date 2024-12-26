export interface GithubApiResponse {
  id: number
  avatar_url: string
  followers: number
  login: string
  name: string
  repos_url: string
  public_repos: number
}

export interface GithubApiRepoResponse {
  id: number
  name: string
  description: string
  forks: number
  stargazers_count: number
  watchers_count: number
  html_url: string
}
