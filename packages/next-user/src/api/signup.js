import { deserialise } from "kitsu-core"
// import { csrf } from "@vactory/next"

// @todo: validate upfront > reduce overhead on drupal.
// @todo: test: upload picture & docs + other fields
// @todo: case: register_pending_approval
// @todo: case: verify_mail
// @todo: not feeling ok with that name param, we should expose an api from email_registration module.
// It should give an unique username based on the email
// @todo: recaptcha > drupal
// @todo: password check > drupal

/**
 * Create user on Drupal
 *
 * @param {*} body request body params
 * @returns promise
 */
const createUser = async (body) => {
	const CREATE_USER_ENDPOINT = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/api/user/register`
	return fetch(CREATE_USER_ENDPOINT, {
		method: "post",
		headers: {
			Accept: "application/vnd.api+json",
			"Content-Type": "application/vnd.api+json",
		},
		body: JSON.stringify(body),
	})
}

const validateBodyInput = () => {
	return true
}

const normalizeBodyInput = (body) => {
	const { name, password, email } = body
	return {
		data: {
			type: "user--user",
			attributes: {
				name: name,
				mail: email,
				pass: password ?? null, // Password is not required when Drupal register_pending_approval is on.
			},
		},
	}
}

const normalizeErrors = (errors) => {
	return errors
}

// POST /api/user/signup
export const signUpHandler = async (req, res) => {
	const csrf = (await import("../../../next/src/csrf.js")).default
	try {
		await csrf(req, res)
	} catch (err) {
		res.status(403).end(`Something went wrong: form tampered with`)
		return
	}
	const { method, body } = req

	if (method !== "POST") {
		res.setHeader("Allow", ["POST"])
		res.status(405).end(`Method ${method} Not Allowed`)
		return
	}

	const isValid = await validateBodyInput(body)

	if (!isValid) {
		res.status(200).json({
			status: false,
			errors: [],
		})
		return
	}

	const response = await createUser(normalizeBodyInput(body))
	const json = await response.json()
	const result = deserialise(json)

	if (result.errors) {
		res.status(200).json({
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
