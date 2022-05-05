import * as React from "react"
import { Layout } from "@/components/layout"
import { Node } from "@vactory/next"
import { getNodeServerSideProps } from "@vactory/next/server"

export const config = { amp: "hybrid" }

export default function IndexPage(props) {
	return (
		<Layout {...props}>
			<Node {...props} />
		</Layout>
	)
}

export async function getServerSideProps(context) {
	return getNodeServerSideProps(context)
}
