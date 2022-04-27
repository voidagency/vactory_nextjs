import React from "react"
import { useI18n } from "@vactory/next/i18n"
import { useSession, signIn } from "next-auth/react"
import { useSignUp } from "@vactory/next-user"
import { useRouter } from "next/router"
import { Icon } from "@vactory/ui/icon"
import { useForm } from "react-hook-form"
import Link from "next/link"

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
		setValue,
		clearErrors,
		formState: { errors },
	} = useForm()

	// When rendering client side don't display anything until loading is complete
	if (typeof window !== "undefined" && loading) return null

	if (session) {
		return <h1>Already logged in</h1>
	}

	const onSubmit = async (input) => {
		await signIn("credentials", input)
		console.log(input)
	}

	return (
		<div className="relative px-4 sm:px-6 lg:px-8">
			<div className="text-lg max-w-prose mx-auto">
				<h1>
					<span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
						{node.title}
					</span>
				</h1>
			</div>
			{isNewUser && <WelcomeNewUser />}
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
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						name="username"
						type="email"
						{...register("username", { required: "Email is required" })}
					/>
					{errors.username && (
						<p className="text-red text-xs italic">{errors.username.message}</p>
					)}
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="password"
					>
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						name="password"
						placeholder="******************"
						{...register("password", { required: "Password is required" })}
					/>
					{errors.password && (
						<p className="text-red text-xs italic">{errors.password.message}</p>
					)}
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						{t("webform:Submit")}
					</button>
					<Link href={`/${locale}/user/reset-password`} passHref>
						<a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
							Forgot Password?
						</a>
					</Link>

					<a
						className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						onClick={signUp}
						href="#"
					>
						Register
					</a>
				</div>
			</form>
			<hr />
			<div>
				{Object.values(providers).map((provider) => (
					<div key={provider.name}>
						<button onClick={() => signIn(provider.id)}>
							Sign in with {provider.name}
						</button>
					</div>
				))}
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

export default LoginPage
