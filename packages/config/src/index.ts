import type { TSESLint } from '@typescript-eslint/utils'
import love from 'eslint-config-love'

const config: TSESLint.FlatConfig.Config = {
  ...love,
  rules: {
    ...love.rules,
    'import/no-duplicates': 'off',
  },
  ignores: ['.next', '**/next-env.d.ts', '**/postcss.config.mjs'],
}

export default config
