module.exports = {
  name: "@vactory/next-page",
  namedExportPrefix: "VactoryPage",
  node: {
    id: "node--vactory_page",
    namedExport: "Node",
  },
  api: {
    prefix: "/page",
    routes: [
      {
        path: "/:id",
        namedExport: "IdHandler",
      },
    ],
  },
  widgets: [
    {
      id: "vactory_page:example",
      namedExport: "ExampleWidget",
    },
    {
      id: "vactory_page:content",
      namedExport: "ContentWidget",
    },
  ],
}
