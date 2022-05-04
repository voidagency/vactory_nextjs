import { ApiCacheWarmupHandler } from "@vactory/next/server"

export default function handler(req, res) {
	return ApiCacheWarmupHandler(req, res)
}
