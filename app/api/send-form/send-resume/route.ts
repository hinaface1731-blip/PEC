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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.yandex.ru',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Письмо с информацией о кандидате
    const mailOptions = {
      from: `"ПЭК - Резюме" <${process.env.SMTP_USER}>`,
      to: process.env.HR_EMAIL || 'hr@polar-ec.ru',
      subject: `Новое резюме: ${position} - ${fullName}`,
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
        杉
        
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Письмо сгенерировано автоматически с сайта polar-ec.ru
        </p>
      `,
    }

    await transporter.sendMail(mailOptions)

    // Если есть файл резюме — отправляем отдельным письмом с вложением
    if (resumeFile && resumeFile.size > 0) {
      const fileBuffer = Buffer.from(await resumeFile.arrayBuffer())
      
      await transporter.sendMail({
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