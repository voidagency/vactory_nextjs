const withHttpMethod =
	(methods = [], handler) =>
	async (req, res, ...rest) => {
		const { method } = req

		if (!methods.includes(method)) {
			res.setHeader("Allow", [methods])
			res.status(405).end(`Method ${method} Not Allowed`)
		}

		return handler(req, res, ...rest)
	}

export default withHttpMethod
