import type { TSESLint } from '@typescript-eslint/utils'

import eslintReact from '@eslint-react/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
import love from 'eslint-config-love'

const base: TSESLint.FlatConfig.Config = {
  ...love,
  rules: {
    ...love.rules,
    'import/no-duplicates': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
  },
  ignores: ['.next', '**/next-env.d.ts', '**/postcss.config.mjs'],
}

const react: TSESLint.FlatConfig.Config = {
  files: ['**/*.{ts,tsx}'],
  ...eslintReact.configs['recommended-typescript'],
}

const reacthooks: TSESLint.FlatConfig.Config = {
  files: ['**/*.{ts,tsx}'],
  plugins: {
    'react-hooks': reactHooks,
  },
  rules: reactHooks.configs.recommended.rules,
}

export default [base, react, reacthooks]
