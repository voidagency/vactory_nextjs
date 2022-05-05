import { Header } from "@/components/header"
import { BlocksController } from "@vactory/next-blocks"
import { NodePageProvider } from "@vactory/next"

export function Layout({ children, ...props }) {
	return (
		<>
			<NodePageProvider node={props?.node || {}}>
				<Header />
				<BlocksController region="top" />
				{children}
				<BlocksController region="bottom" />
			</NodePageProvider>
		</>
	)
}
