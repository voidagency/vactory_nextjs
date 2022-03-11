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
];

const nodeParams = {
	fields: {
		"node--vactory_page": [
			"drupal_internal__nid",
			"langcode",
			"title",
			"path",
			"metatag_normalized",
			"field_vactory_paragraphs",
			"internal_node_banner",
			"node_settings",
			"internal_blocks",
			"internal_breadcrumb",
		].join(","),
		"paragraph--vactory_component": [
			"drupal_internal__id",
			"paragraph_section",
			"paragraph_identifier",
			"paragraph_container",
			"paragraph_css_class",
			"paragraph_background_color",
			"paragraph_background_image",
			"field_vactory_component",
			"field_vactory_title",
		].join(","),
	},
	include: [
		"field_vactory_paragraphs",
		"field_vactory_paragraphs.field_vactory_paragraph_tab",
		"field_vactory_paragraphs.paragraph_background_image",
		"field_vactory_paragraphs.paragraph_background_image.thumbnail",
	].join(","),
};

module.exports = {
	name: "@vactory/next-page",
	namedExportPrefix: "VactoryPage",
	node: {
		id: "node--vactory_page",
		namedExport: "Node",
		params: nodeParams,
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
	// widgets: [
	//   {
	//     id: "vactory_page:example",
	//     namedExport: "ExampleWidget",
	//   },
	//   {
	//     id: "vactory_page:content",
	//     namedExport: "ContentWidget",
	//   },
	// ],
};
