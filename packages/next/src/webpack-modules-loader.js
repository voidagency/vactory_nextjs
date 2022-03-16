const path = require("path")
const fs = require("fs")
const Log = require("next/dist/build/output/log")
const fse = require("fs-extra")

const tmpFolderPath = path.resolve(__dirname, "../", ".tmp")
const resolveModulePath = (name) => `../../${name}`

const generateModulesIndex = async (options) => {
	const modules = options?.enabledModules || []
	const packagesFolder = path.resolve(__dirname, "../../")
	const modulesConfig = modules
		.map((m) => `${packagesFolder}/${m}/module.config.js`)
		.filter((filePath) => {
			let ret = false
			try {
				fse.statSync(filePath)
				ret = true
			} catch {
				ret = false
			}
			return ret
		})
		.map((filePath) => require(filePath))

	await Promise.all([
		generateNodeTemplatesIndex(modulesConfig),
		// generateApiRoutesIndex(modulesConfig),
		generateNodeRouteIndex(modulesConfig),
		generateDynamicFieldTemplatesIndex(modulesConfig),
	])

	Log.info("Compiled successfully templates")
}

const generateNodeTemplatesIndex = async (modules) => {
	let mappings = []

	modules.forEach((module) => {
		const modulePath = resolveModulePath(module.packageName)
		const node = module?.node || undefined
		if (!node) {
			return
		}

		mappings.push(`  "${node.id}":dynamic(() =>
    import("${modulePath}/${node.file}")
  )`)
	})

	const exportPath = path.resolve(tmpFolderPath, "node-templates.js")
	await fse.ensureFile(exportPath)

	fs.writeFileSync(
		exportPath,
		`import dynamic from "next/dynamic"\nexport const TemplatesMapping = {\n${mappings.join(
			",\n"
		)},\n}\n`
	)

	Log.info("Successfully compiled nodes templates")
}

const generateNodeRouteIndex = async (modules) => {
	let mappings = []

	modules.forEach((module) => {
		const node = module?.node || undefined
		if (!node) {
			return
		}
		mappings.push(`  "${node.id}": ${JSON.stringify(node.params)}`)
	})

	const exportPath = path.resolve(tmpFolderPath, "node-api-routes.js")
	await fse.ensureFile(exportPath)

	fs.writeFileSync(
		exportPath,
		`export const NodeApiRoutesMapping = {\n${mappings.join(",\n")},\n}\n`
	)

	Log.info("Successfully compiled nodes api routes")
}

const generateApiRoutesIndex = async (modules) => {
	let mappings = []

	modules.forEach((module) => {
		const api = module.api
		const apiPrefix = api?.prefix || ""
		const apiRoutes = api?.routes || []

		apiRoutes.forEach((route) => {
			mappings.push(
				`  "${apiPrefix}${route.path}": { handler: "${route.handler}", file: "${module.packageName}/${route.file}" }`
			)
		})
	})

	const exportPath = path.resolve(tmpFolderPath, "api-routes.js")
	await fse.ensureFile(exportPath)

	fs.writeFileSync(
		exportPath,
		`export const ApiRoutesMapping = {\n${mappings.join(",\n")},\n}\n`
	)

	Log.info("Successfully compiled api routes")
}

const generateDynamicFieldTemplatesIndex = async (modules) => {
	let imports = [],
		mappings = []

	modules.forEach((module) => {
		const name = module.name
		const prefix = module.namedExportPrefix
		const widgets = module?.widgets || []

		widgets.forEach((widget) => {
			imports.push(
				`import { ${widget.namedExport} as ${prefix}${widget.namedExport} } from "${name}"`
			)
			mappings.push(`  "${widget.id}":${prefix}${widget.namedExport}`)
		})
	})

	const exportPath = path.resolve(tmpFolderPath, "df-templates.js")
	await fse.ensureFile(exportPath)

	fs.writeFileSync(
		exportPath,
		`${imports.join("\n")}\nexport const Widgets = {\n${mappings.join(",\n")},\n}\n`
	)

	Log.info("Successfully compiled dynamic field templates")
}

class VactoryModulesPlugin {
	constructor(options) {
		this.options = options
	}

	getChangedFiles(compiler) {
		const { watchFileSystem } = compiler
		const watcher = watchFileSystem.watcher || watchFileSystem.wfs.watcher

		return Object.keys(watcher.mtimes)
	}

	apply(compiler) {
		// console.log(compiler)
		// Set up mapping index at start
		compiler.hooks.environment.tap("VactoryModulesPlugin", () => {
			generateModulesIndex(this.options)
		})

		// Re generate mapping index when node template files change
		// compiler.hooks.watchRun.tapPromise("VactoryModulesPlugin", async () => {
		//   // console.log(compiler.watchFileSystem)
		//   // process.exit(1)
		//   const changedFile = this.getChangedFiles(compiler)

		//   if (changedFile.find((file) => file.includes("Node.jsx"))) {
		//     generateNodeTemplatesIndex(this.options)
		//   }
		// })
	}
}

const withNodeTemplatePlugin = (nextConfig = {}) => {
	return {
		...nextConfig,
		webpack(config, options) {
			// next calls webpack twice: once for the server and once for the client
			// https://github.com/vercel/next.js/issues/4023#issuecomment-374011455
			if (!options.isServer) {
				return config
			}

			if (!options.defaultLoaders) {
				throw new Error(
					"This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
				)
			}

			config.plugins.push(new VactoryModulesPlugin(nextConfig))

			if (typeof nextConfig.webpack === "function") {
				return nextConfig.webpack(config, options)
			}
			return config
		},
	}
}

module.exports = withNodeTemplatePlugin
