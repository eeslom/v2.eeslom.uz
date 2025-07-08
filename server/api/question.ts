import { sendPushoverNotification } from '../utils/pushover'

export default defineEventHandler(async (event) => {
  if (event.method === 'OPTIONS')
    return null

  assertMethod(event, 'POST')
  const { question } = await readBody(event)
  if (!question)
    throw createError({ statusCode: 422 })

  await sendPushoverNotification(event, {
    title: 'Anonymus question',
    message: question,
    priority: 0,
  })
})
