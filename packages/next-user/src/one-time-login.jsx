import React from "react"
import { useSession } from "next-auth/react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

const OneTimeLoginPage = () => {
	const router = useRouter()
	const { locale, query } = router
	const { status } = useSession()
	const loading = status === "loading"
	// When rendering client side don't display anything until loading is complete
	if (typeof window !== "undefined" && loading) return null

	const login = async () => {
		const data = await signIn("one-time-login", {
			redirect: false,
			uid: query.uid,
			timestamp: query.timestamp,
			hash: query.hash,
		})
		// @todo: handle failure
		if (data?.ok) {
			router.push(`/${locale}/user/profile-password`)
		}
	}

	return (
		<div className="relative px-4 sm:px-6 lg:px-8">
			<div className="text-lg max-w-prose mx-auto">
				<h1>
					<span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
						One Time Login
					</span>
				</h1>
			</div>

			<p>
				{
					"This is a one-time login for admin and will expire on sam, 04/23/2022 - 20:45. Click on this button to log in to the site and change your password. Cet identifiant ne peut être utilisé qu'une fois."
				}
			</p>

			<div className="flex items-center justify-between">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					onClick={login}
				>
					Se connecter
				</button>
			</div>
		</div>
	)
}

export default OneTimeLoginPage
