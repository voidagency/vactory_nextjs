const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
	webpack: (config) => {
		//config.resolve.alias["@vactory/ui/link"] = "@/components/link/link.js" // Example overide
		return config
	},
	experimental: {
		externalDir: true,
	},
}

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig)
