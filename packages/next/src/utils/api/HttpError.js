/**
 * Error with HTTP status to be sent with that error. Used in `handleApiErrors`.
 */
export class HttpError extends Error {
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
