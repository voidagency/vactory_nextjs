export const inputFile = {
	default: {
		wrapper: "relative flex w-full border border-gray-200 hover:border-gray-300",
		inputWrapper: {
			full: "flex grow relative w-full focus-within:ring-1 focus-within:ring-yellow-400",
			right: "flex grow relative w-full focus-within:ring-1 focus-within:ring-yellow-400",
			left: "flex grow relative w-full focus-within:ring-1 focus-within:ring-yellow-400",
			inside:
				"flex grow relative w-full focus-within:ring-1 focus-within:ring-yellow-400",
		},
		label: "text-sm font-medium text-gray-700 pb-1",
		addonBefore: "bg-gray-200 bg-gray-200 flex items-center max-w-[30%]",
		addonAfter: "bg-gray-200 flex items-center max-w-[30%]",
		input:
			"appearance-none py-3 px-3 w-full placeholder-gray-500 outline-none grow border-none focus:ring-0",
		prefix: "pr-3",
		sufix: "pl-3",
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
		addonBefore: "bg-gray-200 rounded-l-lg bg-gray-200 flex items-center max-w-[30%]",
		addonAfter: "bg-gray-200 rounded-r-lg flex items-center max-w-[30%]",
		input:
			"appearance-none py-3 px-3 w-full placeholder-gray-500 outline-none grow rounded-md border-none focus:ring-0",
		prefix: "pr-3",
		sufix: "pl-3",
		errorMessage: "text-sm text-red-600 mt-1",
		hasError: "border-red-500 hover:border-red-600 focus-within:ring-red-400",
		description: "text-base text-gray-600 mt-1",
	},
}
