<script setup lang="ts">
definePageMeta({ title: 'Ask Me Anything' })

const status = ref<'idle' | 'pending' | 'error' | 'success'>('idle')

async function askQuestion(event: Event) {
  if (status.value === 'pending')
    return

  try {
    status.value = 'pending'
    const formData = new FormData(event.target as HTMLFormElement)
    await $fetch('/api/question', {
      method: 'POST',
      body: {
        question: formData.get('question'),
      },
    })
    status.value = 'success'
  }
  catch (error) {
    console.error(error)
    status.value = 'error'
  }
}
</script>

<template>
  <div>
    <TheContainer :class="{ 'opacity-50 pointer-events-none': status === 'pending' }" text-lg>
      <form flex flex-col items-start gap-2 @submit.prevent="askQuestion">
        <label for="question">
          <TheTitle>Ask Me Anything</TheTitle>
        </label>
        <!-- <p>I'll try to <a underlined-link href="https://bsky.app/hashtag/ama?author=eeslom">answer it on social media</a></p> -->
        <textarea id="question" name="question" max-w-400px min-h-10ch inp />
        <button underlined-link type="submit" :disabled="status === 'pending'">
          Ask Anonymously
        </button>
      </form>
      <template v-if="status === 'success'">
        <div mt-8>
          <p flex items-center gap-2>
            <span>
              <div i-codicon-pass-filled text-xl />
            </span>
            question submitted successfully!
          </p>
          <NuxtLink to="/" mt-4 underlined-link>
            Go home
          </NuxtLink>
        </div>
      </template>
    </TheContainer>
  </div>
</template>
