const { promisify } = require("util")
const g = require("glob")
const glob = promisify(g)
const path = require("path")
const fs = require("fs")
const Log = require("next/dist/build/output/log")

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

const generateNodeTemplatesIndex = async () => {
  // @TODO only enabled plugins packages.
  const templatesPaths = await glob("../../packages/**/src/components/Node.tsx")
  const templates = templatesPaths
    .map(convertPathToAbsolute)
    .map(readTemplateAnnotation)

  const imports = templates.map((info) => {
    return `import { ${info.templateName} } from "${info.package}"`
  })

  const mappings = templates.map((info) => {
    return `  "${info.nodeType}": ${info.templateName}`
  })

  const exportPath = path.resolve(
    __dirname + "/../../../next/.tmp/templates.ts"
  )

  fs.writeFileSync(
    exportPath,
    `${imports.join("\n")}\nexport const TemplatesMapping = {\n${mappings.join(
      ",\n"
    )},\n}\n`
  )

  Log.info("Compiled successfully templates")
}

class NodesTemplatePlugin {
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
    compiler.hooks.environment.tap("NodesTemplatePlugin", () => {
      generateNodeTemplatesIndex(this.options)
    })

    // Re generate mapping index when node template files change
    // compiler.hooks.watchRun.tapPromise("NodesTemplatePlugin", async () => {
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

      config.plugins.push(new NodesTemplatePlugin(nextConfig))

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}

module.exports = withNodeTemplatePlugin
