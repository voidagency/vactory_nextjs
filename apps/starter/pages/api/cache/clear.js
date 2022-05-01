import { ApiCacheClearHandler } from "@vactory/next/server"

export default function handler(req, res) {
	return ApiCacheClearHandler(req, res)
}
