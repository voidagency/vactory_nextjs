const isHttpMethod = (req, res, methods = []) => {
	const { method } = req

	if (!methods.includes(method)) {
		res.setHeader("Allow", [methods])
		res.status(405).end(`Method ${method} Not Allowed`)
	}
}

export default isHttpMethod
