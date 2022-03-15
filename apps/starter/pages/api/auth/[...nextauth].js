import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import jwt_decode from "jwt-decode"

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
					return data
				}

				return null
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
		async jwt({ token, user }) {
			// Forward the access token
			if (user) {
				token.accessToken = user.access_token
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
			return session
		},
	},
})
