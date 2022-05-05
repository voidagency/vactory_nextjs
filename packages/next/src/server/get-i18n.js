import { isEmpty } from "../lib/utils"
import { lruCache } from "../lib/cache"

const fetchTranslations = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/_translations`)
	if (!response.ok) {
		const message = `[fetchTranslations] An error has occured: ${response.status}`
		throw new Error(message)
	}

	const data = await response.json()
	return data
}

const getTranslationsByLocale = (resources, locale) => {
	return resources.find((resource) => resource.locale === locale)?.translations || []
}

const formatTranslationsForNextIntlProvider = (resources = []) => {
	const obj = {}
	resources.forEach((element) => {
		obj[element.source] = element.translation
	})
	return obj
}

export const getTranslations = async (locale) => {
	const cacheKey = `i18n:${locale}`

	if (isEmpty(locale)) {
		const message = `[getTranslations] An error has occured: Missing locale parameter`
		throw new Error(message)
	}

	// Cache-first
	if (lruCache.has(cacheKey)) {
		return new Promise((resolve) => {
			resolve(lruCache.get(cacheKey))
		})
	}

	let translations = {}
	const response = await fetchTranslations()
	return new Promise((resolve, reject) => {
		try {
			const resources = getTranslationsByLocale(response.resources, locale)
			translations = formatTranslationsForNextIntlProvider(resources)
		} catch (error) {
			reject(error)
		}
		lruCache.set(cacheKey, translations)
		resolve(translations)
	})
}
