import React from "react"
import get from "lodash.get"
// import { Link, Wysiwyg, Tabs } from "@gatsby/ui"

const ParagraphsMultipleTab = ({ items, ...rest }) => {
	const { title = "", introduction = "", cta: action } = rest
	const description = get(introduction, "processed", null)

	const tabItems = items.map((item, index) => {
		return {
			key: get(item, "id", index),
			title: get(item, "_title", ""),
			content: get(item, "_widgets", ""),
		}
	})

	return (
		<div className="my-10">
			<div className="text-center">
				{title && (
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
						{title}
					</h2>
				)}
				{description && (
					<div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
						{/* <Wysiwyg html={description} /> */}
					</div>
				)}
			</div>
			<div className="mt-12 max-w-lg lg:max-w-none">
				{/* <Tabs
          items={tabItems.map(({ title, content: description }) => ({
            title,
            description,
          }))}
        /> */}
			</div>
			{action?.url && (
				<div className="flex justify-center mt-12">
					{/* <Link
            href={action.url}
            className="inline-flex items-center border border-gray-300 shadow-sm px-6 py-3 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {action.title}
          </Link> */}
				</div>
			)}
		</div>
	)
}

export default ParagraphsMultipleTab
