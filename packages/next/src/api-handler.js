import { match } from "path-to-regexp"
import { ApiRoutesMapping } from "../.tmp/api-routes"

const path = require("path")

export const ApiHandler = async (req, res) => {
	const routes = ApiRoutesMapping
	const slug = req.query?.slug || null
	const uri = Array.isArray(slug) ? "/" + slug.join("/") : slug

	let routeFound = false

	// res.status(404).send({ error: "Notddd found" })

	if (uri in routes) {
		routeFound = true
		const file = path.resolve(`../../packages/${routes[uri]["file"]}`)
		res.status(404).send({ error: "dssss found" })
		const module = await import(`../../../packages/${routes[uri]["file"]}`)
		console.log("file", `../../../packages/${routes[uri]["file"]}`)
		// console.log(module)
		return
		// return await module[routes[uri]["handler"]](req, res)
	}

	// if (!routeFound) {
	// 	for (const [key, value] of Object.entries(routes)) {
	// 		console.log(value)
	// 		const fn = match(key, { decode: decodeURIComponent })
	// 		const routeMatch = fn(uri)
	// 		if (routeMatch) {
	// 			routeFound = true
	// 			req.params = routeMatch.params
	// 			await value(req, res)
	// 		}
	// 	}
	// }

	// if (!routeFound) {
	// 	res.status(404).send({ error: "Not found" })
	// }
}
