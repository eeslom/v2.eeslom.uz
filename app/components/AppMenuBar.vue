<script setup lang="ts">
import { appCreator } from '~/constants'

const menu: string[] = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help']

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <div h-33px flex items-center justify-between bg-gray text-sm>
    <div flex flex-1 items-center gap-x-2 px-3>
      <span class="i-vscode-icons-file-type-vscode" text-base />
      <ul hidden lg:flex>
        <li v-for="item in menu" :key="item" p="x2.5 y0.7" select-none rounded-md text-white text-op-80 hover:bg-border>
          {{ item }}
        </li>
      </ul>
    </div>
    <div absolute flex-1 text-center text-xs text-white text-op-80 md:text-base sm:text-sm class="left-1/2 -translate-x-1/2">
      <p><span hidden sm:inline-block>{{ appCreator }} -</span> Visual Studio Code</p>
    </div>
    <div ml-auto hidden h-full items-center sm:flex>
      <button aspect-square h-full flex items-center justify-center p-3 duration-100 hover:bg-primary-sidebar>
        <div i-codicon-chrome-minimize />
      </button>
      <button aspect-square h-full flex items-center justify-center p-3 duration-100 hover:bg-primary-sidebar @click="toggle">
        <div v-if="isFullscreen" i-codicon-chrome-restore />
        <div v-else i-codicon-chrome-maximize />
      </button>
      <button aspect-square h-full flex items-center justify-center p-3 duration-100 hover:bg-red-6>
        <div i-codicon-chrome-close />
      </button>
    </div>
  </div>
</template>
