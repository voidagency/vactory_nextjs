const internalNodeField = [
  "drupal_internal__nid",
  "langcode",
  "title",
  "path",
  "metatag_normalized",
  "internal_node_banner",
  "internal_blocks",
  "internal_breadcrumb",
  "node_settings",
]

const nodeParams = {
  fields: {
    "node--vactory_news": []
      .concat(
        [
          "body",
          "created",
          "field_vactory_excerpt",
          "field_vactory_media_image",
          "field_vactory_taxonomy_1",
          "field_vactory_date",
        ],
        internalNodeField
      )
      .join(","),
    "media--image": "thumbnail",
    "file--image": "uri",
    "taxonomy_term--vactory_news_theme": "name",
  },
  include: [
    "field_vactory_media_image",
    "field_vactory_media_image.thumbnail",
    "field_vactory_taxonomy_1",
  ].join(","),
}

module.exports = {
  name: "@vactory/next-news",
  namedExportPrefix: "VactoryNews",
  node: {
    id: "node--vactory_news",
    namedExport: "Node",
    params: nodeParams,
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
      id: "vactory_news:three-columns",
      namedExport: "ThreeColumnsContainer",
    },
  ],
}
