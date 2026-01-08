<script setup lang="ts">
import type { ProjectType } from '~/types/Project'

definePageMeta({ title: 'Projects' })

const projects = ref<ProjectType[]>([
  {
    name: 'My Second Portfolio Website',
    description: 'My second portfolio website. It',
    image: '/assets/projects/large/v2-portfolio.webp',
    url: 'https://www.eeslom.uz/',
    github_url: 'https://github.com/eeslom/v3.eeslom.uz',
    technologies: ['Vue', 'Nuxt', 'UnoCSS'],
  },
  {
    name: 'My First Portfolio Website',
    description: 'My first own portfolio website. Before this one. Now it is archived.',
    image: '/assets/projects/large/v1-portfolio.webp',
    url: 'https://v1.eeslom.uz/',
    github_url: 'https://github.com/eeslom/v1.eeslom.uz',
    technologies: ['Vue', 'Nuxt', 'TailwindCSS', 'Shadcn UI', 'Lenis'],
  },
  {
    name: 'Imovi.uz',
    description: 'Totally free cinema app. Just visit and watch',
    image: '/assets/projects/large/imovi.webp',
    url: 'https://www.imovi.uz/',
    github_url: 'https://github.com/eeslom/imovi',
    technologies: ['Vue', 'Nuxt', 'Supabase', 'TMDB API'],
  },
  {
    name: 'Qr Radar',
    description: 'Share your information just by qr code.',
    image: '/assets/projects/large/qr-radar.webp',
    url: 'https://qr-radar-just-code.netlify.app/',
    github_url: '',
    technologies: ['Vue', 'Pinia', 'NodeJS'],
  },
  {
    name: 'Pomodoro App',
    description: 'Pomodoro app organize your work efficiently.',
    image: '/assets/projects/large/pomodoro.webp',
    url: 'https://pomodoro-app-islom.netlify.app/',
    github_url: 'https://github.com/eeslom/pomodoro-app',
    technologies: ['Vue', 'Pinia'],
  },
  {
    name: 'Movie App',
    description: 'Movie, TV Shows or People browsing web app.',
    image: '/assets/projects/large/movie-app.webp',
    url: 'https://movie-app-v2-gray.vercel.app/',
    github_url: 'https://github.com/eeslom/movie-app-v2',
    technologies: ['Vue', 'Nuxt', 'TMDB API'],
  },
  // {
  //   name: 'Todo App',
  //   description: 'List your things that you do daily and control.',
  //   image: '/assets/projects/large/todo-app.webp',
  //   url: 'https://todo-islom.netlify.app/',
  //   github_url: 'https://github.com/eeslom/todo-app-v2',
  //   technologies: ['Vue'],
  // },
  {
    name: 'Google Sign-up',
    description: 'Just Google Sign-Up page clone.',
    image: '/assets/projects/large/google-signup-page-clone.webp',
    url: 'https://google-sign-up.netlify.app/',
    github_url: '',
    technologies: ['React'],
  },
  {
    name: 'GitHub user browser',
    description: 'Browse users profile from GitHub.',
    image: '/assets/projects/large/github-user-browser.webp',
    url: 'https://github-search-app-islom.vercel.app/',
    github_url: 'https://github.com/eeslom/github-user-search-app',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  // {
  //   name: 'Smart Home',
  //   description: 'Landing page called \'Smart Home\'',
  //   image: '/assets/projects/large/smart-home.webp',
  //   url: 'https://lighthearted-kulfi-0dff34.netlify.app/',
  //   github_url: 'https://github.com/eeslom/smart-home-landing-page',
  //   technologies: ['HTML', 'CSS', 'TailwindCSS', 'jQuery'],
  // },
  {
    name: 'Arxiv.uz',
    description:
      'Archiving helpful and useful data such as e-books or articles and etc.',
    image: '/assets/projects/large/arxiv.webp',
    url: 'https://www.arxiv.uz/',
    github_url: '',
    technologies: ['Vue', 'CSS', 'Bootstrap'],
  },
])
</script>

<template>
  <div>
    <TheTitle>
      Stuff I've built so far
    </TheTitle>
    <TheContainer mt-6>
      <ul grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3>
        <li v-for="project in projects" :key="project.name" relative flex flex-col overflow-hidden rounded-sm bg-menu-background shadow-sm>
          <span inline-block h-initial w-initial bg-gray>
            <NuxtImg v-if="project.image" loading="eager" quality="80" :preload="{ fetchPriority: 'high' }" w-full object-contain :alt="project.name" :src="project.image" />
          </span>
          <article h-full flex flex-col justify-between gap-y-2 p-4>
            <h3 text-lg text-yellow font-semibold>
              {{ project.name }}
            </h3>
            <p mt-2 text-base text-white text-op-80>
              {{ project.description }}
            </p>
            <div mt-3 flex flex-wrap gap-2 text-xs>
              <span v-for="technology in project.technologies" :key="technology" p="x2 y0.5" border rounded-lg>
                {{ technology }}
              </span>
            </div>
            <div mt-3 space-x-5>
              <a v-if="project.github_url" btn-link rel="noopener" :href="project.github_url" target="_blank">Source Code</a>
              <a v-if="project.url" btn-link rel="noopener" :href="project.url" target="_blank">Live Demo</a>
            </div>
          </article>
        </li>
      </ul>
    </TheContainer>
  </div>
</template>
