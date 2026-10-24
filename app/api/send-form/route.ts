import { NextRequest, NextResponse } from 'next/server'
import { createTransport, headerSafe, renderTable } from '@/lib/mail'

export async function POST(request: NextRequest) {
  try {
    const { name, organization, phone, email, subject, message } = await request.json()

    // Валидация
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Заполните все обязательные поля' },
        { status: 400 }
      )
    }

    const rows: Array<[string, unknown]> = [
      ['👤 Имя', name],
      ['🏢 Организация', organization || '—'],
      ['📞 Телефон', phone],
      ['📧 Email', email || '—'],
      ['📝 Тема', subject || '—'],
      ['💬 Сообщение', message || '—'],
    ]

    await createTransport().sendMail({
      from: `"ПЭК - Заявка" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || 'info@polar-ec.ru',
      replyTo: email || undefined,
      subject: `Новая заявка: ${headerSafe(subject || 'Коммерческое предложение')} - ${headerSafe(name, 80)}`,
      text: ['Новая заявка с сайта', '', ...rows.map(([label, value]) => `${label}: ${value}`)].join('\n'),
      html: renderTable('📋 Новая заявка с сайта', rows),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Ошибка при отправке. Попробуйте позже.' },
      { status: 500 }
    )
  }
}
