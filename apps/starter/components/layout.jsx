import { Header } from "./header"
import { BlocksController } from "@vactory/next-blocks"

export function Layout({ children, ...props }) {
	const internalBlocks = props.node?.internal_blocks || []
	return (
		<>
			<Header />
			<BlocksController blocks={internalBlocks} region="top" />
			{children}
			<BlocksController blocks={internalBlocks} region="bottom" />
		</>
	)
}
