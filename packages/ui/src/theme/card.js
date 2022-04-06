export const card = {
	default: {
		card: "flex flex-col rounded-lg shadow-lg overflow-hidden text-black lrt:text-left rtl:text-right",
		image: "flex-shrink-0",
		body: "px-4 py-3",
		tag: "text-sm font-medium text-indigo-600",
		title: "text-xl font-semibold text-gray-900 text-indigo-600",
		excerpt: "mt-3 text-base text-gray-500 dark:text-gray-400",
		link: "text-primary underline",
	},
	inline: {
		card: "flex flex-row rounded-lg shadow-lg overflow-hidden text-black lrt:text-left rtl:text-right",
		image: "flex-shrink-0 w-1/3",
		body: "px-4 py-3 w-2/3 flex flex-col justify-center",
		tag: "text-sm font-medium text-indigo-600",
		title: "text-xl font-semibold text-gray-900 text-indigo-600",
		excerpt: "mt-3 text-base text-gray-500 dark:text-gray-400",
		link: "text-primary underline",
	},
	inlineInversed: {
		card: "flex flex-row-reverse rounded-lg shadow-lg overflow-hidden text-black lrt:text-left rtl:text-right",
		image: "w-1/2 h-full",
		body: "px-4 py-3 w-1/2 flex flex-col justify-center",
		tag: "text-sm font-medium text-indigo-600",
		title: "text-3xl font-bold text-indigo-600 mb-4",
		excerpt: "mt-3 text-base text-gray-500 dark:text-gray-400",
		link: "text-primary underline",
	},
}
