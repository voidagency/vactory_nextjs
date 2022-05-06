import { fetcher } from "../lib/client"
import { NodeParamsMapping } from "../../.tmp/node-params"
import logger from "../lib/logger"
import { getEnabledMenus } from "../lib/utils"
import { getTranslations } from "./get-i18n"
import { getMenus } from "./get-menus"
import { lruCache } from "../lib/cache"

const enabledMenus = getEnabledMenus()

export async function getNodeServerSideProps(context) {
	const { slug, ...query } = context.query
	const { locale } = context
	let joinedSlug = Array.isArray(slug) ? slug.join("/") : slug

	// Drupal router doesn't accept empty slug.
	if (!joinedSlug) {
		joinedSlug = "/"
	}

	let i18n = await getTranslations(locale)
	let menus = await getMenus(enabledMenus, locale)

	// const locale = getLocaleFromPath(joinedSlug, enabledLanguages)
	const langprefix = locale ? `${locale}/` : ``
	// Router stuff
	try {
		const cacheRouterKey = `${locale}-${joinedSlug}`
		let router

		if (lruCache.has(cacheRouterKey)) {
			router = lruCache.get(cacheRouterKey)
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
			lruCache.set(cacheRouterKey, router)
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
		const nodeParams = NodeParamsMapping[router.jsonapi.resourceName]
		// @todo: server not responding > 500
		const node = await fetcher(router.jsonapi.individual, {
			params: nodeParams,
		})

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
