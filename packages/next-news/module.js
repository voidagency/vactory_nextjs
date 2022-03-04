module.exports = {
  name: "@vactory/next-news",
  namedExportPrefix: "VactoryNews",
  node: {
    id: "node--vactory_news",
    namedExport: "Node",
    file: "./src/components/Node.tsx",
  },
  api: {
    prefix: "/news",
    routes: [
      {
        path: "/list",
        namedExport: "ListHandler",
        file: "./src/api/list.ts",
      },
      {
        path: "/:id",
        namedExport: "IdHandler",
        file: "./src/api/id.ts",
      },
      {
        path: "/:id/:category",
        namedExport: "IdHandler",
        file: "./src/api/id.ts",
      },
    ],
  },
  widgets: [
    {
      id: "vactory_news:example",
      namedExport: "ExampleWidget",
      file: "./src/widgets/example.container.tsx",
    },
    {
      id: "vactory_news:content",
      namedExport: "ContentWidget",
      file: "./src/widgets/content.container.tsx",
    },
  ],
}