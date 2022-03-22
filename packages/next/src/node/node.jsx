import React from "react"
import Head from "next/head"
import { TemplatesMapping } from "../../.tmp/node-templates"
import dynamic from "next/dynamic"

const NodeDefault = dynamic(() => import("./default"))

export const Node = ({ node, params }) => {
	const NodeComponent = TemplatesMapping[node.type] || NodeDefault
	const metatags = node.metatag_normalized || []
	return (
		<React.Fragment>
			<Head>
				<title>{node?.title}</title>
				{/* // TODO: create a MetaTags component */}
				{metatags.map((tag, key) => {
					const Tag = tag.tag
					const backendBase = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
					const frontendBase = process.env.NEXT_PUBLIC_BASE_URL

					if (tag.attributes?.href?.startsWith(backendBase))
						tag.attributes.href = tag.attributes.href.replace(backendBase, frontendBase)
					return <Tag key={key} {...tag.attributes} />
				})}
			</Head>
			<NodeComponent node={node} params={params} />
		</React.Fragment>
	)
}
