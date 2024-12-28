<script setup lang="ts">
import type { NavType } from '~/types/Nav'

const statuses = [
  [
    {
      title: 'islomurodov.uz',
      path: '',
      icon: 'i-codicon-folder-opened',
      class: 'pl-2',
      titleClass: 'hidden sm:inline-block',
    },
    {
      title: '0',
      path: '',
      icon: 'i-codicon-error',
    },
    {
      title: '1',
      path: '',
      icon: 'i-codicon-warning',
    },
    {
      title: '2',
      path: '',
      icon: 'i-codicon-info',
    },
  ],
  [
    {
      title: 'UTF-8',
    },
    {
      title: 'CRLF',
    },
    {
      title: 'Vue',
      icon: 'i-codicon-bracket-dot',
    },
    {
      icon: 'i-codicon-bell-dot',
    },
  ],
] as [NavType[], NavType[]]
</script>

<template>
  <div h-22px w-full flex bg-blue>
    <div w-9 flex items-center justify-center bg-green text-white>
      <div class="i-codicon-remote" text-xs />
    </div>
    <div w-full flex justify-between p="x0.2">
      <ul v-for="(status, index) in statuses" :key="index" flex gap-x-1 text-xs>
        <li v-for="nav in status" :key="nav.title" flex cursor-pointer items-center gap-x-1 px-1 hover:bg-white hover:bg-op-10 sm:px-2 :class="[nav.class ? nav.class : '']">
          <div v-if="nav.icon" :class="nav.icon" />
          <span :class="nav.titleClass || ''">{{ nav.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
