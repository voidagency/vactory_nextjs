const path = require("path")
const fs = require("fs")
const Log = require("next/dist/build/output/log")
const fse = require("fs-extra")

const tmpFolderPath = path.resolve(__dirname, "../", ".tmp")
const resolveModulePath = (name) => `../../${name}`
const watchedFiles = new Set()
const addWatchedFile = (path) => {
	watchedFiles.add(path)
}

function requireUncached(module) {
	delete require.cache[require.resolve(module)]
	return require(module)
}

const getOverrideConfigFile = (fileName) => {
	const appPath = path.resolve(__dirname, process.cwd())
	const configPathInProject = `${process.cwd()}/config/${fileName}`
	const configPath = `${appPath}/config/${fileName}`
	let config = {}
	addWatchedFile(configPath)
	try {
		fse.statSync(configPathInProject)
		config = requireUncached(configPath)
	} catch (err) {
		console.warn(err)
		config = {}
	}

	return config
}

const getOverridesImportsFromConfigFileBase = (fileName, cb = (v) => v) => {
	let indexes = {}
	const config = getOverrideConfigFile(fileName)

	for (const [key, value] of Object.entries(config)) {
		const overrideFile = cb(value)
		indexes[key] = overrideFile
	}

	return indexes
}

const getOverridesImportsFromConfigFile = (fileName) => {
	return getOverridesImportsFromConfigFileBase(fileName, (value) =>
		path.relative(__dirname, `${process.cwd()}/config/${value}`)
	)
}

const generateModulesIndex = (options, isServer) => {
	const logLabel = isServer ? "Server" : "Client"
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
		.map((filePath) => {
			addWatchedFile(filePath)
			return requireUncached(filePath)
		})

	generateNodeTemplatesIndex(modulesConfig)
	generateNodeParamsIndex(modulesConfig)
	generateApiRoutesIndex(modulesConfig)
	generateDynamicFieldTemplatesIndex(modulesConfig)

	Log.info(`[${logLabel}] Successfully built mapping configuration`)
}

const generateNodeTemplatesIndex = (modules) => {
	let mappings = [],
		indexes = {}

	modules.forEach((module) => {
		const modulePath = resolveModulePath(module.packageName)
		const node = module?.node || undefined
		if (!node) {
			return
		}

		indexes[node.id] = `${modulePath}/${node.file}`
	})

	const indexesOverride = getOverridesImportsFromConfigFile("node-templates.js")
	indexes = { ...indexes, ...indexesOverride }

	for (const [key, value] of Object.entries(indexes)) {
		mappings.push(`  "${key}":dynamic(() => import("${value}"))`)
	}

	const exportPath = path.resolve(tmpFolderPath, "node-templates.js")
	fse.ensureFileSync(exportPath)

	fs.writeFileSync(
		exportPath,
		`import dynamic from "next/dynamic"\nexport const TemplatesMapping = {\n${mappings.join(
			",\n"
		)},\n}\n`
	)
}

const generateNodeParamsIndex = (modules) => {
	let mappings = [],
		indexes = {}

	modules.forEach((module) => {
		const node = module?.node || undefined
		if (!node) {
			return
		}
		indexes[node.id] = node.params
	})

	const indexesOverride = getOverridesImportsFromConfigFileBase("node-params.js")
	indexes = { ...indexes, ...indexesOverride }

	for (const [key, value] of Object.entries(indexes)) {
		mappings.push(`  "${key}": ${JSON.stringify(value)}`)
	}

	const exportPath = path.resolve(tmpFolderPath, "node-params.js")
	fse.ensureFileSync(exportPath)

	fs.writeFileSync(
		exportPath,
		`export const NodeParamsMapping = {\n${mappings.join(",\n")},\n}\n`
	)
}

