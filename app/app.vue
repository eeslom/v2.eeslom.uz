<script setup lang="ts">
import { appDescription, appName } from '~/constants'

provideHeadlessUseId(() => useId())

const route = useRoute()

const { isMobile } = useDevice()
const isDialogOpen = ref<boolean>(false)
const enteringTime = ref<number>(10)

onBeforeMount(() => {
  if (isMobile) {
    isDialogOpen.value = true
    setInterval(() => {
      enteringTime.value--
    }, 1000)
  }
})

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => (title ? `${title} - ${appName}` : appName),
  htmlAttrs: { lang: 'en' },
})

useSeoMeta({
  ogTitle: appName,
  ogDescription: appDescription,
  ogLocale: 'en_US',
})
</script>

<template>
  <HeadlessDialog fixed inset-0 z-10 overflow-y-auto :open="isDialogOpen" @close="isDialogOpen = false">
    <div h-full flex items-center justify-center p-6>
      <div fixed inset-0 bg-menu-background />

      <div z-10 mx-auto>
        <HeadlessDialogTitle text-2xl text-yellow font-medium>
          Warning!
        </HeadlessDialogTitle>
        <HeadlessDialogDescription text-gray-500 mt-2 text-sm>
          You are visiting this site on your mobile device. We recommend you to visit this site on a desktop or a laptop for a better user experience, because this website is only adapted for bigger screens.  Unless, press OK to continue.
        </HeadlessDialogDescription>

        <div mt-4>
          <button btn :disabled="enteringTime > 0" @click="isDialogOpen = false">
            OK <span v-if="enteringTime > 0">({{ enteringTime.toString().padStart(2, '0') }})</span>
          </button>
        </div>
      </div>
    </div>
  </HeadlessDialog>

  <VitePwaManifest />
  <NuxtLayout v-show="!isDialogOpen">
    <NuxtLoadingIndicator color="#007ACC" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html {
  @apply: bg-background;
  color: white;
}
</style>
