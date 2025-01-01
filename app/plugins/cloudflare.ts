export default defineNuxtPlugin({
  enforce: 'pre',
  env: { islands: false },
  setup() {
    if (import.meta.test || import.meta.dev) {
      return
    }

    useScriptCloudflareWebAnalytics({ token: '2f035c836f934a538185bbcbc12d6345' })
  },
})
