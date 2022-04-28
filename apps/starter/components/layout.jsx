import { Header } from "@/components/header"
import { BlocksController } from "@vactory/next-blocks"
import { PageContext } from "@/context/page-context"

export function Layout({ children, ...props }) {
	const pageContextData = {
		nid: props?.node?.drupal_internal__nid || false,
		translations: props?.node?.internal_extra?.translations || {},
	}

	const internalBlocks = props.node?.internal_blocks || []
	return (
		<>
			<PageContext.Provider value={pageContextData}>
				<Header />
				<BlocksController blocks={internalBlocks} region="top" />
				{children}
				<BlocksController blocks={internalBlocks} region="bottom" />
			</PageContext.Provider>
		</>
	)
}
