export const card = {
	default: {
		wrapper: "flex  flex-col shadow-lg bg-white overflow-hidden text-indigo-500",
		image: "flex flex-shrink-0",
		body: "px-5 py-5 ",
		tag: "text-xs mb-4 text-white",
		title:
			"block text-xl font-semibold text-gray-900 text-black group-hover:text-blue-1000 mb-10",
		excerpt: "mt-3 text-base text-gray-500 dark:text-gray-400",
		link: "text-indigo-500",
	},
	inline: {
		card: "flex flex-col-reverse shadow-lg overflow-hidden text-indigo-500",
		image: "flex-shrink-0",
		body: "px-5 py-5",
		tag: "text-xl font-bold text-indigo-600",
		title: "text-xl font-semibold text-gray-900 text-indigo-600",
		excerpt: "mt-3 text-base text-gray-500 dark:text-gray-400",
		link: "text-indigo-500 border border-indigo-500 border-solid",
	},
}
