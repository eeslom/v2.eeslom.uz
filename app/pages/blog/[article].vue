<script setup lang="ts">
const route = useRoute('blog-article')
const slug = route.params.article
if (!slug)
  navigateTo('/blog')

const path = computed(() =>
  route.path.replace(/(index)?\.json$/, '').replace(/\/$/, ''),
)

const { data: page } = await useAsyncData(
  path.value,
  () =>
    ((import.meta.server || import.meta.dev) as true)
    && queryContent(path.value)
      .only(['title', 'date', 'tags', 'description'])
      .findOne(),
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    fatal: true,
  })
}

route.meta.title = page.value.title

if (import.meta.server)
  useRoute().meta.description = page.value.description
</script>

<template>
  <main text-muted>
    <header v-if="page" leading-none>
      <TheTitle>
        {{ page.title }}
      </TheTitle>
      <dl
        v-if="page.date"
        mt-1 block flex-row flex-wrap text-xs leading-normal uppercase md:flex
      >
        <dt float-left mr-2 md:float-none>
          Published
        </dt>
        <dd mr-4>
          <NuxtTime
            :datetime="page.date"
            day="numeric"
            month="long"
            year="numeric"
          />
        </dd>
        <template v-if="page.tags && page.tags.length">
          <dt float-left mr-2 md:float-none>
            Tags
          </dt>
          <dd mr-4>
            <span
              v-for="(tag, index) in page.tags"
              :key="tag"
              :class="{
                'before:content-empty before:mx-1 before:inline-block': index,
              }"
              v-text="tag"
            />
          </dd>
        </template>
      </dl>
    </header>
    <TheContainer v-if="page" :class="$style.blog">
      <StaticMarkdownRenderer :path="path" />
    </TheContainer>
  </main>
</template>

<style scoped>
header > h1:first-child {
  view-transition-name: heading;
}

header dl dt:first-of-type {
  view-transition-name: published-dt;
}

header dl dd:first-of-type {
  view-transition-name: published-dd;
}
</style>

<style module>
.blog {
  h2 {
    @apply uppercase text-sm;

    letter-spacing: 0.1rem;
  }

  * + h2,
  * + h3,
  * + h4 {
    @apply mt-8;
  }

  div + div {
    @apply mb-6;
  }

  pre {
    @apply font-code text-sm my-0;

    margin-left: -50vw;
    margin-right: -50vw;
    padding: 1rem 50vw !important;

    @media (width < 767px) {
      white-space: pre-wrap;
    }

    + h2,
    + h3,
    + h4 {
      @apply mt-8;
    }

    + p {
      @apply mt-6;
    }
  }

  ol,
  ul {
    @apply pl-6;

    li {
      @apply my-4;

      counter-increment: list;

      &::before {
        @apply -ml-6 mt-2 mr-2 inline-block leading-none;

        width: 1rem;
      }

      > :first-child:not(strong) {
        @apply inline-block;
      }
    }
  }

  ul li::before {
    content: '›';
  }

  ol li::before {
    @apply text-xs;

    content: counter(list);
  }

  /* stylelint-disable-next-line */
  p {
    + pre,
    + p {
      @apply mt-4;
    }

    + ul,
    + ol {
      @apply my-2;
    }

    + table {
      @apply my-4;
    }
  }

  p > code,
  li > code {
    @apply px-2 py-1 mx-1 text-sm text-background bg-primary;
  }

  p + div {
    @apply mt-6 py-1 uppercase text-xs text-gray-600;

    letter-spacing: 0.15rem;
    margin-left: -50vw;
    margin-right: -50vw;
    padding: 1rem 50vw;
  }

  blockquote {
    @apply pl-4 border-l-4 mb-4;
  }
}
</style>
