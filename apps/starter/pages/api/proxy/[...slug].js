import { proxyHandler } from "@vactory/next/server"

export default async function handler(req, res) {
	return proxyHandler(req, res)
}

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true, // Prevents noise created by proxy
	},
}
