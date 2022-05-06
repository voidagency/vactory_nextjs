const internalNodeField = [
	"drupal_internal__nid",
	"langcode",
	"title",
	"path",
	"metatag_normalized",
	"internal_node_banner",
	"internal_blocks",
	"internal_breadcrumb",
	"internal_extra",
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
					"field_vactory_media",
					"field_vactory_news_theme",
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
		"field_vactory_media",
		"field_vactory_media.thumbnail",
		"field_vactory_news_theme",
	].join(","),
}

module.exports = {
	name: "@vactory/next-news",
	packageName: "next-news",
	namedExportPrefix: "VactoryNews",
	node: {
		id: "node--vactory_news",
		file: "src/components/node.jsx",
		params: nodeParams,
	},
	api: {
		prefix: "/news",
		routes: [
			{
				path: "/list",
				handler: "ListHandler",
				file: "src/components/api.js",
			},
			{
				path: "/:id",
				handler: "IdHandler",
				file: "src/components/api.js",
			},
			{
				path: "/:id/:category",
				handler: "IdHandler",
				file: "src/components/api.js",
			},
		],
	},
	widgets: [
		{
			id: "vactory_news:three-columns",
			file: "src/widgets/three-columns/three-columns.container.js",
		},
	],
}