const generateApiRoutesIndex = (modules) => {
	let mappings = [],
		indexes = {}

	modules.forEach((module) => {
		const modulePath = resolveModulePath(module.packageName)
		const api = module.api
		const apiPrefix = api?.prefix || ""
		const apiRoutes = api?.routes || []

		apiRoutes.forEach((route) => {
			const id = `${apiPrefix}${route.path}`
			indexes[id] = { handler: route.handler, loader: `${modulePath}/${route.file}` }
		})
	})

	const indexesOverride = getOverridesImportsFromConfigFileBase("apis.js", (value) => {
		return {
			...value,
			loader: path.relative(__dirname, `${process.cwd()}/config/${value.loader}`),
		}
	})

	indexes = { ...indexes, ...indexesOverride }

	for (const [key, value] of Object.entries(indexes)) {
		mappings.push(
			`  "${key}": { handler: "${value.handler}", loader: async () => await import("${value.loader}") }`
		)
	}

	const exportPath = path.resolve(tmpFolderPath, "api-routes.js")
	fse.ensureFileSync(exportPath)

	fs.writeFileSync(
		exportPath,
		`export const ApiRoutesMapping = {\n${mappings.join(",\n")},\n}\n`
	)
}

const generateDynamicFieldTemplatesIndex = (modules) => {
	let mappings = [],
		indexes = {}

	modules.forEach((module) => {
		const modulePath = resolveModulePath(module.packageName)
		const widgets = module?.widgets || []

		widgets.forEach((widget) => {
			indexes[widget.id] = `${modulePath}/${widget.file}`
		})
	})

	const indexesOverride = getOverridesImportsFromConfigFile("widgets.js")
	indexes = { ...indexes, ...indexesOverride }

	for (const [key, value] of Object.entries(indexes)) {
		mappings.push(`  "${key}":dynamic(() => import("${value}"))`)
	}

	const exportPath = path.resolve(tmpFolderPath, "df-templates.js")
	fse.ensureFileSync(exportPath)

	fs.writeFileSync(
		exportPath,
		`import dynamic from "next/dynamic"\n
     export const Widgets = {\n${mappings.join(",\n")},\n}\n`
	)
}

class VactoryModulesPlugin {
	constructor(options, isServer) {
		this.options = options
		this.isServer = isServer
		this.firstRun = false
	}

	getChangedFiles(compiler) {
		const { watchFileSystem } = compiler
		const watcher = watchFileSystem.watcher || watchFileSystem.wfs.watcher

		return Object.keys(watcher.mtimes)
	}

	apply(compiler) {
		const pluginOptions = this.options
		// Set up mapping index at start
		compiler.hooks.environment.tap("VactoryModulesPlugin", () => {
			if (!this.firstRun) {
				generateModulesIndex(pluginOptions, this.isServer)
				this.firstRun = true
			}
		})

		compiler.hooks.afterCompile.tapAsync(
			"VactoryModulesPlugin",
			(compilation, callback) => {
				const files = Array.from(watchedFiles)
				if (Array.isArray(compilation.fileDependencies)) {
					files.map((file) => compilation.fileDependencies.push(file))
				} else {
					files.map((file) => compilation.fileDependencies.add(file))
				}

				callback()
			}
		)

		// Re generate mapping index when node template files change
		compiler.hooks.watchRun.tap("VactoryModulesPlugin", (_compiler) => {
			if (_compiler.modifiedFiles) {
				const files = Array.from(watchedFiles)
				const changedFiles = Array.from(_compiler.modifiedFiles)
				const intersection = changedFiles.filter((file) => files.includes(file))
				if (intersection.length > 0) {
					generateModulesIndex(pluginOptions, this.isServer)
				}
			}
		})
	}
}

const withNodeTemplatePlugin = (nextConfig = {}) => {
	return {
		...nextConfig,
		webpack(config, options) {
			// next calls webpack twice: once for the server and once for the client
			// https://github.com/vercel/next.js/issues/4023#issuecomment-374011455
			// if (!options.isServer) {
			// 	return config
			// }

			if (!options.defaultLoaders) {
				throw new Error(
					"This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
				)
			}

			config.plugins.push(new VactoryModulesPlugin(nextConfig, options.isServer))

			if (typeof nextConfig.webpack === "function") {
				return nextConfig.webpack(config, options)
			}
			return config
		},
	}
}

module.exports = withNodeTemplatePlugin
