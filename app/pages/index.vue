<script setup lang="ts">
import Typed from 'typed.js'
import { appCreator } from '~/constants'

definePageMeta({ title: 'Home' })

const router = useRouter()

onMounted(() => {
  const options = {
    strings: ['a Tech-loving developer', 'an ex-Frontend-Developer', 'a Freelancer', 'a Tech Enthusiast'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  const typed = new Typed('.typed-element', options)
})
</script>

<template>
  <section relative h-full w-full flex items-center bg-cover bg-center-right bg-no-repeat text-white>
    <div z-1 mx-auto md:mx-0>
      <div relative>
        <h1 text-center text-4xl md:text-left lg:text-6xl md:text-5xl sm:text-4xl>
          {{ appCreator }}
        </h1>
        <p mt-2 block text-center text-lg md:text-left md:text-2xl sm:text-xl>
          Hello I'm
          <span class="typed-element" text-yellow font-semibold />
        </p>
      </div>

      <div mx-auto mt-5 w-max md:mr-0 sm:mt-7 md:w-auto space-x-5>
        <button aria-label="View my works" btn @click="router.push('/projects')">
          View work
        </button>
        <button aria-label="Contact me" btn-outline @click="router.push('/contact')">
          contact me
        </button>
      </div>
    </div>
    <div absolute right-0 hidden xl:block>
      <svg
        width="486" height="534" viewBox="0 0 486 534" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="HomePage_illustration__sclzu"
      >
        <circle cx="167" cy="60" r="60" fill="#D7CB66" />
        <circle cx="37.5" cy="215.5" r="37.5" fill="#007ACC" />
        <path
          fill-rule="evenodd" clip-rule="evenodd"
          d="M486 144.469c-38.145-31.86-87.255-51.033-140.842-51.033-121.415 0-219.842 98.427-219.842 219.842 0 14.167 1.34 28.02 3.9 41.441 47.414-86.154 91.678-142.17 146.717-170.767 56.069-29.132 121.816-29.08 210.067-6.68v-32.803zm0 48.288v289.33c-38.145 31.86-87.255 51.033-140.842 51.033-100.321 0-184.947-67.197-211.325-159.037l1.502.805c49.937-93.22 94.046-149.844 147.514-177.625 52.014-27.025 114.411-27.498 203.151-4.506z"
          fill="#007ACC"
        />
      </svg>
    </div>
    <div absolute z--1 hidden text-30 text-white text-op-3 font-black font-montserrat uppercase sm:block md:text-40>
      <h1>
        I build
      </h1>
      <h1>
        websites
      </h1>
    </div>
  </section>
</template>
