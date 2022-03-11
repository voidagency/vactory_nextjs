import { Header } from "./header";
import { BlocksController } from "@vactory/next";

export function Layout({ children, ...props }) {
	const internalBlocks = props.node?.internal_blocks || [];
	return (
		<>
			<Header />
			<BlocksController blocks={internalBlocks} region="top" />
			<main>{children}</main>
			<BlocksController blocks={internalBlocks} region="bottom" />
		</>
	);
}
