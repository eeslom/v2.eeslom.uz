<script setup lang="ts">
import { appDescription, appName } from '~/constants'

provideHeadlessUseId(() => useId())

const route = useRoute()

const { isMobile } = useDevice()
const { orientation } = useScreenOrientation()
const isDialogOpen = ref<boolean>(false)

onBeforeMount(() => {
  if (orientation.value === 'portrait-primary' && isMobile) {
    isDialogOpen.value = true
  }
})

watch(orientation, (newOrientation) => {
  if (newOrientation === 'portrait-primary' && isMobile) {
    isDialogOpen.value = true
  }
  else {
    isDialogOpen.value = false
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
          You are visiting this site on your mobile device. I highly recommend you to visit this site with a desktop or a laptop for better user experience, because this website is designed for bigger screens. Unless rotate your screen.
        </HeadlessDialogDescription>
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
