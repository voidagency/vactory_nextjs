import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useI18n } from "@vactory/next/i18n"
import { useRouter } from "next/router"
import { useUpdateUserSession } from "@vactory/next-user"
import { drupal } from "@vactory/next/api/drupal"
import { Input } from "@vactory/ui/input"
import { Button } from "@vactory/ui/button"
import { Avatar } from "@vactory/ui/avatar"

const errorFields = {
	"/data/attributes/mail": "email",
	"/data/attributes/mail/value": "email",
	"/data/attributes/field_first_name": "first_name",
	"/data/attributes/field_last_name": "last_name",
}

const EditProfilePage = ({ user, accessToken }) => {
	const { t } = useI18n()
	const currentUser = user
	const router = useRouter()
	const locale = router.locale
	const [loading, setLoading] = useState(false)
	const [loadingPhoto, setLoadingPhoto] = useState(false)
	const updateUserSession = useUpdateUserSession()

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: currentUser?.email || "",
			first_name: currentUser?.first_name || "",
			last_name: currentUser?.last_name || "",
		},
	})

	const onSubmit = async (input) => {
		const Toast = (await import("cogo-toast")).default
		setLoading(true)
		const { hide } = Toast.loading("Loading...", { hideAfter: 0 })

		try {
			const response = await drupal.fetch(
				`/${locale}/api/user/user/${currentUser.uuid}`,
				{
					withAuth: () => `Bearer ${accessToken}`,
					method: "PATCH",
					body: JSON.stringify({
						data: {
							type: "user--user",
							id: currentUser.uuid,
							attributes: {
								mail: input.email,
								field_first_name: input.first_name,
								field_last_name: input.last_name,
							},
						},
					}),
				}
			)
			const data = await response.json()
			if (response.ok) {
				await updateUserSession()
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

	const fileUploadHandler = (e) => {
		const file = e.target.files[0]
		const filename = file?.name
		if (!filename || filename.length <= 0) {
			return
		}

		const blobData = new FormData()
		blobData.append("image", file)
		setLoadingPhoto(true)
		drupal
			.upload(
				{
					withAuth: () => `Bearer ${accessToken}`,
					method: "POST",
					headers: {
						"x-language": locale,
						"x-path": `/api/user/user/${currentUser.uuid}/user_picture`,
					},
				},
				filename,
				blobData
			)
			.then((response) => {
				return response.json()
			})
			.then(() => {
				updateUserSession()
					.finally(() => {
						setLoadingPhoto(false)
					})
					.catch((error) => {
						setLoadingPhoto(false)
						console.log(error)
					})
			})
			.catch((error) => {
				setLoadingPhoto(false)
				console.log(error)
			})
	}

	const removePicture = () => {
		setLoadingPhoto(true)

		drupal
			.fetch(`/${locale}/api/user/user/${currentUser.uuid}`, {
				withAuth: () => `Bearer ${accessToken}`,
				method: "PATCH",
				body: JSON.stringify({
					data: {
						type: "user--user",
						id: currentUser.uuid,
						relationships: {
							user_picture: {
								data: {},
							},
						},
					},
				}),
			})
			.then(() => {
				updateUserSession()
			})
			.catch((error) => {
				console.log(error)
			})
			.finally(() => {
				setLoadingPhoto(false)
			})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="shadow sm:rounded-md sm:overflow-hidden">
				<div className="bg-white py-6 px-4 space-y-6 sm:p-6">
					<div>
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Personal Information
						</h3>
						<p className="mt-1 text-sm text-gray-500">
							Use a permanent address where you can recieve mail.
						</p>
					</div>

					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-6 sm:col-span-3">
							<label
								htmlFor="first-name"
								className="block text-sm font-medium text-gray-700"
							>
								First name
							</label>
							<Input
								type="text"
								name="first-name"
								id="first-name"
								autoComplete="first-name"
								{...register("first_name", { required: "First name is required" })}
								hasError={errors.first_name}
								msgValidation={errors?.first_name?.message}
							/>
						</div>

						<div className="col-span-6 sm:col-span-3">
							<label
								htmlFor="last-name"
								className="block text-sm font-medium text-gray-700"
							>
								Last name
							</label>
							<Input
								type="text"
								name="last-name"
								id="last-name"
								autoComplete="last-name"
								{...register("last_name", { required: "Last name is required" })}
								hasError={errors.last_name}
								msgValidation={errors?.last_name?.message}
							/>
						</div>

						<div className="col-span-6 sm:col-span-4">
							<label
								htmlFor="email-address"
								className="block text-sm font-medium text-gray-700"
							>
								Email address
							</label>
							<Input
								type="text"
								name="email-address"
								id="email-address"
								autoComplete="email"
								{...register("email", { required: "Email is required" })}
								hasError={errors.email}
								msgValidation={errors?.email?.message}
							/>
						</div>

						<div className="col-span-3">
							<label className="block text-sm font-medium text-gray-700">Photo</label>
							<div className="mt-1 flex items-center">
								<span className="inline-block relative">
									{currentUser?.avatar ? (
										<Avatar src={currentUser.avatar} size="xxlarge" alt="Me" />
									) : (
										<Avatar variant="placeholder" size="xxlarge" />
									)}
								</span>
								<div className="ml-4 flex">
									<div className="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
										<label
											htmlFor="user-photo"
											className="relative text-sm font-medium text-blue-gray-900 pointer-events-none"
										>
											<span>{loadingPhoto ? "Uploading..." : "Change"}</span>
											<span className="sr-only"> user photo</span>
										</label>
										<input
											id="user-photo"
											name="user-photo"
											disabled={loadingPhoto}
											type="file"
											onChange={fileUploadHandler}
											className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
										/>
									</div>
									<button
										type="button"
										onClick={removePicture}
										className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-500"
									>
										Remove
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
					<Button type="submit" disabled={loading}>
						Save
					</Button>
				</div>
			</div>
		</form>
	)
}

export default EditProfilePage
