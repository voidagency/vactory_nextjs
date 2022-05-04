/* eslint-disable no-unused-vars */
import { uploadHandler } from "@vactory/next/server"

const handler = async (req, res) => {
	return uploadHandler(req, res)
}

export default handler

export const config = {
	api: {
		bodyParser: false,
		// externalResolver: true, // Prevents noise created by proxy
	},
}
