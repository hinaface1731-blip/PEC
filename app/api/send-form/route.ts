import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

    // Настройка транспортера
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.yandex.ru',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Формируем HTML письмо
    const html = `
      <h2>📋 Новая заявка с сайта</h2>
      
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>👤 Имя</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>🏢 Организация</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${organization || '—'}</td>
        </tr>
        <tr style="background: #f5f5f5;">
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>📞 Телефон</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>📧 Email</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email || '—'}</td>
        </tr>
        <tr style="background: #f5f5f5;">
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>📝 Тема</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${subject || '—'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>💬 Сообщение</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
        </tr>
      杉
      
      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        Письмо сгенерировано автоматически с сайта polar-ec.ru
      </p>
    `

    // Отправляем письмо
    await transporter.sendMail({
      from: `"ПЭК - Заявка" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || 'info@polar-ec.ru',
      subject: `Новая заявка: ${subject || 'Коммерческое предложение'} - ${name}`,
      text: `
        Новая заявка с сайта
        
        Имя: ${name}
        Организация: ${organization || '—'}
        Телефон: ${phone}
        Email: ${email || '—'}
        Тема: ${subject || '—'}
        Сообщение: ${message}
      `,
      html,
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