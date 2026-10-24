import { NextRequest, NextResponse } from 'next/server'
import { createTransport, headerSafe, renderTable } from '@/lib/mail'

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 МБ
const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx']

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const field = (key: string) => String(formData.get(key) ?? '').trim()
    const fullName = field('fullName')
    const email = field('email')
    const phone = field('phone')
    const position = field('position')
    const experience = field('experience')
    const message = field('message')
    const resumeFile = formData.get('resume')

    // Валидация
    if (!fullName || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Заполните все обязательные поля' },
        { status: 400 }
      )
    }

    const attachments = []
    if (resumeFile instanceof File && resumeFile.size > 0) {
      const lowerName = resumeFile.name.toLowerCase()
      if (!ALLOWED_EXTENSIONS.some((ext) => lowerName.endsWith(ext))) {
        return NextResponse.json({ error: 'Допустимые форматы резюме: PDF, DOC, DOCX' }, { status: 400 })
      }
      if (resumeFile.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: 'Файл резюме больше 10 МБ' }, { status: 400 })
      }
      attachments.push({
        filename: resumeFile.name,
        content: Buffer.from(await resumeFile.arrayBuffer()),
        contentType: resumeFile.type || undefined,
      })
    }

    const rows: Array<[string, unknown]> = [
      ['👤 ФИО', fullName],
      ['📧 Email', email],
      ['📞 Телефон', phone],
      ['💼 Желаемая должность', position],
      ['📋 Опыт работы', experience || 'Не указан'],
      ['💬 Дополнительно', message || 'Не указано'],
      ['📎 Файл резюме', attachments.length ? attachments[0].filename : 'Не приложен'],
    ]

    await createTransport().sendMail({
      from: `"ПЭК - Резюме" <${process.env.SMTP_USER}>`,
      to: process.env.HR_EMAIL || 'hr@polar-ec.ru',
      replyTo: email,
      subject: `Новое резюме: ${headerSafe(position, 80)} - ${headerSafe(fullName, 80)}`,
      text: ['Новое резюме с сайта', '', ...rows.map(([label, value]) => `${label}: ${value}`)].join('\n'),
      html: renderTable('📄 Новое резюме', rows),
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending resume:', error)
    return NextResponse.json(
      { error: 'Ошибка при отправке резюме. Попробуйте позже.' },
      { status: 500 }
    )
  }
}
