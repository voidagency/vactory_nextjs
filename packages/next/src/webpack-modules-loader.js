const path = require("path")
const fs = require("fs")
const Log = require("next/dist/build/output/log")
const fse = require("fs-extra")

const tmpFolderPath = path.resolve(__dirname, "../", ".tmp")
const resolveModulePath = (name) => `../../${name}`

// const resolveOverrideFile = (packageName, fileName) => {
// 	const modulePath = resolveModulePath(packageName)
// 	const processCWD = process.cwd()
// 	const packagesFolderName = "packages"

// 	const fileInPackages = path.dirname(`${modulePath}/${fileName}`)
// 	const fileInProject = `${processCWD}/${packagesFolderName}/${packageName}/${fileName}`
// 	const file = path.relative(fileInPackages, fileInProject)
// 	let exist

// 	try {
// 		fse.statSync(fileInProject)
// 		exist = true
// 	} catch {
// 		exist = false
// 	}

// 	return {
// 		file,
// 		fileInPackages,
// 		fileInProject,
// 		exist,
// 	}
// }

const getOverrideConfigFile = async (fileName) => {
	const appPath = path.relative(__dirname, process.cwd())
	const configPathInProject = `${process.cwd()}/config/${fileName}`
	const configPath = `${appPath}/config/${fileName}`
	let config = {}
	try {
		fse.statSync(configPathInProject)
		config = (await import(configPath)).default
	} catch {
		config = {}
	}

	return config
}

const getOverridesImportsFromConfigFileBase = async (fileName, cb = (v) => v) => {
	let indexes = {}
	const config = await getOverrideConfigFile(fileName)

	for (const [key, value] of Object.entries(config)) {
		const overrideFile = cb(value)
		indexes[key] = overrideFile
	}

	return indexes
}

const getOverridesImportsFromConfigFile = async (fileName) => {
	return getOverridesImportsFromConfigFileBase(fileName, (value) =>
		path.relative(__dirname, `${process.cwd()}/config/${value}`)
	)
}

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
		generateNodeParamsIndex(modulesConfig),
		generateApiRoutesIndex(modulesConfig),
		generateDynamicFieldTemplatesIndex(modulesConfig),
	])

	Log.info("Compiled successfully templates")
}

const generateNodeTemplatesIndex = async (modules) => {
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

	const indexesOverride = await getOverridesImportsFromConfigFile("node-templates.mjs")
	indexes = { ...indexes, ...indexesOverride }

	for (const [key, value] of Object.entries(indexes)) {
		mappings.push(`  "${key}":dynamic(() => import("${value}"))`)
	}

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

const generateNodeParamsIndex = async (modules) => {
	let mappings = [],
		indexes = {}

	modules.forEach((module) => {
		const node = module?.node || undefined
		if (!node) {
			return
		}
		indexes[node.id] = node.params
	})

	const indexesOverride = await getOverridesImportsFromConfigFileBase("node-params.mjs")
	indexes = { ...indexes, ...indexesOverride }

	for (const [key, value] of Object.entries(indexes)) {
		mappings.push(`  "${key}": ${JSON.stringify(value)}`)
	}

	const exportPath = path.resolve(tmpFolderPath, "node-params.js")
	await fse.ensureFile(exportPath)

	fs.writeFileSync(
		exportPath,
		`export const NodeParamsMapping = {\n${mappings.join(",\n")},\n}\n`
	)

	Log.info("Successfully compiled nodes params")
}

const generateApiRoutesIndex = async (modules) => {
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

	const indexesOverride = await getOverridesImportsFromConfigFileBase(
		"apis.mjs",
		(value) => {
			return {
				...value,
				loader: path.relative(__dirname, `${process.cwd()}/config/${value.loader}`),
			}
		}
	)

	indexes = { ...indexes, ...indexesOverride }

	for (const [key, value] of Object.entries(indexes)) {
		mappings.push(
			`  "${key}": { handler: "${value.handler}", loader: async () => await import("${value.loader}") }`
		)
	}

	const exportPath = path.resolve(tmpFolderPath, "api-routes.js")
	await fse.ensureFile(exportPath)

	fs.writeFileSync(
		exportPath,
		`export const ApiRoutesMapping = {\n${mappings.join(",\n")},\n}\n`
	)

	Log.info("Successfully compiled api routes")
}

const generateDynamicFieldTemplatesIndex = async (modules) => {
	let mappings = [],
		indexes = {}

	modules.forEach((module) => {
		const modulePath = resolveModulePath(module.packageName)
		const widgets = module?.widgets || []

		widgets.forEach((widget) => {
			indexes[widget.id] = `${modulePath}/${widget.file}`
		})
	})

	const indexesOverride = await getOverridesImportsFromConfigFile("widgets.mjs")
	indexes = { ...indexes, ...indexesOverride }

	for (const [key, value] of Object.entries(indexes)) {
		mappings.push(`  "${key}":dynamic(() => import("${value}"))`)
	}

	const exportPath = path.resolve(tmpFolderPath, "df-templates.js")
	await fse.ensureFile(exportPath)

	fs.writeFileSync(
		exportPath,
		`import dynamic from "next/dynamic"\n
     export const Widgets = {\n${mappings.join(",\n")},\n}\n`
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
