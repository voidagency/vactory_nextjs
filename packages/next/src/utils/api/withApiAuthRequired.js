import { getSession } from "next-auth/react"

const withApiAuthRequired = (handler) => async (req, res) => {
	const session = await getSession({ req })

	if (!session) {
		res.status(403).end(`Access denied`)
		return
	}
	return handler(req, res, session)
}

export default withApiAuthRequired
