import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const MAX_FILE_SIZE = 8 * 1024 * 1024
const ALLOWED_EXTENSIONS = new Set(['.pdf', '.doc', '.docx', '.rtf', '.odt'])
const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/rtf',
  'text/rtf',
  'application/vnd.oasis.opendocument.text',
  'application/octet-stream',
])

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char] as string)

const getText = (value: FormDataEntryValue | null) =>
  typeof value === 'string' ? value.trim() : ''

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData()
    const fullName = getText(form.get('fullName'))
    const email = getText(form.get('email'))
    const phone = getText(form.get('phone'))
    const position = getText(form.get('position'))
    const experience = getText(form.get('experience'))
    const message = getText(form.get('message'))
    const resume = form.get('resume')

    if (!fullName || !email || !phone) {
      return NextResponse.json({ error: 'Укажите имя, email и телефон.' }, { status: 400 })
    }

    if (
      fullName.length > 200 ||
      email.length > 320 ||
      phone.length > 100 ||
      position.length > 200 ||
      experience.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json({ error: 'Одно из полей превышает допустимую длину.' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Проверьте адрес электронной почты.' }, { status: 400 })
    }

    const attachments: { filename: string; content: Buffer; contentType?: string }[] = []
    if (resume instanceof File && resume.size > 0) {
      const filename = resume.name.replace(/\\/g, '/').split('/').pop() ?? 'resume'
      const extension = filename.includes('.') ? filename.slice(filename.lastIndexOf('.')).toLowerCase() : ''

      if (resume.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: 'Файл резюме должен быть не больше 8 МБ.' }, { status: 400 })
      }
      if (!ALLOWED_EXTENSIONS.has(extension) || !ALLOWED_MIME_TYPES.has(resume.type || 'application/octet-stream')) {
        return NextResponse.json({ error: 'Поддерживаются файлы PDF, DOC, DOCX, RTF и ODT.' }, { status: 400 })
      }

      attachments.push({
        filename: filename.replace(/[\r\n"]/g, '_'),
        content: Buffer.from(await resume.arrayBuffer()),
        contentType: resume.type || undefined,
      })
    } else if (resume && !(resume instanceof File)) {
      return NextResponse.json({ error: 'Некорректный файл резюме.' }, { status: 400 })
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Resume form: SMTP credentials are not configured')
      return NextResponse.json({ error: 'Отправка временно недоступна.' }, { status: 503 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.yandex.ru',
      port: Number.parseInt(process.env.SMTP_PORT || '465', 10),
      secure: (process.env.SMTP_PORT || '465') === '465',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    })

    const rows: [string, string][] = [
      ['Имя', fullName],
      ['Email', email],
      ['Телефон', phone],
      ['Вакансия', position || '—'],
      ['Опыт работы', experience || '—'],
      ['Комментарий', message || '—'],
    ]
    const html = '<h2>Новый отклик на вакансию</h2><table style="border-collapse:collapse;width:100%">' +
      rows.map(([label, value]) => '<tr><th style="text-align:left;padding:8px;border:1px solid #ddd">' +
        escapeHtml(label) + '</th><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">' +
        escapeHtml(value) + '</td></tr>').join('') + '</table>'

    await transporter.sendMail({
      from: '"ПЭК — отклик на вакансию" <' + process.env.SMTP_USER + '>',
      to: process.env.HR_EMAIL_TO || process.env.EMAIL_TO || 'hr@polar-ec.ru',
      replyTo: { name: fullName, address: email },
      subject: 'Отклик на вакансию: ' + (position || 'не указана').replace(/[\r\n]/g, ' ') + ' — ' + fullName.replace(/[\r\n]/g, ' '),
      text: [
        'Новый отклик на вакансию',
        'Имя: ' + fullName,
        'Email: ' + email,
        'Телефон: ' + phone,
        'Вакансия: ' + (position || '—'),
        'Опыт работы: ' + (experience || '—'),
        'Комментарий: ' + (message || '—'),
        attachments.length ? 'Вложение: ' + attachments[0].filename : 'Резюме не приложено',
      ].join('\n'),
      html,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending resume:', error)
    return NextResponse.json({ error: 'Не удалось отправить отклик. Попробуйте позже.' }, { status: 500 })
  }
}
