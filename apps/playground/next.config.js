const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@vactory/ui/link"] = "@/components/link/link.js"

    return config
  },
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig
