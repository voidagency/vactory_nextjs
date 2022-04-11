const path = require("path")
const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})
const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")
// const { createLoader } = require("simple-functional-loader")
const withModulesPlugin = require("@vactory/next/webpack-modules-loader")
// const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")
// const path = require("path")
// const aliasOverrides = require("./config/alias-overrides")
const i18n = require("./config/languages")
const menus = require("./config/menus")

const nextConfig = {
	i18n: {
		locales: [...i18n.enabled, "default"],
		defaultLocale: "default",
		localeDetection: true,
	},
	images: {
		domains: ["localhost"],
		dangerouslyAllowSVG: true,
		// contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		deviceSizes: [640, 750, 328, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		formats: ["image/webp"],
		minimumCacheTTL: 60,
	},
	publicRuntimeConfig: {
		i18n: i18n,
		menus: menus,
	},
	reactStrictMode: true,
	// distDir: "build",
	swcMinify: true,
	poweredByHeader: false,
	trailingSlash: false,
	webpack: (config) => {
		// config.module.rules.push({
		// 	test: /.tmp\/node-templates/,
		// 	use: createLoader(function (source) {
		// 		console.log(source)
		// 		process.exit(1)
		// 		return source
		// 	}),
		// })
		// config.resolve.alias["classnames"] = "clsx"
		// config.resolve.alias["regenerator-runtime"] = path.resolve(
		// 	__dirname,
		// 	"../..",
		// 	"node_modules",
		// 	"next/dist/compiled/regenerator-runtime/runtime.js"
		// )
		// config.resolve.alias["react-is"] = path.resolve(
		// 	__dirname,
		// 	"../..",
		// 	"node_modules",
		// 	"next/dist/compiled/react-is"
		// )
		// config.plugins.push(new DuplicatePackageCheckerPlugin())
		// config.resolve.plugins[0].paths["classnames"] = path.resolve(
		// 	__dirname,
		// 	"../..",
		// 	"node_modules",
		// 	"clsx/dist/clsx.min.js"
		// )
		return config
	},
	// async redirects() {
	// 	// All redirections are handled by Drupal redirect module except for this one.
	// 	return [
	// 		{
	// 			source: "/",
	// 			destination: "/" + i18n.default,
	// 			permanent: true,
	// 		},
	// 	];
	// },
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
	experimental: {
		externalDir: true,
		outputStandalone: true,
		outputFileTracingRoot: path.join(__dirname, "../../"),
	},
}

module.exports = withPlugins(
	[
		[
			withModulesPlugin,
			{
				enabledModules: ["next-page", "next-news", "next-user"],
			},
		],
		[withBundleAnalyzer],
		[
			withPWA,
			{
				pwa: {
					dest: "public",
					runtimeCaching,
					disable: process.env.NODE_ENV === "development",
				},
			},
		],
	],
	nextConfig
)
