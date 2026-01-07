<script setup lang="ts">
definePageMeta({ title: 'Uses' })
</script>

<template>
  <div>
    <TheTitle>
      Some of the things I'm using
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
    @apply text-lg font-semibold;
  }

  h2:not(:first-child),
  h3 {
    @apply mt-6;
  }

  h4:not(:first-child) {
    @apply mt-4;
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
