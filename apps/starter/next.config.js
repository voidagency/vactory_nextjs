// @ts-check

// const nextTranslate = require("next-translate")
const withPlugins = require("next-compose-plugins")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const { withModulesPlugin } = require("@vactory/next-server")
const path = require("path")

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@vactory/ui/button": path.resolve(
          __dirname,
          "components/button/button.js"
        ),
      },
    }
    return config
  },
  poweredByHeader: false,
  // i18n: {
  //   locales: ["en", "fr", "ar"],
  //   defaultLocale: "fr",
  //   localeDetection: false,
  // },
  trailingSlash: false,
  // swcMinify: true,
  async redirects() {
    // @todo: Move to node handler getServerSideProps
    return [
      {
        source: "/",
        destination: "/fr",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    // @todo: download rewrites
    return [
      {
        source: "/fr/actualites/:pays/:theme",
        destination: "/fr/actualites",
        locale: false,
      },
    ]
  },
  images: {
    domains: ["localhost", "tailwindui.com"],
    dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
  experimental: {
    externalDir: true,
  },
}

// module.exports = nextConfig
// module.exports = withBundleAnalyzer(nextConfig)
module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    [
      withModulesPlugin,
      {
        enabledModules: ["next-page", "next-news"],
      },
    ],
  ],
  nextConfig
)
// module.exports = withNodeTemplatePlugin(nextConfig)
