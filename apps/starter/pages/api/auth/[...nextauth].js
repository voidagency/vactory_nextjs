import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import KeycloakProvider from "next-auth/providers/keycloak"
import jwt_decode from "jwt-decode"

// @todo: refactor these two
const getDrupalUserinfo = async (token) => {
	return fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/userinfo`, {
		method: "get",
		headers: {
			Accept: "application/vnd.api+json",
			"Content-Type": "application/vnd.api+json",
			Authorization: "Bearer " + token,
		},
	})
}

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

export default NextAuth({
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
					const userResponse = await getDrupalUserinfo(data?.access_token)
					const profile = await userResponse.json()
					data.profile = profile

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
			// Forward profile for credentials provider
			if (user?.profile) {
				profile = user.profile
			}
			// Forward profile
			if (profile) {
				token.profile = profile
			}
			// Forward the access token
			if (user) {
				token.accessToken = user.access_token
			}
			if (account?.access_token) {
				token.accessToken = account.access_token
			}

			// Forward the provider type
			if (user) {
				token.provider = account.provider
			}

			return token
		},
		async session({ session, token }) {
			if (token?.accessToken) {
				session.accessToken = token.accessToken

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
