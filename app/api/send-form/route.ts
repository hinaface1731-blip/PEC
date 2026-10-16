import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const escapeHtml = (value: unknown) =>
  String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char] as string)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Некорректные данные формы' }, { status: 400 })
    }

    const { name, organization, phone, email, subject, message } = body as Record<string, unknown>
    const fields = [name, organization, phone, email, subject, message]
    if (fields.some((value) => value != null && typeof value !== 'string')) {
      return NextResponse.json({ error: 'Некорректные данные формы' }, { status: 400 })
    }
    if ([name, organization, phone, email, subject, message].some((value) => typeof value === 'string' && value.length > 5000)) {
      return NextResponse.json({ error: 'Слишком длинное значение поля' }, { status: 400 })
    }
    if (typeof name !== 'string' || !name.trim() || typeof phone !== 'string' || !phone.trim()) {
      return NextResponse.json({ error: 'Заполните имя и телефон' }, { status: 400 })
    }

    const safeName = name.trim()
    const safeOrganization = typeof organization === 'string' ? organization.trim() : ''
    const safePhone = phone.trim()
    const safeEmail = typeof email === 'string' ? email.trim() : ''
    const safeSubject = (typeof subject === 'string' ? subject.trim() : '').replace(/[\r\n]/g, ' ')
    const safeMessage = typeof message === 'string' ? message.trim() : ''

    if (safeEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail)) {
      return NextResponse.json({ error: 'Проверьте адрес электронной почты' }, { status: 400 })
    }
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Contact form: SMTP credentials are not configured')
      return NextResponse.json({ error: 'Отправка временно недоступна' }, { status: 503 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.yandex.ru',
      port: Number.parseInt(process.env.SMTP_PORT || '465', 10),
      secure: (process.env.SMTP_PORT || '465') === '465',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    })

    const rows: [string, string][] = [
      ['Имя', safeName],
      ['Организация', safeOrganization || '—'],
      ['Телефон', safePhone],
      ['Email', safeEmail || '—'],
      ['Тема', safeSubject || '—'],
      ['Сообщение', safeMessage || '—'],
    ]
    const html = `<h2>Новая заявка с сайта</h2><table style="border-collapse:collapse;width:100%">${rows.map(([label, value]) => `<tr><th style="text-align:left;padding:8px;border:1px solid #ddd">${escapeHtml(label)}</th><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join('')}</table><p style="margin-top:20px;color:#666;font-size:12px">Письмо сгенерировано автоматически с сайта polar-ec.ru</p>`

    await transporter.sendMail({
      from: `"ПЭК — заявка" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || 'info@polar-ec.ru',
      replyTo: safeEmail || undefined,
      subject: `Новая заявка: ${safeSubject || 'Коммерческое предложение'} — ${safeName.replace(/[\r\n]/g, ' ')}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join('\n'),
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Ошибка при отправке. Попробуйте позже.' }, { status: 500 })
  }
}
