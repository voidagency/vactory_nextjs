import withApiAuthRequired from "@vactory/next/utils/api/withApiAuthRequired"
import withHttpMethod from "@vactory/next/utils/api/withHttpMethod"
// import { getRequestLanguage } from "@vactory/next/utils/ssr"
import fileUpload from "@vactory/next/utils/api/fileUpload"

const handler = async (req, res, ...rest) => {
	return fileUpload(req, res, ...rest)
}

export default withHttpMethod(["POST"], withApiAuthRequired(handler))

export const config = {
	api: {
		bodyParser: false,
		// externalResolver: true, // Prevents noise created by proxy
	},
}
