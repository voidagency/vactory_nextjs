import { deserialise } from "kitsu-core"
import { getSession } from "next-auth/react"
import { logger as defaultLogger } from "./logger"
// import Router from "next/router"

// See https://jsonapi.org/format/#content-negotiation.
const DEFAULT_HEADERS = {
	"Content-Type": "application/vnd.api+json",
	Accept: "application/vnd.api+json",
}
const DEFAULT_WITH_AUTH = false

const DEFAULT_NEXT_API_PROXY = "/api/proxy"

export class DrupalClient {
	_headers
	_nextApiProxy
	withAuth
	cache
	logger
	accessToken
	debug = false

	constructor(options = {}) {
		const {
			nextApiProxy = DEFAULT_NEXT_API_PROXY,
			cache = null,
			debug = false,
			headers = DEFAULT_HEADERS,
			logger = defaultLogger,
			withAuth = DEFAULT_WITH_AUTH,
			auth,
			fetcher,
			accessToken,
		} = options

		this._nextApiProxy = nextApiProxy
		this.debug = debug
		this.fetcher = fetcher
		this.headers = headers
		this.logger = logger
		this.withAuth = withAuth
		this.cache = cache
		this.auth = auth
		this.accessToken = accessToken
		this._debug("Debug mode is on.")
	}

	set auth(auth) {
		this._auth = auth
	}

	/**
	 * @param {any} value
	 */
	set headers(value) {
		this._headers = value
	}

	async fetch(input, init) {
		init = {
			...init,
			headers: {
				...(typeof init.skipDefaultHeaders === "undefined" && { ...this._headers }),
				...init?.headers,
			},
		}

		if (init?.withAuth) {
			this._debug(`Using authenticated request.`)
			if (typeof init.withAuth === "function") {
				this._debug(`Using custom auth.`)
				init["headers"]["Authorization"] = init.withAuth()
			} else {
				// Otherwise use the built-in client_credentials grant.
				this._debug(`Using default auth (client_credentials).`)

				// Fetch an access token and add it to the request.
				// Access token can be fetched from cache or using a custom auth method.
				const token = await this.getAccessToken()
				if (token) {
					init["headers"]["Authorization"] = `Bearer ${token.access_token}`
				}
			}
		}

		if (this.fetcher) {
			this._debug(`Using custom fetcher.`)

			return await this.fetcher(input, init)
		}

		this._debug(`Using default fetch (polyfilled by Next.js).`)

		if (init?.noProxy) {
			return await fetch(input, init)
		}

		return await fetch(`${this._nextApiProxy}/${input}`, init)
	}

	async upload(init, filename, binary) {
		return this.fetch("/api/upload", {
			...init,
			noProxy: true,
			skipDefaultHeaders: true,
			headers: {
				...init?.headers,
				Accept: "application/json",
				"Content-Disposition": 'file; filename="' + filename + '"',
			},
			body: binary,
		})
	}

	async getAccessToken() {
		if (this.accessToken) {
			return this.accessToken
		}

		const session = await getSession()

		if (!session) {
			throw new Error("You must be sign in to view the protected content on this page.")
		}

		this.token = session.accessToken

		return session.accessToken
	}

	deserialize(body) {
		if (!body) return null

		return deserialise(body)
	}

	_debug(message) {
		!!this.debug && this.logger.debug(message)
	}
}
