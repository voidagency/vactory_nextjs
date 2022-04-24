export const card = {
	default: {
		wrapper: "flex flex-col shadow-lg bg-white overflow-hidden text-indigo-500",
		image: "flex flex-shrink-0",
		body: "px-5 py-5 ",
		tag: "text-xs mb-4 text-white",
		title:
			"block text-sm font-semibold text-gray-900 text-black group-hover:text-blue-1000 mb-10",
		excerpt: "mt-3 text-base text-gray-500 dark:text-gray-400 ",
		link: "text-blue-1000 font-semibold ",
	},
	accordionCardInline: {
		wrapper:
			"flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden text-black lrt:text-left rtl:text-right",
		image: "w-full md:w-5/12 flex-shrink-0 mb-8 md:mb-0",
		body: "w-full md:w-7/12 md:pl-8 flex flex-col justify-between",
		tag: "text-sm font-medium text-indigo-600",
		title: "text-xl font-semibold text-gray-900 text-indigo-600 mb-3",
		excerpt: "text-lg text-gray-500 dark:text-gray-400",
		link: "text-primary my-8 text-blue-500 font-semibold uppercase",
	},
	accordionCardInlineReversed: {
		wrapper:
			"flex flex-col md:flex-row-reverse rounded-lg shadow-lg overflow-hidden text-black lrt:text-left rtl:text-right",
		image: "w-full md:w-5/12 h-full mb-8 md:mb-0",
		body: "pr-8 w-full md:w-7/12 flex flex-col justify-between",
		tag: "text-sm font-medium text-indigo-600",
		title: "text-3xl font-bold text-indigo-600 mb-4",
		excerpt: "text-base text-gray-500 text-lg dark:text-gray-400",
		link: "text-primary underline",
	},
	cardSlider: {
		wrapper:
			"flex flex-row h-80 rounded-lg shadow-lg overflow-hidden bg-white text-black lrt:text-left rtl:text-right",
		image: "flex-shrink-0 h-full w-1/3",
		body: "px-4 py-3 w-2/3 flex flex-col z-10",
		tag: "text-sm font-medium text-indigo-600",
		title: "text-xl font-semibold text-gray-900 mb-4 ",
		excerpt: "mt-3 text-base text-gray-500 dark:text-gray-400 mb-6",
		link: "text-primary ",
	},
	cardAppelOffre: {
		wrapper:
			"flex flex-col rounded-lg shadow-lg overflow-hidden text-black lrt:text-left rtl:text-right",
		image: "flex-shrink-0",
		body: "px-4 py-3",
		tag: "text-sm font-medium text-indigo-600",
		title: "text-xl font-semibold text-gray-900 text-black hover:text-indigo-600 mb-5",
		excerpt: "mt-3 text-base text-gray-500 dark:text-gray-400",
		link: "text-primary underline",
	},
}
