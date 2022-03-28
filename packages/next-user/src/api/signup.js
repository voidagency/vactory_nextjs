import { deserialise } from "kitsu-core"
import csrf from "@vactory/next/csrf"

// @todo: validate upfront > reduce overhead on drupal.
// @todo: test: upload picture & docs + other fields
// @todo: case: register_pending_approval
// @todo: case: verify_mail
// @todo: not feeling ok with that name param, we should expose an api from email_registration module.
// It should give an unique username based on the email
// @todo: recaptcha > drupal
// @todo: password check > drupal

/**
 * Get multilanguage API URL
 * @param {*} language current language
 * @returns String the API URL
 */
const apiURL = (language) => `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${language}`

/**
 * Create user on Drupal
 *
 * @param {*} body request body params
 * @returns promise
 */
const createUser = async (lng, body) => {
	const CREATE_USER_ENDPOINT = `${apiURL(lng)}/api/user/register`
	return fetch(CREATE_USER_ENDPOINT, {
		method: "post",
		headers: {
			Accept: "application/vnd.api+json",
			"Content-Type": "application/vnd.api+json",
		},
		body: JSON.stringify(body),
	})
}

/**
 * Get unique username by email
 *
 * @param {*} email email adresss to generate username from.
 * @returns promise
 */
const getUsernameByEmail = async (lng, email) => {
	const CREATE_USER_ENDPOINT = `${apiURL(
		lng
	)}/api/get-unique-username-by-email?email=${email}`
	return fetch(CREATE_USER_ENDPOINT)
}

const validateBodyInput = () => {
	return true
}

const normalizeBodyInput = (body) => {
	const { name, password, email, first_name, last_name } = body
	return {
		data: {
			type: "user--user",
			attributes: {
				name: name,
				mail: email,
				pass: password ?? null, // Password is not required when Drupal register_pending_approval is on.
				field_first_name: first_name,
				field_last_name: last_name,
			},
		},
	}
}

const normalizeErrors = (errors) => {
	return errors
}

// POST /api/user/signup
export const signUpHandler = async (req, res) => {
	try {
		await csrf(req, res)
	} catch (err) {
		res.status(403).end(`Something went wrong: form tampered with`)
		return
	}
	const { method, body } = req
	const language = "fr"
	const recaptchaResponse = body?.recaptchaResponse || ""

	if (method !== "POST") {
		res.setHeader("Allow", ["POST"])
		res.status(405).end(`Method ${method} Not Allowed`)
		return
	}

	const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRETKEY}&response=${recaptchaResponse}`

	try {
		const recaptchaRes = await fetch(verifyUrl, { method: "POST" })
		await recaptchaRes.json()
	} catch (e) {
		res.status(403).json({
			status: false,
			errors: [
				{
					detail: "Invalid recpatcha",
					source: {
						pointer: "/data/attributes/captcha",
					},
				},
			],
		})
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

	try {
		const response = await getUsernameByEmail(language, body.email)
		const json = await response.json()
		if (json?.errors) {
			res.status(403).json({
				status: false,
				errors: [
					{
						detail: "Invalid email",
						source: {
							pointer: "/data/attributes/mail",
						},
					},
				],
			})
			return
		}
		body.name = json.username
	} catch (err) {
		res.status(403).json({
			status: false,
			errors: [
				{
					detail: "Invalid email",
					source: {
						pointer: "/data/attributes/mail",
					},
				},
			],
		})
		return
	}

	const response = await createUser(language, normalizeBodyInput(body))
	const json = await response.json()
	const result = deserialise(json)

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
