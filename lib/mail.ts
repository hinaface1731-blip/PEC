import nodemailer from 'nodemailer'

export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Строка для темы письма: без переводов строк и не длиннее limit символов */
export function headerSafe(value: unknown, limit = 120): string {
  return String(value ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, limit)
}

export function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.yandex.ru',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })
}

/** HTML-таблица «поле — значение»; все значения экранируются */
export function renderTable(title: string, rows: Array<[string, unknown]>): string {
  const body = rows
    .map(
      ([label, value], i) => `
        <tr${i % 2 === 0 ? ' style="background: #f5f5f5;"' : ''}>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>${label}</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join('')

  return `
    <h2>${title}</h2>
    <table style="border-collapse: collapse; width: 100%;">${body}
    </table>
    <p style="margin-top: 20px; color: #666; font-size: 12px;">
      Письмо сгенерировано автоматически с сайта polar-ec.ru
    </p>
  `
}
