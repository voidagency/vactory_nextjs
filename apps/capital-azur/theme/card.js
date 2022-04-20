export const card = {
	default: {
		wrapper:
			"flex flex-col rounded-lg shadow-lg overflow-hidden text-black lrt:text-left rtl:text-right",
		image: "flex-shrink-0",
		body: "px-4 py-3",
		tag: "text-sm font-medium text-indigo-600",
		title: "text-xl font-semibold text-gray-900 text-black hover:text-indigo-600",
		excerpt: "mt-3 text-base text-gray-500 dark:text-gray-400",
		link: "text-primary underline",
	},
	inline: {
		wrapper:
			"flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden text-black lrt:text-left rtl:text-right",
		image: "w-full md:w-5/12 flex-shrink-0 mb-8 md:mb-0",
		body: "w-full md:w-7/12 md:pl-8 flex flex-col justify-between",
		tag: "text-sm font-medium text-indigo-600",
		title: "text-xl font-semibold text-gray-900 text-indigo-600 mb-3",
		excerpt: "text-lg text-gray-500 dark:text-gray-400",
		link: "text-primary my-8 text-blue-500 font-semibold uppercase",
	},
	inlineInversed: {
		wrapper:
			"flex flex-col md:flex-row-reverse rounded-lg shadow-lg overflow-hidden text-black lrt:text-left rtl:text-right",
		image: "w-full md:w-5/12 h-full mb-8 md:mb-0",
		body: "pr-8 w-full md:w-7/12 flex flex-col justify-between",
		tag: "text-sm font-medium text-indigo-600",
		title: "text-3xl font-bold text-indigo-600 mb-4",
		excerpt: "text-base text-gray-500 text-lg dark:text-gray-400",
		link: "text-primary underline",
	},
}
