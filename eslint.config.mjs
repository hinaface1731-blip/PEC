import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts', 'components/ui/**', 'hooks/**'],
  },
  {
    rules: {
      // Карты Яндекса и данные страниц пока без строгих типов
      '@typescript-eslint/no-explicit-any': 'off',
      // Синхронизация с localStorage/URL при монтировании — осознанный паттерн в провайдерах и шапке
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
]

export default eslintConfig
