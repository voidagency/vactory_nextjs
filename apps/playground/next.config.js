const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
	experimental: {
		externalDir: true,
	},
}

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig)
