import { getSession } from "next-auth/react"
import { getEnabledLanguages, getDefaultLanguage } from "../lib/utils"
/**
 * For a pathname that may include a locale from a list of locales, it
 * returns the detected locale.
 *
 * @see ___tests___/get-locale-from-path.test.js
 *
 * @param {*} pathname A pathname that may include a locale.
 * @param {*} locales locales A list of locales.
 * @returns The detected locale
 */
export const getLocaleFromPath = (pathname, locales = []) => {
	let detectedLocale = undefined,
		pathLocale = ""
	const leadingSlash = pathname !== "/" ? pathname.startsWith("/") : false
	const pathnameParts = pathname.split("/")
	pathLocale = leadingSlash ? pathnameParts[1] : pathnameParts[0]

	if (locales.length === 0) {
		throw new Error(`No locales[] passed to getLocaleFromPath`)
	}

	;(locales || []).some((locale) => {
		if (pathLocale.toLowerCase() === locale.toLowerCase()) {
			detectedLocale = locale
			return true
		}
		return false
	})

	return detectedLocale
}

export const isHttpMethod = (req, res, methods = []) => {
	const { method } = req

	if (!methods.includes(method)) {
		res.setHeader("Allow", [methods])
		res.status(405).end(`Method ${method} Not Allowed`)
	}
}

export const withApiAuthRequired = (handler) => async (req, res) => {
	const session = await getSession({ req })

	if (!session) {
		res.status(403).end(`Access denied`)
		return
	}
	return handler(req, res, session)
}

export const withHttpMethod =
	(methods = [], handler) =>
	async (req, res, ...rest) => {
		const { method } = req

		if (!methods.includes(method)) {
			res.setHeader("Allow", [methods])
			res.status(405).end(`Method ${method} Not Allowed`)
		}

		return handler(req, res, ...rest)
	}
/**
 * Error with HTTP status to be sent with that error. Used in `handleApiErrors`.
 */
export class HttpError extends Error {
	// eslint-disable-next-line no-unused-vars
	constructor(message, status, origin) {
		super(message)
	}
}

/**
 * A helper function to create `HttpError` classes
 */
const createErrorFactory = (status) => {
	class HttpErrorSubclass extends HttpError {
		constructor(message, origin) {
			super(message, status, origin)
		}
	}

	return HttpErrorSubclass
}

export const BadRequestError = createErrorFactory(400)

/**
 * Helper function to handle errors which occurred in processing of API request. The shape of the
 * error response is kept the same as the errors returned from data-manager API.
 * TODO: Possibly make this as a middleware so we don't have to manually try/catch and call it in
 * the catch block?
 */
export const handleApiError = (res, error) => {
	if (error instanceof HttpError) {
		if (error.origin) {
			// Log the error message and the original error (if provided)
			console.error(error.message)
			console.error(error.origin)
		} else {
			console.error(error)
		}

		return res.status(error.status).json({ error: error.message })
	}

	console.error(error)

	if (error instanceof Error) {
		return res.status(500).json({ error: error.message })
	}

	// Catch blocks can catch anything thrown, not only instances of the Error class
	return res.status(500).json({ error: String(error) })
}

export const getRequestLanguage = (req) => {
	const languages = getEnabledLanguages()
	const language = req.headers["x-language"]
	if (typeof language === "undefined") {
		return getDefaultLanguage()
	}

	if (!languages.includes(language)) {
		throw new Error("Wrong language header")
	}

	return language
}
