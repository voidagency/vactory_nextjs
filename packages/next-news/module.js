module.exports = {
  name: "@vactory/next-news",
  namedExportPrefix: "VactoryNews",
  node: {
    id: "node--vactory_news",
    namedExport: "Node",
  },
  api: {
    prefix: "/news",
    routes: [
      {
        path: "/list",
        namedExport: "ListHandler",
      },
      {
        path: "/:id",
        namedExport: "IdHandler",
      },
      {
        path: "/:id/:category",
        namedExport: "IdHandler",
      },
    ],
  },
  widgets: [
    {
      id: "vactory_news:example",
      namedExport: "ExampleWidget",
    },
    {
      id: "vactory_news:content",
      namedExport: "ContentWidget",
    },
  ],
}
