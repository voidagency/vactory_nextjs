const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
	webpack: (config) => {
		console.log("CONFIG", config)
		//config.resolve.alias["@vactory/ui/button"] = "@/components/button/button.js" // Example overide
		return config
	},
	experimental: {
		externalDir: true,
	},
}

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig)
