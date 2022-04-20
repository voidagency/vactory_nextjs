import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/router"
import { getSession } from "next-auth/react"

const EditProfilePage = ({ node, user, accessToken }) => {
	const currentUser = user
	const router = useRouter()
	const locale = router.locale
	const [loading, setLoading] = useState(false)
	const {
		register,
		handleSubmit,
		setError,
		setValue,
		clearErrors,
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
		console.log(input)
	}

	const fileUploadHandler = (e) => {
		const file = e.target.files[0]
		const filename = file?.name
		if (!filename || filename.length <= 0) {
			return
		}
		const reader = new FileReader()
		reader.readAsArrayBuffer(file)
		reader.onabort = () => console.log("file reading was aborted")
		reader.onerror = () => console.log("file reading has failed")

		reader.onload = () => {
			const binaryFile = reader.result
			axios
				.post(
					`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${locale}/api/user/user/${currentUser.uuid}/user_picture`,
					binaryFile,
					{
						headers: {
							"Content-Type": "application/octet-stream",
							"Content-Disposition": 'file; filename="' + filename + '"',
							Accept: "application/vnd.api+json",
							Authorization: `Bearer ${accessToken}`,
						},
					}
				)
				.then(({ data }) => {
					console.log(data.data.attributes.uri.value._default)
					// Now we cause the jwt callback handler to retrieve the new user data and save it in the session
					fetch("/api/auth/session?update", {
						method: "GET",
						credentials: "include",
					}).then(() => {
						const event = new Event("visibilitychange")
						document.dispatchEvent(event)
					})
				})
		}
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
							<input
								type="text"
								name="first-name"
								id="first-name"
								autoComplete="given-name"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								{...register("first_name", { required: "First name is required" })}
							/>
							{errors.first_name && (
								<p className="text-red text-xs italic">{errors.first_name.message}</p>
							)}
						</div>

						<div className="col-span-6 sm:col-span-3">
							<label
								htmlFor="last-name"
								className="block text-sm font-medium text-gray-700"
							>
								Last name
							</label>
							<input
								type="text"
								name="last-name"
								id="last-name"
								autoComplete="family-name"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								{...register("last_name", { required: "Last name is required" })}
							/>
							{errors.last_name && (
								<p className="text-red text-xs italic">{errors.last_name.message}</p>
							)}
						</div>

						<div className="col-span-6 sm:col-span-4">
							<label
								htmlFor="email-address"
								className="block text-sm font-medium text-gray-700"
							>
								Email address
							</label>
							<input
								type="text"
								name="email-address"
								id="email-address"
								autoComplete="email"
								{...register("email", { required: "Email is required" })}
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							/>
							{errors.email && (
								<p className="text-red text-xs italic">{errors.email.message}</p>
							)}
						</div>

						<div className="col-span-3">
							<label className="block text-sm font-medium text-gray-700">Photo</label>
							<div className="mt-1 flex items-center">
								<span className="inline-block bg-gray-100 rounded-full overflow-hidden h-12 w-12">
									{currentUser?.avatar ? (
										<Image alt="Me" src={currentUser.avatar} width={48} height={48} />
									) : (
										<svg
											className="h-full w-full text-gray-300"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
										</svg>
									)}
								</span>
								<div className="ml-4 flex">
									<div className="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
										<label
											htmlFor="user-photo"
											className="relative text-sm font-medium text-blue-gray-900 pointer-events-none"
										>
											<span>Change</span>
											<span className="sr-only"> user photo</span>
										</label>
										<input
											id="user-photo"
											name="user-photo"
											type="file"
											onChange={fileUploadHandler}
											className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
										/>
									</div>
									<button
										type="button"
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

export default EditProfilePage
