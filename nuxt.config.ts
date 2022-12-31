import eslintPlugin from "vite-plugin-eslint";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: undefined,
  ssr: true,
  app: {
    head: {
      charset: "utf-16",
      viewport:
        "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
      meta: [
        {
          name: "description",
          content: "Send & Receive Anonymous Messages on Pandabou",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "ie=edge",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
      ],
      noscript: [{ children: "Javascript is required" }],
    },
  },
  vite: {
    plugins: [eslintPlugin()],
  },

  css: ["/assets/styles/main.scss"],
  modules: [
    // "nuxt-helmet",
    // "@nuxtjs/axios",
    // "cookie-universal-nuxt",
    // ["nuxt-lazy-load", lazyLoadConfig],
    // ["@nuxtjs/pwa", { workbox: false }],
    // "@nuxtjs/sitemap",
  ],
  experimental: {
    asyncEntry: true,
    crossOriginPrefetch: true,
  },
  nitro: {
    minify: true,
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
  },

  plugins: [
    "~/plugins/ripple-effect.ts",
    // "~/plugins/firebase.js",
    // {
    //   src: "~/plugins/register-sw.js",
    //   mode: "client",
    // },
    // {
    //   src: "~/plugins/fcm.js",
    //   mode: "client",
    // },
    // {
    //   src: "~/plugins/spa-analytics.js",
    //   mode: "client",
    // },
    // {
    //   src: "~/plugins/setup-user.js",
    //   mode: "client",
    // },
    // "~/plugins/axios.js",
    // {
    //   src: "~/plugins/vue-infinite-loading.js",
    //   mode: "client",
    // },
    //
    // ...(useRealtimeNotifications ? [notificationSocketPlugin] : []),
    // ...(useSentryLogging ? [sentryLoggingPlugin] : []),
    // ...(useTouchEvents ? [touchEventsPlugin] : []),
  ],

  webpack: {
    aggressiveCodeRemoval: true,
    extractCSS: true,
    optimization: {
      minimize: true,
      optimizeCSS: true,
      postcss: {
        plugins: {
          "postcss-import": {},
          "postcss-url": {},
          cssnano: {
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          },
        },
        order: "presetEnvAndCssnanoLast",
        preset: {
          stage: 2,
        },
      },
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  },

  telemetry: false,
  // loading: {
  //   color: "#aeacff",
  //   failedColor: "#ff8282",
  //   continuous: true,
  //   height: "2px",
  // },
  // loadingIndicator: {
  //   name: "rectangle-bounce",
  //   color: "#C5C2FF",
  //   background: "#050514",
  // },
  // layoutTransition: {
  //   name: "gray-shift",
  //   mode: "out-in",
  // },
});
