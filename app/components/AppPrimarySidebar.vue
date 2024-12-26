<script setup lang="ts">
import type { NavType } from '~/types/Nav'

const navigations = [
  [{
    title: 'Home',
    path: '/',
    icon: 'i-codicon-files',
  }, {
    title: 'GitHub',
    path: '/github',
    icon: 'i-codicon-github',
  }, {
    title: 'Projects',
    path: '/projects',
    icon: 'i-codicon-code',
  }, {
    title: 'Contact',
    path: '/contact',
    icon: 'i-codicon-mail',
  }],
  [
    {
      title: 'About',
      icon: 'i-codicon-account',
      path: '/about',
    },
    {
      title: 'Settings',
      icon: 'i-codicon-settings-gear',
      path: '/settings',
    },
  ],
] as [NavType[], NavType[]]

const router = useRouter()
const route = useRoute()
</script>

<template>
  <aside h-full bg-primary-sidebar>
    <div h-full flex flex-col justify-between>
      <ul v-for="(navs, index) in navigations" :key="index">
        <li v-for="nav in navs" :key="nav.title" relative aspect-square h-13 flex-1 text-white :class="route.path === nav.path ? 'border-l-2 text-op-100' : 'text-op-60'">
          <button h-full w-full flex items-center justify-center @click="router.push(nav.path)">
            <div :class="nav.icon" text-xl />
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>
