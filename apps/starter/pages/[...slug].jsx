import * as React from "react"
import { NodeHandler } from "@vactory/next/client/node-handler"
import { Layout } from "@/components/layout"
import { getNodeServerSideProps } from "@vactory/next/server/node-handler-server"

export const config = { amp: "hybrid" }

export default function NodePage(props) {
	return (
		<Layout {...props}>
			<NodeHandler {...props} />
		</Layout>
	)
}

export async function getServerSideProps(context) {
	return getNodeServerSideProps(context)
}
