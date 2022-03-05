import React from "react"
import Head from "next/head"
import { fetcher } from "../jsonapi"
import { TemplatesMapping } from "../../.tmp/node-templates"
import { NodeApiRoutesMapping } from "../../.tmp/node-api-routes"

// import { Node } from "@vactory/next-news"
// import { Node } from "@vactory/next-page"

// const DynamicComponent = dynamic(() => import("./NodeController"))

export const NodeHandler = ({ node, params }) => {
  const Component = TemplatesMapping[node.type]
  return (
    <React.Fragment>
      <Head>
        {/* <title>{node.title}</title> */}
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>

      <Component node={node} params={params} />

      {/* {node.type === "node--page" && <NodeBasicPage node={node} />} */}
      {/* {node.type === "node--article" && <NodeArticle node={node} />} */}
    </React.Fragment>
  )
}

export async function getServerSideProps(context) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const path = require("path")
  // const React = require("react")
  // const createElement = React.createElement

  let { slug } = context.params
  const params = context.query
  delete params.slug
  const langprefix = slug[0]
  slug = Array.isArray(slug) ? slug.join("/") : slug

  // Router stuff
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${langprefix}/router/translate-path?path=${slug}`
  )
  const router = await res.json()

  // Fetch data from external API
  try {
    const nodeParams = NodeApiRoutesMapping[router.jsonapi.resourceName]
    const node = await fetcher(
      `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${langprefix}/api/node/${router.entity.bundle}/${router.entity.uuid}`,
      {
        params: nodeParams,
      }
    )

    const langcode = node.langcode

    // Pass data to the page via props
    return {
      props: {
        node: node,
        params: params && Object.keys(params).length > 0 ? params : null,
        i18n: (await import(`translations/${langcode}.json`)).default,
        locale: langcode,
      },
    }
  } catch (err) {
    console.log(err)
  }

  return {
    notFound: true,
  }
}
