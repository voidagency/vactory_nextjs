import React from "react"
import Head from "next/head"
import { fetcher } from "./api-client"
import { TemplatesMapping } from "../.tmp/node-templates"
import { NodeApiRoutesMapping } from "../.tmp/node-api-routes"
import NodeDefault from "./node-default"
import logger from "./logger/logger"
import { getEnabledMenus } from "./utils"
import { getTranslations } from "./get-translations"
import { getMenus } from "./menus"
import LRUCache from "lru-cache"

const enabledMenus = getEnabledMenus()

// @todo: disable dev ? used only in routing ?
const ssrCache = new LRUCache({
  max: 100,
  ttl: 1000 * 60 * 60, // 1 hour
})

export const NodeHandler = ({ node, params }) => {
  const Component = TemplatesMapping[node.type] || NodeDefault
  const metatags = node.metatag_normalized || []
  return (
    <React.Fragment>
      <Head>
        <link rel="preload" as="image/svg+xml" href="/icons.svg" />
        <title>{node?.title}</title>
        {/* // TODO: create a MetaTags component */}
        {metatags.map((tag, key) => {
          const Tag = tag.tag
          const backendBase = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
          const frontendBase = process.env.NEXT_PUBLIC_BASE_URL

          if (tag.attributes?.href?.startsWith(backendBase))
            tag.attributes.href = tag.attributes.href.replace(
              backendBase,
              frontendBase
            )
          return <Tag key={key} {...tag.attributes} />
        })}
      </Head>
      <Component node={node} params={params} />
    </React.Fragment>
  )
}

export async function getServerSideProps(context) {
  const { slug, ...query } = context.query
  const { locale } = context
  let joinedSlug = Array.isArray(slug) ? slug.join("/") : slug

  // Drupal router doesn't accept empty slug.
  if (!joinedSlug) {
    joinedSlug = "/"
  }

  // @todo: find a better way to handle such cases.
  const cacheI18nKey = locale
  const cacheMenusKey = `${enabledMenus.join("_")}-${locale}`
  let i18n = {}
  let menus = []

  if (ssrCache.has(cacheI18nKey)) {
    i18n = ssrCache.get(cacheI18nKey)
  } else {
    i18n = await getTranslations(locale)
    ssrCache.set(cacheI18nKey, i18n)
  }

  if (ssrCache.has(cacheMenusKey)) {
    menus = ssrCache.get(cacheMenusKey)
  } else {
    menus = await getMenus(enabledMenus, locale)
    ssrCache.set(cacheMenusKey, menus)
  }

  // const locale = getLocaleFromPath(joinedSlug, enabledLanguages)
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
    // @todo: server not responding > 500
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
        i18n: i18n,
        menus: menus,
        locale: locale,
      },
    }
  } catch (err) {
    logger.info(err)
  }

  return {
    notFound: true,
  }
}
