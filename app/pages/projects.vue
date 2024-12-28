<script setup lang="ts">
import type { ProjectType } from '~/types/Project'

definePageMeta({ title: 'Projects' })

const projects = ref<ProjectType[]>([
  {
    name: 'My Old Portfolio',
    description: 'My first own portfolio website. Before this one. Now it is archived.',
    image: '/assets/projects/old-portfolio.webp',
    url: 'https://old.islomurodov.uz/',
    github_url: 'https://github.com/islomurodov/old.islomurodov.uz',
    technologies: ['Vue', 'Nuxt', 'TailwindCSS', 'Shadcn UI', 'Lenis'],
  },
  {
    name: 'Imovi.uz',
    description: 'Totally free cinema app. Just visit and watch',
    image: '/assets/projects/imovi.webp',
    url: 'https://www.imovi.uz/',
    github_url: 'https://github.com/islomurodov/imovi',
    technologies: ['Vue', 'Nuxt', 'Supabase', 'TMDB API'],
  },
  {
    name: 'Qr Radar',
    description: 'Share your information just by qr code.',
    image: '/assets/projects/qr-radar.webp',
    url: 'https://qr-radar-just-code.netlify.app/',
    github_url: '',
    technologies: ['Vue', 'Pinia', 'NodeJS'],
  },
  {
    name: 'Pomodoro App',
    description: 'Pomodoro app organize your work efficiently.',
    image: '/assets/projects/pomodoro.webp',
    url: 'https://pomodoro-app-islom.netlify.app/',
    github_url: 'https://github.com/islomurodov/pomodoro-app',
    technologies: ['Vue', 'Pinia'],
  },
  {
    name: 'Movie App',
    description: 'Movie, TV Shows or People browsing web app.',
    image: '/assets/projects/movie-app.webp',
    url: 'https://movie-app-v2-gray.vercel.app/',
    github_url: 'https://github.com/islomurodov/movie-app-v2',
    technologies: ['Vue', 'Nuxt', 'TMDB API'],
  },
  {
    name: 'Todo App',
    description: 'List your things that you do daily and control.',
    image: '/assets/projects/todo-app.webp',
    url: 'https://todo-islom.netlify.app/',
    github_url: 'https://github.com/islomurodov/todo-app-v2',
    technologies: ['Vue'],
  },
  {
    name: 'Google Sign-up',
    description: 'Just Google Sign-Up page clone.',
    image: '/assets/projects/google-signup-page-clone.webp',
    url: 'https://google-sign-up.netlify.app/',
    github_url: '',
    technologies: ['React'],
  },
  {
    name: 'GitHub user browser',
    description: 'Browse users profile from GitHub.',
    image: '/assets/projects/github-user-browser.webp',
    url: 'https://github-search-app-islom.vercel.app/',
    github_url: 'https://github.com/islomurodov/github-user-search-app',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Smart Home',
    description: 'Landing page called \'Smart Home\'',
    image: '/assets/projects/smart-home.webp',
    url: 'https://lighthearted-kulfi-0dff34.netlify.app/',
    github_url: 'https://github.com/islomurodov/smart-home-landing-page',
    technologies: ['HTML', 'CSS', 'TailwindCSS', 'jQuery'],
  },
  {
    name: 'Arxiv.uz',
    description:
      'Archiving helpful and useful data such as e-books or articles and etc.',
    image: '/assets/projects/arxiv.webp',
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
      <ul grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4>
        <li v-for="project in projects" :key="project.name" relative flex flex-col overflow-hidden rounded-sm bg-menu-background shadow-sm>
          <span inline-block h-initial w-initial bg-gray>
            <NuxtImg v-if="project.image" loading="eager" w-full object-contain :src="project.image" />
          </span>
          <article h-full flex flex-col justify-between p-4>
            <h3 text-yellow font-semibold>
              {{ project.name }}
            </h3>
            <p mt-2 text-sm text-white text-op-80>
              {{ project.description }}
            </p>
            <div mt-3 flex flex-wrap gap-2 text-xs>
              <span v-for="technology in project.technologies" :key="technology" p="x2 y0.5" border rounded-lg>
                {{ technology }}
              </span>
            </div>
            <div mt-3 space-x-5>
              <a btn-link rel="noopener" :href="project.github_url" target="_blank">Source Code</a>
              <a btn-link rel="noopener" :href="project.url" target="_blank">Live Demo</a>
            </div>
          </article>
        </li>
      </ul>
    </TheContainer>
  </div>
</template>
