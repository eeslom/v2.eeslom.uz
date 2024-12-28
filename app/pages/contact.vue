<script setup lang="ts">
import type { SocialType } from '~/types/Social'
import confetti from 'canvas-confetti'

// definePageMeta({ title: 'Contact' })

const socials = ref<SocialType[]>([
  {
    name: 'website',
    text: 'islomurodov.uz',
    url: 'https://www.islomurodov.uz',
  },
  {
    name: 'email',
    text: 'hi@islomurodov.uz',
    url: 'mailto:hi@islomurodov.uz',
  },
  {
    name: 'x',
    text: 'islomurodov',
    url: 'https://x.com/islomurodov',
  },
  {
    name: 'youtube',
    text: '@islomurodov',
    url: 'https://www.youtube.com/@islomurodov',
  },
  {
    name: 'telegram',
    text: '@islom_power',
    url: 'https://t.me/islom_power',
  },
  {
    name: 'github',
    text: 'islomurodov',
    url: 'https://github.com/islomurodov',
  },
  {
    name: 'linkedin',
    text: 'islomurodov',
    url: 'https://www.linkedin.com/in/islomurodov',
  },
])
const codeLines = ref<string[]>(['<span text-yellow>.socials</span> {'])

socials.value.forEach((social) => {
  codeLines.value.push(`  ${social.name}: <a href="${social.url}" target="_blank" text-yellow hover:underline rel="noopener noreferrer">${social.text}</a>;`)
})
codeLines.value.push('}')

const state = reactive<{ name: string, email: string, subject: string, message: string, loading: boolean, error: string }>({
  name: '',
  email: '',
  subject: '',
  message: '',
  loading: false,
  error: '',
})

async function sendContact() {
  const emailPattern = /^[\w.-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i

  if (!state.name && emailPattern.test(state.email) && !state.subject && !state.message)
    return

  state.loading = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        text: `*Name:* ${state.name}\n*Email:* ${state.email}\n*Subject:* ${state.subject}\n*Message:* ${state.message}`,
      },
    })

    state.name = ''
    state.email = ''
    state.subject = ''
    state.message = ''
    state.loading = false

    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 },
    })
  }
  catch (err) {
    state.error = 'Error while sending a form. Please try again later.'
    throw err
  }
  finally {
    state.loading = false
  }
}

useHead({
  title: 'Contact',
})
</script>

<template>
  <div>
    <TheContainer>
      <div grid grid-cols-1 md:grid-cols-2>
        <div>
          <TheTitle>
            Reach me out via socials
          </TheTitle>
          <pre v-if="codeLines" md:text-lg>
<span v-for="(code, index) in codeLines" :key="index + 1"><span text-white text-op-60>{{ index + 1 }}</span>  <span v-html="code" />
</span>
        </pre>
        </div>
        <div>
          <TheTitle>
            Or fill out this form
          </TheTitle>
          <form grid gap-4 md:grid-cols-2 @submit.prevent="sendContact">
            <div col-span-1>
              <label for="name" capitalize>Name</label>
              <input id="name" v-model="state.name" required inp name="name" type="text">
            </div>
            <div col-span-1>
              <label for="email" capitalize>Email</label>
              <input id="email" v-model="state.email" required inp name="email" type="email">
            </div>
            <div md:col-span-2>
              <label for="subject" capitalize>Subject</label>
              <input id="subject" v-model="state.subject" required inp name="subject" type="text">
            </div>
            <div md:col-span-2>
              <label for="message" capitalize>Message</label>
              <textarea id="message" v-model="state.message" required resize-none inp name="message" />
            </div>
            <button bg-yellow text-initial font-semibold btn type="submit" :disabled="state.loading">
              Submit
            </button>
          </form>
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<style scoped>
pre {
  line-height: 1.5;
  white-space: pre;
}
</style>
