import { useRouter } from "next/router"
import { signOut } from "next-auth/react"

export const useSignIn = () => {
	const router = useRouter()
	const signIn = () => {
		router.push(
			`/${router.locale}/user/login?callbackUrl=${process.env.NEXT_PUBLIC_BASE_URL}/${router.locale}${router.asPath}`
		)
	}
	return signIn
}

export const useSignOut = () => {
	return signOut
}

export const useSignUp = () => {
	const router = useRouter()
	const signUp = () => {
		router.push(
			`/${router.locale}/user/register?callbackUrl=${process.env.NEXT_PUBLIC_BASE_URL}/${router.locale}${router.asPath}`
		)
	}
	return signUp
}

export const useCreateUser = () => {
	const router = useRouter()
	return async (body) =>
		fetch("/api/user/signup", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"x-language": router.locale,
			},
			body: JSON.stringify(body),
		})
}

export const useResetUserPassword = () => {
	const router = useRouter()
	return async (body) =>
		fetch("/api/user/reset-password", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"x-language": router.locale,
			},
			body: JSON.stringify(body),
		})
}

export const useUpdateUser = () => {
	const router = useRouter()
	return async (body) =>
		fetch("/api/user/update", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"x-language": router.locale,
			},
			body: JSON.stringify(body),
		})
}

export const useUpdateUserPicture = () => {
	const router = useRouter()
	return async (filename, binary) =>
		fetch("/api/user/update-picture", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Disposition": 'file; filename="' + filename + '"',
				// "Content-Type": "application/octet-stream",
				"x-language": router.locale,
			},
			body: binary,
		})
}

// Now we cause the jwt callback handler to retrieve the new user data and save it in the session
export const useUpdateUserSession = () => {
	return async () =>
		fetch("/api/auth/session?update", {
			method: "GET",
			credentials: "include",
		}).then(() => {
			const event = new Event("visibilitychange")
			document.dispatchEvent(event)
		})
}
