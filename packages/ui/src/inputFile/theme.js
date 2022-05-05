export const inputFile = {
	default: {
		wrapper: "relative flex w-full border border-gray-200 hover:border-gray-300 min-w-0",
		inputWrapper: {
			full: "flex grow relative w-full focus-within:ring-1 focus-within:ring-yellow-400 min-w-0",
			right:
				"flex grow relative w-full focus-within:ring-1 focus-within:ring-yellow-400 min-w-0",
			left: "flex grow relative w-full focus-within:ring-1 focus-within:ring-yellow-400 min-w-0",
			inside:
				"flex grow relative w-full focus-within:ring-1 focus-within:ring-yellow-400 min-w-0",
		},
		label: "text-sm font-medium text-gray-700 pb-1",
		file: "py-3 px-4 text-gray-400 truncate",
		addonBefore: "bg-gray-200 bg-gray-200 flex items-center max-w-[30%]",
		addonAfter: "bg-gray-200 flex items-center max-w-[30%]",
		prefix: "flex items-center pl-3",
		sufix: "flex items-center pr-3",
		errorMessage: "text-sm text-red-600 mt-1",
		hasError: "border-red-500 hover:border-red-600 focus-within:ring-red-400",
		description: "text-base text-gray-600 mt-1",
	},
	rounded: {
		wrapper:
			"relative flex w-full border border-gray-200 hover:border-gray-300 rounded-lg",
		inputWrapper: {
			full: "flex grow relative w-full focus-within:ring-1 focus-within:ring-yellow-400 rounded-lg",
			right:
				"flex grow relative w-full focus-within:ring-1 focus-within:ring-yellow-400 rounded-r-lg",
			left: "flex grow relative w-full focus-within:ring-1 focus-within:ring-yellow-400 rounded-l-lg",
			inside:
				"flex grow relative w-full focus-within:ring-1 focus-within:ring-yellow-400",
		},
		label: "text-sm font-medium text-gray-700 pb-1",
		file: "py-3 px-4 text-gray-400 truncate",
		addonBefore: "bg-gray-200 rounded-l-lg bg-gray-200 flex items-center max-w-[30%]",
		addonAfter: "bg-gray-200 rounded-r-lg flex items-center max-w-[30%]",
		prefix: "flex items-center pl-3",
		sufix: "flex items-center pr-3",
		errorMessage: "text-sm text-red-600 mt-1",
		hasError: "border-red-500 hover:border-red-600 focus-within:ring-red-400",
		description: "text-base text-gray-600 mt-1",
	},
}
