// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/css/tailwind.css"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-lucide-icons",
    "@nuxt/image",
    "@pinia/nuxt",
    "nuxt-tiptap-editor",
    "@nuxtjs/i18n",
    "nuxt-swiper"
  ],
  tiptap: {
    prefix: 'Tiptap', // Optional: Prefix for imports
  },
  swiper: {
    prefix: "Swiper",
    styleLang: "css",
    modules: ["autoplay", "navigation", "pagination"],
  },
  lucide: {
    namePrefix: "Icon", // Optional: Set a prefix for icon components
  },
  i18n: {
    strategy: "prefix_and_default",
    locales: [
      {
        code: "en",
        file: "en.json",
        name: "English",
      },
      {
        code: "es",
        file: "es.json",
        name: "Español",
      },
      {
        code: "id",
        file: "id.json",
        name: "Indonesian",
      },
      {
        code: "de",
        file: "de.json",
        name: "German",
      },
      {
        code: "fr",
        file: "fr.json",
        name: "Francais",
      },
      {
        code: "ar",
        file: "ar.json",
        name: "Arabic",
      },
      {
        code: "zh",
        file: "zh.json",
        name: "Chinese",
      },
      {
        code: "pt",
        file: "pt.json",
        name: "Portuguese",
      },
    ],
    lazy: false,
    langDir: "lang/",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
});
