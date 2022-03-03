// const nextTranslate = require("next-translate")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const { withNodeTemplatePlugin } = require("@vactory/next-server")
const nextConfig = {
  // webpack(config) {
  //   config.plugins.push(new NodesTemplatePlugin())
  //   return config
  // },
  // i18n: {
  //   locales: ["en", "fr", "ar"],
  //   defaultLocale: "fr",
  //   localeDetection: false,
  // },
  trailingSlash: false,
  swcMinify: false,
  async redirects() {
    // @todo: download redirections
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
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    externalDir: true,
  },
}

// module.exports = nextConfig
// module.exports = withBundleAnalyzer(nextConfig)
module.exports = withNodeTemplatePlugin(nextConfig)
