const path = require("path")
const fs = require("fs")
const Log = require("next/dist/build/output/log")
const fse = require("fs-extra")

const tmpFolderPath = path.resolve(__dirname, "../", ".tmp")

const resolveModulePath = (name) => {
  return `../../${name}`
}

const generateModulesIndex = async (options) => {
  const modules = options?.enabledModules || []
  const packagesFolder = path.resolve(__dirname, "../../")
  const modulesInfo = modules
    .map((m) => `${packagesFolder}/${m}/module.js`)
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

  await generateNodeTemplatesIndex(modulesInfo)
  await generateApiRoutesIndex(modulesInfo)
  await generateNodeRouteIndex(modulesInfo)
  await generateDynamicFieldTemplatesIndex(modulesInfo)

  Log.info("Compiled successfully templates")
}

const generateNodeTemplatesIndex = async (modules) => {
  let mappings = []

  modules.forEach((module) => {
    const modulePath = resolveModulePath(module.packageName)
    const node = module.node

    mappings.push(`  "${node.id}":dynamic(() =>
    import("${modulePath}/${node.file}")
  )`)
  })

  const exportPath = path.resolve(tmpFolderPath, "node-templates.js")
  await fse.ensureFile(exportPath)

  fs.writeFileSync(
    exportPath,
    `
    import dynamic from "next/dynamic"\n
    export const TemplatesMapping = {\n${mappings.join(",\n")},\n}\n`
  )

  Log.info("Successfully compiled nodes templates")
}

const generateNodeRouteIndex = async (modules) => {
  let mappings = []

  modules.forEach((module) => {
    const node = module.node

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
  let imports = [],
    mappings = [],
    exports = []

  modules.forEach((module) => {
    const name = module.name
    const prefix = module.namedExportPrefix
    const api = module.api
    const apiPrefix = api?.prefix || ""
    const apiRoutes = api?.routes || []

    apiRoutes.forEach((route) => {
      const namedRoute = `${prefix}${route.namedExport}`
      if (!exports.includes(namedRoute)) {
        imports.push(
          `import { ${route.namedExport} as ${namedRoute} } from "${name}"`
        )
        exports.push(namedRoute)
      }

      mappings.push(`  "${apiPrefix}${route.path}":${namedRoute}`)
    })
  })

  const exportPath = path.resolve(tmpFolderPath, "api-routes.js")
  await fse.ensureFile(exportPath)

  fs.writeFileSync(
    exportPath,
    `${imports.join("\n")}\nexport const ApiRoutesMapping = {\n${mappings.join(
      ",\n"
    )},\n}\n`
  )

  Log.info("Successfully compiled api routes")
}

const generateDynamicFieldTemplatesIndex = async (modules) => {
  let mappings = []

  modules.forEach((module) => {
    const modulePath = resolveModulePath(module.packageName)
    const widgets = module?.widgets || []

    widgets.forEach((widget) => {
      mappings.push(`  "${widget.id}":dynamic(() =>
      import("${modulePath}/${widget.file}")
    )`)
    })
  })

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
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
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
  })
}

module.exports = withNodeTemplatePlugin
