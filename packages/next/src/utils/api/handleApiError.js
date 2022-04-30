import { HttpError } from "./HttpError"

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
