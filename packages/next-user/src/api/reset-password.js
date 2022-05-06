import { deserialise } from "kitsu-core"
import { csurf, getRequestLanguage } from "@vactory/next/server"
import { getApiURL } from "@vactory/next"

const resetUserPassword = async (language, email) => {
	const CREATE_USER_ENDPOINT = `${getApiURL(language)}/api/user/password/reset`
	return fetch(CREATE_USER_ENDPOINT, {
		method: "post",
		headers: {
			Accept: "application/vnd.api+json",
			"Content-Type": "application/vnd.api+json",
		},
		body: JSON.stringify({
			data: {
				type: "user--password-reset",
				attributes: {
					mail: email,
				},
			},
		}),
	})
}

const normalizeErrors = (errors) => {
	return errors
}

// POST /api/user/reset-password
export const resetPasswordHandler = async (req, res) => {
	const SECRET_KEY = process.env.RECAPTCHA_SECRETKEY
	try {
		await csrf(req, res)
	} catch (err) {
		res.status(403).end(`Something went wrong: form tampered with`)
		return
	}
	const { method, body } = req
	const { email, recaptchaResponse } = body
	if (method !== "POST") {
		res.setHeader("Allow", ["POST"])
		res.status(405).end(`Method ${method} Not Allowed`)
		return
	}

	const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${recaptchaResponse}`

	try {
		const recaptchaRes = await fetch(verifyUrl, { method: "POST" })
		await recaptchaRes.json()
	} catch (e) {
		res.status(200).json({
			status: false,
			errors: {
				message: "Invalid recpatcha",
			},
		})
		return
	}

	let response
	try {
		response = await resetUserPassword(getRequestLanguage(req), email)
	} catch (error) {
		console.log(error.errors)
		res.status(422).json({
			status: false,
			errors: error.errors,
		})
		return
	}

	const json = await response.json()
	const result = deserialise(json)

	if (result.errors) {
		res.status(422).json({
			status: false,
			errors: normalizeErrors(result.errors),
		})
		return
	}

	if (result.data) {
		res.status(201).json({
			status: true,
			data: result.data,
			meta: result?.meta,
		})
		return
	}

	res.status(500).end(`Something went wrong`)
}
