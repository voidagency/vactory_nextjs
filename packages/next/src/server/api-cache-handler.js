import { lruCache } from "../lib/cache"
import { getEnabledMenus, getEnabledLanguages } from "../lib/utils"
import { isHttpMethod } from "./utils"
import { getTranslations } from "./get-i18n"
import { getMenus } from "./get-menus"

const enabledMenus = getEnabledMenus()
const enabledLocales = getEnabledLanguages()

export const ApiCacheClearHandler = (req, res) => {
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
	res.status(200).json({ status: "Cache cleared" })
}

export const ApiCacheWarmupHandler = async (req, res) => {
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
