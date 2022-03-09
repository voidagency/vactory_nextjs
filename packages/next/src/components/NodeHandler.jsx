import React from "react"
import Head from "next/head"
import { fetcher } from "../jsonapi"
import { TemplatesMapping } from "../../.tmp/node-templates"
import { NodeApiRoutesMapping } from "../../.tmp/node-api-routes"
import NodeDefault from "./NodeDefault"
import logger from "../logger/logger"
import LRUCache from "lru-cache"

// @todo: disable dev ? used only in routing ?
const ssrCache = new LRUCache({
  max: 100,
  ttl: 1000 * 60 * 60, // 1 hour
})

export const NodeHandler = ({ node, params }) => {
  const Component = TemplatesMapping[node.type] || NodeDefault
  return (
    <React.Fragment>
      <Head>
        <link rel="preload" as="image/svg+xml" href="/icons.svg" />
        <title>{node?.title}</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <Component node={node} params={params} />
    </React.Fragment>
  )
}

const getLocal = (slug) => {
  if (Array.isArray(slug)) {
    if (["ar", "en", "fr"].includes(slug[0])) return slug[0]
    return ""
  } else {
    const match = slug.match(/^([\w]{2})/)
    if (!match) {
      return ""
    }
    return match[1]
  }
}

export async function getServerSideProps(context) {
  const { slug, ...query } = context.query
  // delete query.slug
  const joinedSlug = Array.isArray(slug) ? slug.join("/") : slug
  const locale = getLocal(slug)
  const langprefix = locale ? `${locale}/` : ``

  // Router stuff
  try {
    const cacheRouterKey = `${locale}-${joinedSlug}`
    let router

    if (ssrCache.has(cacheRouterKey)) {
      router = ssrCache.get(cacheRouterKey)
    } else {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${langprefix}router/translate-path?path=${joinedSlug}`
      )

      if (!response.ok) {
        return {
          notFound: true,
        }
      }

      router = await response.json()
      ssrCache.set(cacheRouterKey, router)
    }

    // Check for redirect.
    if (router.redirect?.length) {
      const [redirect] = router.redirect
      return {
        redirect: {
          destination: redirect.to,
          permanent: redirect.status === "301",
        },
      }
    }

    // Fetch data from external API.
    const nodeParams = NodeApiRoutesMapping[router.jsonapi.resourceName]
    // @todo: send params to Drupal JSON:API
    const node = await fetcher(router.jsonapi.individual, {
      params: nodeParams,
    })

    const langcode = node.langcode

    context.res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    )

    // Pass data to the page via props
    return {
      props: {
        node: node,
        params: Object.keys(query).length > 0 ? query : null,
        i18n: (await import(`translations/${langcode}.json`)).default,
        locale: langcode,
      },
    }
  } catch (err) {
    logger.info(err)
  }

  return {
    notFound: true,
  }
}
