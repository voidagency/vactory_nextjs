import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useI18n } from "@vactory/next"
import { useRouter } from "next/router"
import { drupal } from "@vactory/next/lib"
import { signOut } from "next-auth/react"

const errorFields = {
	"/data/attributes/pass": "current_password",
}

const EditProfilePasswordPage = ({ user, accessToken }) => {
	const { t } = useI18n()
	const currentUser = user
	const router = useRouter()
	const locale = router.locale
	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		setError,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = async (input) => {
		const Toast = (await import("cogo-toast")).default
		setLoading(true)
		const { hide } = Toast.loading("Loading...", { hideAfter: 0 })

		try {
			// const response = await updateUser(input)
			const response = await drupal.fetch(
				`/${locale}/api/user/user/${currentUser.uuid}`,
				{
					withAuth: () => `Bearer ${accessToken}`,
					method: "PATCH",
					body: JSON.stringify({
						data: {
							id: currentUser.uuid,
							type: `user--user`,
							attributes: {
								pass: {
									value: input.new_password,
									existing: input.current_password,
								},
							},
						},
					}),
				}
			)
			const data = await response.json()
			if (response.ok) {
				await signOut({ callbackUrl: `/${locale}/user/login` })
			} else {
				const errors = data?.errors || []
				errors.forEach((item) => {
					const field = errorFields[item?.source?.pointer] || undefined
					if (field) {
						setError(field, {
							type: "manual",
							message: item.detail,
						})
					} else {
						console.warn(item)
					}
				})
			}
			setLoading(false)
			hide()
		} catch (err) {
			setLoading(false)
			hide()
			Toast.error(t("Une erreur s'est produite"))
			console.error(err)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="shadow sm:rounded-md sm:overflow-hidden">
				<div className="bg-white py-6 px-4 space-y-6 sm:p-6">
					<div>
						<h3 className="text-lg leading-6 font-medium text-gray-900">Password</h3>
						<p className="mt-1 text-sm text-gray-500">Update you password.</p>
					</div>

					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-6 sm:col-span-3">
							<label
								htmlFor="current-password"
								className="block text-sm font-medium text-gray-700"
							>
								Current Password
							</label>
							<input
								type="password"
								name="current-password"
								id="current-password"
								autoComplete="given-name"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								{...register("current_password", {
									required: "Current password is required",
								})}
							/>
							{errors.current_password && (
								<p className="text-red text-xs italic">
									{errors.current_password.message}
								</p>
							)}
						</div>
					</div>

					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-6 sm:col-span-3">
							<label
								htmlFor="new-password"
								className="block text-sm font-medium text-gray-700"
							>
								New Password
							</label>
							<input
								type="password"
								name="new-password"
								id="new-password"
								autoComplete="given-name"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								{...register("new_password", {
									required: "New password is required",
								})}
							/>
							{errors.new_password && (
								<p className="text-red text-xs italic">{errors.new_password.message}</p>
							)}
						</div>
					</div>

					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-6 sm:col-span-3">
							<label
								htmlFor="confirm-password"
								className="block text-sm font-medium text-gray-700"
							>
								Confirm Password
							</label>
							<input
								type="password"
								name="confirm-password"
								id="confirm-password"
								autoComplete="given-name"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								{...register("confirm_password", {
									required: "Confirm password is required",
									validate: (value) =>
										value === watch("new_password") || "Le mot de passe est invalide.",
								})}
							/>
							{errors.confirm_password && (
								<p className="text-red text-xs italic">
									{errors.confirm_password.message}
								</p>
							)}
						</div>
					</div>
				</div>
				<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
					<button
						type="submit"
						disabled={loading}
						className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Save
					</button>
				</div>
			</div>
		</form>
	)
}

export default EditProfilePasswordPage
