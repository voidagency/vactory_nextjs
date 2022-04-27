import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useSignIn } from "@vactory/next-user"

const RefreshTokenHandler = () => {
	const { data: session } = useSession()
	const signIn = useSignIn()

	useEffect(() => {
		if (session?.error === "RefreshAccessTokenError") {
			signIn() // Force sign in to hopefully resolve error
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session])

	return null
}

export default RefreshTokenHandler
