export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { text } = await readBody(event)

  try {
    await $fetch(`https://api.telegram.org/bot${config.telegram.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: config.telegram.CHAT_ID,
        text,
        parse_mode: 'Markdown',
      },
    })
  }
  catch (error) { return error }
})
