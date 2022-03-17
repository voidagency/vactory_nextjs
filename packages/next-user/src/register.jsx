import React from "react"
import { useI18n } from "@vactory/next/i18n"
import { useSession } from "next-auth/react"
import { useSignUp, useCreateUser } from "@vactory/next-user"
import { useForm } from "react-hook-form"

const RegisterPage = ({ node }) => {
	const { t } = useI18n()
	const { data: session, status } = useSession()
	const loading = status === "loading"
	const { csrfToken } = node
	const signUp = useSignUp()
	const createUser = useCreateUser()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	// When rendering client side don't display anything until loading is complete
	if (typeof window !== "undefined" && loading) return null

	if (session) {
		return <h1>Already logged in</h1>
	}

	const onSubmit = async (data) => {
		const res = await createUser(data)
		console.log(data)
		console.log(res)
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
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			>
				<input
					name="_csrf"
					{...register("_csrf")}
					type="hidden"
					defaultValue={csrfToken}
				/>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
						E-mail
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						name="email"
						type="text"
						placeholder="foo@bar.com"
						{...register("email", { required: true })}
					/>
					{errors.email && (
						<p className="text-red text-xs italic">Please choose an email.</p>
					)}
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
						Username
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						name="name"
						type="text"
						placeholder="Username"
						{...register("name", { required: true })}
					/>
					{errors.name && (
						<p className="text-red text-xs italic">Please choose a username.</p>
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
						{...register("password", { required: true })}
					/>
					{errors.password && (
						<p className="text-red text-xs italic">Please choose a password.</p>
					)}
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						{t("webform:Submit")}
					</button>
					<a
						className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						href="#"
					>
						Forgot Password?
					</a>
					<a
						className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						onClick={signUp}
						href="#"
					>
						Register
					</a>
				</div>
			</form>
		</div>
	)
}

export default RegisterPage
