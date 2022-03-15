import * as React from "react"
import { NodeHandler } from "@vactory/next"
import { getServerSideProps } from "@vactory/next"
import { Layout } from "@/components/layout"

export { getServerSideProps }

export const config = { amp: "hybrid" }

export default function NodePage(props) {
	return (
		<Layout {...props}>
			<NodeHandler {...props} />
		</Layout>
	)
}
