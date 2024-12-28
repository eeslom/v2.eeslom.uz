<script setup lang="ts">
// definePageMeta({ title: 'Uses' })

useHead({
  title: 'Uses',
})
</script>

<template>
  <div>
    <TheTitle>
      some of tech and accesorries I use
    </TheTitle>
    <TheContainer :class="$style.uses">
      <StaticMarkdownRenderer path="/uses" />
    </TheContainer>
  </div>
</template>

<style module>
.uses {
  h2,
  h3 {
    @apply text-lg;
  }

  h2:not(:first-child),
  h3 {
    @apply mt-6;
  }

  ul {
    @apply mt-4 pl-4;

    list-style-type: circle;

    ul {
      list-style-type: '‣ ';
    }
  }
}
</style>
