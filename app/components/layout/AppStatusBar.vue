<script setup lang="ts">
import type { NavType } from '~/types/Nav'
import PartySocket from 'partysocket'

const count = ref<null | number>(null)

const statuses = [
  [
    {
      title: 'eeslom.uz',
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

if (import.meta.client) {
  let partySocket: PartySocket
  onNuxtReady(() => {
    partySocket = new PartySocket({
      host: import.meta.dev ? 'localhost:1999' : 'v.islomurodov.partykit.dev',
      room: 'site',
    })

    partySocket.onmessage = (evt) => {
      const data = evt.data as string
      const [type, value] = data.split(':')
      if (!value)
        return
      switch (type) {
        case 'connections':
          count.value = Number.parseInt(value)
          break
      }
    }
  })

  onBeforeUnmount(() => partySocket?.close())
  onDeactivated(() => partySocket?.close())
  onActivated(() => partySocket?.reconnect())
}
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
        <li :title="`${count} viewers on website`" mr-1 flex cursor-pointer items-center gap-x-1 px-1 hover:bg-white hover:bg-op-10 sm:px-2>
          <span shadow-green-800 inline-block h-2 w-2 animate-pulse rounded-full bg-white shadow />
          <span ml-1 flex flex-row items-center gap-1 tracking-wider uppercase>
            {{ count || '&nbsp;' }}
            <span v-if="count" sr-only>viewers on website</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
