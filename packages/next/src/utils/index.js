import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

export const stripHtml = (inputStr) => inputStr.replace(/(<([^>]+)>)/gi, "")

export const isEmpty = (value) => value == null || value.length === 0

/**
 * Formats a single URL query
 *
 * @param {string} value Right-hand side of the query
 * @param {string} key Left-hand side of the query
 * @returns {string} URL query string
 * @private
 */
function queryFormat(value, key) {
	if (value !== null && typeof value === "object") return query(value, key)
	else return encodeURIComponent(key) + "=" + encodeURIComponent(value)
}

/**
 * Constructs a URL query string for JSON:API parameters
 *
 * @param {Object} [params] Parameters to parse
 * @param {string} [prefix] Prefix for nested parameters - used internally
 * @returns {string} URL query string
 *
 * @example
 * query({
 *   filter: {
 *     slug: 'cowboy-bebop',
 *     title: {
 *       value: 'foo'
 *     }
 *   }
 *  sort: '-id'
 * })
 * // filter%5Bslug%5D=cowboy-bebop&filter%5Btitle%5D%5Bvalue%5D=foo&sort=-id
 */
export function query(params, prefix = null) {
	const str = []

	for (const param in params) {
		str.push(queryFormat(params[param], prefix ? `${prefix}[${param}]` : param))
	}
	return str.join("&")
}

/**
 * For a pathname that may include a locale from a list of locales, it
 * returns the detected locale.
 *
 * @see ___tests___/get-locale-from-path.test.js
 *
 * @param {*} pathname A pathname that may include a locale.
 * @param {*} locales locales A list of locales.
 * @returns The detected locale
 */
export const getLocaleFromPath = (pathname, locales = []) => {
	let detectedLocale = undefined,
		pathLocale = ""
	const leadingSlash = pathname !== "/" ? pathname.startsWith("/") : false
	const pathnameParts = pathname.split("/")
	pathLocale = leadingSlash ? pathnameParts[1] : pathnameParts[0]

	if (locales.length === 0) {
		throw new Error(`No locales[] passed to getLocaleFromPath`)
	}

	;(locales || []).some((locale) => {
		if (pathLocale.toLowerCase() === locale.toLowerCase()) {
			detectedLocale = locale
			return true
		}
		return false
	})

	return detectedLocale
}

export const cleanup = (json) => {
	if (!json) return
	delete json.jsonapi
	delete json.links
	delete json.data?.node_type?.links
	delete json.data?.uid?.links
	delete json.data?.node_banner?.links
	delete json.data?.field_vactory_taxonomy_1?.links
	delete json.data?.field_vactory_media_image?.links
	delete json.data?.field_vactory_paragraphs?.links
	delete json.data?.links
	delete json.data?.revision_uid
	delete json.data?.content_translation_source
	delete json.data?.content_translation_outdated
	delete json.data?.field_exclude_from_search
	delete json.data?.field_vactory_meta_tags
	delete json.data?.revision_translation_affected
	delete json.data?.publish_on
	delete json.data?.unpublish_on
	delete json.data?.promote
	delete json.data?.sticky
	delete json.data?.revision_log
	delete json.data?.revision_timestamp

	// @todo: figure this out
	delete json.data?.body?.value
	delete json.data?.internal_user?.revision_uid

	return json.data
}

export const getI18nConfig = () => {
	return publicRuntimeConfig.i18n
}

export const getEnabledLanguages = (config = {}) => {
	const { withLabels = false } = config
	if (withLabels) {
		return getI18nConfig().labels
	}
	return getI18nConfig().enabled
}

export const getDefaultLanguage = () => {
	return getI18nConfig().default
}

export const getEnabledMenus = () => {
	return publicRuntimeConfig.menus
}

export const generateTranslationForStaticRoute = (route) => {
	const languages = getEnabledLanguages()
	const translations = {}

	languages.forEach((locale) => {
		translations[locale] = `/${locale}${route}`
	})
	return translations
}
