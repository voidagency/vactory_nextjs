import React from "react"
import { useSession } from "next-auth/react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { Button } from "@vactory/ui/button"
import { useI18n } from "@vactory/next"
import * as dayjs from "dayjs"

const OneTimeLoginPage = () => {
	const { t } = useI18n()
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
		<div className="bg-gray-100">
			<div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto">
					<div className="bg-white shadow sm:rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<h3 className="text-lg leading-6 font-medium text-gray-900">
								{t("Connexion unique")}
							</h3>
							<div className="mt-2 sm:flex sm:items-start sm:justify-between">
								<div className="max-w-xl text-sm text-gray-500">
									<p>
										{t(
											"Il s'agit d'une connexion unique pour votre compte qui expirera le "
										)}{" "}
										<strong>
											{dayjs.unix(query.timestamp).format("DD/MM/YYYY - HH[h]mm")}
										</strong>
										.{" "}
										{t(
											"Cliquez sur ce bouton pour vous connecter au site et changer votre mot de passe. Cet identifiant ne peut être utilisé qu'une fois."
										)}
									</p>
								</div>
								<div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
									<Button onClick={login}>{t("Se connecter")}</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OneTimeLoginPage
