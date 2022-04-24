import { deserialise } from "kitsu-core"
// import csrf from "@vactory/next/csrf"
import { getApiURL, getRequestLanguage } from "@vactory/next/utils/ssr"
import { getSession } from "next-auth/react"
import Busboy from "busboy"
import { inspect } from "util"

/**
 * update user on Drupal
 *
 * @param {*} body request body params
 * @returns promise
 */
const updateUserPicture = async (uuid, headers, binaryFile, language) => {
	const CREATE_USER_ENDPOINT = `${getApiURL(language)}/api/user/user/${uuid}/user_picture`
	return fetch(CREATE_USER_ENDPOINT, {
		method: "post",
		headers: headers,
		body: binaryFile,
	})
}

const validateBodyInput = () => {
	return true
}

const normalizeBodyInput = (uuid, body) => {
	// const { email, first_name, last_name, remove_user_picture = false } = body
	// return {
	// 	data: {
	// 		type: "user--user",
	// 		id: uuid,
	// 		attributes: {
	// 			...(email && email.length > 0 && { mail: email }),
	// 			...(first_name && first_name.length > 0 && { field_first_name: first_name }),
	// 			...(last_name && last_name.length > 0 && { field_last_name: last_name }),
	// 		},
	// 		relationships: {
	// 			...(remove_user_picture && {
	// 				user_picture: {
	// 					data: {},
	// 				},
	// 			}),
	// 		},
	// 	},
	// }
}

const normalizeErrors = (errors) => {
	return errors
}

// POST /api/user/update
export const updateHandler = async (req, res) => {
	const session = await getSession({ req })

	if (!session) {
		res.status(403).end(`Access denied`)
		return
	}

	const { method, body } = req
	const language = getRequestLanguage(req)

	if (method !== "POST") {
		res.setHeader("Allow", ["POST"])
		res.status(405).end(`Method ${method} Not Allowed`)
		return
	}

	const contentDisposition = req.headers["content-disposition"]
	if (typeof contentDisposition === "undefined") {
		res.status(500).end(`Wrong content-disposition or content-length`)
	}

	return new Promise((resolve) => {
		const busboy = Busboy({
			headers: req.headers,
			limits: {
				files: 1,
			},
		})
		const buf = []
		let result
		// console.log(JSON.stringify(req.headers, null, 2))
		busboy.on("file", function (fieldname, file, filename, encoding, mimetype) {
			console.log(
				"File [" +
					fieldname +
					"]: filename: " +
					filename +
					", encoding: " +
					encoding +
					", mimetype: " +
					mimetype
			)
			file.on("data", function (data) {
				buf.push(data)
				console.log("File [" + fieldname + "] got " + data.length + " bytes")
			})
			file.on("end", function () {
				console.log("File [" + fieldname + "] Finished")
			})
		})
		busboy.on("field", function (fieldname, val) {
			console.log("Field [" + fieldname + "]: value: " + inspect(val))
		})
		busboy.on("finish", async function () {
			console.log("Done parsing form!")
			const buffer = Buffer.concat(buf)
			try {
				console.log(buffer)
				console.log(contentDisposition)
				const response = await updateUserPicture(
					session.user.uuid,
					{
						"Content-Disposition": contentDisposition,
						Accept: "application/vnd.api+json",
						"Content-Type": "application/octet-stream",
						Authorization: `Bearer ${session.accessToken}`,
					},
					Buffer.from(buffer, "binary"),
					language
				)
				const json = await response.json()
				result = deserialise(json)
			} catch (error) {
				console.log(error)

				res.status(500).json({
					status: false,
					errors: [error],
				})
				resolve()
				return
			}

			if (result.errors) {
				res.status(403).json({
					status: false,
					errors: normalizeErrors(result.errors),
				})
				resolve()
				return
			}

			if (result.data) {
				res.status(201).json({
					status: true,
					data: result.data,
				})
				resolve()
				return
			}

			resolve(1)
		})
		req.pipe(busboy)
	})

	// // configure busboy to only look for one file
	// const busboy = new Busboy({
	// 	headers: req.headers,
	// 	limits: {
	// 		files: 1,
	// 	},
	// })

	// // process the request body and stream the file data
	// busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
	// 	console.log(fieldname)
	// 	console.log(filename)
	// 	console.log(encoding)
	// 	console.log(mimetype)
	// 	const buf = []
	// 	file
	// 		.on("data", (d) => {
	// 			buf.push(d)
	// 		})
	// 		.on("end", async () => {
	// 			const data = Buffer.concat(buf)
	// 			console.log(data)
	// 		})
	// })

	res.status(500).end(`Something went wrong`)

	// return new Promise((resolve) => {
	// 	let buffer = ""
	// 	let result
	// 	req.on("data", (chunk) => {
	// 		console.log("receieve chunk")
	// 		buffer += chunk
	// 	})

	// 	req.on("end", async () => {
	// 		try {
	// 			console.log(buffer)
	// 			console.log(contentDisposition)
	// 			const response = await updateUserPicture(
	// 				session.user.uuid,
	// 				{
	// 					"Content-Disposition": contentDisposition,
	// 					Accept: "application/vnd.api+json",
	// 					"Content-Type": "application/octet-stream",
	// 					Authorization: `Bearer ${session.accessToken}`,
	// 				},
	// 				Buffer.from(buffer, "binary"),
	// 				language
	// 			)
	// 			const json = await response.json()
	// 			result = deserialise(json)
	// 		} catch (error) {
	// 			console.log(error)

	// 			res.status(500).json({
	// 				status: false,
	// 				errors: [error],
	// 			})
	// 			resolve()
	// 			return
	// 		}

	// 		if (result.errors) {
	// 			res.status(403).json({
	// 				status: false,
	// 				errors: normalizeErrors(result.errors),
	// 			})
	// 			resolve()
	// 			return
	// 		}

	// 		if (result.data) {
	// 			res.status(201).json({
	// 				status: true,
	// 				data: result.data,
	// 			})
	// 			resolve()
	// 			return
	// 		}

	// 		res.status(500).end(`Something went wrong`)
	// 		resolve()
	// 	})
	// })
}
