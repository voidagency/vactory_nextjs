import { lruCache } from "@vactory/next/cache/lru"
import isHttpMethod from "@vactory/next/utils/api/isHttpMethod"
import { getMenus } from "@vactory/next/menus/handler"
import { getTranslations } from "@vactory/next/i18n/handler"
import { getEnabledMenus, getEnabledLanguages } from "@vactory/next/utils"

const enabledMenus = getEnabledMenus()
const enabledLocales = getEnabledLanguages()

export default async function handler(req, res) {
	const secret = req.headers["x-cache-secret"] || ""
	isHttpMethod(req, res, ["GET"])

	if (process.env.CACHE_SECRET === undefined) {
		res.status(500).json({ status: "CACHE_SECRET environment variable not specified!" })
		return
	}

	if (process.env.CACHE_SECRET !== secret) {
		res.status(500).json({ status: "secret key doesn't match" })
		return
	}
	

	lruCache.clear()

	for (const locale of enabledLocales) {
		console.log("locale", locale)
		await getTranslations(locale)
		await getMenus(enabledMenus, locale)
	}

	res.status(200).json({ status: "Cache warmup done" })
}
