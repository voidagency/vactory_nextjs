import httpProxyMiddleware from "next-http-proxy-middleware"

if (process.env.NEXT_PUBLIC_DRUPAL_BASE_URL === undefined) {
	throw Error("DRUPAL BASE URL environment variable not specified!")
}

export const proxyHandler = async (req, res) => {
	try {
		// API resolved without sending a response for ..., this may result in stalled requests.
		return await httpProxyMiddleware(req, res, {
			target: process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
			pathRewrite: [{ patternStr: `^/api/proxy`, replaceStr: "" }],
			headers: {
				cookie: "", // Must override the browser sent authorization code otherwise ingress gives a 400 status
			},
		})
	} catch (error) {
		console.error(error)
		res.status(500).json(error)
	}
}
