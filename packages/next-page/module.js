module.exports = {
  name: "@vactory/next-page",
  namedExportPrefix: "VactoryPage",
  node: {
    id: "node--vactory_page",
    namedExport: "Node",
    file: "./src/components/Node.tsx",
  },
  api: {
    prefix: "/page",
    routes: [
      {
        path: "/:id",
        namedExport: "IdHandler",
        file: "./src/api/id.ts",
      },
    ],
  },
  widgets: [
    {
      id: "vactory_page:example",
      namedExport: "ExampleWidget",
      file: "./src/widgets/example.container.tsx",
    },
    {
      id: "vactory_page:content",
      namedExport: "ContentWidget",
      file: "./src/widgets/content.container.tsx",
    },
  ],
}
