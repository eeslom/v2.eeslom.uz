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
] as NavType[]

const router = useRouter()
const route = useRoute()
</script>

<template>
  <nav sticky top-0 w-full bg-menu-background shadow-sm>
    <ul flex gap-0.2 text-sm>
      <li v-for="nav in navigations" :key="nav.title" text-white lowercase :class="[route.path === nav.path ? 'bg-background text-op-100' : 'bg-tab-inActive text-op-60']">
        <button flex items-center gap-x-1.5 p="x5 y2" @click="router.push(nav.path)">
          <div :class="nav.icon" />
          {{ nav.title }}
        </button>
      </li>
    </ul>
  </nav>
</template>
