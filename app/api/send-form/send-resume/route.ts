import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const experience = formData.get('experience') as string
    const message = formData.get('message') as string
    const resumeFile = formData.get('resume') as File

    // Валидация
    if (!fullName || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Заполните все обязательные поля' },
        { status: 400 }
      )
    }

    // Настройка транспортера для отправки email
    // Используйте ваши реальные данные от почтового ящика
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.yandex.ru',  // Для Яндекс.Почты
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true для 465, false для других портов
      auth: {
        user: process.env.SMTP_USER, // ваш email
        pass: process.env.SMTP_PASSWORD, // пароль от почты
      },
    })

    // Подготовка письма
    const mailOptions = {
      from: `"ПЭК - Резюме" <${process.env.SMTP_USER}>`,
      to: process.env.HR_EMAIL || 'hr@polar-ec.ru', // куда отправлять резюме
      subject: `Новое резюме: ${position} - ${fullName}`,
      text: `
        📄 НОВОЕ РЕЗЮМЕ
        
        👤 ФИО: ${fullName}
        📧 Email: ${email}
        📞 Телефон: ${phone}
        💼 Должность: ${position}
        
        📋 Опыт работы:
        ${experience || 'Не указан'}
        
        💬 Дополнительная информация:
        ${message || 'Не указано'}
      `,
      html: `
        <h2>📄 Новое резюме</h2>
        
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>👤 ФИО</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>📧 Email</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr style="background: #f5f5f5;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>📞 Телефон</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>💼 Желаемая должность</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${position}</td>
          </tr>
          <tr style="background: #f5f5f5;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>📋 Опыт работы</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${experience || 'Не указан'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>💬 Дополнительно</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${message || 'Не указано'}</td>
          </tr>
        </table>
        
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Письмо сгенерировано автоматически с сайта polar-ec.ru
        </p>
      `,
    }

    // Отправляем письмо
    await transporter.sendMail(mailOptions)

    // Если есть файл резюме, отправляем его вложением
    if (resumeFile && resumeFile.size > 0) {
      const fileBuffer = Buffer.from(await resumeFile.arrayBuffer())
      
      const fileMailOptions = {
        ...mailOptions,
        subject: `[ФАЙЛ] Резюме: ${position} - ${fullName}`,
        text: `Файл резюме кандидата ${fullName} на должность ${position}`,
        html: `<p>Файл резюме кандидата <strong>${fullName}</strong> на должность <strong>${position}</strong>.</p>`,
        attachments: [
          {
            filename: resumeFile.name,
            content: fileBuffer,
            contentType: resumeFile.type,
          },
        ],
      }
      
      await transporter.sendMail(fileMailOptions)
    }

    // Также отправляем уведомление в Telegram (опционально)
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (botToken && chatId) {
      let telegramMessage = `📄 **НОВОЕ РЕЗЮМЕ**\n\n`
      telegramMessage += `👤 **ФИО:** ${fullName}\n`
      telegramMessage += `📧 **Email:** ${email}\n`
      telegramMessage += `📞 **Телефон:** ${phone}\n`
      telegramMessage += `💼 **Должность:** ${position}\n`
      if (experience) telegramMessage += `📋 **Опыт:** ${experience.substring(0, 100)}...\n`
      if (message) telegramMessage += `💬 **Сообщение:** ${message.substring(0, 100)}...\n`

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending resume:', error)
    return NextResponse.json(
      { error: 'Ошибка при отправке резюме. Попробуйте позже.' },
      { status: 500 }
    )
  }
}