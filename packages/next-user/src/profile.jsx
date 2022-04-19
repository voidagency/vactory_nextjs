import React from "react"
import { useI18n } from "@vactory/next/i18n"
import { useForm } from "react-hook-form"

const ProfilePage = ({ node }) => {
	const { t } = useI18n()
	const { csrfToken } = node
	const { register, handleSubmit } = useForm()

	const onSubmit = async (input) => {
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

				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						{t("webform:Submit")}
					</button>
				</div>
			</form>
		</div>
	)
}

export default ProfilePage
