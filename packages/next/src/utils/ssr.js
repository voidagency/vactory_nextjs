import { getEnabledLanguages, getDefaultLanguage } from "./index"

/**
 * Get multilanguage API URL
 * @param {*} language current language
 * @returns String the API URL
 */
export const getApiURL = (language) =>
	`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${language}`

export const getRequestLanguage = (req) => {
	const languages = getEnabledLanguages()
	const language = req.headers["x-language"]
	if (typeof language === "undefined") {
		return getDefaultLanguage()
	}

	if (!languages.includes(language)) {
		throw new Error("Wrong language header")
	}

	return language
}
