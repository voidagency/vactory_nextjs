import isHttpMethod from "@vactory/next/utils/api/isHttpMethod"
import Busboy from "busboy"
import { getApiURL, getRequestLanguage } from "@vactory/next/utils/ssr"
import { deserialise } from "kitsu-core"

const fileUpload = async (req, res, init) => {
	const { path, headers = {}, method } = init
	const language = getRequestLanguage(req)
	const drupal_base_url = `${getApiURL(language)}`
	// @todo: param for this
	// const url = `${drupal_base_url}/api/user/user/${session.user.uuid}/user_picture`
	const url = `${drupal_base_url}${path}`

	const busboy = Busboy({
		headers: req.headers,
		limits: {
			files: 1,
		},
	})

	const buf = []
	// let result
	busboy.on("file", function (fieldname, file, filename, encoding, mimetype) {
		file.on("data", function (data) {
			buf.push(data)
		})
		busboy.on("finish", async function () {
			const buffer = Buffer.concat(buf)

			try {
				const response = await fetch(url, {
					method: method,
					headers: headers,
					body: Buffer.from(buffer, "binary"),
				})

				const json = await response.json()
				const result = deserialise(json)
				if (result.errors) {
					res.status(403).json({
						status: false,
						errors: result.errors,
					})
					return
				}

				if (result.data) {
					res.status(201).json({
						status: true,
						data: result.data,
					})
					return
				}
			} catch (error) {
				console.log(error)
				res.status(500).json({
					status: false,
					errors: [error],
				})
			}
		})
	})
	req.pipe(busboy)
}

const handler = async (req, res) => {
	isHttpMethod(req, res, ["POST", "PATCH"])

	const path = req.headers["x-path"]
	const authorization = req.headers["authorization"]
	const contentDisposition = req.headers["content-disposition"]
	const { method } = req

	if (typeof contentDisposition === "undefined") {
		res.status(500).end(`Wrong content-disposition`)
		return
	}

	if (typeof path === "undefined") {
		res.status(500).end(`Wrong x-path`)
		return
	}

	return fileUpload(req, res, {
		path,
		method,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/octet-stream",
			Authorization: authorization,
			"content-disposition": contentDisposition,
		},
	})
}

export default handler

export const config = {
	api: {
		bodyParser: false,
		// externalResolver: true, // Prevents noise created by proxy
	},
}
