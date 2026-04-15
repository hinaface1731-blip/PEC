export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, organization, phone, email, subject, message } = body

    const telegramToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!telegramToken || !chatId) {
      return Response.json({ error: 'Telegram configuration missing' }, { status: 500 })
    }

    const text = `📩 *Новая заявка с сайта ПЭК*

*Имя:* ${name}
*Организация:* ${organization || '-'}
*Телефон:* ${phone}
*Email:* ${email || '-'}
*Тема:* ${subject || '-'}
*Сообщение:* ${message || '-'}`

    const response = await fetch(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown'
        })
      }
    )

    if (!response.ok) {
      return Response.json({ error: 'Failed to send to Telegram' }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}