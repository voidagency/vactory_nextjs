import React, { useContext } from "react"
import { NodePageContext } from "@vactory/next"
import { BlocksTemplate } from "./blocks.template"

export const BlocksController = ({ region = "" }) => {
	const { blocks } = useContext(NodePageContext)

	const regionBlocks = blocks.filter((block) => block.region === region)

	if (regionBlocks.length <= 0) {
		return null
	}

	return (
		<React.Fragment>
			{regionBlocks &&
				regionBlocks.map((block) => (
					<BlocksTemplate key={block.id} widget={block.content} hasAMP={false} />
				))}
		</React.Fragment>
	)
}
