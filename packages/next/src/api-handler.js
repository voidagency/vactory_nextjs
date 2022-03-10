import { ApiRoutesMapping } from "@vactory/next"
import { match } from "path-to-regexp"

export const ApiHandler = async (req, res) => {
  const routes = ApiRoutesMapping
  const slug = req.query?.slug || null
  const uri = Array.isArray(slug) ? "/" + slug.join("/") : slug

  let routeFound = false

  if (uri in routes) {
    routeFound = true
    await routes[uri](req, res)
  }

  if (!routeFound) {
    for (const [key, value] of Object.entries(routes)) {
      const fn = match(key, { decode: decodeURIComponent })
      const routeMatch = fn(uri)
      if (routeMatch) {
        routeFound = true
        req.params = routeMatch.params
        await value(req, res)
      }
    }
  }

  if (!routeFound) {
    res.status(404).send({ error: "Not found" })
  }
}
