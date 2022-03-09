const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const { withModulesPlugin } = require("@vactory/next-server")
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")

const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@vactory/ui/button"] = "@/components/button/button.js"
    config.resolve.alias["classnames"] = "clsx"

    // Bundle size tweaks.
    config.resolve.alias["regenerator-runtime"] = path.resolve(
      __dirname,
      "../..",
      "node_modules",
      "next/dist/compiled/regenerator-runtime/runtime.js"
    )

    config.resolve.alias["react-is"] = path.resolve(
      __dirname,
      "../..",
      "node_modules",
      "next/dist/compiled/react-is"
    )

    config.plugins.push(new DuplicatePackageCheckerPlugin())
    return config
  },
  poweredByHeader: false,
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
    domains: ["localhost"],
    dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
  experimental: {
    externalDir: true,
  },
}

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
