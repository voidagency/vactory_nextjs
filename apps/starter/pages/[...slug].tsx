import * as React from "react"
import { NodeHandler } from "@vactory/next"
export { getServerSideProps } from "@vactory/next"
import { Layout } from "@/components/layout"

export default function NodePage(props) {
  return (
    <Layout>
      <NodeHandler {...props} />
    </Layout>
  )
}
