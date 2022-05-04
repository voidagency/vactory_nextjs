import React from "react"

export const NodePageContext = React.createContext({})

export const NodePageProvider = ({ children, node = {} }) => {
	let data = {
		nid: node?.drupal_internal__nid || false,
		path_18n: node?.internal_extra?.translations || {},
		blocks: node?.internal_blocks || [],
		breadcrumb: node?.internal_breadcrumb || [],
		settings: {},
		type: node?.type || "",
		path: "",
	}

	if (typeof node?.node_settings !== "undefined") {
		data.settings = JSON.parse(node.node_settings)
	}
	if (typeof node?.path?.alias !== "undefined") {
		data.path = `/${node.path.langcode}${node.path.alias}`
	}

	return <NodePageContext.Provider value={data}>{children}</NodePageContext.Provider>
}
