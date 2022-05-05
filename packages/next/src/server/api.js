import { match } from "path-to-regexp"
import { ApiRoutesMapping } from "../../.tmp/api-routes"

export const ApiHandler = async (req, res) => {
	const routes = ApiRoutesMapping
	const slug = req.query?.slug || null
	const uri = Array.isArray(slug) ? "/" + slug.join("/") : slug

	if (uri in routes) {
		const module = routes[uri]
		const handler = module.handler
		const loader = await module.loader()
		const executer = loader[handler]
		return executer(req, res)
	}

	for (const [key, value] of Object.entries(routes)) {
		const fn = match(key, { decode: decodeURIComponent })
		const routeMatch = fn(uri)
		if (routeMatch) {
			const module = value
			const handler = module.handler
			const loader = await module.loader()
			const executer = loader[handler]
			req.params = routeMatch.params
			return executer(req, res)
		}
	}

	res.status(404).send({ error: "Not found" })
}
