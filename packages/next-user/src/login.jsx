import React from "react"
import { useI18n } from "@vactory/next"
import { useSession, signIn } from "next-auth/react"
import { useSignUp } from "@vactory/next-user"
import { useRouter } from "next/router"
import { Icon } from "@vactory/ui/icon"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { Input } from "@vactory/ui/input"
import { Button } from "@vactory/ui/button"

const LoginPage = ({ node }) => {
	const router = useRouter()
	const { locale } = router
	const { t } = useI18n()
	const { data: session, status } = useSession()
	const loading = status === "loading"
	const { csrfToken, providers } = node
	const signUp = useSignUp()
	const isNewUser = router?.query?.isNew || false
	const {
		register,
		handleSubmit,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm()

	// When rendering client side don't display anything until loading is complete
	if (typeof window !== "undefined" && loading) return null

	if (session) {
		return <h1>Already logged in</h1>
	}

	const onSubmit = async (input) => {
		clearErrors()
		const res = await signIn("credentials", { redirect: false, ...input })
		if (res?.error) {
			setError(
				"username",
				{
					type: "manual",
					message: "Nom d'utilisateur ou mot de passe non reconnu.",
				},
				{
					shouldFocus: true,
				}
			)
			setError("password", {
				type: "manual",
				message: "Nom d'utilisateur ou mot de passe non reconnu.",
			})
		}
		if (res.url) router.push(res.url)
	}

	return (
		<div className="bg-gray-50 min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					{t("Connectez-vous à votre compte")}
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					Ou{" "}
					<a
						className="font-medium text-indigo-600 hover:text-indigo-500"
						onClick={signUp}
						href="#"
					>
						{t("Créer un nouveau compte")}
					</a>
				</p>
			</div>

			{isNewUser && <WelcomeNewUser />}

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form
						method="post"
						// action="/api/auth/callback/credentials"
						onSubmit={handleSubmit(onSubmit)}
						className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
					>
						<input
							name="csrfToken"
							{...register("csrfToken")}
							type="hidden"
							defaultValue={csrfToken}
						/>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="username"
							>
								E-mail
							</label>
							<Input
								type="text"
								name="username"
								id="username"
								autoComplete="email"
								placeholder="Saisissez votre adresse mail."
								{...register("username", { required: "Email is required" })}
								hasError={errors.username}
								msgValidation={errors?.username?.message}
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="password"
							>
								Password
							</label>
							<Input
								type="password"
								name="password"
								id="password"
								placeholder="Saisissez votre mot de passe."
								{...register("password", { required: "Password is required" })}
								hasError={errors.password}
								msgValidation={errors?.password?.message}
							/>
						</div>
						<div className="flex items-center justify-between">
							<div className="text-sm">
								<Link href={`/${locale}/user/reset-password`} passHref>
									<a className="font-medium text-indigo-600 hover:text-indigo-500">
										Forgot your password?
									</a>
								</Link>
							</div>
							<div>
								<Button type="submit">{t("webform:Submit")}</Button>
							</div>
						</div>
					</form>
				</div>

				<div className="mt-6">
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300" />
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
						</div>
					</div>

					<div className="mt-6 grid grid-cols-3 gap-3">
						{Object.values(providers).map((provider) => (
							<div key={provider.id}>
								<a
									href="#"
									onClick={() => signIn(provider.id)}
									className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
								>
									<span className="sr-only">Sign in with {provider.name}</span>
									<KeyCloakIcon />
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const WelcomeNewUser = () => {
	const { t } = useI18n()
	return (
		<div className="rounded-md bg-green-50 p-4">
			<div className="flex">
				<div className="flex-shrink-0">
					<Icon id="check-circle" className="h-5 w-5 text-green-400" aria-hidden="true" />
				</div>
				<div className="ml-3">
					<p className="text-sm font-medium text-green-800">
						You have successfully signed up, please signin using the form below.
					</p>
				</div>
				<div className="ml-auto pl-3">
					<div className="-mx-1.5 -my-1.5">
						<button
							type="button"
							className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
						>
							<span className="sr-only">Dismiss</span>
							<Icon id="x" className="h-5 w-5" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

const KeyCloakIcon = (props) => (
	<svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
		<path d="M20 10a10 10 0 0 1-10 10A10 10 0 0 1 0 10a10 10 0 0 1 20 0z" />
		<path
			d="M15.355 7.725h-1.574a.083.083 0 0 1-.072-.041l-1.264-2.191a.087.087 0 0 0-.074-.041H7.215a.083.083 0 0 0-.072.041L5.829 7.766 4.563 9.957a.09.09 0 0 0 0 .084l1.266 2.191 1.313 2.275a.08.08 0 0 0 .072.041h5.158a.089.089 0 0 0 .074-.041l1.265-2.191a.08.08 0 0 1 .072-.041h1.574a.094.094 0 0 0 .094-.094V7.82a.099.099 0 0 0-.096-.096zm-6.029 4.591L8.93 13a.075.075 0 0 1-.025.025.079.079 0 0 1-.037.01h-.787a.069.069 0 0 1-.064-.039l-1.174-2.037-.115-.201-.422-.721a.051.051 0 0 1-.008-.035c0-.012.004-.025.01-.035l.424-.734 1.287-2.227a.079.079 0 0 1 .064-.039h.784c.014 0 .027.004.041.01a.06.06 0 0 1 .025.025l.396.688a.075.075 0 0 1-.004.074L8.054 9.967a.06.06 0 0 0-.008.031c0 .012.004.021.008.031l1.271 2.201a.079.079 0 0 1 0 .086zm3.947-2.279-.421.721-.115.201-1.174 2.037a.076.076 0 0 1-.064.039h-.787a.079.079 0 0 1-.037-.01.06.06 0 0 1-.025-.025l-.396-.684a.072.072 0 0 1-.002-.082l1.271-2.201a.06.06 0 0 0 .008-.031c0-.012-.004-.021-.008-.031l-1.271-2.203a.075.075 0 0 1-.004-.074l.396-.688a.075.075 0 0 1 .025-.025.07.07 0 0 1 .041-.01h.789c.027 0 .053.014.064.039l1.287 2.227.424.734c.006.012.01.023.01.035 0 .008-.004.02-.01.031z"
			style={{
				fill: "#fff",
			}}
		/>
	</svg>
)

export default LoginPage
