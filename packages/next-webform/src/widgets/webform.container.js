import React from "react"
import get from "lodash.get"
import { Wysiwyg } from "@vactory/next/wysiwyg"
import { Link } from "@vactory/ui/link"
import { Form, useWebform } from "@vactory/next-webform"

export const WebformWidgetContainer = ({ data }) => {
	const webform_id = get(data, "components.0.webform.id", null)
	let style = get(data, "components.0.webform.style", {})
	let buttons = get(data, "components.0.webform.buttons", {})
	// const component = get(data, 'components.0.component', null);
	const title = get(data, "extra_field.title", null)
	const description = get(data, "extra_field.intro.value.#text", null)
	const link = get(data, "extra_field.link.url", null)
	const link_label = get(data, "extra_field.link.title", null)
	const webform = useWebform(webform_id)

	if (style !== "") {
		style = JSON.parse(style)
	}

	if (buttons !== "") {
		buttons = JSON.parse(buttons)
	}

	return (
		<div className="my-10">
			<div className="text-center mb-12">
				{title && (
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
						{title}
					</h2>
				)}
				{description && (
					<div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
						<Wysiwyg html={description} />
					</div>
				)}
			</div>

			{webform?.elements && (
				<Form
					webformId={webform_id}
					schema={webform.elements}
					styles={style}
					buttons={buttons}
				/>
			)}

			{link && (
				<div className="flex justify-center mt-12">
					<Link
						href={link}
						className="inline-flex items-center border border-gray-300 shadow-sm px-6 py-3 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						{link_label}
					</Link>
				</div>
			)}
		</div>
	)
}

export default WebformWidgetContainer
