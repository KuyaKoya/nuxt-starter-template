// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@primevue/nuxt-module',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      },
    ],
  ],
  imports: {
    dirs: ['./composables/**', './store/**', './utils'],
  },
  devtools: { enabled: true },
  css: ['primeicons/primeicons.css'],
  srcDir: './src',
  build: {
    transpile: ['primevue'],
  },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'only-multiline',
        semi: false,
      },
    },
  },
  primevue: {
    usePrimeVue: true,
    autoImport: true,
    directives: {
      include: ['Ripple', 'Tooltip'],
    },
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false,
        },
      },
    },
  },
})
