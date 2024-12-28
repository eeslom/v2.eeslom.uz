<script setup lang="ts">
definePageMeta({ title: 'Blog' })

const nuxtApp = useNuxtApp()
onMounted(() => {
  nextTick(() => {
    document.querySelectorAll('.main a').forEach((a) => {
      nuxtApp.hooks.callHook('link:prefetch', a.getAttribute('href')!)
    })
  })
})
</script>

<template>
  <div>
    <TheTitle>
      Stuff I've Written
    </TheTitle>
    <TheContainer class="main" text-muted text-lg>
      <TheBlogIndex />
    </TheContainer>
  </div>
</template>
