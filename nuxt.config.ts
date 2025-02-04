// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura'
import type { NuxtConfig } from 'nuxt/config'

const getUrl = () => {
  let siteUrl =
    process?.env?.NUXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NUXT_ENV_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/'
  // Make sure to include `https://` when not localhost.
  siteUrl = siteUrl.includes('http') ? siteUrl : `https://${siteUrl}`
  // Make sure to including trailing `/`.
  siteUrl = siteUrl.charAt(siteUrl.length - 1) === '/' ? siteUrl : `${siteUrl}/`
  return siteUrl
}

const runtimeConfig: NuxtConfig['runtimeConfig'] = {
  public: {
    siteUrl: getUrl(),
  },
  DATABASE_URL: process.env.POSTGRES_CONNECTION_URL,
}

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@primevue/nuxt-module', '@pinia/nuxt'],
  imports: {
    dirs: ['./composables/**', './store/**', './utils'],
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'NUXT TEMPLATE',
    },
  },
  css: ['primeicons/primeicons.css'],
  runtimeConfig,
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
        blockSpacing: true,
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
