// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  srcDir: './src',
  imports: {
    dirs: ['./composables/**', './store/**', './utils'],
  },
  build: {
    transpile: ['primevue'],
  },
  css: ['primeicons/primeicons.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@primevue/nuxt-module'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'only-multiline',
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
});
