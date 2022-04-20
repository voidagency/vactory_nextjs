import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import KeycloakProvider from "next-auth/providers/keycloak"
import jwt_decode from "jwt-decode"
import Client from "ioredis"
import Redlock from "redlock"
import * as UrlParser from "url"

// See the ioredis and redlock docs for all the options
const redis = new Client({
	port: process.env.REDIS_PORT,
	host: process.env.REDIS_HOST,
	username: process.env.REDIS_USERNAME, // needs Redis >= 6
	password: process.env.REDIS_PASSWORD,
	db: 0, // Defaults to 0
})

const redlock = new Redlock([redis], {
	driftFactor: 0.01,
	retryCount: 10,
	retryDelay: 200,
	retryJitter: 200,
	automaticExtensionThreshold: 500,
})

const getDrupalUserinfoByProvider = async (token, provider) => {
	return fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/userinfo`, {
		method: "get",
		headers: {
			Accept: "application/vnd.api+json",
			"Content-Type": "application/vnd.api+json",
			"x-auth-provider": provider,
			Authorization: "Bearer " + token,
		},
	})
}

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessTokenForDrupal(token) {
	const formData = new URLSearchParams()
	formData.append("grant_type", "refresh_token")
	formData.append("client_id", process.env.OAUTH_CLIENT_ID)
	formData.append("client_secret", process.env.OAUTH_CLIENT_SECRET)
	formData.append("refresh_token", token.refreshToken)

	// Get access token from Drupal.
	const response = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`, {
		method: "POST",
		body: formData,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
	})

	const refreshedTokens = await response.json()

	if (!response.ok) {
		throw refreshedTokens
	}

	const decoded = jwt_decode(refreshedTokens.access_token)

	return {
		...token,
		profile: decoded.profile,
		accessToken: refreshedTokens.access_token,
		accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
		refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
	}
}

// @todo
async function refreshAccessToken(token) {
	return {
		...token,
		error: "RefreshAccessTokenError",
	}
}
export default async function handler(req, res) {
	return NextAuth(req, res, {
		pages: {
			signIn: "/user/login",
			// signOut: "/auth/signout",
			// error: "/auth/error", // Error code passed in query string as ?error=
			// verifyRequest: "/auth/verify-request", // (used for check email message)
			// newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
		},
		providers: [
			CredentialsProvider({
				name: "Credentials",
				credentials: {
					username: { label: "Username", type: "text", placeholder: "Username" },
					password: { label: "Password", type: "password" },
				},
				async authorize(credentials) {
					const formData = new URLSearchParams()
					formData.append("grant_type", "password")
					formData.append("client_id", process.env.OAUTH_CLIENT_ID)
					formData.append("client_secret", process.env.OAUTH_CLIENT_SECRET)
					formData.append("username", credentials.username)
					formData.append("password", credentials.password)

					// Get access token from Drupal.
					const response = await fetch(
						`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`,
						{
							method: "POST",
							body: formData,
							headers: {
								"Content-Type": "application/x-www-form-urlencoded",
							},
						}
					)

					const data = await response.json()
					if (response.ok && data?.access_token) {
						const decoded = jwt_decode(data.access_token)
						data.profile = decoded.profile
						return data
					}

					return null
				},
			}),
			CredentialsProvider({
				id: "one-time-login",
				name: "One-time-login",
				credentials: {
					uid: { label: "Uid", type: "text" },
					timestamp: { label: "Timestamp", type: "text" },
					hash: { label: "Hash", type: "text" },
				},
				async authorize(credentials) {
					const formData = new URLSearchParams()
					formData.append("client_id", process.env.OAUTH_CLIENT_ID)
					formData.append("client_secret", process.env.OAUTH_CLIENT_SECRET)
					formData.append("uid", credentials.uid)
					formData.append("timestamp", credentials.timestamp)
					formData.append("hash", credentials.hash)

					// Get access token from Drupal.
					const response = await fetch(
						`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/one-time-token`,
						{
							method: "POST",
							body: formData,
							headers: {
								"Content-Type": "application/x-www-form-urlencoded",
							},
						}
					)

					const data = await response.json()
					if (response.ok && data?.access_token) {
						const decoded = jwt_decode(data.access_token)
						data.profile = decoded.profile
						return data
					}

					return null
				},
			}),
			KeycloakProvider({
				clientId: process.env.KEYCLOAK_ID,
				clientSecret: process.env.KEYCLOAK_SECRET,
				issuer: process.env.KEYCLOAK_ISSUER,
				userinfo: {
					url: `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/userinfo`,
					async request(ctx) {
						let data = {}
						try {
							const response = await getDrupalUserinfoByProvider(
								ctx.tokens.access_token,
								ctx.provider.id
							)
							data = await response.json()
						} catch (err) {
							console.error(err)
						}
						return data
					},
				},
			}),
		],
		jwt: {
			signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
			encryption: true,
		},
		session: {
			jwt: true,
			maxAge: 30 * 24 * 60 * 60,
		},
		callbacks: {
			async jwt({ token, user, account, profile }) {
				// Initial login.
				if (user && account) {
					return {
						accessToken: user.access_token,
						refreshToken: user.refresh_token,
						accessTokenExpires: Date.now() + user.expires_in * 1000,
						provider: account.provider,
						profile: user.profile,
					}
				}

				// NB: we can update the session with this callback.
				// call /api/auth/session?update and that will invoke a reload of the user data from drupal.
				const forceUpdate = UrlParser.parse(req.url, true).query.update !== undefined

				// Return previous token if the access token has not expired yet.
				if (Date.now() < token.accessTokenExpires && !forceUpdate) {
					return token
				}

				// @todo: check for providers.
				// token.provider === "one-time-login" || token.provider === "credentials"

				// Refresh access token on expire.
				return await redlock.using(
					[token.profile, "jwt-refresh"],
					30 * 1000,
					async () => {
						console.log("lock & refresh")
						const redisToken = await redis.get(token.refreshToken)
						const oldToken = redisToken ? await JSON.parse(redisToken) : token
						const newToken = await refreshAccessTokenForDrupal(oldToken)
						await redis.set(token.refreshToken, await JSON.stringify(newToken), "ex", 300)
						return newToken
					}
				)
			},
			async session({ session, token }) {
				if (token?.accessToken) {
					session.accessToken = token.accessToken
					session.error = token.error

					// Decode token and pass info to session.
					// This data will be available client-side.
					const decoded = jwt_decode(token.accessToken)
					session.user.id = decoded.id
					session.user.email = decoded.email
					session.user.username = decoded.username
				}

				if (token?.profile) {
					session.user = { ...session.user, ...token.profile }
				}

				if (token?.provider) {
					session.provider = token.provider
				}
				return session
			},
		},
	})
}
