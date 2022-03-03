import React from "react"
import Head from "next/head"
import { deserialise } from "kitsu-core"
// import dynamic from "next/dynamic"

import { TemplatesMapping } from "../../.tmp/templates"
// import { Node } from "@vactory/next-news"
// import { Node } from "@vactory/next-page"

// const DynamicComponent = dynamic(() => import("./NodeController"))

export const NodeController = ({ node, params }) => {
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
    `http://localhost:8080/${langprefix}/router/translate-path?path=${slug}`
  )
  const router = await res.json()

  // Fetch data from external API
  try {
    const res = await fetch(router.jsonapi.individual)
    const data = await res.json()
    const formatted = deserialise(data)

    // @TODO: FIGURE OUT THIS one.
    delete formatted.jsonapi
    delete formatted.links
    delete formatted.data?.node_type?.links
    delete formatted.data?.uid?.links
    delete formatted.data?.node_banner?.links
    delete formatted.data?.field_vactory_paragraphs?.links
    delete formatted.data?.links
    delete formatted.data?.revision_uid
    delete formatted.data?.content_translation_source
    delete formatted.data?.content_translation_outdated
    delete formatted.data?.field_exclude_from_search
    delete formatted.data?.field_vactory_meta_tags
    delete formatted.data?.revision_translation_affected
    delete formatted.data?.publish_on
    delete formatted.data?.unpublish_on
    delete formatted.data?.promote
    delete formatted.data?.sticky
    delete formatted.data?.changed
    delete formatted.data?.created
    delete formatted.data?.revision_log
    delete formatted.data?.revision_timestamp

    // console.log(formatted.data)

    // res.setHeader(
    //   'Cache-Control',
    //   'public, s-maxage=10, stale-while-revalidate=59'
    // )

    const langcode = formatted.data.langcode

    // Pass data to the page via props
    return {
      props: {
        node: formatted.data,
        params: params && Object.keys(params).length > 0 ? params : null,
        i18n: (await import(`translations/${langcode}.json`)).default,
        locale: langcode,
        // template: dynamic(() => import("../components/node")),
        // template: JSON.stringify(template.default({}), replacer),
      },
    }
  } catch (err) {
    // console.log(err)
  }

  return {
    notFound: true,
  }
}
