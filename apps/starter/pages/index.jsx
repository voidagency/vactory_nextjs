import * as React from "react"
import { Layout } from "@/components/layout"
import { Node } from "@vactory/next/node"
import { ssrHandler } from "@vactory/next/node/handler"

export const config = { amp: "hybrid" }

export default function IndexPage(props) {
	return (
		<Layout>
			<Node {...props} />
		</Layout>
	)
}

export async function getServerSideProps(context) {
	return ssrHandler(context)
}
