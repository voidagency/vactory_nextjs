module.exports = {
  name: "@vactory/next-news",
  namedExportPrefix: "VactoryNews",
  node: {
    id: "node--vactory_news",
    namedExport: "Node",
    jsonApiRessourceParams: {
      fields: {
        "node--vactory_news": [
          "drupal_internal__nid", // reserved
          "langcode", // reserved
          "title", // reserved
          "path", // reserved
          "body",
          "created",
          "metatag_normalized", // reserved
          "field_vactory_excerpt",
          "field_vactory_media_image",
          "field_vactory_taxonomy_1",
          "field_vactory_date",
          "internal_node_banner", // reserved
          "internal_blocks", // reserved
          "node_settings", // reserved
        ].join(","),
        "media--image": "thumbnail",
        "file--image": "uri",
        "taxonomy_term--vactory_news_theme": "name",
      },
      include: [
        "field_vactory_media_image",
        "field_vactory_media_image.thumbnail",
        "field_vactory_taxonomy_1",
      ].join(","),
    },
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
