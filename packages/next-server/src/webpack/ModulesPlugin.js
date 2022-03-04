const { promisify } = require("util")
const g = require("glob")
const glob = promisify(g)
const path = require("path")
const fs = require("fs")
const Log = require("next/dist/build/output/log")
const { exit } = require("process")

const convertPathToAbsolute = (filePath) => {
  return path.resolve(filePath)
}

const readTemplateAnnotation = (filePath) => {
  const code = fs.readFileSync(filePath).toString()
  const contentType = /@NodeTemplateFor\('([^)]+)'\)/gm.exec(code)[1]
  const templateName = /@NodeTemplateUniqueName\('([^)]+)'\)/gm.exec(code)[1]
  const packageName = /@NodeTemplatePackage\('([^)]+)'\)/gm.exec(code)[1]

  return {
    package: packageName,
    nodeType: contentType,
    templateName: templateName,
  }
}

const loadModuleInfo = (filePath) => {
  const raw = fs.readFileSync(filePath)
  return JSON.parse(raw)
}

const generateNodeTemplatesIndex = async (modules) => {
  let imports = [],
    mappings = []

  modules.forEach((module) => {
    const name = module.name
    const prefix = module.namedExportPrefix
    const node = module.node

    imports.push(
      `import { ${node.namedExport} as ${prefix}${node.namedExport} } from "${name}"`
    )
    mappings.push(`  "${node.id}":${prefix}${node.namedExport}`)
  })

  // @TODO: ensure file exist.
  const exportPath = path.resolve(
    __dirname + "/../../../next/.tmp/node-templates.ts"
  )

  fs.writeFileSync(
    exportPath,
    `${imports.join("\n")}\nexport const TemplatesMapping = {\n${mappings.join(
      ",\n"
    )},\n}\n`
  )

  Log.info("Successfully compiled nodes templates")
}

const generateApiRoutesIndex = async (modules) => {
  let imports = [],
    mappings = [],
    exports = []

  modules.forEach((module) => {
    const name = module.name
    const prefix = module.namedExportPrefix
    const api = module.api
    const apiPrefix = api.prefix
    const apiRoutes = api.routes

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

  // @TODO: ensure file exist.
  const exportPath = path.resolve(
    __dirname + "/../../../next/.tmp/api-routes.ts"
  )

  fs.writeFileSync(
    exportPath,
    `${imports.join("\n")}\nexport const ApiRoutesMapping = {\n${mappings.join(
      ",\n"
    )},\n}\n`
  )

  Log.info("Successfully compiled api routes")
}

const generateModulesIndex = async (options) => {
  const modules = options?.enabledModules || []
  const packagesFolder = path.resolve("../../packages")
  const modulesInfo = modules
    .map((m) => `${packagesFolder}/${m}/module.json`)
    .map(loadModuleInfo)

  await generateNodeTemplatesIndex(modulesInfo)
  await generateApiRoutesIndex(modulesInfo)

  // console.log(modulesInfo)
  // process.exit(1)

  Log.info("Compiled successfully templates")
}

class VactoryModulesPlugin {
  constructor(options) {
    this.options = options
  }

  getChangedFiles(compiler) {
    const { watchFileSystem } = compiler
    const watcher = watchFileSystem.watcher || watchFileSystem.wfs.watcher
    // console.log(watcher)

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
