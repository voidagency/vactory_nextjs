import Busboy from "busboy"
import { getApiURL, getRequestLanguage } from "@vactory/next/utils/ssr"
import { deserialise } from "kitsu-core"

const upload = (url, headers, binary) => {
	return fetch(url, {
		method: "post",
		headers: headers,
		body: binary,
	})
}

const fileUpload = async (req, res, session) => {
	const language = getRequestLanguage(req)
	const drupal_base_url = `${getApiURL(language)}`
	// @todo: param for this
	const url = `${drupal_base_url}/api/user/user/${session.user.uuid}/user_picture`

	const contentDisposition = req.headers["content-disposition"]
	if (typeof contentDisposition === "undefined") {
		res.status(500).end(`Wrong content-disposition or content-length`)
	}

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
				const response = await upload(
					url,
					{
						"Content-Disposition": contentDisposition,
						Accept: "application/vnd.api+json",
						"Content-Type": "application/octet-stream",
						Authorization: `Bearer ${session.accessToken}`,
					},
					Buffer.from(buffer, "binary")
				)
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

export default fileUpload
