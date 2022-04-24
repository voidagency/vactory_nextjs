import { deserialise } from "kitsu-core"
// import csrf from "@vactory/next/csrf"
import { getApiURL, getRequestLanguage } from "@vactory/next/utils/ssr"
import { getSession } from "next-auth/react"

/**
 * update user on Drupal
 *
 * @param {*} body request body params
 * @returns promise
 */
const updateUser = async (uuid, accessToken, body, language) => {
	const CREATE_USER_ENDPOINT = `${getApiURL(language)}/api/user/user/${uuid}`
	return fetch(CREATE_USER_ENDPOINT, {
		method: "patch",
		headers: {
			Accept: "application/vnd.api+json",
			"Content-Type": "application/vnd.api+json",
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify(body),
	})
}

const validateBodyInput = () => {
	return true
}

const normalizeBodyInput = (uuid, body) => {
	const { email, first_name, last_name, remove_user_picture = false } = body
	return {
		data: {
			type: "user--user",
			id: uuid,
			attributes: {
				...(email && email.length > 0 && { mail: email }),
				...(first_name && first_name.length > 0 && { field_first_name: first_name }),
				...(last_name && last_name.length > 0 && { field_last_name: last_name }),
			},
			relationships: {
				...(remove_user_picture && {
					user_picture: {
						data: {},
					},
				}),
			},
		},
	}
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

	// try {
	// 	await csrf(req, res)
	// } catch (err) {
	// 	res.status(403).end(`Something went wrong: form tampered with`)
	// 	return
	// }
	const { method, body } = req
	const language = getRequestLanguage(req)

	if (method !== "POST") {
		res.setHeader("Allow", ["POST"])
		res.status(405).end(`Method ${method} Not Allowed`)
		return
	}

	const isValid = await validateBodyInput(body)

	if (!isValid) {
		res.status(403).json({
			status: false,
			errors: [],
		})
		return
	}

	let result
	try {
		const response = await updateUser(
			session.user.uuid,
			session.accessToken,
			normalizeBodyInput(session.user.uuid, body),
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
		return
	}

	if (result.errors) {
		res.status(403).json({
			status: false,
			errors: normalizeErrors(result.errors),
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

	res.status(500).end(`Something went wrong`)
}
