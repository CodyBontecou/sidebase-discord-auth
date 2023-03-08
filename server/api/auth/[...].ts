import DiscordProvider from 'next-auth/providers/discord'
import { NuxtAuthHandler } from '#auth'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    DiscordProvider.default({
      clientId: runtimeConfig.public.DISCORD_CLIENT_ID,
      clientSecret: runtimeConfig.DISCORD_CLIENT_SECRET
    })
  ]
})
