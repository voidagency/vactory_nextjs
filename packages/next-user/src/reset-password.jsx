import React, { useState } from "react"
import { useI18n } from "@vactory/next/i18n"
import { useSession } from "next-auth/react"
import { useResetUserPassword } from "@vactory/next-user"
import { useForm } from "react-hook-form"
import dynamic from "next/dynamic"

const ReCaptcha = dynamic(() => import("react-google-recaptcha"), {
	ssr: false,
})

const Modal = dynamic(() => import("./modal.jsx"), {
	ssr: false,
})

const ResetPasswordPage = ({ node }) => {
	const { t } = useI18n()
	const { data: session, status } = useSession()
	const userLoading = status === "loading"
	const [loading, setLoading] = useState(false)
	const [isModalOpen, setModalOpen] = useState(false)

	const { csrfToken } = node
	const recaptchaRef = React.createRef()
	const resetUserPassword = useResetUserPassword()
	const {
		register,
		handleSubmit,
		setValue,
		clearErrors,
		setError,
		formState: { errors },
	} = useForm()

	// When rendering client side don't display anything until loading is complete
	if (typeof window !== "undefined" && userLoading) return null

	if (session) {
		return <h1>Already logged in</h1>
	}

	const onSubmit = async (data) => {
		const Toast = (await import("cogo-toast")).default
		setLoading(true)
		const { hide } = Toast.loading("Loading...", { hideAfter: 0 })
		try {
			const res = await resetUserPassword(data)
			setLoading(false)
			hide()
			setModalOpen(true)
			// recaptchaRef.current.reset()
			console.log(data)
			console.log(res)
		} catch (err) {
			hide()
			Toast.error(t("Une erreur s'est produite"))
			console.error(err)
		}
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
				<div className="relative my-4 flex flex-col items-end">
					<input
						type="hidden"
						name="recaptchaResponse"
						{...register("recaptchaResponse", { required: "Robot check required" })}
					/>
					<ReCaptcha
						sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
						hl={"fr"}
						ref={recaptchaRef}
						onChange={(val) => {
							setValue("recaptchaResponse", val)
							clearErrors("recaptchaResponse")
						}}
						onExpired={() => {
							setValue("recaptchaResponse", null)
							setError("recaptchaResponse", {
								type: "manual",
								message: "Recaptcha Expired!",
							})
						}}
						onErrored={() => {
							setError("recaptchaResponse", {
								type: "manual",
								message: "Recaptcha Error!",
							})
						}}
					/>
					{errors.recaptchaResponse && (
						<p className="mt-2 text-sm text-red-600">
							{errors.recaptchaResponse.message}
						</p>
					)}
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
						disabled={loading}
					>
						{t("webform:Submit")}
					</button>
				</div>
			</form>
			<Modal open={isModalOpen} setOpen={setModalOpen} />
		</div>
	)
}

export default ResetPasswordPage
