export const checkbox = {
	wrapper: "flex items-center gap-x-2",
	default: {
		input:
			"form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white hovred:bg-yellow-500 checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer focus:ring-inset focus:ring-0 focus:ring-offset-0",
		label: "text-sm font-medium",
	},
	disabled: {
		input:
			"form-check-input appearance-none h-4 w-4 border border-gray-100 rounded-sm bg-white hover:bg-gray-300 checked:bg-gray-300 checked:border-gray-300 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-not-allowed focus:ring-inset focus:ring-0 focus:ring-offset-0",
		label: "text-sm font-medium text-gray-400",
	},
}
