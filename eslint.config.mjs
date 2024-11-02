// @ts-check
import typescriptParser from '@typescript-eslint/parser'
import vueESLintParser from 'vue-eslint-parser'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-roots': 'off',
      'vue/component-api-style': ['error', ['script-setup', 'composition']],
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],
      'vue/component-tags-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
      'no-unused-vars': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@stylistic/operator-linebreak': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueESLintParser,
    },
  },
  {
    files: ['**/api/**/*.{get,post,put,patch,delete}.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: ['.nuxt/', '.output/', 'node_modules/', 'dist/', '*.md*', '*.json', 'generated', 'pnpm-lock.yaml'],
  },
)
