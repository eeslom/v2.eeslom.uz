<script setup lang="ts">
import type { NavType } from '~/types/Nav'

const navigations = [
  {
    title: 'home.vue',
    icon: 'i-vscode-icons-file-type-vue',
    path: '/',
  },
  {
    title: 'about.html',
    icon: 'i-vscode-icons-file-type-html',
    path: '/about',
  },
  {
    title: 'contact.css',
    icon: 'i-vscode-icons-file-type-css',
    path: '/contact',
  },
  {
    title: 'projects.js',
    icon: 'i-vscode-icons-file-type-js-official',
    path: '/projects',
  },
  {
    title: 'github.md',
    icon: 'i-vscode-icons-file-type-markdown',
    path: '/github',
  },
  {
    title: 'uses.md',
    icon: 'i-vscode-icons-file-type-markdown',
    path: '/uses',
  },
] as NavType[]

const router = useRouter()
const route = useRoute()
</script>

<template>
  <div w-330px bg-menu-background>
    <h3 px-5 pb-3 pt-2 text-xs text-white text-op-70 uppercase>
      explorer: eeslom.uz
    </h3>
    <ul text-sm>
      <li v-for="nav in navigations" :key="nav.title">
        <button :aria-label="nav.title" :aria-labelledby="nav.title" w-full flex items-center gap-x-1 hover:bg-asda hover:bg-op-60 p="x5 y0.7" :class="route.path === nav.path ? 'bg-asda' : ''" @click="router.push(nav.path)">
          <div :class="nav.icon" />
          {{ nav.title }}
        </button>
      </li>
    </ul>
  </div>
</template>
