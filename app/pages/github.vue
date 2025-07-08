<script setup lang="ts">
import type { GithubApiRepoResponse, GithubApiResponse } from '~/types/GithubApi'

definePageMeta({ title: 'GitHub' })

const github = ref<GithubApiResponse>()
const repos = ref<GithubApiRepoResponse[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

try {
  const [githubData, reposData] = await Promise.all([
    $fetch('/api/github'),
    $fetch('/api/github/repos'),
  ])
  github.value = githubData
  repos.value = reposData
}
catch (err) {
  error.value = 'Failed to fetch data'
}
finally {
  loading.value = false
}
</script>

<template>
  <div v-if="loading" md:text-lg>
    Loading...
  </div>
  <div v-else-if="error" text-red-6 md:text-lg>
    {{ error }}
  </div>
  <div v-else>
    <div p="x5 y3" w-full rounded-sm bg-menu-background shadow-sm>
      <div mx-auto w-full flex items-center justify-center gap-x-3 text-sm md:gap-x-5 sm:gap-x-4 sm:text-base>
        <div flex items-center gap-x-5>
          <NuxtImg :src="github?.avatar_url" :alt="github?.login" aspect-ratio-square h-20 rounded-sm object-contain />
          <span hidden sm:block>
            {{ github?.name }}
          </span>
        </div>
        <span h-10 w-px bg-white />
        <div v-if="github?.public_repos">
          {{ github.public_repos }}
          repos
        </div>
        <span h-10 w-px bg-white />
        <div v-if="github?.followers">
          {{ github.followers }}
          followers
        </div>
      </div>
    </div>
    <ul v-if="!loading && repos && repos.length" grid grid-cols-1 mt-5 gap-6 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4>
      <li
        v-for="repo in repos" :key="repo.id" flex flex-col justify-between rounded-sm bg-menu-background p-4
        shadow-sm
      >
        <h2 text-yellow font-semibold>
          <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
        </h2>
        <p mt-3 text-sm text-white text-op-80>
          {{ repo.description || 'No description yet' }}
        </p>
        <div mt-3 w-full flex items-center justify-between gap-3>
          <div flex gap-x-2.7 text-sm>
            <div flex items-center gap-1>
              <div i-codicon-eye />
              {{ repo.watchers_count }}
            </div>
            <div flex items-center gap-1>
              <div i-codicon-repo-forked />
              {{ repo.forks }}
            </div>
            <div flex items-center gap-1>
              <div i-codicon-star-empty />
              {{ repo.stargazers_count }}
            </div>
          </div>
          <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
            <div i-codicon-github-alt />
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
