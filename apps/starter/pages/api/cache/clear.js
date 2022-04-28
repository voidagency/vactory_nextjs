import { lruCache } from "@vactory/next/cache/lru"
import isHttpMethod from "@vactory/next/utils/api/isHttpMethod"

export default function handler(req, res) {
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
