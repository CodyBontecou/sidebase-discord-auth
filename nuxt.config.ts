// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth'
  ],
  typescript: {
    shim: false
  },
  runtimeConfig: {
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
    public: {
      DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID
    }
  }
})
