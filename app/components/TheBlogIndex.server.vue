<script setup lang="ts">
const entries = await queryContent('/blog')
  .only(['title', 'date', '_path'])
  .find()
  .then((result) => {
    return (result as Array<{ title?: string, date: string, _path: string }>)
      .map(e => ({
        ...e,
        path: e._path,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  })
</script>

<template>
  <!-- <ul flex flex-col gap-4>
    <NuxtLink v-for="{ title, path, date } in entries" :key="path" :to="path" :title="title">
      <li>
        <article>
          <span underlined-link>
            {{ title }}
          </span>
          <dl v-if="date" mt-3 text-xs leading-normal uppercase md:mt-1>
            <dt sr-only>
              Published
            </dt>
            <dd mr-4>
              <NuxtTime
                :datetime="date"
                year="numeric"
                month="long"
                day="numeric"
              />
            </dd>
          </dl>
        </article>
      </li>
    </NuxtLink>
  </ul> -->
  <pre>
    {{ entries }}
  </pre>
</template>

<style scoped>
a:focus,
a:active,
a:hover {
  header span {
    view-transition-name: heading;
  }

  dl dt {
    view-transition-name: published-dt;
  }

  dl dd {
    view-transition-name: published-dd;
  }
}
</style>
